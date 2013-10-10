var Blog = (function (blog) {

    blog.Views.PictureView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#picture_template").html());
        },
        render : function () {
            var renderedContent = this.template({mypicture: this.model});
            var content = this.$el.find('#media');
            var that = this;
            this.$el.find('.maincontent #media').animate({'opacity': 0}, 300, function() {
               content.html(renderedContent);
               that.showOnLoaded();
            });
            
           

        },
        showOnLoaded : function() {
           this.$el.find(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();

               // on actualise la scrollbar
              $(this).parent().find("#sidebar").mCustomScrollbar("update");
              $(this).find('#media').animate({'opacity': 1}, 400);
            });
        }

    });

    return blog;
}(Blog));