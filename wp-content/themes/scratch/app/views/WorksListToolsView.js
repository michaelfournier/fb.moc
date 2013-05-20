var Blog = (function (blog) {

    blog.Views.WorksListToolsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#workslisttools_template").html());
        },
        render : function () {
            var renderedContent = this.template({sortkey: Blog.myworkslist.sortkey, displaymode: Blog.myworkslist.displaymode});
            this.$el.html(renderedContent);
            return this;
        }
    });

    return blog;
}(Blog));