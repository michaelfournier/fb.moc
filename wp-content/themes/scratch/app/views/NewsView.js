var Blog = (function (blog) {

    blog.Views.NewsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
        },
        render : function () {
            console.log(this.collection);
            // on efface le contenu de #mainbb
            this.$el.html("");
            var renderedContent = blog.Templates['news']({mynews: this.collection.models});
            this.$el.html(renderedContent).find("#txtwrapper").css('opacity', 0);
            // Blog.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy");
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    autoHideScrollbar: true,
                    autoDraggerLength: false,
                    theme: "dark",
                    advanced:{
                        updateOnContentResize: true
                    }
                });
            }
            Blog.myheight();
            mycontenttxt.mCustomScrollbar("update");
            this.$el.find("#txtwrapper").animate({'opacity': 1},{duration: 300, complete: function() {}});
            Blog.myheight();
            
        }

    });

    return blog;
}(Blog));