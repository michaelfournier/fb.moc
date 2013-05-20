<?php
$infostextes_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_infostextes',
	'title' => 'Informations sur le texte',
	'types' => array('texts'),
  'prefix' => '_pinfostextes_',
	'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/infostextes-meta.php',
));
global $infostextes_mb;