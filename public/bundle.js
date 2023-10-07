/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FREE_CELL: () => (/* binding */ FREE_CELL),\n/* harmony export */   RABBIT: () => (/* binding */ RABBIT),\n/* harmony export */   WOLF: () => (/* binding */ WOLF)\n/* harmony export */ });\nconst FREE_CELL = 0;\nconst RABBIT = \"rabbit\";\nconst WOLF = \"wolf\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU0sU0FBUyxHQUFXLENBQUM7QUFDM0IsTUFBTSxNQUFNLEdBQVcsUUFBUTtBQUMvQixNQUFNLElBQUksR0FBVyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0Ly4vc3JjL2NvbnN0YW50cy50cz84NWVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBGUkVFX0NFTEw6IG51bWJlciA9IDBcclxuZXhwb3J0IGNvbnN0IFJBQkJJVDogc3RyaW5nID0gXCJyYWJiaXRcIlxyXG5leHBvcnQgY29uc3QgV09MRjogc3RyaW5nID0gXCJ3b2xmXCJcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n\nconst characterParams = {\n    rabbit: { name: \"rabbit\", imgUrl: \"http\", count: 1 },\n    wolf: { name: \"wolf\", imgUrl: \"http\", count: 3 },\n    obstacle: { name: \"obstacle\", imgUrl: \"http\", count: 2 },\n    home: { name: \"home\", imgUrl: \"http\", count: 1 },\n};\nconst createMatrix = (gameBoardSize) => {\n    const matrix = [];\n    for (let i = 0; i < gameBoardSize; i++) {\n        const row = [];\n        for (let j = 0; j < gameBoardSize; j++) {\n            row.push(_constants__WEBPACK_IMPORTED_MODULE_0__.FREE_CELL);\n        }\n        matrix.push(row);\n    }\n    return matrix;\n};\nconst getRandomFreeCell = (matrix) => {\n    const x = Math.floor(Math.random() * matrix.length);\n    const y = Math.floor(Math.random() * matrix.length);\n    const coords = {\n        x: x,\n        y: y,\n    };\n    return matrix[x][y] === _constants__WEBPACK_IMPORTED_MODULE_0__.FREE_CELL ? coords : getRandomFreeCell(matrix);\n};\nconst wolfCount = (matrix) => {\n    characterParams.wolf.count = Math.floor((65 * matrix.length) / 100);\n};\nconst banCount = (matrix) => {\n    characterParams.obstacle.count = Math.floor((45 * matrix.length) / 100);\n};\nconst setCharacterInFreePosition = (matrix, character) => {\n    const coords = getRandomFreeCell(matrix);\n    matrix[coords.x][coords.y] = character;\n};\nconst setCountCharacter = (matrix, count, character) => {\n    for (let i = 0; i < count; i++) {\n        setCharacterInFreePosition(matrix, character);\n    }\n};\nconst startGame = () => {\n    const matrix = createMatrix(5);\n    wolfCount(matrix);\n    banCount(matrix);\n    Object.keys(characterParams).forEach((character) => {\n        const person = characterParams[character];\n        setCountCharacter(matrix, person.count, person.name);\n    });\n    console.log(matrix);\n};\nstartGame();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sRUFBRSxTQUFTLENBQUM7S0FDOUM7QUFFSCxDQUFDO0FBRUQsTUFBTSxTQUFTLEdBQUcsR0FBUSxFQUFFO0lBQzFCLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDOUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNqQixRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDakQsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3RELENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFdEIsQ0FBQztBQUdELFNBQVMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXJhY3RlclBhcmFtcywgQ29vcmRzIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiXHJcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL3R5cGVzXCJcclxuaW1wb3J0IHsgRlJFRV9DRUxMLCBSQUJCSVQsIFdPTEYgfSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgY2hhcmFjdGVyUGFyYW1zOiBDaGFyYWN0ZXJQYXJhbXMgPSB7XHJcbiAgcmFiYml0OiB7IG5hbWU6IFwicmFiYml0XCIsIGltZ1VybDogXCJodHRwXCIsIGNvdW50OiAxIH0sXHJcbiAgd29sZjogeyBuYW1lOiBcIndvbGZcIiwgaW1nVXJsOiBcImh0dHBcIiwgY291bnQ6IDMgfSxcclxuICBvYnN0YWNsZTogeyBuYW1lOiBcIm9ic3RhY2xlXCIsIGltZ1VybDogXCJodHRwXCIsIGNvdW50OiAyIH0sXHJcbiAgaG9tZTogeyBuYW1lOiBcImhvbWVcIiwgaW1nVXJsOiBcImh0dHBcIiwgY291bnQ6IDEgfSxcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTWF0cml4ID0gKGdhbWVCb2FyZFNpemU6IG51bWJlcik6IE1hdHJpeCA9PiB7XHJcbiAgY29uc3QgbWF0cml4ID0gW11cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRTaXplOyBpKyspIHsgXHJcbiAgICBjb25zdCByb3cgPSBbXVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lQm9hcmRTaXplOyBqKyspIHtcclxuICAgICAgcm93LnB1c2goRlJFRV9DRUxMKVxyXG4gICAgfVxyXG4gICAgbWF0cml4LnB1c2gocm93KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdHJpeFxyXG59XHJcblxyXG5jb25zdCBnZXRSYW5kb21GcmVlQ2VsbCA9IChtYXRyaXg6IE1hdHJpeCk6IENvb3JkcyA9PiB7XHJcbiAgY29uc3QgeDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF0cml4Lmxlbmd0aClcclxuICBjb25zdCB5OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXRyaXgubGVuZ3RoKVxyXG5cclxuICBjb25zdCBjb29yZHM6IENvb3JkcyA9IHtcclxuICAgIHg6IHgsXHJcbiAgICB5OiB5LFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdHJpeFt4XVt5XSA9PT0gRlJFRV9DRUxMID8gY29vcmRzIDogZ2V0UmFuZG9tRnJlZUNlbGwobWF0cml4KVxyXG59XHJcblxyXG5jb25zdCB3b2xmQ291bnQgPSAobWF0cml4OiBNYXRyaXgpOiB2b2lkID0+IHtcclxuICBjaGFyYWN0ZXJQYXJhbXMud29sZi5jb3VudCA9IE1hdGguZmxvb3IoKDY1ICogbWF0cml4Lmxlbmd0aCkgLyAxMDApXHJcbn1cclxuXHJcbmNvbnN0IGJhbkNvdW50ID0gKG1hdHJpeDogTWF0cml4KTogdm9pZCA9PiB7XHJcbiAgY2hhcmFjdGVyUGFyYW1zLm9ic3RhY2xlLmNvdW50ID0gTWF0aC5mbG9vcigoNDUgKiBtYXRyaXgubGVuZ3RoKSAvIDEwMClcclxufVxyXG5cclxuY29uc3Qgc2V0Q2hhcmFjdGVySW5GcmVlUG9zaXRpb24gPSAoXHJcbiAgbWF0cml4OiBNYXRyaXgsXHJcbiAgY2hhcmFjdGVyOiBzdHJpbmdcclxuKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgY29vcmRzID0gZ2V0UmFuZG9tRnJlZUNlbGwobWF0cml4KVxyXG4gIG1hdHJpeFtjb29yZHMueF1bY29vcmRzLnldID0gY2hhcmFjdGVyXHJcbn1cclxuXHJcbmNvbnN0IHNldENvdW50Q2hhcmFjdGVyID0gKFxyXG4gIG1hdHJpeDogTWF0cml4LFxyXG4gIGNvdW50OiBudW1iZXIsXHJcbiAgY2hhcmFjdGVyOiBzdHJpbmdcclxuKTogdm9pZCA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICBzZXRDaGFyYWN0ZXJJbkZyZWVQb3NpdGlvbihtYXRyaXgsIGNoYXJhY3RlcilcclxuICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBzdGFydEdhbWUgPSAoKTp2b2lkID0+IHtcclxuICBjb25zdCBtYXRyaXggPSBjcmVhdGVNYXRyaXgoNSlcclxuICB3b2xmQ291bnQobWF0cml4KVxyXG4gIGJhbkNvdW50KG1hdHJpeClcclxuICBPYmplY3Qua2V5cyhjaGFyYWN0ZXJQYXJhbXMpLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xyXG4gICAgY29uc3QgcGVyc29uID0gY2hhcmFjdGVyUGFyYW1zW2NoYXJhY3Rlcl1cclxuICAgIHNldENvdW50Q2hhcmFjdGVyKG1hdHJpeCwgcGVyc29uLmNvdW50LCBwZXJzb24ubmFtZSlcclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKG1hdHJpeCk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5zdGFydEdhbWUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;