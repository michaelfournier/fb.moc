<?php
$datepicker_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_datepick',
	'title' => 'Dates',
	'types' => array('post'), 
	'template' => get_stylesheet_directory() . '/metaboxes/datepicker-meta.php',
	'init_action' => 'datepicker_metabox_init',
	'mode' => WPALCHEMY_MODE_EXTRACT,
	'prefix' => '_pdatepick_',
	'hide_editor'	=> false 
));

function datepicker_metabox_init(){
	// I prefer to enqueue the styles only on pages that are using the metaboxes
	wp_enqueue_style('news-metabox', get_stylesheet_directory_uri() . '/metaboxes/datepicker/css/datepicker.css');
	
	// charge le script datepicker, la traduction française, et le script qui s'applique au layout //
	wp_enqueue_script('datepicker', get_stylesheet_directory_uri() . '/metaboxes/datepicker/js/bootstrap-datepicker.js', array('jquery'));
	wp_enqueue_script('datepicker-locale', get_stylesheet_directory_uri() . '/metaboxes/datepicker/js/locales/bootstrap-datepicker.fr.js', array('jquery', 'datepicker'));
	
	wp_enqueue_script('layout', get_stylesheet_directory_uri() . '/metaboxes/datepicker/js/layout.js', array('jquery'));

}

/* eof */