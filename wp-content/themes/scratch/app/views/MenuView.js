var Blog = (function (blog) {

    blog.Views.MenuView = Backbone.View.extend({
        el : $("#blog_mainmenu"),
        initialize : function () {
            this.template = $("#blog_mainmenu_template").html();
        },
        render : function () {
            var renderedContent = Mustache.to_html(this.template, 
                {posts : this.collection.toJSON()} 
            );

            this.$el.html(renderedContent);
        }
    });

    return blog;
}(Blog));