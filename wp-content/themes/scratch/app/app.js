var Blog = (function () {
	var blog = {
		init: function () {
			
		}
	};


	blog.Models = {};
	blog.Collections = {};
	blog.Views = {};
	blog.Router = {};
	blog.Templates = {};

	return blog;

}());
this["Blog"] = this["Blog"] || {};
this["Blog"]["Templates"] = this["Blog"]["Templates"] || {};

this["Blog"]["Templates"]["bio"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- template pour bio/biblio -->\n<section id="tools"></section>\n<div id="wrapper">\t\t\n\t<section id="sidebar" class="text"></section>\n\t<section style="opacity:0" class="maincontent bio">\n\t</section>\n</div>';

}
return __p
};

this["Blog"]["Templates"]["home"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- template pour home -->\n<div id=\'big-btn-home-up\'></div>\n<div id=\'big-btn-home-down\'></div>';

}
return __p
};

this["Blog"]["Templates"]["news"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template pour news -->\n<div id="wrapper">\t\t\n\t<section style="background:none" class="maincontent news">\n\t\t<div id="txtwrapper">\n\t\t';
  var tab = []; tab[-1] = 0; ;
__p += '\n\t\t\t';
 _.each(mynews, function (news, i) { ;
__p += '\n\t\t\t\t';
 tab[i] = news.get('tax')[0]['name']; ;
__p += '\n\t\t\t\t';
 if ( String(tab[i-1]) !== String(tab[i])) { ;
__p += '\n\t\t\t\t\t';
 if (i > 0) { ;
__p += '</section>';
 } ;
__p += '\n\t\t\t\t\t<section class="sub">\n\t\t\t\t\t\t<h3>' +
((__t = ( news.get('tax')[0]['name'] )) == null ? '' : __t) +
'</h3>\n\t\t\t\t\t\t<div class="infosnews">\n\t\t\t\t\t\t\t';
 if (_.isEmpty(news.get('customthumbmedium')) === false) { ;
__p += ' \n\t\t\t\t\t\t\t\t<div style=\'width:70%\'>\n\t\t\t\t\t\t\t\t\t<h4>' +
((__t = ( news.get('title') )) == null ? '' : __t) +
'</h4>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t' +
((__t = ( news.get('content') )) == null ? '' : __t) +
'\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<figure style=\'width:30%\'><img src=\'' +
((__t = ( news.get('customthumbmedium') )) == null ? '' : __t) +
'\' /></figure>\n\t\t\t\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t\t\t\t<div style="width: 100%">\n\t\t\t\t\t\t\t\t\t<h4>' +
((__t = ( news.get('title') )) == null ? '' : __t) +
'</h4>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t' +
((__t = ( news.get('content') )) == null ? '' : __t) +
'\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t';
 } ;
__p += '\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t\t<div class="infosnews">\n\t\t\t\t\t\t\t';
 if (_.isEmpty(news.get('customthumbmedium')) === false) { ;
__p += ' \n\t\t\t\t\t\t\t\t<div style=\'width:70%\'>\n\t\t\t\t\t\t\t\t\t<h4>' +
((__t = ( news.get('title') )) == null ? '' : __t) +
'</h4>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t' +
((__t = ( news.get('content') )) == null ? '' : __t) +
'\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<figure style=\'width:30%\'><img src=\'' +
((__t = ( news.get('customthumbmedium') )) == null ? '' : __t) +
'\' /></figure>\n\t\t\t\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t\t\t\t<div style="width: 100%">\n\t\t\t\t\t\t\t\t\t<h4>' +
((__t = ( news.get('title') )) == null ? '' : __t) +
'</h4>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t' +
((__t = ( news.get('content') )) == null ? '' : __t) +
'\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t';
 } ;
__p += '\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t';
 }); ;
__p += '\n\t\t</div>\n\t</section>\n</div>';

}
return __p
};

this["Blog"]["Templates"]["notice"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- template pour mentions -->\n<section id="tools"></section>\n<div id="wrapper">\t\t\n\t<section style="background:none" class="maincontent notice">\n\t\t<div id="txtwrapper">\n\t\t\t<div id="uberwrapper">\n\t\t\t\t' +
((__t = ( mynotice.get('content') )) == null ? '' : __t) +
'\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>\n';

}
return __p
};

this["Blog"]["Templates"]["picture"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- template pour image avec lien (gallery) -->\n<img data-ratio="' +
((__t = ( mypicture.get('ratio') )) == null ? '' : __t) +
'" src="' +
((__t = ( mypicture.get('full') )) == null ? '' : __t) +
'" />\n<figcaption id="legend">' +
((__t = ( mypicture.get('legend') )) == null ? '' : __t) +
'</figcaption>';

}
return __p
};

this["Blog"]["Templates"]["picturesGalNav"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template pour la nav pictureGalNavView --> \n\t    ';
 if(_.size(gallery) > 1) { ;
__p += '\n\t    \t\t<ul>\n\t\t\t        ';
 _.each(gallery, function (picture, i) { ;
__p += '       \t\n\t\t\t            \t<li><a data-bypass="' +
((__t = ( i )) == null ? '' : __t) +
'" class="linkpic">' +
((__t = ( i+1 )) == null ? '' : __t) +
'</a></li>\n\t\t\t        ';
 }); ;
__p += '\n\t        \t</ul>\n\t    ';
 } ;


}
return __p
};

this["Blog"]["Templates"]["textesContent"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template  pour textes content -->\n<div id="txtwrapper">' +
((__t = ( texte.get('post').content )) == null ? '' : __t) +
'</div>\n<aside id="rightbar">\n\n\t';
 if (texte.get('post').custom_fields['_pinfostextes_fileurl']) { ;
__p += '\n\t \t<a class="btn-pdf" data-bypass href=\'' +
((__t = ( texte.get('post').custom_fields['_pinfostextes_fileurl'] )) == null ? '' : __t) +
' \' target="_blank"><span id="downloadpdf"></span>';
 if(wp_vars.lang === "en") { ;
__p += 'download text as pdf ';
 } else { ;
__p += 'télécharger le texte en pdf ';
 } ;
__p += ' </a>\n\t';
 } ;
__p += '\n\n\t';
 if (texte.get('post').custom_fields['_pinfosbio_fileurl']) { ;
__p += '\n\t \t<a class="btn-pdf" data-bypass href=\'' +
((__t = ( texte.get('post').custom_fields['_pinfosbio_fileurl'] )) == null ? '' : __t) +
' \' target="_blank"><span id="downloadpdf"></span>';
 if(wp_vars.lang === "en") { ;
__p += 'download text as pdf ';
 } else { ;
__p += 'télécharger le texte en pdf ';
 } ;
__p += ' </a>\n\t';
 } ;
__p += '\n\n\t';
 if (texte.get('post').worksconnected) { ;
__p += '\n\t\t';
 _.each( texte.get('post').worksconnected, function (work, i) { ;
__p += '\n\t \t\t<a title="' +
((__t = ( work['title'] )) == null ? '' : __t) +
'" href=\'#works/' +
((__t = ( work['slug'] )) == null ? '' : __t) +
' \'>\n\t \t\t\t<img src="' +
((__t = ( work['thumb'] )) == null ? '' : __t) +
'" />\n\t \t\t</a>\n\t\t';
 }); ;
__p += '\n\t';
 } ;
__p += '\n</aside>';

}
return __p
};

this["Blog"]["Templates"]["textesMain"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- template pour maintextes -->\n<section id="tools"></section>\n<div id="wrapper">\t\t\n\t<section id="sidebar" class="text"></section>\n\t<section style="opacity:0" class="maincontent txt">\n\t</section>\n</div>\n';

}
return __p
};

this["Blog"]["Templates"]["textesSidebar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template  pour textes sidebar -->\n<div id="sidebarwrapper">\t\n\t ';
 _.each(textes, function (texte, i) { ;
__p += '\n\t \t<a style="opacity:0" href="#' +
((__t = ( texte.get('type') )) == null ? '' : __t) +
'/' +
((__t = ( texte.get('slug') )) == null ? '' : __t) +
'">\n\t\t \t<h4 ';
 if (slug === texte.get('slug')) { ;
__p += ' class="actif" ';
 } ;
__p += '>' +
((__t = ( texte.get('title') )) == null ? '' : __t) +
'</h4>\n\t\t \t<h5>\n\t\t \t';
 _.each(texte.get('auteurs'), function (auteur, i) { ;
__p += '\n\t\t \t\t' +
((__t = ( auteur['prenom']+" "+auteur['nom'] )) == null ? '' : __t) +
'\n\t\t \t';
 }); ;
__p += '\n\t\t \t</h5>\n\t \t</a>\n\t ';
 }); ;
__p += '\n</div>';

}
return __p
};

this["Blog"]["Templates"]["video"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template pour video -->\n';
 
vwidth = myvideo.get('width');
vheight = myvideo.get('height');
vratio = (vwidth/vheight);
;
__p += '\n<div id="video">\n\t' +
((__t = ( myvideo.get('html') )) == null ? '' : __t) +
'\n</div>\n<img style="visibility:hidden" data-ratio="' +
((__t = ( vratio )) == null ? '' : __t) +
'" src="' +
((__t = ( myvideo.get('thumbnail_url') )) == null ? '' : __t) +
'" />\n<figcaption id="legend">' +
((__t = ( myvideo.get('legend') )) == null ? '' : __t) +
'</figcaption>';

}
return __p
};

this["Blog"]["Templates"]["workListTools"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template pour les outils de trie et d\'affichage de workslist -->\n<div id="indextools">\n\t<nav id="displaying">\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<a ';
 if (displaymode === "thumbs") { ;
__p += ' class="actif" ';
 } ;
__p += ' data-bypass id=\'displaythumb\'>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a ';
 if (displaymode === "list") { ;
__p += ' class="actif" ';
 } ;
__p += ' data-bypass id=\'displaylist\'>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t\n\t\t</ul>\n\t</nav>\n\t<nav id="sorting" ';
 if (displaymode === "list") { ;
__p += ' style="display:block" ';
 } ;
__p += '>\n\t\t<ul>\n\t\t\t<li><a ';
 if (sortkey === "annees") { ;
__p += ' class="actif" ';
 } ;
__p += ' data-bypass id=\'sortbydate\'>date</a></li>\n\t\t\t<li><a ';
 if (sortkey === "categories") { ;
__p += ' class="actif" ';
 } ;
__p += ' data-bypass  id=\'sortbycat\'>categories</a></li>\n\t\t</ul>\n\t</nav>\n</div>';

}
return __p
};

this["Blog"]["Templates"]["workMain"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\t<!-- template pour mainworks -->\n<section id="tools">\n<div id="hiddentitle"></div>\n<a id="closefull" title="close" data-bypass href="#"></a>\n\t<nav id="navworks">\n \t\t<div id="unfoldworks"><a data-bypass href="#"></a></div>\n \t\t<div class="nextprevworks" id="prevwork"><a  href=""></a></div>\t\n\t\t<div class="nextprevworks" id="nextwork"><a href=""></a></div>\n\t\t<div id="btnfull"><a title="full window" data-bypass href="#"></a></div>\n\t</nav>\n</section>\n<div id="wrapper">\t\t\t\n\t<section id="sidebar">\n\t\t<h3></h3>\n\t\t<h4></h4>\n\t\t<p id=\'description\'></p>\n\t</section>\n\t<section class="maincontent">\n\t\t<nav id="navgal"></nav>\n\t\t\t<div id="media">\n\t\t\t\t<div data-bypass id="ctn-media">\n\t\t\t\t\t<a data-bypass id="btn-media-next"></a>\n\t\t\t\t\t<a data-bypass id="btn-media-prev"></a>\n\t\t\t\t\t<figure id="visuel"></figure>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</section>\n</div>\t';

}
return __p
};

this["Blog"]["Templates"]["workSidebar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template pour la sidebar work -->\n<h3>' +
((__t = ( work.get('title') )) == null ? '' : __t) +
'&nbsp;</h3>\n<h4>&mdash; ' +
((__t = ( work.get('custom_fields')['_pinfos_annee'][0] )) == null ? '' : __t) +
'</h4>\n<p id="description">' +
((__t = ( work.get('custom_fields')['_pinfos_description'] )) == null ? '' : __t) +
'</p>\n';
 if ( work.get('content').length > 10 )  { ;
__p += '\n\t<h5><a id="toogletext">\n\t';
 if(wp_vars.lang === "en") { ;
__p += '\n\t<span id="down">&darr; read text</span><span id="up">&uarr; fold text</span></a></h5>\n\t';
 } else { ;
__p += '\n\t<span id="down">&darr; lire le texte</span><span id="up">&uarr; replier le texte</span></a></h5>\n\t';
 } ;
__p += '\n';
 } ;
__p += '\n<div id="text">' +
((__t = ( work.get('content') )) == null ? '' : __t) +
'</div>';

}
return __p
};

this["Blog"]["Templates"]["worksList"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template pour la workslist list -->\n<div id="wraplist-list">\n     \t';
  var tab = [];
            tab[-1] = 0;
        ;
__p += '\n    ';
 _.each(works ,function(work, i){ ;
__p += '\n             ';
 if (_.isEmpty(work.get('gallery')) === false || _.isEmpty(work.get('customthumb')) === false ) { ;
__p += '\n             \t';
  
             		if (sortkey === 'annees') {
             			tab[i] = works[i].get('custom_fields')['_pinfos_annee'];
             		} else if (sortkey === 'categories') {
             			tab[i] = works[i].get('categories')[0]['title'];
             		}
             	;
__p += '\n              \t';
 if ( String(tab[i-1]) !== String(tab[i])) { ;
__p += '\n             \t\t';
 if(i > 0) { ;
__p += '</div>';
 } ;
__p += '\n             \t\t<div class="segment">\n              \t\t<div class="wrapthumb">\n              \t\t\t<div class="sortitem">' +
((__t = ( tab[i] )) == null ? '' : __t) +
'</div>\n\t                    <a class="workthumb2" data-id="' +
((__t = ( work.get("id") )) == null ? '' : __t) +
'" title="' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'" href="#works/' +
((__t = ( work.get('slug') )) == null ? '' : __t) +
'">       \t\n\t                    \t';
 if (_.isEmpty(work.get('customthumb')) === true) { ;
__p += '      \t\n\t                    \t\t<img width="60px" src=\'' +
((__t = ( work.get('thumbmini') )) == null ? '' : __t) +
'\' /><h5>' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'</h5>\n\t                    \t';
 } else { ;
__p += '\n\t                    \t\t<img width="60px" src=\'' +
((__t = ( work.get('customthumbmini') )) == null ? '' : __t) +
'\' /><h5>' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'</h5>\n\t                    \t';
 } ;
__p += '\n\t                    </a>\n                 \t</div>             \t\t\t\n             \t';
 } else { ;
__p += '\n              \t\t<div class="wrapthumb">\n\t                    <a class="workthumb2" data-id="' +
((__t = ( work.get("id") )) == null ? '' : __t) +
'" title="' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'" href="#works/' +
((__t = ( work.get('slug') )) == null ? '' : __t) +
'"> \n\t                    \t';
 if (_.isEmpty(work.get('customthumb')) === true) { ;
__p += '      \t\n\t                    \t\t<img width="60px" src=\'' +
((__t = ( work.get('thumbmini') )) == null ? '' : __t) +
'\' /><h5>' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'</h5>\n\t                    \t';
 } else { ;
__p += '\n\t                    \t\t<img width="60px" src=\'' +
((__t = ( work.get('customthumbmini') )) == null ? '' : __t) +
'\' /><h5>' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'</h5>\n\t                    \t';
 } ;
__p += '\n\t                    </a>\n                 \t</div>                  \t\t\n             \t';
 } ;
__p += '             \t\n           \t\t\t\n             \t\n             ';
 } ;
__p += '    \n    ';
 }); ;
__p += '\n</div>';

}
return __p
};

this["Blog"]["Templates"]["worksListMain"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- template pour mainworklist -->\n<section id="tools">\n</section>\n<div id="wrapper">\t\t\t\n\t<section class="maincontent_index">\n\t</section>\n</div>\t';

}
return __p
};

this["Blog"]["Templates"]["worksListMini"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- template pour worklistmini -->\n';
  var tab = [];
    tab[-1] = 0;
;
__p += '\n<nav class="jThumbnailScroller" id="workslistmini">\n\t<div class="jTscrollerContainer">\t\n\t\t<div class="jTscroller">\t\t\t\t\t\t\n\t\t    ';
 _.each(works ,function(work, i){ ;
__p += '\n\t              ';
 if (_.isEmpty(work.get('gallery')) === false || _.isEmpty(work.get('customthumb')) === false ) { ;
__p += '\n\t\t\t          \t';
  
			          		if (sortkey === 'annees') {
			          			tab[i] = works[i].get('custom_fields')['_pinfos_annee'];
			          		} else if (sortkey === 'categories') {
			          			tab[i] = works[i].get('categories')[0]['title'];
			          		}
			          	;
__p += '\n\t                    \t\t<a data-id="' +
((__t = ( work.get("id") )) == null ? '' : __t) +
'" href="#works/' +
((__t = ( work.get('slug') )) == null ? '' : __t) +
'" class="thumb_color" id="' +
((__t = ( work.get("slug") )) == null ? '' : __t) +
'">\n\t                    \t\t\n\t                    \t\t';
 if (work.get('customthumb')) { ;
__p += '\n\t                    \t\t\t<img width="120px" src=\'' +
((__t = ( work.get('customthumb')[0] )) == null ? '' : __t) +
'\' />\n\t                    \t\t\t<div class="thumbinfos">\n\t\t                    \t\t\t<h4>' +
((__t = ( works[i].get('title') )) == null ? '' : __t) +
'</h4>\n\t\t                    \t\t\t<h5>' +
((__t = ( tab[i] )) == null ? '' : __t) +
'</h5>\t\n\t                    \t\t\t</div>\t\t\t                    \t\t\t\n\t\t                    \t';
 } else { ;
__p += '\n\t\t                    \t\t<img width=\'120px\' src=\'' +
((__t = ( work.get('thumbmini') )) == null ? '' : __t) +
'\' />\n\t\t                    \t\t<div class="thumbinfos">\n\t\t                    \t\t\t<h4>' +
((__t = ( works[i].get('title') )) == null ? '' : __t) +
'</h4>\n\t\t                    \t\t\t<h5>' +
((__t = ( tab[i] )) == null ? '' : __t) +
'</h5>\t\n\t                    \t\t\t</div>\t\t\t\t      \n\t\t                    \t';
 } ;
__p += '\n\t\t                    \t</a>\n\t              ';
 } ;
__p += '    \n\t\t    ';
 }); ;
__p += '\n\t\t</div>\n\t</div>\n</nav>';

}
return __p
};

this["Blog"]["Templates"]["worksListThumbs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\t<!-- template pour la workslist thumb -->\n\t<div id="wraplist">\n      \t';
  var tab = [];
             tab[-1] = 0;
         ;
__p += '\n\t    ';
 _.each(works ,function(work, i){ ;
__p += '\n              ';
 if (_.isEmpty(work.get('gallery')) === false || _.isEmpty(work.get('customthumb')) === false ) { ;
__p += '\n              \t';
  
              		if (sortkey === 'annees') {
              			tab[i] = works[i].get('custom_fields')['_pinfos_annee'];
              		} else if (sortkey === 'categories') {
              			tab[i] = works[i].get('categories')[0]['title'];
              		}
              	;
__p += '\n          \t\t<div class="wrapthumb">\n                    <a class="workthumb" data-id="' +
((__t = ( work.get("id") )) == null ? '' : __t) +
'" title="' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'" href="#works/' +
((__t = ( work.get('slug') )) == null ? '' : __t) +
'">       \t\n                    \t';
 if (_.isEmpty(work.get('customthumb')) === true) { ;
__p += '\n                    \t\t<img src=\'' +
((__t = ( work.get('thumbnormal') )) == null ? '' : __t) +
'\' />\n                    \t';
 } else { ;
__p += '\n                    \t\t<img src=\'' +
((__t = ( work.get('customthumb') )) == null ? '' : __t) +
'\' />\n                    \t';
 } ;
__p += '\n                    </a>\n                    <h5 class="worktitle">' +
((__t = ( work.get("title") )) == null ? '' : __t) +
'</h5>\n\n             \t</div>             \t\t\t\n              ';
 } ;
__p += '    \n\t    ';
 }); ;
__p += '\n</div>';

}
return __p
};
var Blog = (function (blog) {

    blog.Models.Bio = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=bio&custom_fields=_pinfosbio_fileurl&include=id,content,title,slug,custom_fields&slug='+slug;
            return this;
        },
        //  parse: function (response) {
        //     //http://stackoverflow.com/questions/14372151/backbone-js-model-overwriting-parse-for-custom-api
        //     if (response.post) {
        //         return response.post;
        //     }
        //     return response;
        // },       
        initialize : function Doc() {
            console.log('Bio Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    blog.Collections.BioList = Backbone.Collection.extend({
        model : blog.Models.Bio,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=bio&include=,d,auteurs,title,slug,type&order=asc';
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
        initialize : function() {
            console.log('Biolist collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

	blog.Models.HomePic = Backbone.Model.extend({
        initialize : function Doc() {
            console.log('Home Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.HomePicslist = Backbone.Collection.extend({
		model : blog.Models.HomePic,
		url : wp_vars.blogurl+'/api/get_post?post_type=page&custom_fields=_pmediagallery_blocspics&include=custom_fields,id&slug=home',
        // on parse la réponse pour avoir accès aux images
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.post.gallery;
        },
		initialize : function() {
			console.log('homepage collection construite');
		}
	});

	return blog;
}(Blog));


var Blog = (function (blog) {

	blog.Models.MenuElt = Backbone.Model.extend({
        defaults : {
            'id' : '?',
            'url' : '?',
            'slug' : '?'
        }
	});

    blog.Collections.MenuList = Backbone.Collection.extend({
        model: blog.Models.MenuElt,
        url: wp_vars.blogurl+'/api/get_page_index?include=id,url,slug',
        // on parse la réponse pour avoir accès aux pages
        parse: function(response) {
            //console.log(response.pages);
            return response.pages;
        },
        initialize : function Doc() {
            console.log('Menu Collection Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    //alert( wp_vars.blogurl+'/api/get_page_index/?include=id,url,slug');
	return blog;
}(Blog));


var Blog = (function (blog) {

    blog.Models.News = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=works&include=id,categories,content,title,id&slug='+slug;
            return this;
        },
        initialize : function Doc() {
            console.log('news Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    blog.Collections.NewsList = Backbone.Collection.extend({
        model: blog.Models.News,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=news&include=id,title,content,gallery,slug&count=-1';
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
        sortByType : function() {
                this.comparator = function(model) {
                    return [model.get('tax')[0]['term_id'], model.get('id')];
                };
                this.sortkey = 'newstype';

                this.sort();
                console.log(this.models);
        },
        sortByDate : function() {
                //http://www.experts-exchange.com/Programming/Languages/Scripting/JavaScript/A_3586-Sorting-Arrays-and-Collections-in-JavaScript.html
                this.comparator = function(v1,v2) {
                    var t=v1; v1=v2; v2=t;
                    console.log(v1.get('tax')[0].term_id);
                    console.log(v1.get('title'));
                    if ( v1.get('tax')[0].term_id < v2.get('tax')[0].term_id) return 1;
                    if ( v1.get('tax')[0].term_id > v2.get('tax')[0].term_id) return -1;
                    // else, they are equal
                       if ( v1.get('menu_order') < v2.get('menu_order')) return 1;
                       if ( v1.get('menu_order') > v2.get('menu_order')) return -1;
                   return 0;
                };
                this.sortkey = 'newstype';
                this.sort();
        },
        initialize : function() {
            this.sortByDate();
            console.log('NewsList collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
        }
    });

	return blog;
}(Blog));
var Blog = (function (blog) {

	blog.Models.Notice = Backbone.Model.extend({
        query : function () {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=page&include=id,content,title,slug&slug=notice';
            return this;
        },
         parse: function (response) {
            //http://stackoverflow.com/questions/14372151/backbone-js-model-overwriting-parse-for-custom-api
            if (response.post) {
                return response.post;
            }
            return response;
        },       
        initialize : function Doc() {
            console.log('Notice Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});


	return blog;
}(Blog));
var Blog = (function (blog) {

	blog.Models.Picture = Backbone.Model.extend({
        // defaults : {
        //     'title' : "",
        //     'description' : "",
        //     'attachments' : "",
        //     'slug'         : ""
        // },
        initialize : function Doc() {
            console.log('Picture Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.PicturesGallery = Backbone.Collection.extend({
		model : blog.Models.Picture,
		initialize : function() {
			console.log('PicturesGallery collection construite');
		}
	});

    blog.Models.Video = Backbone.Model.extend({
        query : function (videourl) {
            this.urlRoot = 'http://vimeo.com/api/oembed.json?url='+encodeURIComponent(videourl)+'&portrait=0&title=0&byline=0';
            return this;
        },
        initialize : function Doc() {
            console.log('Video Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    blog.Collections.VideosGallery = Backbone.Collection.extend({
        model : blog.Models.Video,
        initialize : function() {
            console.log('VideosGallery collection construite');
        }
    });

	return blog;
}(Blog));
var Blog = (function (blog) {

	blog.Models.Texte = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=texts&custom_fields=_pinfostextes_fileurl&include=id,content,title,slug,custom_fields&slug='+slug;
            return this;
        },
        //  parse: function (response) {
        //     //http://stackoverflow.com/questions/14372151/backbone-js-model-overwriting-parse-for-custom-api
        //     if (response.post) {
        //         return response.post;
        //     }
        //     return response;
        // },       
        initialize : function Doc() {
            console.log('Texte Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.TextesList = Backbone.Collection.extend({
		model : blog.Models.Texte,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=texts&custom_fields=_pinfostextes_sortname&include=custom_fields,id,auteurs,title,slug,type&key=_pinfostextes_sortname&order=asc';
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
		initialize : function() {
			console.log('TextesList collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
		}
	});

	return blog;
}(Blog));
var Blog = (function (blog) {

	blog.Models.Work = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=works&custom_fields=_pmediagallery_blocspics,_pinfos_annee,_pinfos_description&include=id,categories,content,custom_fields,title,id&slug='+slug;
            return this;
        },
        // // on parse la réponse pour avoir accès aux posts
        // parse: function(response) {
        //     return response.post;
        // },
        // defaults : {
        //     'title' : "",
        //     'description' : "",
        //     'attachments' : "",
        //     'slug'         : ""
        // },
        initialize : function Doc() {
            console.log('Work Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.WorksList = Backbone.Collection.extend({
		model : blog.Models.Work,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=works&key=_pinfos_annee&custom_fields=_pinfos_annee,_pinfos_description&order=desc&include=id,title,categories,content,gallery,custom_fields,slug&count=-1';
            return this;
        },
        query : function () {
            this.url = "/works/"+query;
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
        // fonction qui trie la collection par catégories, groupée par titre //
        sortByCat : function() {
                this.comparator = function(model) {
                    return [model.get('categories')[0]['slug'], model.get('slug')];
                };
                this.sortkey = 'categories';

                this.sort();
                console.log(this.models);
        },
        // fonction qui trie la collection par catégories, groupée par titre //
        sortByDate : function() {
                //http://www.experts-exchange.com/Programming/Languages/Scripting/JavaScript/A_3586-Sorting-Arrays-and-Collections-in-JavaScript.html
                this.comparator = function(v1,v2) {
                    var t=v1; v1=v2; v2=t;
                    if ( v1.get('custom_fields')['_pinfos_annee'] < v2.get('custom_fields')['_pinfos_annee'] ) return -1;
                    if ( v1.get('custom_fields')['_pinfos_annee'] > v2.get('custom_fields')['_pinfos_annee'] ) return 1;
                    // else, they are equal
                       if ( v1.get('slug') < v2.get('slug') ) return 1;
                       if ( v1.get('slug') > v2.get('slug') ) return -1;
                   return 0;
                };
                this.sortkey = 'annees';
                this.sort();
        },
		initialize : function() {
            this.sortkey = 'annees';
            this.displaymode = 'thumbs';
			console.log('WorksList collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
		}
	});

	return blog;
}(Blog));
//http://codehustler.org/rendering-nested-views-backbone-js/
var Blog = (function (blog) {
    blog.Views.BaseView = Backbone.View.extend({
        renderNested: function( parentview, view, selector, results ) {
             var $element = ( selector instanceof $ ) ? selector : parentview.find( selector );
             view.setElement( $element ).render(results);
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.BioMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.template = blog.Templates['bio']();
            _.bindAll(this, 'render');
             //this.collection.bind('sort', 'render');
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            this.$el.html(this.template);
            // la fonction renderNested est héritée de la vue BaseView //
            var renderNested = this.renderNested;
            var parentview = this.$el;
            var that = this;
            // si mybiosidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (!this.mybiosidebarview) {
                
                // on instancie la vue mybiosidebarview
                var mybiosidebarview = new blog.Views.BioSidebarView(Blog.mybiolist);
                this.mybiosidebarview =  mybiosidebarview;
                // on charge les données dans la sidebar //
                Blog.mybiolist.all().fetch({
                  update: true,
                  success: function(results) {
                    renderNested( parentview, mybiosidebarview, "#sidebar", results);
                    // on rend le contenu //
                    //console.log(Blog.mybiolist.at(0));
                    that.renderText();
                  }
                });

            Blog.myapprouter.myheight();
            $(document).find("body").addClass('spinner');

            return this;
        },

        renderText : function(myslug) {
            this.$el.find(".maincontent").empty();
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
           // si le slug du post n'est pas présent //
            if (!myslug) {
                // definition du texte à charger par défaut: on prend le premier de la liste de la colllection //                   
                slug = Blog.mybiolist.at(0).get('slug');
                Blog.mybiolist.slug = slug;
               // console.log(slug);
            } else {
                slug = myslug;
            }
            //alert(slug);
             // si mybiosidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (this.mybiocontentview  === undefined) {
                // on instancie la vue mybiosidebarview en utilisant la vue TextesContentView
            var mybiocontentview = new blog.Views.TextesContentView(Blog.mybio);
            //};
            //console.log(slug);
            // on charge les données et on rend la vue imbriquée //
            Blog.mybio.query(slug).fetch({
              update: true,
              success: function(result) {
                console.log(result);
                renderNested( parentview, mybiocontentview, ".maincontent", result);
                
              }
            });
              
            return this;
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.BioSidebarView = Backbone.View.extend({
        initialize : function (data) {
            _.bindAll(this, 'render');
            this.collection = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);

        },
        render : function () {
            if(!this.collection.slug){
              this.collection.slug = this.collection.at(0).get('slug');
            }
            var renderedContent = blog.Templates['textesSidebar']({textes: this.collection.models, slug: this.collection.slug});
            i = 1;
            this.$el.html(renderedContent).find('a').each(function() {
                $(this).delay(i * 50).animate({opacity: 1});
                i++;
            });

            sidebar = this.$el;
            if(!sidebar.hasClass("mCustomScrollbar")) {
                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }
            $(document).find("body").removeClass('spinner');
            sidebar.mCustomScrollbar("update");
            return this;
        },
        showactif : function(item) {
            this.$el.find('h4').removeClass('actif');
            $(item.currentTarget).find("h4").addClass('actif');
        },

        events: {
            "click #sidebarwrapper a" : "showactif"
        }
   
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.BioView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = blog.Templates['bio']();
        },
        render : function () {
            console.log(this.model);
            var renderedContent = this.template({mybio: this.model});
            this.$el.html(renderedContent).find(".bio").css('opacity', 0);
            Blog.myapprouter.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy"); 
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }          
            this.$el.find(".bio").animate({'opacity': 1},{duration: 500, complete: function() {}});

            return this;
            
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.HomeView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = blog.Templates['home']();
        },
        render : function() {
            // on insère un gros bouton pour le roll over du menu sur la home

            console.log(this.collection);
            var renderedContent = this.template;
            this.$el.html(renderedContent);
            var picsArray = [];
            _.each(this.collection.models, function(data) {
              picsArray.push(data.get('full'));
            });
            $.backstretch(_.shuffle(picsArray), {duration: 4000, fade: 2050});
            $(document).find("body").removeClass('spinner');
            //ça marche !!!
            // on replie le menu principal //
           // this.$el.find("#main_header").animate({'top':"-30px"});
        },
        events : {
            "mouseenter #big-btn-home-up"  : "mouseOver",
            "mouseenter #big-btn-home-down"  : "mouseOut"
        },

        mouseOver : function(e) {

                var elt = this.$el.find("#big-btn-home-up");
                this.$el.parent().parent().find("#main_header").stop(true, true).animate({'top':"0px"}, { complete: function() {elt.css("z-index", -1);}});
                //
        },
        mouseOut : function(e) {
                var elt = this.$el.find("#big-btn-home-up");
                this.$el.parent().parent().find("#main_header").stop(true, true).animate({'top':"-40px"}, { complete: function() {elt.css("z-index", 1);}});
    
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.MenuView = Backbone.View.extend({
        el : $("#blog_mainmenu"),
        initialize : function () {
            this.template = $("#blog_mainmenu_template").html();
        },
        render : function () {
            var renderedContent = Mustache.to_html(this.template, 
                {posts : this.collection.toJSON()} 
            );

            this.$el.html(renderedContent);
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.NewsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
        },
        render : function () {
            console.log(this.collection);
            // on efface le contenu de #mainbb
            this.$el.html("");
            var renderedContent = blog.Templates['news']({mynews: this.collection.models});
            this.$el.html(renderedContent).find("#txtwrapper").css('opacity', 0);
            // Blog.myapprouter.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy");
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }
            this.$el.find("#txtwrapper").animate({'opacity': 1},{duration: 300, complete: function() {}});
            Blog.myapprouter.myheight();
            
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.NoticeView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#notice_template").html());
        },
        render : function () {
            console.log(this.model);
            var renderedContent = blog.Templates['notice']({mynotice: this.model});
            this.$el.html(renderedContent).find("#txtwrapper").css('opacity', 0);
            Blog.myapprouter.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy"); 
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }         
            this.$el.find("#txtwrapper").animate({'opacity': 1},{duration: 300, complete: function() {}});
            
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.PictureView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
        },
        render : function () {
            var renderedContent = blog.Templates['picture']({mypicture: this.model});
            var content = this.$el.find('#visuel');
            content.addClass('spinner2');
            var that = this;
            this.$el.find('.maincontent #visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 0}, 300, function() {
              content.html(renderedContent);
              that.showOnLoaded();
            });
        },
        showOnLoaded : function() {
          var $that = this.$el.find(".maincontent");
           this.$el.find(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();
               $that.find("#visuel").removeClass('spinner2');
               // on actualise la scrollbar
              $that.parent().find("#sidebar").mCustomScrollbar("update");
              $that.find('#visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 1}, 400);
            });
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.PicturesGalNavView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            //this.templatesinglepic = _.template($("#navgallery_template").html());
            // compteur //
            this.idpic = 0;
            // on déclare notre objet picture //
            Blog.mypicture = new blog.Models.Picture();
            // on déclare la vue picture //
            Blog.mypictureview = new blog.Views.PictureView(Blog.mypicture);

            // on déclare notre objet video //
            Blog.myvideo = new blog.Models.Video();
            // on déclare la vue vidéo //
            Blog.myvideoview = new blog.Views.VideoView(Blog.myvideo);

        },
        render : function () {
            var renderedContent = blog.Templates['picturesGalNav']({gallery : this.collection.models});
            // nb d'images //
            this.gallerylength = this.collection.models.length;

            // on fait apparaitre dans #tools la nav en fondu //
            i = 1;
            //console.log(this.collection.models.length);
            this.$el.find("#navgal").empty();
            //if (this.collection.models.length > 1) {
                this.$el.find("#navgal").append(renderedContent).find('a').each(function() {
                    $(this).delay(i * 150).fadeIn();
                    i++;
                });
                // on charge la première image par défaut //
                this.showpicture(0);
            //}

            return this;
        },
        events : {
            "click a#btn-media-next"  : "nextpicture",
            "click a#btn-media-prev"  : "prevpicture",
            "click a.linkpic"   : "linktopic"
        },
        showpicture: function(i) {
            console.log(this.collection.models[i].get('type'));
            if (this.collection.models[i].get('type') == 'image') {
                Blog.mypicture.set(this.collection.models[i].toJSON());
                Blog.mypictureview.render();
            } else {
                videourl = this.collection.models[i].get('videourl');
                // on charge l'objet contenant les infos video depuis vimeo //
                var idpic = this.idpic;
                Blog.myvideo.query(videourl).fetch({
                    update: true,
                    success: function(results) {
                        console.log(results);
                        Blog.myvideoview.render(results);
                    }
                });
            }
            this.idpic = i;
            this.activelink();
            
        },
        activelink : function () {
            this.$el.find("#navgal a").removeClass('actif');
            this.$el.find("#navgal a[data-bypass|="+this.idpic+"]").addClass('actif');
        },

        linktopic : function(e) {
            // on récupère le num d'index contenu dans le lien
            index = e.currentTarget.attributes['data-bypass'].value;
            this.idpic = index;
            // on affiche l'image //
            this.showpicture(index);
        },

        nextpicture: function(e) {
            console.log(e);
            i = this.idpic;
            if (i >= this.gallerylength - 1) {
                // this.idpic = 0;
                // i = 0;
                this.$el.find("#nextwork a").click();
            } else {
                i++;
                this.showpicture(i);
            }
        },

        prevpicture: function(e) {
            console.log(e);
            i = this.idpic;
            if ( i <= 0 ) {
                // this.idpic = 0;
                // i = 0;
                this.$el.find("#prevwork a").click();
            } else {
                i--;
                this.showpicture(i);
            }
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.TextesContentView = Backbone.View.extend({
        initialize : function (data) {
            _.bindAll(this, 'render');
            this.model = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var mycontent = this.$el;
            var renderedContent = blog.Templates['textesContent']({texte: this.model});
              this.$el.animate({
                opacity: 0
              }, {
                duration: 100,
                complete: function() {
                        $(mycontent).html(renderedContent);
                        var mycontenttxt = $(mycontent).find('#txtwrapper');
                        mycontenttxt.mCustomScrollbar("destroy");
                        if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                            mycontenttxt.mCustomScrollbar({
                                set_height: "100%",
                                autoHideScrollbar: true,
                                autoDraggerLength: false,
                                scrollInertia: 150,
                                theme: "dark"
                            });
                        }
                         Blog.myapprouter.myheight();
                        mycontenttxt.mCustomScrollbar("update");
                       $(mycontent).animate({'opacity': 1}, {duration: 500});
                }
              });

            
            
            return this;
        }
   
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.TextesMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.template = blog.Templates['textesMain']();
            //this.mytextssidebarview = new blog.Views.TextesSidebarView(Blog.mytexteslist);
            _.bindAll(this, 'render');
        },
        render : function () {
            this.$el.html(this.template);
            // la fonction renderNested est héritée de la vue BaseView //
            var renderNested = this.renderNested;
            var parentview = this.$el;
            var that = this;
            // si mytextssidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            if (mytextssidebarview  === undefined ) {
                // on instancie la vue mytextssidebarview
               // this.mytextssidebarview = new blog.Views.TextesSidebarView(Blog.mytexteslist);
                var mytextssidebarview =  new blog.Views.TextesSidebarView(Blog.mytexteslist);
                // on charge les données dans la sidebar //
                Blog.mytexteslist.all().fetch({
                  //update: true,
                  success: function(results) {
                    renderNested( parentview, mytextssidebarview, "#sidebar", results);
                    // on rend le contenu //
                    //that.renderText();
                  }

                });
            }
            Blog.myapprouter.myheight();
            $(document).find("body").addClass('spinner');

            return this;
        },

        renderText : function(myslug) {
            this.$el.find(".maincontent").empty();
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            slug = myslug;
            // si le slug du post n'est pas présent //
            // if (!myslug) {
            //     // definition du texte à charger par défaut: on prend le premier de la liste de la colllection //                   
            //     slug = Blog.mytexteslist.at(0).get('slug');
            //     console.log(slug);
            // } else {      
            //     slug = myslug;
            // };
            //alert(slug);
             // si mytextssidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (this.mytextscontentview  === undefined) {
                // on instancie la vue mytextssidebarview
            this.mytextscontentview = new blog.Views.TextesContentView(Blog.mytexte);
            var mytextscontentview =  this.mytextscontentview;
            //};
            // on charge les données et on rend la vue imbriquée //
            Blog.mytexte.query(slug).fetch({
              //update: true,
              success: function(result) {
                renderNested( parentview, mytextscontentview, ".maincontent", result);
              }
            });
              
            return this;
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.TextesSidebarView = Backbone.View.extend({
        initialize : function (data) {
            _.bindAll(this, 'render');
            this.collection = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);

        },
        render : function () {
            var renderedContent = blog.Templates['textesSidebar']({textes: this.collection.models, slug: this.collection.slug});
            i = 1;
            this.$el.html(renderedContent).find('a').each(function() {
                $(this).delay(i * 50).animate({opacity: 1});
                i++;
            });

            sidebar = this.$el;
            if(!sidebar.hasClass("mCustomScrollbar")) {
                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }
            $(document).find("body").removeClass('spinner');
            sidebar.mCustomScrollbar("update");
            return this;
        },
        showactif : function(item) {
            this.$el.find('h4').removeClass('actif');
            $(item.currentTarget).find("h4").addClass('actif');
        },

        events: {
            "click #sidebarwrapper a" : "showactif"
        }
   
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.VideoView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
        },
        render : function () {
            var renderedContent = blog.Templates['video']({myvideo: this.model});
            var content = this.$el.find('#visuel');
            content.addClass('spinner2');
            var that = this;
            this.$el.find('.maincontent #visuel').animate({'opacity': 0}, 300, function() {
               content.html(renderedContent);
                that.showOnLoaded();
            });
        },
        showOnLoaded : function() {
          var $that = this.$el.find(".maincontent");
           this.$el.find(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();
               $that.find("#visuel").removeClass('spinner2');
               $that.animate({'opacity': 1});
               // on actualise la scrollbar
              $that.parent().find("#sidebar").mCustomScrollbar("update");
              $that.find('#visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 1}, 400);
            });
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorkMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = blog.Templates['workMain']();
            _.bindAll(this, 'render');

        },
        render : function () {
           this.renderWorksListMini();
            //this.undelegateEvents();  
            var renderedContent = this.template;
            //on fait apparaitre dans #mainbb worksmainview//
            this.$el.html(renderedContent);
            
           // Blog.myapprouter.myheight();

            return this;
        },

        renderWork : function(slug_post) {
            // on charge les données dans myworkslist
            Blog.myworkslist.all().fetch({
            update: true,
            success: function(results) {
              // on stock le slug du post dans la collection pour gérer le item actif dans workslistmini //
              Blog.myworkslist.workslug = slug_post;
              myworkid = results.where({'slug': slug_post})[0]['id'];
              Blog.mywork = Blog.myworkslist.get(myworkid);
             // myworkview.remove();
              var myworkview = new blog.Views.WorkView(Blog.mywork);
             // myworkview.undelegateEvents();
              myworkview.render(Blog.mywork);
             // myworkview.delegateEvents();
            }

            });
        },

        // fonction pour rendre la vue workslist & worklisttools
        renderWorksListMini : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            // on instancie la vue myworkslistminiview
            var myworkslistminiview = new blog.Views.WorksListMiniView(Blog.myworkslist);

            // on charge les données dans workslistmini //
            Blog.myworkslist.all().fetch({
              update: true,
              success: function(results) {
                //console.log(results);
                //myworkslistminiview.render(results);
                // on rend myworkslistview dans .maincontent comme enfant de parentview
               renderNested(parentview, myworkslistminiview, "#tools", results);
               console.log("list done");
              }
            });

            return this;
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorkSidebarView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var renderedContent = blog.Templates['workSidebar']({work: this.model});
            this.$el.html(renderedContent);
            sidebar = this.$el;

                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    autoDraggerLength:false,
                    theme: "dark"
                });
                
            return this;
        },

        events: {
            "click a#toogletext": "toogleText"
        },

        toogleText : function(e) {
            console.log(e);
            e.preventDefault();
            var btn = $(e.currentTarget);
            var elt = this.$el.find("#text");
            var sidebar = this.$el;
            if ( elt.is( ":hidden" ) ) {
                elt.slideDown( "fast" , function() {
                    btn.find("#up").show();
                    btn.find("#down").hide();
                    // on ajoute la scrolbar
                    sidebar.mCustomScrollbar("update");
                });
            } else {
                elt.slideUp("fast", function() {
                    btn.find("#up").hide();
                    btn.find("#down").show();
                    sidebar.mCustomScrollbar("update");
                });
            }
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorkView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
           this.model = data;
           this.template = blog.Templates['workMain']();
            // on remt i à 0 //
            this.i = 0;
        },

        renderPictures : function () {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements
            if (Blog.picturesgalview) {
                Blog.picturesgalview.undelegateEvents();
            }

            //console.log("work picture", this.model);           
            // on déclare un objet collection contenant les images liées au post //
            var picturesgal = new blog.Collections.PicturesGallery(this.model.get('gallery'));
            //console.log("picturegal",Blog.picturesgal);
            // on déclare un objet vue de notre galerie d'images //
            Blog.picturesgalview = new blog.Views.PicturesGalNavView(picturesgal);
            //renderNested(parentview, Blog.picturesgalview, "#tools", picturesgal);
            // on rend la vue //
            Blog.picturesgalview.render();
        },

        renderVideos : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            if (Blog.videosgalview) {
                Blog.videosgalview.undelegateEvents();
            }

            this.$el.find("#picvidswitcher a").removeClass('actif');
            this.$el.find("#picvidswitcher #videos").addClass('actif');
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements
             // on déclare un objet collection contenant les images liées au post //
            var videosgal = new blog.Collections.VideosGallery(Blog.mywork.get('galleryvideos'));
            // on déclare un objet vue de notre galerie d'images //
            Blog.videosgalview = new blog.Views.VideosGalNavView(videosgal);
            //renderNested(parentview, Blog.videosgalview, "#tools", videosgal);
            Blog.videosgalview.render();
        },

        picvidswitcher : function(p, v) {

            // si il ya au moins 1 image et 1 video //
            if (p > 0 && v > 0) {
                $("#picvidswitcher").html('<ul><li><a id="images" href="#" data-bypass>images('+p+')</a></li><li><a id="videos" href="#" data-bypass>vidéos('+v+')</a></li></ul>');
                this.renderPictures();
            // si il ya au moins une video et pas d'images //
            } else if (v > 0 && p === 0) {
                this.renderVideos();
            // si il y a au moins une image et pas de vidéos //
            } else if (p > 0 && v === 0) {
                this.renderPictures();
            }
        },

        renderSidebar : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;

            if (Blog.sidebarworksview) {
                Blog.sidebarworksview.undelegateEvents();
            }
            // on rend la sidebar //
            Blog.sidebarworksview = new blog.Views.WorkSidebarView(this.model);

            renderNested(parentview, Blog.sidebarworksview, "#sidebar", this.model);
        },

        render : function () {

            // on ecrit le titre dans hiddentitle //
            this.$el.find("#tools #hiddentitle").html("<h3>"+this.model.get('title')+"&nbsp;</h3>"+"<h4>&mdash; "+this.model.get('custom_fields')['_pinfos_annee'][0]+"</h4>");
            // on active la vignette active dans workslist mini //

            this.showactif(this.model.get('slug'));
            //var renderedContent = this.template({work : this.model});
            var mymodel = this.model;
            // on crée une variable contenant le nombre d'image dans la galerie //
            var galleryimageslength;
            var galleryvideoslength;

            if (this.model.get('gallery')) { galleryimageslength = this.model.get('gallery').length; } else { galleryimageslength = 0; }
            if (this.model.get('galleryvideos')) { galleryvideoslength = this.model.get('galleryvideos').length; } else { galleryvideoslength = 0; }
            // on assigne une url à nextwork si workslist est définie//
            if (Blog.myworkslist) { this.nextwork(); }
            var that = this;
            // on fait apparaitre les fleche et le btn depliant la liste mini //
           // this.$el.find('.nextprevworks').css('display', 'block');
            // on créer navgal et picvidswitcher dans #tools//
            //this.$el.find("#tools").html("<nav id='navgal'></nav><nav id='picvidswitcher'></nav>");

            // on fait apparaitre dans #mainbb .maincontent le media //
            this.$el.find("#wrapper").fadeOut('fast', function () {
                that.renderSidebar();
                if($(this).hasClass("mCustomScrollbar")) {
                   $(this).mCustomScrollbar("destroy");
                }
                //var sidebar = $(this).find('#sidebar');
                //that.renderSidebar();
                // on desactive la scroll bar //
                $(this).css({"overflow-y": "hidden"});
                // on écrit les infos dans la side bar//
                $(this).find('#navgal, #visuel').empty();

                $(this).find('.maincontent').css({"overflow": "hidden", "height": "100%"});
              
                $(this).fadeIn('fast', function() { that.picvidswitcher(galleryimageslength, galleryvideoslength);});
                
            });
          
            return this;
        },


        scrolltonextprev : function(e) {
            slug = $(e.currentTarget).attr('data-slug');
            var activeitem = this.$el.find("#"+slug);
            //this.$el.find("#workslistmini").mCustomScrollbar("scrollTo", "#"+this.collection.workslug);
            this.$el.find("#workslistmini").mCustomScrollbar("scrollTo", "#"+slug, {callbacks: this.showactif(slug)});
            //this.$el.find("#workslistmini").scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(slug) } );
            this.undelegateEvents();
        },

        showactif : function(slug) {
            item = this.$el.find("#"+slug);
            this.$el.find('.jTscroller a').removeClass('actif');
            item.addClass('actif');
        },

        nextwork : function() {
            //on cherche le numéro d'index du model dans lacollection //

            var index = this.collection.indexOf(this.model);

            var lastindex = this.collection.length - 1;
            // on détermine le slug du prochain model dans la collection //
            nextmodel = this.collection.at(index+1);
            prevmodel = this.collection.at(index-1);

            if(prevmodel) {
                slugprev = prevmodel.get('slug');
            } else {
                slugprev = this.collection.at(lastindex).get('slug');
            }
            prevhref = "#works/"+slugprev;

            if(nextmodel) {
                slugnext = nextmodel.get('slug');
            } else {
                slugnext = this.collection.at(0).get('slug');
            }
            nexthref = "#works/"+slugnext;

            console.log(this.$el.find("#nextwork").find('a'));

            this.$el.find("#nextwork").find('a').attr({'href': nexthref, 'data-slug': slugnext});
            this.$el.find("#prevwork").find('a').attr({'href': prevhref, 'data-slug': slugprev});
        },



        events: {
            "click .nextprevworks a" : "scrolltonextprev",
            "click a#videos"   :  "renderVideos",
            "click a#images"   :   "renderPictures"
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            //console.log(Blog.Templates['workslistmain']());
            //var userDetailTemplate = window['JST']['templates/home/UserDetailTemplate.tpl'](data 
            this.template = blog.Templates['worksListMain']();
            _.bindAll(this, 'render');


        },
        render : function () {
            console.log(this.template);
            var renderedContent = this.template;
            //on fait apparaitre dans #mainbb worksmainview//
            this.$el.html(renderedContent);
            this.renderWorksList();
            return this;

        },

        // fonction pour rendre la vue workslist & worklisttools
        renderWorksList : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            // on instancie la vue myworkslistview
            if(!Blog.myworkslistview) {
                Blog.myworkslistview = new blog.Views.WorksListView(Blog.myworkslist);
            }
            var myworkslistview = Blog.myworkslistview;

            // on instancie la vue worklisttools //
            var myworkslisttoolsview = new blog.Views.WorksListToolsView();
              // on charge les données dans myworkslist
              Blog.myworkslist.all().fetch({
                //update: true,
                success: function(result) {
                  console.log(result);
                  // on rend myworkslistview dans .maincontent comme enfant de parentview
                  renderNested(parentview, myworkslistview, ".maincontent_index", result);
                  // on rend la vue workslisttoolsview dans #tools comme enfant de parentview //
                  renderNested(parentview, myworkslisttoolsview, "#tools");
                 // Blog.myapprouter.myheight();
                }
                
              });
            return this;
        },


        events : {
            "click #sortbydate"    : "sortbydate",
            "click #sortbycat"    : "sortbycat",
            "click #displaylist"    : "displaylist",
            "click #displaythumb"    : "displaythumb"
        },
// fonction pour le tri par années
        sortbycat : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslist.sortByCat();
        },
// fonction  pour le tri par catégories
        sortbydate : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslist.sortByDate();
        },
// fonction pour l'affichage par liste
        displaylist : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslistview.template = 'worksList';
            Blog.myworkslist.displaymode = 'list';
            //console.log(this.collection.displaymode);
            Blog.myworkslistview.render();
            // on affiche #sorting en mode list //
            this.$el.find("#sorting").css('display', 'block');
        },
// fonction pour l'affichage par vignettes
        displaythumb : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslistview.template = 'worksListThumbs';
            Blog.myworkslist.displaymode = 'thumbs';
            //Blog.myworkslistview.render();
            // on classe par date en vue thumb //
            Blog.myworkslist.sortByDate();
            // le bouton date est actif //
            this.$el.find("#sorting a").removeClass("actif");
            this.$el.find("#sortbydate").addClass("actif");
            // on cache #sorting en mode thumb //
            this.$el.find("#sorting").css('display', 'none');

        },

        // fonction pour donner une hauteur à #mainbb //
         myheight: function() {
            var offset = $('#mainbb').offset();
            // topOffset = distance entre le bloc #content et le haut de la fenetre //  
            var topOffset = offset.top;
            // on calcul la hauteur de la div #content //
            var contentheight = $(window).height()-(topOffset + $("#main_header").height()+ 40);
            $('#wrapper').css("height", contentheight);
            console.log(contentheight);
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListMiniView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            _.bindAll(this, 'render');
        },
        render : function () {

            //this.$el.find('.maincontent').remove();
            var that = this;
            var renderedContent = blog.Templates['worksListMini']({works : this.collection.models, sortkey: this.collection.sortkey});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.append(renderedContent);
            // on fait apparaitre le bouton unfold //
            //this.$el.find('#unfoldworks').css('display', 'block');
            // on applique l'autoscroll quand toutes les vignettes sont chargée//
            var myworksminielt = this.$el.find('#workslistmini');
            myworksminielt.imagesLoaded(function() {
                // fonction auto scroll vignettes // 
                myworksminielt.thumbnailScroller({
                        scrollerType:'hoverPrecise',
                                scrollerOrientation:'vertical',
                                acceleration:4,
                                scrollSpeed: 800,
                                noScrollCenterSpace:1
                });


            //myworksminielt.mCustomScrollbar("update");
            //that.$el.find("#unfoldworks a").click();
                        
            });

                    if(!myworksminielt.hasClass("mCustomScrollbar")) {
                    myworksminielt.mCustomScrollbar({
                        set_height: "100%",
                        scrollInertia: 150,
                        autoDraggerLength:false,
                        theme: "dark"
                    });
                }
            
            return this;
        },
        events: {
            "click #unfoldworks a" : "toggleworks",
            "click #btnfull a" : "gofullwindow",
            "click #closefull" : "closefullwindow",
            "mouseleave #workslistmini":"toggleworks"
        },

        gofullwindow : function() {
            $(document).find('html').addClass('fullwindow');
            Blog.myapprouter.myheight();
        },

        closefullwindow : function() {
            $(document).find('html').removeClass('fullwindow');
            Blog.myapprouter.myheight();
        },
  
        scrolltoactive : function () {
            var activeitem = this.$el.find("#"+this.collection.workslug);
            //console.log(activeitem);
            this.$el.find("#workslistmini").mCustomScrollbar("update");
            this.$el.find("#workslistmini").mCustomScrollbar("scrollTo", "#"+this.collection.workslug, {callbacks: this.showactif(activeitem)});
            //this.$el.find('.jTscroller').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(activeitem) } );
        },

        showactif : function(item) {
            this.$el.find('.jTscroller a').removeClass('actif');
            //console.log(this.$el.find('.jTscroller img'));
            item.addClass('actif');
        },

        toggleworks : function(e) {
            elt = this.$el.find("#workslistmini");
            if (elt.width() <= 0) {
                elt.stop(true, true).animate({'width': '260px', complete: this.scrolltoactive()}, 150);
                this.$el.find("#unfoldworks a").addClass('fold');
                
            } else {
                this.$el.find("#sidebar").css("display", "none");
                elt.stop(true, true).animate({'width': 0}, 150);
                this.$el.find("#unfoldworks a").removeClass('fold');
            }
        }

     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListToolsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
        },
        render : function () {
            var renderedContent = blog.Templates['workListTools']({sortkey: Blog.myworkslist.sortkey, displaymode: Blog.myworkslist.displaymode});
            this.$el.html(renderedContent);
            return this;
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListView = Backbone.View.extend({
        initialize : function (data) {
            this.collection = data;
            // par défaut le template et l'affichage par vignettes
            this.template = 'worksListThumbs';
            //_.bindAll(this, 'render');
            // on s'abonne aux tris de la collection avec la fonction this.render()
             this.collection.bind("sort", this.render, this); // remember: every function that uses 'this' as the current object should be in here
             //this.collection.bind('sort', 'render');
            // this.collection.bind('change', this.render, this);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);

        },
        render : function () {
            // on instancie la vue worklisttools //
            var renderedContent = blog.Templates[this.template]({works : this.collection.models, sortkey: this.collection.sortkey});
            //this.hideInfos();

            // on fait apparaitre dans #mainbb la liste des works en fondu //
            this.$el.removeAttr('style').html(renderedContent);

            var parentcontainer = this.$el;

            var mycontainer = this.$el.find('#wraplist');

            // définition des param de masonry //
            mycontainer.masonry({
                itemSelector : '.wrapthumb',
                isAnimated: !Modernizr.csstransitions,
                columnWidth: ".wrapthumb",
                animationOptions: {
                    duration: 'fast',
                    easing: 'linear',
                    queue: false
                }
            });

            parentcontainer.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    autoDraggerLength:false,
                    advanced: {
                        updateOnContentResize: true
                    },
                    theme: "dark"
            });

            this.$el.imagesLoaded()
            .done( function( instance, image ) {
                /* */


                Blog.myapprouter.myheight();
                parentcontainer.mCustomScrollbar("update");
                setTimeout(function(){ mycontainer.masonry(); }, 1000);
                
            })
            .fail( function() {
                console.log('all images loaded, at least one is broken');
            })
            .progress( function( instance, image ) {
                $(image.img.offsetParent).stop().animate({opacity: 1},{ complete : mycontainer.masonry() });
                //refresh de masonry, évite les bugs d'affichage //
                
            });


            //-----------------------------------///            
            return this;
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog){

        blog.Router.RoutesManager = Backbone.Router.extend({
            initialize : function(args) {
                // on instancie l'objet myhomepage
                Blog.myhomepics = new blog.Collections.HomePicslist();
                // on instancie l'objet myworkslist
                Blog.myworkslist = new blog.Collections.WorksList();
                // on instancie l'objet mywork
                Blog.mywork = new blog.Models.Work();

                Blog.mytexteslist = new blog.Collections.TextesList();
                Blog.mytexte = new blog.Models.Texte();

                Blog.mybiolist = new blog.Collections.BioList();
                Blog.mybio = new blog.Models.Bio();

                Blog.mynews = new blog.Collections.NewsList();
                Blog.mynotice = new blog.Models.Notice();

                Blog.currentView = new Backbone.View();

                this.bind("route",function(router, route) {
                    console.log("Different Page: " + router + route);
                });
                // on calcule la hauteur de #wrapper //
                //$(window).on("resize", _.bind(this.myheight, this));
                $(window).on( 'resize', _.bind($.debounce( 100, false, this.myheight), this));
                this.myheight();
            },
            routes : {
                "works/:slug_post" : "displayWork",
                "works" : "displayWorksList",
                "texts" : "displayText",
                "texts/:slug_post" : "displayText",
                "bio" : "displayBio",
                "bio/:slug_post" : "displayBio",
                "notice" : "notice",
                "home" : "home",
                "news" : "news",
                "" : "home",
                "*path" : "home"
            },
            // fonction pour donner une hauteur à #mainbb //
             myheight: function() {
                  $(document).find("#ctn-media").removeClass("horizontale").removeAttr("style");
                    // on calcule la hauteur de la div #content //
                    var contentheight = Math.ceil($(window).height() - $('#main_header').outerHeight(true) - $('#tools').outerHeight(true) - 10);
                    //alert($('#main_header').height());
                    var contentwidth = $(window).width() - $('#sidebar').outerWidth(true);
                    
                    legendheight = $("#wrapper #legend").height();
                   // $("#wrapper").find("#sidebar").css("height", imageheight);
                   var mypic = $(document).find('#visuel img');
                   var myctnr = $(document).find('#media');
                   ratioctnr = Math.round(myctnr.width() / contentheight * 100) / 100;
                   ratiopic = Math.round(mypic.attr("data-ratio") *100 ) / 100;

                   console.log(ratioctnr+"  "+ratiopic);
                // on test si la largeur fait au moins 600px //
                if (Modernizr.mq('screen and (min-width: 768px)')) {
                   $(document).find('#wrapper, #workslistmini').css("height", contentheight);
                    mypic.css("max-height", contentheight - legendheight);
                   if (ratioctnr > ratiopic ) {
                       mypic.addClass("horizontale");
                       $(document).find("#ctn-media").addClass("horizontale");
                       //alert(mypic.width());
                   } else if (ratioctnr <= ratiopic ) {
                       mypic.removeClass("horizontale");
                       $(document).find("#ctn-media").removeClass("horizontale").removeAttr("style");
                   }
                   $(document).find("#ctn-media").css('width', mypic.width());
                   //$(document).find(".mCustomScrollbar").mCustomScrollbar("update");
                 } else {
                    $(document).find('#wrapper, #workslistmini, #visuel img').removeAttr("style");
                    $(document).find("#ctn-media, #visuel img").removeClass("horizontale");
                    $(document).find(".mCustomScrollbar").mCustomScrollbar("disable");
                 }

                $(document).find("body").removeClass('spinner');

                    //console.log(legendheight);
            },
            // cette fonction est appelé quand on clic sur un onglet du menu afin de changer sa classe
            selectMenu: function (route) {
              $('#main_nav a').removeClass('actif');
              $('#main_nav a[href="#'+route+'"]').addClass('actif');
            },

            home : function () {
              this.selectMenu('home');
              $(document).find("body").addClass('spinner');
              $("#mainbb").empty();
              //this.killbackstrech();
              // on instancie la vue home

                // on instancie la vue MainWorksView et on la rend si elle n'existe pas
                if (!Blog.homeview) {
                    // on instancie la vue MainWorksView
                    Blog.homeview = new blog.Views.HomeView(Blog.myhomepics);
                }

                // on charge les données dans myhomepics
                Blog.myhomepics.fetch({
                  //update: true,
                  success: function(results) {
                    //console.log(results.toJSON());
                    Blog.homeview.render(results);
                    Blog.currentView = Blog.homeview;
                  }
                });
            },

            news : function () {
              this.killbackstrech();
              this.selectMenu('news');
              $(document).find("body").addClass('spinner');
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (!Blog.newsview) {
                  // on instancie la vue MainWorksView
                  Blog.newsview = new blog.Views.NewsView(Blog.mynews);
              }

              $("#mainbb").empty();

              Blog.mynews.all().fetch({
                //update: true,
                success: function(results) {
                  Blog.newsview.render(results);
                  Blog.currentView = Blog.newsview;
                }
              });

            },

            notice : function () {
            
              this.selectMenu('notice');
              this.killbackstrech();
                  // on instancie la vue news
                Blog.noticeview = new blog.Views.NoticeView(Blog.mynotice);
                  // on charge les données dans mynews
                Blog.mynotice.query().fetch({
                  //update: true,
                  success: function(results) {
                    //console.log(results.toJSON());
                    Blog.noticeview.render(results);
                    Blog.currentView = Blog.noticeview;
                  }
                });
            },

            displayWorksList : function () {
              this.selectMenu('works');
              this.killbackstrech();
              $(document).find("body").addClass('spinner');
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (!Blog.mymainworkslistview) {
                  // on instancie la vue MainWorksView
                  Blog.mymainworkslistview = new blog.Views.WorksListMainView();
                }
                Blog.mymainworkslistview.render();
                Blog.currentView = Blog.mymainworkslistview;
            },

            displayWork : function (slug_post) {
              this.selectMenu('works');
              this.killbackstrech();
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (!Blog.mymainworkview) {
                  // on instancie la vue MainWorksView
                  Blog.mymainworkview = new blog.Views.WorkMainView();
              }
              this.switchView(Blog.mymainworkview);
              Blog.mymainworkview.renderWork(slug_post);

  
             // if (Blog.myworkview) Blog.myworkview.undelegateEvents();
              // Blog.myworkview = new blog.Views.WorkView(Blog.mywork);
              //   // on charge les données dans myworkslist
              //   Blog.mywork.query(slug_post).fetch({
              //     update: true,
              //     success: function(results) {
              //       // on rend la vue avec les resultats de la requete //
              //       Blog.myworkview.render(results);
              //     }
              //   });
            },

            displayText : function (slug_post) {
              this.selectMenu('texts');
              this.killbackstrech();
              $(document).find("body").addClass('spinner');
              // on instancie la vue TextesMainView si elle n'existe pas
              if (!Blog.textesmainview) {
                  // on instancie la vue MainWorksView
                  Blog.textesmainview = new blog.Views.TextesMainView();
              }

              if(slug_post) {
                Blog.mytexteslist.slug = slug_post;
                this.switchView(Blog.textesmainview);
                Blog.textesmainview.renderText(slug_post);
              } else {
                Blog.mytexteslist.slug = "";
                Blog.textesmainview.render();
                Blog.currentView = Blog.textesmainview;
              }

            },

            displayBio : function (slug_post) {
              this.selectMenu('bio');
              this.killbackstrech();
              $(document).find("body").addClass('spinner');
              if (!Blog.biomainview) {
                  // on instancie la vue MainWorksView
                  Blog.biomainview = new blog.Views.BioMainView();
              }

              if(slug_post) {

                Blog.mybiolist.slug = slug_post;

                this.switchView(Blog.biomainview);

                Blog.biomainview.renderText(slug_post);

              } else {

                Blog.mybiolist.slug = "";
                Blog.biomainview.render();
                Blog.currentView = Blog.biomainview;
              }
                     
            },

            switchView : function(newview) {
              if(newview.cid != Blog.currentView.cid) {
                //Blog.currentView.remove();
                newview.render();
                Blog.currentView = newview;
              }
            },

            killbackstrech : function () {
              $('.backstretch').fadeOut('fast', function() {
                  $(this).remove();
              });
            }
        });


	//Backbone.history.start({pushState: true});

    // on instantie le routeur
      Blog.myapprouter = new blog.Router.RoutesManager();
      //Backbone.history.start({pushState: true, hasChange: true, root: "/"});


  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.  Change in app.js.
  if (wp_vars.lang != 'en') { myroot = wp_vars.lang; } else { myroot = "";}
  Backbone.history.start({ pushState: true, root: myroot });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
       // alert("link");
        // Get the absolute anchor href.
        var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
        // Get the absolute root.
        var root = location.protocol + "//" + location.host + "/";

        // Ensure the root is part of the anchor href, meaning it's relative.
        if (href.prop.slice(0, root.length) === root) {
          // Stop the default event to ensure the link will not cause a page
          // refresh.
          evt.preventDefault();

          // `Backbone.history.navigate` is sufficient for all Routers and will
          // trigger the correct events. The Router's internal `navigate` method
          // calls this anyways.  The fragment is sliced from the root.
          Backbone.history.navigate(href.attr, true);
          // on écrit l'adresse dans le btn switch lang //
          if ( root === "fr" ) {
            langprefix = "/";
          } else {
            langprefix = "/fr/";
          }
          $('#qtrans a').attr("href", langprefix+Backbone.history.fragment);

        }
    });

    // $(document).find('#btn-pdf').on("click", function() {
    //   $elt = $(this).parent().find(".submenu");
    //   if ( $elt.is( ":hidden" ) ) {
    //     $elt.show();
    //   } else {
    //     $elt.hide();
    //   }
    // });
    // $(document).find('.submenu').on("mouseleave", function() {
    //   $(this).hide();
    // });



  //Backbone.history.start();

	return blog;
}(Blog));