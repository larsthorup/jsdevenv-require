var deps = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        var dep = null;
        if (/\.test\.js$/.test(file)) {
            // Note: test file
            dep = file;
        } else {
            var match = /^\/base\/src\/app\/(.*)\.js$/.exec(file);
            if (match) {
                // Note: source file (to get correct coverage)
                dep = 'app/' + match[1];
            }
        }
        if(dep) {
            deps.push(dep);
        }
    }
}

require(['/base/src/config/require.conf.js'], function () {
    require(['/base/src/test/config/require.conf.js'], function () {
        require.config({
            // Karma serves files from '/base'
            baseUrl: '/base/src',

            // ask Require.js to load all files needed
            deps: deps,

            // start test run, once Require.js is done
            callback: window.__karma__.start
        });
    });
});