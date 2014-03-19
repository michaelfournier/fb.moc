var Blog = (function (blog) {

    blog.Views.WorksListMiniView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            _.bindAll(this, 'render');
        },
        render : function () {

            //this.$el.find('.maincontent').remove();
            var that = this;
            var renderedContent = blog.Templates['worksListMini']({works : this.collection.models, sortkey: this.collection.sortkey});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.append(renderedContent);
            // on fait apparaitre le bouton unfold //
            //this.$el.find('#unfoldworks').css('display', 'block');
            // on applique l'autoscroll quand toutes les vignettes sont chargée//
            var myworksminielt = this.$el.find('#workslistmini');

            if(!myworksminielt.hasClass("mCustomScrollbar")) {
                myworksminielt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    autoDraggerLength:false,
                    theme: "dark",
                    advanced:{
                        updateOnContentResize: true
                    }
                });
            }
            
            return this;
        },
        events: {
            "click #unfoldworks a" : "toggleworks",
            "click #btnfull a" : "gofullwindow",
            "click #closefull" : "closefullwindow",
            "mouseleave #workslistmini":"toggleworks"
        },

        gofullwindow : function() {
            $(document).find('html').addClass('fullwindow');
            Blog.myheight();
        },

        closefullwindow : function() {
            $(document).find('html').removeClass('fullwindow');
            Blog.myheight();
        },
  
        scrolltoactive : function () {
            var myID = "#"+this.collection.workslug;
            var activeitem = this.$el.find(myID);
            //console.log(activeitem);
            var that = this;
            this.$el.find("#workslistmini").mCustomScrollbar("update");
            this.$el.find("#workslistmini").mCustomScrollbar("scrollTo", myID, {callbacks: this.showactif(activeitem)});
            //this.$el.find('.jTscroller').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(activeitem) } );
        },

        showactif : function(item) {
            //this.$el.find('.jTscroller a').removeClass('actif');
            //console.log(this.$el.find('.jTscroller img'));
            item.addClass('actif');
        },

        toggleworks : function(e) {
            var that = this;
            var elt = this.$el.find("#workslistmini");
            var myWidth = 100*(2/7)+'%';
            if (elt.width() <= 0) {
                elt.stop(true, true).animate({'width': myWidth, complete: function() { that.scrolltoactive(); }}, 150);
                this.$el.find("#unfoldworks a").addClass('fold');
                
            } else {
                this.$el.find("#sidebar").css("display", "none");
                elt.stop(true, true).animate({'width': 0}, 150);
                this.$el.find("#unfoldworks a").removeClass('fold');
            }
            this.$el.find("#workslistmini").mCustomScrollbar("update");
        }

     
    });

    return blog;
}(Blog));