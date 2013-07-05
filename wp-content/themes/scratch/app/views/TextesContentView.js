var Blog = (function (blog) {

    blog.Views.TextesContentView = Backbone.View.extend({
        initialize : function (data) {
            this.template = _.template($("#content_texts_template").html());
            _.bindAll(this, 'render');
            this.model = data;
            console.log(this.model);
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            
            var mycontent = this.$el; 

            var renderedContent = this.template({texte: this.model});

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
                                scrollInertia: 150,
                                theme: "dark"
                            });
                        }

                       $(mycontent).animate({'opacity': 1}, {duration: 500});
                }
              });

            
            
            return this;
        }
   
    });

    return blog;
}(Blog));