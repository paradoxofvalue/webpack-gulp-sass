'use strict';

$(".categories-trigger").dropdown();
$(".lang-trigger").dropdown();

$(".main-owl-carousel").owlCarousel({
  items: 1,
  autoWidth: false,
  dots: false,
  nav: true,
});

$('input.autocomplete').autocomplete({
  data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
  },
});

$('.datepicker').datepicker();

$('select').formSelect();

$(".slider").owlCarousel({
  items: 1,
  autoWidth: false,
  dots:false,
  nav: true,
});