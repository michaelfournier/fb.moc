var Blog = (function (blog) {

    blog.Views.NewsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#news_template").html());
        },
        render : function () {
            console.log(this.model);
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
            
        },

        events: {
            "click #btn-close" : "closeWindow"
        },

        closeWindow : function(e) {
            $(e.currentTarget).parent().remove();
        }
    });

    return blog;
}(Blog));