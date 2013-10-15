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

	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/style.css?v=20131010-1513" />
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

	<div id="mainbb">

	</div>


	<!-- template pour mainworklist -->
	<script type="text/template" id="workslistmain_template">	
		<section id="tools">
		</section>
		<div id="wrapper">			
			<section class="maincontent_index">
			</section>
		</div>	
	</script>

	<!-- template pour mainwork -->
	<script type="text/template" id="mainworks_template">	
		<section id="tools">
     		<nav id="navworks">
	     		<div id="unfoldworks"><a data-bypass href="#"></a></div>
	     		<div class="nextprevworks" id="prevwork"><a  href=""></a></div>	
				<div class="nextprevworks" id="nextwork"><a href=""></a></div>
			</nav>
		</section>
		<div id="wrapper">			
			<section id="sidebar">
				<h3></h3>
				<h4></h4>
				<p id='description'></p>
			</section>
			<section class="maincontent">
				<nav id="navgal"></nav>
				<div data-bypass id="ctn-media">
					<a data-bypass id="btn-media-next"></a>
					<a data-bypass id="btn-media-prev"></a>
					<figure id="media"></figure>
				</div>
				
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
          		<div class="wrapthumb" style="opacity:0">
                    <a class="workthumb" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>">       	
                    	<% if (_.isEmpty(work.get('customthumb')) === true) { %>
                    		<img src='<%= work.get('thumbnormal') %>' />
                    	<% } else { %>
                    		<img src='<%= work.get('customthumb') %>' />
                    	<% } %>
                    </a>
                    <h5 class="worktitle"><%= work.get("title") %></h5>

             	</div>             			
              <% } %>    
	    <% }); %>
	   </div>
	</script>


	<!-- template pour la sidebar -->
	<script type="text/template" id="sidebar_works_template">
		<h3><%= work.get('title') %>&nbsp;</h3>
		<h4>&mdash; <%= work.get('custom_fields')['_pinfos_annee'][0] %></h4>
		<p id="description"><%= work.get('custom_fields')['_pinfos_description'] %></p>
		<% if ( work.get('content').length > 10 )  { %>
			<h5><a id="toogletext">
			<% if(wp_vars.lang === "en") { %>
			<span id="down">&darr; read text</span><span id="up">&uarr; fold text</span></a></h5>
			<% } else { %>
			<span id="down">&darr; lire le texte</span><span id="up">&uarr; replier le texte</span></a></h5>
			<% } %>
		<% } %>
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
		                    		<img width="60px" src='<%= work.get('thumbmini') %>' /><h5><%= work.get("title") %></h5>
		                    	<% } else { %>
		                    		<img width="60px" src='<%= work.get('customthumbmini') %>' /><h5><%= work.get("title") %></h5>
		                    	<% } %>
		                    </a>
	                 	</div>             			
              	<% } else { %>
	              		<div class="wrapthumb">
		                    <a class="workthumb2" data-id="<%= work.get("id") %>" title="<%= work.get("title") %>" href="#works/<%= work.get('slug') %>"> 
		                    	<% if (_.isEmpty(work.get('customthumb')) === true) { %>      	
		                    		<img width="60px" src='<%= work.get('thumbmini') %>' /><h5><%= work.get("title") %></h5>
		                    	<% } else { %>
		                    		<img width="60px" src='<%= work.get('customthumbmini') %>' /><h5><%= work.get("title") %></h5>
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

			<nav id="sorting" <% if (displaymode === "list") { %> style="display:block" <% } %>>
				<ul>
					<li><a <% if (sortkey === "annees") { %> class="actif" <% } %> data-bypass id='sortbydate'>date</a></li>
					<li><a <% if (sortkey === "categories") { %> class="actif" <% } %> data-bypass  id='sortbycat'>categories</a></li>
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
	<script type="text/template" id="picture_template">
		<img src="<%= mypicture.get('full') %>" />
		<figcaption id="legend"><%= mypicture.get('legend') %></figcaption>
	</script>

	<!-- template pour video -->
	<script type="text/template" id="video_template">

		<div id="video">
			<%= myvideo.get('html') %>
		</div>
		<figcaption id="legend"><%= myvideo.get('legend') %></figcaption>

	</script>

	<!-- template pour worklistmini -->
	<script type="text/template" id="works_listmini_template">
  	<%  var tab = [];
         tab[-1] = 0;
     %>

			<nav class="jThumbnailScroller" id="workslistmini">
				<div class="jTscrollerContainer">	
					<div class="jTscroller">						
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
				                    			<img width="120px" src='<%= work.get('customthumb')[0] %>' />
				                    			<div class="thumbinfos">
					                    			<h4><%= works[i].get('title') %></h4>
					                    			<h5><%= tab[i] %></h5>	
				                    			</div>			                    			
					                    	<% } else { %>
					                    		<img width='120px' src='<%= work.get('thumbmini') %>' />
					                    		<div class="thumbinfos">
					                    			<h4><%= works[i].get('title') %></h4>
					                    			<h5><%= tab[i] %></h5>	
				                    			</div>				      
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
			<section id="sidebar" class="text"></section>
			<section style="opacity:0" class="maincontent txt">
			</section>
		</div>
	</script>

	<!-- template pour bio/biblio -->
	<script type="text/template" id="bio_template">	
		<section id="tools"></section>
		<div id="wrapper">		
			<section id="sidebar" class="text"></section>
			<section style="opacity:0" class="maincontent bio">
			</section>
		</div>
	</script>

	<!-- template  pour textes sidebar -->
	<script type="text/template" id="sidebar_texts_template">
		<div id="sidebarwrapper">	
			 <% _.each(textes, function (texte, i) { %>
			 	<a style="opacity:0" href="#<%= texte.get('type') %>/<%= texte.get('slug') %>">
				 	<h4 <% if (slug === texte.get('slug')) { %> class="actif" <% } %>><%= texte.get('title') %></h4>
				 	<h5>
				 	<% _.each(texte.get('auteurs'), function (auteur, i) { %>
				 		<%= auteur['prenom']+" "+auteur['nom'] %>
				 	<% }); %>
				 	</h5>
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

	<!-- template pour home -->
	<script type="text/template" id="home_template">
		<div id='big-btn-home-up'></div>
		<div id='big-btn-home-down'></div>
	</script>

	<!-- template pour news -->
	<script type="text/template" id="news_template">
		<div id="wrapper">		
			<section style="background:none" class="maincontent news">
				<div id="txtwrapper"><%= mynews.get('content') %>
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

