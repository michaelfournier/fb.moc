var Blog = (function (blog) {

	blog.Models.HomePic = Backbone.Model.extend({
        initialize : function Doc() {
            console.log('Home Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.HomePicslist = Backbone.Collection.extend({
		model : blog.Models.HomePic,
		url : wp_vars.blogurl+'/api/get_post?post_type=page&custom_fields=_pmediagallery_blocspics&include=custom_fields,id&slug=home',
        // on parse la réponse pour avoir accès aux images
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.post.gallery;
        },
		initialize : function() {
			console.log('homepage collection construite');
		}
	});

	return blog;
}(Blog));

