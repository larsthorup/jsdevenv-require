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
        bundle: {
            options: {
                baseUrl: 'src',
                // Note: use shared configuration
                mainConfigFile: 'src/config/require.conf.js',

                // Note: bundle main and every module referenced recursively by it
                name: 'app/main',

                // Note: include the files not explicitly referenced
                include: ['lib/require', 'config/require.conf'],

                // Note: Exclude content of modules only used during development and bundling
                stubModules: ['text'],
                exclude: ['require-css/normalize'],
                pragmasOnSave: {
                    excludeRequireCss: true
                },

                optimize: 'none',
                out: 'output/dist/lib/require.js'
            }
        }
    };
    grunt.registerTask('bundle', ['copy:dist', 'requirejs:bundle']);

    // grunt
    grunt.initConfig(gruntConfig);
};