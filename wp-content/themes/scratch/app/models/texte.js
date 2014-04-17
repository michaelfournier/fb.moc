var Blog = (function (blog) {

	blog.Models.Texte = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=texts&custom_fields=_pinfostextes_fileurl&include=id,content,title,slug,custom_fields&slug='+slug;
            return this;
        },
        //  parse: function (response) {
        //     //http://stackoverflow.com/questions/14372151/backbone-js-model-overwriting-parse-for-custom-api
        //     if (response.post) {
        //         return response.post;
        //     }
        //     return response;
        // },       
        initialize : function Doc() {
            console.log('Texte Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.TextesList = Backbone.Collection.extend({
		model : blog.Models.Texte,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=texts&custom_fields=_pinfostextes_sortname&include=custom_fields,id,auteurs,title,slug,type&lang='+wp_vars.lang;
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
		initialize : function() {
			console.log('TextesList collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
		}
	});

	return blog;
}(Blog));