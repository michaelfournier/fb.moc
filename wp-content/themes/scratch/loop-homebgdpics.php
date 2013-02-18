<?
global $gallery_mb;
$args = array('fields'=>'ids', 'post_type' => 'page', 'posts_per_page' => 1);
$homepost = new WP_query($args);
if ( $homepost->have_posts() ):
 while ( $homepost->have_posts() ) : $homepost->the_post();
 	$bgdpics = get_post_meta(get_the_id(), $gallery_mb->get_the_id(), TRUE);
 	$bgdurl = array();
 	foreach ($bgdpics["blocspics"] as $idpic) {
 		$imageurl = wp_get_attachment_image_src($idpic["image"], 'full');
 			array_push ($bgdurl, $imageurl[0]);
 			shuffle($bgdurl);
 	}
 	$tab_pics = array("front" => is_front_page(), "pics" => $bgdurl);
 // on print le tableau d'images //
 wp_localize_script ("my-app" , 'wp_vars' , $tab_pics);
 endwhile; endif;
?>