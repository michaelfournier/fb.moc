var Blog = (function (blog) {

    blog.Views.BioView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = blog.Templates['bio']();
        },
        render : function () {
            console.log(this.model);
            var renderedContent = this.template({mybio: this.model});
            this.$el.html(renderedContent).find(".bio").css('opacity', 0);
            Blog.myapprouter.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy"); 
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }          
            this.$el.find(".bio").animate({'opacity': 1},{duration: 500, complete: function() {}});

            return this;
            
        }
    });

    return blog;
}(Blog));