<?php
$infosbio_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_infostextes',
	'title' => 'Lier un pdf',
	'types' => array('bio'),
  'prefix' => '_pinfosbio_',
	'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/infosbio-meta.php',
));
global $infosbio_mb;