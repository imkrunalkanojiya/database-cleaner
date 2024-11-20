<?php
class Meow_DBCLNR_Queries_Posts_Revision extends Meow_DBCLNR_Queries_Core
{
    private function get_threshold_timestamp( $age_threshold )
    {
        if ( $age_threshold === 0 ) {
            return 0;
        }
        return strtotime( '-' . $age_threshold );
    }

    public function generate_fake_data_query( $age_threshold = 0 )
    {
        $id = $this->generate_fake_post( $age_threshold );
        wp_save_post_revision( $id );
    }

    public function count_query( $age_threshold = '7 days' )
    {
        $threshold_timestamp = $this->get_threshold_timestamp( $age_threshold );

        $all_posts = get_posts( array( 
            'post_type' => 'any',
            'posts_per_page' => -1,
         ) );

        $revision_count = 0;
        foreach ( $all_posts as $post ) {
            $post_revisions = wp_get_post_revisions( $post->ID, array( 
                'posts_per_page' => -1,
             ) );

            foreach ( $post_revisions as $revision ) {
                if ( !$threshold_timestamp || strtotime( $revision->post_modified ) < $threshold_timestamp ) {
                    $revision_count++;
                }
            }
        }

        return $revision_count;
    }

    public function delete_query( $deep_deletions_enabled, $limit, $age_threshold = 0 )
    {
        if ( $deep_deletions_enabled ) {
            return MeowPro_DBCLNR_Queries::delete_posts_revision( $age_threshold );
        }

        $threshold_timestamp = $this->get_threshold_timestamp( $age_threshold );

        $all_posts = get_posts( array( 
            'post_type' => 'any',
            'posts_per_page' => -1,
         ) );

        $deleted_count = 0;
        foreach ( $all_posts as $post ) {
            if ( $deleted_count >= $limit ) {
                break;
            }
            $post_revisions = wp_get_post_revisions( $post->ID, array( 
                'posts_per_page' => -1,
             ) );
            foreach ( $post_revisions as $revision ) {
                if ( $deleted_count >= $limit ) {
                    break;
                }
                if ( !$threshold_timestamp || strtotime( $revision->post_modified ) < $threshold_timestamp ) {
                    $result = wp_delete_post_revision( $revision->ID );
                    if ( $result ) {
                        $deleted_count++;
                    }
                }
            }
        }

        return $deleted_count;
    }

    public function get_query( $offset, $limit, $age_threshold = 0 )
    {
        $threshold_timestamp = $this->get_threshold_timestamp( $age_threshold );

        $all_posts = get_posts( array( 
            'post_type' => 'any',
            'posts_per_page' => -1,
         ) );

        $revisions = array(  );
        foreach ( $all_posts as $post ) {
            $post_revisions = wp_get_post_revisions( $post->ID, array( 
                'posts_per_page' => -1,
             ) );
            foreach ( $post_revisions as $revision ) {
                if ( !$threshold_timestamp || strtotime( $revision->post_modified ) < $threshold_timestamp ) {
                    $revisions[] = $revision;
                }
            }
        }

        // Sort revisions by post_modified
        usort( $revisions, function ( $a, $b ) {
            return strtotime( $a->post_modified ) - strtotime( $b->post_modified );
        } );

        // Apply offset and limit
        $revisions = array_slice( $revisions, $offset, $limit );

        return $revisions;
    }
}