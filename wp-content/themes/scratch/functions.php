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

function is_login_page() {
    return in_array($GLOBALS['pagenow'], array('wp-login.php', 'wp-register.php'));
}
// on charge les scripts sauf pour l'admin et le login de l'admin//
if (!is_admin() && !is_login_page()) {    
	add_action('init', 'my_theme_scripts'); 
};


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
  include_once 'metaboxes/repeating-mediagallery-spec.php';
  include_once 'metaboxes/infosoeuvres-meta-spec.php';
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
  // si la var url custom_field est présente et qu'il ya des posts alors //
  if ($json_api->include_value('custom_fields') && $json_api->query->custom_fields && isset($response['posts'])) {

    foreach ($response['posts'] as $post) {
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
  } else if ($json_api->include_value('custom_fields') && $json_api->query->custom_fields && isset($response['post'])) {
    add_gallery($response['post']);
      $wp_custom_fields = get_post_custom($post->id);
      //foreach ($keys as $key) {
       if ($mylang == "fr") {
          if(isset($wp_custom_fields['_pinfos_description_fr'])) { $post->custom_fields->_pinfos_description = $wp_custom_fields['_pinfos_description_fr'];}
        } else {
            if(isset($wp_custom_fields["_pinfos_description_en"])) { $post->custom_fields->_pinfos_description = $wp_custom_fields["_pinfos_description_en"];
          } else {
             if(isset($wp_custom_fields["_pinfos_description_fr"])) { $post->custom_fields->_pinfos_description = $wp_custom_fields["_pinfos_description_fr"];}
          }
        }

      //}
  }

  return $response;
}


function add_gallery($post) {
  $gallery = get_post_meta($post->id, "_pmediagallery_blocspics", TRUE);
  $themepath = get_bloginfo('template_url');
  if(isset($gallery)) {
    foreach($gallery as $idpic) {
      $imagelarge =  wp_get_attachment_image_src($idpic['image'], 'large'); 
      $imagethumb = $themepath.'/timthumb.php?src='.$imagelarge[0].'&w=250&h=160&zc=1';
      $imagethumbmini = $themepath.'/timthumb.php?src='.$imagelarge[0].'&w=80&h=50&zc=1';    
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
      'legend' => $imagemetas->post_excerpt
      );

      $post->gallery[] = $tabgallery;
    }

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

?>