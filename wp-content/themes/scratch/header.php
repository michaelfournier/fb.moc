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
		$pages = get_pages('sort_column=menu_order&exclude=357');
		?>
		<ul id="mainmenu">
		<? foreach($pages as $page) { ?>
			<li>
				<a href='<?= "#".$page->post_name;?>'><span><?= $page->post_title; ?></span></a>
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
					<a data-bypass href="<?= qtrans_convertURL(null, 'fr'); ?>"><span>français</span></a>	
				<? } else { ?>
					<a data-bypass href="<?= qtrans_convertURL(null, 'en'); ?>"><span>english</span></a>
				<? } ?>
			</li>	
		<?php endwhile; // end of the loop. ?>		
		<?php endif; // end of the loop. ?>	
		</ul>

		</nav>
	</header>
<div id="main_wrapper">

	<div id="mainbb">

	</div>

	<!-- template pour mainwork -->
	<script type="text/template" id="mainworks_template">	
		<section id="tools"></section>
		<nav id="navgal"></nav>
		<div id="wrapper">			
			<section id="sidebar">
				<h3></h3>
				<h4></h4>
				<p id='description'></p>
			</section>
			<section class="maincontent">
			</section>
		</div>

		
	</script>

	<!-- template pour la workslist thumb -->
	<script type="text/template" id="works_list_template_thumb">
	<div id="wraplist">
      	<%  var tab = [];
             tab[-1] = 0;
         %>
	    <% _.each(works ,function(work, i){ %>
              <% if (_.isEmpty(work.get('gallery')) === false || _.isEmpty(work.get('customthumb')) === false ) { %>
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
		                    	<% if (_.isEmpty(work.get('customthumb')) === true) { %>
		                    		<img src='<%= work.get('gallery')[0]['thumbnail'] %>' />
		                    	<% } else { %>
		                    		<img src='<%= work.get('customthumb')[0] %>' />
		                    	<% } %>
		                    </a>
	                 	</div>             			
              	<% } else { %>
	              		<div class="wrapthumb" style="opacity: 0">
		                    <a class="workthumb" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
		                    	<% if (_.isEmpty(work.get('customthumb')) === true) { %>	
		                    		<img src='<%= work.get('gallery')[0]['thumbnail'] %>' />
		                    	<% } else { %>
		                    		<img src='<%= work.get('customthumb')[0] %>' />
		                    	<% } %>
		                    </a>
	                 	</div>                  		
              	<% } %>

              <% } %>    
	    <% }); %>
	   </div>
	</script>


	<!-- template pour la sidebar -->
	<script type="text/template" id="sidebar_works_template">
		<h3><%= work.get('title') %></h3>
		<h4><%= work.get('custom_fields')['_pinfos_annee'][0] %></h4>
		<p id="description"><%= work.get('custom_fields')['_pinfos_description'][0] %></p>
		<div id="text"><%= work.get('content') %></div>
	</script>

	<!-- template pour la workslist list -->
	<script type="text/template" id="works_list_template_list">
	<div id="wraplist-list">
      	<%  var tab = [];
             tab[-1] = 0;
         %>
	    <% _.each(works ,function(work, i){ %>
              <% if (_.isEmpty(work.get('gallery')) === false || _.isEmpty(work.get('customthumb')) === false ) { %>
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
		                    	<% if (_.isEmpty(work.get('customthumb')) === true) { %>      	
		                    		<img width="60px" src='<%= work.get('gallery')[0]['thumbnailmini'] %>' /><h3><%= work.get("title") %></h3>
		                    	<% } else { %>
		                    		<img width="60px" src='<%= work.get('customthumb') %>' /><h3><%= work.get("title") %></h3>
		                    	<% } %>
		                    </a>
	                 	</div>             			
              	<% } else { %>
	              		<div class="wrapthumb">
		                    <a class="workthumb2" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>"> 
		                    	<% if (_.isEmpty(work.get('customthumb')) === true) { %>      	
		                    		<img width="60px" src='<%= work.get('gallery')[0]['thumbnailmini'] %>' /><h3><%= work.get("title") %></h3>
		                    	<% } else { %>
		                    		<img width="60px" src='<%= work.get('customthumb') %>' /><h3><%= work.get("title") %></h3>
		                    	<% } %>
		                    </a>
	                 	</div>                  		
              	<% } %>             	
            			
              	

              <% } %>    
	    <% }); %>
	</div>
	</script>

	<!-- template pour les outils de trie et d'affichage de workslist -->
	<script type="text/template" id="workslisttools_template">
		<div id="indextools">
			<nav id="sorting" <% if (displaymode === "list") { %> style="display:block" <% } %>>
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
		</div>
	</script>


	<!-- template pour la nav picture gallery --> 
    <script type="text/template" id="navgallery_template">
	    <% if(_.size(gallery) > 1) { %>
	    		<ul>
			        <% _.each(gallery, function (picture, i) { %>       	
			            	<li><a data-bypass="<%= i %>" class="linkpic"><%= i+1 %></a></li>
			        <% }); %>
	        	</ul>
	     <% } %>
    </script>

	<!-- template pour la nav video gallery --> 
    <script type="text/template" id="navgalleryvid_template">
	    <% if(_.size(gallery) > 1) { %>
	    		<ul>
			        <% _.each(gallery, function (picture, i) { %>       	
			            	<li><a data-bypass="<%= i %>" class="linkvid">&bull;</a></li>
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
		<div id="unfoldworks">
			<a data-bypass href="#"><span></span></a>
		</div>
  	<%  var tab = [];
         tab[-1] = 0;
     %>
     		<a class="nextprevworks" id="prevwork" href=""></a>	
			<a class="nextprevworks" id="nextwork" href=""></a>
			<nav id="workslistmini">
				<div class="st_wrapper st_thumbs_wrapper">	
					<div class="st_thumbs">						
					    <% _.each(works ,function(work, i){ %>

				              <% if (_.isEmpty(work.get('gallery')) === false || _.isEmpty(work.get('customthumb')) === false ) { %>
						          	<%  
						          		if (sortkey === 'annees') {
						          			tab[i] = works[i].get('custom_fields')['_pinfos_annee'];
						          		} else if (sortkey === 'categories') {
						          			tab[i] = works[i].get('categories')[0]['title'];
						          		}
						          	%>


					

		          	
				                    		<a data-id="<%= work.get("id") %>" href="#works/<%= work.get('slug') %>" class="thumb_color" id="<%= work.get("slug") %>">
				                    		
				                    		<% if (work.get('customthumb')) { %>
				                    			<img width="60px" src='<%= work.get('customthumb')[0] %>' />				                    			
					                    	<% } else { %>
					                    		<img width='60px' src='<%= work.get('gallery')[0]['thumbnailmini'] %>' />
					                    	<% } %>
					                    	</a>
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
			<section style="opacity:0" class="maincontent txt">
			</section>
		</div>
	</script>

	<!-- template  pour textes sidebar -->
	<script type="text/template" id="sidebar_texts_template">
		<div id="sidebarwrapper">	
			 <% _.each(textes, function (texte, i) { %>
			 	<a style="opacity:0" href="#<%= texte.get('type') %>/<%= texte.get('slug') %>">
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

			<% if (texte.get('post').custom_fields['_pinfostextes_fileurl']) { %>
			 	<a class="btn-pdf" data-bypass href='<%= texte.get('post').custom_fields['_pinfostextes_fileurl'] %> ' target="_blank"><span id="downloadpdf"></span><% if(wp_vars.lang === "en") { %>download text as pdf <% } else { %>télécharger le texte en pdf <% } %> </a>
			<% } %>

			<% if (texte.get('post').custom_fields['_pinfosbio_fileurl']) { %>
			 	<a class="btn-pdf" data-bypass href='<%= texte.get('post').custom_fields['_pinfosbio_fileurl'] %> ' target="_blank"><span id="downloadpdf"></span><% if(wp_vars.lang === "en") { %>download text as pdf <% } else { %>télécharger le texte en pdf <% } %> </a>
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
			<section style="background:none" class="maincontent bio">
				<div id="txtwrapper"><%= mybio.get('content') %></div>
			</section>
		</div>
	</script>

	<!-- template pour news -->
	<script type="text/template" id="news_template">	
		<section id="tools"></section>
		<div id="wrapper">		
			<section style="background:none" class="maincontent news">
				<div id="txtwrapper"><%= mynews.get('content') %>
					<a id="btn-close"></a>
				</div>
			</section>
		</div>
	</script>

	<!-- template pour mentions -->
	<script type="text/template" id="notice_template">	
		<section id="tools"></section>
		<div id="wrapper">		
			<section style="background:none" class="maincontent notice">

				<div id="txtwrapper">
					<div id="uberwrapper">
						<%= mynotice.get('content') %>
					</div>
				</div>
			</section>
		</div>
	</script>

	<div id="php-page">

