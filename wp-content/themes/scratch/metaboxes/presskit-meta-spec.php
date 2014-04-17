<?php
$presskit_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_presskit',
	'title' =>  __('Press kit'),
	'types' => array('works'),
	'prefix' => '_ppresskit_',
    'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/presskit-meta.php'
));