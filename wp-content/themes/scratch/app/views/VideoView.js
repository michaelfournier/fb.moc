var Blog = (function (blog) {

    blog.Views.VideoView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#video_template").html());
        },
        render : function () {
            console.log(this.model);
            var renderedContent = this.template({myvideo: this.model});
            Blog.myapprouter.myheight();
            this.$el.find("#sidebar").mCustomScrollbar("update");
            this.$el.find('.maincontent').html(renderedContent);
        }
    });

    return blog;
}(Blog));