/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _js_06_homework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/06-homework */ \"./src/js/06-homework.js\");\n/* harmony import */ var _js_06_homework__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_06_homework__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_08_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/08-promise */ \"./src/js/08-promise.js\");\n/* harmony import */ var _js_08_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_08_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_horeses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/horeses */ \"./src/js/horeses.js\");\n/* harmony import */ var _js_horeses__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_horeses__WEBPACK_IMPORTED_MODULE_3__);\n\n// import './js/01-timeout';\n// import './js/02-setInteval';\n// import './js/03-notifications';\n// import './js/04-timer';\n// import './js/05-date-class';\n\n// import './js/07-another';\n// import './js/promiseIntro';\n\n\n\n//# sourceURL=webpack://asyncfuncs-promises/./src/index.js?");

/***/ }),

/***/ "./src/js/06-homework.js":
/*!*******************************!*\
  !*** ./src/js/06-homework.js ***!
  \*******************************/
/***/ (() => {

eval("// console.log('hello');\n\n// const colors = [\n//   '#FFFFFF',\n//   '#2196F3',\n//   '#4CAF50',\n//   '#FF9800',\n//   '#009688',\n//   '#795548',\n//   '#736383',\n//   '#222444',\n//   '#124915',\n//   '#465576',\n// ];\n\n// const refs = {\n//   body: document.querySelector('body'),\n//   startBtn: document.querySelector(`button[data-action='start']`),\n//   stopBtn: document.querySelector(`button[data-action='stop']`),\n//   output: document.querySelector('.output'),\n// };\n\n// const randomIntegerFromInterval = (min, max) => {\n//   return Math.floor(Math.random() * (max - min + 1) + min);\n// };\n\n// const colorSwitcher = {\n//   intervalId: null,\n//   isActive: false,\n\n//   start() {\n//     if (this.isActive) {\n//       return;\n//     }\n\n//     this.isActive = true;\n//     this.intervalId = setInterval(() => {\n//       const newColor = colors[randomIntegerFromInterval(0, colors.length)];\n//       console.log(newColor);\n//       refs.body.style.background = newColor;\n//     }, 1000);\n//   },\n\n//   stop() {\n//     this.isActive = false;\n//     clearInterval(this.intervalId);\n//   },\n// };\n\n// refs.startBtn.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));\n// refs.stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));\n\n/**\n * ---- Timer ----\n */\n\n// const refs = {\n//   secs: document.querySelector('span[data-value=\"secs\"]'),\n//   mins: document.querySelector('span[data-value=\"mins\"]'),\n//   hours: document.querySelector('span[data-value=\"hours\"]'),\n//   days: document.querySelector('span[data-value=\"days\"]'),\n// };\n\n// const timer = {\n//   start() {\n//     setInterval(() => {\n//       const currentTime = Date.now();\n//       const targetDate = new Date('Feb 24, 2022');\n//       const deltaTime = targetDate - currentTime;\n//       updateClockFace(deltaTime);\n//     }, 1000);\n//   },\n// };\n\n// function pad(value) {\n//   return String(value).padStart(2, '0');\n// }\n\n// function updateClockFace(time) {\n//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));\n//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));\n//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));\n//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));\n\n//   refs.secs.textContent = `${secs}`;\n//   refs.hours.textContent = `${hours}`;\n//   refs.mins.textContent = `${mins}`;\n//   refs.days.textContent = `${days}`;\n// }\n\n// timer.start();\n\nconst refs = {\n  daysRef: document.querySelector('p[data-value=\"days\"]'),\n  hoursRef: document.querySelector('p[data-value=\"hours\"]'),\n  minsRef: document.querySelector('p[data-value=\"mins\"]'),\n  secsRef: document.querySelector('p[data-value=\"secs\"]')\n};\nsetInterval(updateClockFace, 1000);\nfunction updateClockFace() {\n  const countDate = new Date('Feb 20, 2023 00:00:00').getTime();\n  const now = new Date().getTime();\n  const gap = countDate - now;\n  const second = 1000;\n  const minute = second * 60;\n  const hour = minute * 60;\n  const day = hour * 24;\n  const textDay = Math.floor(gap / day);\n  const textHour = Math.floor(gap % day / hour);\n  const textMinute = Math.floor(gap % hour / minute);\n  const textSecond = Math.floor(gap % minute / second);\n  refs.daysRef.textContent = textDay;\n  refs.minsRef.textContent = textMinute;\n  refs.hoursRef.textContent = textHour;\n  refs.secsRef.textContent = textSecond;\n}\nupdateClockFace();\n\n// const targetDate = new Date('Jul 17, 2021');\n// let newTime = {};\n// const timer = {\n//   start() {\n//     setInterval(() => {\n//       updateClockface();\n//       updateTime();\n//     }, 1000);\n//   },\n// };\n// timer.start();\n\n// function updateClockface() {\n//   const currentDate = Date.now();\n//   const time = targetDate - currentDate;\n//   newTime.days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));\n//   newTime.hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));\n//   newTime.mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));\n//   newTime.secs = pad(Math.floor((time % (1000 * 60)) / 1000));\n// }\n// function updateTime() {\n//   refs.daysRef.textContent = `${newTime.days}`;\n//   refs.hoursRef.textContent = `${newTime.hours}`;\n//   refs.minsRef.textContent = `${newTime.mins}`;\n//   refs.secsRef.textContent = `${newTime.secs}`;\n// }\n// function pad(value) {\n//   return String(value).padStart(2, '0');\n// }\n\n//# sourceURL=webpack://asyncfuncs-promises/./src/js/06-homework.js?");

/***/ }),

/***/ "./src/js/08-promise.js":
/*!******************************!*\
  !*** ./src/js/08-promise.js ***!
  \******************************/
/***/ (() => {

eval("// const fetchUser = userName => {\n//   return new Promise((resolve, reject) => {\n//     setTimeout(() => {\n//       const success = Math.random() > 0.3;\n\n//       if (success) {\n//         const user = { name: userName, age: 30, posts: 80 };\n//         resolve(user);\n//       }\n\n//       const error = 'Error occured!';\n\n//       reject(error);\n//     }, 1000);\n//   });\n// };\n\n// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);\n\n// function onFetchUserSuccess(user) {\n//   console.log(user);\n// }\n\n// function onFetchUserError(error) {\n//   console.log(`%c ${error}`, 'color:red; font-size: 20px');\n// }\n\nconst makePromise = delay => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      const output = `delay: ${delay}`;\n      resolve(console.log(output));\n    }, delay);\n  });\n};\n\n/**\n * Здесь мы просто регистрируем функции, это синхронные операции\n * Неважно в каком порядке мы их зарегистрируем\n */\nmakePromise(11000);\nmakePromise(5000);\nmakePromise(1000);\nmakePromise(9000);\nmakePromise(7000);\n\n/**\n * 1) Регистрация этих 5 функций ставится на стэк,\n *    в порядке 11000 после 5000, 1000, 9000, 7000\n * 2) После чего в своем порядке идут на Web Apis,\n * 3) 1000 мс выполняется быстрее всех, поэтому именно она\n *    первой идет на стэк вызовов и срабатывает, после срабатывает\n *    5000, 7000, 9000, 11000.\n *\n *\n */\n\n//# sourceURL=webpack://asyncfuncs-promises/./src/js/08-promise.js?");

/***/ }),

/***/ "./src/js/horeses.js":
/*!***************************!*\
  !*** ./src/js/horeses.js ***!
  \***************************/
/***/ (() => {

eval("const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];\nconst getRandomTime = (min, max) => {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n};\n\n// Эта функция сама по себе запускает 1 лошадь\nconst run = horse => {\n  return new Promise(resolve => {\n    const time = getRandomTime(2000, 3500);\n    setTimeout(() => {\n      resolve({\n        horse,\n        time\n      });\n    }, time);\n  });\n};\nconsole.log('%c Заезд начался!', 'color:yellow; font-size:20px');\nconst promises = horses.map(run);\n// console.log(promises);\n\n/**\n * - Promise.race - ждет пока самый быстрый добегает\n *   после него вызывается Promise.all\n */\nPromise.race(promises).then(({\n  horse,\n  time\n}) => {\n  console.log(`%c 🎉 Победил ${horse}, финишировал за ${time}ms`, 'color:coral; font-size:20px');\n});\n\n/**\n * Этот колбэк в then выполнится только тогда, когла\n * все промисы выполняться\n *\n * - Если хотябы 1 промис реджектнится, то эта функция не выполнится\n */\nPromise.all(promises).then(results => {\n  console.log('%c Заезд окончен 🏁', 'color: orange; font-size:20px');\n  console.table(results);\n}).catch(console.log);\n\n/**\n * catch(console.log) - словит значение ошибки и законсолит\n * тоже самое что и .catch(error => console.log(error))\n */\n\n//# sourceURL=webpack://asyncfuncs-promises/./src/js/horeses.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n/*\\n  Timer homework\\n*/\\n.title {\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\n  font-size: 50px;\\n  font-weight: bold;\\n  margin-bottom: 25px;\\n  color: #3f51b5;\\n}\\n\\n.timer-btn {\\n  display: inline-flex;\\n  margin-left: 4px;\\n  margin-right: 4px;\\n  text-transform: uppercase;\\n  border: 0;\\n  background-color: #3f51b5;\\n  color: white;\\n  padding: 10px 20px;\\n  cursor: pointer;\\n  font-size: 24px;\\n  border-radius: 3px;\\n}\\n\\n.timer {\\n  min-height: 100vh;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.clockface {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.label {\\n  font-weight: normal;\\n  font-size: 50px;\\n  color: darkblue;\\n}\\n\\n.timer p {\\n  font-weight: bold;\\n  margin-top: 0;\\n  margin-bottom: 40px;\\n  text-align: center;\\n  font-size: 43px;\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\n  color: #212121;\\n}\\n\\n.field + .field {\\n  margin-left: 25px;\\n}\\n\\n.btn {\\n  display: inline-flex;\\n  margin-right: 6px;\\n  border: 0;\\n  background-color: darkgrey;\\n  height: 60px;\\n  padding: 15px 20px;\\n  cursor: pointer;\\n  font-size: 24px;\\n  border-radius: 3px;\\n  color: white;\\n}\\n\\n.stop-btn {\\n  margin-right: 0;\\n  margin-left: 6px;\\n}\\n\\n.container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px 10px;\\n  width: 550px;\\n  height: 80px;\\n  border-radius: 5px;\\n  background-color: grey;\\n}\\n\\n.color-switcher {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 25px;\\n}\\n\\n.active {\\n  background-color: #2196f3;\\n}\\n\\n.notification.is-visible {\\n  transform: translateX(0);\\n  opacity: 1;\\n  visibility: visible;\\n}\\n\\n.notification {\\n  position: fixed;\\n  bottom: 20px;\\n  right: 20px;\\n  background-color: white;\\n  color: #2a2a2a;\\n  border: 1px solid #2a2a2a;\\n  border-radius: 3px;\\n  padding: 24px;\\n  user-select: none;\\n  cursor: pointer;\\n  transform: translateX(calc(100% + 20px));\\n  visibility: hidden;\\n  opacity: 0;\\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\\n}\\n\\n.notification.success {\\n  border: 1px solid #388e3c;\\n  background-color: #4caf50;\\n  color: white;\\n}\\n\\n.actions {\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://asyncfuncs-promises/./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://asyncfuncs-promises/./src/sass/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://asyncfuncs-promises/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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