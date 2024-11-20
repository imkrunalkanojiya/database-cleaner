<?php

class MeowCommonPro_Rest_License
{
	private $licenser = null;
	private $namespace = null;

	public function __construct( &$licenser ) {

	}

	function rest_api_init() {
		register_rest_route( $this->namespace, '/get_license/', [
			'methods' => 'POST',
			'permission_callback' => function () { 
				return current_user_can( 'manage_options' );
			},
			'callback' => [ $this, 'get_license' ]
    ]);
    register_rest_route( $this->namespace, '/set_license/', [
			'methods' => 'POST',
			'permission_callback' => function () { 
				return current_user_can( 'manage_options' );
			},
			'callback' => [ $this, 'set_license' ]
		]);
	}

	// function get_license() {
    return new WP_REST_Response( [ 'success' => true, 'data' => []], 200 );
  }
  
  function set_license( $request ) {
		$params = $request->get_json_params();
    $serialKey = isset( $params['serialKey'] ) ? $params['serialKey'] : '';
		$override = isset( $params['override'] ) ? $params['override'] : false;
		$this->licenser->validate_pro( $serialKey, empty( $override ) ? false : true );
		return new WP_REST_Response( [ 'success' => true, 'data' => $this->licenser->license ], 200 );
	}
}

?>