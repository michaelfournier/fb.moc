var Blog = (function (blog) {

    blog.Views.VideosGalNavView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#navgalleryvid_template").html());
            this.template_video = _.template($("#video_template").html());
            // on déclare notre objet video //
            Blog.myvideo = new blog.Models.Video();
            // on déclare la vue vidéo //
            Blog.myvideoview = new blog.Views.VideoView(Blog.myvideo);
            // compteur //
            this.idpic = 0;

        },
        render : function () {
            var renderedContent = this.template({gallery : this.collection.models});
            // nb d'images //
            this.gallerylength = this.collection.models.length;
            // on fait apparaitre dans #tools la nav en fondu //
            i = 1;
            //console.log(this.collection.models.length);
            this.$el.find("#navgal").empty();
            if (this.collection.models.length > 1) {
                this.$el.find("#navgal").html(renderedContent).find('a').each(function() {
                    $(this).delay(i * 150).fadeIn();
                    i++;
                });
                // on charge la première image par défaut //
                this.showvideo(0);
            } else {
                this.showvideo(0);
            }
            return this;
        },
        events : {
            "click a.linkvid"   : "linktovid"
        },
        showvideo: function(i) {
            //this.$el.find("#video").remove();
            videourl = this.collection.models[i].get('videourl');
            // on charge l'objet contenant les infos video depuis vimeo //
            var idpic = this.idpic;
            Blog.myvideo.query(videourl).fetch({
                update: true,
                success: function(results) {
                    console.log(results);
                    Blog.myvideoview.render(results);
                }
            });
            this.activelink();

        },
        activelink : function () {
            this.$el.find("#navgal a").removeClass('actif');
            this.$el.find("#navgal a[data-bypass|="+this.idpic+"]").addClass('actif');
        },

        linktovid : function(e) {
            // on récupère le num d'index contenu dans le lien
            index = e.currentTarget.attributes['data-bypass'].value;
            this.idpic = index;
            // on affiche la vidéo //
            this.showvideo(index);
            //this.$el.find('#videos').fadeOut(70, function() { showvideo(index)});           
        }
     
    });

    return blog;
}(Blog));