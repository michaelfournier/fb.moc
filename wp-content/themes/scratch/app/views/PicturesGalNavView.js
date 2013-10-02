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
            // on déclare la vue picture single et picture //
            Blog.mypicturesingleview = new blog.Views.PictureSingleView(Blog.mypicture);
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
            "click a.btn-picture"  : "nextpicture",
            "click a.linkpic"   : "linktopic"
        },
        showpicture: function(i) {
            Blog.mypicture.set(this.collection.models[i].toJSON());
            Blog.mypictureview.render();
            this.activelink();
            this.idpic++;
        },
        showsinglepicture: function() {
            Blog.mypicture.set(this.collection.models[0].toJSON());
            Blog.mypicturesingleview.render();
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
            if (i > this.gallerylength - 1) {
                // this.idpic = 0;
                // i = 0;
                this.$el.find("#nextwork a").click();
            } else {
                var showpicture = this.showpicture;
                this.showpicture(i);
            }
                        //$(e.currentTarget).find('img').fadeOut(70, function() { showpicture(i); });           
        }
     
    });

    return blog;
}(Blog));