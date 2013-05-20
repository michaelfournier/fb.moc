var Blog = (function (blog) {

	blog.Models.Picture = Backbone.Model.extend({
        // defaults : {
        //     'title' : "",
        //     'description' : "",
        //     'attachments' : "",
        //     'slug'         : ""
        // },
        initialize : function Doc() {
            console.log('Picture Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});

	blog.Collections.PicturesGallery = Backbone.Collection.extend({
		model : blog.Models.Picture,
		initialize : function() {
			console.log('PicturesGallery collection construite');
		}      
	});

    blog.Models.Video = Backbone.Model.extend({
        query : function (videourl) {
            this.urlRoot = 'http://vimeo.com/api/oembed.json?url='+encodeURIComponent(videourl)+'&portrait=0&title=0&byline=0';
            return this;
        },
        initialize : function Doc() {
            console.log('Video Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    blog.Collections.VideosGallery = Backbone.Collection.extend({
        model : blog.Models.Video,
        initialize : function() {
            console.log('VideosGallery collection construite');
        }      
    });

	return blog;
}(Blog));