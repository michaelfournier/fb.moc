var Blog = (function (blog) {

    blog.Views.WorksListView = Backbone.View.extend({
        initialize : function (data) {
            this.collection = data;

            this.templatethumb = _.template($("#works_list_template_thumb").html());
            this.templatelist = _.template($("#works_list_template_list").html());
            // par défaut le template et l'affichage par vignettes
            this.template = this.templatethumb;

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
            var renderedContent = this.template({works : this.collection.models, sortkey: this.collection.sortkey});
            //this.hideInfos();

            // on fait apparaitre dans #mainbb la liste des works en fondu //
            this.$el.removeAttr('style').html(renderedContent);

            var parentcontainer = this.$el;

            var mycontainer = this.$el.find('#wraplist');

            this.$el.imagesLoaded()
            .done( function( instance, image ) {
                /* */
                mycontainer.masonry({
                    itemSelector : '.wrapthumb',
                    isAnimated: true,
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
                        theme: "dark"
                });

                Blog.myapprouter.myheight();
                
            })
            .fail( function() {
                console.log('all images loaded, at least one is broken');
            })
            .progress( function( instance, image ) {
                //console.log(image);
                $(image).animate({opacity: 1});
            });
            //-----------------------------------///            
            return this;
        }
     
    });

    return blog;
}(Blog));