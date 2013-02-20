<?php
/**
 *
 * @package WordPress
 * @subpackage scratch
 */
?>

<?
/*
function filter_fields() {
	$fields = "ID, post_name, post_type, post_parent, guid, post_title, post_status, post_content";
	return $fields;
}
add_filter('posts_fields', 'filter_fields');
*/
//global $gallery_mb;
//$args = array('post_type' => 'page', 'posts_per_page' => -1);
//$allposts = new WP_query($args);
?>
front page
<? get_header(); ?>
		<div id="container">
		</div><!-- #container -->
		<? wp_reset_query(); ?>
<?php get_footer(); ?>
