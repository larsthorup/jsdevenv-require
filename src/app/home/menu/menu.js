define(function (require) {
    var $ = require('jquery');
    require('css!app/home/menu/menu');
    var menuHtml = require('text!app/home/menu/menu.html');

    $(menuHtml).appendTo('body');
});
