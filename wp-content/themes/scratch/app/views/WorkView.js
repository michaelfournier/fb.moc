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
            $(window).on("resize", _.bind(this.myheight, this));
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

            // on fait apparaitre dans #mainbb .maincontent le media //
            this.$el.find("#wrapper").fadeOut('fast', function () {
                // on écrit les infos dans la side bar//
                $(this).find('.maincontent').empty();
                $(this).find('#sidebar h3').html(mymodel.get('title'));
                $(this).find('#sidebar h4').html(mymodel.get('custom_fields')['_pinfos_annee'][0]);
                $(this).find('#sidebar p#description').html(mymodel.get('custom_fields')['_pinfos_description'][0]);
                $(this).find('#sidebar #text').html(mymodel.get('content'));

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

            this.myheight();

            return this;
        },

        nextwork : function() {
            //on cherche le numéro d'index du model dans lacollection //
            var index = this.collection.indexOf(this.model);
            var lastindex = this.collection.length - 1;
            // on détermine le slug du prochain model dans la collection //
            nextmodel = this.collection.at(index+1);
            prevmodel = this.collection.at(index-1);

            if(prevmodel) {
                prevhref = "#works/"+prevmodel.get('slug');
            } else {
                prevhref = "#works/"+this.collection.at(lastindex).get('slug');
            }

            if(nextmodel) {
                nexthref = "#works/"+nextmodel.get('slug');
            } else {
                nexthref = "#works/"+this.collection.at(0).get('slug');
            }

            this.$el.find("#nextwork a").attr('href', nexthref);
            this.$el.find("#prevwork a").attr('href', prevhref);
        }      

    });

    return blog;
}(Blog));