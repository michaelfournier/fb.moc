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
		url : wp_vars.blogurl+'/api/get_page/?slug=new-home&include=attachments',
        // on parse la réponse pour avoir accès aux images
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.page.attachments;
        },
		initialize : function() {
			console.log('homepage collection construite');
		}
	});

	return blog;
}(Blog));

