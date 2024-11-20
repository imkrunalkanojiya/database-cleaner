<?php

class MeowPro_DBCLNR_Support_GeneratedOptions {

  // Rules
  // - Always an 'usedBy' (which is either the plugin name, or why it is used by)
  // - The 'slug' if it has to be checked against a particular slug of the currently ran plugins
  private $regexes = [
    'edd_sl_' => [
      'usedBy' => 'EDD (Update System)'
    ],
    'edd_api_' => [
      'usedBy' => 'EDD (Update System)'
    ],
    'shield_mod_config_' => [
      'slug' => 'icwp-wpsf',
      'usedBy' => 'Shield Security'
    ],
    'litespeed.conf.' => [
      'slug' => 'litespeed-cache',
      'usedBy' => 'LiteSpeed Cache'
    ]
  ];

  public function __construct() {
    add_filter( 'dbclnr_check_support_for_option', array( $this, 'check_support_for_option' ), 10, 3 );
	}

  function check_support_for_option( $status, $option, $active_plugins ) {
    foreach ( $this->regexes as $regex => $config ) {
      if ( substr( $option, 0, strlen( $regex ) ) === $regex ) {
        // If there is a slug, we should check if the plugin is active
        if ( isset( $config['slug'] ) ) {
          if ( in_array( $config['slug'], $active_plugins ) ) {
            return [ 'status' => 'ok', 'usedBy' => $config['usedBy'] ];
          }
          return [ 'status' => 'warn', 'usedBy' => $config['usedBy'] ];
        }
        // If no slug, it means this option is always used by something
        return [ 'status' => 'ok', 'usedBy' => $config['usedBy'] ];
      }
    }
    return $status;
  }
}
