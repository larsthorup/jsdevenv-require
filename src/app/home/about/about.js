define(function (require) {
    require('jquery');
    require('css!app/home/about/about');
    var aboutHtml = require('text!app/home/about/about.html');

    function render(container) {
        container.html(aboutHtml);
    }

    return {
        render: render
    };
});