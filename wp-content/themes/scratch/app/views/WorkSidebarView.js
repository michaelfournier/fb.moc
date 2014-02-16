var Blog = (function (blog) {

    blog.Views.WorkSidebarView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var renderedContent = blog.Templates['workSidebar']({work: this.model});
            this.$el.html(renderedContent);
            sidebar = this.$el;

                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    autoDraggerLength:false,
                    theme: "dark"
                });
                
            return this;
        },

        events: {
            "click a#toogletext": "toogleText"
        },

        toogleText : function(e) {
            console.log(e);
            e.preventDefault();
            var btn = $(e.currentTarget);
            var elt = this.$el.find("#text");
            var sidebar = this.$el;
            if ( elt.is( ":hidden" ) ) {
                elt.slideDown( "fast" , function() {
                    btn.find("#up").show();
                    btn.find("#down").hide();
                    // on ajoute la scrolbar
                    sidebar.mCustomScrollbar("update");
                });
            } else {
                elt.slideUp("fast", function() {
                    btn.find("#up").hide();
                    btn.find("#down").show();
                    sidebar.mCustomScrollbar("update");
                });
            }
        }
    });

    return blog;
}(Blog));