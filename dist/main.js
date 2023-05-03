/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMstuff\": () => (/* binding */ DOMstuff)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\nfunction toggle_form(main, form) {\n  main.className = main.className === \"\" ? \"hidden_bg\" : \"\";\n  form.className = form.className === \"form\" ? \"hidden_form\" : \"form\";\n}\nfunction close_btn(form) {\n  form.className = form.className === \"form\" ? \"hidden_form\" : \"form\";\n}\nfunction DOMstuff() {\n  const name = document.querySelector(\"#name\");\n  const description = document.querySelector(\"#description\");\n  const date = document.querySelector(\"#date\");\n  const priority_radio = Array.from(\n    document.querySelectorAll(\"[name='priority']\")\n  );\n\n  const content = document.querySelector(\"#content\");\n  const close = document.querySelector(\"#close\");\n\n  close.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    toggle_form(main, form);\n  });\n\n  const main = document.querySelector(\"main\");\n  const add_form = document.querySelector(\"#plus_to_do\");\n  const form = document.querySelector(\".hidden_form\");\n  const todo_form = document.querySelector(\"#todo_form\");\n  add_form.addEventListener(\"click\", () => {\n    toggle_form(main, form);\n  });\n\n  let to_do;\n  let priority;\n  const submit = document.querySelector(\"#submit\");\n  submit.addEventListener(\"click\", (e) => {\n    if (todo_form.checkValidity()) {\n      e.preventDefault();\n      priority = priority_radio.find((element) => {\n        return element.checked;\n      });\n      to_do = (0,_form__WEBPACK_IMPORTED_MODULE_0__.submiting)(\n        name.value,\n        description.value,\n        date.value,\n        priority.value\n      );\n      content.appendChild(to_do);\n      toggle_form(main, form);\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://project-todo/./src/dom.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submiting\": () => (/* binding */ submiting)\n/* harmony export */ });\nconst submiting = (name, description, date, priority) => {\n  const to_do = document.createElement(\"div\");\n  const name_div = document.createElement(\"div\");\n  name_div.textContent = name;\n  const date_div = document.createElement(\"div\");\n  date_div.textContent = date;\n  const priority_div = document.createElement(\"div\");\n  priority_div.textContent = priority;\n  priority_div.className = priority;\n  const description_div = document.createElement(\"div\");\n  description_div.textContent = \"Description\";\n  to_do.append(name_div, date_div, priority_div, description_div);\n  to_do.className = \"todo\";\n  return to_do;\n};\n\n\n\n\n//# sourceURL=webpack://project-todo/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.DOMstuff)();\n\n\n//# sourceURL=webpack://project-todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;