var Blog = (function (blog) {

    blog.Views.NewsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#news_template").html());
        },
        render : function () {
            console.log(this.model);
            // on efface le contenu de #mainbb
            this.$el.html("");
            var renderedContent = this.template({mynews: this.model});
            this.$el.html(renderedContent).find("#txtwrapper").css('opacity', 0);
            // Blog.myapprouter.myheight();
            // var mycontenttxt = this.$el.find('#txtwrapper');
            // mycontenttxt.mCustomScrollbar("destroy"); 
            // if(!mycontenttxt.hasClass("mCustomScrollbar")) {
            //     mycontenttxt.mCustomScrollbar({
            //         set_height: "100%",
            //         scrollInertia: 150,
            //         theme: "dark"
            //     });
            // };           
            this.$el.find("#txtwrapper").animate({'opacity': 1},{duration: 300, complete: function() {}});
            Blog.myapprouter.myheight();
            
        }

    });

    return blog;
}(Blog));