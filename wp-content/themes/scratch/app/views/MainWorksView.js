var Blog = (function (blog) {

    blog.Views.MainWorksView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#mainworks_template").html());

            _.bindAll(this, 'render');
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            
            var renderedContent = this.template();

            // on fait apparaitre dans #mainbb le work //
            this.$el.html(renderedContent);

            return this;
        }
     
    });

    return blog;
}(Blog));