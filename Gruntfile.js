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
          ext: '.min.css'
        }]
      }
    },
    copy: {
      fonts: {
        expand: true,
        cwd: "src/fonts/",
        src: "**",
        dest: "compiled/fonts",
        filter: "isFile"
      }
    },
    watch: {
      changes: {
        files: ["src/**"],
        tasks: "default"
      }
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-watch" );
  grunt.loadNpmTasks( "grunt-contrib-copy" );
  grunt.loadNpmTasks( "grunt-contrib-cssmin" );
  grunt.loadNpmTasks( "grunt-contrib-compass" );
  grunt.loadNpmTasks( "grunt-haml2html" );

  grunt.registerTask( "default", ["haml", "compass", "cssmin", "copy", "watch"] );
};
