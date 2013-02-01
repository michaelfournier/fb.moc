<?php
$extlink_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_extlinks',
	'title' => 'Liens externes',
	'types' => array('works'),
	'prefix' => '_pextlinks_',
	'template' => get_stylesheet_directory() . '/metaboxes/repeating-external-links.php',
));  
global $extlink_mb;

/* eof */