var Blog = (function (blog) {

    blog.Views.NoticeView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
        },
        render : function () {
            console.log(this.model);
            var renderedContent = blog.Templates['notice']({mynotice: this.model});
            this.$el.html(renderedContent).find("#txtwrapper").css('opacity', 0);
            Blog.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy"); 
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }         
            this.$el.find("#txtwrapper").animate({'opacity': 1},{duration: 300, complete: function() {}});
            
        }

    });

    return blog;
}(Blog));