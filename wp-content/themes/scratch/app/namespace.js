var Blog = (function () {
	var blog = {
		init: function () {
			console.log("ok");
		},
    // fonction pour donner une hauteur à #mainbb //
    myheight: function () {
        $(document).find("#ctn-media").removeClass("horizontale").removeAttr("style");
        // on calcule la hauteur de la div #content //
        var contentheight = Math.round($(window).height() - $('#main_header').outerHeight(true) - $('#tools').outerHeight(true) - 10);
        //alert($('#main_header').height());
        var contentwidth = Math.round($(window).width() - $('#sidebar').outerWidth(true));
            
        var legendheight = $("#wrapper #legend").height();
        // $("#wrapper").find("#sidebar").css("height", imageheight);
        var mypic = $(document).find('#visuel img');
        var myctnr = $(document).find('#media');
        var ratioctnr = Math.round(myctnr.width() / contentheight * 100) / 100;
        var ratiopic = Math.round(mypic.attr("data-ratio") *100 ) / 100;
        console.log(ratioctnr+"  "+ratiopic);
        // on test si la largeur fait au moins 768px //
        if (Modernizr.mq('screen and (min-width: 768px)')) {
           $(document).find('#main_nav').removeAttr('style');
           $(document).find('#wrapper, #workslistmini').css("height", contentheight);
            mypic.css("max-height", contentheight - legendheight);
           if (ratioctnr > ratiopic ) {
               mypic.addClass("horizontale");
               $(document).find("#ctn-media").addClass("horizontale");
           } else if (ratioctnr <= ratiopic ) {
               mypic.removeClass("horizontale");
               $(document).find("#ctn-media").removeClass("horizontale").removeAttr("style");
           }
           $("#ctn-media").css('width', mypic.width());
        } else {
           $(document).find('#wrapper, #workslistmini, #visuel img').removeAttr("style");
           $(document).find("#ctn-media, #visuel img").removeClass("horizontale");
           $(".mCustomScrollbar").mCustomScrollbar("disable");
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