(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/theme */ "./theme/theme.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle`
  html, body {
    font-family: Helvetica, sans-serif;
    background-color: ${props => props.theme.PAGE_BG};
    }
`;
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache()
});

class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_2___default()) {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {
      client: client,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
        theme: _theme_theme__WEBPACK_IMPORTED_MODULE_5__.defaultTheme,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_6__.ToastContainer, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./theme/theme.ts":
/*!************************!*\
  !*** ./theme/theme.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTheme": function() { return /* binding */ defaultTheme; }
/* harmony export */ });
const defaultPalette = {
  VIOLET: "#b715e4",
  LIGHT_1_VIOLET: "#d573f1",
  DARK_1_VIOLET: "#830fa3",
  BLACK: "#110212",
  LIGHT_GREY: "#F0F0F0",
  WHITEISH: "#FCFCFC"
};
const defaultTheme = {
  PAGE_BG: defaultPalette.WHITEISH,
  PAGE_HEADER: defaultPalette.DARK_1_VIOLET,
  CARD_BG: defaultPalette.WHITEISH,
  CARD_ACCENT_1: defaultPalette.LIGHT_GREY,
  CARD_ACCENT_2: defaultPalette.VIOLET,
  CARD_TEXT_PRIMARY: defaultPalette.BLACK,
  CARD_TEXT_SECONDARY: defaultPalette.VIOLET,
  BUTTON_PRIMARY: defaultPalette.DARK_1_VIOLET,
  BUTTON_PRIMARY_TEXT: defaultPalette.WHITEISH,
  FORM_LABEL: defaultPalette.DARK_1_VIOLET
};

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_app_js-node_modules_react-toastify_dist_ReactToastify_css"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vdGhlbWUvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJwcm9wcyIsInRoZW1lIiwiUEFHRV9CRyIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIk15QXBwIiwiQXBwIiwicmVuZGVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGVmYXVsdFRoZW1lIiwiZGVmYXVsdFBhbGV0dGUiLCJWSU9MRVQiLCJMSUdIVF8xX1ZJT0xFVCIsIkRBUktfMV9WSU9MRVQiLCJCTEFDSyIsIkxJR0hUX0dSRVkiLCJXSElURUlTSCIsIlBBR0VfSEVBREVSIiwiQ0FSRF9CRyIsIkNBUkRfQUNDRU5UXzEiLCJDQVJEX0FDQ0VOVF8yIiwiQ0FSRF9URVhUX1BSSU1BUlkiLCJDQVJEX1RFWFRfU0VDT05EQVJZIiwiQlVUVE9OX1BSSU1BUlkiLCJCVVRUT05fUFJJTUFSWV9URVhUIiwiRk9STV9MQUJFTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsZ0VBQW9EO0FBQ3pFO0FBQ0E7QUFDQSx3QkFBeUJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVE7QUFDdkQ7QUFDQSxDQUxBO0FBT0EsTUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQzlCQyxLQUFHLEVBQUUsK0JBRHlCO0FBRTlCQyxPQUFLLEVBQUUsSUFBSUMseURBQUo7QUFGdUIsQ0FBakIsQ0FBZjs7QUFLQSxNQUFNQyxLQUFOLFNBQW9CQyxpREFBcEIsQ0FBd0I7QUFDdEJDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsZUFBRjtBQUFhQztBQUFiLFFBQTJCLEtBQUtaLEtBQXRDO0FBQ0Esd0JBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsWUFBTSxFQUFFRyxNQUF4QjtBQUFBLDZCQUNFLDhEQUFDLDREQUFEO0FBQWUsYUFBSyxFQUFFVSxzREFBdEI7QUFBQSxnQ0FDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVNEOztBQVpxQjs7QUFleEIsK0RBQWVKLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLE1BQU1NLGNBQWMsR0FBRztBQUNyQkMsUUFBTSxFQUFFLFNBRGE7QUFFckJDLGdCQUFjLEVBQUUsU0FGSztBQUdyQkMsZUFBYSxFQUFFLFNBSE07QUFJckJDLE9BQUssRUFBRSxTQUpjO0FBS3JCQyxZQUFVLEVBQUUsU0FMUztBQU1yQkMsVUFBUSxFQUFFO0FBTlcsQ0FBdkI7QUFTTyxNQUFNUCxZQUFtQyxHQUFHO0FBQ2pEWCxTQUFPLEVBQUVZLGNBQWMsQ0FBQ00sUUFEeUI7QUFFakRDLGFBQVcsRUFBRVAsY0FBYyxDQUFDRyxhQUZxQjtBQUdqREssU0FBTyxFQUFFUixjQUFjLENBQUNNLFFBSHlCO0FBSWpERyxlQUFhLEVBQUVULGNBQWMsQ0FBQ0ssVUFKbUI7QUFLakRLLGVBQWEsRUFBRVYsY0FBYyxDQUFDQyxNQUxtQjtBQU1qRFUsbUJBQWlCLEVBQUVYLGNBQWMsQ0FBQ0ksS0FOZTtBQU9qRFEscUJBQW1CLEVBQUVaLGNBQWMsQ0FBQ0MsTUFQYTtBQVFqRFksZ0JBQWMsRUFBRWIsY0FBYyxDQUFDRyxhQVJrQjtBQVNqRFcscUJBQW1CLEVBQUVkLGNBQWMsQ0FBQ00sUUFUYTtBQVVqRFMsWUFBVSxFQUFFZixjQUFjLENBQUNHO0FBVnNCLENBQTVDLEM7Ozs7Ozs7Ozs7O0FDdEJQLDRDOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IElEb25hdGlvbnNDbGllbnRUaGVtZSB9IGZyb20gXCIuLi90aGVtZS90aGVtZVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZTx7IHRoZW1lOiBJRG9uYXRpb25zQ2xpZW50VGhlbWUgfT5gXHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLlBBR0VfQkd9O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9ncmFwaHFsXCIsXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkZWZhdWx0VGhlbWV9PlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElEb25hdGlvbnNDbGllbnRUaGVtZSB7XHJcbiAgUEFHRV9CRzogc3RyaW5nO1xyXG4gIFBBR0VfSEVBREVSOiBzdHJpbmc7XHJcbiAgQ0FSRF9CRzogc3RyaW5nO1xyXG4gIENBUkRfVEVYVF9QUklNQVJZOiBzdHJpbmc7XHJcbiAgQ0FSRF9URVhUX1NFQ09OREFSWTogc3RyaW5nO1xyXG4gIENBUkRfQUNDRU5UXzE6IHN0cmluZztcclxuICBDQVJEX0FDQ0VOVF8yOiBzdHJpbmc7XHJcbiAgQlVUVE9OX1BSSU1BUlk6IHN0cmluZztcclxuICBCVVRUT05fUFJJTUFSWV9URVhUOiBzdHJpbmc7XHJcbiAgRk9STV9MQUJFTDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0UGFsZXR0ZSA9IHtcclxuICBWSU9MRVQ6IFwiI2I3MTVlNFwiLFxyXG4gIExJR0hUXzFfVklPTEVUOiBcIiNkNTczZjFcIixcclxuICBEQVJLXzFfVklPTEVUOiBcIiM4MzBmYTNcIixcclxuICBCTEFDSzogXCIjMTEwMjEyXCIsXHJcbiAgTElHSFRfR1JFWTogXCIjRjBGMEYwXCIsXHJcbiAgV0hJVEVJU0g6IFwiI0ZDRkNGQ1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUaGVtZTogSURvbmF0aW9uc0NsaWVudFRoZW1lID0ge1xyXG4gIFBBR0VfQkc6IGRlZmF1bHRQYWxldHRlLldISVRFSVNILFxyXG4gIFBBR0VfSEVBREVSOiBkZWZhdWx0UGFsZXR0ZS5EQVJLXzFfVklPTEVULFxyXG4gIENBUkRfQkc6IGRlZmF1bHRQYWxldHRlLldISVRFSVNILFxyXG4gIENBUkRfQUNDRU5UXzE6IGRlZmF1bHRQYWxldHRlLkxJR0hUX0dSRVksXHJcbiAgQ0FSRF9BQ0NFTlRfMjogZGVmYXVsdFBhbGV0dGUuVklPTEVULFxyXG4gIENBUkRfVEVYVF9QUklNQVJZOiBkZWZhdWx0UGFsZXR0ZS5CTEFDSyxcclxuICBDQVJEX1RFWFRfU0VDT05EQVJZOiBkZWZhdWx0UGFsZXR0ZS5WSU9MRVQsXHJcbiAgQlVUVE9OX1BSSU1BUlk6IGRlZmF1bHRQYWxldHRlLkRBUktfMV9WSU9MRVQsXHJcbiAgQlVUVE9OX1BSSU1BUllfVEVYVDogZGVmYXVsdFBhbGV0dGUuV0hJVEVJU0gsXHJcbiAgRk9STV9MQUJFTDogZGVmYXVsdFBhbGV0dGUuREFSS18xX1ZJT0xFVCxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==