//http://codehustler.org/rendering-nested-views-backbone-js/
var Blog = (function (blog) {
    blog.Views.BaseView = Backbone.View.extend({
        renderNested: function( parentview, view, selector, results ) {
             var $element = ( selector instanceof $ ) ? selector : parentview.find( selector );
             view.setElement( $element ).render(results);
        }
    });

    return blog;
}(Blog));