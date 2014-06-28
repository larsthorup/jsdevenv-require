define(function (require) {
    var $ = require('jquery');
    require('less!app/home/menu/menu');
    var menuHtml = require('text!app/home/menu/menu.html');

    var menu = $(menuHtml);
    menu.appendTo('body');
    menu.find('.about').on('click', function () {
        // Note: this is a dynamic/lazy invocation of require, so that module will not get bundled with main
        require(['app/home/about/about'], function (about) {
            about.render(menu.find('.container'));
        });
    });
});
