<?php
// charge les scripts //
//http://shailan.com/2161/adding-javascript-to-your-theme-using-wp_enqueue_script/
function my_theme_scripts() {
  wp_enqueue_script( 'jquery');
  wp_enqueue_script( 'plugins', get_template_directory_uri() . '/js/plugins.js', 'jquery', false, false );
  wp_enqueue_script( 'my-scripts', get_template_directory_uri() . '/js/main.js', 'jquery', false, true );
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
  if ($json_api->include_value('custom_fields') && $json_api->query->custom_fields && $json_api->query->custom_fields && isset($response['posts'])) {
    $keys = explode(',', $json_api->query->custom_fields);
    foreach ($response['posts'] as $post) {
      //$post->test = get_post_meta($post->id, "_pinfos_description_fr", TRUE);
      $wp_custom_fields = get_post_custom($post->id);
      foreach ($keys as $key) {
        if (isset($wp_custom_fields[$key])) {
          $post->custom_fields->$key = $wp_custom_fields[$key];
        } else if ($mylang == "fr") {
          if(isset($wp_custom_fields[$key."_fr"])) $post->custom_fields->$key = $wp_custom_fields[$key."_fr"];
        } else {
            if(isset($wp_custom_fields[$key."_en"])) {
              $post->custom_fields->$key = $wp_custom_fields[$key."_en"];
          } else {
             if(isset($wp_custom_fields[$key."_fr"])) $post->custom_fields->$key = $wp_custom_fields[$key."_fr"];
          }
        }
      }
    }
  } else if ($json_api->include_value('custom_fields') && $json_api->query->custom_fields && isset($response['post'])) {
      $wp_custom_fields = get_post_custom($post->id);
      foreach ($keys as $key) {
        if (isset($wp_custom_fields[$key])) {
          $post->custom_fields->$key = $wp_custom_fields[$key];
        } else if ($mylang == "fr") {
          if(isset($wp_custom_fields[$key."_fr"])) $post->custom_fields->$key = $wp_custom_fields[$key."_fr"];
        } else {
            if(isset($wp_custom_fields[$key."_en"])) {
              $post->custom_fields->$key = $wp_custom_fields[$key."_en"];
          } else {
             if(isset($wp_custom_fields[$key."_fr"])) $post->custom_fields->$key = $wp_custom_fields[$key."_fr"];
          }
        }
      }
  }
  return $response;
}

?>