<?php
$filespdf_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_filespdf',
	'title' =>  __('pdf à télécharger'),
	'types' => array('page'),
	'prefix' => '_pfilespdf_',
    'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/pdf-meta.php',
	'init_action' => 'kia_metabox_init'
));