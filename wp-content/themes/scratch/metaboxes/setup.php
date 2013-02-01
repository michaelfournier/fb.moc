<?php
include_once WP_CONTENT_DIR . '/wpalchemy/MetaBox.php';
include_once WP_CONTENT_DIR . '/wpalchemy/MediaAccess.php';
// global styles for the meta boxes
//if (is_admin()) wp_enqueue_style('wpalchemy-metabox', get_stylesheet_directory_uri() . '/metaboxes/meta.css');
// include css to help style our custom meta boxes
if (is_admin()) { wp_enqueue_style('wpalchemy-metabox', get_stylesheet_directory_uri() . '/metaboxes/meta.css');
								wp_enqueue_script('jquery');
								wp_enqueue_script('jquery-ui-core');
								wp_enqueue_script('jquery-ui-widget');
								wp_enqueue_script('jquery-ui-mouse');
								wp_enqueue_script('jquery-ui-sortable');
				}
/* eof */
$wp_media_access = new WPAlchemy_MediaAccess();
?>