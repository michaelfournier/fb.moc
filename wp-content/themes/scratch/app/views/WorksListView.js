var Blog = (function (blog) {

    blog.Views.WorksListView = Backbone.View.extend({
        initialize : function (data) {
            this.collection = data;
            // par défaut le template et l'affichage par vignettes
            this.template = 'worksListThumbs';
            //_.bindAll(this, 'render');
            // on s'abonne aux tris de la collection avec la fonction this.render()
             this.collection.bind("sort", this.render, this); // remember: every function that uses 'this' as the current object should be in here
             //this.collection.bind('sort', 'render');
            // this.collection.bind('change', this.render, this);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);

        },
        render : function () {
            // on instancie la vue worklisttools //
            var renderedContent = blog.Templates[this.template]({works : this.collection.models, sortkey: this.collection.sortkey});
            //this.hideInfos();

            // on fait apparaitre dans #mainbb la liste des works en fondu //
            this.$el.removeAttr('style').html(renderedContent);

            var parentcontainer = this.$el;

            var mycontainer = this.$el.find('#wraplist');

            // définition des param de masonry //
            mycontainer.masonry({
                itemSelector : '.wrapthumb',
                isAnimated: !Modernizr.csstransitions,
                columnWidth: ".wrapthumb",
                animationOptions: {
                    duration: 'fast',
                    easing: 'linear',
                    queue: false
                }
            });

            parentcontainer.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    autoDraggerLength:false,
                    advanced: {
                        updateOnContentResize: true
                    },
                    theme: "dark"
            });

            this.$el.imagesLoaded()
            .done( function( instance, image ) {
                /* */


                Blog.myheight();
                parentcontainer.mCustomScrollbar("update");
                setTimeout(function(){ mycontainer.masonry(); }, 1000);
                
            })
            .fail( function() {
                console.log('all images loaded, at least one is broken');
            })
            .progress( function( instance, image ) {
                $(image.img.offsetParent).stop().animate({opacity: 1},{ complete : mycontainer.masonry() });
                //refresh de masonry, évite les bugs d'affichage //
                
            });


            //-----------------------------------///            
            return this;
        }
     
    });

    return blog;
}(Blog));