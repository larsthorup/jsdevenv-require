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
                mainConfigFile: 'src/config/require.conf.js', // Note: use shared configuration
                name: 'app/main', // Note: bundle main and every module referenced recursively by it
                include: ['lib/require', 'config/require.conf'], // Note: include the files not explicitly referenced
                stubModules: ['config/require.conf', 'text'], // Exclude content of modules only used during development and bundling
                // optimize: 'none',
                out: 'output/dist/lib/require.js'
            }
        }
    };
    grunt.registerTask('bundle', ['copy:dist', 'requirejs:bundle']);

    // grunt
    grunt.initConfig(gruntConfig);
};