var Blog = (function (blog) {

    blog.Views.WorksListMiniView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#works_listmini_template").html());
            _.bindAll(this, 'render');
        },
        render : function () {
            //this.$el.find('.maincontent').remove();
            var renderedContent = this.template({works : this.collection.models});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.find(".tools").html(renderedContent).find('a').each(function() {
                $(this).delay(i * 50).fadeIn();
                i++;
                //console.log($(this).attr('href'));
            });
            return this;
        },
        events : {
            "click a" : "mydelete2"
        },
        mydelete2: function() {
            
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