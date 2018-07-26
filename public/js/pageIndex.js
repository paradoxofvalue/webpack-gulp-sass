/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	$('.modal').modal();
	$('.modal.chat').modal();
	$('.tabs').tabs();

	$(".categories-trigger").dropdown();
	$(".lang-trigger").dropdown();

	$(".main-owl-carousel").owlCarousel({
	  items: 1,
	  autoWidth: false,
	  dots: false,
	  nav: true
	});

	$('input.autocomplete').autocomplete({
	  data: {
	    "Apple": null,
	    "Microsoft": null,
	    "Google": 'https://placehold.it/250x250'
	  }
	});

	$('.datepicker').datepicker();

	$('select').formSelect();

	$(".slider").owlCarousel({
	  items: 1,
	  autoWidth: false,
	  dots: false,
	  nav: true
		});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDhiM2VhZTkxOGNkNGZiNmQ5ZTI4Iiwid2VicGFjazovLy9mcm9udGVuZC9qcy9wYWdlLWluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4YjNlYWU5MThjZDRmYjZkOWUyOCIsIid1c2Ugc3RyaWN0JztcclxuXHJcbiQoJy5tb2RhbCcpLm1vZGFsKCk7XHJcbiQoJy5tb2RhbC5jaGF0JykubW9kYWwoKTtcclxuJCgnLnRhYnMnKS50YWJzKCk7XHJcblxyXG4kKFwiLmNhdGVnb3JpZXMtdHJpZ2dlclwiKS5kcm9wZG93bigpO1xyXG4kKFwiLmxhbmctdHJpZ2dlclwiKS5kcm9wZG93bigpO1xyXG5cclxuJChcIi5tYWluLW93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgaXRlbXM6IDEsXHJcbiAgYXV0b1dpZHRoOiBmYWxzZSxcclxuICBkb3RzOiBmYWxzZSxcclxuICBuYXY6IHRydWUsXHJcbn0pO1xyXG5cclxuJCgnaW5wdXQuYXV0b2NvbXBsZXRlJykuYXV0b2NvbXBsZXRlKHtcclxuICBkYXRhOiB7XHJcbiAgICAgIFwiQXBwbGVcIjogbnVsbCxcclxuICAgICAgXCJNaWNyb3NvZnRcIjogbnVsbCxcclxuICAgICAgXCJHb29nbGVcIjogJ2h0dHBzOi8vcGxhY2Vob2xkLml0LzI1MHgyNTAnXHJcbiAgfSxcclxufSk7XHJcblxyXG4kKCcuZGF0ZXBpY2tlcicpLmRhdGVwaWNrZXIoKTtcclxuXHJcbiQoJ3NlbGVjdCcpLmZvcm1TZWxlY3QoKTtcclxuXHJcbiQoXCIuc2xpZGVyXCIpLm93bENhcm91c2VsKHtcclxuICBpdGVtczogMSxcclxuICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gIGRvdHM6ZmFsc2UsXHJcbiAgbmF2OiB0cnVlLFxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvanMvcGFnZS1pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==