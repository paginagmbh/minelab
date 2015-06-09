module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            expanded: {
                options: {
                    style:'expanded'
                },
                files: {
                    'stylesheets/application.css': ['sass/application.scss']
                }
            }
        },
        cssmin: {
            minify: {
                files:[{
                    src: 'stylesheets/application.css',
                    dest: 'stylesheets/application.min.css'
                }],
                options: {
                    report:'min',
                    keepSpecialComments: 0
                }
            }
        },
        watch: {
            styles: {
                files: ['sass/**/*.scss'],
                tasks: ['compile-css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compile-sass']);
    grunt.registerTask('compile-css', ['sass', 'cssmin']);
};