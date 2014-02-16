var Blog = (function (blog) {

    blog.Views.BioSidebarView = Backbone.View.extend({
        initialize : function (data) {
            _.bindAll(this, 'render');
            this.collection = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);

        },
        render : function () {
            if(!this.collection.slug){
              this.collection.slug = this.collection.at(0).get('slug');
            }
            var renderedContent = blog.Templates['textesSidebar']({textes: this.collection.models, slug: this.collection.slug});
            i = 1;
            this.$el.html(renderedContent).find('a').each(function() {
                $(this).delay(i * 50).animate({opacity: 1});
                i++;
            });

            sidebar = this.$el;
            if(!sidebar.hasClass("mCustomScrollbar")) {
                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }
            $(document).find("body").removeClass('spinner');
            sidebar.mCustomScrollbar("update");
            return this;
        },
        showactif : function(item) {
            this.$el.find('h4').removeClass('actif');
            $(item.currentTarget).find("h4").addClass('actif');
        },

        events: {
            "click #sidebarwrapper a" : "showactif"
        }
   
    });

    return blog;
}(Blog));