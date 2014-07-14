define(function (require) {
    var expect = require('chai').expect;
    var $ = require('jquery');
    var about = require('app/home/about/about');

    describe('about', function () {
        it('renders', function () {
            var container = $('<div></div>');
            about.render(container);
            expect(container.find('.about').text().trim()).to.equal('About it :)');
        })
    })
});