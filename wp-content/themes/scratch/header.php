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
				<p id="cat"></p>
				<div id="text"></div>
			</section>
			<section class="maincontent">
			</section>
		</div>
		<nav id="timeline"></nav>
	</script>

	<!-- template pour la workslist thumb -->
	<script type="text/template" id="works_list_template_thumb">
	<div id="wraplist">
      	<%  var tab = [];
             tab[-1] = 0;
         %>
	    <% _.each(works ,function(work, i){ %>
              <% if (_.isEmpty(work.get('gallery')) === false) { %>
              	<%  
              		if (sortkey === 'annees') {
              			tab[i] = works[i].get('custom_fields')['_pinfos_annee'];
              		} else if (sortkey === 'categories') {
              			tab[i] = works[i].get('categories')[0]['title'];
              		}
              	%>
              	
              	<% if ( String(tab[i-1]) !== String(tab[i])) { %>
              		<% if(i > 0) { %></div><% } %>
              		<div class="segment">
	              		<div class="wrapthumb" style="display:none;">
	              			<div class="sortitem"><%= tab[i] %></div>
		                    <a class="workthumb" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
		                    	<img src='<%= work.get('gallery')[0]['thumbnail'] %>' />
		                    </a>
	                 	</div>             			
              	<% } else { %>
	              		<div class="wrapthumb" style="display:none;">
		                    <a class="workthumb" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
		                    	<img src='<%= work.get('gallery')[0]['thumbnail'] %>' />
		                    </a>
	                 	</div>                  		
              	<% } %>

              <% } %>    
	    <% }); %>
	   </div>
	</script>

	<!-- template pour la workslist list -->
	<script type="text/template" id="works_list_template_list">
	<div id="wraplist-list" style="">
      	<%  var tab = [];
             tab[-1] = 0;
         %>
	    <% _.each(works ,function(work, i){ %>
              <% if (_.isEmpty(work.get('gallery')) === false) { %>
              	<%  
              		if (sortkey === 'annees') {
              			tab[i] = works[i].get('custom_fields')['_pinfos_annee'];
              		} else if (sortkey === 'categories') {
              			tab[i] = works[i].get('categories')[0]['title'];
              		}
              	%>
               	<% if ( String(tab[i-1]) !== String(tab[i])) { %>
              		<% if(i > 0) { %></div><% } %>
              		<div class="segment">
	              		<div class="wrapthumb">
	              			<div class="sortitem"><%= tab[i] %></div>
		                    <a class="workthumb2" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
		                    	<img  width="50px" src='<%= work.get('gallery')[0]['thumbnailmini'] %>' /><h3><%= work.get("title") %></h3>
		                    </a>
	                 	</div>             			
              	<% } else { %>
	              		<div class="wrapthumb">
		                    <a class="workthumb2" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
		                    	<img width="50px" src='<%= work.get('gallery')[0]['thumbnailmini'] %>' /><h3><%= work.get("title") %></h3>
		                    </a>
	                 	</div>                  		
              	<% } %>             	
            			
              	

              <% } %>    
	    <% }); %>
	</div>
	</script>

	<!-- template pour les outils de trie et d'affichage de workslist -->
	<script type="text/template" id="workslisttools_template">
			<nav id="sorting">
				<span style="float:left; display:none">trie par :</span>
				<ul>
					<li><a <% if (sortkey === "annees") { %> class="actif" <% } %> data-bypass id='sortbydate' href='#date'>date</a></li>
					<li><a <% if (sortkey === "categories") { %> class="actif" <% } %> data-bypass href='#cat' id='sortbycat'>categories</a></li>
				</ul>
			</nav>
			<nav id="displaying">
				<ul>
					<li><a data-bypass id='displaylist' href="#list">liste</a></li>
					<li><a data-bypass id='displaythumb' href="#thumb">mosa</a></li>
				</ul>
			</nav>
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
    <% if(_.size(gallery) > 1) { %>
    	<nav id="navgal">
    		<ul>
		        <% _.each(gallery, function (picture, i) { %>       	
		            	<li><a data-bypass="<%= i %>" class="linkpic" href="#">&bull;</a></li>
		        <% }); %>
        	</ul>
       </nav>
     <% } %>
    </script>

	<!-- template pour image avec lien (gallery) -->
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

