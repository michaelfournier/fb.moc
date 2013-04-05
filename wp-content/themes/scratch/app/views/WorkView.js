var Blog = (function (blog) {

    blog.Views.WorkView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#work_template").html());
            // on remt i à 0 //
            this.i = 0;
           // console.log(this.i);           
            // on calcule la hauteur de #wrapper //
            _.bindAll(this, 'render');
            //$(window).on("resize", _.bind(this.myheight, this));
        },
        // fonction pour donner une hauteur à #mainbb //
         myheight: function() {
                // on calcule la hauteur de la div #content //
                var contentheight = $('#mainbb').height() - $('#tools').height() - 80;
                $('#wrapper').css("height", contentheight);  
        },

        renderPictures : function () {
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

        render : function () {
            var renderedContent = this.template({work : this.model});
            var mymodel = this.model;
            // on crée une variable contenant le nombre d'image dans la galerie //
            var gallerylength = this.model.get('gallery').length;
            // on assigne une url à nextwork si workslist est définie//
            if (Blog.myworkslist) { this.nextwork(); }
            var that = this;
            this.$el.find('.nextprevworks').css('display', 'block');
            // on fait apparaitre dans #mainbb .maincontent le media //
            this.$el.find("#wrapper").fadeOut('fast', function () {
                // on écrit les infos dans la side bar//
                console.log(mymodel);
                $(this).find('.maincontent').empty();
                $(this).find('#sidebar h3').html(mymodel.get('title'));
                $(this).find('#sidebar h4').html(mymodel.get('custom_fields')['_pinfos_annee'][0]);
                $(this).find('#sidebar p#description').html(mymodel.get('custom_fields')['_pinfos_description'][0]);
                $(this).find('#sidebar #text').empty().html(mymodel.get('content'));



                $(this).find('.maincontent').css("text-align","center").parent().fadeIn('fast', function() { that.renderPictures();});
            });  


            if (Blog.myworkslistminiview  === undefined) {
                // on instancie la vue myworkslistminiview
                Blog.myworkslistminiview = new blog.Views.WorksListMiniView(Blog.myworkslist);
                // on charge les données dans workslistmini //
                Blog.myworkslist.all().fetch({ 
                  update: true,
                  success: function(results) {
                    Blog.myworkslistminiview.render(results);
                    that.scrolltoactive();
                  }

                }); 
            } else if ($("#workslistmini").length <= 0 ) {
                // on charge les données dans workslistmini //
                Blog.myworkslist.all().fetch({ 
                  update: true,
                  success: function(results) {
                    Blog.myworkslistminiview.render(results);
                    that.scrolltoactive();
                  }
                });
            };

            //this.myheight();

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
        events: {
            "click .nextprevworks" : "scrolltonextprev"
        }     

    });

    return blog;
}(Blog));