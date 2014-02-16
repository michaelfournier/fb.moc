<?php
/**
 * @package WordPress
 * @subpackage scratch
 */
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<?php is_front_page() || is_archive() ? $title = get_bloginfo('description') : $title = get_the_title(''); $title .=" | ".get_bloginfo('name'); ?>
	<title><?= $title; ?></title>
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <meta name="author" content="vacuumRandom"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/style.css?v=2014028-2056" />
    <link type="text/plain" rel="author" href="/humans.txt" />
   <!-- <script data-main="<?= get_template_directory_uri(); ?>/app/main" src="<?= get_template_directory_uri(); ?>/app/libs/vendors/require.js"></script>-->
    <!--<script src="<?= get_template_directory_uri(); ?>/app/libs/vendors/modernizr-2.6.2.min.js"></script>-->
    <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>
	<div id="bureau">bureau</div>
	<div id="intermediaire">intermediaire</div>
	<div id="smartphone">smarphone</div>
	<div id="tablette">tablette</div>
	<header id="main_header">
		<h2 id="mobiletitle">Fayçal Baghriche</h2>
		<nav id="main_nav">	
		<?
		$pages = get_pages('sort_column=menu_order&exclude=357');

		?>
		<ul id="mainmenu">
		<? foreach($pages as $page) { ?>
			<li>				
				<? if ($page->post_name == 'pdf') { 
				   $tabpdf = get_post_meta($page->ID, "_pfilespdf_blocspics", true);
				?>
				<a id="btn-pdf" data-bypass href='#'><span><?= $page->post_title; ?></span></a>
					<ul class="submenu">
						<? foreach ($tabpdf as $key => $pdf) { ?>
						<? $mypdfurl = wp_get_attachment_url($pdf['image']); ?>
							<li>
								<a data-bypass href="<?= $mypdfurl; ?>"><?= $pdf['titlepdf']; ?></a>
							</li>
						<? } ?>
					</ul>

				<? } else { ?>
				<a href='<?= "#".$page->post_name;?>'><span><?= $page->post_title; ?></span></a>
				<? } ?>
			</li>
		<? } ?>
		</ul><!-- #container -->
		<div id="spin"></div>
		<ul id='secondmenu'>
			<? $page = new WP_Query( 'page_id=357' ); ?>
		<? if ( $page->have_posts() ):
		while ( $page->have_posts() ) : $page->the_post(); ?>
			<li><a href='<?= "#".$post->post_name;?>'><span><?= $post->post_title; ?></span></a></li>
			<? $mylang = qtrans_getLanguage(); ?>
			<li id="qtrans">
				<? if ($mylang == 'en') { ?>
					<a data-bypass href="<?= qtrans_convertURL(null, 'fr'); ?>"><span>fra</span></a>	
				<? } else { ?>
					<a data-bypass href="<?= qtrans_convertURL(null, 'en'); ?>"><span>eng</span></a>
				<? } ?>
			</li>	
		<?php endwhile; // end of the loop. ?>		
		<?php endif; // end of the loop. ?>	
		</ul>

		</nav>
	</header>
<div id="main_wrapper">
<!-- main app container -->
	<div id="mainbb">
	</div>
<!-- end of main app container -->
	<div id="php-page">

