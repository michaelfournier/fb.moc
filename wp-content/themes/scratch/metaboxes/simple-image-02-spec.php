<?php
$solopic2_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_solopic',
	'title' =>  __('Image'),
	'types' => array('news'),
	'prefix' => '_psolopic_',
    'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/simple-image-02.php'
));