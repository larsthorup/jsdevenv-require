define(['chai', 'jquery', 'app/home/about/about'], function (chai, $, about) {
    var expect = chai.expect;

    describe('about', function () {
        it('renders', function () {
            var container = $('<div></div>');
            about.render(container);
            expect(container.find('.about').text().trim()).to.equal('About it :)');
        })
    })
});