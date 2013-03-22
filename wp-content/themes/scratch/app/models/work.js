var Blog = (function (blog) {

	blog.Models.Work = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=works&custom_fields=_pmediagallery_blocspics,_pinfos_annee,_pinfos_description&include=content,custom_fields,title,id&slug='+slug;
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
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=works&key=_pinfos_annee&custom_fields=_pinfos_annee,_pinfos_description&order=desc&include=title,gallery,custom_fields,slug&count=-1';
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
		initialize : function() {
			console.log('WorksList collection construite');
		}
	});

	return blog;
}(Blog));