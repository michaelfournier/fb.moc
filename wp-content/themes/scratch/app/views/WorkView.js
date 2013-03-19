var Blog = (function (blog) {

    blog.Views.WorkView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#work_template").html());
            // on calcule la hauteur de #wrapper //
            _.bindAll(this, 'render');
            $(window).on("resize", _.bind(this.myheight, this));
        },
        // fonction pour donner une hauteur à #mainbb //
         myheight: function() {
                // on calcul la hauteur de la div #content //
                var contentheight = $('#mainbb').height() - $('#tools').height() - 80;
                $('#wrapper').css("height", contentheight);  
        },
        render : function () {
            console.log($("#workslistmini").length); 
            var renderedContent = this.template({work : this.model});

            // on instancie la vue sidebar et on la rend si elle n'existe pas
            if (Blog.mysidebarworksview === undefined) {               
                Blog.mysidebarworksview = new blog.Views.SidebarWorksView();
                // on affiche les infos //
                console.log(this.model);
                 this.$el.find('#sidebar h3').html(this.model.attributes.post.title);
                // this.$el.find('#sidebar h4').html(this.collection.get(myid).get('custom_fields')['_pinfos_annee'][0]);
                // this.$el.find('#sidebar p').html(this.collection.get(myid).get('custom_fields')['_pinfos_description'][0]);                
            };

            // on fait apparaitre dans #mainbb le work //
            this.$el.find(".maincontent").html(renderedContent);

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

            }

            this.myheight();

            return this;
        }
     
    });

    return blog;
}(Blog));