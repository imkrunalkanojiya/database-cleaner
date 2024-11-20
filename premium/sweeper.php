<?php

class MeowPro_DBCLNR_Sweeper
{
  private $core = null;
  private $option = 'sweeper_tasks';
  private $statuses = [
    'waiting' => 'waiting',
    'running' => 'running',
    'paused' => 'paused',
    'completed' => 'completed',
  ];
  private $actions = [
    'reset' => 'reset',
    'count' => 'count',
    'delete' => 'delete',
  ];

  public function __construct($core)
  {
    $this->core = $core;
    add_filter( 'dbclnr_sweeper_run_next', [ $this, 'run_next' ], 10, 0 );
    add_filter( 'dbclnr_sweeper_run_reset', [ $this, 'run_reset' ], 10, 0 );
  }

  public function run_next()
  {
    try {
      $sweeper_tasks = $this->core->get_option($this->option);
      if (!$this->validate($sweeper_tasks['next_action'], $sweeper_tasks['status'])) {
        return [
          'success' => false,
          'message' => __('Running in the process. Please wait until it is finished.', 'database-cleaner'),
          'data' => $this->core->get_all_options(),
        ];
      }
      $next_sweeper_tasks = $this->perform_action($sweeper_tasks);
      $new_options = $this->update_option($next_sweeper_tasks);
      return ['success' => true, 'data' => $new_options];
    }
    catch (Exception $e) {
      $this->update_option($this->core->get_option($this->option));
      return [ 'success' => false, 'message' => $e->getMessage(), ];
    }
  }

  public function run_reset()
  {
    try {
      $next_sweeper_tasks = $this->reset();
      $new_options = $this->update_option($next_sweeper_tasks);
      return ['success' => true, 'data' => $new_options];
    }
    catch (Exception $e) {
      return [ 'success' => false, 'message' => $e->getMessage(), ];
    }
  }

  protected function validate($action, $status): bool
  {
    if (!in_array($action, array_values($this->actions))) {
      throw new Exception('Invalid action');
    }
    if (!in_array($status, array_values($this->statuses))) {
      throw new Exception('Invalid status');
    }

    // Reset
    if ($action === $this->actions['reset']) {
      if ($status !== $this->statuses['completed']) {
        return false;
      }
    }

    // Count
    if ($action === $this->actions['count']) {
      if ($status !== $this->statuses['waiting']) {
        return false;
      }
    }

    // Delete
    if ($action === $this->actions['delete']) {
      if ($status !== $this->statuses['waiting']) {
        return false;
      }
    }

    return true;
  }

  protected function perform_action($sweeper_tasks): array
  {
    $this->update_option(array_merge( $sweeper_tasks,
      ['status' => $this->statuses['running']],
    ));
    return $this->{$sweeper_tasks['next_action']}($sweeper_tasks);
  }

  protected function reset($sweeper_tasks = null): array
  {
    $auto_items = $this->get_auto_items();
    if (count($auto_items) === 0) {
      return [
        'items' => [],
        'next_item' => null,
        'next_action' => $this->actions['reset'],
        'status' => $this->statuses['completed'],
        'last_execution' => $this->get_last_execution(),
        'message' => 'No items to count and delete',
      ];
    }
    $items = array_fill_keys($auto_items, null);
    return [
      'items' => $items,
      'next_item' => $this->get_next_item(null, $items),
      'next_action' => $this->actions['count'],
      'status' => $this->statuses['waiting'],
      'last_execution' => $this->get_last_execution(),
    ];
  }
  protected function count($sweeper_tasks): array
  {
    $item = $sweeper_tasks['next_item'];
    $count = (int)$this->core->get_entry_count($item);
    $sweeper_tasks['items'][$item] = $count;
    $next_item = $this->get_next_item($sweeper_tasks['next_item'], $sweeper_tasks['items']);
    if ($next_item === false) {
      return array_merge(
        $sweeper_tasks,
        [
          'next_item' => $this->get_next_item(null, $sweeper_tasks['items'], true),
          'next_action' => $this->actions['delete'],
          'status' => $this->statuses['waiting'],
          'last_execution' => $this->get_last_execution(),
        ]
      );
    }
    return array_merge(
      $sweeper_tasks,
      [
        'next_item' => $next_item,
        'status' => $this->statuses['waiting'],
        'last_execution' => $this->get_last_execution(),
      ]
    );
  }
  protected function delete($sweeper_tasks): array
  {
    $next_item = null;
    $item = $sweeper_tasks['next_item'];

    if (!empty($item)) {
      $deleted_count = (int)$this->core->delete_entries($item);
      // Need to make sure there is actually something to delete, and that we don't go below 0.
      $new_count = $deleted_count > 0 ? max( (int)$sweeper_tasks['items'][$item] - $deleted_count, 0 ) : 0;
      $sweeper_tasks['items'][$item] = $new_count;
      if ( $sweeper_tasks['items'][$item] === 0 ) {
        $next_item = $this->get_next_item($sweeper_tasks['next_item'], $sweeper_tasks['items'], true);
      }
      else {
        $next_item = $sweeper_tasks['next_item'];
      }
    }
    else {
      $next_item = false;
    }

    if ($next_item === false) {
      return array_merge(
        $sweeper_tasks,
        [
          'next_item' => null,
          'next_action' => $this->actions['reset'],
          'status' => $this->statuses['completed'],
          'last_execution' => $this->get_last_execution(),
        ]
      );
    }
    return array_merge(
      $sweeper_tasks,
      [
        'next_item' => $next_item,
        'status' => $this->statuses['waiting'],
        'last_execution' => $this->get_last_execution(),
      ]
    );
  }

  protected function get_auto_items(): array
  {
    $list = [
      ...Meow_DBCLNR_Items::$POSTS,
      ...Meow_DBCLNR_Items::$POSTS_METADATA,
      ...Meow_DBCLNR_Items::$USERS,
      ...Meow_DBCLNR_Items::$COMMENTS,
      ...Meow_DBCLNR_Items::$TRANSIENTS
    ];

    $list_post_types = $this->core->get_post_types();
    foreach ($list_post_types as $post_type) {
      $list[] = [
        'item' => 'list_post_types_' . $post_type, 'name' => $post_type
      ];
    }
    $data = $this->core->add_clean_style_data($list);

    $auto_items = [];
    foreach ($data as $record) {
      if ($record['clean_style'] === 'auto') {
        $auto_items[] = $record;
      }
    }
    return array_column($auto_items, 'item');
  }

  /**
   * Get the next item from the given items array.
   * 
   * @param mixed $current_item The current item's key or null if no current item.
   * @param array $items An associative array of items.
   * @param bool $required_positive_count Whether to skip items with non-positive values.
   * 
   * @return string|false The key of the next item or false if not found.
   */
  protected function get_next_item($current_item, $items, $required_positive_count = false)
  {
    $keys = array_keys($items);
    $keys_length = count($keys);
    $current_index = $current_item === null ? -1 : array_search($current_item, $keys);
    if ($current_index === $keys_length - 1) {
      return false;
    }
    $next_index = $current_index + 1;
    if (!$required_positive_count) {
      return $keys[$next_index];
    }
    for ($i = $next_index; $i < $keys_length; $i++) {
      if ((int)$items[$keys[$i]] > 0) {
        return $keys[$i];
      }
    }
    return false;
  }

  protected function get_last_execution(): string
  {
    $now = new DateTime();
    return $now->format('Y-m-d H:i:s');
  }

  protected function update_option($new_sweeper_tasks): array
  {
    $all_options = $this->core->get_all_options();
    $new_options = array_merge(
      $all_options,
      [$this->option => $new_sweeper_tasks]
    );
    $fresh_options = $this->core->update_options($new_options);
    return $fresh_options;
  }
}
