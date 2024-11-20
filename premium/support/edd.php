<?php

class MeowPro_DBCLNR_Support_EDD {

  public function __construct() {
		add_filter( 'dbclnr_table_to_plugin', array( $this, 'table_to_plugin' ), 10, 1 );
    add_filter( 'dbclnr_post_type_to_plugin', array( $this, 'post_type_to_plugin' ), 10, 1 );
	}

  function table_to_plugin( $tables ) {

    // Affiliate WP
    $support_tables = ['affiliate_wp_visits', 'affiliate_wp_referrals', 'affiliate_wp_affiliates',
      'affiliate_wp_customers', 'affiliate_wp_campaigns', 'affiliate_wp_sales', 'affiliate_wp_rest_consumers',
      'affiliate_wp_payouts', 'affiliate_wp_affiliatemeta', 'affiliate_wp_coupons', 'affiliate_wp_referralmeta',
      'affiliate_wp_customermeta', 'affiliate_wp_creatives' ];
    foreach ( $support_tables as $table ) {
      $tables[$table][] = [ 'plugin' => "AffiliateWP",  'slugs' => [ 'affiliate-wp' ] ];
    }

    // EDD
    $support_tables = ['edd_customers', 'edd_customermeta', 'edd_notifications', 'edd_license_log',
      'edd_log', 'edd_subscription_log'];
    foreach ( $support_tables as $table ) {
      $tables[$table] = isset( $tables[$table] ) ? $tables[$table] : [];
      $tables[$table][] = [ 'plugin' => "Easy Digital Downloads",  'slugs' => [ 'easy-digital-downloads' ] ];
    }

    // Subscriptions
    $support_tables = ['edd_licenses', 'edd_licensemeta', 'edd_license_activations'];
    foreach ( $support_tables as $table ) {
      $tables[$table] = isset( $tables[$table] ) ? $tables[$table] : [];
      $tables[$table][] = [ 'plugin' => "EDD - Software Licensing",  'slugs' => [ 'edd-software-licensing' ] ];
    }

    // Subscriptions
    $support_tables = ['edd_subscriptions'];
    foreach ( $support_tables as $table ) {
      $tables[$table] = isset( $tables[$table] ) ? $tables[$table] : [];
      $tables[$table][] = [ 'plugin' => "EDD - Recurring Payments",  'slugs' => [ 'edd-recurring' ] ];
    }

    // Commissions
    $support_tables = ['edd_commissions', 'edd_commissionmeta'];
    foreach ( $support_tables as $table ) {
      $tables[$table] = isset( $tables[$table] ) ? $tables[$table] : [];
      $tables[$table][] = [ 'plugin' => "EDD - Commissions",  'slugs' => [ 'edd-commissions' ] ];
    }

    // Mailchimp
    $support_tables = ['edd_mailchimp_lists', 'edd_mailchimp_downloads_lists', 'edd_mailchimp_interests',
      'edd_mailchimp_downloads_interests'];
    foreach ( $support_tables as $table ) {
      $tables[$table] = isset( $tables[$table] ) ? $tables[$table] : [];
      $tables[$table][] = [ 'plugin' => "EDD - Mailchimp",  'slugs' => [ 'edd-mail-chimp' ] ];
    }

    return $tables;
  }

  function post_type_to_plugin( $post_types ) {
    $edd_post_types = ['download', 'edd_discount', 'edd_payment', 'edd_receipt', 'eddcurrency', 'edd-checkout-fields', 'edd_log'];
    foreach ( $edd_post_types as $post_type ) {
      $post_types[$post_type] = isset( $post_types[$post_type] ) ? $post_types[$post_type] : [];
      $post_types[$post_type][] = [ 'plugin' => "Easy Digital Downloads", 'slugs' => [ 'easy-digital-downloads' ] ];
    }

    $edd_post_types = ['edd_license_log'];
    foreach ( $edd_post_types as $post_type ) {
      $post_types[$post_type] = isset( $post_types[$post_type] ) ? $post_types[$post_type] : [];
      $post_types[$post_type][] = [ 'plugin' => "EDD - Software Licensing", 'slugs' => [ 'edd-software-licensing' ] ];
    }

    $edd_post_types = ['edd_subscription_log'];
    foreach ( $edd_post_types as $post_type ) {
      $post_types[$post_type] = isset( $post_types[$post_type] ) ? $post_types[$post_type] : [];
      $post_types[$post_type][] = [ 'plugin' => "EDD - Recurring Payments", 'slugs' => [ 'edd-recurring' ] ];
    }

    return $post_types;
  }
}