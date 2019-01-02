// sticky nav
var nav = $('.navs');
var body = $('body');
var logo = $('.navs .nav a.logo');
var topOfNav = nav.offset().top;
var heightOfNav = nav.outerHeight();

function fixNav() {
    if(window.scrollY >= topOfNav) {
        body.css('padding-top', heightOfNav + 'px');
        logo.css('transform','rotate(45deg)');
        body.addClass('fixed');
    } else {
        body.css('padding-top', 0);
        logo.css('transform','rotate(0deg)');
        body.removeClass('fixed');
    }
}

window.addEventListener('scroll', fixNav);

// toggle nav
var menu = $('.navs .mobile-nav .menu');
var links = $('.navs .mobile-nav .link');
menu.on('click', function(e){
    links.toggleClass('active');
    e.preventDefault();
});


console.log('--> script.js');