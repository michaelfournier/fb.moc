<?php
$galleryvideo_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_videogallery',
	'title' => 'Galerie des vidéos',
  'types' => array('works'),
  'prefix' => '_pvideosgallery_',
  'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/repeating-videogallery.php',
	'init_action' => 'kia_metabox_init'
));  
global $galleryvideo_mb;
/* eof */