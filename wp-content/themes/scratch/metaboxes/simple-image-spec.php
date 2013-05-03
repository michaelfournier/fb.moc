<?php
$solopic_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_solopic',
	'title' =>  __('Vignette personnalisée'),
	'types' => array('works'),
	'prefix' => '_psolopic_',
  'mode' => WPALCHEMY_MODE_EXTRACT,
	'template' => get_stylesheet_directory() . '/metaboxes/simple-image.php',
	'init_action' => 'solopic_init'
));

?>

