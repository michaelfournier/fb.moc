var Blog = (function (blog) {

    blog.Views.PictureView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#picture_template").html());
        },
        render : function () {
            var renderedContent = this.template({mypicture: this.model});
            this.$el.find('.maincontent').html(renderedContent).find('img').css('display', 'none');
           $(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();
               // on actualise la scrollbar
              $(this).parent().find("#sidebar").mCustomScrollbar("update");
              $(this).find('img').fadeIn(500);
            });
        }
    });

    return blog;
}(Blog));