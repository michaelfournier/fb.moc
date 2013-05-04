var Blog = (function (blog) {

    blog.Views.WorkView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#mainworks_template").html());
            // on remt i à 0 //
            this.i = 0;
        },

        renderPictures : function () {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            this.$el.find("#picvidswitcher a").removeClass('actif');
            this.$el.find("#picvidswitcher #images").addClass('actif');
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements
            // if (Blog.picturesgalview) {
            //     Blog.picturesgalview.undelegateEvents();
            // }
             // on déclare un objet collection contenant les images liées au post //
            Blog.picturesgal = new blog.Collections.PicturesGallery(this.model.get('gallery')); 
            // on déclare un objet vue de notre galerie d'images //
            picturesgalview = new blog.Views.PicturesGalNavView(Blog.picturesgal);
            renderNested(parentview, picturesgalview, "#tools", Blog.picturesgal); 
            // on rend la vue //
           // Blog.picturesgalview.render();             
        },

        renderVideos : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;


            this.$el.find("#picvidswitcher a").removeClass('actif');
            this.$el.find("#picvidswitcher #videos").addClass('actif');
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements

             // on déclare un objet collection contenant les images liées au post //
            Blog.videosgal = new blog.Collections.VideosGallery(this.model.get('galleryvideos')); 
            // on déclare un objet vue de notre galerie d'images //
            videosgalview = new blog.Views.VideosGalNavView(Blog.videosgal);
            renderNested(parentview, videosgalview, "#tools", Blog.videosgal);
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

            // on rend la sidebar //
            var sidebarworksview = new blog.Views.WorkSidebarView(this.model);
            renderNested(parentview, sidebarworksview, "#sidebar", this.model); 
        },

        render : function () {           
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
            this.$el.find('.nextprevworks, #unfoldworks').css('display', 'block');
            // on créer navgal et picvidswitcher dans #tools//
            this.$el.find("#tools").html("<nav id='navgal'></nav><nav id='picvidswitcher'></nav>");

            // on fait apparaitre dans #mainbb .maincontent le media //
            this.$el.find("#wrapper").fadeOut('fast', function () {
                that.renderSidebar();
                if($(this).hasClass("mCustomScrollbar")) {
                   $(this).mCustomScrollbar("destroy");
                };  
                //var sidebar = $(this).find('#sidebar');
                //that.renderSidebar();
                // on desactive la scroll bar //
                $(this).css({"overflow-y": "hidden"});
                // on écrit les infos dans la side bar//
                $(this).find('.maincontent').empty();

                $(this).find('.maincontent').css({"text-align":"center", "overflow-y": "hidden"});
              
                $(this).fadeIn('fast', function() { that.picvidswitcher(galleryimageslength, galleryvideoslength);});
                
            }); 
            
            return this;
        },


        scrolltoactive : function () {
            var activeitem = this.$el.find("#"+this.collection.workslug);
            this.$el.find('.st_thumbs_wrapper').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(activeitem) } );  
        },

        scrolltonextprev : function(e) {
            elt = $(e.currentTarget).find('a').attr('data-slug');
            var activeitem = this.$el.find("#"+elt);
            this.$el.find('.st_thumbs_wrapper').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(activeitem) } );
            this.undelegateEvents();           
        },

        showactif : function(item) {
            this.$el.find('.st_thumbs_wrapper img').removeAttr('style');
            item.find('img').css('opacity', 1);
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

            this.$el.find("#nextwork a").attr({'href': nexthref, 'data-slug': slugnext});
            this.$el.find("#prevwork a").attr({'href': prevhref, 'data-slug': slugprev});
        },

        toggleworks : function(e) {
            elt = this.$el.find("#timeline");
            if (elt.width() <= 0) {
                elt.animate({'width': '100%', complete: this.scrolltoactive()});
                $(e.currentTarget).addClass('fold');
            } else {
                elt.animate({'width': 0});
                $(e.currentTarget).removeClass('fold'); 
            }
        },

        events: {
            "click .nextprevworks" : "scrolltonextprev",
            "click #unfoldworks a"  : "toggleworks",
            "click a#videos"   :  "renderVideos",
            "click a#images"   :   "renderPictures"
        }     

    });

    return blog;
}(Blog));