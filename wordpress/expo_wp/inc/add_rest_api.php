<?php
/*
 * https://developer.wordpress.org/reference/functions/register_rest_field/
 */
 add_action( 'rest_api_init', 'create_rest_api_fields' );

 function create_rest_api_fields() {

	 $posttypes = array( 'post', 'post-media', 'post-photography', 'post-projects' );

	 	foreach( $posttypes as $type){
			// register_rest_field ( 'name-of-post-type', 'name-of-field-to-return', array-of-callbacks-and-schema() )
    	register_rest_field( $type, 'meta_content', array(
      		'get_callback'    => function( $object ){
						$author = $object['author'];

			 			$list = array(
			 					"author" => get_the_author( $author ),
			 				 	"post_date" => get_the_date( 'F d, Y', null ),
                "categories" => get_the_category(),
                "tags" => get_the_tags(),
			 			);
			 			return $list;
			 		},

      ));
		}//foreach

		foreach( $posttypes as $type){
 			// register_rest_field ( 'name-of-post-type', 'name-of-field-to-return', array-of-callbacks-and-schema() )
    		register_rest_field( $type, 'featured_content', array(
    			'get_callback'    => add_api_featured_content,
        ));
 		}//foreach

 }//create_rest_api_fields




 function add_api_featured_content( $object ){
 	$id = $object['id'];

	$featured_video_link = array();

	$list = array();

	$list["thumbnail"] = array();
	$list["thumbnail"]["main"] = get_the_post_thumbnail_url();
	$list["thumbnail"]["sm"] = get_the_post_thumbnail_url( $id, 'expo-sm' );
	$list["thumbnail"]["md"] = get_the_post_thumbnail_url( $id, 'expo-md' );
	$list["thumbnail"]["xl"] = get_the_post_thumbnail_url( $id, 'expo-xl' );

	$list["video"] = array();


 	if( have_rows('post_content') ):

 			while ( have_rows('post_content') ) : the_row();

 					if( get_row_layout() == 'featured_video' ) {

						if( get_sub_field('video_embed') ) {

							$featured_video = array();
							$featured_video["link"] = get_sub_field('video_embed');

							if( get_sub_field('video_description') ) {
								$featured_video["description"] = get_sub_field('video_description');
							} else {
								$featured_video["description"] = null;
							}

							array_push( $list["video"], $featured_video );
						}//video_embed

 					}//featured_video

 			endwhile;

 	endif;

 	return $list;
 }
