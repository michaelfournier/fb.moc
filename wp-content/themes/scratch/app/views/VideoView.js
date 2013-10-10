var Blog = (function (blog) {

    blog.Views.VideoView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#video_template").html());
        },
        render : function () {
            var renderedContent = this.template({myvideo: this.model});

            var content = this.$el.find('#media');
            var that = this;
            this.$el.find('.maincontent #media').animate({'opacity': 0}, 300, function() {
               content.html(renderedContent);
                Blog.myapprouter.myheight();
                that.$el.find("#sidebar").mCustomScrollbar("update");
                $(this).animate({'opacity': 1});
            });
        }
    });

    return blog;
}(Blog));