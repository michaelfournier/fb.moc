var Blog = (function (blog) {

    blog.Views.PictureView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
        },
        render : function () {
            var renderedContent = blog.Templates['picture']({mypicture: this.model});
            var content = this.$el.find('#visuel');
            content.addClass('spinner2');
            var that = this;
            this.$el.find('.maincontent #visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 0}, 300, function() {
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
               // on actualise la scrollbar
              $that.parent().find("#sidebar").mCustomScrollbar("update");
              $that.find('#visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 1}, 400);
            });
        }

    });

    return blog;
}(Blog));