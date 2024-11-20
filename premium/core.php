<?php

class MeowPro_DBCLNR_Core {

	private $item = 'Database Cleaner';
	private $core = null;

	public function __construct( $core  ) {
		$this->core = $core;

		// Common behaviors, license, update system, etc.
		new MeowCommonPro_Licenser( DBCLNR_PREFIX, DBCLNR_ENTRY, DBCLNR_DOMAIN, $this->item );

		//new MeowApps_Admin_Pro( $prefix, $mainfile, $domain, $this->item, $version );
		new MeowPro_DBCLNR_Sweeper( $this->core );

		// Overrides for the Pro
		add_filter( 'dbclnr_plugin_title', array( $this, 'plugin_title' ), 10, 1 );
		add_action( 'dbclnr_support_db_loaded', array( $this, 'support_db_loaded' ) );
	}

	public function __destruct() {
		remove_filter( 'dbclnr_plugin_title', array( $this, 'plugin_title' ), 10 );
	}

	function plugin_title( $string ) {
		return $string . " (Pro)";
	}

	function support_db_loaded() {
		require_once( 'support/core.php' );
		new MeowPro_DBCLNR_Support_Core();
	}
}