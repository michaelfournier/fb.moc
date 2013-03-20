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
    <meta name="viewport" content="width=device-width" />

<!-- meta facebook -->
	<meta property="fb:app_id" content="">
	<meta property="fb:admins" content="">
	<meta property="og:title" content="<?= $title; ?>"/>
	<meta property="og:site_name" content="<?php bloginfo('name'); ?>"/>
	<meta property="og:type" content="article"/>
	<meta property="og:url" content="<?= get_permalink(); ?>">
	<meta property="og:description" content="<?= get_the_excerpt(); ?>">
	<meta property="og:image" content=""/>
	<link rel="image_src" href="" />
	<meta property="og:local" content="<?= get_bloginfo("language"); ?>">

	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/style.css" />
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
		<nav id="main_nav">	
		<?
		$args = array('post_type' => 'page', 'posts_per_page' => -1);
		$allposts = new WP_query($args);
		?>
		<ul id="mainmenu">
			<? if ( $allposts->have_posts() ):
			 while ( $allposts->have_posts() ) : $allposts->the_post(); ?>
			<li>
				<a href='<?= "#".$post->post_name;?>'><span><? the_title(); ?></span></a>
			</li>
			<? endwhile; else : ?> No posts <? endif; ?>
		</ul><!-- #container -->
		<? wp_reset_query(); ?>		
		</nav>
	</header>
<div id="main_wrapper">

	<div id="mainbb">

	</div>

	<!-- template pour mainwork -->
	<script type="text/template" id="mainworks_template">	
		<section id="tools"></section>	
		<div id="wrapper">
			<section id="sidebar">
				<h3></h3>
				<h4></h4>
				<p id="description"></p>
				<div id="text"></div>
			</section>
			<section class="maincontent">
			</section>
		</div>
		<nav id="timeline"></nav>
	</script>

	<!-- template pour la workslist -->
	<script type="text/template" id="works_list_template">
	    <% _.each(works ,function(work){ %>
              <% if (_.isEmpty(work.get('gallery')) === false) { %>
                    <a class="workthumb" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>" style="display:none;"><img src='<%= work.get('gallery')[0]['thumbnail'] %>' /></a>
              <% } %>    
	    <% }); %>
	</script>


	<!-- template pour la sidebar -->
	<script type="text/template" id="sidebar_works_template">
		<section id="sidebar">
			<h3></h3>
			<h4></h4>
			<p></p>
		</section>
	</script>

	<!-- template pour la nav picture gallery --> 
    <script type="text/template" id="navgallery_template">
    	<ul id="navgal">
        <% _.each(gallery, function (picture, i) { %>       	
            	<li><a data-bypass="<%= i %>" href="#" class="linkTab">&bull;</a></li>
        <% }); %>
       </ul>
    </script>

	<!-- template pour image -->
	<script type="text/template" id="work_template">
			<a href="#" data-bypass id="picture"></a>
	</script>



	<!-- template pour worklistmini -->
	<script type="text/template" id="works_listmini_template">
			<nav id="workslistmini">	
			    <% _.each(works ,function(work){ %>
		              <% if (_.isEmpty(work.get('gallery')) === false) { %>
		                    <a data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>" style="display:none;"><img src='<%= work.get('gallery')[0]['thumbnailmini'] %>' /></a>
		              <% } %>    
			    <% }); %>
			</nav>
	</script>

	<div id="php-page">

