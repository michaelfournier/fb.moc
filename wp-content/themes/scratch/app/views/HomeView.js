var Blog = (function (blog) {

    blog.Views.HomeView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#home_template").html());
        },
        render : function() {
            // on insère un gros bouton pour le roll over du menu sur la home

            console.log(this.collection);
            var renderedContent = this.template();
            this.$el.html(renderedContent);
            var picsArray = [];
            _.each(this.collection.models, function(data) {
              picsArray.push(data.get('full'));
            });
            $.backstretch(_.shuffle(picsArray), {duration: 4000, fade: 2050});
            $(document).find("body").removeClass('spinner');
            //ça marche !!!
            // on replie le menu principal //
           // this.$el.find("#main_header").animate({'top':"-30px"});
        },
        events : {
            "mouseenter #big-btn-home-up"  : "mouseOver",
            "mouseenter #big-btn-home-down"  : "mouseOut"
        },

        mouseOver : function(e) {

                var elt = this.$el.find("#big-btn-home-up");
                this.$el.parent().parent().find("#main_header").stop(true, true).animate({'top':"0px"}, { complete: function() {elt.css("z-index", -1);}});
                //
        },
        mouseOut : function(e) {
                var elt = this.$el.find("#big-btn-home-up");
                this.$el.parent().parent().find("#main_header").stop(true, true).animate({'top':"-40px"}, { complete: function() {elt.css("z-index", 1);}});
    
        }
    });

    return blog;
}(Blog));