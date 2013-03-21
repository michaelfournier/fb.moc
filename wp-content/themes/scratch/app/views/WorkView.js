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

        writeinfos : function() {

        },

        render : function () {
            var renderedContent = this.template({work : this.model});
            var mymodel = this.model;
            // on crée une variable contenant le nombre d'image dans la galerie //
            this.gallerylength = this.model.attributes.post.gallery.length;

            // on fait apparaitre dans #mainbb .maincontent le media //
            this.$el.find("#wrapper").fadeOut('fast', function () {
                // on écrit les infos dans la side bar//
                $(this).find('#sidebar h3').html(mymodel.attributes.post.title);
                $(this).find('#sidebar h4').html(mymodel.attributes.post.custom_fields['_pinfos_annee'][0]);
                $(this).find('#sidebar p#description').html(mymodel.attributes.post.custom_fields['_pinfos_description'][0]);
                $(this).find('#sidebar #text').html(mymodel.attributes.post.content);
                // on déclare un objet collection contenant les images liées au post //
                if (Blog.picturesgalview) {
                   Blog.picturesgalview.undelegateEvents();
                } 
                    Blog.picturesgal = new blog.Collections.PicturesGallery(mymodel.attributes.post.gallery); 
                    // on déclare un objet vue de notre galerie d'images //
                    Blog.picturesgalview = new blog.Views.PicturesGalNavView(Blog.picturesgal);
                

                // on rend la vue //
                Blog.picturesgalview.render();    
                $(this).find('.maincontent').html('').css("text-align","center").html(renderedContent).parent().fadeIn('fast');
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
            } else if ($("#workslistmini").length <= 0 ){
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

     
    });

    return blog;
}(Blog));