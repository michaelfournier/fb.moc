<?php
$gallerypage_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_mediagallery',
	'title' => "Galerie d'images",
	'types' => array('page'),
	'include_post_id' => 193,
	'prefix' => '_pmediagallery_',
	'hide_editor' => true,
	'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/repeating-mediagallery.php',
	'init_action' => 'kia_metabox_init'
));  
global $gallerypage_mb;