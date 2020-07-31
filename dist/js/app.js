/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home.vue */ \"./src/components/Home.vue\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    Home: _components_Home_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"47027854-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"47027854-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [_c(\"Home\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2247027854-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"47027854-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"47027854-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"div\", { staticClass: \"container-one\" }, [\n        _c(\"div\", { staticClass: \"logo\" }, [\n          _c(\"img\", {\n            attrs: { src: __webpack_require__(/*! ../assets/gb-logo.svg */ \"./src/assets/gb-logo.svg\"), alt: \"\" }\n          })\n        ]),\n        _c(\"ul\", [\n          _c(\"li\", [_c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"contact us\")])]),\n          _c(\"li\", [\n            _c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"our service\")])\n          ]),\n          _c(\"li\", [_c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"about us\")])]),\n          _c(\"li\", [_c(\"a\", { attrs: { href: \"#\" } }, [_vm._v(\"home \")])]),\n          _c(\"li\", { staticClass: \"gb\", staticStyle: { float: \"left\" } }, [\n            _vm._v(\"Gulfbridge Consulting\")\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"sub1\" }, [\n          _c(\"p\", { staticClass: \"sub2\" }, [_vm._v(\"WE ARE THE BEST AT\")]),\n          _c(\"p\", { staticClass: \"sub3\" }, [\n            _vm._v(\"HR Advisory, Training, Recruitment and providing \"),\n            _c(\"br\"),\n            _vm._v(\" Professional HR Management & Advisory Services to suit \"),\n            _c(\"br\"),\n            _vm._v(\" your unique operations. \")\n          ]),\n          _c(\"img\", {\n            staticClass: \"icons\",\n            attrs: {\n              src: __webpack_require__(/*! ../assets/twitter-brands.svg */ \"./src/assets/twitter-brands.svg\"),\n              alt: \"\",\n              srcset: \"\"\n            }\n          }),\n          _c(\"img\", {\n            staticClass: \"icons\",\n            attrs: {\n              src: __webpack_require__(/*! ../assets/facebook-f-brands.svg */ \"./src/assets/facebook-f-brands.svg\"),\n              alt: \"\",\n              srcset: \"\"\n            }\n          }),\n          _c(\"img\", {\n            staticClass: \"icons\",\n            attrs: {\n              src: __webpack_require__(/*! ../assets/instagram-brands.svg */ \"./src/assets/instagram-brands.svg\"),\n              alt: \"\",\n              srcset: \"\"\n            }\n          }),\n          _c(\"a\", { attrs: { href: \"\" } }, [\n            _c(\"img\", {\n              staticClass: \"icons\",\n              attrs: {\n                src: __webpack_require__(/*! ../assets/linkedin-in-brands.svg */ \"./src/assets/linkedin-in-brands.svg\"),\n                alt: \"\",\n                srcset: \"\"\n              }\n            })\n          ]),\n          _c(\"a\", { attrs: { href: \"\" } }, [\n            _c(\"img\", {\n              staticClass: \"icons\",\n              attrs: {\n                src: __webpack_require__(/*! ../assets/medium-m-brands.svg */ \"./src/assets/medium-m-brands.svg\"),\n                alt: \"\",\n                srcset: \"\"\n              }\n            })\n          ])\n        ])\n      ]),\n      _c(\"div\", { staticClass: \"container-two\" }, [\n        _c(\"div\", { staticClass: \"about-us\" }, [\n          _c(\"h3\", [_vm._v(\"ABOUT US\")]),\n          _c(\"p\", { staticClass: \"pp\" }, [\n            _vm._v(\n              \"Gulfbridge Consulting Limited is a Human Resources Management, Training Services and Strategy Consulting practice based in Lagos, Nigeria. We are founded upon years of multi-sector engagement with topnotch brands with heavy realiance on technology and up-to-date technical competence to solve a business' people problems.\"\n            )\n          ]),\n          _c(\"p\", { staticClass: \"pp\" }, [\n            _vm._v(\n              \"We are a company incorporated to help businesses bridge the gap between the status quo and where they aspire to be strategy-wise, by ensuring that its people are given the tools and competences to execute their strategy per time. Our interventions address complex people needs of organizations that want to optimize performance and get greater returns for their human capital spend whilst tracking the right metrics. Our solutions address the knottiest of human capital and strategy challenges both in the public and private sectors. \"\n            )\n          ]),\n          _c(\"p\", { staticClass: \"pp\" }, [\n            _vm._v(\n              \" Our approach is to do little things well. We firmly believe that it is little things done well that stack up to form the solid entity that stakeholders come to trust and engage with. So, we pay premium attention to detail and systematically build to the big picture.\"\n            )\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"advantage\" }, [\n          _c(\"h3\", [_vm._v(\"THE GULFBRIDGE ADVANTAGE\")]),\n          _c(\"p\", { staticClass: \"pp\" }, [\n            _vm._v(\n              \"We are an extremely agile organization run by passionate HR and Business Professionals with many years hands-on experience, cutting across different sectors – Hospitality & Tourism, Telecommunications, Real Estates, Aviation, Financial Services, Consulting, Not-For-Profit, Information Technology, Engineering, Media, etc. Our people are carefully selected and have high sense of responsibility. We are professional & up-to-date with the latest HR issues, debates, development and concepts. With our monthly day-long conference, we keep our people relevant, all in the process of serving you better.\"\n            )\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"img-one\" }, [\n          _c(\"img\", {\n            attrs: { src: __webpack_require__(/*! ../assets/Img1.svg */ \"./src/assets/Img1.svg\"), alt: \"\", srcset: \"\" }\n          })\n        ])\n      ]),\n      _c(\"div\", { staticClass: \"container-three\" }, [\n        _c(\"div\", { staticClass: \"service\" }, [\n          _c(\"h3\", [_vm._v(\"OUR SERVICE\")]),\n          _c(\"ul\", [\n            _c(\"li\", [_vm._v(\"HR Advisory\")]),\n            _c(\"li\", [_vm._v(\"Service Design\")]),\n            _c(\"li\", [_vm._v(\"Business Strategy Implementation\")]),\n            _c(\"li\", [_vm._v(\"Training & Development\")]),\n            _c(\"li\", [_vm._v(\"Recruitment Services\")]),\n            _c(\"li\", [_vm._v(\"SME HR Toolkit\")]),\n            _c(\"li\", [\n              _vm._v(\n                \"Customer Attention, Retention & Experience (CARE) Services for SMEs\"\n              )\n            ]),\n            _c(\"li\", [_vm._v(\"Outsourcing Services\")])\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"how\" }, [\n          _c(\"h3\", [_vm._v(\"HOW WE SERVE YOU\")]),\n          _c(\"p\", [\n            _vm._v(\n              \"We start our engagement with you, our valued client, with a thorough understanding of your business (strategy, operating model, etc.) and its need(s). We naturally prefer to start with a brief from you to us but where that is not possible for whatever reasons, we will come in to gather information ourselves by carrying out surveys and other information gathering tools. With this knowledge, we formulate your recruitment, training and other needs, seek your approval to our proposed interventions, and we work from there by giving you a project plan.\"\n            )\n          ]),\n          _c(\"p\", [\n            _vm._v(\n              \"A staff is dedicated to liaise with you, so that you are kept abreast of the emerging issues and what we have done or intend to do about them. Critical issues like recruitment and other activities that have financial actions will be subject to your approval. Regular meetings at predetermined intervals will help keep you up to date on all critical aspects of issues outsourced to us so that you can devote a higher percentage of your time to other core HR issues.\"\n            )\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"img-2\" }, [\n          _c(\"img\", {\n            attrs: { src: __webpack_require__(/*! ../assets/Img2.svg */ \"./src/assets/Img2.svg\"), alt: \"\", srcset: \"\" }\n          })\n        ])\n      ]),\n      _c(\"div\", { staticClass: \"footer\" }, [\n        _c(\"div\", { staticClass: \"logo2\" }, [\n          _c(\"img\", {\n            attrs: {\n              src: __webpack_require__(/*! ../assets/gb-logo.svg */ \"./src/assets/gb-logo.svg\"),\n              alt: \"\",\n              srcset: \"\"\n            }\n          })\n        ]),\n        _c(\"div\", { staticClass: \"addy\" }, [\n          _c(\"p\", [\n            _c(\"strong\", [\n              _vm._v(\" 5, Shakiru Adeoye Street, Ogudu, Lagos.\"),\n              _c(\"br\"),\n              _vm._v(\" +234 807 777 6770 | +234 812 695 2210\"),\n              _c(\"br\"),\n              _vm._v(\" connect@gulfbridgeconsulting.com \")\n            ]),\n            _c(\"br\")\n          ])\n        ]),\n        _c(\"div\", { staticClass: \"iconics\" }, [\n          _c(\"img\", {\n            staticClass: \"icon\",\n            attrs: {\n              src: __webpack_require__(/*! ../assets/twitter-brands.svg */ \"./src/assets/twitter-brands.svg\"),\n              alt: \"\",\n              srcset: \"\"\n            }\n          }),\n          _c(\"img\", {\n            staticClass: \"icon\",\n            attrs: {\n              src: __webpack_require__(/*! ../assets/facebook-f-brands.svg */ \"./src/assets/facebook-f-brands.svg\"),\n              alt: \"\",\n              srcset: \"\"\n            }\n          }),\n          _c(\"img\", {\n            staticClass: \"icon\",\n            attrs: {\n              src: __webpack_require__(/*! ../assets/instagram-brands.svg */ \"./src/assets/instagram-brands.svg\"),\n              alt: \"\",\n              srcset: \"\"\n            }\n          }),\n          _c(\"a\", { attrs: { href: \"#\" } }, [\n            _c(\"img\", {\n              staticClass: \"icon\",\n              attrs: {\n                src: __webpack_require__(/*! ../assets/linkedin-in-brands.svg */ \"./src/assets/linkedin-in-brands.svg\"),\n                alt: \"\",\n                srcset: \"\"\n              }\n            })\n          ]),\n          _c(\"a\", { attrs: { href: \"#\" } }, [\n            _c(\"img\", {\n              staticClass: \"icon\",\n              attrs: {\n                src: __webpack_require__(/*! ../assets/medium-m-brands.svg */ \"./src/assets/medium-m-brands.svg\"),\n                alt: \"\",\n                srcset: \"\"\n              }\n            })\n          ])\n        ]),\n        _c(\"p\", { staticClass: \"copy\" }, [\n          _c(\"strong\", [_vm._v(\"© 2020 Gulfbridge Consulting Limited \")])\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2247027854-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\n// Module\nexports.push([module.i, \"#app {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/HomeBg.png */ \"./src/assets/HomeBg.png\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/footerBg.png */ \"./src/assets/footerBg.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/GCMobile.svg */ \"./src/assets/GCMobile.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../assets/Img22.svg */ \"./src/assets/Img22.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \".container-one[data-v-8dc7cce2] {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  height: 100vh;\\n}\\n.container-one .logo[data-v-8dc7cce2] {\\n  width: 60px;\\n  position: absolute;\\n  top: 20px;\\n  left: 5%;\\n}\\n.container-one ul[data-v-8dc7cce2] {\\n  margin: 0;\\n  list-style-type: none;\\n  padding: 0px;\\n}\\n.container-one ul li[data-v-8dc7cce2] {\\n  float: right;\\n  margin: 26px 32px 0px 0px;\\n}\\n.container-one ul li a[data-v-8dc7cce2] {\\n  text-decoration: none;\\n  font-size: 11px;\\n  padding: 0px 3px;\\n  color: #33a0ba;\\n  font-weight: bold;\\n  letter-spacing: 1px;\\n  padding: 5px 5px;\\n}\\n.container-one ul li a[data-v-8dc7cce2]:hover {\\n  color: #90b9f7;\\n  border-bottom: solid 2px #fcb9b2;\\n}\\n.container-one .gb[data-v-8dc7cce2] {\\n  margin-left: 130px;\\n  margin-top: 37px;\\n  font-size: 16px;\\n  font-weight: bold;\\n  letter-spacing: 2px;\\n  color: #33a0ba;\\n}\\n.container-one .sub1[data-v-8dc7cce2] {\\n  position: absolute;\\n  top: 36%;\\n  left: 5%;\\n  text-align: start;\\n}\\n.container-one .sub2[data-v-8dc7cce2] {\\n  font-size: 20px;\\n  font-weight: bold;\\n  color: #33a0ba;\\n  letter-spacing: 3px;\\n}\\n.container-one .sub3[data-v-8dc7cce2] {\\n  font-size: 14px;\\n  letter-spacing: 1px;\\n  font-weight: bold;\\n  line-height: 30px;\\n  color: #33a0ba;\\n}\\n.container-one .icons[data-v-8dc7cce2] {\\n  width: 12px;\\n  padding: 10px 10px;\\n  margin-top: 80px;\\n  color: #33a0ba;\\n}\\n.container-two[data-v-8dc7cce2] {\\n  display: grid;\\n  padding: 50px 60px;\\n  grid-template-areas: \\\"myabout myabout  myimg myimg\\\" \\\"myabout myabout  myimg myimg\\\" \\\"myad myad  myad myad\\\";\\n  grid-gap: 20px;\\n  text-align: justify;\\n}\\n.container-two h3[data-v-8dc7cce2] {\\n  color: #1b3164;\\n  display: inline-block;\\n  font-size: 20px;\\n  letter-spacing: 2px;\\n  border-bottom: #fcb9b2 solid 2px;\\n  padding: 5px;\\n}\\n.container-two .pp[data-v-8dc7cce2] {\\n  font-size: 14px;\\n  color: #33a0ba;\\n  letter-spacing: 1px;\\n  line-height: 22px;\\n}\\n.container-two .about-us[data-v-8dc7cce2] {\\n  grid-area: myabout;\\n}\\n.container-two .advantage[data-v-8dc7cce2] {\\n  grid-area: myad;\\n}\\n.container-two .img-one[data-v-8dc7cce2] {\\n  grid-area: myimg;\\n  width: 800px;\\n  margin-top: 60px;\\n}\\n.container-three[data-v-8dc7cce2] {\\n  display: grid;\\n  background-color: #33a0ba;\\n  padding: 50px 60px;\\n  text-align: justify;\\n  grid-template-areas: \\\"myservice myservice myimg2 myimg2\\\" \\\"myservice myservice myimg2 myimg2\\\" \\\"myhow myhow  myimg2 myimg2\\\" \\\"myhow myhow myimg2 myimg2\\\";\\n  grid-gap: 20px;\\n}\\n.container-three h3[data-v-8dc7cce2] {\\n  color: #1b3164;\\n  display: inline;\\n  font-size: 20px;\\n  letter-spacing: 2px;\\n  padding: 5px;\\n}\\n.container-three ul[data-v-8dc7cce2] {\\n  margin-top: 15px;\\n  color: white;\\n}\\n.container-three li[data-v-8dc7cce2] {\\n  padding: 10px;\\n  font-size: 14px;\\n}\\n.container-three p[data-v-8dc7cce2] {\\n  font-size: 14px;\\n  color: white;\\n  letter-spacing: 1px;\\n  line-height: 22px;\\n}\\n.container-three .service[data-v-8dc7cce2] {\\n  grid-area: myservice;\\n}\\n.container-three .how[data-v-8dc7cce2] {\\n  grid-area: myhow;\\n}\\n.container-three .img-2[data-v-8dc7cce2] {\\n  grid-area: myimg2;\\n  width: 700px;\\n}\\n.footer[data-v-8dc7cce2] {\\n  display: grid;\\n  padding: 0px 60px;\\n  height: 20vh;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-position: center;\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  grid-template-areas: \\\"myaddy mycopy  myicon mylogo2\\\";\\n  align-content: center;\\n  justify-content: space-around;\\n}\\n.footer .logo2[data-v-8dc7cce2] {\\n  width: 60px;\\n  grid-area: mylogo2;\\n  align-self: end;\\n}\\n.footer .iconics[data-v-8dc7cce2] {\\n  grid-area: myicon;\\n  align-self: end;\\n}\\n.footer .iconics .icon[data-v-8dc7cce2] {\\n  width: 12px;\\n  padding: 10px 10px;\\n  color: #33a0ba;\\n}\\n.footer .addy[data-v-8dc7cce2] {\\n  grid-area: myaddy;\\n  font-size: 14px;\\n  line-height: 25px;\\n  letter-spacing: 1px;\\n  color: #1b3164;\\n  margin-top: 5px;\\n}\\n.footer .copy[data-v-8dc7cce2] {\\n  grid-area: mycopy;\\n  align-self: end;\\n  color: #1b3164;\\n}\\n\\n/* styling for Media query below*/\\n@media only screen and (max-device-width: 1024px) {\\n.container-one[data-v-8dc7cce2] {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    width: 900px;\\n    height: 1600px;\\n}\\n.container-one .logo[data-v-8dc7cce2] {\\n    display: none;\\n    width: 190px;\\n    top: 340px;\\n    left: 12%;\\n}\\n.container-one ul li[data-v-8dc7cce2]:not(.gb) {\\n    display: none;\\n}\\n.container-one .gb[data-v-8dc7cce2] {\\n    display: none;\\n    margin-left: 50px;\\n    margin-top: 490px;\\n    font-size: 50px;\\n    font-weight: bolder;\\n    letter-spacing: 2px;\\n    color: #1b3164;\\n}\\n.container-one .sub1[data-v-8dc7cce2] {\\n    display: none;\\n    position: absolute;\\n    top: 36%;\\n    left: 5%;\\n    text-align: start;\\n}\\n.container-one .sub2[data-v-8dc7cce2] {\\n    font-size: 20px;\\n    font-weight: bold;\\n    color: #33a0ba;\\n    letter-spacing: 3px;\\n}\\n.container-one .sub3[data-v-8dc7cce2] {\\n    font-size: 14px;\\n    letter-spacing: 1px;\\n    font-weight: bold;\\n    line-height: 30px;\\n    color: #33a0ba;\\n}\\n.container-one .icons[data-v-8dc7cce2] {\\n    display: none;\\n}\\n.container-two[data-v-8dc7cce2] {\\n    display: grid;\\n    grid-template-areas: \\\"myabout\\\" \\\"myimg\\\" \\\"myad\\\";\\n    grid-gap: 5px;\\n    text-align: justify;\\n    margin-top: 100px;\\n}\\n.container-two h3[data-v-8dc7cce2] {\\n    color: #1b3164;\\n    display: inline-block;\\n    font-size: 45px;\\n    letter-spacing: 1px;\\n    border-bottom: red solid 4px;\\n    padding: 10px;\\n    font-weight: bolder;\\n}\\n.container-two .pp[data-v-8dc7cce2] {\\n    font-size: 35px;\\n    color: #1b3164;\\n    letter-spacing: 1px;\\n    line-height: 70px;\\n    font-weight: bold;\\n}\\n.container-two .about-us[data-v-8dc7cce2] {\\n    grid-area: myabout;\\n}\\n.container-two .advantage[data-v-8dc7cce2] {\\n    grid-area: myad;\\n}\\n.container-two .img-one[data-v-8dc7cce2] {\\n    grid-area: myimg;\\n    width: 760px;\\n    margin: 100px 0px 100px 0px;\\n    padding: 20px 0px;\\n}\\n.container-three[data-v-8dc7cce2] {\\n    display: grid;\\n    background-color: #ffff;\\n    text-align: justify;\\n    grid-template-areas: \\\"myimg2\\\" \\\"myservice\\\" \\\"myhow\\\";\\n    grid-gap: 0px;\\n    font-weight: bold;\\n}\\n.container-three h3[data-v-8dc7cce2] {\\n    color: #1b3164;\\n    display: inline-block;\\n    font-size: 45px;\\n    letter-spacing: 2px;\\n    border-bottom: red solid 2px;\\n    padding: 10px;\\n    font-weight: bolder;\\n    margin-top: 30px;\\n}\\n.container-three ul[data-v-8dc7cce2] {\\n    margin-top: 15px;\\n    color: #1b3164;\\n}\\n.container-three li[data-v-8dc7cce2] {\\n    padding: 10px;\\n    font-size: 35px;\\n    text-align: start;\\n    list-style: spacing 1px;\\n    line-height: 70px;\\n}\\n.container-three p[data-v-8dc7cce2] {\\n    font-size: 35px;\\n    color: #1b3164;\\n    letter-spacing: 1px;\\n    line-height: 70px;\\n}\\n.container-three .service[data-v-8dc7cce2] {\\n    grid-area: myservice;\\n    background-color: #ffff;\\n    margin: 80px 0px 80px 0px;\\n}\\n.container-three .how[data-v-8dc7cce2] {\\n    grid-area: myhow;\\n    background-color: #ffff;\\n    margin-bottom: 80px;\\n}\\n.container-three .img-2[data-v-8dc7cce2] {\\n    grid-area: myimg2;\\n    width: 800px;\\n    margin: 100px 0px 100px 0px;\\n    content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n.footer[data-v-8dc7cce2] {\\n    display: grid;\\n    padding: 10px 15px;\\n    height: 350px;\\n    width: 800px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-position: center;\\n    background-size: cover;\\n    background-repeat: no-repeat;\\n    grid-template-areas: \\\"myaddy\\\" \\\"myicon\\\" \\\"mycopy\\\";\\n    justify-content: start;\\n}\\n.footer .logo2[data-v-8dc7cce2] {\\n    display: none;\\n}\\n.footer .iconics[data-v-8dc7cce2] {\\n    grid-area: myicon;\\n    margin-left: 1px;\\n}\\n.footer .iconics .icon[data-v-8dc7cce2] {\\n    width: 25px;\\n    padding: 0px 10px;\\n}\\n.footer .addy[data-v-8dc7cce2] {\\n    grid-area: myaddy;\\n    font-size: 31px;\\n    line-height: 50px;\\n    letter-spacing: 1px;\\n    color: #1b3164;\\n    margin-top: 0px;\\n    font-weight: bold;\\n}\\n.footer .copy[data-v-8dc7cce2] {\\n    grid-area: mycopy;\\n    color: #1b3164;\\n    font-size: 31px;\\n    padding: 0px 0px;\\n    font-weight: bold;\\n}\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"6f033d23\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3a806c36\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Home.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ \"./src/App.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--8-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_47027854_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"47027854-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"47027854-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_47027854_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_47027854_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/GCMobile.svg":
/*!*********************************!*\
  !*** ./src/assets/GCMobile.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/GCMobile.fd876987.svg\";\n\n//# sourceURL=webpack:///./src/assets/GCMobile.svg?");

/***/ }),

/***/ "./src/assets/HomeBg.png":
/*!*******************************!*\
  !*** ./src/assets/HomeBg.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/HomeBg.c2251024.png\";\n\n//# sourceURL=webpack:///./src/assets/HomeBg.png?");

/***/ }),

/***/ "./src/assets/Img1.svg":
/*!*****************************!*\
  !*** ./src/assets/Img1.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Img1.6bc672f2.svg\";\n\n//# sourceURL=webpack:///./src/assets/Img1.svg?");

/***/ }),

/***/ "./src/assets/Img2.svg":
/*!*****************************!*\
  !*** ./src/assets/Img2.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Img2.caf32522.svg\";\n\n//# sourceURL=webpack:///./src/assets/Img2.svg?");

/***/ }),

/***/ "./src/assets/Img22.svg":
/*!******************************!*\
  !*** ./src/assets/Img22.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/Img22.de26f124.svg\";\n\n//# sourceURL=webpack:///./src/assets/Img22.svg?");

/***/ }),

/***/ "./src/assets/facebook-f-brands.svg":
/*!******************************************!*\
  !*** ./src/assets/facebook-f-brands.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/facebook-f-brands.53b4fafa.svg\";\n\n//# sourceURL=webpack:///./src/assets/facebook-f-brands.svg?");

/***/ }),

/***/ "./src/assets/footerBg.png":
/*!*********************************!*\
  !*** ./src/assets/footerBg.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/footerBg.035e5508.png\";\n\n//# sourceURL=webpack:///./src/assets/footerBg.png?");

/***/ }),

/***/ "./src/assets/gb-logo.svg":
/*!********************************!*\
  !*** ./src/assets/gb-logo.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/gb-logo.d9ff3ea7.svg\";\n\n//# sourceURL=webpack:///./src/assets/gb-logo.svg?");

/***/ }),

/***/ "./src/assets/instagram-brands.svg":
/*!*****************************************!*\
  !*** ./src/assets/instagram-brands.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/instagram-brands.e75317fa.svg\";\n\n//# sourceURL=webpack:///./src/assets/instagram-brands.svg?");

/***/ }),

/***/ "./src/assets/linkedin-in-brands.svg":
/*!*******************************************!*\
  !*** ./src/assets/linkedin-in-brands.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/linkedin-in-brands.1e01f0c0.svg\";\n\n//# sourceURL=webpack:///./src/assets/linkedin-in-brands.svg?");

/***/ }),

/***/ "./src/assets/medium-m-brands.svg":
/*!****************************************!*\
  !*** ./src/assets/medium-m-brands.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/medium-m-brands.4eae4c80.svg\";\n\n//# sourceURL=webpack:///./src/assets/medium-m-brands.svg?");

/***/ }),

/***/ "./src/assets/twitter-brands.svg":
/*!***************************************!*\
  !*** ./src/assets/twitter-brands.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/twitter-brands.6620c8ae.svg\";\n\n//# sourceURL=webpack:///./src/assets/twitter-brands.svg?");

/***/ }),

/***/ "./src/components/Home.vue":
/*!*********************************!*\
  !*** ./src/components/Home.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_8dc7cce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=8dc7cce2&scoped=true& */ \"./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true&\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ \"./src/components/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss& */ \"./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_vue_vue_type_template_id_8dc7cce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_vue_vue_type_template_id_8dc7cce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"8dc7cce2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=style&index=0&id=8dc7cce2&scoped=true&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_8dc7cce2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_47027854_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"47027854-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=8dc7cce2&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"47027854-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Home.vue?vue&type=template&id=8dc7cce2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_47027854_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_47027854_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_8dc7cce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Home.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_SEGUN_Desktop_vued_gulfbridge_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });