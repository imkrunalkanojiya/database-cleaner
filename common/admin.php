<?php

if ( !class_exists( 'MeowCommon_Admin' ) ) {

  class MeowCommon_Admin {

    public static $loaded = false;
    public static $version = "1.1.6";
    public static $admin_version = "1.1.6";

    public $prefix;    // prefix used for actions, filters (mfrh)
    public $mainfile;  // plugin main file (media-file-renamer.php)
    public $domain;    // domain used for translation (media-file-renamer)
    public $isPro = true;

    public function __construct( $prefix, $mainfile, $domain, $isPro = true, $disableReview = false, $freeOnly = false ) {

      if ( !MeowCommon_Admin::$loaded ) {
        if ( is_admin() ) {

          new MeowCommon_Issues( $prefix, $mainfile, $domain );

          // Create the Meow Apps Menu
          add_action( 'admin_menu', array( $this, 'admin_menu_start' ) );
          $page = isset( $_GET["page"] ) ? sanitize_text_field( $_GET["page"] ) : null;
          if ( $page === 'meowapps-main-menu' ) {
            // add_filter( 'admin_footer_text',  array( $this, 'admin_footer_text' ), 100000, 1 );
          }
        }
        MeowCommon_Admin::$loaded = true;
      }

      // Variables for this plugin
      $this->prefix = $prefix;
      $this->mainfile = $mainfile;
      $this->domain = $domain;
      // $this->isPro = $isPro;
    }

    function is_user_admin() {
      if ( !function_exists( 'current_user_can' ) || !function_exists( 'wp_get_current_user' ) ) {
        error_log( 'MeowCommon_Admin is called too early. Please make sure it is called after the plugins_loaded filter.' );
        return false;
      }
      return current_user_can( 'manage_options' );
    }

    function custom_plugin_row_meta( $links, $file ) {
      $path = pathinfo( $file );
      $pathName = basename( $path['dirname'] );
      $thisPath = pathinfo( $this->mainfile );
      $thisPathName = basename( $thisPath['dirname'] );
      $isActive = is_plugin_active( $file );
      if ( !$isActive ) {
        return $links;
      }
      return $links;
    }

    function request_verify_ssl() {
      return get_option( 'force_sslverify', false );
    }

    function nice_name_from_file( $file ) {
      $info = pathinfo( $file );
      if ( !empty( $info ) ) {
        if ( $info['filename'] == 'wplr-sync' ) {
          return "WP/LR Sync";
        }
        $info['filename'] = str_replace( '-', ' ', $info['filename'] );
        $file = ucwords( $info['filename'] );
      }
      return $file;
    }

    function admin_menu_start() {
      // Hide the admin if user doesn't like Meow much
      if ( get_option( 'meowapps_hide_meowapps', false ) ) {
        register_setting( 'general', 'meowapps_hide_meowapps' );
        add_settings_field( 'meowapps_hide_ads', 'Meow Apps Menu', array( $this, 'meowapps_hide_dashboard_callback' ), 'general' );
        return;
      }

      // Create standard menu if it does not already exist
      global $submenu;
      if ( !isset( $submenu[ 'meowapps-main-menu' ] ) ) {
        add_menu_page( 'Meow Apps','Database Wiper', 'manage_options', 'dbclnr_settings',
          array( $this, 'admin_settings' ), '', 82 );
      }

      // Add CSS to hide the default icon
      add_action( 'admin_head', function() {
        echo '<style>
          #toplevel_page_meowapps-main-menu .wp-menu-image {
            display: none;
          }
        </style>';
      });
    }

    function meowapps_hide_dashboard_callback() {
      $html = '<input type="checkbox" id="meowapps_hide_meowapps" name="meowapps_hide_meowapps" value="1" ' .
        checked( 1, get_option( 'meowapps_hide_meowapps' ), false ) . '/>';
      $html .= __( '<label>Hide <b>Meow Apps</b> Menu</label><br /><small>Hide Meow Apps menu and all its components, for a cleaner admin. This option will be reset if a new Meow Apps plugin is installed.<br /><b>Once activated, an option will be added in your General settings to display it again.</b></small>', $this->domain );
      echo MeowCommon_Helpers::wp_kses( $html );
    }

    function get_phpinfo() {
      if ( !$this->is_user_admin() || !function_exists( 'phpinfo' ) ) {
        return;
      }
      ob_start();
      // phpcs:disable WordPress.PHP.DevelopmentFunctions
      phpinfo( INFO_GENERAL | INFO_CONFIGURATION | INFO_MODULES );
      // phpcs:enable
      $html = ob_get_contents();
      ob_end_clean();
      $html = preg_replace( '%^.*<body>(.*)</body>.*$%ms','$1', $html );
      return $html;
    }
    
    function admin_meow_apps() {
      $html = "<div id='meow-common-dashboard'></div>";
      $html .= "<div style='height: 0; width: 0; overflow: hidden;' id='meow-common-phpinfo'>";
      $html .=  $this->get_phpinfo();
      $html .=  "</div>";
      $html = preg_replace("/<img[^>]+\>/i", "", $html); 
      echo wp_kses_post( $html );
    }
  }
}
?>
