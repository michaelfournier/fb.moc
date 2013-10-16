var Blog = (function (blog) {

    blog.Views.PictureView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#picture_template").html());
        },
        render : function () {
            var renderedContent = this.template({mypicture: this.model});
            var content = this.$el.find('#visuel');
            var that = this;
            
            this.$el.find('.maincontent #visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 0}, 300, function() {
              content.html(renderedContent);
              that.showOnLoaded();
              that.$el.find("#media").addClass('spinner2');
            });
        },
        showOnLoaded : function() {
           this.$el.find(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();
               $(this).find("#media").removeClass('spinner2');
               // on actualise la scrollbar
              $(this).parent().find("#sidebar").mCustomScrollbar("update");
              $(this).find('#visuel, #btn-media-next, #btn-media-prev').animate({'opacity': 1}, 400);
            });
        }

    });

    return blog;
}(Blog));