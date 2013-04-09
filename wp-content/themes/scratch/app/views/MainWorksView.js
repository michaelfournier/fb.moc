var Blog = (function (blog) {

    blog.Views.MainWorksView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#mainworks_template").html());

            _.bindAll(this, 'render');
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
            // on écoute l'évenement resize pour appliquer la fonction myheight //
            $(window).on("resize", _.bind(this.myheight, this));
        },
        render : function () {
            var renderedContent = this.template();

            // on fait apparaitre dans #mainbb le work //
            this.$el.html(renderedContent);
            this.myheight();
            return this;
        },
        // fonction pour donner une hauteur à #mainbb //
         myheight: function() {
         
                var offset = $('#mainbb').offset();
                // topOffset = distance entre le bloc #content et le haut de la fenetre //  
                var topOffset = offset.top; 
                // on calcul la hauteur de la div #content //
                var contentheight = $(window).height()-(topOffset + $("#main_header").height()+ 40);
                $('#wrapper').css("height", contentheight);            
                console.log(contentheight);   
        },
     
    });

    return blog;
}(Blog));