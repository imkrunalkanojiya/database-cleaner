<?php

// phpcs:disable

if ( !class_exists( 'MeowCommonPro_Licenser' ) ) {

  class MeowCommonPro_Licenser {
    public $license = true;
    public $prefix;     // prefix used for actions, filters (mfrh)
    public $mainfile;   // plugin main file (media-file-renamer.php)
    public $domain;     // domain used for translation (media-file-renamer)
    public $item;       // name of the Pro plugin (Media File Renamer Pro))
    public $item_id;

    /**
     * Constructor for the MeowCommonPro_Licenser class.
     *
     * @param string $prefix The prefix used for actions and filters.
     * @param string $mainfile The plugin main file.
     * @param string $domain The domain used for translation.
     * @param string $item The name of the Pro plugin.
     * @param string $version The version of the plugin.
     */
    public function __construct( $prefix, $mainfile, $domain, $item ) {
      $this->prefix = $prefix;
      $this->mainfile = $mainfile;
      $this->domain = $domain;
      $this->item = $item;
      // $this->version = $version;
      $item_id_key = strtoupper( $this->prefix ) . '_ITEM_ID';

      // if ( defined( $item_id_key ) ) {
      //   $this->item_id = constant( $item_id_key );
      // }

      // if ( $this->is_registered() ) {
      //   add_filter( $this->prefix . '_meowapps_is_registered', array( $this, 'is_registered' ), 10 );
      // }

      // if ( MeowCommon_Helpers::is_rest() ) {
      //   new MeowCommonPro_Rest_License( $this );
      // }
      // else if ( is_admin() ) {
      //   $license_key = isset( $this->license['key'] ) ? $this->license['key'] : '';
      //   $updater_options = array(
      //     'version'     => $this->version,
      //     'license'     => $license_key,
      //     'wp_override' => true,
      //     'author'      => 'Jordy Meow',
      //     'url'         => strtolower( home_url() ),
      //     'beta'        => false
      //   );
      //   if ( $this->item_id ) {
      //     $updater_options['item_id'] = $this->item_id;
      //   }
      //   else {
      //     $updater_options['item_name'] = $this->item;
      //   }
        // $api_url = ( get_option( 'force_sslverify', false ) ? 'https' : 'http' ) . '://meowapps.com';
        // new MeowCommonPro_Updater( $api_url, $this->mainfile, $updater_options );
    }

    /**
     * Retry validation of the license.
     */
    function retry_validation() {
      if ( isset( $_POST[$this->prefix . '_pro_serial'] ) ) {
        $serial = sanitize_text_field( $_POST[$this->prefix . '_pro_serial'] );
        $this->validate_pro( $serial );
      }
    }

    /**
     * Check if the plugin is registered.
     *
     * @param bool $force Force re-check.
     * @return bool
     */
    function is_registered( $force = false ) {
      return true;
    }

    /**
     * Validate the Pro license.
     *
     * @param string $subscr_id The subscription ID.
     * @param bool $override Whether to override existing validation.
     * @return bool
     */
    function validate_pro( $subscr_id, $override = false ) {
      return $this->is_registered( true );
    }
  }
}
?>
