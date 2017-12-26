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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sweetalert2_1 = __webpack_require__(1);
/**
 * An object containing functions
 * that are to be used in the client's browser.
 */
let publicFunctions = {
    manageProperties: () => {
        sweetalert2_1.default("You have no properties to manage!");
    },
    showTradeWindow: () => {
        sweetalert2_1.default("Cannot trade", "Trading is unavailable at this point.", "error");
    },
    confirmBankruptcy: () => {
        sweetalert2_1.default({
            title: "💸",
            text: "Are you sure you want to file for bankruptcy?",
            type: "warning",
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonText: "No",
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(result => {
            if (result.value) {
                sweetalert2_1.default("💸", "You have filed bankruptcy.");
            }
        });
    },
    showPropertyInfo: (name, color, cost, improvement, ...fees) => {
        let selectedPropertyElement = document.getElementById("selected-property");
        while (selectedPropertyElement.hasChildNodes()) {
            selectedPropertyElement.removeChild(selectedPropertyElement.lastChild);
        }
        let propertyTitleElement = document.createElement("div");
        propertyTitleElement.id = "prop-name";
        propertyTitleElement.textContent = name;
        let improvementText = ["Fee", "👍", "👍👍", "👍👍👍", "👍👍👍👍", "👌"];
        let transportText = ["Fee", "With 2 transports", "With 3 transports", "With 4 transports"];
        let priceTableTextElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => document.getElementById(value + "-text"));
        let priceTableElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => document.getElementById(value));
        if (color) {
            propertyTitleElement.className = color;
            priceTableElements.forEach((element, index) => {
                priceTableTextElements[index].innerHTML = improvementText[index];
                element.innerHTML = fees[index].toString();
            });
            document.getElementById("cost-improve-text").innerHTML = "Cost per 👍/👌";
            document.getElementById("cost-improve").innerHTML = improvement.toString();
        }
        else {
            propertyTitleElement.className = undefined;
        }
        document.getElementById("disabled-value").innerText = Math.floor(cost * 0.5).toString();
        document.getElementById("cost-reenable").innerText = Math.floor(cost * 0.55).toString();
    }
};
Object.assign(window, publicFunctions);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v7.1.2
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

var styles = "html.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow-y: hidden; }\n\nbody.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-icon {\n    margin: 0 0 15px; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-buttonswrapper {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n    height: 32px;\n    font-size: 14px;\n    margin: 5px auto; }\n\nbody.swal2-toast-shown > .swal2-container {\n  position: fixed;\n  background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-shown {\n    background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-top {\n    top: 0;\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-top-right {\n    top: 0;\n    left: auto;\n    bottom: auto;\n    right: 0; }\n  body.swal2-toast-shown > .swal2-container.swal2-top-left {\n    top: 0;\n    left: 0;\n    bottom: auto;\n    right: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-center-left {\n    top: 50%;\n    left: 0;\n    bottom: auto;\n    right: auto;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center {\n    top: 50%;\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center-right {\n    top: 50%;\n    left: auto;\n    bottom: auto;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n    top: auto;\n    left: 0;\n    bottom: 0;\n    right: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n    top: auto;\n    left: 50%;\n    bottom: 0;\n    right: auto;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n    top: auto;\n    left: auto;\n    bottom: 0;\n    right: 0; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\nbody.swal2-no-backdrop > .swal2-shown {\n  top: auto;\n  bottom: auto;\n  left: auto;\n  right: auto;\n  background-color: transparent; }\n  body.swal2-no-backdrop > .swal2-shown > .swal2-modal {\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-top {\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-top-left {\n    top: 0;\n    left: 0; }\n  body.swal2-no-backdrop > .swal2-shown.swal2-top-right {\n    top: 0;\n    right: 0; }\n  body.swal2-no-backdrop > .swal2-shown.swal2-center {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-center-left {\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-center-right {\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop > .swal2-shown.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n  body.swal2-no-backdrop > .swal2-shown.swal2-bottom-right {\n    bottom: 0;\n    right: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  padding: 10px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-popup {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  max-width: 100%; }\n  .swal2-popup.swal2-toast {\n    width: 300px;\n    padding: 0 15px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    overflow-y: hidden;\n    -webkit-box-shadow: 0 0 10px #d9d9d9;\n            box-shadow: 0 0 10px #d9d9d9; }\n    .swal2-popup.swal2-toast .swal2-title {\n      max-width: 300px;\n      font-size: 16px;\n      text-align: left; }\n    .swal2-popup.swal2-toast .swal2-content {\n      font-size: 14px;\n      text-align: left; }\n    .swal2-popup.swal2-toast .swal2-icon {\n      width: 32px;\n      min-width: 32px;\n      height: 32px;\n      margin: 0 15px 0 0; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n        width: 32px;\n        height: 32px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-info, .swal2-popup.swal2-toast .swal2-icon.swal2-warning, .swal2-popup.swal2-toast .swal2-icon.swal2-question {\n        font-size: 26px;\n        line-height: 32px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n        top: 14px;\n        width: 22px; }\n        .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n          left: 5px; }\n        .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n          right: 5px; }\n    .swal2-popup.swal2-toast .swal2-buttonswrapper {\n      margin: 0 0 0 5px; }\n    .swal2-popup.swal2-toast .swal2-styled {\n      margin: 0 0 0 5px;\n      padding: 5px 10px; }\n      .swal2-popup.swal2-toast .swal2-styled:focus {\n        -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4);\n                box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4); }\n    .swal2-popup.swal2-toast .swal2-validationerror {\n      width: 100%;\n      margin: 5px -20px; }\n    .swal2-popup.swal2-toast .swal2-success {\n      border-color: #a5dc86; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n        border-radius: 50%;\n        position: absolute;\n        width: 32px;\n        height: 64px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n          border-radius: 64px 0 0 64px;\n          top: -4px;\n          left: -15px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n          -webkit-transform-origin: 32px 32px;\n                  transform-origin: 32px 32px; }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n          border-radius: 0 64px 64px 0;\n          top: -5px;\n          left: 14px;\n          -webkit-transform-origin: 0 32px;\n                  transform-origin: 0 32px; }\n      .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n        width: 32px;\n        height: 32px; }\n      .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n        width: 7px;\n        height: 90px;\n        left: 28px;\n        top: 8px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n        height: 5px; }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n          width: 12px;\n          left: 3px;\n          top: 18px; }\n        .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n          width: 22px;\n          right: 3px;\n          top: 15px; }\n    .swal2-popup.swal2-toast .swal2-animate-success-line-tip {\n      -webkit-animation: animate-toast-success-tip .75s;\n              animation: animate-toast-success-tip .75s; }\n    .swal2-popup.swal2-toast .swal2-animate-success-line-long {\n      -webkit-animation: animate-toast-success-long .75s;\n              animation: animate-toast-success-long .75s; }\n  .swal2-popup:focus {\n    outline: none; }\n  .swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-popup .swal2-title {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-buttonswrapper {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 15px; }\n    .swal2-popup .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-popup .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: 7.5px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .swal2-popup .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-popup .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      vertical-align: -1px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      -webkit-box-shadow: 1px 1px 1px #fff;\n              box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-popup .swal2-styled {\n    border: 0;\n    border-radius: 3px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 15px 5px 0;\n    padding: 10px 32px; }\n    .swal2-popup .swal2-styled:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n  .swal2-popup .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-popup .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 38px;\n    height: 40px;\n    font-size: 36px;\n    line-height: 40px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    -webkit-transition: color .1s ease;\n    transition: color .1s ease; }\n    .swal2-popup .swal2-close:hover {\n      color: #d55; }\n  .swal2-popup > .swal2-input,\n  .swal2-popup > .swal2-file,\n  .swal2-popup > .swal2-textarea,\n  .swal2-popup > .swal2-select,\n  .swal2-popup > .swal2-radio,\n  .swal2-popup > .swal2-checkbox {\n    display: none; }\n  .swal2-popup .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea,\n  .swal2-popup .swal2-select,\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 18px;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    -webkit-transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s, -webkit-box-shadow .3s; }\n    .swal2-popup .swal2-input.swal2-inputerror,\n    .swal2-popup .swal2-file.swal2-inputerror,\n    .swal2-popup .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      -webkit-box-shadow: 0 0 2px #f27474 !important;\n              box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-popup .swal2-input:focus,\n    .swal2-popup .swal2-file:focus,\n    .swal2-popup .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      -webkit-box-shadow: 0 0 3px #c4e6f5;\n              box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-popup .swal2-input::-webkit-input-placeholder,\n    .swal2-popup .swal2-file::-webkit-input-placeholder,\n    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input:-ms-input-placeholder,\n    .swal2-popup .swal2-file:-ms-input-placeholder,\n    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::-ms-input-placeholder,\n    .swal2-popup .swal2-file::-ms-input-placeholder,\n    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::placeholder,\n    .swal2-popup .swal2-file::placeholder,\n    .swal2-popup .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-popup .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-popup .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-popup .swal2-range input,\n  .swal2-popup .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-popup .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-popup .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-popup .swal2-file {\n    font-size: 20px; }\n  .swal2-popup .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-popup .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-popup .swal2-radio {\n    border: 0; }\n    .swal2-popup .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-popup .swal2-radio input,\n    .swal2-popup .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-popup .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-popup .swal2-checkbox {\n    color: #545454; }\n    .swal2-popup .swal2-checkbox input,\n    .swal2-popup .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-popup .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-popup .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n                transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 60px;\n                transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@-webkit-keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@-webkit-keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  -webkit-animation: showSweetAlert .3s;\n          animation: showSweetAlert .3s; }\n  .swal2-show.swal2-toast {\n    -webkit-animation: showSweetToast .5s;\n            animation: showSweetToast .5s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: hideSweetAlert .15s forwards;\n          animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-toast {\n    -webkit-animation: hideSweetToast .2s forwards;\n            animation: hideSweetToast .2s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n[dir='rtl'] .swal2-close {\n  left: 8px;\n  right: auto; }\n\n@-webkit-keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes animate-toast-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  70% {\n    width: 24px;\n    left: -4px;\n    top: 17px; }\n  84% {\n    width: 8px;\n    left: 10px;\n    top: 20px; }\n  100% {\n    width: 12px;\n    left: 3px;\n    top: 18px; } }\n\n@keyframes animate-toast-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  70% {\n    width: 24px;\n    left: -4px;\n    top: 17px; }\n  84% {\n    width: 8px;\n    left: 10px;\n    top: 20px; }\n  100% {\n    width: 12px;\n    left: 3px;\n    top: 18px; } }\n\n@-webkit-keyframes animate-toast-success-long {\n  0% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  65% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  84% {\n    width: 26px;\n    right: 0;\n    top: 15px; }\n  100% {\n    width: 22px;\n    right: 3px;\n    top: 15px; } }\n\n@keyframes animate-toast-success-long {\n  0% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  65% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  84% {\n    width: 26px;\n    right: 0;\n    top: 15px; }\n  100% {\n    width: 22px;\n    right: 3px;\n    top: 15px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  -webkit-animation: animate-success-tip .75s;\n          animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  -webkit-animation: animate-success-long .75s;\n          animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  -webkit-animation: animate-error-icon .5s;\n          animation: animate-error-icon .5s; }\n\n@-webkit-keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  -webkit-animation: animate-x-mark .5s;\n          animation: animate-x-mark .5s; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n";

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onBeforeOpen: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};

var deprecatedParams = ['useRejections', 'expectRejections'];

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'contentwrapper', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-left', 'top-right', 'center', 'center-left', 'center-right', 'bottom', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

/**
 * Filter the unique values into a new array
 * @param arr
 */
var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var popupParams = _extends({}, defaultParams);
var queue = [];

var previousWindowKeyDown = void 0;
var windowOnkeydownOverridden = void 0;

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
}

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!sweetAlert$1.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
    if (sweetAlert$1.isDeprecatedParameter(param)) {
      warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
    }
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
var setParameters = function setParameters(params) {
  // If a custom element is set, determine if it is valid
  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup = void 0;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  }

  // Set popup width
  var popupWidth = params.width === defaultParams.width && params.toast ? 'auto' : params.width;
  popup.style.width = typeof popupWidth === 'number' ? popupWidth + 'px' : popupWidth;

  var popupPadding = params.padding === defaultParams.padding && params.toast ? 'inherit' : params.padding;
  popup.style.padding = typeof popupPadding === 'number' ? popupPadding + 'px' : popupPadding;
  popup.style.background = params.background;
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Default Class
  popup.className = swalClasses.popup;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom Class
  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert$1.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
  }
};

/**
 * Animations
 *
 * @param animation
 * @param onBeforeOpen
 * @param onComplete
 */
var openPopup = function openPopup(animation, onBeforeOpen, onComplete) {
  var container = getContainer();
  var popup = getPopup();

  if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
    onBeforeOpen(popup);
  }

  if (animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }
  show(popup);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);
  if (isModal()) {
    fixScrollbar();
    iOSfix();
  }
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(popup);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert$1 = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof args[0] === 'undefined') {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, popupParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      showWarningsForParams(args[0]);
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        var inputValidator = function inputValidator(email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
        params.inputValidator = params.expectRejections ? inputValidator : sweetAlert.adaptInputValidator(inputValidator);
      }

      if (params.input === 'url' && params.inputValidator === null) {
        var _inputValidator = function _inputValidator(url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
        params.inputValidator = params.expectRejections ? _inputValidator : sweetAlert.adaptInputValidator(_inputValidator);
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var popup = getPopup();

  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      sweetAlert.closePopup(params.onClose);
      if (params.useRejections) {
        resolve(value);
      } else {
        resolve({ value: value });
      }
    };
    var dismissWith = function dismissWith(dismiss) {
      sweetAlert.closePopup(params.onClose);
      if (params.useRejections) {
        reject(dismiss);
      } else {
        resolve({ dismiss: dismiss });
      }
    };
    var errorWith = function errorWith(error$$1) {
      sweetAlert.closePopup(params.onClose);
      reject(error$$1);
    };

    // Close on timer
    if (params.timer) {
      popup.timeout = setTimeout(function () {
        return dismissWith('timer');
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(popup, swalClasses[inputType]);
        case 'checkbox':
          return popup.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return popup.querySelector('.' + swalClasses.radio + ' input:checked') || popup.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return popup.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(popup, swalClasses.input);
      }
    };

    // Get the value of the popup input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        sweetAlert.resetValidationError();
        var preConfirmPromise = Promise.resolve().then(function () {
          return params.preConfirm(value, params.extraParams);
        });
        if (params.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            sweetAlert.hideLoading();
            if (validationError) {
              sweetAlert.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(getValidationError())) {
              sweetAlert.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                var validationPromise = Promise.resolve().then(function () {
                  return params.inputValidator(inputValue, params.extraParams);
                });
                if (params.expectRejections) {
                  validationPromise.then(function () {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    confirm(inputValue);
                  }, function (validationError) {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    if (validationError) {
                      sweetAlert.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    sweetAlert.enableButtons();
                    sweetAlert.enableInput();
                    if (validationError) {
                      sweetAlert.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            dismissWith('cancel');
          }
          break;
        default:
      }
    };

    var buttons = popup.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing popup by close button
    getCloseButton().onclick = function () {
      dismissWith('close');
    };

    if (params.toast) {
      // Closing popup by overlay click
      popup.onclick = function (e) {
        if (e.target !== popup || params.showConfirmButton || params.showCancelButton) {
          return;
        }
        if (params.allowOutsideClick) {
          sweetAlert.closePopup(params.onClose);
          dismissWith('overlay');
        }
      };
    } else {
      var ignoreOutsideClick = false;

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      popup.onmousedown = function () {
        container.onmouseup = function (e) {
          container.onmouseup = undefined;
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === container) {
            ignoreOutsideClick = true;
          }
        };
      };

      // Ignore click events that had mousedown on the container but mouseup on the popup
      container.onmousedown = function () {
        popup.onmouseup = function (e) {
          popup.onmouseup = undefined;
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === popup || popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target !== container) {
          return;
        }
        if (params.allowOutsideClick) {
          dismissWith('overlay');
        }
      };
    }

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target === getInput()) {
          if (e.target.tagName.toLowerCase() === 'textarea') {
            return; // do not submit
          }

          sweetAlert.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(params.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
          if (targetElement === focusableElements[_i4]) {
            btnIndex = _i4;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && params.allowEscapeKey === true) {
        dismissWith('esc');
      }
    };

    if (params.toast && windowOnkeydownOverridden) {
      window.onkeydown = previousWindowKeyDown;
      windowOnkeydownOverridden = false;
    }

    if (!params.toast && !windowOnkeydownOverridden) {
      previousWindowKeyDown = window.onkeydown;
      windowOnkeydownOverridden = true;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass([popup, buttonsWrapper], swalClasses.loading);
      popup.removeAttribute('aria-busy');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    if (params.input) {
      addClass(document.body, swalClasses['has-input']);
    }

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(popup, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(popup, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(popup, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(popup, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(popup, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue.toString() === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(popup, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue.toString() === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(popup, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(popup, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openPopup(params.animation, params.onBeforeOpen, params.onOpen);

    if (!params.toast) {
      if (!params.allowEnterKey) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (params.focusCancel && isVisible(cancelButton)) {
        cancelButton.focus();
      } else if (params.focusConfirm && isVisible(confirmButton)) {
        confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    }

    // fix scroll
    getContainer().scrollTop = 0;
  });
};

/*
 * Global function to determine if swal2 popup is shown
 */
sweetAlert$1.isVisible = function () {
  return !!getPopup();
};

/*
 * Global function for chaining sweetAlert popups
 */
sweetAlert$1.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert$1(queue[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({ dismiss: result.dismiss });
          }
        });
      } else {
        resetQueue();
        resolve({ value: queueResult });
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current popup in queue
 */
sweetAlert$1.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a popup to the queue
 */
sweetAlert$1.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a popup from the queue
 */
sweetAlert$1.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert$1.close = sweetAlert$1.closePopup = sweetAlert$1.closeModal = sweetAlert$1.closeToast = function (onComplete) {
  var container = getContainer();
  var popup = getPopup();
  if (!popup) {
    return;
  }
  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);
  clearTimeout(popup.timeout);

  if (!isToast()) {
    resetPrevState();
    window.onkeydown = previousWindowKeyDown;
    windowOnkeydownOverridden = false;
  }

  var removePopupAndResetState = function removePopupAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
    }
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(popup);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert$1.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert$1.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert$1.showLoading = sweetAlert$1.enableLoading = function () {
  var popup = getPopup();
  if (!popup) {
    sweetAlert$1('');
  }
  popup = getPopup();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass([popup, buttonsWrapper], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert$1.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
sweetAlert$1.isDeprecatedParameter = function (paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};

/**
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert$1.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  showWarningsForParams(userParams);

  // assign valid params from userParams to popupParams
  for (var param in userParams) {
    if (sweetAlert$1.isValidParameter(param)) {
      popupParams[param] = userParams[param];
    }
  }
};

/**
 * Reset default params for each popup
 */
sweetAlert$1.resetDefaults = function () {
  popupParams = _extends({}, defaultParams);
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
sweetAlert$1.adaptInputValidator = function (legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

sweetAlert$1.noop = function () {};

sweetAlert$1.version = '7.1.2';

sweetAlert$1.default = sweetAlert$1;

/**
 * Set default params if `window._swalDefaults` is an object
 */
if (_typeof(window._swalDefaults) === 'object') {
  sweetAlert$1.setDefaults(window._swalDefaults);
}

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousActiveElement: null,
  previousBodyPadding: null

  // Detect Node env
};var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

/*
 * Add modal + overlay to DOM
 */
var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var popup = getPopup();
  var input = getChildByClass(popup, swalClasses.input);
  var file = getChildByClass(popup, swalClasses.file);
  var range = popup.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = popup.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(popup, swalClasses.select);
  var checkbox = popup.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(popup, swalClasses.textarea);

  // a11y
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  var resetValidationError = function resetValidationError() {
    sweetAlert$1.isVisible() && sweetAlert$1.resetValidationError();
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function () {
    resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    resetValidationError();
    range.previousSibling.value = range.value;
  };

  return popup;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <div class="' + swalClasses.contentwrapper + '">\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   </div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getPopup = function getPopup() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.popup) : null;
};

var getIcons = function getIcons() {
  var popup = getPopup();
  return popup.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var isModal = function isModal() {
  return !document.body.classList.contains(swalClasses['toast-shown']);
};

var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};

var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = elem === getPopup() || elem === getButtonsWrapper() ? 'flex' : 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

/**
 * Inject a string of CSS into the page header
 *
 * @param {String} css
 */
var injectCSS = function injectCSS() {
  var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
};

injectCSS(styles);

return sweetAlert$1;

})));
if (typeof window !== 'undefined' && window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzUwMDI5MDZiMTJiODE5MTZlZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9tYWluLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLmFsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REEsNkNBQStCO0FBRS9COzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHO0lBQ2xCLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUNuQixxQkFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELGVBQWUsRUFBRSxHQUFHLEVBQUU7UUFDbEIscUJBQUksQ0FBQyxjQUFjLEVBQUUsdUNBQXVDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELGlCQUFpQixFQUFFLEdBQUcsRUFBRTtRQUNwQixxQkFBSSxDQUFDO1lBQ0QsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsK0NBQStDO1lBQ3JELElBQUksRUFBRSxTQUFTO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixjQUFjLEVBQUUsSUFBSTtZQUNwQixnQkFBZ0IsRUFBRSxJQUFJ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Z0IsZ0JBQWdCLEVBQUUsU0FBUyxlQUFlLGdCQUFnQixnQkFBZ0IsRUFBRSxTQUFTLGtCQUFrQixpQkFBaUIsZ0JBQWdCLEVBQUUsU0FBUyxrQkFBa0IsaUJBQWlCLGdCQUFnQixFQUFFLFVBQVUsa0JBQWtCLGlCQUFpQixnQkFBZ0IsRUFBRSxFQUFFLG9DQUFvQyxRQUFRLGVBQWUsZ0JBQWdCLGdCQUFnQixFQUFFLFNBQVMsZUFBZSxnQkFBZ0IsZ0JBQWdCLEVBQUUsU0FBUyxrQkFBa0IsaUJBQWlCLGdCQUFnQixFQUFFLFNBQVMsa0JBQWtCLGlCQUFpQixnQkFBZ0IsRUFBRSxVQUFVLGtCQUFrQixpQkFBaUIsZ0JBQWdCLEVBQUUsRUFBRSw2Q0FBNkMsUUFBUSxlQUFlLGtCQUFrQixnQkFBZ0IsRUFBRSxTQUFTLGVBQWUsa0JBQWtCLGdCQUFnQixFQUFFLFNBQVMsa0JBQWtCLGVBQWUsZ0JBQWdCLEVBQUUsVUFBVSxrQkFBa0IsaUJBQWlCLGdCQUFnQixFQUFFLEVBQUUscUNBQXFDLFFBQVEsZUFBZSxrQkFBa0IsZ0JBQWdCLEVBQUUsU0FBUyxlQUFlLGtCQUFrQixnQkFBZ0IsRUFBRSxTQUFTLGtCQUFrQixlQUFlLGdCQUFnQixFQUFFLFVBQVUsa0JBQWtCLGlCQUFpQixnQkFBZ0IsRUFBRSxFQUFFLGtEQUFrRCxRQUFRLGVBQWUsZ0JBQWdCLGVBQWUsRUFBRSxTQUFTLGVBQWUsZ0JBQWdCLGVBQWUsRUFBRSxTQUFTLGtCQUFrQixpQkFBaUIsZ0JBQWdCLEVBQUUsU0FBUyxpQkFBaUIsaUJBQWlCLGdCQUFnQixFQUFFLFVBQVUsa0JBQWtCLGdCQUFnQixnQkFBZ0IsRUFBRSxFQUFFLDBDQUEwQyxRQUFRLGVBQWUsZ0JBQWdCLGVBQWUsRUFBRSxTQUFTLGVBQWUsZ0JBQWdCLGVBQWUsRUFBRSxTQUFTLGtCQUFrQixpQkFBaUIsZ0JBQWdCLEVBQUUsU0FBUyxpQkFBaUIsaUJBQWlCLGdCQUFnQixFQUFFLFVBQVUsa0JBQWtCLGdCQUFnQixnQkFBZ0IsRUFBRSxFQUFFLG1EQUFtRCxRQUFRLGVBQWUs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RztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7QUFDRCIsImZpbGUiOiJkaXN0L3B1YmxpYy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNTAwMjkwNmIxMmI4MTkxNmVmNSIsImltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuXG4vKipcbiAqIEFuIG9iamVjdCBjb250YWluaW5nIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgdG8gYmUgdXNlZCBpbiB0aGUgY2xpZW50J3MgYnJvd3Nlci5cbiAqL1xubGV0IHB1YmxpY0Z1bmN0aW9ucyA9IHtcbiAgICBtYW5hZ2VQcm9wZXJ0aWVzOiAoKSA9PiB7XG4gICAgICAgIHN3YWwoXCJZb3UgaGF2ZSBubyBwcm9wZXJ0aWVzIHRvIG1hbmFnZSFcIik7XG4gICAgfSxcbiAgICBzaG93VHJhZGVXaW5kb3c6ICgpID0+IHtcbiAgICAgICAgc3dhbChcIkNhbm5vdCB0cmFkZVwiLCBcIlRyYWRpbmcgaXMgdW5hdmFpbGFibGUgYXQgdGhpcyBwb2ludC5cIiwgXCJlcnJvclwiKTtcbiAgICB9LFxuICAgIGNvbmZpcm1CYW5rcnVwdGN5OiAoKSA9PiB7XG4gICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgdGl0bGU6IFwi8J+SuFwiLFxuICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZmlsZSBmb3IgYmFua3J1cHRjeT9cIixcbiAgICAgICAgICAgIHR5cGU6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHJldmVyc2VCdXR0b25zOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllc1wiXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzd2FsKFwi8J+SuFwiLCBcIllvdSBoYXZlIGZpbGVkIGJhbmtydXB0Y3kuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNob3dQcm9wZXJ0eUluZm86IChuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGNvc3Q6IG51bWJlciwgaW1wcm92ZW1lbnQ6IG51bWJlciwgLi4uZmVlczogbnVtYmVyW10pID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdGVkUHJvcGVydHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RlZC1wcm9wZXJ0eVwiKTtcbiAgICAgICAgd2hpbGUgKHNlbGVjdGVkUHJvcGVydHlFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9wZXJ0eUVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VsZWN0ZWRQcm9wZXJ0eUVsZW1lbnQubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHByb3BlcnR5VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvcGVydHlUaXRsZUVsZW1lbnQuaWQgPSBcInByb3AtbmFtZVwiO1xuICAgICAgICBwcm9wZXJ0eVRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAgICAgbGV0IGltcHJvdmVtZW50VGV4dCA9IFtcIkZlZVwiLCBcIvCfkY1cIiwgXCLwn5GN8J+RjVwiLCBcIvCfkY3wn5GN8J+RjVwiLCBcIvCfkY3wn5GN8J+RjfCfkY1cIiwgXCLwn5GMXCJdO1xuICAgICAgICBsZXQgdHJhbnNwb3J0VGV4dCA9IFtcIkZlZVwiLCBcIldpdGggMiB0cmFuc3BvcnRzXCIsIFwiV2l0aCAzIHRyYW5zcG9ydHNcIiwgXCJXaXRoIDQgdHJhbnNwb3J0c1wiXTtcbiAgICAgICAgbGV0IHByaWNlVGFibGVUZXh0RWxlbWVudHMgPSBbXCJmZWUtMFwiLCBcImZlZS0xXCIsIFwiZmVlLTJcIiwgXCJmZWUtM1wiLCBcImZlZS00XCIsIFwiZmVlLTVcIl0ubWFwKCh2YWx1ZSkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUgKyBcIi10ZXh0XCIpKTtcbiAgICAgICAgbGV0IHByaWNlVGFibGVFbGVtZW50cyA9IFtcImZlZS0wXCIsIFwiZmVlLTFcIiwgXCJmZWUtMlwiLCBcImZlZS0zXCIsIFwiZmVlLTRcIiwgXCJmZWUtNVwiXS5tYXAoKHZhbHVlKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgcHJvcGVydHlUaXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gY29sb3I7XG4gICAgICAgICAgICBwcmljZVRhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBwcmljZVRhYmxlVGV4dEVsZW1lbnRzW2luZGV4XS5pbm5lckhUTUwgPSBpbXByb3ZlbWVudFRleHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZmVlc1tpbmRleF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0LWltcHJvdmUtdGV4dFwiKS5pbm5lckhUTUwgPSBcIkNvc3QgcGVyIPCfkY0v8J+RjFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0LWltcHJvdmVcIikuaW5uZXJIVE1MID0gaW1wcm92ZW1lbnQudG9TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BlcnR5VGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc2FibGVkLXZhbHVlXCIpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoY29zdCAqIDAuNSkudG9TdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0LXJlZW5hYmxlXCIpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoY29zdCAqIDAuNTUpLnRvU3RyaW5nKCk7XG4gICAgfVxufTtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHB1YmxpY0Z1bmN0aW9ucyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3B1YmxpYy9tYWluLnRzIiwiLyohXG4gKiBzd2VldGFsZXJ0MiB2Ny4xLjJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3R5bGVzID0gXCJodG1sLnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pLFxcbmJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XFxuXFxuYm9keS5zd2FsMi10b2FzdC1zaG93bi5zd2FsMi1oYXMtaW5wdXQgPiAuc3dhbDItY29udGFpbmVyID4gLnN3YWwyLXRvYXN0IHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93bi5zd2FsMi1oYXMtaW5wdXQgPiAuc3dhbDItY29udGFpbmVyID4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcXG4gICAgbWFyZ2luOiAwIDAgMTVweDsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93bi5zd2FsMi1oYXMtaW5wdXQgPiAuc3dhbDItY29udGFpbmVyID4gLnN3YWwyLXRvYXN0IC5zd2FsMi1idXR0b25zd3JhcHBlciB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBzdHJldGNoO1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24uc3dhbDItaGFzLWlucHV0ID4gLnN3YWwyLWNvbnRhaW5lciA+IC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93bi5zd2FsMi1oYXMtaW5wdXQgPiAuc3dhbDItY29udGFpbmVyID4gLnN3YWwyLXRvYXN0IC5zd2FsMi1pbnB1dCB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDVweCBhdXRvOyB9XFxuXFxuYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3R0b206IGF1dG87XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICByaWdodDogMDsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICByaWdodDogYXV0bztcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgcmlnaHQ6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgYm9keS5zd2FsMi10b2FzdC1zaG93biA+IC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xcbiAgICB0b3A6IGF1dG87XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IGF1dG87IH1cXG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XFxuICAgIHRvcDogYXV0bztcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gPiAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodCB7XFxuICAgIHRvcDogYXV0bztcXG4gICAgbGVmdDogYXV0bztcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDsgfVxcblxcbmJvZHkuc3dhbDItaW9zZml4IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDsgfVxcblxcbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24ge1xcbiAgdG9wOiBhdXRvO1xcbiAgYm90dG9tOiBhdXRvO1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24gPiAuc3dhbDItbW9kYWwge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24uc3dhbDItdG9wIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCA+IC5zd2FsMi1zaG93bi5zd2FsMi10b3AtbGVmdCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDsgfVxcbiAgYm9keS5zd2FsMi1uby1iYWNrZHJvcCA+IC5zd2FsMi1zaG93bi5zd2FsMi10b3AtcmlnaHQge1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlciB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cXG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWxlZnQge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1yaWdodCB7XFxuICAgIHRvcDogNTAlO1xcbiAgICByaWdodDogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICBib2R5LnN3YWwyLW5vLWJhY2tkcm9wID4gLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLWxlZnQge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7IH1cXG4gIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgPiAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLXJpZ2h0IHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDsgfVxcblxcbi5zd2FsMi1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgei1pbmRleDogMTA2MDsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4gPiAuc3dhbDItbW9kYWwge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBzdHJldGNoO1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctcm93ID4gLnN3YWwyLW1vZGFsIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgZmxleDogMTtcXG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbiB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbSB7XFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tbGVmdCB7XFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxcbiAgICAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1yaWdodCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0IHtcXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XFxuICAgIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4gPiAuc3dhbDItbW9kYWwge1xcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnN3YWwyLWNvbnRhaW5lcjpub3QoLnN3YWwyLXRvcCk6bm90KC5zd2FsMi10b3AtbGVmdCk6bm90KC5zd2FsMi10b3AtcmlnaHQpOm5vdCguc3dhbDItY2VudGVyLWxlZnQpOm5vdCguc3dhbDItY2VudGVyLXJpZ2h0KTpub3QoLnN3YWwyLWJvdHRvbSk6bm90KC5zd2FsMi1ib3R0b20tbGVmdCk6bm90KC5zd2FsMi1ib3R0b20tcmlnaHQpID4gLnN3YWwyLW1vZGFsIHtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xcbiAgICAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbCB7XFxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH0gfVxcbiAgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRlIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xcztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXM7IH1cXG4gIC5zd2FsMi1jb250YWluZXIuc3dhbDItc2hvd24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG5cXG4uc3dhbDItcG9wdXAge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNkOWQ5ZDk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2Q5ZDlkOTsgfVxcbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxlIHtcXG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY29udGVudCB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIHtcXG4gICAgICB3aWR0aDogMzJweDtcXG4gICAgICBtaW4td2lkdGg6IDMycHg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDsgfVxcbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xcbiAgICAgICAgd2lkdGg6IDMycHg7XFxuICAgICAgICBoZWlnaHQ6IDMycHg7IH1cXG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItaW5mbywgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmcsIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDsgfVxcbiAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcXG4gICAgICAgIHRvcDogMTRweDtcXG4gICAgICAgIHdpZHRoOiAyMnB4OyB9XFxuICAgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuICAgICAgICAgIGxlZnQ6IDVweDsgfVxcbiAgICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdyaWdodCddIHtcXG4gICAgICAgICAgcmlnaHQ6IDVweDsgfVxcbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyIHtcXG4gICAgICBtYXJnaW46IDAgMCAwIDVweDsgfVxcbiAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZCB7XFxuICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7XFxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7IH1cXG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZDpmb2N1cyB7XFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDFweCAjZmZmLCAwIDAgMCAycHggcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZmZmLCAwIDAgMCAycHggcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH1cXG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uZXJyb3Ige1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbjogNXB4IC0yMHB4OyB9XFxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjYTVkYzg2OyB9XFxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxcbiAgICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0nbGVmdCddIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNjRweCAwIDAgNjRweDtcXG4gICAgICAgICAgdG9wOiAtNHB4O1xcbiAgICAgICAgICBsZWZ0OiAtMTVweDtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDsgfVxcbiAgICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNjRweCA2NHB4IDA7XFxuICAgICAgICAgIHRvcDogLTVweDtcXG4gICAgICAgICAgbGVmdDogMTRweDtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDMycHg7XFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAzMnB4OyB9XFxuICAgICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xcbiAgICAgICAgd2lkdGg6IDMycHg7XFxuICAgICAgICBoZWlnaHQ6IDMycHg7IH1cXG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcXG4gICAgICAgIHdpZHRoOiA3cHg7XFxuICAgICAgICBoZWlnaHQ6IDkwcHg7XFxuICAgICAgICBsZWZ0OiAyOHB4O1xcbiAgICAgICAgdG9wOiA4cHg7IH1cXG4gICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ10ge1xcbiAgICAgICAgaGVpZ2h0OiA1cHg7IH1cXG4gICAgICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXVtjbGFzcyQ9J3RpcCddIHtcXG4gICAgICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgICAgIGxlZnQ6IDNweDtcXG4gICAgICAgICAgdG9wOiAxOHB4OyB9XFxuICAgICAgICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSdsb25nJ10ge1xcbiAgICAgICAgICB3aWR0aDogMjJweDtcXG4gICAgICAgICAgcmlnaHQ6IDNweDtcXG4gICAgICAgICAgdG9wOiAxNXB4OyB9XFxuICAgIC5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLXRpcCAuNzVzO1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIC43NXM7IH1cXG4gICAgLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcgLjc1cztcXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS10b2FzdC1zdWNjZXNzLWxvbmcgLjc1czsgfVxcbiAgLnN3YWwyLXBvcHVwOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgLnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmcge1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdGl0bGUge1xcbiAgICBjb2xvcjogIzU5NTk1OTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCAwIC40ZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItYnV0dG9uc3dyYXBwZXIge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1idXR0b25zd3JhcHBlcjpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRdIHtcXG4gICAgICBvcGFjaXR5OiAuNDtcXG4gICAgICBjdXJzb3I6IG5vLWRyb3A7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1idXR0b25zd3JhcHBlci5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY29uZmlybSB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIG1hcmdpbjogNy41cHg7XFxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XFxuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWwge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlciB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgICAgdmVydGljYWwtYWxpZ246IC0xcHg7XFxuICAgICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAgIHdpZHRoOiAxNXB4O1xcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM5OTk5OTk7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDFweCAjZmZmO1xcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2ZmZjtcXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbjogMTVweCA1cHggMDtcXG4gICAgcGFkZGluZzogMTBweCAzMnB4OyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmYsIDAgMCAwIDRweCByZ2JhKDUwLCAxMDAsIDE1MCwgMC40KTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmLCAwIDAgMCA0cHggcmdiYSg1MCwgMTAwLCAxNTAsIDAuNCk7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItaW1hZ2Uge1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWNsb3NlIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMzhweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIHJpZ2h0OiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICNjY2NjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlOyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2xvc2U6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZDU1OyB9XFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItaW5wdXQsXFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItZmlsZSxcXG4gIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi10ZXh0YXJlYSxcXG4gIC5zd2FsMi1wb3B1cCA+IC5zd2FsMi1zZWxlY3QsXFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItcmFkaW8sXFxuICAuc3dhbDItcG9wdXAgPiAuc3dhbDItY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWNvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBjb2xvcjogIzU0NTQ1NDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LFxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlLFxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYSxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItc2VsZWN0LFxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYWRpbyxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3gge1xcbiAgICBtYXJnaW46IDIwcHggYXV0bzsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dCxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZSxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIC13ZWJraXQtYm94LXNoYWRvdyAuM3M7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIC13ZWJraXQtYm94LXNoYWRvdyAuM3M7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuM3MsIGJveC1zaGFkb3cgLjNzO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjNzLCBib3gtc2hhZG93IC4zcywgLXdlYmtpdC1ib3gtc2hhZG93IC4zczsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItZmlsZS5zd2FsMi1pbnB1dGVycm9yLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhLnN3YWwyLWlucHV0ZXJyb3Ige1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2YyNzQ3NCAhaW1wb3J0YW50O1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDJweCAjZjI3NDc0ICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudDsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OmZvY3VzLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6Zm9jdXMsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Zm9jdXMge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0ZGJlZDtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2M0ZTZmNTtcXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggI2M0ZTZmNTsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjY2NjY2NjOyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICNjY2NjY2M7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogI2NjY2NjYzsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0OjpwbGFjZWhvbGRlcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi1maWxlOjpwbGFjZWhvbGRlcixcXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjY2NjY2NjOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhbmdlIGlucHV0IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1yYW5nZSBpbnB1dCxcXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG4gICAgaGVpZ2h0OiA0M3B4O1xcbiAgICBsaW5lLWhlaWdodDogNDNweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItaW5wdXQge1xcbiAgICBoZWlnaHQ6IDQzcHg7XFxuICAgIHBhZGRpbmc6IDAgMTJweDsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLWlucHV0W3R5cGU9J251bWJlciddIHtcXG4gICAgICBtYXgtd2lkdGg6IDE1MHB4OyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLWZpbGUge1xcbiAgICBmb250LXNpemU6IDIwcHg7IH1cXG4gIC5zd2FsMi1wb3B1cCAuc3dhbDItdGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDEwOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4OyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXNlbGVjdCB7XFxuICAgIGNvbG9yOiAjNTQ1NDU0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIHtcXG4gICAgYm9yZGVyOiAwOyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8gbGFiZWw6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8gaW5wdXQsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItcmFkaW8gc3BhbiB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgICAuc3dhbDItcG9wdXAgLnN3YWwyLXJhZGlvIGlucHV0IHtcXG4gICAgICBtYXJnaW46IDAgM3B4IDAgMDsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi1jaGVja2JveCB7XFxuICAgIGNvbG9yOiAjNTQ1NDU0OyB9XFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3ggaW5wdXQsXFxuICAgIC5zd2FsMi1wb3B1cCAuc3dhbDItY2hlY2tib3ggc3BhbiB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgLnN3YWwyLXBvcHVwIC5zd2FsMi12YWxpZGF0aW9uZXJyb3Ige1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBtYXJnaW46IDAgLTIwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLnN3YWwyLXBvcHVwIC5zd2FsMi12YWxpZGF0aW9uZXJyb3I6OmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJyEnO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTdkN2Q7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbkBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOiB0cnVlKSB7XFxuICAuc3dhbDItcmFuZ2UgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XFxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cXG4gIC5zd2FsMi1yYW5nZSBvdXRwdXQge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG4uc3dhbDItaWNvbiB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZjI3NDc0OyB9XFxuICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmsge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgd2lkdGg6IDQ3cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB0b3A6IDM3cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XFxuICAgICAgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj0nc3dhbDIteC1tYXJrLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgbGVmdDogMTdweDsgfVxcbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149J3N3YWwyLXgtbWFyay1saW5lJ11bY2xhc3MkPSdyaWdodCddIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgIHJpZ2h0OiAxNnB4OyB9XFxuICAuc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nIHtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZjhiYjg2O1xcbiAgICBib3JkZXItY29sb3I6ICNmYWNlYTg7XFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnN3YWwyLWljb24uc3dhbDItaW5mbyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMzZmMzZWU7XFxuICAgIGJvcmRlci1jb2xvcjogIzlkZTBmNjtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogODBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzg3YWRiZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYzlkYWUxO1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3Mge1xcbiAgICBib3JkZXItY29sb3I6ICNhNWRjODY7IH1cXG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB3aWR0aDogNjBweDtcXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXVtjbGFzcyQ9J2xlZnQnXSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMjBweCAwIDAgMTIwcHg7XFxuICAgICAgICB0b3A6IC03cHg7XFxuICAgICAgICBsZWZ0OiAtMzNweDtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNjBweCA2MHB4O1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA2MHB4IDYwcHg7IH1cXG4gICAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSddW2NsYXNzJD0ncmlnaHQnXSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEyMHB4IDEyMHB4IDA7XFxuICAgICAgICB0b3A6IC0xMXB4O1xcbiAgICAgICAgbGVmdDogMzBweDtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA2MHB4O1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDYwcHg7IH1cXG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcXG4gICAgICB3aWR0aDogODBweDtcXG4gICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgxNjUsIDIyMCwgMTM0LCAwLjIpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IC00cHg7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIHotaW5kZXg6IDI7IH1cXG4gICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXgge1xcbiAgICAgIHdpZHRoOiA3cHg7XFxuICAgICAgaGVpZ2h0OiA5MHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAyOHB4O1xcbiAgICAgIHRvcDogOHB4O1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgfVxcbiAgICAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddIHtcXG4gICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkYzg2O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgei1pbmRleDogMjsgfVxcbiAgICAgIC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1saW5lJ11bY2xhc3MkPSd0aXAnXSB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGxlZnQ6IDE0cHg7XFxuICAgICAgICB0b3A6IDQ2cHg7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuICAgICAgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXVtjbGFzcyQ9J2xvbmcnXSB7XFxuICAgICAgICB3aWR0aDogNDdweDtcXG4gICAgICAgIHJpZ2h0OiA4cHg7XFxuICAgICAgICB0b3A6IDM4cHg7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cXG5cXG4uc3dhbDItcHJvZ3Jlc3NzdGVwcyB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAwIDAgMjBweDtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XFxuICAgIGJhY2tncm91bmQ6ICMzMDg1ZDY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBsaW5lLWhlaWdodDogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIHotaW5kZXg6IDIwOyB9XFxuICAgIC5zd2FsMi1wcm9ncmVzc3N0ZXBzIC5zd2FsMi1wcm9ncmVzc2NpcmNsZTpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAuc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGUuc3dhbDItYWN0aXZlcHJvZ3Jlc3NzdGVwIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMzA4NWQ2OyB9XFxuICAgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB+IC5zd2FsMi1wcm9ncmVzc2NpcmNsZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjYWRkOGU2OyB9XFxuICAgICAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcCB+IC5zd2FsMi1wcm9ncmVzc2xpbmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2FkZDhlNjsgfVxcbiAgLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzbGluZSB7XFxuICAgIGJhY2tncm91bmQ6ICMzMDg1ZDY7XFxuICAgIGhlaWdodDogLjRlbTtcXG4gICAgbWFyZ2luOiAwIC0xcHg7XFxuICAgIHotaW5kZXg6IDEwOyB9XFxuXFxuW2NsYXNzXj0nc3dhbDInXSB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNob3dTd2VldFRvYXN0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZVooMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVaKDJkZWcpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAzMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XFxuICAgIG9wYWNpdHk6IC41OyB9XFxuICA2NiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZVooMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlWigyZGVnKTtcXG4gICAgb3BhY2l0eTogLjc7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNob3dTd2VldFRvYXN0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZVooMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVaKDJkZWcpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAzMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7XFxuICAgIG9wYWNpdHk6IC41OyB9XFxuICA2NiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZVooMmRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlWigyZGVnKTtcXG4gICAgb3BhY2l0eTogLjc7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGlkZVN3ZWV0VG9hc3Qge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAzMyUge1xcbiAgICBvcGFjaXR5OiAuNTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuQGtleWZyYW1lcyBoaWRlU3dlZXRUb2FzdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDMzJSB7XFxuICAgIG9wYWNpdHk6IC41OyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xcbiAgICBvcGFjaXR5OiAwOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hvd1N3ZWV0QWxlcnQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7IH1cXG4gIDQ1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpOyB9XFxuICA0NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldEFsZXJ0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIG9wYWNpdHk6IDA7IH0gfVxcblxcbkBrZXlmcmFtZXMgaGlkZVN3ZWV0QWxlcnQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXFxuLnN3YWwyLXNob3cge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNob3dTd2VldEFsZXJ0IC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzaG93U3dlZXRBbGVydCAuM3M7IH1cXG4gIC5zd2FsMi1zaG93LnN3YWwyLXRvYXN0IHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNob3dTd2VldFRvYXN0IC41cztcXG4gICAgICAgICAgICBhbmltYXRpb246IHNob3dTd2VldFRvYXN0IC41czsgfVxcbiAgLnN3YWwyLXNob3cuc3dhbDItbm9hbmltYXRpb24ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgICAgICBhbmltYXRpb246IG5vbmU7IH1cXG5cXG4uc3dhbDItaGlkZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaGlkZVN3ZWV0QWxlcnQgLjE1cyBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBoaWRlU3dlZXRBbGVydCAuMTVzIGZvcndhcmRzOyB9XFxuICAuc3dhbDItaGlkZS5zd2FsMi10b2FzdCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBoaWRlU3dlZXRUb2FzdCAuMnMgZm9yd2FyZHM7IH1cXG4gIC5zd2FsMi1oaWRlLnN3YWwyLW5vYW5pbWF0aW9uIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lOyB9XFxuXFxuW2Rpcj0ncnRsJ10gLnN3YWwyLWNsb3NlIHtcXG4gIGxlZnQ6IDhweDtcXG4gIHJpZ2h0OiBhdXRvOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2Vzcy10aXAge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDE5cHg7IH1cXG4gIDU0JSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogMTlweDsgfVxcbiAgNzAlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGxlZnQ6IC04cHg7XFxuICAgIHRvcDogMzdweDsgfVxcbiAgODQlIHtcXG4gICAgd2lkdGg6IDE3cHg7XFxuICAgIGxlZnQ6IDIxcHg7XFxuICAgIHRvcDogNDhweDsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBsZWZ0OiAxNHB4O1xcbiAgICB0b3A6IDQ1cHg7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZS1zdWNjZXNzLXRpcCB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogMTlweDsgfVxcbiAgNTQlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiAxOXB4OyB9XFxuICA3MCUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgbGVmdDogLThweDtcXG4gICAgdG9wOiAzN3B4OyB9XFxuICA4NCUge1xcbiAgICB3aWR0aDogMTdweDtcXG4gICAgbGVmdDogMjFweDtcXG4gICAgdG9wOiA0OHB4OyB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGxlZnQ6IDE0cHg7XFxuICAgIHRvcDogNDVweDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2Vzcy1sb25nIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHJpZ2h0OiA0NnB4O1xcbiAgICB0b3A6IDU0cHg7IH1cXG4gIDY1JSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICByaWdodDogNDZweDtcXG4gICAgdG9wOiA1NHB4OyB9XFxuICA4NCUge1xcbiAgICB3aWR0aDogNTVweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMzVweDsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiA0N3B4O1xcbiAgICByaWdodDogOHB4O1xcbiAgICB0b3A6IDM4cHg7IH0gfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZS1zdWNjZXNzLWxvbmcge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcmlnaHQ6IDQ2cHg7XFxuICAgIHRvcDogNTRweDsgfVxcbiAgNjUlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHJpZ2h0OiA0NnB4O1xcbiAgICB0b3A6IDU0cHg7IH1cXG4gIDg0JSB7XFxuICAgIHdpZHRoOiA1NXB4O1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAzNXB4OyB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDQ3cHg7XFxuICAgIHJpZ2h0OiA4cHg7XFxuICAgIHRvcDogMzhweDsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy10aXAge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0b3A6IDlweDsgfVxcbiAgNTQlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiA5cHg7IH1cXG4gIDcwJSB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBsZWZ0OiAtNHB4O1xcbiAgICB0b3A6IDE3cHg7IH1cXG4gIDg0JSB7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHRvcDogMjBweDsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgICBsZWZ0OiAzcHg7XFxuICAgIHRvcDogMThweDsgfSB9XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtdGlwIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdG9wOiA5cHg7IH1cXG4gIDU0JSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHRvcDogOXB4OyB9XFxuICA3MCUge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgbGVmdDogLTRweDtcXG4gICAgdG9wOiAxN3B4OyB9XFxuICA4NCUge1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB0b3A6IDIwcHg7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTJweDtcXG4gICAgbGVmdDogM3B4O1xcbiAgICB0b3A6IDE4cHg7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXRvYXN0LXN1Y2Nlc3MtbG9uZyB7XFxuICAwJSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICByaWdodDogMjJweDtcXG4gICAgdG9wOiAyNnB4OyB9XFxuICA2NSUge1xcbiAgICB3aWR0aDogMDtcXG4gICAgcmlnaHQ6IDIycHg7XFxuICAgIHRvcDogMjZweDsgfVxcbiAgODQlIHtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDE1cHg7IH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgcmlnaHQ6IDNweDtcXG4gICAgdG9wOiAxNXB4OyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtdG9hc3Qtc3VjY2Vzcy1sb25nIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHJpZ2h0OiAyMnB4O1xcbiAgICB0b3A6IDI2cHg7IH1cXG4gIDY1JSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICByaWdodDogMjJweDtcXG4gICAgdG9wOiAyNnB4OyB9XFxuICA4NCUge1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMTVweDsgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAyMnB4O1xcbiAgICByaWdodDogM3B4O1xcbiAgICB0b3A6IDE1cHg7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuICA1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuICAxMiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlciB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuICA1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuICAxMiUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTsgfSB9XFxuXFxuLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1zdWNjZXNzLXRpcCAuNzVzO1xcbiAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtc3VjY2Vzcy10aXAgLjc1czsgfVxcblxcbi5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLXN1Y2Nlc3MtbG9uZyAuNzVzO1xcbiAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtc3VjY2Vzcy1sb25nIC43NXM7IH1cXG5cXG4uc3dhbDItc3VjY2Vzcy5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVQbGFjZWhvbGRlciA0LjI1cyBlYXNlLWluO1xcbiAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZVBsYWNlaG9sZGVyIDQuMjVzIGVhc2UtaW47IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS1lcnJvci1pY29uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlLWVycm9yLWljb24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4uc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLWVycm9yLWljb24gLjVzO1xcbiAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS14LW1hcmsge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuICAgIG1hcmdpbi10b3A6IDI2cHg7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG4gICAgbWFyZ2luLXRvcDogMjZweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAgIG1hcmdpbi10b3A6IC02cHg7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlLXgtbWFyayB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcXG4gICAgbWFyZ2luLXRvcDogMjZweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gICAgbWFyZ2luLXRvcDogLTZweDsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4uc3dhbDItYW5pbWF0ZS14LW1hcmsge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUteC1tYXJrIC41cztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLXgtbWFyayAuNXM7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLWxvYWRpbmcge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWxvYWRpbmcge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblwiO1xuXG52YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0aXRsZVRleHQ6ICcnLFxuICB0ZXh0OiAnJyxcbiAgaHRtbDogJycsXG4gIHR5cGU6IG51bGwsXG4gIHRvYXN0OiBmYWxzZSxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICB0YXJnZXQ6ICdib2R5JyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICBhbGxvd0VudGVyS2V5OiB0cnVlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIHByZUNvbmZpcm06IG51bGwsXG4gIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gIGNvbmZpcm1CdXR0b25DbGFzczogbnVsbCxcbiAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2FhYScsXG4gIGNhbmNlbEJ1dHRvbkNsYXNzOiBudWxsLFxuICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICBmb2N1c0NvbmZpcm06IHRydWUsXG4gIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICBpbWFnZVVybDogbnVsbCxcbiAgaW1hZ2VXaWR0aDogbnVsbCxcbiAgaW1hZ2VIZWlnaHQ6IG51bGwsXG4gIGltYWdlQWx0OiAnJyxcbiAgaW1hZ2VDbGFzczogbnVsbCxcbiAgdGltZXI6IG51bGwsXG4gIHdpZHRoOiA1MDAsXG4gIHBhZGRpbmc6IDIwLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIGlucHV0OiBudWxsLFxuICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgaW5wdXRWYWx1ZTogJycsXG4gIGlucHV0T3B0aW9uczoge30sXG4gIGlucHV0QXV0b1RyaW06IHRydWUsXG4gIGlucHV0Q2xhc3M6IG51bGwsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiBudWxsLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogbnVsbCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiAnNDBweCcsXG4gIG9uQmVmb3JlT3BlbjogbnVsbCxcbiAgb25PcGVuOiBudWxsLFxuICBvbkNsb3NlOiBudWxsLFxuICB1c2VSZWplY3Rpb25zOiBmYWxzZSxcbiAgZXhwZWN0UmVqZWN0aW9uczogZmFsc2Vcbn07XG5cbnZhciBkZXByZWNhdGVkUGFyYW1zID0gWyd1c2VSZWplY3Rpb25zJywgJ2V4cGVjdFJlamVjdGlvbnMnXTtcblxudmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcblxudmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgc3dhbENsYXNzZXMgPSBwcmVmaXgoWydjb250YWluZXInLCAnc2hvd24nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ3RvYXN0JywgJ3RvYXN0LXNob3duJywgJ292ZXJsYXknLCAnZmFkZScsICdzaG93JywgJ2hpZGUnLCAnbm9hbmltYXRpb24nLCAnY2xvc2UnLCAndGl0bGUnLCAnY29udGVudCcsICdjb250ZW50d3JhcHBlcicsICdidXR0b25zd3JhcHBlcicsICdjb25maXJtJywgJ2NhbmNlbCcsICdpY29uJywgJ2ltYWdlJywgJ2lucHV0JywgJ2hhcy1pbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYScsICdpbnB1dGVycm9yJywgJ3ZhbGlkYXRpb25lcnJvcicsICdwcm9ncmVzc3N0ZXBzJywgJ2FjdGl2ZXByb2dyZXNzc3RlcCcsICdwcm9ncmVzc2NpcmNsZScsICdwcm9ncmVzc2xpbmUnLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJ10pO1xuXG52YXIgaWNvblR5cGVzID0gcHJlZml4KFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2luZm8nLCAncXVlc3Rpb24nLCAnZXJyb3InXSk7XG5cbnZhciBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG5cbi8qXG4gKiBTZXQgaG92ZXIsIGFjdGl2ZSBhbmQgZm9jdXMtc3RhdGVzIGZvciBidXR0b25zIChzb3VyY2U6IGh0dHA6Ly93d3cuc2l0ZXBvaW50LmNvbS9qYXZhc2NyaXB0LWdlbmVyYXRlLWxpZ2h0ZXItZGFya2VyLWNvbG9yKVxuICovXG52YXIgY29sb3JMdW1pbmFuY2UgPSBmdW5jdGlvbiBjb2xvckx1bWluYW5jZShoZXgsIGx1bSkge1xuICAvLyBWYWxpZGF0ZSBoZXggc3RyaW5nXG4gIGhleCA9IFN0cmluZyhoZXgpLnJlcGxhY2UoL1teMC05YS1mXS9naSwgJycpO1xuICBpZiAoaGV4Lmxlbmd0aCA8IDYpIHtcbiAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gIH1cbiAgbHVtID0gbHVtIHx8IDA7XG5cbiAgLy8gQ29udmVydCB0byBkZWNpbWFsIGFuZCBjaGFuZ2UgbHVtaW5vc2l0eVxuICB2YXIgcmdiID0gJyMnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIHZhciBjID0gcGFyc2VJbnQoaGV4LnN1YnN0cihpICogMiwgMiksIDE2KTtcbiAgICBjID0gTWF0aC5yb3VuZChNYXRoLm1pbihNYXRoLm1heCgwLCBjICsgYyAqIGx1bSksIDI1NSkpLnRvU3RyaW5nKDE2KTtcbiAgICByZ2IgKz0gKCcwMCcgKyBjKS5zdWJzdHIoYy5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHJnYjtcbn07XG5cbi8qKlxuICogRmlsdGVyIHRoZSB1bmlxdWUgdmFsdWVzIGludG8gYSBuZXcgYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqL1xudmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbnZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2Fybihjb25zb2xlUHJlZml4ICsgJyAnICsgbWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG52YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoY29uc29sZVByZWZpeCArICcgJyArIG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBQcml2YXRlIGdsb2JhbCBzdGF0ZSBmb3IgYHdhcm5PbmNlYFxuICogQHR5cGUge0FycmF5fVxuICogQHByaXZhdGVcbiAqL1xudmFyIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdO1xuXG4vKipcbiAqIFNob3cgYSBjb25zb2xlIHdhcm5pbmcsIGJ1dCBvbmx5IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gc2hvd25cbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cbnZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKCEocHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSkgIT09IC0xKSkge1xuICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHdhcm4obWVzc2FnZSk7XG4gIH1cbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBwb3B1cFBhcmFtcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zKTtcbnZhciBxdWV1ZSA9IFtdO1xuXG52YXIgcHJldmlvdXNXaW5kb3dLZXlEb3duID0gdm9pZCAwO1xudmFyIHdpbmRvd09ua2V5ZG93bk92ZXJyaWRkZW4gPSB2b2lkIDA7XG5cbi8qXG4gKiBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG4gKiBIb3BlZnVsbHkgdG8gYXZvaWQgbWFueSBnaXRodWIgaXNzdWVzXG4gKi9cbmlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgZXJyb3IoJ1RoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2xpbW9udGUvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbn1cblxuLyoqXG4gKiBTaG93IHJlbGV2YW50IHdhcm5pbmdzIGZvciBnaXZlbiBwYXJhbXNcbiAqXG4gKiBAcGFyYW0gcGFyYW1zXG4gKi9cbnZhciBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKSB7XG4gIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgIGlmICghc3dlZXRBbGVydCQxLmlzVmFsaWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuKCdVbmtub3duIHBhcmFtZXRlciBcIicgKyBwYXJhbSArICdcIicpO1xuICAgIH1cbiAgICBpZiAoc3dlZXRBbGVydCQxLmlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm5PbmNlKCdUaGUgcGFyYW1ldGVyIFwiJyArIHBhcmFtICsgJ1wiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLicpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG52YXIgc2V0UGFyYW1ldGVycyA9IGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gIC8vIElmIGEgY3VzdG9tIGVsZW1lbnQgaXMgc2V0LCBkZXRlcm1pbmUgaWYgaXQgaXMgdmFsaWRcbiAgaWYgKHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gIH1cblxuICB2YXIgcG9wdXAgPSB2b2lkIDA7XG4gIHZhciBvbGRQb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG4gIC8vIElmIHRoZSBtb2RlbCB0YXJnZXQgaGFzIGNoYW5nZWQsIHJlZnJlc2ggdGhlIHBvcHVwXG4gIGlmIChvbGRQb3B1cCAmJiB0YXJnZXRFbGVtZW50ICYmIG9sZFBvcHVwLnBhcmVudE5vZGUgIT09IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHBvcHVwID0gaW5pdChwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHBvcHVwID0gb2xkUG9wdXAgfHwgaW5pdChwYXJhbXMpO1xuICB9XG5cbiAgLy8gU2V0IHBvcHVwIHdpZHRoXG4gIHZhciBwb3B1cFdpZHRoID0gcGFyYW1zLndpZHRoID09PSBkZWZhdWx0UGFyYW1zLndpZHRoICYmIHBhcmFtcy50b2FzdCA/ICdhdXRvJyA6IHBhcmFtcy53aWR0aDtcbiAgcG9wdXAuc3R5bGUud2lkdGggPSB0eXBlb2YgcG9wdXBXaWR0aCA9PT0gJ251bWJlcicgPyBwb3B1cFdpZHRoICsgJ3B4JyA6IHBvcHVwV2lkdGg7XG5cbiAgdmFyIHBvcHVwUGFkZGluZyA9IHBhcmFtcy5wYWRkaW5nID09PSBkZWZhdWx0UGFyYW1zLnBhZGRpbmcgJiYgcGFyYW1zLnRvYXN0ID8gJ2luaGVyaXQnIDogcGFyYW1zLnBhZGRpbmc7XG4gIHBvcHVwLnN0eWxlLnBhZGRpbmcgPSB0eXBlb2YgcG9wdXBQYWRkaW5nID09PSAnbnVtYmVyJyA/IHBvcHVwUGFkZGluZyArICdweCcgOiBwb3B1cFBhZGRpbmc7XG4gIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgdmFyIHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Y2Nlc3NJY29uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHRpdGxlID0gZ2V0VGl0bGUoKTtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBidXR0b25zV3JhcHBlciA9IGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gIHZhciBjbG9zZUJ1dHRvbiA9IGdldENsb3NlQnV0dG9uKCk7XG5cbiAgLy8gVGl0bGVcbiAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwYXJhbXMudGl0bGVUZXh0O1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLmlubmVySFRNTCA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gIH1cblxuICBpZiAoIXBhcmFtcy5iYWNrZHJvcCkge1xuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gIH1cblxuICAvLyBDb250ZW50XG4gIGlmIChwYXJhbXMudGV4dCB8fCBwYXJhbXMuaHRtbCkge1xuICAgIGlmIChfdHlwZW9mKHBhcmFtcy5odG1sKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZiAoMCBpbiBwYXJhbXMuaHRtbCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIGluIHBhcmFtcy5odG1sOyBfaSsrKSB7XG4gICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbFtfaV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhbXMuaHRtbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gcGFyYW1zLmh0bWw7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgY29udGVudC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgIH1cbiAgICBzaG93KGNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cblxuICAvLyBQb3NpdGlvblxuICBpZiAocGFyYW1zLnBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twYXJhbXMucG9zaXRpb25dKTtcbiAgfVxuXG4gIC8vIEdyb3dcbiAgaWYgKHBhcmFtcy5ncm93ICYmIHR5cGVvZiBwYXJhbXMuZ3JvdyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZ3Jvd0NsYXNzID0gJ2dyb3ctJyArIHBhcmFtcy5ncm93O1xuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xvc2UgYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbiAgICBzaG93KGNsb3NlQnV0dG9uKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKGNsb3NlQnV0dG9uKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgQ2xhc3NcbiAgcG9wdXAuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMucG9wdXA7XG4gIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm1vZGFsKTtcbiAgfVxuXG4gIC8vIEN1c3RvbSBDbGFzc1xuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcyk7XG4gIH1cblxuICAvLyBQcm9ncmVzcyBzdGVwc1xuICB2YXIgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lciA9IGdldFByb2dyZXNzU3RlcHMoKTtcbiAgdmFyIGN1cnJlbnRQcm9ncmVzc1N0ZXAgPSBwYXJzZUludChwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCA9PT0gbnVsbCA/IHN3ZWV0QWxlcnQkMS5nZXRRdWV1ZVN0ZXAoKSA6IHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwLCAxMCk7XG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICBzaG93KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIGVtcHR5KHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICAgIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gICAgfVxuICAgIHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICB2YXIgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGFkZENsYXNzKGNpcmNsZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NjaXJjbGUpO1xuICAgICAgY2lyY2xlLmlubmVySFRNTCA9IHN0ZXA7XG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3MoY2lyY2xlLCBzd2FsQ2xhc3Nlcy5hY3RpdmVwcm9ncmVzc3N0ZXApO1xuICAgICAgfVxuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgICAgaWYgKGluZGV4ICE9PSBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgYWRkQ2xhc3MobGluZSwgc3dhbENsYXNzZXMucHJvZ3Jlc3NsaW5lKTtcbiAgICAgICAgbGluZS5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gICAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIEljb25cbiAgdmFyIGljb25zID0gZ2V0SWNvbnMoKTtcbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgaWNvbnMubGVuZ3RoOyBfaTIrKykge1xuICAgIGhpZGUoaWNvbnNbX2kyXSk7XG4gIH1cbiAgaWYgKHBhcmFtcy50eXBlKSB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGljb25UeXBlIGluIGljb25UeXBlcykge1xuICAgICAgaWYgKHBhcmFtcy50eXBlID09PSBpY29uVHlwZSkge1xuICAgICAgICB2YWxpZFR5cGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIGVycm9yKCdVbmtub3duIGFsZXJ0IHR5cGU6ICcgKyBwYXJhbXMudHlwZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBpY29uID0gcG9wdXAucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJy4nICsgaWNvblR5cGVzW3BhcmFtcy50eXBlXSk7XG4gICAgc2hvdyhpY29uKTtcblxuICAgIC8vIEFuaW1hdGUgaWNvblxuICAgIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgICBzd2l0Y2ggKHBhcmFtcy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIGFkZENsYXNzKGljb24sICdzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbicpO1xuICAgICAgICAgIGFkZENsYXNzKGljb24ucXVlcnlTZWxlY3RvcignLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAnKSwgJ3N3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCcpO1xuICAgICAgICAgIGFkZENsYXNzKGljb24ucXVlcnlTZWxlY3RvcignLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nJyksICdzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICBhZGRDbGFzcyhpY29uLCAnc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uJyk7XG4gICAgICAgICAgYWRkQ2xhc3MoaWNvbi5xdWVyeVNlbGVjdG9yKCcuc3dhbDIteC1tYXJrJyksICdzd2FsMi1hbmltYXRlLXgtbWFyaycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEN1c3RvbSBpbWFnZVxuICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuICBpZiAocGFyYW1zLmltYWdlVXJsKSB7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTtcbiAgICBzaG93KGltYWdlKTtcblxuICAgIGlmIChwYXJhbXMuaW1hZ2VXaWR0aCkge1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaW1hZ2VIZWlnaHQpIHtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICB9XG5cbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgICBpZiAocGFyYW1zLmltYWdlQ2xhc3MpIHtcbiAgICAgIGFkZENsYXNzKGltYWdlLCBwYXJhbXMuaW1hZ2VDbGFzcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGhpZGUoaW1hZ2UpO1xuICB9XG5cbiAgLy8gQ2FuY2VsIGJ1dHRvblxuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoY2FuY2VsQnV0dG9uKTtcbiAgfVxuXG4gIC8vIENvbmZpcm0gYnV0dG9uXG4gIGlmIChwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICByZW1vdmVTdHlsZVByb3BlcnR5KGNvbmZpcm1CdXR0b24sICdkaXNwbGF5Jyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgfVxuXG4gIC8vIEJ1dHRvbnMgd3JhcHBlclxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBoaWRlKGJ1dHRvbnNXcmFwcGVyKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93KGJ1dHRvbnNXcmFwcGVyKTtcbiAgfVxuXG4gIC8vIEVkaXQgdGV4dCBvbiBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICBjb25maXJtQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jb25maXJtQnV0dG9uVGV4dDtcbiAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0O1xuXG4gIC8vIEFSSUEgbGFiZWxzIGZvciBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jb25maXJtQnV0dG9uQXJpYUxhYmVsKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jYW5jZWxCdXR0b25BcmlhTGFiZWwpO1xuXG4gIC8vIFNldCBidXR0b25zIHRvIHNlbGVjdGVkIGJhY2tncm91bmQgY29sb3JzXG4gIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgfVxuXG4gIC8vIEFkZCBidXR0b25zIGN1c3RvbSBjbGFzc2VzXG4gIGNvbmZpcm1CdXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29uZmlybTtcbiAgYWRkQ2xhc3MoY29uZmlybUJ1dHRvbiwgcGFyYW1zLmNvbmZpcm1CdXR0b25DbGFzcyk7XG4gIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jYW5jZWw7XG4gIGFkZENsYXNzKGNhbmNlbEJ1dHRvbiwgcGFyYW1zLmNhbmNlbEJ1dHRvbkNsYXNzKTtcblxuICAvLyBCdXR0b25zIHN0eWxpbmdcbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuXG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgfVxuXG4gIC8vIENTUyBhbmltYXRpb25cbiAgaWYgKHBhcmFtcy5hbmltYXRpb24gPT09IHRydWUpIHtcbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbik7XG4gIH1cblxuICAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cbiAgaWYgKHBhcmFtcy5zaG93TG9hZGVyT25Db25maXJtICYmICFwYXJhbXMucHJlQ29uZmlybSkge1xuICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9saW1vbnRlLmdpdGh1Yi5pby9zd2VldGFsZXJ0Mi8jYWpheC1yZXF1ZXN0Jyk7XG4gIH1cbn07XG5cbi8qKlxuICogQW5pbWF0aW9uc1xuICpcbiAqIEBwYXJhbSBhbmltYXRpb25cbiAqIEBwYXJhbSBvbkJlZm9yZU9wZW5cbiAqIEBwYXJhbSBvbkNvbXBsZXRlXG4gKi9cbnZhciBvcGVuUG9wdXAgPSBmdW5jdGlvbiBvcGVuUG9wdXAoYW5pbWF0aW9uLCBvbkJlZm9yZU9wZW4sIG9uQ29tcGxldGUpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmIChvbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIG9uQmVmb3JlT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uQmVmb3JlT3Blbihwb3B1cCk7XG4gIH1cblxuICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gICAgcmVtb3ZlQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5mYWRlKTtcbiAgfVxuICBzaG93KHBvcHVwKTtcblxuICAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG4gIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmICFoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24pKSB7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gc3dhbENsb3NlRXZlbnRGaW5pc2hlZCgpIHtcbiAgICAgIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQpO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICB9XG5cbiAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keSwgY29udGFpbmVyXSwgc3dhbENsYXNzZXMuc2hvd24pO1xuICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgaU9TZml4KCk7XG4gIH1cbiAgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChvbkNvbXBsZXRlICE9PSBudWxsICYmIHR5cGVvZiBvbkNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkNvbXBsZXRlKHBvcHVwKTtcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIGZpeFNjcm9sbGJhciA9IGZ1bmN0aW9uIGZpeFNjcm9sbGJhcigpIHtcbiAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IG1lYXN1cmVTY3JvbGxiYXIoKSArICdweCc7XG4gIH1cbn07XG5cbnZhciB1bmRvU2Nyb2xsYmFyID0gZnVuY3Rpb24gdW5kb1Njcm9sbGJhcigpIHtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZztcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gIH1cbn07XG5cbi8vIEZpeCBpT1Mgc2Nyb2xsaW5nIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5NjI2MzAyLzEzMzE0MjVcbnZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gIHZhciBpT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuICBpZiAoaU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgdmFyIG9mZnNldCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gb2Zmc2V0ICogLTEgKyAncHgnO1xuICAgIGFkZENsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gIH1cbn07XG5cbnZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgfVxufTtcblxuLy8gU3dlZXRBbGVydCBlbnRyeSBwb2ludFxudmFyIHN3ZWV0QWxlcnQkMSA9IGZ1bmN0aW9uIHN3ZWV0QWxlcnQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgZXhwZWN0cyBhdCBsZWFzdCAxIGF0dHJpYnV0ZSEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gX2V4dGVuZHMoe30sIHBvcHVwUGFyYW1zKTtcblxuICBzd2l0Y2ggKF90eXBlb2YoYXJnc1swXSkpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcGFyYW1zLnRpdGxlID0gYXJnc1swXTtcbiAgICAgIHBhcmFtcy5odG1sID0gYXJnc1sxXTtcbiAgICAgIHBhcmFtcy50eXBlID0gYXJnc1syXTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKGFyZ3NbMF0pO1xuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcbiAgICAgIHBhcmFtcy5leHRyYVBhcmFtcyA9IGFyZ3NbMF0uZXh0cmFQYXJhbXM7XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdlbWFpbCcgJiYgcGFyYW1zLmlucHV0VmFsaWRhdG9yID09PSBudWxsKSB7XG4gICAgICAgIHZhciBpbnB1dFZhbGlkYXRvciA9IGZ1bmN0aW9uIGlucHV0VmFsaWRhdG9yKGVtYWlsKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC87XG4gICAgICAgICAgICBpZiAoZW1haWxSZWdleC50ZXN0KGVtYWlsKSkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBwYXJhbXMuZXhwZWN0UmVqZWN0aW9ucyA/IGlucHV0VmFsaWRhdG9yIDogc3dlZXRBbGVydC5hZGFwdElucHV0VmFsaWRhdG9yKGlucHV0VmFsaWRhdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3VybCcgJiYgcGFyYW1zLmlucHV0VmFsaWRhdG9yID09PSBudWxsKSB7XG4gICAgICAgIHZhciBfaW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiBfaW5wdXRWYWxpZGF0b3IodXJsKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUvMTMzMTQyNVxuICAgICAgICAgICAgdmFyIHVybFJlZ2V4ID0gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIoWy1hLXpBLVowLTlAOiVfKy5+Iz8mLy89XSopJC87XG4gICAgICAgICAgICBpZiAodXJsUmVnZXgudGVzdCh1cmwpKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCgnSW52YWxpZCBVUkwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gcGFyYW1zLmV4cGVjdFJlamVjdGlvbnMgPyBfaW5wdXRWYWxpZGF0b3IgOiBzd2VldEFsZXJ0LmFkYXB0SW5wdXRWYWxpZGF0b3IoX2lucHV0VmFsaWRhdG9yKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHR5cGUgb2YgYXJndW1lbnQhIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJvYmplY3RcIiwgZ290ICcgKyBfdHlwZW9mKGFyZ3NbMF0pKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldFBhcmFtZXRlcnMocGFyYW1zKTtcblxuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCByZXNvbHZpbmcvcmVqZWN0aW5nL3NldHRsaW5nXG4gICAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgodmFsdWUpIHtcbiAgICAgIHN3ZWV0QWxlcnQuY2xvc2VQb3B1cChwYXJhbXMub25DbG9zZSk7XG4gICAgICBpZiAocGFyYW1zLnVzZVJlamVjdGlvbnMpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGRpc21pc3NXaXRoID0gZnVuY3Rpb24gZGlzbWlzc1dpdGgoZGlzbWlzcykge1xuICAgICAgc3dlZXRBbGVydC5jbG9zZVBvcHVwKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgIGlmIChwYXJhbXMudXNlUmVqZWN0aW9ucykge1xuICAgICAgICByZWplY3QoZGlzbWlzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgZGlzbWlzczogZGlzbWlzcyB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBlcnJvcldpdGggPSBmdW5jdGlvbiBlcnJvcldpdGgoZXJyb3IkJDEpIHtcbiAgICAgIHN3ZWV0QWxlcnQuY2xvc2VQb3B1cChwYXJhbXMub25DbG9zZSk7XG4gICAgICByZWplY3QoZXJyb3IkJDEpO1xuICAgIH07XG5cbiAgICAvLyBDbG9zZSBvbiB0aW1lclxuICAgIGlmIChwYXJhbXMudGltZXIpIHtcbiAgICAgIHBvcHVwLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgfSwgcGFyYW1zLnRpbWVyKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgaW5wdXQgZWxlbWVudCBieSBzcGVjaWZpZWQgdHlwZSBvciwgaWYgdHlwZSBpc24ndCBzcGVjaWZpZWQsIGJ5IHBhcmFtcy5pbnB1dFxuICAgIHZhciBnZXRJbnB1dCA9IGZ1bmN0aW9uIGdldElucHV0KGlucHV0VHlwZSkge1xuICAgICAgaW5wdXRUeXBlID0gaW5wdXRUeXBlIHx8IHBhcmFtcy5pbnB1dDtcbiAgICAgIGlmICghaW5wdXRUeXBlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdKTtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNoZWNrYm94ICsgJyBpbnB1dCcpO1xuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFkaW8gKyAnIGlucHV0OmNoZWNrZWQnKSB8fCBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLnJhZGlvICsgJyBpbnB1dDpmaXJzdC1jaGlsZCcpO1xuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucmFuZ2UgKyAnIGlucHV0Jyk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBwb3B1cCBpbnB1dFxuICAgIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gcGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaW5wdXQgYXV0b2ZvY3VzXG4gICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGdldElucHV0KCk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB2YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0odmFsdWUpIHtcbiAgICAgIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgICBzd2VldEFsZXJ0LnNob3dMb2FkaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gICAgICAgIHZhciBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgcGFyYW1zLmV4dHJhUGFyYW1zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwYXJhbXMuZXhwZWN0UmVqZWN0aW9ucykge1xuICAgICAgICAgIHByZUNvbmZpcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN1Y2NlZWRXaXRoKHByZUNvbmZpcm1WYWx1ZSB8fCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpc1Zpc2libGUoZ2V0VmFsaWRhdGlvbkVycm9yKCkpKSB7XG4gICAgICAgICAgICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1Y2NlZWRXaXRoKHByZUNvbmZpcm1WYWx1ZSB8fCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yJCQxKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JXaXRoKGVycm9yJCQxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VjY2VlZFdpdGgodmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBNb3VzZSBpbnRlcmFjdGlvbnNcbiAgICB2YXIgb25CdXR0b25FdmVudCA9IGZ1bmN0aW9uIG9uQnV0dG9uRXZlbnQoZXZlbnQpIHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICAgICAgdmFyIHRhcmdldGVkQ29uZmlybSA9IGNvbmZpcm1CdXR0b24gJiYgKGNvbmZpcm1CdXR0b24gPT09IHRhcmdldCB8fCBjb25maXJtQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuICAgICAgdmFyIHRhcmdldGVkQ2FuY2VsID0gY2FuY2VsQnV0dG9uICYmIChjYW5jZWxCdXR0b24gPT09IHRhcmdldCB8fCBjYW5jZWxCdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG5cbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICAgIGNhc2UgJ21vdXNldXAnOlxuICAgICAgICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yLCAtMC4xKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvciwgLTAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgICAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsKSB7XG4gICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckx1bWluYW5jZShwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yLCAtMC4yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTHVtaW5hbmNlKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvciwgLTAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgLy8gQ2xpY2tlZCAnY29uZmlybSdcbiAgICAgICAgICBpZiAodGFyZ2V0ZWRDb25maXJtICYmIHN3ZWV0QWxlcnQuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaW5wdXQpIHtcbiAgICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIHBhcmFtcy5leHRyYVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5leHBlY3RSZWplY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5lbmFibGVCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dlZXRBbGVydC5lbmFibGVCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LmVuYWJsZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzd2VldEFsZXJ0LnNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IkJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yV2l0aChlcnJvciQkMSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZmlybSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xpY2tlZCAnY2FuY2VsJ1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwgJiYgc3dlZXRBbGVydC5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgc3dlZXRBbGVydC5kaXNhYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgZGlzbWlzc1dpdGgoJ2NhbmNlbCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbnMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvbnNbaV0ub25jbGljayA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdmVyID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZW91dCA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2Vkb3duID0gb25CdXR0b25FdmVudDtcbiAgICB9XG5cbiAgICAvLyBDbG9zaW5nIHBvcHVwIGJ5IGNsb3NlIGJ1dHRvblxuICAgIGdldENsb3NlQnV0dG9uKCkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc21pc3NXaXRoKCdjbG9zZScpO1xuICAgIH07XG5cbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICAvLyBDbG9zaW5nIHBvcHVwIGJ5IG92ZXJsYXkgY2xpY2tcbiAgICAgIHBvcHVwLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IHBvcHVwIHx8IHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiB8fCBwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgc3dlZXRBbGVydC5jbG9zZVBvcHVwKHBhcmFtcy5vbkNsb3NlKTtcbiAgICAgICAgICBkaXNtaXNzV2l0aCgnb3ZlcmxheScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG5cbiAgICAgIC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuICAgICAgcG9wdXAub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnRhaW5lci5vbm1vdXNldXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcbiAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgY29udGFpbmVyIGJ1dCBtb3VzZXVwIG9uIHRoZSBwb3B1cFxuICAgICAgY29udGFpbmVyLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBwb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCB8fCBwb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgICBkaXNtaXNzV2l0aCgnb3ZlcmxheScpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBidXR0b25zV3JhcHBlciA9IGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gICAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuXG4gICAgLy8gUmV2ZXJzZSBidXR0b25zIChDb25maXJtIG9uIHRoZSByaWdodCBzaWRlKVxuICAgIGlmIChwYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuICAgIH1cblxuICAgIC8vIEZvY3VzIGhhbmRsaW5nXG4gICAgdmFyIHNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoaW5kZXgsIGluY3JlbWVudCkge1xuICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMocGFyYW1zLmZvY3VzQ2FuY2VsKTtcbiAgICAgIC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG4gICAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyBpbmNyZW1lbnQ7XG5cbiAgICAgICAgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuICAgICAgICBpZiAoaW5kZXggPT09IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8vIGdvIHRvIGxhc3QgaXRlbVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRldGVybWluZSBpZiBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgICAgdmFyIGVsID0gZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoaXNWaXNpYmxlKGVsKSkge1xuICAgICAgICAgIHJldHVybiBlbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgdmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIHZhciBhcnJvd0tleXMgPSBbJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0xlZnQnLCAnUmlnaHQnLCAnVXAnLCAnRG93bicgLy8gSUUxMVxuICAgICAgXTtcblxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLmlzQ29tcG9zaW5nKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZ2V0SW5wdXQoKSkge1xuICAgICAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN3ZWV0QWxlcnQuY2xpY2tDb25maXJtKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVEFCXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhwYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgICB2YXIgYnRuSW5kZXggPSAtMTsgLy8gRmluZCB0aGUgYnV0dG9uIC0gbm90ZSwgdGhpcyBpcyBhIG5vZGVsaXN0LCBub3QgYW4gYXJyYXkuXG4gICAgICAgIGZvciAodmFyIF9pNCA9IDA7IF9pNCA8IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aDsgX2k0KyspIHtcbiAgICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCA9PT0gZm9jdXNhYmxlRWxlbWVudHNbX2k0XSkge1xuICAgICAgICAgICAgYnRuSW5kZXggPSBfaTQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBDeWNsZSB0byB0aGUgbmV4dCBidXR0b25cbiAgICAgICAgICBzZXRGb2N1cyhidG5JbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIHByZXYgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgICAgfSBlbHNlIGlmIChhcnJvd0tleXMuaW5kZXhPZihlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIC8vIGZvY3VzIENhbmNlbCBidXR0b24gaWYgQ29uZmlybSBidXR0b24gaXMgY3VycmVudGx5IGZvY3VzZWRcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNvbmZpcm1CdXR0b24gJiYgaXNWaXNpYmxlKGNhbmNlbEJ1dHRvbikpIHtcbiAgICAgICAgICBjYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgICAvLyBhbmQgdmljZSB2ZXJzYVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNhbmNlbEJ1dHRvbiAmJiBpc1Zpc2libGUoY29uZmlybUJ1dHRvbikpIHtcbiAgICAgICAgICBjb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFU0NcbiAgICAgIH0gZWxzZSBpZiAoKGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycpICYmIHBhcmFtcy5hbGxvd0VzY2FwZUtleSA9PT0gdHJ1ZSkge1xuICAgICAgICBkaXNtaXNzV2l0aCgnZXNjJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMudG9hc3QgJiYgd2luZG93T25rZXlkb3duT3ZlcnJpZGRlbikge1xuICAgICAgd2luZG93Lm9ua2V5ZG93biA9IHByZXZpb3VzV2luZG93S2V5RG93bjtcbiAgICAgIHdpbmRvd09ua2V5ZG93bk92ZXJyaWRkZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy50b2FzdCAmJiAhd2luZG93T25rZXlkb3duT3ZlcnJpZGRlbikge1xuICAgICAgcHJldmlvdXNXaW5kb3dLZXlEb3duID0gd2luZG93Lm9ua2V5ZG93bjtcbiAgICAgIHdpbmRvd09ua2V5ZG93bk92ZXJyaWRkZW4gPSB0cnVlO1xuICAgICAgd2luZG93Lm9ua2V5ZG93biA9IGhhbmRsZUtleURvd247XG4gICAgfVxuXG4gICAgLy8gTG9hZGluZyBzdGF0ZVxuICAgIGlmIChwYXJhbXMuYnV0dG9uc1N0eWxpbmcpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBzcGlubmVyIGluc3RlYWQgb2YgQ29uZmlybSBidXR0b24gYW5kIGRpc2FibGUgQ2FuY2VsIGJ1dHRvblxuICAgICAqL1xuICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcgPSBzd2VldEFsZXJ0LmRpc2FibGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICAgICAgaGlkZShjb25maXJtQnV0dG9uKTtcbiAgICAgICAgaWYgKCFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgICAgIGhpZGUoZ2V0QnV0dG9uc1dyYXBwZXIoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlbW92ZUNsYXNzKFtwb3B1cCwgYnV0dG9uc1dyYXBwZXJdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICAgIHBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1idXN5Jyk7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5nZXRUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRUaXRsZSgpO1xuICAgIH07XG4gICAgc3dlZXRBbGVydC5nZXRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldENvbnRlbnQoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW5wdXQoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0SW1hZ2UoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0QnV0dG9uc1dyYXBwZXIoKTtcbiAgICB9O1xuICAgIHN3ZWV0QWxlcnQuZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgfTtcbiAgICBzd2VldEFsZXJ0LmdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRDYW5jZWxCdXR0b24oKTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5lbmFibGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQ29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgc3dlZXRBbGVydC5kaXNhYmxlQ29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmVuYWJsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3IgKHZhciBfaTUgPSAwOyBfaTUgPCByYWRpb3MubGVuZ3RoOyBfaTUrKykge1xuICAgICAgICAgIHJhZGlvc1tfaTVdLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0ICYmIGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIHJhZGlvcyA9IHJhZGlvc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgICBmb3IgKHZhciBfaTYgPSAwOyBfaTYgPCByYWRpb3MubGVuZ3RoOyBfaTYrKykge1xuICAgICAgICAgIHJhZGlvc1tfaTZdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTaG93IGJsb2NrIHdpdGggdmFsaWRhdGlvbiBlcnJvclxuICAgIHN3ZWV0QWxlcnQuc2hvd1ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvciQkMSkge1xuICAgICAgdmFyIHZhbGlkYXRpb25FcnJvciA9IGdldFZhbGlkYXRpb25FcnJvcigpO1xuICAgICAgdmFsaWRhdGlvbkVycm9yLmlubmVySFRNTCA9IGVycm9yJCQxO1xuICAgICAgc2hvdyh2YWxpZGF0aW9uRXJyb3IpO1xuXG4gICAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dCgpO1xuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScsIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvcik7XG4gICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIGVycm9yXG4gICAgc3dlZXRBbGVydC5yZXNldFZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3IgPSBnZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICAgIGhpZGUodmFsaWRhdGlvbkVycm9yKTtcblxuICAgICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoKTtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzd2VldEFsZXJ0LmdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLnByb2dyZXNzU3RlcHM7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuc2V0UHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIChwcm9ncmVzc1N0ZXBzKSB7XG4gICAgICBwYXJhbXMucHJvZ3Jlc3NTdGVwcyA9IHByb2dyZXNzU3RlcHM7XG4gICAgICBzZXRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuc2hvd1Byb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzaG93KGdldFByb2dyZXNzU3RlcHMoKSk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuaGlkZVByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBoaWRlKGdldFByb2dyZXNzU3RlcHMoKSk7XG4gICAgfTtcblxuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICAgIHN3ZWV0QWxlcnQuaGlkZUxvYWRpbmcoKTtcbiAgICBzd2VldEFsZXJ0LnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG5cbiAgICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1snaGFzLWlucHV0J10pO1xuICAgIH1cblxuICAgIC8vIGlucHV0c1xuICAgIHZhciBpbnB1dFR5cGVzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuICAgIHZhciBpbnB1dCA9IHZvaWQgMDtcbiAgICBmb3IgKHZhciBfaTcgPSAwOyBfaTcgPCBpbnB1dFR5cGVzLmxlbmd0aDsgX2k3KyspIHtcbiAgICAgIHZhciBpbnB1dENsYXNzID0gc3dhbENsYXNzZXNbaW5wdXRUeXBlc1tfaTddXTtcbiAgICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgaW5wdXRDbGFzcyk7XG4gICAgICBpbnB1dCA9IGdldElucHV0KGlucHV0VHlwZXNbX2k3XSk7XG5cbiAgICAgIC8vIHNldCBhdHRyaWJ1dGVzXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgZm9yICh2YXIgaiBpbiBpbnB1dC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbal0ubmFtZTtcbiAgICAgICAgICAgIGlmIChhdHRyTmFtZSAhPT0gJ3R5cGUnICYmIGF0dHJOYW1lICE9PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGF0dHIgaW4gcGFyYW1zLmlucHV0QXR0cmlidXRlcykge1xuICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgY2xhc3NcbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9IGlucHV0Q2xhc3M7XG4gICAgICBpZiAocGFyYW1zLmlucHV0Q2xhc3MpIHtcbiAgICAgICAgYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIHBhcmFtcy5pbnB1dENsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaGlkZShpbnB1dENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgdmFyIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gdm9pZCAwO1xuICAgIHN3aXRjaCAocGFyYW1zLmlucHV0KSB7XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICd0ZWwnOlxuICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICB2YXIgcmFuZ2UgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnJhbmdlKTtcbiAgICAgICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICB2YXIgcmFuZ2VPdXRwdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKTtcbiAgICAgICAgcmFuZ2VJbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICByYW5nZUlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gICAgICAgIHNob3cocmFuZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgICAgICAgcGxhY2Vob2xkZXIudmFsdWUgPSAnJztcbiAgICAgICAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBwb3B1bGF0ZUlucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICBmb3IgKHZhciBvcHRpb25WYWx1ZSBpbiBpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlO1xuICAgICAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IGlucHV0T3B0aW9uc1tvcHRpb25WYWx1ZV07XG4gICAgICAgICAgICBpZiAocGFyYW1zLmlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gb3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaG93KHNlbGVjdCk7XG4gICAgICAgICAgc2VsZWN0LmZvY3VzKCk7XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnJhZGlvKTtcbiAgICAgICAgcmFkaW8uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICAgICAgZm9yICh2YXIgcmFkaW9WYWx1ZSBpbiBpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHZhciByYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHZhciByYWRpb0xhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICAgICAgICByYWRpb0lucHV0Lm5hbWUgPSBzd2FsQ2xhc3Nlcy5yYWRpbztcbiAgICAgICAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IHJhZGlvVmFsdWUpIHtcbiAgICAgICAgICAgICAgcmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhZGlvTGFiZWxTcGFuLmlubmVySFRNTCA9IGlucHV0T3B0aW9uc1tyYWRpb1ZhbHVlXTtcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICAgICAgICByYWRpb0xhYmVsLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxTcGFuKTtcbiAgICAgICAgICAgIHJhZGlvTGFiZWwuZm9yID0gcmFkaW9JbnB1dC5pZDtcbiAgICAgICAgICAgIHJhZGlvLmFwcGVuZENoaWxkKHJhZGlvTGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaG93KHJhZGlvKTtcbiAgICAgICAgICB2YXIgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICAgICAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgdmFyIGNoZWNrYm94ID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5jaGVja2JveCk7XG4gICAgICAgIHZhciBjaGVja2JveElucHV0ID0gZ2V0SW5wdXQoJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrYm94SW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIGNoZWNrYm94SW5wdXQudmFsdWUgPSAxO1xuICAgICAgICBjaGVja2JveElucHV0LmlkID0gc3dhbENsYXNzZXMuY2hlY2tib3g7XG4gICAgICAgIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IEJvb2xlYW4ocGFyYW1zLmlucHV0VmFsdWUpO1xuICAgICAgICB2YXIgbGFiZWwgPSBjaGVja2JveC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpO1xuICAgICAgICBpZiAobGFiZWwubGVuZ3RoKSB7XG4gICAgICAgICAgY2hlY2tib3gucmVtb3ZlQ2hpbGQobGFiZWxbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBzaG93KGNoZWNrYm94KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICAgICAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgICBzaG93KHRleHRhcmVhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZXJyb3IoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJwYXNzd29yZFwiLCBcIm51bWJlclwiLCBcInRlbFwiLCBcInNlbGVjdFwiLCBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiwgXCJ0ZXh0YXJlYVwiLCBcImZpbGVcIiBvciBcInVybFwiLCBnb3QgXCInICsgcGFyYW1zLmlucHV0ICsgJ1wiJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IHBhcmFtcy5pbnB1dCA9PT0gJ3JhZGlvJykge1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgcGFyYW1zLmlucHV0T3B0aW9ucy50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgICBzd2VldEFsZXJ0LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgcG9wdWxhdGVJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBvcHVsYXRlSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoJ1VuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCBvciBQcm9taXNlLCBnb3QgJyArIF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5Qb3B1cChwYXJhbXMuYW5pbWF0aW9uLCBwYXJhbXMub25CZWZvcmVPcGVuLCBwYXJhbXMub25PcGVuKTtcblxuICAgIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgICBpZiAoIXBhcmFtcy5hbGxvd0VudGVyS2V5KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShjYW5jZWxCdXR0b24pKSB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShjb25maXJtQnV0dG9uKSkge1xuICAgICAgICBjb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZml4IHNjcm9sbFxuICAgIGdldENvbnRhaW5lcigpLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgc3dhbDIgcG9wdXAgaXMgc2hvd25cbiAqL1xuc3dlZXRBbGVydCQxLmlzVmlzaWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICEhZ2V0UG9wdXAoKTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGNoYWluaW5nIHN3ZWV0QWxlcnQgcG9wdXBzXG4gKi9cbnN3ZWV0QWxlcnQkMS5xdWV1ZSA9IGZ1bmN0aW9uIChzdGVwcykge1xuICBxdWV1ZSA9IHN0ZXBzO1xuICB2YXIgcmVzZXRRdWV1ZSA9IGZ1bmN0aW9uIHJlc2V0UXVldWUoKSB7XG4gICAgcXVldWUgPSBbXTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG4gIH07XG4gIHZhciBxdWV1ZVJlc3VsdCA9IFtdO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIChmdW5jdGlvbiBzdGVwKGksIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoaSA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG5cbiAgICAgICAgc3dlZXRBbGVydCQxKHF1ZXVlW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRRdWV1ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRpc21pc3M6IHJlc3VsdC5kaXNtaXNzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldFF1ZXVlKCk7XG4gICAgICAgIHJlc29sdmUoeyB2YWx1ZTogcXVldWVSZXN1bHQgfSk7XG4gICAgICB9XG4gICAgfSkoMCk7XG4gIH0pO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgY3VycmVudCBwb3B1cCBpbiBxdWV1ZVxuICovXG5zd2VldEFsZXJ0JDEuZ2V0UXVldWVTdGVwID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgcG9wdXAgdG8gdGhlIHF1ZXVlXG4gKi9cbnN3ZWV0QWxlcnQkMS5pbnNlcnRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHF1ZXVlLnNwbGljZShpbmRleCwgMCwgc3RlcCk7XG4gIH1cbiAgcmV0dXJuIHF1ZXVlLnB1c2goc3RlcCk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBkZWxldGluZyBhIHBvcHVwIGZyb20gdGhlIHF1ZXVlXG4gKi9cbnN3ZWV0QWxlcnQkMS5kZWxldGVRdWV1ZVN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBxdWV1ZVtpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbG9zZSBzd2VldEFsZXJ0XG4gKi9cbnN3ZWV0QWxlcnQkMS5jbG9zZSA9IHN3ZWV0QWxlcnQkMS5jbG9zZVBvcHVwID0gc3dlZXRBbGVydCQxLmNsb3NlTW9kYWwgPSBzd2VldEFsZXJ0JDEuY2xvc2VUb2FzdCA9IGZ1bmN0aW9uIChvbkNvbXBsZXRlKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgaWYgKCFwb3B1cCkge1xuICAgIHJldHVybjtcbiAgfVxuICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5oaWRlKTtcbiAgY2xlYXJUaW1lb3V0KHBvcHVwLnRpbWVvdXQpO1xuXG4gIGlmICghaXNUb2FzdCgpKSB7XG4gICAgcmVzZXRQcmV2U3RhdGUoKTtcbiAgICB3aW5kb3cub25rZXlkb3duID0gcHJldmlvdXNXaW5kb3dLZXlEb3duO1xuICAgIHdpbmRvd09ua2V5ZG93bk92ZXJyaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHZhciByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUgPSBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKSB7XG4gICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzLnNob3duLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ2hhcy1pbnB1dCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXV0pO1xuXG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgdW5kb1Njcm9sbGJhcigpO1xuICAgICAgdW5kb0lPU2ZpeCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiAhaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm5vYW5pbWF0aW9uKSkge1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQoKSB7XG4gICAgICBwb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKTtcbiAgICAgIGlmIChoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSkpIHtcbiAgICAgICAgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoKTtcbiAgfVxuICBpZiAob25Db21wbGV0ZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25Db21wbGV0ZShwb3B1cCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0JDEuY2xpY2tDb25maXJtID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICovXG5zd2VldEFsZXJ0JDEuY2xpY2tDYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBnZXRDYW5jZWxCdXR0b24oKS5jbGljaygpO1xufTtcblxuLyoqXG4gKiBTaG93IHNwaW5uZXIgaW5zdGVhZCBvZiBDb25maXJtIGJ1dHRvbiBhbmQgZGlzYWJsZSBDYW5jZWwgYnV0dG9uXG4gKi9cbnN3ZWV0QWxlcnQkMS5zaG93TG9hZGluZyA9IHN3ZWV0QWxlcnQkMS5lbmFibGVMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICBpZiAoIXBvcHVwKSB7XG4gICAgc3dlZXRBbGVydCQxKCcnKTtcbiAgfVxuICBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciBidXR0b25zV3JhcHBlciA9IGdldEJ1dHRvbnNXcmFwcGVyKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG5cbiAgc2hvdyhidXR0b25zV3JhcHBlcik7XG4gIHNob3coY29uZmlybUJ1dHRvbiwgJ2lubGluZS1ibG9jaycpO1xuICBhZGRDbGFzcyhbcG9wdXAsIGJ1dHRvbnNXcmFwcGVyXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIGNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSk7XG4gIHBvcHVwLmZvY3VzKCk7XG59O1xuXG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5zd2VldEFsZXJ0JDEuaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIChwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIGRlZmF1bHRQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW1OYW1lKSB8fCBwYXJhbU5hbWUgPT09ICdleHRyYVBhcmFtcyc7XG59O1xuXG4vKipcbiAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cbnN3ZWV0QWxlcnQkMS5pc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiAocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZXByZWNhdGVkUGFyYW1zLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG59O1xuXG4vKipcbiAqIFNldCBkZWZhdWx0IHBhcmFtcyBmb3IgZWFjaCBwb3B1cFxuICogQHBhcmFtIHtPYmplY3R9IHVzZXJQYXJhbXNcbiAqL1xuc3dlZXRBbGVydCQxLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKHVzZXJQYXJhbXMpIHtcbiAgaWYgKCF1c2VyUGFyYW1zIHx8ICh0eXBlb2YgdXNlclBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodXNlclBhcmFtcykpICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBlcnJvcigndGhlIGFyZ3VtZW50IGZvciBzZXREZWZhdWx0cygpIGlzIHJlcXVpcmVkIGFuZCBoYXMgdG8gYmUgYSBvYmplY3QnKTtcbiAgfVxuXG4gIHNob3dXYXJuaW5nc0ZvclBhcmFtcyh1c2VyUGFyYW1zKTtcblxuICAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gdXNlclBhcmFtcyB0byBwb3B1cFBhcmFtc1xuICBmb3IgKHZhciBwYXJhbSBpbiB1c2VyUGFyYW1zKSB7XG4gICAgaWYgKHN3ZWV0QWxlcnQkMS5pc1ZhbGlkUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgcG9wdXBQYXJhbXNbcGFyYW1dID0gdXNlclBhcmFtc1twYXJhbV07XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFJlc2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKi9cbnN3ZWV0QWxlcnQkMS5yZXNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICBwb3B1cFBhcmFtcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zKTtcbn07XG5cbi8qKlxuICogQWRhcHQgYSBsZWdhY3kgaW5wdXRWYWxpZGF0b3IgZm9yIHVzZSB3aXRoIGV4cGVjdFJlamVjdGlvbnM9ZmFsc2VcbiAqL1xuc3dlZXRBbGVydCQxLmFkYXB0SW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiAobGVnYWN5VmFsaWRhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhZGFwdGVkSW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpIHtcbiAgICByZXR1cm4gbGVnYWN5VmFsaWRhdG9yLmNhbGwodGhpcywgaW5wdXRWYWx1ZSwgZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBmdW5jdGlvbiAodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9yO1xuICAgIH0pO1xuICB9O1xufTtcblxuc3dlZXRBbGVydCQxLm5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuc3dlZXRBbGVydCQxLnZlcnNpb24gPSAnNy4xLjInO1xuXG5zd2VldEFsZXJ0JDEuZGVmYXVsdCA9IHN3ZWV0QWxlcnQkMTtcblxuLyoqXG4gKiBTZXQgZGVmYXVsdCBwYXJhbXMgaWYgYHdpbmRvdy5fc3dhbERlZmF1bHRzYCBpcyBhbiBvYmplY3RcbiAqL1xuaWYgKF90eXBlb2Yod2luZG93Ll9zd2FsRGVmYXVsdHMpID09PSAnb2JqZWN0Jykge1xuICBzd2VldEFsZXJ0JDEuc2V0RGVmYXVsdHMod2luZG93Ll9zd2FsRGVmYXVsdHMpO1xufVxuXG4vLyBSZW1lbWJlciBzdGF0ZSBpbiBjYXNlcyB3aGVyZSBvcGVuaW5nIGFuZCBoYW5kbGluZyBhIG1vZGFsIHdpbGwgZmlkZGxlIHdpdGggaXQuXG52YXIgc3RhdGVzID0ge1xuICBwcmV2aW91c0FjdGl2ZUVsZW1lbnQ6IG51bGwsXG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcblxuICAvLyBEZXRlY3QgTm9kZSBlbnZcbn07dmFyIGlzTm9kZUVudiA9IGZ1bmN0aW9uIGlzTm9kZUVudigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuXG4vKlxuICogQWRkIG1vZGFsICsgb3ZlcmxheSB0byBET01cbiAqL1xudmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAvLyBDbGVhbiB1cCB0aGUgb2xkIHBvcHVwIGlmIGl0IGV4aXN0c1xuICB2YXIgYyA9IGdldENvbnRhaW5lcigpO1xuICBpZiAoYykge1xuICAgIGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTtcbiAgICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1snaGFzLWlucHV0J10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddXSk7XG4gIH1cblxuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHN3ZWV0SFRNTDtcblxuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0O1xuICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgdmFyIHJhbmdlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgaW5wdXQnKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gcG9wdXAucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICcgb3V0cHV0Jyk7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gIHZhciBjaGVja2JveCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnIGlucHV0Jyk7XG4gIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuXG4gIC8vIGExMXlcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCBwYXJhbXMudG9hc3QgPyAncG9saXRlJyA6ICdhc3NlcnRpdmUnKTtcblxuICB2YXIgcmVzZXRWYWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBzd2VldEFsZXJ0JDEuaXNWaXNpYmxlKCkgJiYgc3dlZXRBbGVydCQxLnJlc2V0VmFsaWRhdGlvbkVycm9yKCk7XG4gIH07XG5cbiAgaW5wdXQub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uRXJyb3I7XG4gIHNlbGVjdC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICBjaGVja2JveC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbkVycm9yO1xuICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uRXJyb3I7XG5cbiAgcmFuZ2Uub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXNldFZhbGlkYXRpb25FcnJvcigpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICByYW5nZS5wcmV2aW91c1NpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcblxuICByZXR1cm4gcG9wdXA7XG59O1xuXG4vKlxuICogTWFuaXB1bGF0ZSBET01cbiAqL1xuXG52YXIgc3dlZXRIVE1MID0gKCdcXG4gPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsbGVkYnk9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCIgYXJpYS1kZXNjcmliZWRieT1cIicgKyBzd2FsQ2xhc3Nlcy5jb250ZW50ICsgJ1wiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnBvcHVwICsgJ1wiIHRhYmluZGV4PVwiLTFcIj5cXG4gICA8dWwgY2xhc3M9XCInICsgc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcyArICdcIj48L3VsPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5lcnJvciArICdcIj5cXG4gICAgIDxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrXCI+PHNwYW4gY2xhc3M9XCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcIj48L3NwYW4+PC9zcGFuPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5xdWVzdGlvbiArICdcIj4/PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5pY29uICsgJyAnICsgaWNvblR5cGVzLndhcm5pbmcgKyAnXCI+ITwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaWNvbiArICcgJyArIGljb25UeXBlcy5pbmZvICsgJ1wiPmk8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmljb24gKyAnICcgKyBpY29uVHlwZXMuc3VjY2VzcyArICdcIj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFwiPjwvZGl2PlxcbiAgICAgPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCI+PC9zcGFuPlxcbiAgICAgPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtcmluZ1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1maXhcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8aW1nIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmltYWdlICsgJ1wiIC8+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5jb250ZW50d3JhcHBlciArICdcIj5cXG4gICA8aDIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCIgaWQ9XCInICsgc3dhbENsYXNzZXMudGl0bGUgKyAnXCI+PC9oMj5cXG4gICA8ZGl2IGlkPVwiJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQgKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY29udGVudCArICdcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gICA8aW5wdXQgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuaW5wdXQgKyAnXCIgLz5cXG4gICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5maWxlICsgJ1wiIC8+XFxuICAgPGRpdiBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy5yYW5nZSArICdcIj5cXG4gICAgIDxvdXRwdXQ+PC9vdXRwdXQ+XFxuICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgLz5cXG4gICA8L2Rpdj5cXG4gICA8c2VsZWN0IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnNlbGVjdCArICdcIj48L3NlbGVjdD5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLnJhZGlvICsgJ1wiPjwvZGl2PlxcbiAgIDxsYWJlbCBmb3I9XCInICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY2hlY2tib3ggKyAnXCI+XFxuICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cXG4gICA8L2xhYmVsPlxcbiAgIDx0ZXh0YXJlYSBjbGFzcz1cIicgKyBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSArICdcIj48L3RleHRhcmVhPlxcbiAgIDxkaXYgY2xhc3M9XCInICsgc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yICsgJ1wiIGlkPVwiJyArIHN3YWxDbGFzc2VzLnZhbGlkYXRpb25lcnJvciArICdcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmJ1dHRvbnN3cmFwcGVyICsgJ1wiPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY29uZmlybSArICdcIj5PSzwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgc3dhbENsYXNzZXMuY2FuY2VsICsgJ1wiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHN3YWxDbGFzc2VzLmNsb3NlICsgJ1wiPlxceEQ3PC9idXR0b24+XFxuIDwvZGl2PlxcbicpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxudmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5jb250YWluZXIpO1xufTtcblxudmFyIGdldFBvcHVwID0gZnVuY3Rpb24gZ2V0UG9wdXAoKSB7XG4gIHJldHVybiBnZXRDb250YWluZXIoKSA/IGdldENvbnRhaW5lcigpLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMucG9wdXApIDogbnVsbDtcbn07XG5cbnZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLicgKyBzd2FsQ2xhc3Nlcy5pY29uKTtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICByZXR1cm4gZ2V0Q29udGFpbmVyKCkgPyBnZXRDb250YWluZXIoKS5xdWVyeVNlbGVjdG9yKCcuJyArIGNsYXNzTmFtZSkgOiBudWxsO1xufTtcblxudmFyIGdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSk7XG59O1xuXG52YXIgZ2V0Q29udGVudCA9IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jb250ZW50KTtcbn07XG5cbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xufTtcblxudmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucHJvZ3Jlc3NzdGVwcyk7XG59O1xuXG52YXIgZ2V0VmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkVycm9yKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudmFsaWRhdGlvbmVycm9yKTtcbn07XG5cbnZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbmZpcm0pO1xufTtcblxudmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNhbmNlbCk7XG59O1xuXG52YXIgZ2V0QnV0dG9uc1dyYXBwZXIgPSBmdW5jdGlvbiBnZXRCdXR0b25zV3JhcHBlcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmJ1dHRvbnN3cmFwcGVyKTtcbn07XG5cbnZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xufTtcblxudmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IEFycmF5LmZyb20oZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpXG4gIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbiAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChnZXRQb3B1cCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbiwgaW5wdXQ6bm90KFt0eXBlPWhpZGRlbl0pLCB0ZXh0YXJlYSwgc2VsZWN0LCBhLCBbdGFiaW5kZXg9XCIwXCJdJykpO1xuXG4gIHJldHVybiB1bmlxdWVBcnJheShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50cykpO1xufTtcblxudmFyIGlzTW9kYWwgPSBmdW5jdGlvbiBpc01vZGFsKCkge1xuICByZXR1cm4gIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbn07XG5cbnZhciBpc1RvYXN0ID0gZnVuY3Rpb24gaXNUb2FzdCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbn07XG5cbnZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQuZm9jdXMoKTtcblxuICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNS8xMzMxNDI1XG4gICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXQudmFsdWUgPSB2YWw7XG4gIH1cbn07XG5cbnZhciBhZGRPclJlbW92ZUNsYXNzID0gZnVuY3Rpb24gYWRkT3JSZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgYWRkKSB7XG4gIGlmICghdGFyZ2V0IHx8ICFjbGFzc0xpc3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG4gIGNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAodGFyZ2V0LmZvckVhY2gpIHtcbiAgICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGFkZCA/IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIGFkZE9yUmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xufTtcblxudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgYWRkT3JSZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xufTtcblxudmFyIGdldENoaWxkQnlDbGFzcyA9IGZ1bmN0aW9uIGdldENoaWxkQnlDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gZWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0sIGRpc3BsYXkpIHtcbiAgaWYgKCFkaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9IGVsZW0gPT09IGdldFBvcHVwKCkgfHwgZWxlbSA9PT0gZ2V0QnV0dG9uc1dyYXBwZXIoKSA/ICdmbGV4JyA6ICdibG9jayc7XG4gIH1cbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59O1xuXG52YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxudmFyIGVtcHR5ID0gZnVuY3Rpb24gZW1wdHkoZWxlbSkge1xuICB3aGlsZSAoZWxlbS5maXJzdENoaWxkKSB7XG4gICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG4vLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG52YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgcmV0dXJuIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aDtcbn07XG5cbnZhciByZW1vdmVTdHlsZVByb3BlcnR5ID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVQcm9wZXJ0eShlbGVtLCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgfVxufTtcblxudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gZnVuY3Rpb24gKCkge1xuICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgJ1dlYmtpdEFuaW1hdGlvbic6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnXG4gIH07XG4gIGZvciAodmFyIGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgaWYgKHRyYW5zRW5kRXZlbnROYW1lcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiB0eXBlb2YgdGVzdEVsLnN0eWxlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KCk7XG5cbi8vIFJlc2V0IHByZXZpb3VzIHdpbmRvdyBrZXlkb3duIGhhbmRsZXIgYW5kIGZvY3VlZCBlbGVtZW50XG52YXIgcmVzZXRQcmV2U3RhdGUgPSBmdW5jdGlvbiByZXNldFByZXZTdGF0ZSgpIHtcbiAgaWYgKHN0YXRlcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgc3RhdGVzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgIHZhciB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBzdGF0ZXMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgaWYgKHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIElFIGRvZXNuJ3QgaGF2ZSBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gTWVhc3VyZSB3aWR0aCBvZiBzY3JvbGxiYXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9qcy9tb2RhbC5qcyNMMjc5LUwyODZcbnZhciBtZWFzdXJlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgdmFyIHN1cHBvcnRzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7XG4gIGlmIChzdXBwb3J0c1RvdWNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59O1xuXG4vKipcbiAqIEluamVjdCBhIHN0cmluZyBvZiBDU1MgaW50byB0aGUgcGFnZSBoZWFkZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY3NzXG4gKi9cbnZhciBpbmplY3RDU1MgPSBmdW5jdGlvbiBpbmplY3RDU1MoKSB7XG4gIHZhciBjc3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuXG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn07XG5cbmluamVjdENTUyhzdHlsZXMpO1xuXG5yZXR1cm4gc3dlZXRBbGVydCQxO1xuXG59KSkpO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5Td2VldGFsZXJ0Mikgd2luZG93LnN3ZWV0QWxlcnQgPSB3aW5kb3cuc3dhbCA9IHdpbmRvdy5Td2VldGFsZXJ0MjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=