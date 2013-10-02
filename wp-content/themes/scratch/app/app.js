var Blog = (function () {
	var blog = {
		init: function () {
			
		}
	};


	blog.Models = {};
	blog.Collections = {};
	blog.Views = {};
	blog.Router = {};

	return blog;

}());
var Blog = (function (blog) {

    blog.Models.Bio = Backbone.Model.extend({
        query : function (slug) {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=bio&custom_fields=_pinfosbio_fileurl&include=id,content,title,slug,custom_fields&slug='+slug;
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
            console.log('Bio Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
    });

    blog.Collections.BioList = Backbone.Collection.extend({
        model : blog.Models.Bio,
        all : function () {
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=bio&include=,d,auteurs,title,slug,type&order=asc';
            return this;
        },
        // on parse la réponse pour avoir accès aux posts
        parse: function(response) {
            //console.log(response.page.attachments);
            return response.posts;
        },
        initialize : function() {
            console.log('Biolist collection construite');
            this.bind("reset", function(collection, error){
                console.log( collection );
            });
        }
    });

    return blog;
}(Blog));
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
		url : wp_vars.blogurl+'/api/get_page?slug=home&include=attachments',
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
        url: wp_vars.blogurl+'/api/get_page_index?include=id,url,slug',
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


var Blog = (function (blog) {

	blog.Models.News = Backbone.Model.extend({
        query : function () {
            this.urlRoot = wp_vars.blogurl+'/api/get_post?post_type=page&include=id,content,title,slug&slug=home';
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
            console.log('news Model Constructor');
            this.bind("error", function(model, error){
                console.log( error );
            });
        }
	});


	return blog;
}(Blog));
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
            this.url = wp_vars.blogurl+'/api/Mikictrl/get_custom_posts?post_type=texts&custom_fields=_pinfostextes_sortname&include=custom_fields,id,auteurs,title,slug,type&key=_pinfostextes_sortname&order=asc';
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
var Blog = (function (blog) {

    blog.Views.BioMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {

            this.template = _.template($("#maintexts_template").html());

            _.bindAll(this, 'render');
             //this.collection.bind('sort', 'render');
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            console.log('rrr', this);
            this.$el.html(this.template());
            
            // la fonction renderNested est héritée de la vue BaseView //
            var renderNested = this.renderNested;
            var parentview = this.$el;
            var that = this;
            // si mybiosidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (!this.mybiosidebarview) {
                
                // on instancie la vue mybiosidebarview
                var mybiosidebarview = new blog.Views.TextesSidebarView(Blog.mybiolist);
                this.mybiosidebarview =  mybiosidebarview;
                console.log("to", mybiosidebarview.el);
                // on charge les données dans la sidebar //
                Blog.mybiolist.all().fetch({
                  update: true,
                  success: function(results) {
                    renderNested( parentview, mybiosidebarview, "#sidebar", results);
                    // on rend le contenu //
                    //console.log(Blog.mybiolist.at(0));
                    that.renderText();
                  }
                }); 

           // }

            Blog.myapprouter.myheight();

            return this;
        },

        renderText : function(myslug) {

            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
           // si le slug du post n'est pas présent //
            if (!myslug) {
                // definition du texte à charger par défaut: on prend le premier de la liste de la colllection //                   
                slug = Blog.mybiolist.at(0).get('slug');
                Blog.mybiolist.slug = slug;  
               // console.log(slug);
            } else {      
                slug = myslug;
            }
            //alert(slug);
             // si mybiosidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (this.mybiocontentview  === undefined) {
                // on instancie la vue mybiosidebarview en utilisant la vue TextesContentView
            var mybiocontentview = new blog.Views.TextesContentView(Blog.mybio);
            //};
            //console.log(slug);
            // on charge les données et on rend la vue imbriquée //
            Blog.mybio.query(slug).fetch({
              update: true,
              success: function(result) {
                console.log(result);
                renderNested( parentview, mybiocontentview, ".maincontent", result);
                
              }
            }); 
              
            return this;         
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.BioView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#bio_template").html());
        },
        render : function () {
            console.log(this.model);
            var renderedContent = this.template({mybio: this.model});
            this.$el.html(renderedContent).find(".bio").css('opacity', 0);
            Blog.myapprouter.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy"); 
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }          
            this.$el.find(".bio").animate({'opacity': 1},{duration: 500, complete: function() {}});

            return this;
            
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.MainWorksView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#mainworks_template").html());

            _.bindAll(this, 'render');
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            
            var renderedContent = this.template();

            // on fait apparaitre dans #mainbb le work //
            this.$el.html(renderedContent);

            return this;
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.MenuView = Backbone.View.extend({
        el : $("#blog_mainmenu"),
        initialize : function () {
            this.template = $("#blog_mainmenu_template").html();
        },
        render : function () {
            var renderedContent = Mustache.to_html(this.template, 
                {posts : this.collection.toJSON()} 
            );

            this.$el.html(renderedContent);
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.NewsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#news_template").html());
        },
        render : function () {
            console.log(this.model);
            var renderedContent = this.template({mynews: this.model});
            this.$el.html(renderedContent).find("#txtwrapper").css('opacity', 0);
            // Blog.myapprouter.myheight();
            // var mycontenttxt = this.$el.find('#txtwrapper');
            // mycontenttxt.mCustomScrollbar("destroy"); 
            // if(!mycontenttxt.hasClass("mCustomScrollbar")) {
            //     mycontenttxt.mCustomScrollbar({
            //         set_height: "100%",
            //         scrollInertia: 150,
            //         theme: "dark"
            //     });
            // };           
            this.$el.find("#txtwrapper").animate({'opacity': 1},{duration: 300, complete: function() {}});
            
        },

        events: {
            "click #btn-close" : "closeWindow"
        },

        closeWindow : function(e) {
            $(e.currentTarget).parent().remove();
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.NoticeView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#notice_template").html());
        },
        render : function () {
            console.log(this.model);
            var renderedContent = this.template({mynotice: this.model});
            this.$el.html(renderedContent).find("#txtwrapper").css('opacity', 0);
            Blog.myapprouter.myheight();
            var mycontenttxt = this.$el.find('#txtwrapper');
            mycontenttxt.mCustomScrollbar("destroy"); 
            if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                mycontenttxt.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }         
            this.$el.find("#txtwrapper").animate({'opacity': 1},{duration: 300, complete: function() {}});
            
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.PictureSingleView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#picturesingle_template").html());
        },
        render : function (data) {
            var renderedContent = this.template({mypicture: this.model});
            this.$el.find('.maincontent').html(renderedContent).find('img').css('display', 'none');
           $(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
              Blog.myapprouter.myheight();
             $(this).find("#sidebar").mCustomScrollbar("update");
              $(this).find('img').fadeIn(500);
              //hide loading indicator if applicable
            });
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.PictureView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#picture_template").html());
        },
        render : function () {
            var renderedContent = this.template({mypicture: this.model});
            var content = this.$el.find('#picture');
            var that = this;
            if ( this.$el.find('.maincontent img').length > 0 ) {
              this.$el.find('.maincontent img').fadeOut(300, function() {
                 content.html(renderedContent).find('img').css('display', 'none');
                 that.showOnLoaded();
              });
            } else {
               content.html(renderedContent).find('img').css('display', 'none');
               this.showOnLoaded();
            }
           

        },
        showOnLoaded : function() {
           $(".maincontent").imagesLoaded(function() {
               //actions to perform when the image is loaded
               Blog.myapprouter.myheight();
               // on actualise la scrollbar
              $(this).parent().find("#sidebar").mCustomScrollbar("update");
              $(this).find('img').fadeIn(400);
            });
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.PicturesGalNavView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#navgallery_template").html());
            //this.templatesinglepic = _.template($("#navgallery_template").html());
            // compteur //
            this.idpic = 0;
            // on déclare notre objet picture //
            Blog.mypicture = new blog.Models.Picture();
            // on déclare la vue picture single et picture //
            Blog.mypicturesingleview = new blog.Views.PictureSingleView(Blog.mypicture);
            Blog.mypictureview = new blog.Views.PictureView(Blog.mypicture);

        },
        render : function () {
            var renderedContent = this.template({gallery : this.collection.models});
            // nb d'images //
            this.gallerylength = this.collection.models.length;

            // on fait apparaitre dans #tools la nav en fondu //
            i = 1;
            //console.log(this.collection.models.length);
            this.$el.find("#navgal").remove();
            //if (this.collection.models.length > 1) {
                this.$el.find(".maincontent").append(renderedContent).find('a').each(function() {
                    $(this).delay(i * 150).fadeIn();
                    i++;
                });
                // on charge la première image par défaut //
                this.showpicture(0);
            //}

            return this;
        },
        events : {
            "click a.btn-picture"  : "nextpicture",
            "click a.linkpic"   : "linktopic"
        },
        showpicture: function(i) {
            Blog.mypicture.set(this.collection.models[i].toJSON());
            Blog.mypictureview.render();
            this.activelink();
            this.idpic++;
        },
        showsinglepicture: function() {
            Blog.mypicture.set(this.collection.models[0].toJSON());
            Blog.mypicturesingleview.render();
        },
        activelink : function () {
            this.$el.find("#navgal a").removeClass('actif');
            this.$el.find("#navgal a[data-bypass|="+this.idpic+"]").addClass('actif');
        },

        linktopic : function(e) {

            // on récupère le num d'index contenu dans le lien
            index = e.currentTarget.attributes['data-bypass'].value;
            this.idpic = index;
            // on affiche l'image //
            this.showpicture(index);
        },

        nextpicture: function(e) {
            console.log(e);
            i = this.idpic;
            if (i > this.gallerylength - 1) {
                // this.idpic = 0;
                // i = 0;
                this.$el.find("#nextwork a").click();
            } else {
                var showpicture = this.showpicture;
                this.showpicture(i);
            }
                        //$(e.currentTarget).find('img').fadeOut(70, function() { showpicture(i); });           
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.SidebarWorksView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.template = _.template($("#sidebar_works_template").html());
            _.bindAll(this, 'render');
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var renderedContent = this.template();   
            this.$el.append(renderedContent);       
            return this;
        }
   
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.TextesContentView = Backbone.View.extend({
        initialize : function (data) {
            this.template = _.template($("#content_texts_template").html());
            _.bindAll(this, 'render');
            this.model = data;
            console.log(this.model);
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            
            var mycontent = this.$el; 

            var renderedContent = this.template({texte: this.model});

              this.$el.animate({
                opacity: 0
              }, {
                duration: 100,
                complete: function() {
                        $(mycontent).html(renderedContent);
                        var mycontenttxt = $(mycontent).find('#txtwrapper');
                        mycontenttxt.mCustomScrollbar("destroy"); 
                        if(!mycontenttxt.hasClass("mCustomScrollbar")) {
                            mycontenttxt.mCustomScrollbar({
                                set_height: "100%",
                                scrollInertia: 150,
                                theme: "dark"
                            });
                        }

                       $(mycontent).animate({'opacity': 1}, {duration: 500});
                }
              });

            
            
            return this;
        }
   
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.TextesMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {

            this.template = _.template($("#maintexts_template").html());
            //this.mytextssidebarview = new blog.Views.TextesSidebarView(Blog.mytexteslist);
            _.bindAll(this, 'render');
        },
        render : function () {
            this.$el.html(this.template());
            // la fonction renderNested est héritée de la vue BaseView //
            var renderNested = this.renderNested;
            var parentview = this.$el;
            var that = this;
            // si mytextssidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            if (mytextssidebarview  === undefined ) {
                // on instancie la vue mytextssidebarview
               // this.mytextssidebarview = new blog.Views.TextesSidebarView(Blog.mytexteslist);
                var mytextssidebarview =  new blog.Views.TextesSidebarView(Blog.mytexteslist);
                // on charge les données dans la sidebar //
                Blog.mytexteslist.all().fetch({
                  //update: true,
                  success: function(results) {
                    renderNested( parentview, mytextssidebarview, "#sidebar", results);
                    // on rend le contenu //
                    //that.renderText();
                  }

                }); 
            }

            Blog.myapprouter.myheight();

            return this;
        },

        renderText : function(myslug) {

            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            slug = myslug;
            // si le slug du post n'est pas présent //
            // if (!myslug) {
            //     // definition du texte à charger par défaut: on prend le premier de la liste de la colllection //                   
            //     slug = Blog.mytexteslist.at(0).get('slug');
            //     console.log(slug);
            // } else {      
            //     slug = myslug;
            // };
            //alert(slug);
             // si mytextssidebarview n'est pas définie, on instancie la vue, et charge les données, puis on l'imbrique dans la vue principale //
            //if (this.mytextscontentview  === undefined) {
                // on instancie la vue mytextssidebarview
            this.mytextscontentview = new blog.Views.TextesContentView(Blog.mytexte);
            var mytextscontentview =  this.mytextscontentview;
            //};
            console.log(slug);
            // on charge les données et on rend la vue imbriquée //
            Blog.mytexte.query(slug).fetch({
              //update: true,
              success: function(result) {
                renderNested( parentview, mytextscontentview, ".maincontent", result);
              }
            }); 
              
            return this;         
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.TextesSidebarView = Backbone.View.extend({
        initialize : function (data) {
            this.template = _.template($("#sidebar_texts_template").html());
            _.bindAll(this, 'render');
            this.collection = data;
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);

        },
        render : function () {
                        if(!this.collection.slug){
              this.collection.slug = this.collection.at(0).get('slug');  
            }
            var renderedContent = this.template({textes: this.collection.models, slug: this.collection.slug});   
            i = 1;
            this.$el.html(renderedContent).find('a').each(function() {
                $(this).delay(i * 50).animate({opacity: 1});
                i++;
            });

            sidebar = this.$el;  
            if(!sidebar.hasClass("mCustomScrollbar")) {
                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }
            
            sidebar.mCustomScrollbar("update"); 
            return this;
        },
        showactif : function(item) {
            this.$el.find('h3').removeClass('actif');
            $(item.currentTarget).find("h3").addClass('actif');
        },

        events: {
            "click #sidebarwrapper a" : "showactif"            
        }
   
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.VideoView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#video_template").html());
        },
        render : function () {
            console.log(this.model);
            var renderedContent = this.template({myvideo: this.model});
            Blog.myapprouter.myheight();
            this.$el.find("#sidebar").mCustomScrollbar("update");
            this.$el.find('.maincontent').html(renderedContent);
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.VideosGalNavView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#navgalleryvid_template").html());
            this.template_video = _.template($("#video_template").html());
            // on déclare notre objet video //
            Blog.myvideo = new blog.Models.Video();
            // on déclare la vue vidéo //
            Blog.myvideoview = new blog.Views.VideoView(Blog.myvideo);
            // compteur //
            this.idpic = 0;

        },
        render : function () {
            var renderedContent = this.template({gallery : this.collection.models});
            // nb d'images //
            this.gallerylength = this.collection.models.length;           
            // on fait apparaitre dans #tools la nav en fondu //
            i = 1;
            //console.log(this.collection.models.length);
            this.$el.find("#navgal").empty();
            if (this.collection.models.length > 1) {
                this.$el.find("#navgal").html(renderedContent).find('a').each(function() {
                    $(this).delay(i * 150).fadeIn();
                    i++;
                });
                // on charge la première image par défaut //
                this.showvideo(0);
            } else {
                this.showvideo(0);
            }
            return this;
        },
        events : {
            "click a.linkvid"   : "linktovid"
        },
        showvideo: function(i) {
            //this.$el.find("#video").remove();
            videourl = this.collection.models[i].get('videourl');
            // on charge l'objet contenant les infos video depuis vimeo //
            var idpic = this.idpic;
            Blog.myvideo.query(videourl).fetch({
                update: true,
                success: function(results) {
                    console.log(results);
                    Blog.myvideoview.render(results);
                }
            });
            this.activelink();

        },
        activelink : function () {
            this.$el.find("#navgal a").removeClass('actif');
            this.$el.find("#navgal a[data-bypass|="+this.idpic+"]").addClass('actif');
        },

        linktovid : function(e) {
            // on récupère le num d'index contenu dans le lien
            index = e.currentTarget.attributes['data-bypass'].value;
            this.idpic = index;
            // on affiche la vidéo //
            this.showvideo(index);
            //this.$el.find('#videos').fadeOut(70, function() { showvideo(index)});           
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorkMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#mainworks_template").html());
            _.bindAll(this, 'render');

        },
        render : function () {
                    //this.undelegateEvents();  
            var renderedContent = this.template();
            //on fait apparaitre dans #mainbb worksmainview//
            this.$el.html(renderedContent);
            Blog.myapprouter.myheight();
            this.renderWorksListMini();

            return this;
        },

        renderWork : function(slug_post) {
            // on charge les données dans myworkslist
            Blog.myworkslist.all().fetch({
            update: true,
            success: function(results) {
              // on stock le slug du post dans la collection pour gérer le item actif dans workslistmini //
              Blog.myworkslist.workslug = slug_post;                  
              myworkid = results.where({'slug': slug_post})[0]['id'];
              Blog.mywork = Blog.myworkslist.get(myworkid);
              var myworkview = new blog.Views.WorkView(Blog.mywork);
              myworkview.undelegateEvents();
              myworkview.render(Blog.mywork);
              myworkview.delegateEvents();
            }

            });
        },

        // fonction pour rendre la vue workslist & worklisttools
        renderWorksListMini : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            // on instancie la vue myworkslistminiview
            var myworkslistminiview = new blog.Views.WorksListMiniView(Blog.myworkslist);

            // on charge les données dans workslistmini //
            Blog.myworkslist.all().fetch({ 
              update: true,
              success: function(results) {
                console.log(results);
                //myworkslistminiview.render(results);

                // on rend myworkslistview dans .maincontent comme enfant de parentview
               renderNested(parentview, myworkslistminiview, "#tools", results); 
              }
            });

            return this;
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorkSidebarView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#sidebar_works_template").html());
            // this.collection.bind('reset', this.render);
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            var renderedContent = this.template({work: this.model});   
            this.$el.html(renderedContent); 
            sidebar = this.$el;  

                sidebar.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
                 
            //sidebar.mCustomScrollbar("disable");       
            return this;
        }
   
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorkView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
           // this.model = data;
            this.template = _.template($("#mainworks_template").html());
            // on remt i à 0 //
            this.i = 0;
            var caca = data;
            this.model = caca;


        },

        renderPictures : function () {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            this.$el.find("#picvidswitcher a").removeClass('actif');
            this.$el.find("#picvidswitcher #images").addClass('actif');
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements
            if (Blog.picturesgalview) {
                Blog.picturesgalview.undelegateEvents();
            }

 //console.log("work picture", this.model);           
             // on déclare un objet collection contenant les images liées au post //
            var picturesgal = new blog.Collections.PicturesGallery(this.model.get('gallery'));
            //console.log("picturegal",Blog.picturesgal);
            // on déclare un objet vue de notre galerie d'images //
            Blog.picturesgalview = new blog.Views.PicturesGalNavView(picturesgal);
            //renderNested(parentview, Blog.picturesgalview, "#tools", picturesgal);
            // on rend la vue //
            Blog.picturesgalview.render();
        },

        renderVideos : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            if (Blog.videosgalview) {
                Blog.videosgalview.undelegateEvents();
            }

            this.$el.find("#picvidswitcher a").removeClass('actif');
            this.$el.find("#picvidswitcher #videos").addClass('actif');
            // si une vue Blog.picturegal existe on supprime ses abonnement aux évenements
             // on déclare un objet collection contenant les images liées au post //
            var videosgal = new blog.Collections.VideosGallery(Blog.mywork.get('galleryvideos'));
            // on déclare un objet vue de notre galerie d'images //
            Blog.videosgalview = new blog.Views.VideosGalNavView(videosgal);
            //renderNested(parentview, Blog.videosgalview, "#tools", videosgal);
            Blog.videosgalview.render();
        },

        picvidswitcher : function(p, v) {

            // si il ya au moins 1 image et 1 video //
            if (p > 0 && v > 0) {
                $("#picvidswitcher").html('<ul><li><a id="images" href="#" data-bypass>images('+p+')</a></li><li><a id="videos" href="#" data-bypass>vidéos('+v+')</a></li></ul>');
                this.renderPictures();
            // si il ya au moins une video et pas d'images //
            } else if (v > 0 && p === 0) {
                this.renderVideos();
            // si il y a au moins une image et pas de vidéos //
            } else if (p > 0 && v === 0) {
                this.renderPictures();
            }
        },

        renderSidebar : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;

            // on rend la sidebar //
            var sidebarworksview = new blog.Views.WorkSidebarView(this.model);
            renderNested(parentview, sidebarworksview, "#sidebar", this.model);
        },

        render : function () {
            // on active la vignette active dans workslist mini //

            this.showactif(this.model.get('slug'));
            //var renderedContent = this.template({work : this.model});
            var mymodel = this.model;
            // on crée une variable contenant le nombre d'image dans la galerie //
            var galleryimageslength;
            var galleryvideoslength;

            if (this.model.get('gallery')) { galleryimageslength = this.model.get('gallery').length; } else { galleryimageslength = 0; }
            if (this.model.get('galleryvideos')) { galleryvideoslength = this.model.get('galleryvideos').length; } else { galleryvideoslength = 0; }
            // on assigne une url à nextwork si workslist est définie//
            if (Blog.myworkslist) { this.nextwork(); }
            var that = this;
            // on fait apparaitre les fleche et le btn depliant la liste mini //
           // this.$el.find('.nextprevworks').css('display', 'block');
            // on créer navgal et picvidswitcher dans #tools//
            //this.$el.find("#tools").html("<nav id='navgal'></nav><nav id='picvidswitcher'></nav>");

            // on fait apparaitre dans #mainbb .maincontent le media //
            this.$el.find("#wrapper").fadeOut('fast', function () {
                that.renderSidebar();
                if($(this).hasClass("mCustomScrollbar")) {
                   $(this).mCustomScrollbar("destroy");
                }
                //var sidebar = $(this).find('#sidebar');
                //that.renderSidebar();
                // on desactive la scroll bar //
                $(this).css({"overflow-y": "hidden"});
                // on écrit les infos dans la side bar//
                $(this).find('.maincontent').empty();

                $(this).find('.maincontent').css({"overflow-y": "hidden"});
              
                $(this).fadeIn('fast', function() { that.picvidswitcher(galleryimageslength, galleryvideoslength);});
                
            });
          
            return this;
        },


        scrolltonextprev : function(e) {
            slug = $(e.currentTarget).attr('data-slug');
            var activeitem = this.$el.find("#"+slug);
            this.$el.find('.st_thumbs_wrapper').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(slug) } );
            this.undelegateEvents();
        },

        showactif : function(slug) {
            item = this.$el.find("#"+slug);
            this.$el.find('.st_thumbs_wrapper img').removeClass('colorize');
            item.find('img').addClass('colorize');
        },

        nextwork : function() {
            //on cherche le numéro d'index du model dans lacollection //
            var index = this.collection.indexOf(this.model);
            var lastindex = this.collection.length - 1;
            // on détermine le slug du prochain model dans la collection //
            nextmodel = this.collection.at(index+1);
            prevmodel = this.collection.at(index-1);

            if(prevmodel) {
                slugprev = prevmodel.get('slug');
            } else {
                slugprev = this.collection.at(lastindex).get('slug');
            }
            prevhref = "#works/"+slugprev;

            if(nextmodel) {
                slugnext = nextmodel.get('slug');
            } else {
                slugnext = this.collection.at(0).get('slug');
            }
            nexthref = "#works/"+slugnext;

            this.$el.find("#nextwork > a").attr({'href': nexthref, 'data-slug': slugnext});
            this.$el.find("#prevwork > a").attr({'href': prevhref, 'data-slug': slugprev});
        },


        events: {
            "click .nextprevworks" : "scrolltonextprev",
            "click a#videos"   :  "renderVideos",
            "click a#images"   :   "renderPictures"
        }

    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListMainView = blog.Views.BaseView.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.model = data;
            this.template = _.template($("#mainworks_template").html());
            _.bindAll(this, 'render');

        },
        render : function () {
            var renderedContent = this.template();
            //on fait apparaitre dans #mainbb worksmainview//
            this.$el.html(renderedContent);
            this.renderWorksList();
            return this;
        },

        // fonction pour rendre la vue workslist & worklisttools
        renderWorksList : function() {
            // la fonction renderNested est héritée de la vue BaseView //
            var parentview = this.$el;
            var renderNested = this.renderNested;
            // on instancie la vue myworkslistview
            if(!Blog.myworkslistview) {
                Blog.myworkslistview = new blog.Views.WorksListView(Blog.myworkslist);
            }
            var myworkslistview = Blog.myworkslistview;

            // on instancie la vue worklisttools //
            var myworkslisttoolsview = new blog.Views.WorksListToolsView();
              // on charge les données dans myworkslist
              Blog.myworkslist.all().fetch({
                //update: true,
                success: function(result) {
                  console.log(result);
                  // on rend myworkslistview dans .maincontent comme enfant de parentview
                  renderNested(parentview, myworkslistview, ".maincontent", result);
                  // on rend la vue workslisttoolsview dans #tools comme enfant de parentview //
                  renderNested(parentview, myworkslisttoolsview, "#tools");
                }
              });
            return this;
        },


        events : {
            "click #sortbydate"    : "sortbydate",
            "click #sortbycat"    : "sortbycat",
            "click #displaylist"    : "displaylist",
            "click #displaythumb"    : "displaythumb"
        },
// fonction pour le tri par années
        sortbycat : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslist.sortByCat();
        },
// fonction  pour le tri par catégories
        sortbydate : function(e) {
            $("#sorting a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslist.sortByDate();
        },
// fonction pour l'affichage par liste
        displaylist : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslistview.template = Blog.myworkslistview.templatelist;
            Blog.myworkslist.displaymode = 'list';
            //console.log(this.collection.displaymode);
            Blog.myworkslistview.render();
            // on affiche #sorting en mode list //
            this.$el.find("#sorting").css('display', 'block');
        },
// fonction pour l'affichage par vignettes
        displaythumb : function(e) {
            $("#displaying a").removeClass("actif");
            $(e.currentTarget).addClass("actif");
            Blog.myworkslistview.template = Blog.myworkslistview.templatethumb;
            Blog.myworkslist.displaymode = 'thumbs';
            Blog.myworkslistview.render();
            // on classe par date en vue thumb //
            Blog.myworkslist.sortByDate();
            // le bouton date est actif //
            this.$el.find("#sorting a").removeClass("actif");
            this.$el.find("#sortbydate").addClass("actif");
            // on cache #sorting en mode thumb //
            this.$el.find("#sorting").css('display', 'none');
        },

        // fonction pour donner une hauteur à #mainbb //
         myheight: function() {        
            var offset = $('#mainbb').offset();
            // topOffset = distance entre le bloc #content et le haut de la fenetre //  
            var topOffset = offset.top; 
            // on calcul la hauteur de la div #content //
            var contentheight = $(window).height()-(topOffset + $("#main_header").height()+ 40);
            $('#wrapper').css("height", contentheight);            
            console.log(contentheight);   
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListMiniView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            
            this.template = _.template($("#works_listmini_template").html());
            _.bindAll(this, 'render');
        },
        render : function () {

            //this.$el.find('.maincontent').remove();
            var that = this;
            var renderedContent = this.template({works : this.collection.models, sortkey: this.collection.sortkey});
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.html(renderedContent);
            // on fait apparaitre le bouton unfold //
            this.$el.find('#unfoldworks').css('display', 'block');
            // on applique l'autoscroll quand toutes les vignettes sont chargée//
            this.$el.find('#workslistmini').imagesLoaded(function() {
                   // fonction auto scroll vignettes // 
                    $('#workslistmini').imagesLoaded(function(){
                        $(this).thumbnailScroller({
                                scrollerType:'hoverPrecise',
                                        scrollerOrientation:'vertical',
                                        scrollSpeed:1,
                                        acceleration:4,
                                        scrollSpeed:800,
                                        noScrollCenterSpace:100,
                            });
                    });
                   // that.$el.find("#unfoldworks a").click();
                        
            });
            
            return this;
        },
        events: {
            "click #unfoldworks a" : "toggleworks"
        },
  
        scrolltoactive : function () {

            var activeitem = this.$el.find("#"+this.collection.workslug);
            console.log(activeitem);
            this.$el.find('.st_thumbs_wrapper').scrollTo( activeitem, 400, {axis:'x', easing:'easeOutQuart', onAfter: this.showactif(activeitem) } );
        },

        showactif : function(item) {
            this.$el.find('.st_thumbs_wrapper img').removeClass('colorize');
            item.find('img').addClass('colorize');
        },

        toggleworks : function(e) {
            elt = this.$el.find("#workslistmini");
            if (elt.width() <= 0) {
                elt.animate({'width': '100%', complete: this.scrolltoactive()});
                $(e.currentTarget).addClass('fold');
            } else {
                elt.animate({'width': 0});
                $(e.currentTarget).removeClass('fold');
            }
        }

     
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListToolsView = Backbone.View.extend({
        el : $("#mainbb"),
        initialize : function (data) {
            this.collection = data;
            this.template = _.template($("#workslisttools_template").html());
        },
        render : function () {
            var renderedContent = this.template({sortkey: Blog.myworkslist.sortkey, displaymode: Blog.myworkslist.displaymode});
            this.$el.html(renderedContent);
            return this;
        }
    });

    return blog;
}(Blog));
var Blog = (function (blog) {

    blog.Views.WorksListView = Backbone.View.extend({
        initialize : function (data) {
            this.collection = data;

            this.templatethumb = _.template($("#works_list_template_thumb").html());
            this.templatelist = _.template($("#works_list_template_list").html());
            // par défaut le template et l'affichage par vignettes
            this.template = this.templatethumb;

            //_.bindAll(this, 'render');
            // on s'abonne aux tris de la collection avec la fonction this.render()
             this.collection.bind("sort", this.render, this); // remember: every function that uses 'this' as the current object should be in here
             //this.collection.bind('sort', 'render');
            // this.collection.bind('change', this.render);
            // this.collection.bind('add', this.render);
            // this.collection.bind('remove', this.render);
        },
        render : function () {
            // on instancie la vue worklisttools //
            var renderedContent = this.template({works : this.collection.models, sortkey: this.collection.sortkey});
            this.hideInfos();
            // on fait apparaitre dans #mainbb la liste des works en fondu //
            i = 1;
            this.$el.removeAttr('style').html(renderedContent).find('.wrapthumb').each(function() {
                $(this).delay(i * 80).animate({opacity: 1});
                i++;
            });
            Blog.myapprouter.myheight();
            wrapper = this.$el;
            if(!wrapper.hasClass("mCustomScrollbar")) {
                wrapper.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            } else {
                wrapper.mCustomScrollbar("destroy");
                wrapper.mCustomScrollbar({
                    set_height: "100%",
                    scrollInertia: 150,
                    theme: "dark"
                });
            }
           
            wrapper.mCustomScrollbar("update");


            return this;
        },



        events : {
            "mouseover a.workthumb"  : "showInfos",
            "mouseout a.workthumb"  : "hideInfos"
            //"click #workslist a"  : "mydelete",
            //"click #sortbydate"    : "sortbydate",
            //"click #sortbycat"    : "sortbycat",
            //"click #displaylist"    : "displaylist",
            //"click #displaythumb"    : "displaythumb"
        },

        showInfos : function(e) {
            myid = $(e.currentTarget).attr('data-id');
            this.$el.parent().find('#sidebar h3').html(e.currentTarget.title);
            this.$el.parent().find('#sidebar h4').html(this.collection.get(myid).get('custom_fields')['_pinfos_annee'][0]);
            this.$el.parent().find('#sidebar #description').html(this.collection.get(myid).get('custom_fields')['_pinfos_description'][0]);
        },

        hideInfos : function(e) {
            this.$el.parent().find('#sidebar').children().empty();
        }
     
    });

    return blog;
}(Blog));
var Blog = (function (blog){

        blog.Router.RoutesManager = Backbone.Router.extend({
            initialize : function(args) {
                // on instancie l'objet myhomepage
                Blog.myhomepage = new blog.Collections.HomePicslist();
                // on instancie l'objet myworkslist
                Blog.myworkslist = new blog.Collections.WorksList();              
                // on instancie l'objet mywork
                Blog.mywork = new blog.Models.Work();

                Blog.mytexteslist = new blog.Collections.TextesList();
                Blog.mytexte = new blog.Models.Texte();

                Blog.mybiolist = new blog.Collections.BioList();
                Blog.mybio = new blog.Models.Bio();

                Blog.mynews = new blog.Models.News();
                Blog.mynotice = new blog.Models.Notice();

                Blog.currentView = new Backbone.View();

                this.bind("route",function(router, route) {
                    console.log("Different Page: " + router + route);
                });
                // on calcule la hauteur de #wrapper //
                $(window).on("resize", _.bind(this.myheight, this));
                this.myheight();
            },
            routes : {
                "works/:slug_post" : "displayWork",
                "works" : "displayWorksList",
                "texts" : "displayText",
                "texts/:slug_post" : "displayText",
                "bio" : "displayBio",
                "bio/:slug_post" : "displayBio",
                "notice" : "notice",
                "home" : "home",
                "" : "home",
                "*path" : "root"
            },
            // fonction pour donner une hauteur à #mainbb //
             myheight: function() {
                    // on calcule la hauteur de la div #content //
                    var contentheight = $(window).height() - $('#main_header').outerHeight(true);
                    $('#wrapper, #workslistmini').css("height", contentheight);
                    imageheight = $("#wrapper figure img").height();
                    legendheight = $("#wrapper #legend").height();
                   // $("#wrapper").find("#sidebar").css("height", imageheight);
                    $('#wrapper').find('img').css("max-height", contentheight - legendheight);
                    console.log(legendheight);
            },
            // cette fonction est appelé quand on clic sur un onglet du menu afin de changer sa classe
            selectMenu: function (route) {
              $('#main_nav a').removeClass('actif');
              $('#main_nav a[href="#'+route+'"]').addClass('actif');
            },
            root : function () {
              this.selectMenu();
                // on efface le contenu de #mainbb
                $("#mainbb").html("");
                blog.myhomepage.fetch({
                    success:function(result){
                      attachments = result.toJSON();
                      var picsArray = [];
                      _.each(attachments, function(data) {
                          picsArray.push(data.url);
                      });
                      $.backstretch(_.shuffle(picsArray), {duration: 4000, fade: 2050});
                        //ça marche !!!
                    }
                });
            },

            home : function () {
              
              this.root();
              this.selectMenu('home');
              //this.killbackstrech();
                  // on instancie la vue news
                  Blog.newsview = new blog.Views.NewsView(Blog.mynews);
                  // on charge les données dans mynews
                Blog.mynews.query().fetch({
                  //update: true,
                  success: function(results) {
                    //console.log(results.toJSON());
                    Blog.newsview.render(results); 
                    Blog.currentView = Blog.newsview;
                  }
                });                   
            },

            notice : function () {
            
              this.selectMenu('notice');
              this.killbackstrech();
                  // on instancie la vue news
                Blog.noticeview = new blog.Views.NoticeView(Blog.mynotice);
                  // on charge les données dans mynews
                Blog.mynotice.query().fetch({
                  //update: true,
                  success: function(results) {
                    //console.log(results.toJSON());
                    Blog.noticeview.render(results); 
                    Blog.currentView = Blog.noticeview;
                  }
                });                   
            },

            displayWorksList : function () {
              this.selectMenu('works');
              this.killbackstrech();
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (!Blog.mymainworkslistview) {               
                  // on instancie la vue MainWorksView
                  Blog.mymainworkslistview = new blog.Views.WorksListMainView();  
                }
                Blog.mymainworkslistview.render();
                Blog.currentView = Blog.mymainworkslistview; 
            },

            displayWork : function (slug_post) {
              this.selectMenu('works');
              this.killbackstrech();
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (!Blog.mymainworkview) {               
                  // on instancie la vue MainWorksView
                  Blog.mymainworkview = new blog.Views.WorkMainView();  
              }
              this.switchView(Blog.mymainworkview);
              Blog.mymainworkview.renderWork(slug_post);

  
             // if (Blog.myworkview) Blog.myworkview.undelegateEvents();
              // Blog.myworkview = new blog.Views.WorkView(Blog.mywork);
              //   // on charge les données dans myworkslist
              //   Blog.mywork.query(slug_post).fetch({
              //     update: true,
              //     success: function(results) {
              //       // on rend la vue avec les resultats de la requete //
              //       Blog.myworkview.render(results);
              //     }
              //   });
            },        

            displayText : function (slug_post) {
              this.selectMenu('texts');
              this.killbackstrech();     
              // on instancie la vue TextesMainView si elle n'existe pas
              if (!Blog.textesmainview) {               
                  // on instancie la vue MainWorksView
                  Blog.textesmainview = new blog.Views.TextesMainView();  
              }

              if(slug_post) {
                Blog.mytexteslist.slug = slug_post;
                this.switchView(Blog.textesmainview);
                Blog.textesmainview.renderText(slug_post);
              } else {
                Blog.mytexteslist.slug = ""; 
                Blog.textesmainview.render(); 
                Blog.currentView = Blog.textesmainview;                          
              }                   

            },

            displayBio : function (slug_post) {
              this.selectMenu('bio');
              this.killbackstrech();    

              if (!Blog.biomainview) {               
                  // on instancie la vue MainWorksView
                  Blog.biomainview = new blog.Views.BioMainView();  
              }

              if(slug_post) {

                Blog.mybiolist.slug = slug_post;

                this.switchView(Blog.biomainview);

                Blog.biomainview.renderText(slug_post); 

              } else {

                Blog.mybiolist.slug = "";
                Blog.biomainview.render();
                Blog.currentView = Blog.biomainview;              
              }
                     
            },

            switchView : function(newview) {
              if(newview.cid != Blog.currentView.cid) {
                //Blog.currentView.remove();
                newview.render();  
                Blog.currentView = newview;
              }
            },

            killbackstrech : function () {
              $('.backstretch').fadeOut('fast', function() {
                  $(this).remove();
              });
            }
        });


	//Backbone.history.start({pushState: true});

    // on instantie le routeur
      Blog.myapprouter = new blog.Router.RoutesManager();
      //Backbone.history.start({pushState: true, hasChange: true, root: "/"});


  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.  Change in app.js.
  if (wp_vars.lang != 'fr') { myroot = wp_vars.lang; } else { myroot = "";}
  Backbone.history.start({ pushState: true, root: myroot });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
       // alert("link");
        // Get the absolute anchor href.
        var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
        // Get the absolute root.
        var root = location.protocol + "//" + location.host + "/";

        // Ensure the root is part of the anchor href, meaning it's relative.
        if (href.prop.slice(0, root.length) === root) {
           // on écrit l'adresse dans le btn switch lang //
          $('#qtrans a').attr("href", wp_vars.blogurl+"/"+$(this).attr("href"));
          // Stop the default event to ensure the link will not cause a page
          // refresh.
          evt.preventDefault();

          // `Backbone.history.navigate` is sufficient for all Routers and will
          // trigger the correct events. The Router's internal `navigate` method
          // calls this anyways.  The fragment is sliced from the root.
          Backbone.history.navigate(href.attr, true);


        }
    });


  //Backbone.history.start();

	return blog;
}(Blog));