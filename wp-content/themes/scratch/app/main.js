/* author: vacuumRandom */
// jQuery(document).ready(function() {
// 	//console.log(wp_bgdpics.pics, wp_bgdpics.front);

// 	if(wp_vars.pics) {
// 		jQuery.backstretch(wp_vars.pics, {duration: 4000, fade: 2050});
// 		}		
// });


yepnope({
    load: {
        jquery              : wp_vars.themepath+'/app/libs/vendors/jquery-1.9.0.min.js',
        underscore          : wp_vars.themepath+'/app/libs/vendors/underscore.js',
        mustache            : wp_vars.themepath+'/app/libs/vendors/mustache.js',
        backbone            : wp_vars.themepath+'/app/libs/vendors/backbone.js',
        plugins	            : wp_vars.themepath+'/app/plugins.js',

        //NameSpace
        blog                : wp_vars.themepath+'/app/Blog.js',

        //Models
        home               : wp_vars.themepath+'/app/models/home.js',
        menu                : wp_vars.themepath+'/app/models/menu.js',
        work               : wp_vars.themepath+'/app/models/work.js',

        //Controllers
        MainWorksView       : wp_vars.themepath+'/app/views/MainWorksView.js',
        HomeView            : wp_vars.themepath+'/app/views/HomeView.js',
        WorksView           : wp_vars.themepath+'/app/views/WorkView.js',
        WorksListView       : wp_vars.themepath+'/app/views/WorksListView.js',
        WorksListMiniView   : wp_vars.themepath+'/app/views/WorksListMiniView.js',       
        SidebarWorksView    : wp_vars.themepath+'/app/views/SidebarWorksView.js',


        //Routes
        routes              : wp_vars.themepath+'/app/routes.js'
    },

    callback : {
        "menu" : function () {
            console.log("menu loaded ...");          
        }
    },
    complete : function () {

    }
});


// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    baseUrl: wp_vars.themepath+'/app/',
    paths: {
        templates            : 'templates/'
    },
    namespace: "Blog"

});

