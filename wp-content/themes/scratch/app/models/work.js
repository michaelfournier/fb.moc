var Blog = (function (blog) {

	blog.Models.Work = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=works&custom_fields=_pmediagallery_blocspics,_pinfos_annee,_pinfos_description&include=id,categories,content,custom_fields,title,id&slug='+slug;
            return this;
        },
        // // on parse la réponse pour avoir accès aux posts
        // parse: function(response) {
        //     return response.post;
        // },
        // defaults : {
        //     'title' : "",
        //     'description' : "",
        //     'attachments' : "",
        //     'slug'         : ""
        // },
        initialize : function Doc() {
            console.log('Work Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.WorksList = Backbone.Collection.extend({
		model : blog.Models.Work,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=works&key=_pinfos_annee&custom_fields=_pinfos_annee,_pinfos_description&order=desc&include=id,title,categories,content,gallery,custom_fields,slug&count=-1';
            return this;
        },
        query : function () {
            this.url = "/works/"+query;
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
        // fonction qui trie la collection par catégories, groupée par titre //
        sortByCat : function() {
                this.comparator = function(model) {
                    return [model.get('categories')[0]['slug'], model.get('slug')];
                };
                this.sortkey = 'categories';

                this.sort();
                console.log(this.models);
        },
        // fonction qui trie la collection par catégories, groupée par titre //
        sortByDate : function() {
                //http://www.experts-exchange.com/Programming/Languages/Scripting/JavaScript/A_3586-Sorting-Arrays-and-Collections-in-JavaScript.html
                this.comparator = function(v1,v2) {
                    var t=v1; v1=v2; v2=t;
                    if ( v1.get('custom_fields')['_pinfos_annee'] < v2.get('custom_fields')['_pinfos_annee'] ) return -1;
                    if ( v1.get('custom_fields')['_pinfos_annee'] > v2.get('custom_fields')['_pinfos_annee'] ) return 1;
                    // else, they are equal
                       if ( v1.get('slug') < v2.get('slug') ) return 1;
                       if ( v1.get('slug') > v2.get('slug') ) return -1;
                   return 0;
                };
                this.sortkey = 'annees';
                this.sort();
        },
		initialize : function() {
            this.sortkey = 'annees';
            this.displaymode = 'thumbs';
			console.log('WorksList collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
		}
	});

	return blog;
}(Blog));