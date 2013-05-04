<?php
// charge les scripts //
//http://shailan.com/2161/adding-javascript-to-your-theme-using-wp_enqueue_script/
function my_theme_scripts() {
 // wp_enqueue_script( 'jquery');
 // wp_enqueue_script( 'underscore');
  //wp_enqueue_script( 'backbone');
  //wp_enqueue_script( 'plugins', get_template_directory_uri() . '/app/plugins.js', 'jquery', false, true );
  wp_enqueue_script( 'yepnope', get_template_directory_uri() . '/app/libs/vendors/yepnope.js', 'jquery', false, true );
  wp_enqueue_script( 'require', get_template_directory_uri() . '/app/libs/vendors/require.js', 'jquery', false, true );  
  wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/main.js', 'backbone', false, true );
  //wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/models/home.js', null, false, true );
 // wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/models/post.js', 'backbone', false, true );
  // wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/views/MenuView.js', 'backbone', false, true );
  // wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/views/HomeView.js', 'backbone', false, true );
  // wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/views/WorkView.js', 'backbone', false, true );
  // wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/views/WorksList.js', 'backbone', false, true );
} 

// permet l'appel ajax des vignettes dans les metabox ///
add_action('wp_ajax_my_action_callback', 'my_action_callback', 99); 
function my_action_callback() {
  $file_id = intval( $_POST['monid'] );
  $file_name = get_the_title($file_id);
  $selector = $_POST['monselect'];

  $image_thumbnail = wp_get_attachment_image_src( $file_id, 'thumbnail', true );
  $image_html = "<img src='$image_thumbnail[0]' width='$image_thumbnail[1]' height='$image_thumbnail[2]' alt='' />";

  $pdflogo_html = "<img src='".get_template_directory_uri()."/img/file-pdf.png' width='50px' />";

  $results = array("file_id"=> $file_id, "file_name" => $file_name, "selector"=> $selector, "pdflogo_html" => $pdflogo_html, "image_html" => $image_html);

  header( "Content-Type: application/json" );
  echo json_encode($results);
  die(); // this is required to return a proper result
}

function is_login_page() {
    return in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php'));
}
// on charge les scripts sauf pour l'admin et le login de l'admin//
if (!is_admin() && !is_login_page()) {    
	add_action('init', 'my_theme_scripts'); 
};

function modify_post_mime_types( $post_mime_types ) {
  // select the mime type, here: 'application/pdf'
  // then we define an array with the label values
  $post_mime_types['application/pdf'] = array( __( 'PDFs' ), __( 'Manage PDFs' ), _n_noop( 'PDF <span class="count">(%s)</span>', 'PDFs <span class="count">(%s)</span>' ) );
  // then we return the $post_mime_types variable
  return $post_mime_types;
}

// Add Filter Hook
add_filter( 'post_mime_types', 'modify_post_mime_types' );


// desactive la taille d'image medium //
/* http://sumtips.com/2011/12/custom-image-sizes-in-wordpress.html */
function remove_wmp_image_sizes( $sizes) {
        unset( $sizes['medium']);
        unset( $sizes['large']);
        return $sizes;
}
//add_filter('intermediate_image_sizes_advanced', 'remove_wmp_image_sizes');


// supprime les bouton radio relatifs aux tailles d'image //
function custom_wmu_image_sizes($sizes) {
  unset( $sizes['medium']);
  unset( $sizes['large']);
	unset( $sizes['thumbnail']);
  return $sizes;
}
add_filter('image_size_names_choose', 'custom_wmu_image_sizes');


// ajout de metaboxes //
//if (is_admin()) {
  include_once 'metaboxes/setup.php';
  include_once 'metaboxes/simple-image-spec.php';
  include_once 'metaboxes/repeating-mediagallery-spec.php';
  include_once 'metaboxes/repeating-videogallery-spec.php';
  include_once 'metaboxes/infosoeuvres-meta-spec.php';
  include_once 'metaboxes/infostextes-meta-spec.php';
  include_once 'metaboxes/infosbio-meta-spec.php';
  include_once 'metaboxes/repeating-external-links-spec.php';

 // include_once 'metaboxes/datepicker-meta-spec.php';
 // include_once 'metaboxes/simple-image-spec.php';
//}

add_filter('json_api_encode', 'my_encode_meta');


function my_encode_meta($response) {
  global $json_api;
  $mylang = qtrans_getLanguage();
  // ajoute le paramètre lang au fichier json //
  $response['lang'] = qtrans_getLanguage();
  $mytype = $json_api->query->get('post_type');
  // si la var url custom_field est présente et qu'il ya des posts alors //
  if ($mytype == 'works' && $json_api->include_value('custom_fields') && $json_api->query->custom_fields && isset($response['posts'])) {
    foreach ($response['posts'] as $post) {
      // on écrit qq chose dans pinfos_description pour éviter les erreurs lors de l'appel sur le front //
      $post->custom_fields->_pinfos_description = "";
      add_gallery($post);
      //$post->test = get_post_meta($post->id, "_pinfos_description_fr", TRUE);
      $wp_custom_fields = get_post_custom($post->id);
      //foreach ($keys as $key) {
       if ($mylang == "fr") {
          if(isset($wp_custom_fields['_pinfos_description_fr'])) { 
            $post->custom_fields->_pinfos_description = $wp_custom_fields['_pinfos_description_fr'];
          };
        } else {
            if(isset($wp_custom_fields['_pinfos_description_en'])) {
              $post->custom_fields->_pinfos_description = $wp_custom_fields['_pinfos_description_en'];
            } else if(isset($wp_custom_fields['_pinfos_description_fr'])) {
              $post->custom_fields->_pinfos_description = $wp_custom_fields['_pinfos_description_fr'];
            };
        };
      //}
    };
  } else if ($mytype == 'works' && $json_api->include_value('custom_fields') && $json_api->query->custom_fields && isset($response['post'])) {
    add_gallery($response['post']);
    // on écrit qq chose dans pinfos_description pour éviter les erreurs lors de l'appel sur le front //
    $response['post']->custom_fields->_pinfos_description = "";
      $wp_custom_fields = get_post_custom($response['post']->id);
       if ($mylang == "fr") {
          if(isset($wp_custom_fields['_pinfos_description_fr'])) { 
            $response['post']->custom_fields->_pinfos_description = $wp_custom_fields['_pinfos_description_fr'];
          };
        } else {
            if(isset($wp_custom_fields["_pinfos_description_en"])) {
              $response['post']->custom_fields->_pinfos_description = $wp_custom_fields["_pinfos_description_en"];
          } else if(isset($wp_custom_fields["_pinfos_description_fr"])) {
            $response['post']->custom_fields->_pinfos_description = $wp_custom_fields["_pinfos_description_fr"];
          }
        }
  }
//add_myauthors($response['posts']);
  if(isset($response['posts'])) {
    if($mytype == 'texts' || $mytype == 'bio') {
      foreach ($response['posts'] as $post) {
        add_myauthors($post);
      }
    }
  } else if ($mytype == 'texts' && isset($response['post'])){
    if ($mytype == 'texts' || $mytype == 'bio') {
      add_myauthors($response['post']);
    }
  }

  return $response;
}


function add_gallery($post) {
  $mylang = qtrans_getLanguage();
  $gallerypics = get_post_meta($post->id, "_pmediagallery_blocspics", TRUE);
  $galleryvideos = get_post_meta($post->id, "_pvideosgallery_blocsvideos", TRUE);
  $customthumb = get_post_meta($post->id, "_psolopic_customthumb", TRUE);



  $themepath = get_bloginfo('template_url');



  if(isset($gallerypics)) {
    foreach($gallerypics as $idpic) {
      $imagelarge =  wp_get_attachment_image_src($idpic['image'], 'large'); 
      $imagethumb = $themepath.'/timthumb.php?src='.$imagelarge[0].'&w=200&h=120&zc=1';
      $imagethumb2 = wp_get_attachment_image_src($idpic['image'], 'thumbnail'); 
      $imagethumbmini = $themepath.'/timthumb.php?src='.$imagethumb2[0].'&w=80&h=50&zc=1';    
      $imagefull=  wp_get_attachment_image_src($idpic['image'], 'full');   
      $imagemetas = get_post($idpic['image']);
      $tabgallery = array(
      'thumbnail' => $imagethumb,
      'thumbnailmini' => $imagethumbmini,
      'large' =>   $imagelarge[0],   
      'full' =>  $imagefull[0],        
      'title' =>  $imagemetas->post_title,
      'description' =>  $imagemetas->post_content,
      'alt' =>  get_post_meta($idpic['image'], '_wp_attachment_image_alt', true),
      'legend' => $idpic['legende_'.$mylang]
      );

      $post->gallery[] = $tabgallery;
    }
  }


  ///
  if(isset($galleryvideos)) {
    foreach($galleryvideos as $id => $video) {
      $tabvideos = array('videourl' => $video['media'], 'legend' => $video['legende_'.$mylang]);
      $post->galleryvideos[] = $tabvideos;
    }   
  }
  ///

if(!empty($customthumb)) {
    $customthumburl = wp_get_attachment_image_src($customthumb, 'full');
   // print_r($customthumburl);
    $post->customthumb[] = $customthumburl[0];
  }
  

  return;
}


function add_myauthors($post) {
  $mylang = qtrans_getLanguage();
  $themepath = get_bloginfo('template_url');
  $tabauthors = get_post_meta($post->id, "_pinfostextes_blocsauteurs", TRUE);
  if(isset($tabauthors)) {
    foreach($tabauthors as $id => $author) {
      $allauthors = array('nom' => $author['nom'], 'prenom' => $author['prenom']);
      $post->auteurs[] = $allauthors;
    }
  }
  $connectedworks = new WP_Query( array(
    'connected_type' => 'texts_to_works',
    'connected_items' => get_queried_object(),
    'nopaging' => true,
  ) );
  if ( $connectedworks->have_posts() ) {
  while ( $connectedworks->have_posts() ) : $connectedworks->the_post();
    $gallerypics = get_post_meta(get_the_id(), "_pmediagallery_blocspics", TRUE);
    $imagelarge =  wp_get_attachment_image_src($gallerypics[0]['image'], 'large'); 
    $imagethumb = $themepath.'/timthumb.php?src='.$imagelarge[0].'&w=180&h=120&zc=1';  
    $tabworksconnected = array('title'=>get_the_title(), 'slug'=> $connectedworks->post->post_name, 'thumb'=> $imagethumb);
    $post->worksconnected[] = $tabworksconnected;
  endwhile;
  wp_reset_postdata();
  }

  return;  
}

// Add a custom controller
add_filter('json_api_controllers', 'add_my_controller');
function add_my_controller($controllers) {
  $controllers[] = 'Mikictrl';
  return $controllers;
}

// Register the source file for our controller
add_filter('json_api_mikictrl_controller_path', 'mikictrl_controller_path');
function mikictrl_controller_path($default_path) {
  return get_stylesheet_directory() . '/mikictrl.php';
}


// connecte les textes aux posts //
function my_connection_types() {
  p2p_register_connection_type( array(
    'name' => 'texts_to_works',
    'from' => 'texts',
    'to' => 'works'
  ) );
}
add_action( 'p2p_init', 'my_connection_types' );

?>