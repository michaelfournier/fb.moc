var Blog = (function (blog) {

    blog.Views.PictureSingleView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#picturesingle_template").html());
        },
        render : function (data) {
            var renderedContent = this.template({mypicture: this.model});
            this.$el.find('.maincontent').html(renderedContent).find('img').css('display', 'none');
           $(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
              Blog.myapprouter.myheight();
             $(this).find("#sidebar").mCustomScrollbar("update");
              $(this).find('img').fadeIn(500);
              //hide loading indicator if applicable
            });
        }
    });

    return blog;
}(Blog));