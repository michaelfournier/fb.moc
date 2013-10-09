/*global module:false*/
module.exports = function (grunt) {

  // Initializes the Grunt tasks with the following settings
  grunt.initConfig({

    // A list of files, which will be syntax-checked by JSHint
    jshint: {
      files: ['Gruntfile.js', 'app/models/*.js', 'app/views/*.js', 'app/routes.js'],
      /* this for ignoring wrnings towards dot notation */
      options: {
        sub: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ["cssreset/*.less", "less/front/*.less", "webfonts/*.less"]
        },
        files: {
          "style.css": "style.less"
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        src: ['style.css', '!*.min.css'],
        dest: '',
        ext: '.min.css'
      }
    },

    // Files to be concatenated … (source and destination files)
    concat: {
      js: {
        src: ['app/namespace.js', 'app/models/*.js', 'app/views/*.js', 'app/routes.js'],
        dest: 'app/app.js'
      }
    },

    // … and minified (source and destination files)
    uglify: {
      dist: {
        src: ['<%= concat.js.dest %>'],
        dest: 'app/app.min.js'
      }
    },

   // Tasks being executed with 'grunt watch'
    watch: {
      options: {
        livereload: true
      },
      php : {
        files: '*.php',
        options: {
          nospawn: true
        }
      },
      scripts: {
        files: ['app/namespace.js', 'app/models/*.js', 'app/views/*.js', 'app/routes.js'],
        tasks: ['concat', 'uglify'],
        options: {
          nospawn: true
        }
      },
      less : {
        files : ['style.less', 'cssreset/*.less', 'less/front/*.less'],
        tasks: 'less'
      },
      cssmin : {
        files : 'style.css',
        tasks: 'cssmin'
      }
    }

  });

  // on watch events configure jshint:all to only run on changed file
  grunt.event.on('watch', function (action, filepath) {
    grunt.config(['jshint', 'files'], filepath);
  });


  // Load the plugins that provide the tasks we specified in package.json.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // This is the default task being executed if Grunt
  // is called without any further parameter.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};