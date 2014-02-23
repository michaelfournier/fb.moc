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
__p += '<!-- template pour mentions -->\n<section id="tools"></section>\n<div id="wrapper">\t\t\n\t<section style="background:none" class="maincontent notice">\n\t\t<div id="txtwrapper">\n\t\t\t' +
((__t = ( mynotice.get('content') )) == null ? '' : __t) +
'\n\t\t</div>\n\t</section>\n</div>\n';

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