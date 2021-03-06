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

                Blog.mynews = new blog.Collections.NewsList();
                Blog.mynotice = new blog.Models.Notice();

                Blog.currentView = new Backbone.View();

                // this.bind("route",function(router, route) {
                //     console.log("Different Page: " + router + route);
                // });
            },
            routes : {
                "works/:slug_post" : "displayWork",
                "works" : "displayWorksList",
                "texts" : "displayText",
                "texts/:slug_post" : "displayText",
                "bio" : "displayBio",
                "bio/:slug_post" : "displayBio",
                "contact" : "notice",
                "home" : "home",
                "news" : "news",
                "" : "home",
                "*path" : "home"
            },
            // cette fonction est appelé quand on clic sur un onglet du menu afin de changer sa classe
            selectMenu: function (route) {
              $('#main_nav a').removeClass('actif');
              $('#main_nav a[href="#'+route+'"]').addClass('actif');
            },

            setTitle : function () {
               $('title').text($('#main_nav .actif span').text() + ' | ' + wp_vars.blogname);

            },

            home : function () {
              this.selectMenu('home');
              $('title').text('home | ' + wp_vars.blogname);
              $(document).find("body").addClass('spinner');
              $("#mainbb").empty();
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
              $('#main_nav .actif span').text();
              this.setTitle();
              $(document).find("body").addClass('spinner');
              // on instancie la vue MainWorksView et on la rend si elle n'existe pas
              if (!Blog.newsview) {
                  // on instancie la vue MainWorksView
                  Blog.newsview = new blog.Views.NewsView(Blog.mynews);
              }

              $("#mainbb").empty();

              Blog.mynews.all().fetch({
                //update: true,
                success: function(results) {
                  Blog.newsview.render(results);
                  Blog.currentView = Blog.newsview;
                }
              });

            },
            notice : function () {
              this.selectMenu('contact');
              this.killbackstrech();
              this.setTitle();
                  // on instancie la vue news
                if (!Blog.noticeview) {
                   Blog.noticeview = new blog.Views.NoticeView(Blog.mynotice);
                }
                $("#mainbb").empty();
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
              this.setTitle();
              $(document).find("body").addClass('spinner');
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
            },

            displayText : function (slug_post) {
              this.selectMenu('texts');
              this.killbackstrech();
              this.setTitle();
              $(document).find("body").addClass('spinner');
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
              $(document).find("body").addClass('spinner');
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
  if (wp_vars.lang != 'en') { myroot = wp_vars.lang; } else { myroot = "";}
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
          // on écrit l'adresse dans le btn switch lang //
          if ( wp_vars.lang == "fr" ) {
            langprefix = "/";
          } else {
            langprefix = "/fr/";
          }
          $('#qtrans a').attr("href", langprefix+Backbone.history.fragment);
        }
    });

    // $(document).find('#btn-pdf').on("click", function() {
    //   $elt = $(this).parent().find(".submenu");
    //   if ( $elt.is( ":hidden" ) ) {
    //     $elt.show();
    //   } else {
    //     $elt.hide();
    //   }
    // });
    // $(document).find('.submenu').on("mouseleave", function() {
    //   $(this).hide();
    // });



  //Backbone.history.start();

	return blog;
}(Blog));