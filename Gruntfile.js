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

                // ToDo: include require.conf.js
                paths: {
                    'jquery': '../lib/jquery'
                },
                shim: {
                    'jquery': {
                        exports: '$'
                    }
                },

                name: 'main', // Note: bundle main and every module referenced recursively by it
                include: ['require.js', 'require.conf'], // Note: include the files not explicitly referenced
                // optimize: 'none',
                out: 'output/dist/require.js'
            }
        }
    };
    grunt.registerTask('bundle', ['copy:dist', 'requirejs:bundle']);

    // grunt
    grunt.initConfig(gruntConfig);
};