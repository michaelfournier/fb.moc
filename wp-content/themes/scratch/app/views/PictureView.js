var Blog = (function (blog) {

    blog.Views.PictureView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#picture_template").html());
        },
        render : function () {
            var renderedContent = this.template({mypicture: this.model});
            var content = this.$el.find('.maincontent');
            var that = this;
            if ( this.$el.find('.maincontent img').length > 0 ) {
              this.$el.find('.maincontent img').fadeOut(300, function() {
                 content.html(renderedContent).find('img').css('display', 'none');
                 that.showOnLoaded();
              });
            } else {
               content.html(renderedContent).find('img').css('display', 'none');
               this.showOnLoaded();
            }
           

        },
        showOnLoaded : function() {
           $(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();
               // on actualise la scrollbar
              $(this).parent().find("#sidebar").mCustomScrollbar("update");
              $(this).find('img').fadeIn(400);
            });
        }

    });

    return blog;
}(Blog));