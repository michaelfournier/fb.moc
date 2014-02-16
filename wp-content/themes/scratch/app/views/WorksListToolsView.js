var Blog = (function (blog) {

    blog.Views.WorksListToolsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
        },
        render : function () {
            var renderedContent = blog.Templates['workListTools']({sortkey: Blog.myworkslist.sortkey, displaymode: Blog.myworkslist.displaymode});
            this.$el.html(renderedContent);
            return this;
        }
    });

    return blog;
}(Blog));