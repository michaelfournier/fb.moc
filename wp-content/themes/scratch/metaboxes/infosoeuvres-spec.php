<?php
$infosoeuvres_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_infosoeuvres',
	'title' => 'Informations sur l\'oeuvres',
	'types' => array('post'),
	'template' => get_stylesheet_directory() . '/metaboxes/infosoeuvres-meta.php',
));

/* eof */