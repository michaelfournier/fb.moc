var Blog = (function (blog) {

	blog.Models.MenuElt = Backbone.Model.extend({
        defaults : {
            'id' : '?',
            'url' : '?',
            'slug' : '?'
        }
	});

    blog.Collections.MenuList = Backbone.Collection.extend({
        model: blog.Models.MenuElt,
        url: wp_vars.blogurl+'/api/get_page_index/?include=id,url,slug',
        // on parse la réponse pour avoir accès aux pages
        parse: function(response) {
            //console.log(response.pages);
            return response.pages;
        },
        initialize : function Doc() {
            console.log('Menu Collection Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    //alert( wp_vars.blogurl+'/api/get_page_index/?include=id,url,slug');
	return blog;
}(Blog));

