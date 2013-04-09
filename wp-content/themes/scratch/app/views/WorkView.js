var Blog = (function (blog) {

    blog.Views.WorkView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            //this.template = _.template($("#work_template").html());
            // on remt i à 0 //
            this.i = 0;
            // on calcule la hauteur de #wrapper //
            $(window).on("resize", _.bind(this.myheight, this));
        },
        // fonction pour donner une hauteur à #mainbb //
         myheight: function() {
                // on calcule la hauteur de la div #content //
                var contentheight = $(window).height() - $('#tools').height() - $('#main_header').outerHeight(true);
                $('#wrapper').css("height", contentheight);  
                console.log($(window).height());
        },

        renderPictures : function () {
            this.$el.find("#picvidswitcher a").removeClass('actif');
            this.$el.find("#picvidswitcher #images").addClass('actif');
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements
            if (Blog.picturesgalview) {
               Blog.picturesgalview.undelegateEvents();
            }
             // on déclare un objet collection contenant les images liées au post //
            Blog.picturesgal = new blog.Collections.PicturesGallery(this.model.get('gallery')); 
            // on déclare un objet vue de notre galerie d'images //
            Blog.picturesgalview = new blog.Views.PicturesGalNavView(Blog.picturesgal);
            // on rend la vue //
            Blog.picturesgalview.render();             
        },

        renderVideos : function() {
            this.$el.find("#picvidswitcher a").removeClass('actif');
            this.$el.find("#picvidswitcher #videos").addClass('actif');
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements
            if (Blog.videosgalview) {
               Blog.videosgalview.undelegateEvents();
            }
             // on déclare un objet collection contenant les images liées au post //
            Blog.videosgal = new blog.Collections.VideosGallery(this.model.get('galleryvideos')); 
            // on déclare un objet vue de notre galerie d'images //
            Blog.videosgalview = new blog.Views.VideosGalNavView(Blog.videosgal);
            // on rend la vue //
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
                // on écrit les infos dans la side bar//
                $(this).find('.maincontent').empty();
                $(this).find('#sidebar h3').empty().html(mymodel.get('title'));
                $(this).find('#sidebar h4').empty().html(mymodel.get('custom_fields')['_pinfos_annee'][0]);
                $(this).find('#sidebar p#description').empty().html(mymodel.get('custom_fields')['_pinfos_description'][0]);
                $(this).find('#sidebar #text').empty().html(mymodel.get('content'));
                $(this).find('.maincontent').css("text-align","center").parent().fadeIn('fast', function() { that.picvidswitcher(galleryimageslength, galleryvideoslength);});

            }); 

            if (Blog.myworkslistminiview  === undefined) {
                // on instancie la vue myworkslistminiview
                Blog.myworkslistminiview = new blog.Views.WorksListMiniView(Blog.myworkslist);
                // on charge les données dans workslistmini //
                Blog.myworkslist.all().fetch({ 
                  update: true,
                  success: function(results) {
                    Blog.myworkslistminiview.render(results);
                    //that.scrolltoactive();
                  }

                }); 
            } else if ($("#workslistmini").length <= 0 ) {
                // on charge les données dans workslistmini //
                Blog.myworkslist.all().fetch({ 
                  update: true,
                  success: function(results) {
                    Blog.myworkslistminiview.render(results);
                  }
                });
            };
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