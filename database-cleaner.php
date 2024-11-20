<?php
/*
Plugin Name: Database Cleaner
Plugin URI: https://abc.com
Description: User-friendly tool to clean and optimize databases. Efficiently manages large databases, simplifying repair and ensuring peak performance.
Version: 4.0.0
Author: TechAlgoSpotlight
Author URI: https://techalgospotlight.com
Text Domain: database-cleaner
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

define( 'DBCLNR_VERSION', '4.0.0' );
define( 'DBCLNR_PREFIX', 'dbclnr' );
define( 'DBCLNR_DOMAIN', 'database-cleaner' );
define( 'DBCLNR_ENTRY', __FILE__ );
define( 'DBCLNR_PATH', dirname( __FILE__ ) );
define( 'DBCLNR_URL', plugin_dir_url( __FILE__ ) );
define( 'DBCLNR_ITEM_ID', 12345678 );

require_once( 'classes/init.php' );

?>
