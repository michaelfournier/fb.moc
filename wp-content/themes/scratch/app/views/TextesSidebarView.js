var Blog = (function (blog) {

    blog.Views.TextesSidebarView = Backbone.View.extend({
        initialize : function (data) {
            this.template = _.template($("#sidebar_texts_template").html());
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
            var renderedContent = this.template({textes: this.collection.models, slug: this.collection.slug});
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