var Blog = (function (blog){

        blog.Router.RoutesManager = Backbone.Router.extend({
            initialize : function(args) {
                // on instancie l'objet myhomepage
                Blog.myhomepics = new blog.Collections.HomePicslist();
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
                "news" : "news",
                "" : "home",
                "*path" : "home"
            },
            // fonction pour donner une hauteur à #mainbb //
             myheight: function() {
                    // on calcule la hauteur de la div #content //
                    var contentheight = $(window).height() - $('#main_header').outerHeight(true) - $('#tools').outerHeight(true) - 10;
                    $('#wrapper, #workslistmini').css("height", contentheight);
                    imageheight = $("#wrapper figure img").height();
                    legendheight = $("#wrapper #legend").height();
                   // $("#wrapper").find("#sidebar").css("height", imageheight);
                    $('#wrapper').find('#media img').css("max-height", contentheight - legendheight);
                    //console.log(legendheight);
            },
            // cette fonction est appelé quand on clic sur un onglet du menu afin de changer sa classe
            selectMenu: function (route) {
              $('#main_nav a').removeClass('actif');
              $('#main_nav a[href="#'+route+'"]').addClass('actif');
            },

            home : function () {
              this.selectMenu('home');
              //this.killbackstrech();
              // on instancie la vue home

                // on instancie la vue MainWorksView et on la rend si elle n'existe pas
                if (!Blog.homeview) {
                    // on instancie la vue MainWorksView
                    Blog.homeview = new blog.Views.HomeView(Blog.myhomepics);
                }

                // on charge les données dans myhomepics
                Blog.myhomepics.fetch({
                  //update: true,
                  success: function(results) {
                    //console.log(results.toJSON());
                    Blog.homeview.render(results);
                    Blog.currentView = Blog.homeview;
                  }
                });
            },

            news : function () {
              this.killbackstrech();
              this.selectMenu('news');

              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (!Blog.newsview) {
                  // on instancie la vue MainWorksView
                  Blog.newsview = new blog.Views.NewsView(Blog.mynews);
              }

              $("#mainbb").empty();

              Blog.mynews.fetch({
                //update: true,
                success: function(results) {
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