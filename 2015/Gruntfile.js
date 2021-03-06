module.exports = function( grunt ) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    compass: {
      dist: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'compiled/css',
          raw: "require 'modular-scale'"
        }
      }
    },
    haml: {
      dist: {
        files: {
          'compiled/application.html': 'src/application.haml'
        }
      }
    },
    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'compiled/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'compiled/css/',
          ext: '.css'
        }]
      }
    },
    coffee: {
      compile: {
        files: {
          'compiled/js/application.js': "src/coffee/*.coffee"
        }
      }
    },
    uglify: {
      min: {
        files: {
          "compiled/js/application.js": "compiled/js/application.js"
        }
      }
    },
    copy: {
      fonts: {
        expand: true,
        cwd: "src/fonts/",
        src: "**",
        dest: "compiled/fonts",
        filter: "isFile"
      },
      images: {
        expand: true,
        cwd: "src/img/",
        src: "**",
        dest: "compiled/img",
        filter: "isFile"
      },
      lib: {
        expand: true,
        cwd: "src/lib/",
        src: "*",
        dest: "compiled/js",
        filter: "isFile"
      },
      sitemap: {
        expand: true,
        cwd: "src/",
        src: "sitemap.xml",
        dest: "compiled/",
        filter: "isFile"
      }
    },
    watch: {
      changes: {
        files: ["src/**"],
        tasks: "default"
      }
    },
    exec: {
      removeCompiled: "rm -rf compiled"
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-contrib-copy" );
  grunt.loadNpmTasks( "grunt-contrib-cssmin" );
  grunt.loadNpmTasks( "grunt-contrib-compass" );
  grunt.loadNpmTasks( "grunt-haml2html" );
  grunt.loadNpmTasks( "grunt-exec");
  grunt.loadNpmTasks( "grunt-contrib-coffee" );
  grunt.loadNpmTasks( "grunt-contrib-uglify" );

  grunt.registerTask( "default", [ "exec:removeCompiled", "haml", "compass", "cssmin", "coffee", "uglify:min", "copy", "watch"] );
};
