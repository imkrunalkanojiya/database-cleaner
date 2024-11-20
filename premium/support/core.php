<?php

class MeowPro_DBCLNR_Support_Core {
  protected $theme_slug = null;

  public function __construct() {

    // Auto Scan
    add_filter( 'dbclnr_table_to_plugin', array( $this, 'auto_table_to_plugin' ), 10, 1 );
    add_filter( 'dbclnr_post_type_to_plugin', array( $this, 'auto_post_type_to_plugin' ), 10, 1 );
    add_filter( 'dbclnr_option_to_plugin', array( $this, 'auto_option_to_plugin' ), 10, 1 );
    add_filter( 'dbclnr_cron_to_plugin', array( $this, 'auto_cron_to_plugin' ), 10, 1 );

    // Manual Input
    add_filter( 'dbclnr_table_to_plugin', array( $this, 'manual_table_to_plugin' ), 10, 1 );
    add_filter( 'dbclnr_post_type_to_plugin', array( $this, 'manual_post_type_to_plugin' ), 10, 1 );
    add_filter( 'dbclnr_option_to_plugin', array( $this, 'manual_option_to_plugin' ), 10, 1 );
    add_filter( 'dbclnr_cron_to_plugin', array( $this, 'manual_cron_to_plugin' ), 10, 1 );

    $this->load_plugins_support();
	}

  function load_plugins_support() {
    require_once( 'edd.php' );
    new MeowPro_DBCLNR_Support_EDD();
    require_once( 'generated_options.php' );
    new MeowPro_DBCLNR_Support_GeneratedOptions();
  }

/* #region WordPress Data */

  function auto_table_to_plugin( $tables ) {
    // That's not very optimized yet but for now that will be okay.
    $lines = file( dirname( __FILE__ ) . '/auto_tables.csv', FILE_IGNORE_NEW_LINES );
    foreach ( $lines as $line ) {
      if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
        list( $plugin, $table, $slugs ) = explode( '|', $line, 3 );
        if ( isset( $tables[$table] ) && $tables[$table] === 'WP' ) { continue; }
        $slugs_arr = explode( ',', $slugs, 8 );
        foreach ( $slugs_arr as $slug ) {
          $tables[$table] = isset( $tables[$table] ) ? $tables[$table] : [];
          $tables[$table][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ] ];
        }
      }
    }
    return $tables;
  }

  function auto_post_type_to_plugin( $post_types ) {
    // That's not very optimized yet but for now that will be okay.
    $lines = file( dirname( __FILE__ ) . '/auto_post_types.csv', FILE_IGNORE_NEW_LINES );
    foreach ( $lines as $line ) {
      if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
        list( $plugin, $post_type, $slugs ) = explode( '|', $line, 3 );
        if ( isset( $post_types[$post_type] ) && $post_types[$post_type] === 'WP' ) { continue; }
        $slugs_arr = explode( ',', $slugs, 8 );
        foreach ( $slugs_arr as $slug ) {
          $post_types[$post_type] = isset( $post_types[$post_type] ) ? $post_types[$post_type] : [];
          $post_types[$post_type][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ] ];
        }
      }
    }
    return $post_types;
  }

  function auto_option_to_plugin( $options ) {
    // That's not very optimized yet but for now that will be okay.
    $lines = file( dirname( __FILE__ ) . '/auto_options.csv', FILE_IGNORE_NEW_LINES );
    foreach ( $lines as $line ) {
      if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
        list( $plugin, $option, $slugs ) = explode( '|', $line, 3 );
        if ( isset( $options[$option] ) && $options[$option] === 'WP' ) { continue; }
        $slugs_arr = explode( ',', $slugs, 8 );
        foreach ( $slugs_arr as $slug ) {
          $options[$option] = isset( $options[$option] ) ? $options[$option] : [];
          $options[$option][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ] ];
        }
      }
    }
    return $options;
  }

  function auto_cron_to_plugin( $crons ) {
    // That's not very optimized yet but for now that will be okay.
    $lines = file( dirname( __FILE__ ) . '/auto_crons.csv', FILE_IGNORE_NEW_LINES );
    foreach ( $lines as $line ) {
      if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
        list( $plugin, $cron, $slugs ) = explode( '|', $line, 3 );
        if ( isset( $crons[$cron] ) && $crons[$cron] === 'WP' ) { continue; }
        $slugs_arr = explode( ',', $slugs, 8 );
        foreach ( $slugs_arr as $slug ) {
          $crons[$cron] = isset( $crons[$cron] ) ? $crons[$cron] : [];
          $crons[$cron][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ] ];
        }
      }
    }
    return $crons;
  }

/* #endregion */

/* #region Manual Input */

function manual_table_to_plugin( $tables ) {
  // That's not very optimized yet but for now that will be okay.

  $lines = file( dirname( __FILE__ ) . '/manual_tables.csv', FILE_IGNORE_NEW_LINES );
  foreach ( $lines as $line ) {
    if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
      list( $plugin, $table, $slugs ) = explode( '|', $line, 3 );
      if ( isset( $tables[$table] ) && $tables[$table] === 'WP' ) { continue; }
      $slugs_arr = explode( ',', $slugs, 8 );
      foreach ( $slugs_arr as $slug ) {
        $tables[$table] = isset( $tables[$table] ) ? $tables[$table] : [];
        $tables[$table][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ], 'native' => true ];
      }
    }
  }
  return $tables;
}

function manual_post_type_to_plugin( $post_types ) {
  // That's not very optimized yet but for now that will be okay.
  $lines = file( dirname( __FILE__ ) . '/manual_post_types.csv', FILE_IGNORE_NEW_LINES );
  foreach ( $lines as $line ) {
    if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
      list( $plugin, $post_type, $slugs ) = explode( '|', $line, 3 );
      if ( isset( $post_types[$post_type] ) && $post_types[$post_type] === 'WP' ) { continue; }
      $slugs_arr = explode( ',', $slugs, 8 );
      foreach ( $slugs_arr as $slug ) {
        $post_types[$post_type] = isset( $post_types[$post_type] ) ? $post_types[$post_type] : [];
        $post_types[$post_type][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ], 'native' => true ];
      }
    }
  }
  return $post_types;
}

function manual_option_to_plugin( $options ) {
  // That's not very optimized yet but for now that will be okay.
  $lines = file( dirname( __FILE__ ) . '/manual_options.csv', FILE_IGNORE_NEW_LINES );
  foreach ( $lines as $line ) {
    if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
      list( $plugin, $option, $slugs ) = explode( '|', $line, 3 );
      if ( isset( $options[$option] ) && $options[$option] === 'WP' ) { continue; }
      $slugs_arr = explode( ',', $slugs, 8 );
      foreach ( $slugs_arr as $slug ) {
        $options[$option] = isset( $options[$option] ) ? $options[$option] : [];
        $options[$option][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ], 'native' => true ];
      }
    }
  }
  return $options;
}

function manual_cron_to_plugin( $crons ) {
  // That's not very optimized yet but for now that will be okay.
  $lines = file( dirname( __FILE__ ) . '/manual_crons.csv', FILE_IGNORE_NEW_LINES );
  foreach ( $lines as $line ) {
    if ( !empty( $line ) && $line[0] !== '#' && strlen( $line ) > 8 ) {
      list( $plugin, $cron, $slugs ) = explode( '|', $line, 3 );
      if ( isset( $crons[$cron] ) && $crons[$cron] === 'WP' ) { continue; }
      $slugs_arr = explode( ',', $slugs, 8 );
      foreach ( $slugs_arr as $slug ) {
        $crons[$cron] = isset( $crons[$cron] ) ? $crons[$cron] : [];
        $crons[$cron][] = [ 'plugin' => $plugin, 'slugs' => [ $slug ], 'native' => true ];
      }
    }
  }
  return $crons;
}

/* endregion */


}