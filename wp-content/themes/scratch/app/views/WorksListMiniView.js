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
            this.$el.find("#timeline").html(renderedContent).find('a').each(function() {
                $(this).delay(i * 50).fadeIn();
                i++;
                //console.log($(this).attr('href'));
            });
            // on applique l'autoscroll //
            $('#workslistmini').thumbnailScroller({
                scrollerType: 'hoverPrecise',
                scrollerOrientation : 'horizontal',
                scrollSpeed : 1,
                acceleration: 4,
                scrollSpeed: 800,
                noScrollCenterSpace: 100,
            });
            return this;
        }
     
    });

    return blog;
}(Blog));