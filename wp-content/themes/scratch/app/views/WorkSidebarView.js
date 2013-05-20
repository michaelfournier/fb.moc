var Blog = (function (blog) {

    blog.Views.WorkSidebarView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#sidebar_works_template").html());
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var renderedContent = this.template({work: this.model});   
            this.$el.html(renderedContent); 
            sidebar = this.$el;  

                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
                 
            //sidebar.mCustomScrollbar("disable");       
            return this;
        }
   
    });

    return blog;
}(Blog));