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
        src: ['app/namespace.js', 'app/templates.js', 'app/models/*.js', 'app/views/*.js', 'app/routes.js', 'app/scripts.js'],
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
    // javascipt templates //
    jst: {
      compile: {
          options: {
              namespace: 'Blog.Templates',
              processName: function (filename) {
                  return filename.split('/').pop().split('.')[0];
              }
          },
          files: {
              'app/templates.js': ['app/templates/*.html']
          }
      }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      // prefix the specified file
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'style.css'
      },
      no_dest: {
        src: 'style.css' // globbing is also possible here
      }
    },

   // Tasks being executed with 'grunt watch'
    watch: {
      options: {
        livereload: true
      },
      php : {
        files: ['*.php', 'app/templates/*.html'],
        options: {
          nospawn: true
        }
      },
      html : {
        files: ['app/templates/*.html'],
        tasks: ['jst', 'concat', 'uglify'],
        options: {
          nospawn: true
        }
      },
      scripts: {
        files: ['app/namespace.js', 'app/models/*.js', 'app/views/*.js', 'app/routes.js', 'app/scripts.js'],
        tasks: ['jst', 'concat', 'uglify'],
        options: {
          nospawn: true
        }
      },
      less : {
        files : ['style.less', 'cssreset/*.less', 'less/front/*.less'],
        tasks: ['less', 'autoprefixer']
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
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');


  // This is the default task being executed if Grunt
  // is called without any further parameter.
  grunt.registerTask('default', ['jshint', 'jst', 'concat', 'uglify']);

};