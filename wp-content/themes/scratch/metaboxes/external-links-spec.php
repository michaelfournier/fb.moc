<?php
$extlink_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_extlink',
	'title' => 'Liens externes',
	'types' => array('post'),
	'template' => get_stylesheet_directory() . '/metaboxes/repeating-external-links.php',
));  
/* eof */