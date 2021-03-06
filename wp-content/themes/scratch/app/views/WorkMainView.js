var Blog = (function (blog) {

    blog.Views.WorkMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = blog.Templates['workMain']();
            _.bindAll(this, 'render');

        },
        render : function () {
           this.renderWorksListMini();
            //this.undelegateEvents();  
            var renderedContent = this.template;
            //on fait apparaitre dans #mainbb worksmainview//
            this.$el.html(renderedContent);
            
           // Blog.myheight();

            return this;
        },

        renderWork : function(slug_post) {
            // on charge les données dans myworkslist
            Blog.myworkslist.all().fetch({
            update: true,
            success: function(results) {
              // on stock le slug du post dans la collection pour gérer le item actif dans workslistmini //
              Blog.myworkslist.workslug = slug_post;
              myworkid = results.where({'slug': slug_post})[0]['id'];
              Blog.mywork = Blog.myworkslist.get(myworkid);
             // myworkview.remove();
              var myworkview = new blog.Views.WorkView(Blog.mywork);
             // myworkview.undelegateEvents();
              myworkview.render(Blog.mywork);
             // myworkview.delegateEvents();
            }

            });
        },

        // fonction pour rendre la vue workslist & worklisttools
        renderWorksListMini : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            // on instancie la vue myworkslistminiview
            var myworkslistminiview = new blog.Views.WorksListMiniView(Blog.myworkslist);

            // on charge les données dans workslistmini //
            Blog.myworkslist.all().fetch({
              update: true,
              success: function(results) {
                //console.log(results);
                //myworkslistminiview.render(results);
                // on rend myworkslistview dans .maincontent comme enfant de parentview
               renderNested(parentview, myworkslistminiview, "#tools", results);
               console.log("list done");
              }
            });

            return this;
        }
     
    });

    return blog;
}(Blog));