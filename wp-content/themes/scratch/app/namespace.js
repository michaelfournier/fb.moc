var Blog = (function () {
	var blog = {
		init: function () {
			console.log("ok");
		},
        // fonction pour donner une hauteur à #mainbb //
        myheight: function () {
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
            // on test si la largeur fait au moins 768px //
            if (Modernizr.mq('screen and (min-width: 768px)')) {
               $(document).find('#main_nav').removeAttr('style');
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
        }
	};

	blog.Models = {};
	blog.Collections = {};
	blog.Views = {};
	blog.Router = {};
	blog.Templates = {};

	return blog;

}());