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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n(function() {\n    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})();\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\n    const content = document.getElementById('content');\n\n    const container = document.createElement('div');\n    container.classList.add('container');\n    // Set up tabs\n    const nav = document.createElement('nav');\n    const ul = document.createElement('ul');\n    const homeTab = document.createElement('li');\n    homeTab.textContent = 'Home';\n    const menuTab = document.createElement('li');\n    menuTab.textContent = 'Menu';\n    const contactTab = document.createElement('li');\n    contactTab.textContent = 'Contact';\n    ul.append(homeTab, menuTab, contactTab);\n    nav.append(ul);\n    // Set up main\n    const main = document.createElement('div');\n    main.classList.add('main');\n    // Set up main - hero section\n    const hero = document.createElement('div');\n    hero.classList.add('hero');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Enchanted Bites Café';\n    const heroImg = document.createElement('img');\n    heroImg.setAttribute('src', './cafe-hero.jpeg');\n    heroImg.setAttribute('alt', 'café interior');\n    const heroImgCap = document.createElement('div');\n    heroImgCap.classList.add('caption');\n    const heroImgCapAuth = document.createElement('a');\n    heroImgCapAuth.setAttribute('href', 'https://unsplash.com/@supa_95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');\n    heroImgCapAuth.textContent = 'Sebastian Schuppik';\n    const heroImgCapLink = document.createElement('a');\n    heroImgCapLink.setAttribute('href', 'https://unsplash.com/photos/H7xTpvBjJS4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');\n    heroImgCapLink.textContent = 'Unsplash';\n    heroImgCap.append('Photo by ', heroImgCapAuth, ' on ', heroImgCapLink);\n    hero.append(h1, heroImg, heroImgCap);\n    // Set up main - description section\n    const descSection = document.createElement('div');\n    descSection.classList.add('section');\n    descSection.textContent = 'Enchanted Bites Café is a whimsical and magical dining destination that combines gourmet cuisine with an enchanting atmosphere. It\\'s a place where fairy tales come to life, and every dish is crafted with a touch of magic.';\n    // Set up main - testimonial section\n    const testSection = document.createElement('div');\n    testSection.classList.add('section');\n    const blockquote = document.createElement('blockquote');\n    const blockquotePara = document.createElement('p');\n    blockquotePara.textContent = 'Enchanted Bites Café is a hidden gem that truly transported me to a fairy tale realm. The moment I walked in, I felt like I was in a storybook world. The decor is spellbinding, and the food is nothing short of magical. The Pixie Pasta fluttered on my taste buds, and the Unicorn Elixir left me feeling rejuvenated. If you\\'re looking for an unforgettable dining experience, Enchanted Bites is the place to be!';\n    const blockquoteFooter = document.createElement('footer');\n    blockquoteFooter.textContent = '-Emily S.';\n    blockquote.append(blockquotePara, blockquoteFooter);\n    testSection.append(blockquote);\n    main.append(hero, descSection, testSection);\n    // Set up footer\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    const bgImgAuth = document.createElement('a');\n    bgImgAuth.setAttribute('href', 'https://unsplash.com/@ymwang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');\n    bgImgAuth.textContent = 'Yunming Wang';\n    const bgImgLink = document.createElement('a');\n    bgImgLink.setAttribute('href', 'https://unsplash.com/photos/YrZzP9VVN1k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');\n    bgImgLink.textContent = 'Unsplash';\n    footer.append('Background photo by ', bgImgAuth, ' on ', bgImgLink);\n    container.append(nav, main, footer);\n    content.append(container);\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/page-load.js?");

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