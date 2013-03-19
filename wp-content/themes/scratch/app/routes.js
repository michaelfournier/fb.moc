var Blog = (function (blog){

        blog.Router.RoutesManager = Backbone.Router.extend({
            initialize : function(args) {
                // on instancie l'objet myhomepage
                Blog.myhomepage = new blog.Collections.HomePicslist();
                // on instancie l'objet mymenu
                Blog.mymenu = new blog.Collections.MenuList();
                // on recupère les données du menu
                Blog.mymenu.fetch();
                // on instancie l'objet myworkslist
                Blog.myworkslist = new blog.Collections.WorksList();
                // on instancie la vue myworkslistview
                Blog.myworkslistview = new blog.Views.WorksListView(Blog.myworkslist);                 
                // on instancie l'objet mywork
                Blog.mywork = new blog.Models.Work();
                // on applique la fonction myheight //
                this.myheight();
                // on écoute l'évenement resize pour appliquer la fonction myheight //
                $(window).on("resize", _.bind(this.myheight, this));

            },
            routes : {
                "works/:slug_post" : "displayWork",
                "works" : "displayWorksList",
                "bio" : "bio",
                "*path" : "root"
            },
            // fonction pour donner une hauteur à #mainbb //
             myheight: function() {
                    var offset = $('#mainbb').offset();
                    // topOffset = distance entre le bloc #content et le haut de la fenetre //  
                    var topOffset = offset.top; 
                    // on calcul la hauteur de la div #content //
                    var contentheight = $(window).height()-topOffset-($(window).find("#main_header").height() + $(window).find(".tools").height());
                    $('#mainbb').css("height", contentheight);
                    console.log(contentheight);   
            },
            root : function () {
                blog.myhomepage.fetch({
                    success:function(result){
                    	
                    	attachments = result.toJSON();                   
                    	var picsArray = []
                      _.each(attachments, function(data) {
                          picsArray.push(data.url);
                      });
						          $.backstretch(_.shuffle(picsArray), {duration: 4000, fade: 2050});
                        //ça marche !!!
                    }
                });
            },

            bio : function () {
              this.killbackstrech();
                //$(".hero-unit > h1").html("Hello World !!!");
                //alert("bio");
            },

            displayWorksList : function () { 
              this.killbackstrech();
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (Blog.mymainworksview === undefined) {               
                  // on instancie la vue MainWorksView
                  Blog.mymainworksview = new blog.Views.MainWorksView();  
                  Blog.mymainworksview.render();
              }
              // on charge les données dans myworkslist
              Blog.myworkslist.all().fetch({
                update: true,
                success: function(results) {
                  console.log(results.toJSON());
                  Blog.myworkslistview.render(results); 
                }
              });         
              //alert(blog.myworkslist);              
            },

            displayWork : function (slug_post) {
              this.killbackstrech();
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (Blog.mymainworksview === undefined) {               
                  // on instancie la vue MainWorksView
                  Blog.mymainworksview = new blog.Views.MainWorksView();  
                  Blog.mymainworksview.render();
              }
              Blog.myworkview = new blog.Views.WorkView(Blog.mywork);
                // on charge les données dans myworkslist
                Blog.mywork.query(slug_post).fetch({
                  update: true,
                  success: function(results) {
                    // on rend la vue avec les resultats de la requete //
                    Blog.myworkview.render(results);
                  }
                });

            },

            killbackstrech : function () {
              $('.backstretch').fadeOut('fast', function() {
                  $(this).remove();
              });
            }
        });


	//Backbone.history.start({pushState: true});

    // on instantie le routeur
      blog.myapprouter = new blog.Router.RoutesManager;
      //Backbone.history.start({pushState: true, hasChange: true, root: "/"});

  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.  Change in app.js.
  if (wp_vars.lang != 'fr') { myroot = wp_vars.lang; } else { myroot = "/";}
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

	return blog
}(Blog));