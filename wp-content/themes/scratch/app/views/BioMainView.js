var Blog = (function (blog) {

    blog.Views.BioMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.template = blog.Templates['bio']();
            _.bindAll(this, 'render');
             //this.collection.bind('sort', 'render');
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function (slug_post) {
            this.$el.html(this.template);
            // la fonction renderNested est héritée de la vue BaseView //
            var renderNested = this.renderNested;
            var parentview = this.$el;
            var that = this;
            // si mybiosidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (!this.mybiosidebarview) {
                
                // on instancie la vue mybiosidebarview
                var mybiosidebarview = new blog.Views.BioSidebarView(Blog.mybiolist);
                this.mybiosidebarview =  mybiosidebarview;
                // on charge les données dans la sidebar //
                Blog.mybiolist.all().fetch({
                  update: true,
                  success: function(results) {
                    renderNested( parentview, mybiosidebarview, "#sidebar", results);
                    // on rend le contenu //
                    //console.log(Blog.mybiolist.at(0));
                    if (Blog.mybiolist.slug) {
                       that.renderText(Blog.mybiolist.slug);
                    }

                  }
                });

            Blog.myheight();
            $(document).find("body").addClass('spinner');

            return this;
        },

        renderText : function (myslug) {
            this.$el.find(".maincontent").empty();
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
           // si le slug du post n'est pas présent //
            if (myslug) {
                var slug = myslug;
            } else {
                // definition du texte à charger par défaut: on prend le premier de la liste de la colllection //                   
                var slug = Blog.mybiolist.at(0).get('slug');
                Blog.mybiolist.slug = slug;             
            }
            //alert(slug);
             // si mybiosidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (this.mybiocontentview  === undefined) {
            // on instancie la vue mybiosidebarview en utilisant la vue TextesContentView
            var mybiocontentview = new blog.Views.TextesContentView(Blog.mybio);
            //};
            //console.log(slug);
            // on charge les données et on rend la vue imbriquée //
            Blog.mybio.query(slug).fetch({
              update: true,
              success: function(result) {
                console.log(result);
                renderNested( parentview, mybiocontentview, ".maincontent", result);
                
              }
            });
              
            return this;
        }

    });

    return blog;
}(Blog));