<?php
/**
 * The template for displaying the footer.
 *
 *
 * @package WordPress
 * @subpackage scratch
 */
?>
</div><!-- fin #main_wrapper -->
<?
$malangue = qtrans_getLanguage(); 
$blogname = get_bloginfo('name');
$blogurl =  qtrans_convertURL(home_url());
$tab_vars = array( "single" => is_single(), "blogname" => $blogname, "lang" => $malangue, "blogurl" => $blogurl, "themepath" => get_template_directory_uri());
?>

<?
// si on est sur la home page : requete des images de la home //
if (is_front_page()) {	
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
	 wp_localize_script ("my-scripts" , 'wp_bgdpics' , $tab_pics);
	 endwhile; endif;
	} else {
	$tab_vars = array( "single" => is_single(), "blogname" => $blogname, "lang" => $malangue, "blogurl" => $blogurl, "themepath" => get_template_directory_uri());
	 wp_localize_script (  "my-scripts" , 'wp_vars' , $tabp_vars);
	};
?>

<?php wp_footer(); ?>
</body>
</html>