require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'text': '../bower_components/requirejs-text/text'
    },
    shims: {
        'jquery': {
            export: '$'
        }
    }
});
