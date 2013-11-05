var Blog = (function (blog) {

    blog.Views.SidebarWorksView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.template = _.template($("#sidebar_works_template").html());
            _.bindAll(this, 'render');
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var renderedContent = this.template();
            this.$el.append(renderedContent);
            return this;
        }
   
    });

    return blog;
}(Blog));