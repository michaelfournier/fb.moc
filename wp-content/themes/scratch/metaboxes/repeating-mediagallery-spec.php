<?php
$gallery_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_mediagallery',
	'title' => "Galerie d'images",
	'types' => array('works', 'page'),
    'exclude_post_id' => array(357, 473),
	'prefix' => '_pmediagallery_',
	'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/repeating-mediagallery.php',
	'init_action' => 'kia_metabox_init'
));  
global $gallery_mb;
/* eof */