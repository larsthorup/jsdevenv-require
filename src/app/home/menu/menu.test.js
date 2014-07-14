define(function (require) {
    var expect = require('chai').expect;
    var $ = require('jquery');
    var menu = require('app/home/menu/menu');

    describe('menu', function () {

        describe('rendering', function () {
            var container;
            var aboutMenuItem;

            beforeEach(function () {
                container = $('<div></div>');

                // when
                menu.render(container);
                aboutMenuItem = container.find('.menu .about');
            });

            it('renders', function () {
                // then
                expect(aboutMenuItem.text().trim()).to.equal('About');
            });

            it('handles menu item clicks', function (done) {
                // then, eventually
                aboutMenuItem.on('completed', function () {
                    expect(container.find('.container .about').text().trim()).to.equal('About it :)');
                    done();
                });

                // when
                aboutMenuItem.trigger('click');
            });
        });
    })
});