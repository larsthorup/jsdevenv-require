/*global module*/
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['cover', 'bundle']);


    // bundle
    grunt.loadNpmTasks('grunt-contrib-copy');
    gruntConfig.copy = {
        postinstall: {
            files: [
                {
                    expand: true,
                    cwd: 'bower_components/requirejs',
                    src: ['require.js'],
                    dest: 'src/lib'
                }
            ]
        },
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
                include: ['lib/require', 'config/require.conf'],

                // Note: "text" and "less" modules not used in production as all text and css is bundled
                stubModules: [
                    'text',
                    'require-less/less'
                ]
            }
        },

        // Note: bundle the "about" module and every module referenced recursively by it
        about: {
            options: {
                name: 'app/home/about/about',
                out: 'output/dist/app/home/about/about.js',

                // Note: exclude dependent modules already present in main
                exclude: ['jquery', 'text', 'less']
            }
        }
    };
    grunt.registerTask('bundle', ['copy:dist', 'requirejs']);


    // test
    grunt.loadNpmTasks('grunt-karma');
    gruntConfig.karma = {
        options: {
            basePath: '.',
            frameworks: ['mocha', 'requirejs'],
            files: [
                'src/test/karma-test-main.js',
                'src/test/bind.js', // Note: polyfill for the benefit of less on Phantom
                {pattern: 'src/**/*.*', included: false},
                {pattern: 'bower_components/**/*.js', included: false}
            ],
            coverageReporter: {
                reporters: [
                    {type: 'lcov'},
                    {type: 'html'},
                    {type: 'cobertura'},
                    {type: 'text-summary'}
                ],
                dir: 'output/coverage'
            },
            port: 9876, // Note: web server port
            colors: true, // Note: enable / disable colors in the output (reporters and logs)
            // logLevel: 'DEBUG'
            logLevel: 'INFO'
        }
    };
    gruntConfig.karma.test = {
        reporters: ['progress'],
        browsers: ['PhantomJS'],
        autoWatch: false,
        singleRun: true
    };
    grunt.registerTask('test', ['karma:test']);


    // cover
    gruntConfig.karma.cover = {
        preprocessors: {
            // Note: instrument all code files, but not test files
            'src/app/**/!(*test).js': ['coverage']
        },
        reporters: ['progress', 'coverage'],
        browsers: ['PhantomJS'],
        autoWatch: false,
        singleRun: true
    };
    grunt.registerTask('cover', ['karma:cover']);

    // grunt
    grunt.initConfig(gruntConfig);
};