var Blog = (function (blog) {

    blog.Views.WorksListMiniView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            
            this.template = _.template($("#works_listmini_template").html());
            _.bindAll(this, 'render');
        },
        render : function () {

            //this.$el.find('.maincontent').remove();
            var that = this;
            var renderedContent = this.template({works : this.collection.models, sortkey: this.collection.sortkey});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.append(renderedContent);
            // on fait apparaitre le bouton unfold //
            //this.$el.find('#unfoldworks').css('display', 'block');
            // on applique l'autoscroll quand toutes les vignettes sont chargée//
            var myworksminielt = this.$el.find('#workslistmini');
            myworksminielt.imagesLoaded(function() {
                   // fonction auto scroll vignettes // 
                    myworksminielt.imagesLoaded(function(){
                        $(this).thumbnailScroller({
                                scrollerType:'hoverPrecise',
                                        scrollerOrientation:'vertical',
                                        acceleration:4,
                                        scrollSpeed: 800,
                                        noScrollCenterSpace:1
                            });
                    });

            if(!myworksminielt.hasClass("mCustomScrollbar")) {
                myworksminielt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    autoDraggerLength:false,
                    theme: "dark"
                });
            }
            
            //myworksminielt.mCustomScrollbar("update");
            //that.$el.find("#unfoldworks a").click();
                        
            });
            
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
            Blog.myapprouter.myheight();
        },

        closefullwindow : function() {
            $(document).find('html').removeClass('fullwindow');
            Blog.myapprouter.myheight();
        },
  
        scrolltoactive : function () {
            var activeitem = this.$el.find("#"+this.collection.workslug);
            //console.log(activeitem);
            this.$el.find("#workslistmini").mCustomScrollbar("update");
            this.$el.find("#workslistmini").mCustomScrollbar("scrollTo", "#"+this.collection.workslug, {callbacks: this.showactif(activeitem)});
            //this.$el.find('.jTscroller').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(activeitem) } );
        },

        showactif : function(item) {
            this.$el.find('.jTscroller a').removeClass('actif');
            //console.log(this.$el.find('.jTscroller img'));
            item.addClass('actif');
        },

        toggleworks : function(e) {
            elt = this.$el.find("#workslistmini");
            if (elt.width() <= 0) {
                elt.stop(true, true).animate({'width': '260px', complete: this.scrolltoactive()}, 150);
                this.$el.find("#unfoldworks a").addClass('fold');
                
            } else {
                this.$el.find("#sidebar").css("display", "none");
                elt.stop(true, true).animate({'width': 0}, 150);
                this.$el.find("#unfoldworks a").removeClass('fold');
            }
        }

     
    });

    return blog;
}(Blog));