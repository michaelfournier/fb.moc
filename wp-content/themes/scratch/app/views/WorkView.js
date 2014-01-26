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