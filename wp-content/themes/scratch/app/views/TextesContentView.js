var Blog = (function (blog) {

    blog.Views.TextesContentView = Backbone.View.extend({
        initialize : function (data) {
            _.bindAll(this, 'render');
            this.model = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var mycontent = this.$el;
            var renderedContent = blog.Templates['textesContent']({texte: this.model});

              $('title').text(this.model.get('post').title + ' | ' + wp_vars.blogname);

              var slug = this.model.get('post').slug;
              this.$el.animate({
                opacity: 0
              }, {
                duration: 100,
                complete: function() {
                        $(mycontent).html(renderedContent);
                        var mycontenttxt = $(mycontent).find('#txtwrapper');
                        mycontenttxt.mCustomScrollbar("destroy");
                        if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                            mycontenttxt.mCustomScrollbar({
                                set_height: "100%",
                                autoHideScrollbar: true,
                                autoDraggerLength: false,
                                scrollInertia: 150,
                                theme: "dark",
                                advanced:{
                                    updateOnContentResize: true
                                }
                            });
                        }
                        Blog.myheight();
                        mycontenttxt.mCustomScrollbar("update");
                       $(mycontent).animate({'opacity': 1}, {duration: 500});

                }
              });

            this.showactif(slug);
            
            return this;
        },

        showactif : function(slug) {
            var mysidebar = $('#sidebarwrapper');
            var $item = $('a#' + slug );
            console.log($item);
            mysidebar.find('h4').removeClass('actif');
            $item.find('h4').addClass('actif');
        }
   
    });

    return blog;
}(Blog));