var Blog = (function (blog) {

    blog.Views.WorksListMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#mainworks_template").html());
            _.bindAll(this, 'render');

        },
        render : function () {
            var renderedContent = this.template();
            //on fait apparaitre dans #mainbb worksmainview//
            this.$el.html(renderedContent);
            this.renderWorksList();
            return this;
        },

        // fonction pour rendre la vue workslist & worklisttools
        renderWorksList : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            // on instancie la vue myworkslistview
            if(!Blog.myworkslistview) {
                Blog.myworkslistview = new blog.Views.WorksListView(Blog.myworkslist);
            }
            var myworkslistview = Blog.myworkslistview;

            // on instancie la vue worklisttools //
            var myworkslisttoolsview = new blog.Views.WorksListToolsView();
              // on charge les données dans myworkslist
              Blog.myworkslist.all().fetch({
                //update: true,
                success: function(result) {
                  console.log(result);
                  // on rend myworkslistview dans .maincontent comme enfant de parentview
                  renderNested(parentview, myworkslistview, ".maincontent", result); 
                  // on rend la vue workslisttoolsview dans #tools comme enfant de parentview //
                  renderNested(parentview, myworkslisttoolsview, "#tools"); 
                }
              });
            return this;
        },


        events : {
            "click #sortbydate"    : "sortbydate",
            "click #sortbycat"    : "sortbycat",
            "click #displaylist"    : "displaylist",
            "click #displaythumb"    : "displaythumb"
        },
// fonction pour le tri par années
        sortbycat : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslist.sortByCat();
        },
// fonction  pour le tri par catégories
        sortbydate : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslist.sortByDate();
        },
// fonction pour l'affichage par liste
        displaylist : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslistview.template = Blog.myworkslistview.templatelist;
            Blog.myworkslist.displaymode = 'list';
            //console.log(this.collection.displaymode);
            Blog.myworkslistview.render();
            // on affiche #sorting en mode list //
            this.$el.find("#sorting").css('display', 'block');
        },
// fonction pour l'affichage par vignettes
        displaythumb : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslistview.template = Blog.myworkslistview.templatethumb;
            Blog.myworkslist.displaymode = 'thumbs';
            Blog.myworkslistview.render();
            // on classe par date en vue thumb //
            Blog.myworkslist.sortByDate();
            // le bouton date est actif //
            this.$el.find("#sorting a").removeClass("actif");
            this.$el.find("#sortbydate").addClass("actif");
            // on cache #sorting en mode thumb //
            this.$el.find("#sorting").css('display', 'none');
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
        }
     
    });

    return blog;
}(Blog));