define(function (require) {
    var expect = require('chai').expect;
    var $ = require('jquery');
    var menu = require('app/home/menu/menu');

    describe('menu', function () {
        it('renders', function () {
            var container = $('<div></div>');
            menu.render(container);
            expect(container.find('.menu .about').text().trim()).to.equal('About');
        })
    })
});