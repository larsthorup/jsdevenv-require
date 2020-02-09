jsdevenv-require
================

[![Build Status](https://travis-ci.org/larsthorup/jsdevenv-require.png)](https://travis-ci.org/larsthorup/jsdevenv-require)
[![Coverage Status](https://coveralls.io/repos/larsthorup/jsdevenv-require/badge.png?branch=master)](https://coveralls.io/r/larsthorup/jsdevenv-require?branch=master)
[![devDependency Status](https://david-dm.org/larsthorup/jsdevenv-require/dev-status.png)](https://david-dm.org/larsthorup/jsdevenv-require#info=devDependencies)

Note: this project is deprecated, because PhantomJS has been [deprecated](https://github.com/ariya/phantomjs/issues/15344).

Configuration of RequireJS for bundling

Features:
* Only two files requested on first load: index.html and (bundled) require.js
* Bundles JavaScript, HTML templates and pre-compiled Less files into a single .js bundle
* One main bundle, and one lazy loaded bundle
* Require configuration shared between development, bundling and unit testing
* Simple directory structure
* Dependencies managed with Bower and npm

Demo:

    npm install bower -g
    npm install grunt-cli -g

    npm install
    grunt
    open output/dist/index.html
