var Blog = (function (blog) {

    blog.Models.News = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=works&include=id,categories,content,title,id&slug='+slug;
            return this;
        },
        initialize : function Doc() {
            console.log('news Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    blog.Collections.NewsList = Backbone.Collection.extend({
        model: blog.Models.News,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=news&include=id,title,content,gallery,slug&count=-1';
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
        sortByType : function() {
                this.comparator = function(model) {
                    return [model.get('tax')[0]['term_id'], model.get('id')];
                };
                this.sortkey = 'newstype';

                this.sort();
                console.log(this.models);
        },
        sortByDate : function() {
                //http://www.experts-exchange.com/Programming/Languages/Scripting/JavaScript/A_3586-Sorting-Arrays-and-Collections-in-JavaScript.html
                this.comparator = function(v1,v2) {
                    var t=v1; v1=v2; v2=t;
                    if ( v1.get('tax')[0]['term_id'] < v2.get('tax')[0]['term_id'] ) return 1;
                    if ( v1.get('tax')[0]['term_id'] > v2.get('tax')[0]['term_id'] ) return -1;
                    // else, they are equal
                       if ( v1.get('menu_order') < v2.get('menu_order') ) return 1;
                       if ( v1.get('menu_order') > v2.get('menu_order') ) return -1;
                   return 0;
                };
                this.sortkey = 'annees';
                this.sort();
        },
        initialize : function() {
            this.sortByDate();
            console.log('NewsList collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
        }
    });

	return blog;
}(Blog));