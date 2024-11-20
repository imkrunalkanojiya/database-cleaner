<?php

class MeowPro_DBCLNR_Queries
{
	public static $QUERIES = [
		'posts_revision' => 'delete_posts_revision',
		'posts_auto_drafts' => 'delete_posts_auto_drafts',
		'posts_deleted_posts' => 'delete_posts_deleted_posts',
		'posts_metadata_orphaned_post_meta' => 'delete_posts_metadata_orphaned_post_meta',
		'posts_metadata_duplicated_post_meta' => 'delete_posts_metadata_duplicated_post_meta',
		'posts_metadata_oembed_caches_in_post_meta' => 'delete_posts_metadata_oembed_caches_in_post_meta',
		'posts_metadata_orphaned_term_meta' => 'delete_posts_metadata_orphaned_term_meta',
		'posts_metadata_duplicated_term_meta' => 'delete_posts_metadata_duplicated_term_meta',
		'posts_metadata_orphaned_term_relationship' => 'delete_posts_metadata_orphaned_term_relationship',
		'posts_metadata_unused_terms' => 'delete_posts_metadata_unused_terms',
		'users_orphaned_user_meta' => 'delete_users_orphaned_user_meta',
		'users_duplicated_user_meta' => 'delete_users_duplicated_user_meta',
		'comments_unapproved_comments' => 'delete_comments_unapproved_comments',
		'comments_spammed_comments' => 'delete_comments_spammed_comments',
		'comments_deleted_comments' => 'delete_comments_deleted_comments',
		'comments_orphaned_comments_meta' => 'delete_comments_orphaned_comments_meta',
		'comments_duplicated_comments_meta' => 'delete_comments_duplicated_comments_meta',
		'comments_pingbacks' => 'delete_comments_pingbacks',
		'options_expired_transients' => 'delete_options_expired_transients',
		'options_all_transients' => 'delete_options_all_transients',
	];

	/** ========================
	 * Delete queries
	 * ======================== */

	public static function get_bulk_delete_threshold()
	{
		$options = get_option( 'dbclnr_options', null );
		return $options['bulk_batch_size'] ?? 100;
	}

	public static function delete_posts_revision( $age_threshold )
	{
		$week_ago = new DateTime('-' . $age_threshold);
		$limit = self::get_bulk_delete_threshold();
		global $wpdb;
		$sql = $wpdb->prepare(
			"
			SELECT ID
			FROM   $wpdb->posts
			WHERE  post_modified < %s
			AND post_type = 'revision'
			LIMIT %d
			",
			$week_ago->format('Y-m-d H:i:s'), $limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_post( $result[ 'ID' ], true );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_auto_drafts( $age_threshold )
	{
		$week_ago = new DateTime('-' . $age_threshold);
		$limit = self::get_bulk_delete_threshold();
		global $wpdb;
		$sql = $wpdb->prepare(
			"
			SELECT ID
			FROM   $wpdb->posts
			WHERE  post_modified < %s
			AND post_status = 'auto-draft'
			LIMIT %d
			",
			$week_ago->format('Y-m-d H:i:s'), $limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_post( $result[ 'ID' ], true );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_deleted_posts( $age_threshold )
	{
		$week_ago = new DateTime('-' . $age_threshold);
		$limit = self::get_bulk_delete_threshold();
		global $wpdb;
		$sql = $wpdb->prepare(
			"
			SELECT ID
			FROM   $wpdb->posts
			WHERE post_modified < %s
			AND post_status = 'trash'
			LIMIT %d
			",
			$week_ago->format('Y-m-d H:i:s'), $limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_post( $result[ 'ID' ], true );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_metadata_orphaned_post_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT pm.meta_id
			FROM $wpdb->postmeta pm
			LEFT JOIN $wpdb->posts wp ON wp.ID = pm.post_id
			WHERE wp.ID IS NULL
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'post', $result[ 'meta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_metadata_duplicated_post_meta( $meta_ids )
	{
		$affected = 0;
		foreach ( $meta_ids as $meta_id ) {
			$result = delete_metadata_by_mid( 'post', $meta_id );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_metadata_oembed_caches_in_post_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT pm.meta_id
			FROM $wpdb->postmeta pm
			WHERE pm.meta_key LIKE '_oembed_%'
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'post', $result[ 'meta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_metadata_orphaned_term_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT tm.meta_id
			FROM $wpdb->termmeta tm
			LEFT JOIN $wpdb->terms t on t.term_id = tm.term_id
			WHERE t.term_id IS NULL
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'term', $result[ 'meta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_metadata_duplicated_term_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT tm1.meta_id
			FROM $wpdb->termmeta tm1
			WHERE tm1.meta_id NOT IN(
				SELECT *
				FROM (
					SELECT MAX(tm2.meta_id)
					FROM $wpdb->termmeta tm2
					GROUP BY tm2.term_id, tm2.meta_key
				) x
			)
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'term', $result[ 'meta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_metadata_orphaned_term_relationship()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT tr.object_id, p.taxonomy
			FROM $wpdb->term_relationships tr
			LEFT JOIN $wpdb->term_taxonomy p ON tr.term_taxonomy_id = p.term_taxonomy_id
			WHERE p.term_taxonomy_id IS NULL
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_object_term_relationships( $result[ 'object_id' ], $result[ 'taxonomy' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_posts_metadata_unused_terms()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT t.term_id, tt.taxonomy
			FROM $wpdb->terms t
			LEFT JOIN $wpdb->term_taxonomy tt ON tt.term_id = t.term_id
			WHERE tt.term_taxonomy_id IS NULL
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_term( $result[ 'term_id' ], $result[ 'taxonomy' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_users_orphaned_user_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT um.umeta_id
			FROM $wpdb->usermeta um
			LEFT JOIN $wpdb->users u ON u.ID = um.user_id
			WHERE u.ID IS NULL
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'user', $result[ 'umeta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_users_duplicated_user_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT um1.umeta_id
			FROM $wpdb->usermeta um1
			WHERE um1.umeta_id NOT IN(
				SELECT *
				FROM (
					SELECT MAX(um2.umeta_id)
					FROM $wpdb->usermeta um2
					GROUP BY um2.user_id, um2.meta_key
				) x
			)
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'user', $result[ 'umeta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_comments_unapproved_comments()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT comment_ID
			FROM $wpdb->comments
			WHERE comment_approved = '0'
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_comment( $result[ 'comment_ID' ], true );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_comments_spammed_comments()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT comment_ID
			FROM $wpdb->comments
			WHERE comment_approved = 'spam'
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_comment( $result[ 'comment_ID' ], true );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_comments_pingbacks()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT comment_ID
			FROM $wpdb->comments
			WHERE comment_type = 'pingback'
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_comment( $result[ 'comment_ID' ], true );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_comments_deleted_comments()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT comment_ID
			FROM $wpdb->comments
			WHERE comment_approved = 'trash'
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = wp_delete_comment( $result[ 'comment_ID' ], true );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_comments_orphaned_comments_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT cm.meta_id
			FROM $wpdb->commentmeta cm
			LEFT JOIN $wpdb->comments c ON c.comment_ID = cm.comment_id
			WHERE c.comment_ID IS NULL
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'comment', $result[ 'meta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_comments_duplicated_comments_meta()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT cm1.meta_id
			FROM $wpdb->commentmeta cm1
			WHERE cm1.meta_id NOT IN(
				SELECT *
				FROM (
					SELECT MAX(cm2.meta_id)
					FROM $wpdb->commentmeta cm2
					GROUP BY cm2.comment_id, cm2.meta_key
				) x
			)
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_metadata_by_mid( 'comment', $result[ 'meta_id' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_options_all_transients()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT REPLACE( option_name, '_transient_', '' ) AS option_name
			FROM $wpdb->options
			WHERE option_name LIKE '_transient_%'
			LIMIT %d
			",
			$limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_transient( $result[ 'option_name' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}

	public static function delete_options_expired_transients()
	{
		global $wpdb;
		$limit = self::get_bulk_delete_threshold();
		$sql = $wpdb->prepare(
			"
			SELECT REPLACE( option_name, '_transient_timeout_', '' ) AS option_name
			FROM $wpdb->options
			WHERE option_name LIKE '_transient_timeout_%'
				AND option_value <= %d
			LIMIT %d
			",
			time(), $limit
		);
		$results = $wpdb->get_results( $sql, ARRAY_A );
		$affected = 0;
		foreach ( $results as $result ) {
			$result = delete_transient( $result[ 'option_name' ] );
			if ( $result ) $affected++;
		}
		return $affected;
	}
}
