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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Tangerine-Regular.ttf */ \"./src/fonts/Tangerine-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Tangerine-Bold.ttf */ \"./src/fonts/Tangerine-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n\\n    font-family: 'MyFont';\\n  \\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf'),\\n  \\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('ttf');\\n  \\n    font-weight: 600;  \\n    font-style: normal;\\n  \\n  }\\n\\n*,\\n*::after,\\n*::before{\\n    margin: 0;\\n    box-sizing: border-box;\\n}\\n:root{\\n    --bg-1 : #ffedd5;\\n    --bg-2: #fed7aa;\\n    --bg-header: #fb923c;\\n    --font-size:16px;\\n    --color: #d1d5db;\\n}\\n#content{\\n    background-color: var(--bg-1);\\n    width: 100vw;\\n    min-height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n    overflow-y: auto;\\n    overflow-x: hidden;\\n}\\n\\n.navBar{\\n    display: flex;\\n    background-color: var(--bg-header);\\n    justify-content:center;\\n    flex-direction: column;\\n    align-items: center;\\n    color: #fff;\\n    font-size: 1.3rem;\\n    cursor: pointer;\\n    border-bottom: 2px solid #fff;\\n    box-shadow: -1px 13px 25px 0px rgba(252,161,161,0.56);\\n    -webkit-box-shadow: -1px 13px 25px 0px rgba(252,161,161,0.56);\\n    -moz-box-shadow: -1px 13px 25px 0px rgba(252,161,161,0.56);\\n}\\n.title-name{\\n    font-family: 'Tangerine', serif;\\n    font-size: 3rem;\\n    text-align: center;\\n    margin: 30px;\\n    font-weight: bolder;\\n    text-shadow: 4px 4px 4px #aaa;\\n}\\n.menu-container{\\n    display: flex;\\n    font-size: 1.3rem;\\n}\\n.menu-container > .navigation {\\n    margin-right: 10px;\\n    margin-bottom: 10px;\\n    padding: 0px 10px 5px 10px;\\n    cursor: pointer; \\n    color: #fff;\\n    position: relative;\\n}\\n.menu-container > .navigation:last-of-type{\\n    margin-right: 0;\\n}\\n.navigation::after{\\n    content: \\\"\\\";\\n    position: absolute;\\n    background-color: #fff;\\n    height: 3px;;\\n    width: 0;\\n    left:  0;\\n    bottom: -3px;\\n    transition: 1s;    \\n}\\n\\n.navigation.active:hover{\\n    color: #fff;\\n}\\n.navigation.active:hover::after{\\n    width: 100%;\\n}\\n\\n.main{    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    padding-bottom: 2rem;\\n    margin: 10px;\\n\\n}\\n\\n.img-container{\\n    display: flex;\\n    align-items: center;\\n   justify-content: center;\\n   margin-top: 50px; \\n   margin-left: 10px;\\n   margin-right: 10px;\\n}\\n.img-container > .image{\\n    margin-right: 2px;\\n    background-color: #fb923c;\\n    width: 20%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 5px;\\n    transform: rotate(35deg);\\n    animation: 3s linear 1s infinite alternate slidein;\\n    box-sizing: border-box;    \\n}\\n.img-container > .image:last-of-type{\\n    margin-right: 0;\\n}\\n.img-container > .image > img{\\n    width: 100%;\\n    height: 100%;\\n    border: 5px solid #fff;\\n}\\n\\n.cards{\\n    border:  2px solid #fed7aa;\\n    margin-top: 5px;\\n    width: 50vw;\\n    padding: 30px;\\n    box-shadow: 4px 4px 4px 4px #fb923c\\n}\\n.card{\\n   \\n    display: flex;\\n    flex-direction: column;\\n    border-radius: 10px;\\n    padding: 1.2rem;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.card > .card-title{\\n    font-size: 1.5rem;\\n    margin-top: 1.5rem;\\n    margin-bottom: 2rem;\\n}\\n\\n.card-subtitle{\\n    font-family: 'Tangerine', sans-serif;\\n    font-size: 3rem;\\n    font-weight: 400;\\n    text-shadow: 4px 4px 4px #fb923c;\\n    text-align: center;\\n}\\n\\n.card-message{\\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;;\\n    font-size: 1.3rem;\\n    text-align: center;\\n    font-style: italic;\\n}\\n\\n.card > .card-text{\\n    font-size: 1.2rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 10px 0px 10px 0px;\\n}\\n.card > .card-text > img{\\n  width: 70%;\\n  height: 250px;\\n  border-radius: 50%;\\n}\\n\\n\\n.card > .card-footer{\\n    margin: 20px;\\n    border-top: 2px solid #fed7aa;\\n    width: 50%;\\n    font-size: 1.2rem;\\n    padding-top: 10px;\\n    text-align: center;\\n}\\n\\n.menu-content{   \\n    width: 60vw;\\n    margin-top: 20px;\\n    display: flex;    \\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: center; \\n    background-color: #000;  \\n    color: #000;\\n    box-shadow: #fb923c 0px 19px 38px, #fb923c 0px 15px 12px;\\n}\\n\\n.menu-title{\\n    color: white;\\n    padding: 20px 20px 5px 20px;\\n    font-family: 'Tangerine', sans-serif;\\n    font-size: 2rem;\\n    border-bottom: 2px solid #fff;\\n}\\n\\n\\n.menu-cards{\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n    grid-auto-rows: 280px;\\n    gap: 2rem;\\n    padding-bottom: 2rem;\\n    margin: 30px 10px 10px 10px;\\n    width: 55vw;\\n}\\n.menu-card{\\n    background: #fff;\\n    display: flex;\\n    flex-direction: column;\\n    padding: 1.2rem;\\n    justify-content: center;\\n    align-items: center;\\n    border: 3px solid #fb923c;\\n}\\n\\n.menu-cardTitle{\\n    text-align: center;\\n    font-size: 1.2rem;\\n}\\n.menu-cardTitle{\\n   line-height: 1.6;\\n}\\n.menu-cardTitle > img {\\n    width:150px;\\n    border-radius: 50%;\\n}\\n.menu-cardTitle > .soupe{\\n    font-size: 2rem;\\n    font-weight: bold;\\n}\\n\\n\\n\\n\\n\\n.menu-footer{\\n    color: #fff;\\n    padding: 5px 20px 20px 20px;\\n    font-family: 'Tangerine', sans-serif;\\n    font-size: 2rem;\\n    border-top: 2px solid #fff;\\n}\\n\\n\\n\\n.footer{\\n    background-color: var(--bg-header);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 10px;\\n    flex-direction: column;\\n    font-size: 1rem;\\n    color: #fff;\\n    border-top: 2px solid #fff;\\n    \\n}\\n.footer > div{\\n    padding-bottom: 5px;\\n}\\n.footer > div:last-of-type{\\n    padding-bottom: 0;\\n}\\n\\n.form{\\n    margin-top: 30px;\\n    margin-bottom: 30px;\\n    padding: 20px 10px;\\n    width: 30vw;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    border-radius: 10px;\\n    border:  1px solid grey;\\n}\\n.form > input{\\n    height: 2.5rem;\\n    margin-bottom: 20px;\\n    padding-left: 10px;\\n    border-top: none;\\n    border-left: none;\\n    border-right: none;\\n    border-bottom: 1px solid #fff;\\n    background: #000;\\n    color: #fff;\\n    font-size: 1.2rem;\\n}\\n.form > textarea{\\n    height: 10rem;\\n    background: #000;\\n    border-top: none;\\n    border-left: none;\\n    border-right: none;\\n    border-bottom: 1px solid #fff;\\n    margin-bottom: 20px;\\n    padding-left: 10px;\\n    font-size: 1.2rem;\\n    line-height: 1.5;\\n    color: #fff;\\n}\\n.form > .submit-button{\\n    font-size: 1.5rem;\\n    border-radius: 20px;\\n    border: none;\\n    padding: 5px 0px;\\n    background-color: #fed7aa;\\n    cursor: pointer;\\n    transition: 0.3 ease-in;\\n}\\n.form > .submit-button:hover{\\n    background-color: #fb923c;\\n    color: #fff;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/createElement.js\");\n/* harmony import */ var _createSingleElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSingleElement.js */ \"./src/createSingleElement.js\");\n\n\n\nfunction createContact(){\n    const content = document.querySelector('.main');\n    content.textContent = '';\n\n    const contact = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'menu-content');\n    const touch = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'We the best', 'menu-footer');\n\n    const title = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Contactez-nous', 'menu-title');\n    contact.appendChild(title);\n    contact.appendChild(contactElement())\n    contact.appendChild(touch)\n\n\n    \n\n    content.appendChild(contact);\n\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\nfunction contactElement(){\n    const form = (0,_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', null, 'form');\n\n    form.setAttribute(\"method\", \"post\");\n    form.setAttribute(\"action\", \" \");\n\n    const name = document.createElement('input');\n    name.setAttribute('type', 'text');\n    name. setAttribute('name', 'fullname');\n    name.setAttribute('placeholder', 'Your fullname');\n\n    const email = document.createElement('input');\n    email.setAttribute('type', 'email');\n    email.setAttribute('name', 'email');\n    email.setAttribute('placeholder', 'Your email');\n\n    const phone = document.createElement('input')\n    phone.setAttribute('type', 'phone');\n    phone.setAttribute('name', 'phone')\n    phone.setAttribute('placeholder', 'Your phone number') \n\n    const message = document.createElement('textarea');\n    message.setAttribute('type', 'text');\n    message.setAttribute('name', 'message');\n    message.setAttribute('placeholder', 'Your message please')\n\n    const button = document.createElement('button');\n    button.setAttribute('type', 'submit');\n    button.classList.add(\"submit-button\")\n    button.textContent = \"Submit\";\n\n\n    form.appendChild(name);\n    form.appendChild(email)\n    form.appendChild(phone);\n    form.appendChild(message);\n    form.appendChild(button)\n\n    return form;\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createElement(el, content, className){\n    const element = document.createElement(el);\n    element.textContent = content;\n    element.classList.add(className);\n\n    return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://restaurant/./src/createElement.js?");

/***/ }),

/***/ "./src/createSingleElement.js":
/*!************************************!*\
  !*** ./src/createSingleElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createSingleElement(el, content){\n    const element = document.createElement('div');\n    element.textContent = content;\n    return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSingleElement);\n\n//# sourceURL=webpack://restaurant/./src/createSingleElement.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _assets_Soup_Joumou1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/Soup-Joumou1.jpg */ \"./src/assets/Soup-Joumou1.jpg\");\n/* harmony import */ var _assets_maymoulen_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/maymoulen.jpeg */ \"./src/assets/maymoulen.jpeg\");\n/* harmony import */ var _assets_griyo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/griyo.jpg */ \"./src/assets/griyo.jpg\");\n/* harmony import */ var _assets_poisson_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/poisson.jpg */ \"./src/assets/poisson.jpg\");\n/* harmony import */ var _createSingleElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSingleElement */ \"./src/createSingleElement.js\");\n\n\n\n\n\n\n\nfunction createHome(){\n    //Create the content element\n    const content = document.querySelector('.main');\n    content.textContent = '';\n    \n    const imgContainer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'img-container');\n    const cards = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'cards');\n    const card = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'card');\n    const cardTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'card-title');\n    const cardText = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'card-text');\n    const cardFooter = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'card-footer');\n\n    cardFooter.textContent = \"Book or Call us now\";\n    \n    const cardSubtitle1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'card-subtitle');\n    cardSubtitle1.textContent = \"Gou-Bouch Lakay\"; \n    cardTitle.appendChild(cardSubtitle1);\n\n    const cardSubtitle2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'card-message');\n    cardSubtitle2.textContent = \"is changing your taste\";\n    cardTitle.appendChild(cardSubtitle2);\n\n    //Create content child\n    const divimg1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',null, 'image');\n    const divimg2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',null, 'image');\n    const divimg3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',null, 'image');\n\n    \n    const img = new Image();\n    img.src = _assets_Soup_Joumou1_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    divimg1.appendChild(img);\n\n    const img1 = new Image();\n    img1.src = _assets_maymoulen_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n    divimg2.appendChild(img1);\n\n    const img2 = new Image();\n    img2.src = _assets_griyo_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    divimg3.appendChild(img2);\n\n    const ps = new Image();\n    ps.src = _assets_poisson_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    cardText.appendChild(ps);\n\n\n    content.appendChild(imgContainer);\n    content.appendChild(cards);\n\n    card.appendChild(cardTitle);\n    card.appendChild(cardText);\n    card.appendChild(cardFooter);\n\n    cards.appendChild(card);\n\n    //Append content child\n    imgContainer.appendChild(divimg1);\n    imgContainer.appendChild(divimg2);\n    imgContainer.appendChild(divimg3);\n\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _createSingleElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSingleElement */ \"./src/createSingleElement.js\");\n\n\n\n\n\n\n\n\n\nfunction component(){\n    const element = document.querySelector('#content');\n\n    element.appendChild(createHeader());\n    element.appendChild(createMain());\n    element.appendChild(createFooter());\n\n    activeNavItem(document.querySelector('.navigation'));\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    return element;\n}\n\ndocument.body.appendChild(component());\n\n\nfunction createHeader(){\n    //Create the navBar element\n    const header = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'navBar');\n    const title = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'title-name');\n    title.textContent = \"Gou-Bouch Lakay\";\n    //navbar menu\n    header.appendChild(title);\n    header.appendChild(Navigation());  \n\n    return header;\n}\n\n//Navigation function\nfunction Navigation(){\n    const menuContainer = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-container')\n\n    const home = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'navigation');\n    const ahome = (0,_createSingleElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('div', 'Home');\n    home.appendChild(ahome);\n    home.addEventListener('click', (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        activeNavItem(home);\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n\n    const menu = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'navigation');\n    const amenu = (0,_createSingleElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('div', 'Menu');\n    menu.appendChild(amenu);\n    menu.addEventListener('click', (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        activeNavItem(menu);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    const contact = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'navigation');   \n    const acontact = (0,_createSingleElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('div', 'Contact');\n    contact.appendChild(acontact);\n    contact.addEventListener('click', (e) => {\n        if(e.target.classList.contains(\"active\")) return;\n        activeNavItem(contact);\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n    \n    \n    menuContainer.appendChild(home);\n    menuContainer.appendChild(menu);\n    menuContainer.appendChild(contact);\n\n    return menuContainer;\n}\n\nfunction activeNavItem(x) {\n    const divs = document.querySelectorAll(\".navigation\");\n  \n    divs.forEach((div) => {\n      if (div !== this) {\n        div.classList.remove(\"active\");\n      }\n    });\n  \n    x.classList.add(\"active\");\n  }\n\n\n  function createMain() {\n    const content = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'main');\n    return content;\n}\n\n\n  //footer function\nfunction createFooter(){\n    //Create the footer element\n    const footer = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'footer');\n    const footertext = (0,_createSingleElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('div', 'Powered by meme123');\n    const footertext1 = (0,_createSingleElement__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('div', 'KwenTIC 2022');\n\n        //apppend the footer element\n    footer.appendChild(footertext)\n    footer.appendChild(footertext1)\n    \n    return footer;\n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_Soup_Joumou1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/Soup-Joumou1.jpg */ \"./src/assets/Soup-Joumou1.jpg\");\n/* harmony import */ var _assets_maymoulen_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/maymoulen.jpeg */ \"./src/assets/maymoulen.jpeg\");\n/* harmony import */ var _assets_griyo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/griyo.jpg */ \"./src/assets/griyo.jpg\");\n/* harmony import */ var _assets_poisson_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/poisson.jpg */ \"./src/assets/poisson.jpg\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _createSingleElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSingleElement */ \"./src/createSingleElement.js\");\n\n\n\n\n\n\n\n\n\nfunction createMenu(){\n    const content = document.querySelector('.main');\n    content.textContent = ''; \n\n    const menu = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-content');\n\n    const title = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', 'Menu', 'menu-title');\n    menu.appendChild(title);\n\n    const menu_cards = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cards');\n    const contact = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', 'Book or Call us  now', 'menu-footer');\n\n    menu_cards.appendChild(createCard())\n    menu_cards.appendChild(createCard1())\n    menu_cards.appendChild(createCard2())\n    menu_cards.appendChild(createCard3())\n\n    menu.appendChild(menu_cards);\n    menu.appendChild(menu_cards);\n    menu.appendChild(contact);\n\n    content.appendChild(menu)\n    return content;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\nfunction createCard(){\n    const card = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-card');\n    const cardTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardTitle');\n    const cardText = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardText');\n    const h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Soupe Joumou\",\"soupe\")\n    const h2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null)\n    const h3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null )\n\n    const img = new Image();\n    img.src = _assets_Soup_Joumou1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    cardTitle.appendChild(img);\n\n    cardTitle.appendChild(h1);\n    cardTitle.appendChild(h2);\n    cardTitle.appendChild(h3);\n   \n    card.appendChild(cardTitle)\n   \n    return card\n}\n\nfunction createCard1(){\n    const card = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-card');\n    const cardTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardTitle');\n    const cardText = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardText');\n    const h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Mais moulu\",\"soupe\")\n    const h2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null)\n    const h3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null )\n\n    const img = new Image();\n    img.src = _assets_maymoulen_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    cardTitle.appendChild(img);\n\n    cardTitle.appendChild(h1);\n    cardTitle.appendChild(h2);\n    cardTitle.appendChild(h3);\n   \n    card.appendChild(cardTitle)\n   \n    return card\n}\n\nfunction createCard2(){\n    const card = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-card');\n    const cardTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardTitle');\n    const cardText = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardText');\n    const h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Griyo\",\"soupe\")\n    const h2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null)\n    const h3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null )\n\n    const img = new Image();\n    img.src = _assets_griyo_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    cardTitle.appendChild(img);\n\n    cardTitle.appendChild(h1);\n    cardTitle.appendChild(h2);\n    cardTitle.appendChild(h3);\n   \n    card.appendChild(cardTitle)\n   \n    return card\n}\n\nfunction createCard3(){\n    const card = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-card');\n    const cardTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardTitle');\n    const cardText = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', null, 'menu-cardText');\n    const h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Poisson\",\"soupe\")\n    const h2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null)\n    const h3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('div', \"Lorem ipsum vele as sacadsa\", null )\n\n    const img = new Image();\n    img.src = _assets_poisson_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    cardTitle.appendChild(img);\n\n    cardTitle.appendChild(h1);\n    cardTitle.appendChild(h2);\n    cardTitle.appendChild(h3);\n   \n    card.appendChild(cardTitle)\n   \n    return card\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/assets/Soup-Joumou1.jpg":
/*!*************************************!*\
  !*** ./src/assets/Soup-Joumou1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0215d29f6418542e237f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/Soup-Joumou1.jpg?");

/***/ }),

/***/ "./src/assets/griyo.jpg":
/*!******************************!*\
  !*** ./src/assets/griyo.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92809c7481bdaff8cf97.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/griyo.jpg?");

/***/ }),

/***/ "./src/assets/maymoulen.jpeg":
/*!***********************************!*\
  !*** ./src/assets/maymoulen.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ad432604e38a5ac6eb95.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/maymoulen.jpeg?");

/***/ }),

/***/ "./src/assets/poisson.jpg":
/*!********************************!*\
  !*** ./src/assets/poisson.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1acfda7fc9e999023af.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/assets/poisson.jpg?");

/***/ }),

/***/ "./src/fonts/Tangerine-Bold.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Tangerine-Bold.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"290f181679aa2ef327e4.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/fonts/Tangerine-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Tangerine-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Tangerine-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b04eb83dd71e2762243.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/fonts/Tangerine-Regular.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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