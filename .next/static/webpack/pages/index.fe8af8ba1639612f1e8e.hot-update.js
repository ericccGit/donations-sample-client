self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/donationCard/DonationCard.tsx":
/*!**************************************************!*\
  !*** ./components/donationCard/DonationCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/donationCard/styled.tsx");
/* harmony import */ var _util_displayUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/displayUtil */ "./util/displayUtil.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\components\\donationCard\\DonationCard.tsx",
    _this = undefined;





var DonationCard = function DonationCard(_ref) {
  var email = _ref.email,
      amount = _ref.amount,
      tip = _ref.tip;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Card, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Amount"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Tip"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: (0,_util_displayUtil__WEBPACK_IMPORTED_MODULE_3__.formatAsMoney)(amount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: (0,_util_displayUtil__WEBPACK_IMPORTED_MODULE_3__.formatAsMoney)(tip)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_c = DonationCard;
/* harmony default export */ __webpack_exports__["default"] = (DonationCard);

var _c;

$RefreshReg$(_c, "DonationCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./util/displayUtil.ts":
/*!*****************************!*\
  !*** ./util/displayUtil.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatAsMoney": function() { return /* binding */ formatAsMoney; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
//number of decimal places for $
var DEC_PLCS = 2;
var formatAsMoney = function formatAsMoney(amt) {
  return "$".concat(amt ? amt.toFixed(DEC_PLCS) : "0.00");
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb25hdGlvbkNhcmQvRG9uYXRpb25DYXJkLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9kaXNwbGF5VXRpbC50cyJdLCJuYW1lcyI6WyJEb25hdGlvbkNhcmQiLCJlbWFpbCIsImFtb3VudCIsInRpcCIsImZvcm1hdEFzTW9uZXkiLCJERUNfUExDUyIsImFtdCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsWUFBNkIsR0FBRyxTQUFoQ0EsWUFBZ0MsT0FBMEI7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLE1BQWlCLFFBQWpCQSxNQUFpQjtBQUFBLE1BQVRDLEdBQVMsUUFBVEEsR0FBUztBQUM1RCxzQkFDSSw4REFBQyx5Q0FBRDtBQUFBLDRCQUNJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0ksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJLDhEQUFDLHlDQUFEO0FBQUEsZ0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0ksOERBQUMseUNBQUQ7QUFBQSxnQkFBT0csZ0VBQWEsQ0FBQ0YsTUFBRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNSSw4REFBQyx5Q0FBRDtBQUFBLGdCQUFPRSxnRUFBYSxDQUFDRCxHQUFEO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBWEQ7O0tBQU1ILFk7QUFhTiwrREFBZUEsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBLElBQU1LLFFBQVEsR0FBRyxDQUFqQjtBQUVPLElBQU1ELGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0UsR0FBRDtBQUFBLG9CQUN2QkEsR0FBRyxHQUFHQSxHQUFHLENBQUNDLE9BQUosQ0FBWUYsUUFBWixDQUFILEdBQTJCLE1BRFA7QUFBQSxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZThhZjhiYTE2Mzk2MTJmMWU4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBMYWJlbCwgRGF0YX0gZnJvbSBcIi4vc3R5bGVkXCI7XHJcbmltcG9ydCB7IGZvcm1hdEFzTW9uZXkgfSBmcm9tIFwiLi4vLi4vdXRpbC9kaXNwbGF5VXRpbFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGVtYWlsOiBzdHJpbmcsXHJcbiAgICBhbW91bnQ6IG51bWJlcixcclxuICAgIHRpcDogbnVtYmVyLFxyXG59XHJcblxyXG5jb25zdCBEb25hdGlvbkNhcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7ZW1haWwsIGFtb3VudCwgdGlwfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPExhYmVsPkVtYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgPExhYmVsPkFtb3VudDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxMYWJlbD5UaXA8L0xhYmVsPlxyXG4gICAgICAgICAgICA8RGF0YT57ZW1haWx9PC9EYXRhPlxyXG4gICAgICAgICAgICA8RGF0YT57Zm9ybWF0QXNNb25leShhbW91bnQpfTwvRGF0YT5cclxuICAgICAgICAgICAgPERhdGE+e2Zvcm1hdEFzTW9uZXkodGlwKX08L0RhdGE+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb25hdGlvbkNhcmRcclxuIiwiLy9udW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgZm9yICRcclxuY29uc3QgREVDX1BMQ1MgPSAyO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdEFzTW9uZXkgPSAoYW10IDogbnVtYmVyKSA9PlxyXG4gIGAkJHthbXQgPyBhbXQudG9GaXhlZChERUNfUExDUykgOiBcIjAuMDBcIn1gOyJdLCJzb3VyY2VSb290IjoiIn0=