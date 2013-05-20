<?php
/**
 * The template for displaying the footer.
 *
 *
 * @package WordPress
 * @subpackage scratch
 */
?>
</div><!-- fin de php-page -->
</div><!-- fin #main_wrapper -->
<?
$malangue = qtrans_getLanguage(); 
$blogname = get_bloginfo('name');
$blogurl =  qtrans_convertURL(home_url());

?>

<?
// si on est sur la home page : requete des images de la home //
// 	get_template_part( 'loop', 'homebgdpics' );
// 	// sinon //
// 	} else {
	$tab_vars = array( "single" => is_single(), "blogname" => $blogname, "lang" => $malangue, "blogurl" => $blogurl, "themepath" => get_template_directory_uri());
	 wp_localize_script (  "my-app" , 'wp_vars' , $tab_vars);
	//};
?>
<?php wp_footer(); ?>
</body>
</html>