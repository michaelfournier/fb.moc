<?php
$gallery_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_mediagallery',
	'title' => 'Galerie des média',
  'types' => array('works', 'page'),
  'prefix' => '_pmediagallery_',
	'template' => get_stylesheet_directory() . '/metaboxes/repeating-mediagallery.php',
	'init_action' => 'kia_metabox_init'
));  
global $gallery_mb;


function kia_metabox_init(){
	// I prefer to enqueue the styles only on pages that are using the metaboxes
	wp_enqueue_style('wpalchemy-metabox', get_stylesheet_directory_uri() . '/metaboxes/meta.css');

	//make sure we enqueue some scripts just in case 
	/*
	wp_enqueue_script('jquery');
	wp_enqueue_script('jquery-ui-core');
	wp_enqueue_script('jquery-ui-widget');
	wp_enqueue_script('jquery-ui-mouse');
	wp_enqueue_script('jquery-ui-sortable');
	*/
	
	// special script for dealing with repeating meta
	wp_register_script('kia-metabox',get_stylesheet_directory_uri() . '/metaboxes/kia-metabox.js',array('jquery','editor'), '1.0');
	
	// needs to run AFTER all the tinyMCE init scripts have printed since we're going to steal their settings
	add_action('after_wp_tiny_mce','kia_metabox_scripts', 998);

} 

  ///////////// ajax pour l'ajout de vignette dans la metabox ///
  add_action('admin_head', 'my_action_javascript');
  // permet l'appel ajax des vignettes dans la metabox des références ///
  add_action('wp_ajax_my_action_callback', 'my_action_callback');

function my_action_javascript() { ?>
<script type="text/javascript">
      function send_myid(leid, leselect) {
      console.log(leselect);
      var data = {
        action: 'my_action_callback',
        monid: leid,
        monselect: leselect
      };
      // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
      
      jQuery.post(ajaxurl, data, function(response) {
        // affiche la vignette //
        console.log(response);
        jQuery(response.selector).closest('.wpa_group, .mypic').find('.preview').html(response.image_html);
        // affiche le nom de l'image
        jQuery(response.selector).closest('.wpa_group').find('#pic_name').html(response.file_name);
      });
  }
</script>
<?php
}

function my_action_callback() {
  $file_id = intval( $_POST['monid'] );
  $selector = $_POST['monselect'];
  $image_thumbnail = wp_get_attachment_image_src( $file_id, 'thumbnail', true );
  //$image_thumbnail = $image_thumbnail[0];
  $image_html = "<img src='$image_thumbnail[0]' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";
  $file_name = get_the_title($file_id);
  $results = array("file_id"=> $file_id, "file_name"=> $file_name, "image_html"=>$image_html, "selector"=> $selector) ;
  header( "Content-Type: application/json" );
  echo json_encode($results);
  die(); // this is required to return a proper result
}

function kia_metabox_scripts(){
	wp_print_scripts('kia-metabox');
}
/* eof */