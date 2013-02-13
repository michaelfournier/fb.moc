<?php
$infosoeuvres_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_infos',
	'title' => 'Informations sur l\'oeuvres',
	'types' => array('works'),
	'prefix' => '_pinfos_',
	'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/infosoeuvres-meta.php',
));

/* eof */