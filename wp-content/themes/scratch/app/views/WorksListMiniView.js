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
            this.$el.html(renderedContent);
            // on fait apparaitre le bouton unfold //
            this.$el.find('#unfoldworks').css('display', 'block');
            // on applique l'autoscroll quand toutes les vignettes sont chargée//
            this.$el.find('#workslistmini').imagesLoaded(function() {
                   // fonction auto scroll vignettes // 
                    $('#workslistmini').imagesLoaded(function(){
                        $(this).thumbnailScroller({
                                scrollerType:'hoverPrecise',
                                        scrollerOrientation:'vertical',
                                        scrollSpeed:1,
                                        acceleration:4,
                                        scrollSpeed:800,
                                        noScrollCenterSpace:100,
                            });
                    });
                   // that.$el.find("#unfoldworks a").click();
                        
            });
            
            return this;
        },
        events: {
            "click #unfoldworks a" : "toggleworks"
        },
  
        scrolltoactive : function () {

            var activeitem = this.$el.find("#"+this.collection.workslug);
            console.log(activeitem);
            this.$el.find('.st_thumbs_wrapper').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(activeitem) } );
        },

        showactif : function(item) {
            this.$el.find('.st_thumbs_wrapper img').removeClass('colorize');
            item.find('img').addClass('colorize');
        },

        toggleworks : function(e) {
            elt = this.$el.find("#workslistmini");
            if (elt.width() <= 0) {
                elt.animate({'width': '100%', complete: this.scrolltoactive()});
                $(e.currentTarget).addClass('fold');
            } else {
                elt.animate({'width': 0});
                $(e.currentTarget).removeClass('fold');
            }
        }

     
    });

    return blog;
}(Blog));