jsdevenv-require
================

Configuration of RequireJS for bundling

Features:
* Only two files requested on first load: index.html and (bundled) require.js
* Bundles JavaScript, HTML templates and pre-compiled Less files in a single bundle
* One main bundle, and one lazy loaded bundle
* Require configuration shared between development, bundling and unit testing
* Simple directory structure
* Dependencies managed with Bower and npm (except for require.js)

Demo:

    npm install bower -g
    npm install grunt-cli -g
    npm install
    bower install
    grunt
    open output/dist/index.html