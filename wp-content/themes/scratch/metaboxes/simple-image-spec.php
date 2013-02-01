<?php
$solopic_mb = new WPAlchemy_MetaBox(array
(
	'id' => '_solopic',
	'title' =>  __('Thumbnail'),
	'types' => array('post'),
	'prefix' => '_psolopic_',
	'template' => get_stylesheet_directory() . '/metaboxes/simple-image.php',
	'init_action' => 'solopic_init'
));

function solopic_init(){
	// I prefer to enqueue the styles only on pages that are using the metaboxes
	wp_enqueue_style('wpalchemy-metabox', get_stylesheet_directory_uri() . '/metaboxes/meta.css');

}

///////////// ajax pour l'ajout de vignette dans la metabox ///
add_action('admin_head', 'my_action_javascript2');
// permet l'appel ajax des vignettes dans la metabox des références ///
add_action('wp_ajax_my_action_callback2', 'my_action_callback2'); 

function my_action_javascript2() { ?>
<script type="text/javascript">
      function send_myid(leid, leselect) {
      console.log(leselect);
      var data = {
        action: 'my_action_callback2',
        monid: leid,
        monselect: leselect
      };
      // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
      
      jQuery.post(ajaxurl, data, function(response) {
        // affiche la vignette //
        console.log(response);
        jQuery(response.selector).closest('.wpa_group, .mypic').find('.preview').html(response.image_html);
        // affiche le nom de l'image
        jQuery(response.selector).closest('.wpa_group, .mypic').find('#pic_name').html(response.file_name);
      });
  }
</script>
<?php
}

function my_action_callback2() {
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
?>

