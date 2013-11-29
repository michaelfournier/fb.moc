<?php
$filespdf_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_filespdf',
	'title' =>  __('pdf à télécharger'),
	'types' => array('page'),
	'prefix' => '_pfilespdf_',
    'mode' => WPALCHEMY_MODE_EXTRACT,
    'include_post_id' => 501,
    'hide_editor' => TRUE,
	'template' => get_stylesheet_directory() . '/metaboxes/pdf-meta.php',
	'init_action' => 'kia_metabox_init'
));