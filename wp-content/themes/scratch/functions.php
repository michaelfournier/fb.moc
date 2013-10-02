<?php

// on désenregistre la version par défaut de jquery , backbone , underscore pour des raisons comptabilité //

function deregister_default_lib() {
  if(!is_admin()) { 
       wp_deregister_script('jquery');
       wp_register_script('jquery', get_template_directory_uri() . '/app/libs/vendors/jquery-1.9.0.min.js');
       wp_deregister_script('underscore');
       wp_register_script('underscore', get_template_directory_uri() . '/app/libs/vendors/underscore.js');
       wp_deregister_script('backbone');
       wp_register_script('backbone', get_template_directory_uri() . '/app/libs/vendors/backbone.js');
  } 
}
add_action('init', 'deregister_default_lib');

// charge les scripts //
function my_scripts() {
  wp_enqueue_script( 'jquery');
  wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/app/libs/vendors/modernizr-2.6.2.min.js', 'jquery', false, false );
  wp_enqueue_script( 'plugins', get_template_directory_uri() . '/app/plugins.js', 'jquery', false, false );

  wp_enqueue_script( 'underscore', get_template_directory_uri() . '/app/libs/vendors/underscore.js', null, false, false);
  wp_enqueue_script( 'backbone', get_template_directory_uri() . '/app/libs/vendors/backbone.js', 'underscore', false, false);
  wp_enqueue_script( 'my-app', get_template_directory_uri() . '/app/app.js', 'backbone', false, true );
};

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
	add_action('wp_enqueue_scripts', 'my_scripts'); 
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
        //unset( $sizes['large']);
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
  //include_once 'metaboxes/repeating-external-links-spec.php';

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
      $imagefull=  wp_get_attachment_image_src($idpic['image'], 'full');  
      $imagethumb = $themepath.'/timthumb.php?src='.$imagefull[0].'&w=154&h=120&zc=1&q=100';
      $imagethumb2 = wp_get_attachment_image_src($idpic['image'], 'full'); 
      $imagethumbmini = $themepath.'/timthumb.php?src='.$imagethumb2[0].'&w=120&q=100';     
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
  if(isset($galleryvideos) && !empty($galleryvideos)) {
    foreach($galleryvideos as $id => $video) {
      $tabvideos = array('videourl' => $video['media'], 'legend' => $video['legende_'.$mylang]);
      $post->galleryvideos[] = $tabvideos;
    }   
  }
  ///

if(!empty($customthumb)) {
    $customthumburl = wp_get_attachment_image_src($customthumb, 'full');
    $post->customthumb[] = $customthumburl[0];
  }
  

  return;
}


function add_myauthors($post) {
  $mylang = qtrans_getLanguage();
  $themepath = get_bloginfo('template_url');
  $tabauthors = get_post_meta($post->id, "_pinfostextes_blocsauteurs", TRUE);
  if(isset($tabauthors) && !empty($tabauthors)) {
    foreach($tabauthors as $id => $author) {
      $allauthors = array('nom' => $author['nom'], 'prenom' => $author['prenom']);
      $post->auteurs[] = $allauthors;
    }
  }
  $connectedworks = new WP_Query( array(
    'connected_type' => 'texts_to_works',
    'connected_items' => get_queried_object(),
    'nopaging' => true,
    'connected_direction' => 'from'
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
    'to' => 'works',
    'reciprocal' => false,
    'can_create_post' => false,
    'admin_column' => "from",
    'admin_box' => array(
      'show' => 'from',
      'context' => 'side'
    )
  ) );
}
add_action( 'p2p_init', 'my_connection_types' );

if (is_admin()) { 
// initialise le wysiwig //
function custom_options( $opt ) {
  //format drop down list
  //bold,italic,strikethrough,|,bullist,numlist,blockquote,|,justifyleft,justifycenter,justifyright,|,link,unlink,wp_more,|,spellchecker,fullscreen,wp_adv
  $opt['theme_advanced_buttons1'] = 'formatselect, bold, italic, link, unlink, spellchecker, underline, pastetext, pasteword, removeformat, charmap, undo, redo';
  $opt['theme_advanced_buttons2'] = '';
  $opt['theme_advanced_blockformats'] = 'p,h3,h4';
  // From http://tinymce.moxiecode.com/examples/example_24.php
  $style_formats = array(
      array('title' => 'Bold text', 'inline' => 'b'),
      array('title' => 'Red text', 'inline' => 'span', 'styles' => array('color' => '#ff0000')),
      array('title' => 'Red header', 'block' => 'h1', 'styles' => array('color' => '#ff0000')),
      array('title' => 'Example 1', 'inline' => 'span', 'classes' => 'example1'),
      array('title' => 'Example 2', 'inline' => 'span', 'classes' => 'example2'),
      array('title' => 'Table styles'),
      array('title' => 'Table row 1', 'selector' => 'tr', 'classes' => 'tablerow1'),
  );
  // Before 3.1 you needed a special trick to send this array to the configuration.
  // See this post history for previous versions.
  $opt['style_formats'] = json_encode( $style_formats );
  return $opt;
}

add_filter('tiny_mce_before_init', 'custom_options');
// supprime des onglets dans la fenetre des media //
add_filter('media_upload_tabs', 'wpse_76095_filterMediaUploadTabs');
/**
* filter out unwanted media upload tabs
* @param array $tabs
* @return array
*/
function wpse_76095_filterMediaUploadTabs($tabs) {
  unset(
      $tabs['type_url'],  // no linking from external sites (no local image)
      $tabs['gallery'],   // no galleries
      $tabs['nextgen']    // no NextGEN galleries
  );   
  return $tabs;
};
//http://iancavalier.com/spiralnotepad/2012/07/21/disable-wordpress-autosave/
wp_deregister_script(‘autosave’);


if(!current_user_can('administrator')) {
// supprime la modification rapide des articles //
add_filter( 'post_row_actions', 'remove_row_actions', 10, 1 );
add_filter( 'page_row_actions', 'remove_row_actions', 10, 1 );
function remove_row_actions( $actions )
{
        unset( $actions['edit'] );
        unset( $actions['view'] );
        unset( $actions['trash'] );
        unset( $actions['inline hide-if-no-js'] );
    return $actions;
}


  //CSS Admin qui supprime des élements du back //  
  add_action('admin_head', 'css_editor');
  function css_editor() {
  $siteurl = get_bloginfo('template_url'); $url = $siteurl . '/editor-hide-style.css';
  echo "<link rel='stylesheet' type='text/css' href='$url' />\n";
  } 

  // supprime le bouton ajouter dans Accueil // 
  function hide_buttons()
  {
    global $post_type;
   // print_r($pagenow);
    if($post_type == 'page')
    {
      echo '<style>.tablenav, #edit-slug-box {display:none;}</style>';  
    }
  }
  add_action('admin_head','hide_buttons');

  // supprime les menus //    
  function delete_menu_items() {
      remove_menu_page('index.php'); // Dashboard
      remove_menu_page('edit.php'); // Posts
      //remove_menu_page('upload.php'); // Media
      remove_menu_page('link-manager.php'); // Links
      remove_menu_page('edit.php?lang=fr'); // Pages
      remove_menu_page('edit.php?lang=en'); // Pages
      remove_menu_page('edit-comments.php'); // Comments      
      remove_menu_page('themes.php'); // Appearance
      remove_menu_page('plugins.php'); // Plugins
      remove_menu_page('users.php'); // Users
      remove_menu_page('tools.php'); // Tools
      remove_menu_page('options-general.php'); // Settings
  }
  add_action( 'admin_menu', 'delete_menu_items' );

  // supprime les sous-menus //
  function remove_submenu() {
      global $submenu;
      unset($submenu['edit.php?post_type=page']);      
  }
  add_action('admin_head', 'remove_submenu');

  // exclu des pages de l'admin //
  add_filter( 'parse_query', 'exclude_pages_from_admin' );
  function exclude_pages_from_admin($query) {
      global $pagenow,$post_type;
        if ($pagenow=='edit.php' && $post_type =='page') {
            $query->query_vars['post__not_in'] = array('204','200','202');
        }
  }
}

// permet le trie par meta date de début //
add_filter( 'manage_edit-works_sortable_columns', 'my_works_sortable_columns' );
function my_works_sortable_columns( $columns ) {
  $columns['years'] = '_pinfos_annee';
  return $columns;
}



// tri par défaut par date de début descandant //
add_action( 'pre_get_posts', 'meta_filter_works' );
function meta_filter_works( $query ) {
  global $post_type, $pagenow, $infosoeuvres_mb;
  if( $post_type == "works" && $pagenow == 'edit.php') {
    // $query is the WP_Query object, set is simply a method of the WP_Query class that sets a query var parameter
    $query->set( 'meta_key', $infosoeuvres_mb->get_the_name('_pinfos_annee') );
    $query->set( 'order', 'DESC' );
    $query->set( 'orderby', 'meta_value' );
    //$query->set( 'type', 'DATE' );
  } 
  return $query;
}

/* Only run our customization on the 'edit.php' page in the admin. */
add_action( 'load-edit.php', 'devpress_edit_works_load');

function devpress_edit_works_load() {
  add_filter( 'request', 'devpress_sort_works');
}
/* Sorts the projects. */
function devpress_sort_works( $vars ) {
//remove_filter( 'pre_get_posts', 'meta_filter_projets' );
  /* Check if we're viewing the 'movie' post type. */
  if ( isset( $vars['post_type'] ) && 'works' == $vars['post_type'] ) {

    /* Check if 'orderby' is set to 'duration'. */
    if ( isset( $vars['orderby'] ) && '_pinfos_annee' == $vars['orderby'] ) {
      // on desactive le tri par defaut //
      remove_filter( 'pre_get_posts', 'meta_filter_works' );
      /* Merge the query vars with our custom variables. */
      $vars = array_merge(
        $vars,
        array(
          'meta_key' => '_pinfos_annee',
          'orderby' => 'meta_value'
        )
      );
    } else if (isset( $vars['orderby'] ) && 'menu_order' == $vars['orderby']){
      /* Merge the query vars with our custom variables. */
      $vars = array_merge(
        $vars,
        array(
          'orderby' => 'menu_order'
        )
      );      
    }
  }
  return $vars;
}
//http://justintadlock.com/archives/2011/06/27/custom-columns-for-custom-post-types

add_filter( 'manage_edit-texts_columns', 'my_edit_texts_columns' ) ;
function my_edit_texts_columns( $columns ) {
  $columns = array(
    'cb' => '<input type="checkbox" />',
    'title' => __( 'Title' ),
    'auteur' => __( 'Author' ),
  );
  return $columns;
}

add_action( 'manage_texts_posts_custom_column', 'my_manage_texts_columns', 10, 2 );
function my_manage_texts_columns( $column, $post_id ) {
global $post;
  switch( $column ) {
    case 'auteur' :
      $tabauthors = get_post_meta($post_id, "_pinfostextes_blocsauteurs", TRUE);
      if(isset($tabauthors) && !empty($tabauthors)) {
        foreach($tabauthors as $id => $author) {
          echo $author['prenom']." ".$author['nom']."  ";
        }
      }
      /* If no terms were found, output a default message. */
      break;
    /* Just break out of the switch statement for everything else. */
    default :
      break;
  } 
}

// gestion des colonnes d'index pour oeuvres //
add_filter( 'manage_edit-works_columns', 'my_edit_works_columns' ) ;
function my_edit_works_columns( $columns ) {
  $columns = array(
    'cb' => '<input type="checkbox" />',
    'title' => __( 'Title' ),
    'category' => __( 'Category' ),
    'years' => __( 'Année' ),
  );
  return $columns;
}

add_action( 'manage_works_posts_custom_column', 'my_manage_works_columns', 10, 2 );
function my_manage_works_columns( $column, $post_id ) {
global $post;
  switch( $column ) {
    /* If displaying the 'genre' column. */
    case 'category' :
      /* Get the genres for the post. */
      $terms = get_the_terms( $post_id, 'category' );
      /* If terms were found. */
      if ( !empty( $terms ) ) {
        $out = array();
        /* Loop through each term, linking to the 'edit posts' page for the specific term. */
        foreach ( $terms as $term ) {
          $out[] = sprintf( '<a href="%s">%s</a>',
            esc_url( add_query_arg( array( 'post_type' => $post->post_type, 'category_name' => $term->slug ), 'edit.php' ) ),
            esc_html( sanitize_term_field( 'name', $term->name, $term->term_id, 'category', 'display' ) )
          );
        }
        /* Join the terms, separating them with a comma. */
        echo join( ', ', $out );
      }
      /* If no terms were found, output a default message. */
      break;
    case 'years' :
      $meta = get_post_meta($post_id, "_pinfos_annee", true);
      echo $meta;
      /* If no terms were found, output a default message. */
      break;
    /* Just break out of the switch statement for everything else. */
    default :
      break;
  } 
}

function custom_menu_order($menu_ord) {
  if (!$menu_ord) return true;
  return array(
    'index.php',
    'edit.php?post_type=works', // works
    'edit.php?post_type=texts', // textes
    'edit.php?post_type=bio', // bio
    'edit.php?post_type=page' // page    
  );
}
add_filter('custom_menu_order', 'custom_menu_order');
add_filter('menu_order', 'custom_menu_order');  

} // fin if admin

?>