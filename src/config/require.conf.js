require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'text': '../bower_components/requirejs-text/text',
        'require-css': '../bower_components/require-css'
    },
    map: {
        '*': {
            'css': 'require-css/css'
        }
    },
    shims: {
        'jquery': {
            export: '$'
        }
    }
});
