'use strict';

var elems = document.querySelectorAll('.parallax');
var instances = M.Parallax.init(elems);

$(".categories-trigger").dropdown();
$(".lang-trigger").dropdown();

$(".slider").owlCarousel({
    items: 1,
    autoWidth: false,
    dots:false,
    nav: true,
});