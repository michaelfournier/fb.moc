var Blog = (function (blog) {

    blog.Views.PicturesGalNavView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#navgallery_template").html());
            //this.templatesinglepic = _.template($("#navgallery_template").html());
            // compteur //
            this.idpic = 0;
            // on déclare notre objet picture //
            Blog.mypicture = new blog.Models.Picture();
            // on déclare la vue picture //
            Blog.mypictureview = new blog.Views.PictureView(Blog.mypicture);

        },
        render : function () {
            var renderedContent = this.template({gallery : this.collection.models});
            // nb d'images //
            this.gallerylength = this.collection.models.length;

            // on fait apparaitre dans #tools la nav en fondu //
            i = 1;
            //console.log(this.collection.models.length);
            this.$el.find("#navgal").remove();
            //if (this.collection.models.length > 1) {
                this.$el.find(".maincontent").append(renderedContent).find('a').each(function() {
                    $(this).delay(i * 150).fadeIn();
                    i++;
                });
                // on charge la première image par défaut //
                this.showpicture(0);
            //}

            return this;
        },
        events : {
            "click a#btn-picture-next"  : "nextpicture",
            "click a#btn-picture-prev"  : "prevpicture",
            "click a.linkpic"   : "linktopic"
        },
        showpicture: function(i) {
            Blog.mypicture.set(this.collection.models[i].toJSON());
            Blog.mypictureview.render();
            this.idpic = i;
            this.activelink();
            
        },
        activelink : function () {
            this.$el.find("#navgal a").removeClass('actif');
            this.$el.find("#navgal a[data-bypass|="+this.idpic+"]").addClass('actif');
        },

        linktopic : function(e) {

            // on récupère le num d'index contenu dans le lien
            index = e.currentTarget.attributes['data-bypass'].value;
            this.idpic = index;
            // on affiche l'image //
            this.showpicture(index);
        },

        nextpicture: function(e) {
            console.log(e);
            i = this.idpic;
            if (i >= this.gallerylength - 1) {
                // this.idpic = 0;
                // i = 0;
                this.$el.find("#nextwork a").click();
            } else {
                i++;
                this.showpicture(i);
            }
        },

        prevpicture: function(e) {
            console.log(e);
            i = this.idpic;
            if ( i <= 0 ) {
                // this.idpic = 0;
                // i = 0;
                this.$el.find("#prevwork a").click();
            } else {
                i--;
                this.showpicture(i);
            }
        }
    });

    return blog;
}(Blog));