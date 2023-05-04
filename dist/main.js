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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMstuff\": () => (/* binding */ DOMstuff)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\nfunction toggle_form(main, form) {\n  main.className = main.className === \"\" ? \"hidden_bg\" : \"\";\n  form.className = form.className === \"form\" ? \"hidden_form\" : \"form\";\n}\n\nconst DOMstuff = () => {\n  const name = document.querySelector(\"#name\");\n  const description = document.querySelector(\"#description\");\n  const date = document.querySelector(\"#date\");\n  const priority_radio = Array.from(\n    document.querySelectorAll(\"[name='priority']\")\n  );\n\n  const content = document.querySelector(\"#content\");\n  const close = document.querySelector(\"#close\");\n  const close_prjct = document.querySelector(\".close\");\n\n  close.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    toggle_form(main, form);\n  });\n\n  const main = document.querySelector(\"main\");\n  const add_form = document.querySelector(\"#plus_to_do\");\n  const form = document.querySelector(\".hidden_form\");\n  const todo_form = document.querySelector(\"#todo_form\");\n  add_form.addEventListener(\"click\", () => {\n    if (add_project.className === \"form\" || form.className === \"form\") {\n      return;\n    }\n    toggle_form(main, form);\n  });\n\n  let priority;\n  const submit = document.querySelector(\"#submit\");\n  const todos = [];\n  const todos_div = document.querySelector(\".todos\");\n  submit.addEventListener(\"click\", (e) => {\n    if (todo_form.checkValidity()) {\n      e.preventDefault();\n      priority = priority_radio.find((element) => {\n        return element.checked;\n      });\n      todos.push(\n        (0,_form__WEBPACK_IMPORTED_MODULE_0__.todo)(name.value, description.value, date.value, priority.value)\n      );\n      todos_div.replaceChildren();\n      for (let curr_todo of todos) {\n        todos_div.appendChild(_form__WEBPACK_IMPORTED_MODULE_0__.submiting.submit_todo(curr_todo));\n      }\n      name.value = \"\";\n      description.value = \"\";\n      date.value = \"\";\n      priority.value = \"\";\n      toggle_form(main, form);\n    }\n  });\n  const add_project = document.querySelector(\"#add_project\");\n  const plus = document.querySelector(\"#plus\");\n  const add_project_btn = document.querySelector(\"#add_project_btn\");\n  close_prjct.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    toggle_form(main, add_project);\n  });\n  const projects = [];\n  const project_name = document.querySelector(\"#name_project\");\n  const nav_bar = document.querySelector(\".projects_navbar\");\n\n  add_project_btn.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    let project = _form__WEBPACK_IMPORTED_MODULE_0__.submiting.sumbit_project(project_name.value);\n    nav_bar.appendChild(project);\n    projects.push(project_name.value);\n\n    project_name.value = \"\";\n    toggle_form(main, add_project);\n  });\n  plus.addEventListener(\"click\", (e) => {\n    if (form.className === \"form\" || add_project.className === \"form\") {\n      return;\n    }\n    toggle_form(main, add_project);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://project-todo/./src/dom.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submiting\": () => (/* binding */ submiting),\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nconst todo = (name, description, date, priority) => {\n  return { name, description, date, priority };\n};\n\nconst submiting = (() => {\n  const submit_todo = (todo) => {\n    const curr_to_do = document.createElement(\"div\");\n    const name_div = document.createElement(\"div\");\n    const date_div = document.createElement(\"div\");\n    const priority_div = document.createElement(\"div\");\n    const description_div = document.createElement(\"div\");\n    name_div.textContent = todo.name;\n    date_div.textContent = todo.date;\n    priority_div.textContent = todo.priority;\n    priority_div.className = todo.priority;\n    description_div.textContent = \"Description\";\n    curr_to_do.append(name_div, date_div, priority_div, description_div);\n    curr_to_do.className = \"todo\";\n    return curr_to_do;\n  };\n  const sumbit_project = (name) => {\n    const name_project_btn = document.createElement(\"button\");\n    name_project_btn.textContent = name;\n    name_project_btn.className = \"nav_bar_project\";\n    return name_project_btn;\n  };\n  return { submit_todo, sumbit_project };\n})();\n\n\n\n\n//# sourceURL=webpack://project-todo/./src/form.js?");

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