/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _form = __webpack_require__(1);

	var _form2 = _interopRequireDefault(_form);

	var _menu = __webpack_require__(2);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var menu = new _menu2.default({
	  elem: document.querySelector('header nav')
	}),
	    form = new _form2.default({
	  elem: document.querySelector('#reg')
	});

	// document.querySelector('.page__header').onclick = function() {
	__webpack_require__.e/* nsure */(2, function () {
	  __webpack_require__(3);
	});
	// };

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Form = function Form(_ref) {
	    var elem = _ref.elem;

	    _classCallCheck(this, Form);

	    var elems = document.querySelectorAll('.modal');
	    var instances = M.Modal.init(elems);

	    var nameElement = elem.querySelector('#name'),
	        phoneElement = elem.querySelector('#phone'),
	        emailElement = elem.querySelector('#email'),
	        buttonElement = elem.querySelector('button.btn'),
	        elementsArray = [nameElement, phoneElement, emailElement];

	    elementsArray.forEach(function (item) {
	        item.addEventListener('keydown', function (e) {
	            validateLength(e.currentTarget);
	        });
	        item.addEventListener('change', function (e) {
	            validate(e);
	        });
	    });

	    var validate = function validate(event) {
	        var target = event.currentTarget;
	        switch (target.id) {
	            case 'name':
	                {
	                    setValidateStatus(target, 1);
	                    break;
	                }
	            case 'phone':
	                {
	                    var isValid = target.value.match(/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g);

	                    isValid ? setValidateStatus(target, 1) : setValidateStatus(target, 0);
	                    break;
	                }
	            case 'email':
	                {
	                    var emailRegExpr = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "g"),
	                        _isValid = target.value.match(emailRegExpr);

	                    _isValid ? setValidateStatus(target, 1) : setValidateStatus(target, 0);
	                    break;
	                }
	        }
	    };

	    var disablingButton = function disablingButton() {
	        var isValid = elementsArray.every(function (item) {
	            if (item.value.length) {
	                return true;
	            }
	        });
	        isValid ? buttonElement.removeAttribute('disabled') : buttonElement.setAttribute('disabled', 'disabled');
	    };

	    var validateLength = function validateLength(target) {
	        var value = target.value,
	            maxlength = target.getAttribute('maxlength');
	        if (value.length > maxlength) {
	            value = value.split('').splice(0, maxlength).join('');
	            target.value = value;
	        }
	    };

	    var setValidateStatus = function setValidateStatus(target, status) {
	        status ? target.classList.add('valid') : target.classList.add('invalid');
	        status ? '' : target.value = '';
	        disablingButton();
	        setTimeout(function () {
	            status ? target.classList.remove('valid') : target.classList.remove('invalid');
	        }, 2000);
	    };
	};

		exports.default = Form;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function Menu(_ref) {
	  var elem = _ref.elem;

	  _classCallCheck(this, Menu);

	  elem.querySelectorAll('li a').forEach(function (item) {
	    item.addEventListener('click', function (e) {
	      eventFunction(e);
	    });
	  });

	  window.onscroll = function (event) {
	    onScroll(event);
	  };

	  var onScroll = function onScroll(event) {
	    var startBlock = document.querySelector('#start'),
	        howBlock = document.querySelector('#how'),
	        buyBlock = document.querySelector('#buy'),
	        startY = event ? event.pageY : window.pageY;

	    [startBlock, howBlock, buyBlock].forEach(function (item) {
	      if (startY >= item.offsetTop - 50) {
	        navChange(document.querySelector('header nav li a[href="#' + item.id + '"]'));
	      }
	    });
	  };

	  document.querySelector('nav a[href="#reg"]').addEventListener('click', function (e) {
	    eventFunction(e);
	  });
	  document.querySelector('a[href="#how"].btn-floating').addEventListener('click', function (e) {
	    eventFunction(e);
	  });
	  document.querySelector('#big-reg a[href="#reg"].btn').addEventListener('click', function (e) {
	    eventFunction(e);
	  });

	  var navChange = function navChange(element) {
	    var allNavItem = element.parentElement.parentElement.querySelectorAll('li');
	    allNavItem.forEach(function (item) {
	      item.classList.remove('active');
	    });
	    element.parentElement.classList.add('active');
	  };

	  var eventFunction = function eventFunction(e) {
	    e.preventDefault();
	    var urlArray = e.currentTarget.href.split('/');
	    smoothScroll(urlArray[urlArray.length - 1]);
	    navChange(e.currentTarget);
	  };

	  var currentYPosition = function currentYPosition() {
	    // Firefox, Chrome, Opera, Safari
	    if (self.pageYOffset) return self.pageYOffset;
	    // Internet Explorer 6 - standards mode
	    if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
	    // Internet Explorer 6, 7 and 8
	    if (document.body.scrollTop) return document.body.scrollTop;
	    return 0;
	  };

	  var elmYPosition = function elmYPosition(eID) {
	    var elm = document.querySelector(eID);
	    var y = elm.offsetTop;
	    var node = elm;
	    while (node.offsetParent && node.offsetParent != document.body) {
	      node = node.offsetParent;
	      y += node.offsetTop;
	    }return y;
	  };

	  var smoothScroll = function smoothScroll(eID) {
	    var startY = currentYPosition();
	    var stopY = elmYPosition(eID);
	    var distance = stopY > startY ? stopY - startY : startY - stopY;
	    if (distance < 100) {
	      scrollTo(0, stopY);return;
	    }
	    var speed = Math.round(distance / 100);
	    if (speed >= 20) speed = 20;
	    var step = Math.round(distance / 25);
	    var leapY = stopY > startY ? startY + step : startY - step;
	    var timer = 0;
	    if (stopY > startY) {
	      for (var i = startY; i < stopY; i += step) {
	        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
	        leapY += step;if (leapY > stopY) leapY = stopY;timer++;
	      }return;
	    }
	    for (var i = startY; i > stopY; i -= step) {
	      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
	      leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
	    }
	  };
	};

		exports.default = Menu;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiOTY1ODVlMGQyODQxNmI2NWE5OCIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvbWVudS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShjYWxsYmFja3MubGVuZ3RoKVxuIFx0XHRcdGNhbGxiYWNrcy5zaGlmdCgpLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdC8vIEFycmF5IG1lYW5zIFwibG9hZGluZ1wiLCBhcnJheSBjb250YWlucyBjYWxsYmFja3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCI7XG4gXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiOTY1ODVlMGQyODQxNmI2NWE5OCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbmxldCBtZW51ID0gbmV3IE1lbnUoe1xuICAgIGVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBuYXYnKVxuICB9KSxcbiAgZm9ybSA9IG5ldyBGb3JtKHtcbiAgICBlbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnJylcbiAgfSk7XG5cblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX2hlYWRlcicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKCkge1xuICAgIHJlcXVpcmUoJy4vaGVhZGVyJyk7XG4gIH0pO1xuLy8gfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvanMvcGFnZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGVsZW0gfSkge1xuXG4gICAgICAgIHZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpO1xuICAgICAgICB2YXIgaW5zdGFuY2VzID0gTS5Nb2RhbC5pbml0KGVsZW1zKTtcblxuICAgICAgICBsZXQgbmFtZUVsZW1lbnQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyksXG4gICAgICAgICAgICBwaG9uZUVsZW1lbnQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZScpLFxuICAgICAgICAgICAgZW1haWxFbGVtZW50ID0gZWxlbS5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKSxcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5idG4nKSxcbiAgICAgICAgICAgIGVsZW1lbnRzQXJyYXkgPSBbbmFtZUVsZW1lbnQsIHBob25lRWxlbWVudCwgZW1haWxFbGVtZW50XTtcblxuICAgICAgICBlbGVtZW50c0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlTGVuZ3RoKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZShlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgc3dpdGNoICh0YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICduYW1lJzoge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWxpZGF0ZVN0YXR1cyh0YXJnZXQsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAncGhvbmUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gdGFyZ2V0LnZhbHVlLm1hdGNoKC8oXFwrPyggfC18XFwuKT9cXGR7MSwyfSggfC18XFwuKT8pPyhcXCg/XFxkezN9XFwpP3xcXGR7M30pKCB8LXxcXC4pPyhcXGR7M30oIHwtfFxcLik/XFxkezR9KS9nKTtcblxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID8gc2V0VmFsaWRhdGVTdGF0dXModGFyZ2V0LCAxKSA6IHNldFZhbGlkYXRlU3RhdHVzKHRhcmdldCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsUmVnRXhwciA9IG5ldyBSZWdFeHAoXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIiwgXCJnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHRhcmdldC52YWx1ZS5tYXRjaChlbWFpbFJlZ0V4cHIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPyBzZXRWYWxpZGF0ZVN0YXR1cyh0YXJnZXQsIDEpIDogc2V0VmFsaWRhdGVTdGF0dXModGFyZ2V0LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpc2FibGluZ0J1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gZWxlbWVudHNBcnJheS5ldmVyeShpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpc1ZhbGlkID8gYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgOiBidXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWxpZGF0ZUxlbmd0aCA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGggPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBtYXhsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcnKS5zcGxpY2UoMCwgbWF4bGVuZ3RoKS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZXRWYWxpZGF0ZVN0YXR1cyA9ICh0YXJnZXQsIHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgc3RhdHVzID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJykgOiB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgc3RhdHVzID8gJycgOiB0YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGRpc2FibGluZ0J1dHRvbigpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID8gdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJykgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2pzL2Zvcm0vaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgZWxlbSB9KSB7XG4gICAgZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdsaSBhJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGV2ZW50RnVuY3Rpb24oZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IChldmVudCkgPT4ge1xuICAgICAgb25TY3JvbGwoZXZlbnQpO1xuICAgIH1cblxuICAgIGxldCBvblNjcm9sbCA9IChldmVudCkgPT4ge1xuICAgICAgbGV0IHN0YXJ0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKSxcbiAgICAgICAgaG93QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG93JyksXG4gICAgICAgIGJ1eUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1eScpLFxuICAgICAgICBzdGFydFkgPSBldmVudCA/IGV2ZW50LnBhZ2VZIDogd2luZG93LnBhZ2VZO1xuXG4gICAgICBbc3RhcnRCbG9jaywgaG93QmxvY2ssIGJ1eUJsb2NrXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoc3RhcnRZID49IGl0ZW0ub2Zmc2V0VG9wIC0gNTApIHtcbiAgICAgICAgICBuYXZDaGFuZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIG5hdiBsaSBhW2hyZWY9XCIjJytpdGVtLmlkKydcIl0nKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiBhW2hyZWY9XCIjcmVnXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZXZlbnRGdW5jdGlvbihlKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjaG93XCJdLmJ0bi1mbG9hdGluZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGV2ZW50RnVuY3Rpb24oZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JpZy1yZWcgYVtocmVmPVwiI3JlZ1wiXS5idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBldmVudEZ1bmN0aW9uKGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IG5hdkNoYW5nZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgYWxsTmF2SXRlbSA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgICBhbGxOYXZJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pXG4gICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgbGV0IGV2ZW50RnVuY3Rpb24gPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IHVybEFycmF5ID0gZS5jdXJyZW50VGFyZ2V0LmhyZWYuc3BsaXQoJy8nKTtcbiAgICAgIHNtb290aFNjcm9sbCh1cmxBcnJheVt1cmxBcnJheS5sZW5ndGggLSAxXSk7XG4gICAgICBuYXZDaGFuZ2UoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudFlQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgIC8vIEZpcmVmb3gsIENocm9tZSwgT3BlcmEsIFNhZmFyaVxuICAgICAgaWYgKHNlbGYucGFnZVlPZmZzZXQpIHJldHVybiBzZWxmLnBhZ2VZT2Zmc2V0O1xuICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiAtIHN0YW5kYXJkcyBtb2RlXG4gICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiwgNyBhbmQgOFxuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cblxuICAgIGxldCBlbG1ZUG9zaXRpb24gPSAoZUlEKSA9PiB7XG4gICAgICB2YXIgZWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlSUQpO1xuICAgICAgdmFyIHkgPSBlbG0ub2Zmc2V0VG9wO1xuICAgICAgdmFyIG5vZGUgPSBlbG07XG4gICAgICB3aGlsZSAobm9kZS5vZmZzZXRQYXJlbnQgJiYgbm9kZS5vZmZzZXRQYXJlbnQgIT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIHkgKz0gbm9kZS5vZmZzZXRUb3A7XG4gICAgICB9IHJldHVybiB5O1xuICAgIH1cblxuXG4gICAgbGV0IHNtb290aFNjcm9sbCA9IChlSUQpID0+IHtcbiAgICAgIHZhciBzdGFydFkgPSBjdXJyZW50WVBvc2l0aW9uKCk7XG4gICAgICB2YXIgc3RvcFkgPSBlbG1ZUG9zaXRpb24oZUlEKTtcbiAgICAgIHZhciBkaXN0YW5jZSA9IHN0b3BZID4gc3RhcnRZID8gc3RvcFkgLSBzdGFydFkgOiBzdGFydFkgLSBzdG9wWTtcbiAgICAgIGlmIChkaXN0YW5jZSA8IDEwMCkge1xuICAgICAgICBzY3JvbGxUbygwLCBzdG9wWSk7IHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzcGVlZCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAxMDApO1xuICAgICAgaWYgKHNwZWVkID49IDIwKSBzcGVlZCA9IDIwO1xuICAgICAgdmFyIHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMjUpO1xuICAgICAgdmFyIGxlYXBZID0gc3RvcFkgPiBzdGFydFkgPyBzdGFydFkgKyBzdGVwIDogc3RhcnRZIC0gc3RlcDtcbiAgICAgIHZhciB0aW1lciA9IDA7XG4gICAgICBpZiAoc3RvcFkgPiBzdGFydFkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA8IHN0b3BZOyBpICs9IHN0ZXApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KFwid2luZG93LnNjcm9sbFRvKDAsIFwiICsgbGVhcFkgKyBcIilcIiwgdGltZXIgKiBzcGVlZCk7XG4gICAgICAgICAgbGVhcFkgKz0gc3RlcDsgaWYgKGxlYXBZID4gc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG4gICAgICAgIH0gcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA+IHN0b3BZOyBpIC09IHN0ZXApIHtcbiAgICAgICAgc2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIiArIGxlYXBZICsgXCIpXCIsIHRpbWVyICogc3BlZWQpO1xuICAgICAgICBsZWFwWSAtPSBzdGVwOyBpZiAobGVhcFkgPCBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9qcy9tZW51L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF6RUE7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEdBOzs7Iiwic291cmNlUm9vdCI6IiJ9