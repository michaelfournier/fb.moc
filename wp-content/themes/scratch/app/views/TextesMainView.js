var Blog = (function (blog) {

    blog.Views.TextesMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {

            this.template = _.template($("#maintexts_template").html());
            //this.mytextssidebarview = new blog.Views.TextesSidebarView(Blog.mytexteslist);
            _.bindAll(this, 'render');
        },
        render : function () {
            this.$el.html(this.template());
            // la fonction renderNested est héritée de la vue BaseView //
            var renderNested = this.renderNested;
            var parentview = this.$el;
            var that = this;
            // si mytextssidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            if (mytextssidebarview  === undefined ) {
                // on instancie la vue mytextssidebarview
               // this.mytextssidebarview = new blog.Views.TextesSidebarView(Blog.mytexteslist);
                var mytextssidebarview =  new blog.Views.TextesSidebarView(Blog.mytexteslist);
                // on charge les données dans la sidebar //
                Blog.mytexteslist.all().fetch({
                  //update: true,
                  success: function(results) {
                    renderNested( parentview, mytextssidebarview, "#sidebar", results);
                    // on rend le contenu //
                    //that.renderText();
                  }

                }); 
            }

            Blog.myapprouter.myheight();

            return this;
        },

        renderText : function(myslug) {

            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            slug = myslug;
            // si le slug du post n'est pas présent //
            // if (!myslug) {
            //     // definition du texte à charger par défaut: on prend le premier de la liste de la colllection //                   
            //     slug = Blog.mytexteslist.at(0).get('slug');
            //     console.log(slug);
            // } else {      
            //     slug = myslug;
            // };
            //alert(slug);
             // si mytextssidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (this.mytextscontentview  === undefined) {
                // on instancie la vue mytextssidebarview
            this.mytextscontentview = new blog.Views.TextesContentView(Blog.mytexte);
            var mytextscontentview =  this.mytextscontentview;
            //};
            console.log(slug);
            // on charge les données et on rend la vue imbriquée //
            Blog.mytexte.query(slug).fetch({
              //update: true,
              success: function(result) {
                renderNested( parentview, mytextscontentview, ".maincontent", result);
              }
            }); 
              
            return this;         
        }

    });

    return blog;
}(Blog));