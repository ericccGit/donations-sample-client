(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/donationCard/DonationCard.tsx":
/*!**************************************************!*\
  !*** ./components/donationCard/DonationCard.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/donationCard/styled.tsx");
/* harmony import */ var _util_displayUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/displayUtil */ "./util/displayUtil.ts");

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\components\\donationCard\\DonationCard.tsx";




const DonationCard = ({
  email,
  amount,
  tip
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Card, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Amount"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Tip"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: (0,_util_displayUtil__WEBPACK_IMPORTED_MODULE_3__.formatAsMoney)(amount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: (0,_util_displayUtil__WEBPACK_IMPORTED_MODULE_3__.formatAsMoney)(tip)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DonationCard);

/***/ }),

/***/ "./components/donationCard/styled.tsx":
/*!********************************************!*\
  !*** ./components/donationCard/styled.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": function() { return /* binding */ Card; },
/* harmony export */   "Label": function() { return /* binding */ Label; },
/* harmony export */   "Data": function() { return /* binding */ Data; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Card",
  componentId: "zbesrq-0"
})(["width:100%;height:4em;margin:1em;background-color:", ";color:", ";padding:5px;border-radius:0px 0px 3px 3px;display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:1fr 1fr;box-shadow:2px 2px 10px ", ";"], props => props.theme.CARD_BG, props => props.theme.CARD_TEXT_PRIMARY, props => props.theme.CARD_ACCENT_1);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Label",
  componentId: "zbesrq-1"
})(["justify-self:center;align-self:center;color:", ";"], props => props.theme.CARD_TEXT_SECONDARY);
const Data = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Data",
  componentId: "zbesrq-2"
})(["justify-self:center;align-self:center;"]);

/***/ }),

/***/ "./components/donationListPage/DonationListPage.tsx":
/*!**********************************************************!*\
  !*** ./components/donationListPage/DonationListPage.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/styled */ "./components/ui/styled.tsx");
/* harmony import */ var _donationList_DonationList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donationList/DonationList */ "./components/donationListPage/donationList/DonationList.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/donationListPage/styled.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\components\\donationListPage\\DonationListPage.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const DONATIONS = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  query {
    returnAllDonations {
      user {
        email
      }
      amount
      tip
    }
  }
`;

const DonationListPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const queryReturn = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(DONATIONS, {
    fetchPolicy: "no-cache"
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Fixed, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_styled__WEBPACK_IMPORTED_MODULE_1__.ButtonPrimary, {
        onClick: () => {
          router.push("/donate");
        },
        disabled: false,
        children: "Donate"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Layout, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_donationList_DonationList__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, queryReturn), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (DonationListPage);

/***/ }),

/***/ "./components/donationListPage/donationList/DonationList.tsx":
/*!*******************************************************************!*\
  !*** ./components/donationListPage/donationList/DonationList.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _donationCard_DonationCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../donationCard/DonationCard */ "./components/donationCard/DonationCard.tsx");

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\components\\donationListPage\\donationList\\DonationList.tsx";


const DonationList = ({
  loading,
  data,
  error
}) => {
  /*
    In practice I would split the loading/error handling into seperate components and 
    only pass data to the list component, but for the sake of keeping things quick and simple...
    */
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 23
  }, undefined);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Error :("
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 21
  }, undefined);
  return data.returnAllDonations.map(({
    user,
    amount,
    tip
  }, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_donationCard_DonationCard__WEBPACK_IMPORTED_MODULE_1__.default, {
    email: user.email,
    amount: amount,
    tip: tip
  }, idx, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }, undefined));
};

/* harmony default export */ __webpack_exports__["default"] = (DonationList);

/***/ }),

/***/ "./components/donationListPage/styled.tsx":
/*!************************************************!*\
  !*** ./components/donationListPage/styled.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; },
/* harmony export */   "Fixed": function() { return /* binding */ Fixed; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 //Not responsive layout - quick and dirty
//tested for desktop only

const Layout = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Layout",
  componentId: "sc-1ppfc4h-0"
})(["padding:0 100px 0 110px;"]);
const Fixed = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styled__Fixed",
  componentId: "sc-1ppfc4h-1"
})(["position:fixed;padding:1em;"]);

/***/ }),

/***/ "./components/ui/styled.tsx":
/*!**********************************!*\
  !*** ./components/ui/styled.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonPrimary": function() { return /* binding */ ButtonPrimary; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ButtonPrimary = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styled__ButtonPrimary",
  componentId: "sc-35t1fv-0"
})(["display:inline-flex;justify-content:center;align-items:center;font-weight:400;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:2px solid transparent;padding:1em;font-size:16px;border-radius:3px;color:", ";background-color:", ";&:hover{cursor:pointer;}", ""], props => props.theme.BUTTON_PRIMARY_TEXT, props => props.theme.BUTTON_PRIMARY, p => p.disabled && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["opacity:0.5;"]));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_donationListPage_DonationListPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/donationListPage/DonationListPage */ "./components/donationListPage/DonationListPage.tsx");

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\pages\\index.tsx";


function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donationListPage_DonationListPage__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./util/displayUtil.ts":
/*!*****************************!*\
  !*** ./util/displayUtil.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatAsMoney": function() { return /* binding */ formatAsMoney; }
/* harmony export */ });
//number of decimal places for $
const DEC_PLCS = 2;
/**
 * Converts a number to a formatted money ($) string.
 * @param amt Money Amount
 * @returns Formatted money string
 */

const formatAsMoney = amt => `$${amt ? amt.toFixed(DEC_PLCS) : "0.00"}`;

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC8uL2NvbXBvbmVudHMvZG9uYXRpb25DYXJkL0RvbmF0aW9uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL2RvbmF0aW9uQ2FyZC9zdHlsZWQudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkxpc3RQYWdlL0RvbmF0aW9uTGlzdFBhZ2UudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkxpc3RQYWdlL2RvbmF0aW9uTGlzdC9Eb25hdGlvbkxpc3QudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkxpc3RQYWdlL3N0eWxlZC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL3VpL3N0eWxlZC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi91dGlsL2Rpc3BsYXlVdGlsLnRzIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkRvbmF0aW9uQ2FyZCIsImVtYWlsIiwiYW1vdW50IiwidGlwIiwiZm9ybWF0QXNNb25leSIsIkNhcmQiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiQ0FSRF9CRyIsIkNBUkRfVEVYVF9QUklNQVJZIiwiQ0FSRF9BQ0NFTlRfMSIsIkxhYmVsIiwiQ0FSRF9URVhUX1NFQ09OREFSWSIsIkRhdGEiLCJET05BVElPTlMiLCJncWwiLCJEb25hdGlvbkxpc3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnlSZXR1cm4iLCJ1c2VRdWVyeSIsImZldGNoUG9saWN5IiwicHVzaCIsIkRvbmF0aW9uTGlzdCIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJyZXR1cm5BbGxEb25hdGlvbnMiLCJtYXAiLCJ1c2VyIiwiaWR4IiwiTGF5b3V0IiwiRml4ZWQiLCJCdXR0b25QcmltYXJ5IiwiQlVUVE9OX1BSSU1BUllfVEVYVCIsIkJVVFRPTl9QUklNQVJZIiwicCIsImRpc2FibGVkIiwiY3NzIiwiSG9tZVBhZ2UiLCJERUNfUExDUyIsImFtdCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUEsWUFBNkIsR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsUUFBVDtBQUFpQkM7QUFBakIsQ0FBRCxLQUE0QjtBQUNoRSxzQkFDRSw4REFBQyx5Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFLDhEQUFDLHlDQUFEO0FBQUEsZ0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtF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SUEsTUFBTTJCLEtBQUssR0FBRzNCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG1DQUFYLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7QUFFTyxNQUFNNEIsYUFBYSxHQUFHNUIsMEVBQUg7QUFBQTtBQUFBO0FBQUEsc1VBY2RDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVkyQixtQkFkUixFQWVINUIsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWTRCLGNBZm5CLEVBcUJyQkMsQ0FBRCxJQUNBQSxDQUFDLENBQUNDLFFBQUYsSUFDQUMsc0RBREEsa0JBdEJzQixDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbEIsc0JBQU8sOERBQUMsa0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1yQyxhQUFhLEdBQUlzQyxHQUFELElBQzFCLElBQUdBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxPQUFKLENBQVlGLFFBQVosQ0FBSCxHQUEyQixNQUFPLEVBRHBDLEM7Ozs7Ozs7Ozs7O0FDUlAsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIExhYmVsLCBEYXRhIH0gZnJvbSBcIi4vc3R5bGVkXCI7XHJcbmltcG9ydCB7IGZvcm1hdEFzTW9uZXkgfSBmcm9tIFwiLi4vLi4vdXRpbC9kaXNwbGF5VXRpbFwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG4gIHRpcDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBEb25hdGlvbkNhcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGVtYWlsLCBhbW91bnQsIHRpcCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8TGFiZWw+RW1haWw8L0xhYmVsPlxyXG4gICAgICA8TGFiZWw+QW1vdW50PC9MYWJlbD5cclxuICAgICAgPExhYmVsPlRpcDwvTGFiZWw+XHJcbiAgICAgIDxEYXRhPntlbWFpbH08L0RhdGE+XHJcbiAgICAgIDxEYXRhPntmb3JtYXRBc01vbmV5KGFtb3VudCl9PC9EYXRhPlxyXG4gICAgICA8RGF0YT57Zm9ybWF0QXNNb25leSh0aXApfTwvRGF0YT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9uYXRpb25DYXJkO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNGVtO1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5DQVJEX0JHfTtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLkNBUkRfVEVYVF9QUklNQVJZfTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAzcHggM3B4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5DQVJEX0FDQ0VOVF8xfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5kaXZgXHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuQ0FSRF9URVhUX1NFQ09OREFSWX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YSA9IHN0eWxlZC5kaXZgXHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBCdXR0b25QcmltYXJ5IH0gZnJvbSBcIi4uL3VpL3N0eWxlZFwiO1xyXG5pbXBvcnQgRG9uYXRpb25MaXN0IGZyb20gXCIuL2RvbmF0aW9uTGlzdC9Eb25hdGlvbkxpc3RcIjtcclxuaW1wb3J0IHsgRml4ZWQsIExheW91dCB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgRE9OQVRJT05TID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIHJldHVybkFsbERvbmF0aW9ucyB7XHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgIH1cclxuICAgICAgYW1vdW50XHJcbiAgICAgIHRpcFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERvbmF0aW9uTGlzdFBhZ2U6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBxdWVyeVJldHVybiA9IHVzZVF1ZXJ5KERPTkFUSU9OUywgeyBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZpeGVkPlxyXG4gICAgICAgIDxCdXR0b25QcmltYXJ5XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2RvbmF0ZVwiKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRG9uYXRlXHJcbiAgICAgICAgPC9CdXR0b25QcmltYXJ5PlxyXG4gICAgICA8L0ZpeGVkPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxEb25hdGlvbkxpc3Qgey4uLnF1ZXJ5UmV0dXJufSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb25hdGlvbkxpc3RQYWdlO1xyXG4iLCJpbXBvcnQgRG9uYXRpb25DYXJkIGZyb20gXCIuLi8uLi9kb25hdGlvbkNhcmQvRG9uYXRpb25DYXJkXCI7XHJcbmltcG9ydCB7IFF1ZXJ5UmVzdWx0IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgRG9uYXRpb25RdWVyeVJldHVybiB7XHJcbiAgdXNlcjogeyBlbWFpbDogc3RyaW5nIH07XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgdGlwOiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBRdWVyeVJlc3VsdDtcclxuXHJcbmNvbnN0IERvbmF0aW9uTGlzdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfTogUHJvcHMpID0+IHtcclxuICAvKlxyXG4gICAgSW4gcHJhY3RpY2UgSSB3b3VsZCBzcGxpdCB0aGUgbG9hZGluZy9lcnJvciBoYW5kbGluZyBpbnRvIHNlcGVyYXRlIGNvbXBvbmVudHMgYW5kIFxyXG4gICAgb25seSBwYXNzIGRhdGEgdG8gdGhlIGxpc3QgY29tcG9uZW50LCBidXQgZm9yIHRoZSBzYWtlIG9mIGtlZXBpbmcgdGhpbmdzIHF1aWNrIGFuZCBzaW1wbGUuLi5cclxuICAgICovXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciA6KDwvcD47XHJcblxyXG4gIHJldHVybiBkYXRhLnJldHVybkFsbERvbmF0aW9ucy5tYXAoXHJcbiAgICAoeyB1c2VyLCBhbW91bnQsIHRpcCB9OiBEb25hdGlvblF1ZXJ5UmV0dXJuLCBpZHg6IG51bWJlcikgPT4gKFxyXG4gICAgICA8RG9uYXRpb25DYXJkIGtleT17aWR4fSBlbWFpbD17dXNlci5lbWFpbH0gYW1vdW50PXthbW91bnR9IHRpcD17dGlwfSAvPlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb25hdGlvbkxpc3Q7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG4vL05vdCByZXNwb25zaXZlIGxheW91dCAtIHF1aWNrIGFuZCBkaXJ0eVxyXG4vL3Rlc3RlZCBmb3IgZGVza3RvcCBvbmx5XHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAgMTAwcHggMCAxMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaXhlZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25QcmltYXJ5ID0gc3R5bGVkLmJ1dHRvbmBcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogaG9yaXpvbnRhbCBhbGlnbm1lbnQgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiB2ZXJ0aWNhbCBhbGlnbm1lbnQgKi9cclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLkJVVFRPTl9QUklNQVJZX1RFWFR9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5CVVRUT05fUFJJTUFSWX07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJHsocDogeyBkaXNhYmxlZDogYm9vbGVhbiB9KSA9PlxyXG4gICAgcC5kaXNhYmxlZCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBgfVxyXG5gO1xyXG4iLCJpbXBvcnQgRG9uYXRpb25MaXN0UGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9kb25hdGlvbkxpc3RQYWdlL0RvbmF0aW9uTGlzdFBhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiA8RG9uYXRpb25MaXN0UGFnZSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsIi8vbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIGZvciAkXHJcbmNvbnN0IERFQ19QTENTID0gMjtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIG51bWJlciB0byBhIGZvcm1hdHRlZCBtb25leSAoJCkgc3RyaW5nLlxyXG4gKiBAcGFyYW0gYW10IE1vbmV5IEFtb3VudFxyXG4gKiBAcmV0dXJucyBGb3JtYXR0ZWQgbW9uZXkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9ybWF0QXNNb25leSA9IChhbXQ6IG51bWJlcikgPT5cclxuICBgJCR7YW10ID8gYW10LnRvRml4ZWQoREVDX1BMQ1MpIDogXCIwLjAwXCJ9YDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==