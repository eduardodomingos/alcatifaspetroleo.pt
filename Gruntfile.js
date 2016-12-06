module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'css/theme.css': 'less/theme.less'
                }
            }
        },
        clean: ['css/**/*.css'],
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    base: '',
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },

            html: {
                files: '*.html'
            },
            css: {
                files: 'less/**/*.less',
                tasks: ['less']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'less', 'connect', 'watch']);

};