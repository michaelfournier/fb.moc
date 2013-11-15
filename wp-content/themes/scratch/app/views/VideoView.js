var Blog = (function (blog) {

    blog.Views.VideoView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#video_template").html());
        },
        render : function () {
            var renderedContent = this.template({myvideo: this.model});
            var content = this.$el.find('#visuel');
            content.addClass('spinner2');
            var that = this;
            this.$el.find('.maincontent #visuel').animate({'opacity': 0}, 300, function() {
               content.html(renderedContent);
                that.showOnLoaded();
            });
        },
        showOnLoaded : function() {
          var $that = this.$el.find(".maincontent");
           this.$el.find(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();
               $that.find("#visuel").removeClass('spinner2');
               $that.animate({'opacity': 1});
               // on actualise la scrollbar
              $that.parent().find("#sidebar").mCustomScrollbar("update");
              $that.find('#visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 1}, 400);
            });
        }
    });

    return blog;
}(Blog));