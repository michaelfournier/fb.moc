var Blog = (function (blog) {

    blog.Views.WorksListView = Backbone.View.extend({
        el : $("#mainbb"),
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
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var renderedContent = this.template({works : this.collection.models, sortkey: this.collection.sortkey});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.find(".maincontent").removeAttr('style').html(renderedContent).find('.wrapthumb').each(function() {
                $(this).delay(i * 80).fadeIn();
                i++;
            });

            return this;
        },
        events : {
            "mouseover a.workthumb"  : "showInfos",
            "mouseout a.workthumb"  : "hideInfos",
            "click #workslist a"  : "mydelete",
            "click #sortbydate"    : "sortbydate",
            "click #sortbycat"    : "sortbycat",
            "click #displaylist"    : "displaylist",
            "click #displaythumb"    : "displaythumb"
        },
// fonction pour le tri par années
        sortbycat : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            this.collection.sortByCat();
        },
// fonction  pour le tri par catégories
        sortbydate : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            this.collection.sortByDate();
        },
// fonction pour l'affichage par liste
        displaylist : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            this.template = this.templatelist;
            this.collection.displaymode = 'list';
            //console.log(this.collection.displaymode);
            this.render();
        },
// fonction pour l'affichage par vignettes
        displaythumb : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            this.template = this.templatethumb;
            this.collection.displaymode = 'thumbs';
            this.render();
        },
        mydelete: function() {
            // on charge les données dans workslistmini //
            Blog.myworkslist.all().fetch({
              update: true,
              success: function(results) {
                // on rend la worklistmini //
                Blog.myworkslistminiview.render(results);
              }
            });           
        },

        showInfos : function(e) {
            myid = $(e.currentTarget).attr('data-id');
            this.$el.find('#sidebar h3').html(e.currentTarget.title);
            this.$el.find('#sidebar h4').html(this.collection.get(myid).get('custom_fields')['_pinfos_annee'][0]);
            this.$el.find('#sidebar #description').html(this.collection.get(myid).get('custom_fields')['_pinfos_description'][0]);
        },

        hideInfos : function(e) {
            this.$el.find('#sidebar').children().empty();
        }
     
    });

    return blog;
}(Blog));