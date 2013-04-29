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
		<nav class="nextprevworks" id="prevwork">
			<a href=""></a>
		</nav>	
		<nav class="nextprevworks" id="nextwork">
			<a href=""></a>
		</nav>
		<div id="unfoldworks">
			<a data-bypass href="#"><span></span></a>
		</div>
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
		<section id="timeline"></section>
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
	              		<div class="wrapthumb" style="opacity:0">
	              			<div class="sortitem"><%= tab[i] %></div>
		                    <a class="workthumb" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
		                    	<img width="150px" src='<%= work.get('gallery')[0]['thumbnail'] %>' />
		                    </a>
	                 	</div>             			
              	<% } else { %>
	              		<div class="wrapthumb" style="opacity: 0">
		                    <a class="workthumb" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
		                    	<img width="150px" src='<%= work.get('gallery')[0]['thumbnail'] %>' />
		                    </a>
	                 	</div>                  		
              	<% } %>

              <% } %>    
	    <% }); %>
	   </div>
	</script>

	<!-- template pour la workslist list -->
	<script type="text/template" id="works_list_template_list">
	<div id="wraplist-list">
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
					<li><a <% if (sortkey === "annees") { %> class="actif" <% } %> data-bypass id='sortbydate'>date</a></li>
					<li><a <% if (sortkey === "categories") { %> class="actif" <% } %> data-bypass  id='sortbycat'>categories</a></li>
				</ul>
			</nav>
			<nav id="displaying">
				<ul>
					<li>
						<a <% if (displaymode === "thumbs") { %> class="actif" <% } %> data-bypass id='displaythumb'>
						</a>
					</li>
					<li>
						<a <% if (displaymode === "list") { %> class="actif" <% } %> data-bypass id='displaylist'>
						</a>
					</li>
					
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
	    		<ul>
			        <% _.each(gallery, function (picture, i) { %>       	
			            	<li><a data-bypass="<%= i %>" class="linkpic">&bull;</a></li>
			        <% }); %>
	        	</ul>
	     <% } %>
    </script>

	<!-- template pour image avec lien (gallery) -->
	<script type="text/template" id="work_template">
			<a data-bypass id="picture"></a>
	</script>

	<!-- template pour image avec lien (gallery) -->
	<script type="text/template" id="picture_template">

		<figure id="picture">
			<a data-bypass class="btn-picture">
				<img src="<%= mypicture.get('full') %>" />
			</a>
			<figcaption id="legend"><%= mypicture.get('legend') %></figcaption>
		</figure>
		
	</script>

	<!-- template pour image seule -->
	<script type="text/template" id="picturesingle_template">
		<figure id="picture">
			<div class="btn-picture"><img src="<%= mypicture.get('full') %>" /></div>
			<figcaption id="legend"><%= mypicture.get('legend') %></figcaption>
		</figure>
		
	</script>

	<!-- template pour video -->
	<script type="text/template" id="video_template">

		<div id="video">
			<%= myvideo.get('html') %>
		</div>

	</script>

	<!-- template pour worklistmini -->
	<script type="text/template" id="works_listmini_template">
  	<%  var tab = [];
         tab[-1] = 0;
     %>
			<nav id="workslistmini">
				<div class="st_wrapper st_thumbs_wrapper">	
					<div class="st_thumbs">						
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
											<div class="sortitem"><%= tab[i] %></div>				          	
				                    		<a data-id="<%= work.get("id") %>" href="#works/<%= work.get('slug') %>" class="thumb_color" id="<%= work.get("slug") %>"><img width='50px' src='<%= work.get('gallery')[0]['thumbnailmini'] %>' /></a>
				                    <% } else { %>
				                    		<a data-id="<%= work.get("id") %>" href="#works/<%= work.get('slug') %>"  class="thumb_color" id="<%= work.get("slug") %>"><img width='50px' src='<%= work.get('gallery')[0]['thumbnailmini'] %>' /></a>
				                    <% } %>
				              <% } %>    
					    <% }); %>
					</div>
				</div>
			</nav>
	</script>

	<!-- template pour maintextes -->
	<script type="text/template" id="maintexts_template">	
		<section id="tools"></section>
		<div id="wrapper">		
			<section id="sidebar"></section>
			<section class="maincontent txt">
			</section>
		</div>
	</script>

	<!-- template  pour textes sidebar -->
	<script type="text/template" id="sidebar_texts_template">
		<div id="sidebarwrapper">		
			 <% _.each(textes, function (texte, i) { %>
			 	<a style="opacity:0" href="#texts/<%= texte.get('slug') %>">
				 	<h3 <% if (slug === texte.get('slug')) { %> class="actif" <% } %>><%= texte.get('title') %></h3>
				 	<h4>
				 	<% _.each(texte.get('auteurs'), function (auteur, i) { %>
				 		<%= auteur['prenom']+" "+auteur['nom'] %>
				 	<% }); %>
				 	</h4>
			 	</a>
			 <% }); %>
		 </div>
	</script>

	<!-- template  pour textes content -->
	<script type="text/template" id="content_texts_template">
		<div id="txtwrapper"><%= texte.get('post').content %></div>
		<aside id="rightbar">

			<% if (texte.get('post').custom_fields['_pinfostextes_pdf']) { %>
			 	<a class="btn-pdf" data-bypass href='<%= texte.get('post').custom_fields['_pinfostextes_pdf'] %> ' target="_blank"><span id="downloadpdf"></span><% if(wp_vars.lang === "en") { %>download text as pdf <% } else { %>télécharger le texte en pdf <% } %> </a>
			<% } %>

			<% if (texte.get('post').worksconnected) { %>
				<% _.each( texte.get('post').worksconnected, function (work, i) { %>
			 		<a title="<%= work['title'] %>" href='#works/<%= work['slug'] %> '>
			 			<img src="<%= work['thumb'] %>" />
			 		</a>
				<% }); %>
			<% } %>
		</aside>
	</script>

	<!-- template pour bio/biblio -->
	<script type="text/template" id="bio_template">	
		<section id="tools"></section>
		<div id="wrapper">		
			<section style="background:none" class="maincontent bio txt">
				<div id="txtwrapper"><%= mybio.get('content') %></div>
			</section>
		</div>
	</script>

	<div id="php-page">

