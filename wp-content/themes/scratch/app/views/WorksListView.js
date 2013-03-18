var Blog = (function (blog) {

    blog.Views.WorksListView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#works_list_template").html());

            _.bindAll(this, 'render');
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            this.$el.find('#timeline').html("");

            var renderedContent = this.template({works : this.collection.models});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            console.log(this.$el);
            this.$el.find(".maincontent").html(renderedContent).find('a').each(function() {
                $(this).delay(i * 80).fadeIn();
                i++;
                //console.log($(this).attr('href'));
            });

            // on instancie la vue sidebar et on la rend, si elle n'existe pas
            if (Blog.mysidebarworksview === undefined) {              
                Blog.mysidebarworksview = new blog.Views.SidebarWorksView();
                //Blog.mysidebarworksview.render();
            } else {
                 this.$el.find('#sidebar h3, #sidebar h4, #sidebar p').html('');
            }
            return this;
        },
        events : {
            "mouseover a"  : "showTitle",
            "click #workslist a"  : "mydelete"
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

        showTitle : function(e) {
            myid = $(e.currentTarget).attr('data-id');
            this.$el.find('#sidebar h3').html(e.currentTarget.title);
            this.$el.find('#sidebar h4').html(this.collection.get(myid).get('custom_fields')['_pinfos_annee'][0]);
            this.$el.find('#sidebar p').html(this.collection.get(myid).get('custom_fields')['_pinfos_description'][0]);
        } 
     
    });

    return blog;
}(Blog));