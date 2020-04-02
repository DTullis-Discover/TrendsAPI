/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./gifs/static/js/pages/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gifs/static/js/pages/home.js":
/*!**************************************!*\
  !*** ./gifs/static/js/pages/home.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/gifs/static/js/pages/home.js: Unexpected token (7:4)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m  \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mRepresent\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m  )\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:742:17)\\n    at Parser.raiseWithData (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:735:17)\\n    at Parser.raise (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:729:17)\\n    at Parser.unexpected (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:8757:16)\\n    at Parser.parseExprAtom (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:10052:20)\\n    at Parser.parseExprSubscripts (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9602:23)\\n    at Parser.parseMaybeUnary (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9582:21)\\n    at Parser.parseExprOps (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9452:23)\\n    at Parser.parseMaybeConditional (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9425:23)\\n    at Parser.parseMaybeAssign (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9380:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:10193:28)\\n    at Parser.parseExprAtom (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9947:21)\\n    at Parser.parseExprSubscripts (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9602:23)\\n    at Parser.parseMaybeUnary (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9582:21)\\n    at Parser.parseExprOps (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9452:23)\\n    at Parser.parseMaybeConditional (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9425:23)\\n    at Parser.parseMaybeAssign (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9380:21)\\n    at Parser.parseExpression (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:9332:23)\\n    at Parser.parseReturnStatement (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11448:28)\\n    at Parser.parseStatementContent (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11129:21)\\n    at Parser.parseStatement (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11081:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11656:25)\\n    at Parser.parseBlockBody (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11642:10)\\n    at Parser.parseBlock (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11626:10)\\n    at Parser.parseFunctionBody (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:10634:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:10617:10)\\n    at /Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11796:12\\n    at Parser.withTopicForbiddingContext (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:10956:14)\\n    at Parser.parseFunction (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11795:10)\\n    at Parser.parseFunctionStatement (/Users/samuel/Dropbox/2020/Winter/Work/Discover/gifs/node_modules/@babel/parser/lib/index.js:11427:17)\");\n\n//# sourceURL=webpack:///./gifs/static/js/pages/home.js?");

/***/ })

/******/ });