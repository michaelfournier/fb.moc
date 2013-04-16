<?php
include_once WP_CONTENT_DIR . '/wpalchemy/MetaBox.php';
include_once WP_CONTENT_DIR . '/wpalchemy/MediaAccess.php';
// global styles for the meta boxes
if (is_admin()) wp_enqueue_style('wpalchemy-metabox', get_stylesheet_directory_uri() . '/metaboxes/meta.css');
// include css to help style our custom meta boxes
function kia_metabox_init(){
	//make sure we enqueue some scripts just in case ( only needed for repeating metaboxes )
	wp_enqueue_script('jquery');
	wp_enqueue_script('jquery-ui-core');
	wp_enqueue_script('jquery-ui-widget');
	wp_enqueue_script('jquery-ui-mouse');
	wp_enqueue_script('jquery-ui-sortable');

	// special script for dealing with repeating textareas
	wp_register_script('kia-metabox',get_stylesheet_directory_uri() . '/metaboxes/kia-metabox.js',array('jquery','editor'), '1.0');

	// needs to run AFTER all the tinyMCE init scripts have printed since we're going to steal their settings
	add_action('after_wp_tiny_mce','kia_metabox_scripts',999);
}

function kia_metabox_scripts(){
	wp_print_scripts('kia-metabox');
}
/* eof */
$wp_media_access = new WPAlchemy_MediaAccess();
?>