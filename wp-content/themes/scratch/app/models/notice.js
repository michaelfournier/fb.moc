var Blog = (function (blog) {

	blog.Models.Notice = Backbone.Model.extend({
        query : function () {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=page&include=id,content,title,slug&slug=notice';
            return this;
        },
         parse: function (response) {
            //http://stackoverflow.com/questions/14372151/backbone-js-model-overwriting-parse-for-custom-api
            if (response.post) {
                return response.post;
            }
            return response;
        },       
        initialize : function Doc() {
            console.log('Notice Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});


	return blog;
}(Blog));