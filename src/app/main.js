define(function (require) {
    var menu = require('app/home/menu/menu');
    var newsfeed = require('newsfeed/newsfeed');
    menu.render($('#menu'));
    newsfeed.render($('#newsfeed'));
});