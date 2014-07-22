jsdevenv-require
================

Configuration of RequireJS for bundling

Features:
* Only two files requested on first load: index.html and (bundled) require.js
* Bundles JavaScript, HTML templates and pre-compiled Less files into a single .js bundle
* One main bundle, and one lazy loaded bundle
* Require configuration shared between development, bundling and unit testing
* Simple directory structure
* Dependencies managed with Bower and npm

Demo:

    npm install grunt-cli -g
    npm install
    grunt
    open output/dist/index.html