var Blog = (function (blog) {

    blog.Views.WorkView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#work_template").html());

            _.bindAll(this, 'render');
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            console.log($("#workslistmini").length); 
            var renderedContent = this.template({work : this.model});

            // on instancie la vue sidebar et on la rend si elle n'existe pas
            if (Blog.mysidebarworksview === undefined) {               
                Blog.mysidebarworksview = new blog.Views.SidebarWorksView();
               // Blog.mysidebarworksview.render();
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

            return this;
        }
     
    });

    return blog;
}(Blog));