/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("InstagramLogin", ["react"], factory);
	else if(typeof exports === 'object')
		exports["InstagramLogin"] = factory(require("react"));
	else
		root["InstagramLogin"] = factory(root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.InstagramLogin = void 0;\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst _styles_1 = __webpack_require__(/*! @styles */ \"./src/styles/index.ts\");\nconst _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\nfunction InstagramLogin(_a) {\n    var { clientId, cssClass, children, redirectUri, onFailure, onSuccess } = _a, rest = __rest(_a, [\"clientId\", \"cssClass\", \"children\", \"redirectUri\", \"onFailure\", \"onSuccess\"]);\n    const { tag, type, width, height, scope, implicitAuth, useRedirect, buttonText } = Object.assign(Object.assign({}, rest), { width: 400, height: 800, tag: 'button', type: 'button', useRedirect: false, implicitAuth: false, buttonText: 'Login with Instagram', scope: 'user_profile' });\n    const [hover, setHover] = (0, react_1.useState)(false);\n    const checkInstagramAuthentication = (0, react_1.useCallback)((context) => {\n        const { location } = context;\n        if (implicitAuth) {\n            const [, matchedUrl] = location.hash.match(/=(.*)/) || [];\n            if (matchedUrl) {\n                onSuccess(matchedUrl);\n                return true;\n            }\n        }\n        else if (location.search.includes('code')) {\n            onSuccess((0, _utils_1.getQueryVariable)(location, 'code'));\n            return true;\n        }\n        else if (location.search.includes('error')) {\n            onFailure({\n                error: (0, _utils_1.getQueryVariable)(location, 'error'),\n                error_reason: (0, _utils_1.getQueryVariable)(location, 'error_reason'),\n                error_description: (0, _utils_1.getQueryVariable)(location, 'error_description'),\n            });\n            return true;\n        }\n        return false;\n    }, [implicitAuth, onFailure, onSuccess]);\n    const onCredentialsChanged = (popup, resolve, reject) => {\n        const error = {\n            error: 'closed',\n            error_reason: 'oauth_canceled',\n            error_description: 'User canceled the authentication',\n        };\n        if (popup == null) {\n            onFailure(error);\n            return;\n        }\n        if (!resolve) {\n            return new Promise((res, rej) => onCredentialsChanged(popup, res, rej));\n        }\n        let isFinished;\n        try {\n            isFinished = checkInstagramAuthentication(popup);\n        }\n        catch (err) {\n            // An exception is thrown when we try to access to another website's url\n        }\n        if (isFinished) {\n            popup.close();\n        }\n        else if (popup.closed) {\n            onFailure(error);\n        }\n        else {\n            setTimeout(() => onCredentialsChanged(popup, resolve, reject), 0);\n        }\n    };\n    const oAuthSignIn = ({ url, tab = false }) => {\n        const name = tab ? '_blank' : 'instagram';\n        const popup = (0, _utils_1.openPopup)({ url, name, width, height });\n        onCredentialsChanged(popup);\n    };\n    const onButtonClicked = () => {\n        const _redirectUri = redirectUri || window.location.href;\n        const responseType = implicitAuth ? 'token' : 'code';\n        const url = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${_redirectUri}&response_type=${responseType}&scope=${scope}`;\n        if (useRedirect) {\n            window.location.href = url;\n        }\n        else {\n            oAuthSignIn({ url });\n        }\n    };\n    (0, react_1.useEffect)(() => {\n        checkInstagramAuthentication(window);\n    }, [checkInstagramAuthentication]);\n    return (0, react_1.createElement)(tag, {\n        className: cssClass,\n        onClick: onButtonClicked,\n        onMouseEnter: () => setHover(true),\n        onMouseLeave: () => setHover(false),\n        style: cssClass ? {} : Object.assign(Object.assign({}, _styles_1.style), (hover ? _styles_1.style.hover : null)),\n        type,\n    }, children || buttonText);\n}\nexports.InstagramLogin = InstagramLogin;\n\n\n//# sourceURL=webpack://InstagramLogin/./src/index.tsx?");

/***/ }),

/***/ "./src/styles/index.ts":
/*!*****************************!*\
  !*** ./src/styles/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./styles */ \"./src/styles/styles.ts\"), exports);\n\n\n//# sourceURL=webpack://InstagramLogin/./src/styles/index.ts?");

/***/ }),

/***/ "./src/styles/styles.ts":
/*!******************************!*\
  !*** ./src/styles/styles.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.style = void 0;\nexports.style = {\n    display: 'block',\n    border: 0,\n    borderRadius: 3,\n    boxShadow: 'rgba(0, 0, 0, 0.5) 0 1px 2px',\n    color: '#ffffff',\n    cursor: 'pointer',\n    fontSize: '19px',\n    overflow: 'hidden',\n    padding: '10px',\n    userSelect: 'none',\n    background: 'linear-gradient(to right, rgb(236, 146, 35) 0%, rgb(177, 42, 160) 50%, rgb(105, 14, 224) 100%)',\n    hover: {\n        background: 'linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)',\n    },\n};\n\n\n//# sourceURL=webpack://InstagramLogin/./src/styles/styles.ts?");

/***/ }),

/***/ "./src/utils/Popup.ts":
/*!****************************!*\
  !*** ./src/utils/Popup.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.openPopup = void 0;\nfunction getPopupOffset({ width, height }) {\n    const wLeft = window.screenLeft ? window.screenLeft : window.screenX;\n    const wTop = window.screenTop ? window.screenTop : window.screenY;\n    const left = wLeft + window.innerWidth / 2 - width / 2;\n    const top = wTop + window.innerHeight / 2 - height / 2;\n    return { top, left };\n}\nfunction getPopupDimensions({ width, height }) {\n    const { top, left } = getPopupOffset({ width, height });\n    return `width=${width},height=${height},top=${top},left=${left}`;\n}\nfunction openPopup({ width, height, url, name, }) {\n    const settings = 'scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no';\n    return window.open(url, name, `${settings},${getPopupDimensions({ width, height })}`);\n}\nexports.openPopup = openPopup;\n\n\n//# sourceURL=webpack://InstagramLogin/./src/utils/Popup.ts?");

/***/ }),

/***/ "./src/utils/UrlUtils.ts":
/*!*******************************!*\
  !*** ./src/utils/UrlUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getQueryVariable = void 0;\nfunction getQueryVariable(location, variable) {\n    const query = location.search.substring(1);\n    const queryParams = query.split('&');\n    const [code] = queryParams\n        .map((queryParam) => {\n        const params = queryParam.split('=');\n        return params[0] === variable ? params[1] : null;\n    })\n        .filter((isCodeAvailable) => isCodeAvailable);\n    return code;\n}\nexports.getQueryVariable = getQueryVariable;\n\n\n//# sourceURL=webpack://InstagramLogin/./src/utils/UrlUtils.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./UrlUtils */ \"./src/utils/UrlUtils.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./Popup */ \"./src/utils/Popup.ts\"), exports);\n\n\n//# sourceURL=webpack://InstagramLogin/./src/utils/index.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});