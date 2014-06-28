/*global module*/
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['bundle']);


    // bundle
    grunt.loadNpmTasks('grunt-contrib-copy');
    gruntConfig.copy = {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: 'src',
                    src: ['index.html'],
                    dest: 'output/dist'
                }
            ]
        }
    };
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    gruntConfig.requirejs = {

        // Note: shared configuration for all bundled modules
        options: {
            baseUrl: 'src',
            mainConfigFile: 'src/config/require.conf.js',
            optimize: 'none',

            // Note: "text" module not used in production as all text is bundled
            stubModules: ['text'],

            // Note: "css" module not used in production as all css is bundled
            exclude: ['require-css/normalize'],
            pragmasOnSave: {
                excludeRequireCss: true
            }
        },

        // Note: bundle the "main" module and every module referenced recursively by it
        main: {
            options: {
                name: 'app/main',
                out: 'output/dist/lib/require.js',

                // Note: explicitly include necessary files that are not explicitly referenced
                include: ['lib/require', 'config/require.conf']
            }
        },

        // Note: bundle the "about" module and every module referenced recursively by it
        about: {
            options: {
                name: 'app/home/about/about',
                out: 'output/dist/app/home/about/about.js',
                exclude: ['jquery', 'text'] // Note: exclude dependent modules already present in main
            }
        }
    };
    grunt.registerTask('bundle', ['copy:dist', 'requirejs']);

    // grunt
    grunt.initConfig(gruntConfig);
};