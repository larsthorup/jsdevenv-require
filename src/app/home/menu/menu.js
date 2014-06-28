define(function (require) {
    var $ = require('jquery');
    var menuHtml = require('text!app/home/menu/menu.html');

    $(menuHtml).appendTo('body');
});
