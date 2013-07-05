var Blog = (function (blog) {

    blog.Views.BioMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {

            this.template = _.template($("#maintexts_template").html());

            _.bindAll(this, 'render');
             //this.collection.bind('sort', 'render');
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            console.log('rrr', this);
            this.$el.html(this.template());
            
            // la fonction renderNested est héritée de la vue BaseView //
            var renderNested = this.renderNested;
            var parentview = this.$el;
            var that = this;
            // si mybiosidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (!this.mybiosidebarview) {
                
                // on instancie la vue mybiosidebarview
                var mybiosidebarview = new blog.Views.TextesSidebarView(Blog.mybiolist);
                this.mybiosidebarview =  mybiosidebarview;
                console.log("to", mybiosidebarview.el);
                // on charge les données dans la sidebar //
                Blog.mybiolist.all().fetch({
                  update: true,
                  success: function(results) {
                    renderNested( parentview, mybiosidebarview, "#sidebar", results);
                    // on rend le contenu //
                    //console.log(Blog.mybiolist.at(0));
                    that.renderText();
                  }
                }); 

           // }

            Blog.myapprouter.myheight();

            return this;
        },

        renderText : function(myslug) {

            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
           // si le slug du post n'est pas présent //
            if (!myslug) {
                // definition du texte à charger par défaut: on prend le premier de la liste de la colllection //                   
                slug = Blog.mybiolist.at(0).get('slug');
                Blog.mybiolist.slug = slug;  
               // console.log(slug);
            } else {      
                slug = myslug;
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