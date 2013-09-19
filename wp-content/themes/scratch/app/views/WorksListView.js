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
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            // on instancie la vue worklisttools //
            //var myworkslisttoolsview = new blog.Views.WorksListToolsView();
            var renderedContent = this.template({works : this.collection.models, sortkey: this.collection.sortkey});
            //this.$el.find("#wrapper").mCustomScrollbar("update");
            this.hideInfos();
            // this.$el.find("#sidebar").mCustomScrollbar("destroy");
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.removeAttr('style').html(renderedContent).find('.wrapthumb').each(function() {
                $(this).delay(i * 80).animate({opacity: 1});
                i++;
            });
            Blog.myapprouter.myheight();
            wrapper = this.$el;
            console.log(this.$el);
            if(!wrapper.hasClass("mCustomScrollbar")) {
                wrapper.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            } else {
                wrapper.mCustomScrollbar("destroy");
                wrapper.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }
           
            wrapper.mCustomScrollbar("update");


            return this;
        },



        events : {
            "mouseover a.workthumb"  : "showInfos",
            "mouseout a.workthumb"  : "hideInfos"
            //"click #workslist a"  : "mydelete",
            //"click #sortbydate"    : "sortbydate",
            //"click #sortbycat"    : "sortbycat",
            //"click #displaylist"    : "displaylist",
            //"click #displaythumb"    : "displaythumb"
        },

        showInfos : function(e) {
            myid = $(e.currentTarget).attr('data-id');
            this.$el.parent().find('#sidebar h3').html(e.currentTarget.title);
            this.$el.parent().find('#sidebar h4').html(this.collection.get(myid).get('custom_fields')['_pinfos_annee'][0]);
            this.$el.parent().find('#sidebar #description').html(this.collection.get(myid).get('custom_fields')['_pinfos_description'][0]);
        },

        hideInfos : function(e) {
            this.$el.parent().find('#sidebar').children().empty();
        }
     
    });

    return blog;
}(Blog));