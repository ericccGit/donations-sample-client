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
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Amount"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Tip"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: (0,_util_displayUtil__WEBPACK_IMPORTED_MODULE_3__.formatAsMoney)(amount)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_2__.Data, {
      children: (0,_util_displayUtil__WEBPACK_IMPORTED_MODULE_3__.formatAsMoney)(tip)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
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

const Card = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 4em;
  margin: 1em;
  background-color: ${props => props.theme.CARD_BG};
  color: ${props => props.theme.CARD_TEXT_PRIMARY};
  padding: 5px;
  border-radius: 0px 0px 3px 3px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: 2px 2px 10px ${props => props.theme.CARD_ACCENT_1};
`;
const Label = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  justify-self: center;
  align-self: center;
  color: ${props => props.theme.CARD_TEXT_SECONDARY};
`;
const Data = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  justify-self: center;
  align-self: center;
`;

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
  returnAllDonations{
    user {
      email
    },
    amount,
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
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.Layout, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_donationList_DonationList__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, queryReturn), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
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
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 25
  }, undefined);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Error :("
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 23
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
    lineNumber: 18,
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
//for desktop only

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC8uL2NvbXBvbmVudHMvZG9uYXRpb25DYXJkL0RvbmF0aW9uQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL2RvbmF0aW9uQ2FyZC9zdHlsZWQudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkxpc3RQYWdlL0RvbmF0aW9uTGlzdFBhZ2UudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkxpc3RQYWdlL2RvbmF0aW9uTGlzdC9Eb25hdGlvbkxpc3QudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkxpc3RQYWdlL3N0eWxlZC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL3VpL3N0eWxlZC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi91dGlsL2Rpc3BsYXlVdGlsLnRzIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkRvbmF0aW9uQ2FyZCIsImVtYWlsIiwiYW1vdW50IiwidGlwIiwiZm9ybWF0QXNNb25leSIsIkNhcmQiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiQ0FSRF9CRyIsIkNBUkRfVEVYVF9QUklNQVJZIiwiQ0FSRF9BQ0NFTlRfMSIsIkxhYmVsIiwiQ0FSRF9URVhUX1NFQ09OREFSWSIsIkRhdGEiLCJET05BVElPTlMiLCJncWwiLCJEb25hdGlvbkxpc3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnlSZXR1cm4iLCJ1c2VRdWVyeSIsImZldGNoUG9saWN5IiwicHVzaCIsIkRvbmF0aW9uTGlzdCIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJyZXR1cm5BbGxEb25hdGlvbnMiLCJtYXAiLCJ1c2VyIiwiaWR4IiwiTGF5b3V0IiwiRml4ZWQiLCJCdXR0b25QcmltYXJ5IiwiQlVUVE9OX1BSSU1BUllfVEVYVCIsIkJVVFRPTl9QUklNQVJZIiwicCIsImRpc2FibGVkIiwiY3NzIiwiSG9tZVBhZ2UiLCJERUNfUExDUyIsImFtdCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUEsWUFBNkIsR0FBRyxDQUFDO0FBQUNDLE9BQUQ7QUFBUUMsUUFBUjtBQUFnQkM7QUFBaEIsQ0FBRCxLQUEwQjtBQUM1RCxzQkFDSSw4REFBQyx5Q0FBRDtBQUFBLDRCQUNJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJLDhEQUFDLHlDQUFEO0FBQUEsZ0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJ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QUFNLEdBQUcxQix1RUFBSDtBQUFBO0FBQUE7QUFBQSxnQ0FBWjtBQUlBLE1BQU0yQixLQUFLLEdBQUczQix1RUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBWCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBRU8sTUFBTTRCLGFBQWEsR0FBRzVCLDBFQUFIO0FBQUE7QUFBQTtBQUFBLHNVQWNkQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZMkIsbUJBZFIsRUFlSDVCLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVk0QixjQWZuQixFQXFCckJDLENBQUQsSUFDQUEsQ0FBQyxDQUFDQyxRQUFGLElBQ0FDLHNEQURBLGtCQXRCc0IsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQ2xCLHNCQUFPLDhEQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlQSxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQWpCO0FBRU8sTUFBTXJDLGFBQWEsR0FBSXNDLEdBQUQsSUFDMUIsSUFBR0EsR0FBRyxHQUFHQSxHQUFHLENBQUNDLE9BQUosQ0FBWUYsUUFBWixDQUFILEdBQTJCLE1BQU8sRUFEcEMsQzs7Ozs7Ozs7Ozs7QUNIUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgTGFiZWwsIERhdGF9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5pbXBvcnQgeyBmb3JtYXRBc01vbmV5IH0gZnJvbSBcIi4uLy4uL3V0aWwvZGlzcGxheVV0aWxcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgYW1vdW50OiBudW1iZXIsXHJcbiAgICB0aXA6IG51bWJlcixcclxufVxyXG5cclxuY29uc3QgRG9uYXRpb25DYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2VtYWlsLCBhbW91bnQsIHRpcH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxMYWJlbD5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxMYWJlbD5BbW91bnQ8L0xhYmVsPlxyXG4gICAgICAgICAgICA8TGFiZWw+VGlwPC9MYWJlbD5cclxuICAgICAgICAgICAgPERhdGE+e2VtYWlsfTwvRGF0YT5cclxuICAgICAgICAgICAgPERhdGE+e2Zvcm1hdEFzTW9uZXkoYW1vdW50KX08L0RhdGE+XHJcbiAgICAgICAgICAgIDxEYXRhPntmb3JtYXRBc01vbmV5KHRpcCl9PC9EYXRhPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9uYXRpb25DYXJkXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRlbTtcclxuICBtYXJnaW46IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuQ0FSRF9CR307XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5DQVJEX1RFWFRfUFJJTUFSWX07XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggM3B4IDNweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuQ0FSRF9BQ0NFTlRfMX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2YFxyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLkNBUkRfVEVYVF9TRUNPTkRBUll9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGEgPSBzdHlsZWQuZGl2YFxyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuYDtcclxuIiwiaW1wb3J0IHsgQnV0dG9uUHJpbWFyeSB9IGZyb20gXCIuLi91aS9zdHlsZWRcIjtcclxuaW1wb3J0IERvbmF0aW9uTGlzdCBmcm9tIFwiLi9kb25hdGlvbkxpc3QvRG9uYXRpb25MaXN0XCI7XHJcbmltcG9ydCB7IEZpeGVkLCBMYXlvdXQgfSBmcm9tIFwiLi9zdHlsZWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7XHJcbiAgICBncWwsIHVzZVF1ZXJ5XHJcbiAgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmNvbnN0IERPTkFUSU9OUyA9IGdxbGBcclxucXVlcnkge1xyXG4gIHJldHVybkFsbERvbmF0aW9uc3tcclxuICAgIHVzZXIge1xyXG4gICAgICBlbWFpbFxyXG4gICAgfSxcclxuICAgIGFtb3VudCxcclxuICAgIHRpcFxyXG4gIH1cclxufVxyXG5gO1xyXG5cclxuXHJcbmNvbnN0IERvbmF0aW9uTGlzdFBhZ2U6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcXVlcnlSZXR1cm4gPSB1c2VRdWVyeShET05BVElPTlMsIHtmZXRjaFBvbGljeTogXCJuby1jYWNoZVwifSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEZpeGVkPlxyXG4gICAgICAgIDxCdXR0b25QcmltYXJ5IG9uQ2xpY2s9eygpPT57cm91dGVyLnB1c2goXCIvZG9uYXRlXCIpfX0gZGlzYWJsZWQ9e2ZhbHNlfT5Eb25hdGU8L0J1dHRvblByaW1hcnk+XHJcbiAgICAgICAgPC9GaXhlZD5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxEb25hdGlvbkxpc3Qgey4uLnF1ZXJ5UmV0dXJufSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRG9uYXRpb25MaXN0UGFnZTsiLCJpbXBvcnQgRG9uYXRpb25DYXJkIGZyb20gXCIuLi8uLi9kb25hdGlvbkNhcmQvRG9uYXRpb25DYXJkXCI7XHJcbmltcG9ydCB7IFF1ZXJ5UmVzdWx0IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgcXVlcnlSZXR1cm4ge1xyXG4gIHVzZXI6IHtlbWFpbCA6IHN0cmluZ307XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgdGlwOiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBRdWVyeVJlc3VsdDtcclxuXHJcbmNvbnN0IERvbmF0aW9uTGlzdDogUmVhY3QuRkM8UHJvcHM+ID0gKHtsb2FkaW5nLCBkYXRhLCBlcnJvcn0gOiBQcm9wcykgPT4ge1xyXG4gIFxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIDooPC9wPjtcclxuICBcclxuICAgIHJldHVybiBkYXRhLnJldHVybkFsbERvbmF0aW9ucy5tYXAoKHsgdXNlciwgYW1vdW50LCB0aXAgfSA6IHF1ZXJ5UmV0dXJuLCBpZHg6IG51bWJlcikgPT4gKFxyXG4gICAgICA8RG9uYXRpb25DYXJkIGtleT17aWR4fSBlbWFpbD17dXNlci5lbWFpbH0gYW1vdW50PXthbW91bnR9IHRpcD17dGlwfSAvPlxyXG4gICAgKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IERvbmF0aW9uTGlzdDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG4vL05vdCByZXNwb25zaXZlIGxheW91dCAtIHF1aWNrIGFuZCBkaXJ0eSBcclxuLy9mb3IgZGVza3RvcCBvbmx5XHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nOiAwIDEwMHB4IDAgMTEwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRml4ZWQgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbnBhZGRpbmc6IDFlbTtcclxuYDtcclxuXHJcbiIsImltcG9ydCBzdHlsZWQsIHtjc3N9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvblByaW1hcnkgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBob3Jpem9udGFsIGFsaWdubWVudCAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIHZlcnRpY2FsIGFsaWdubWVudCAqL1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuQlVUVE9OX1BSSU1BUllfVEVYVH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLkJVVFRPTl9QUklNQVJZfTtcclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgJHsocCA6IHsgZGlzYWJsZWQgOiBib29sZWFuIH0pID0+XHJcbiAgICBwLmRpc2FibGVkICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGB9XHJcbmA7IiwiaW1wb3J0IERvbmF0aW9uTGlzdFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9uYXRpb25MaXN0UGFnZS9Eb25hdGlvbkxpc3RQYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gPERvbmF0aW9uTGlzdFBhZ2UgLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCIvL251bWJlciBvZiBkZWNpbWFsIHBsYWNlcyBmb3IgJFxyXG5jb25zdCBERUNfUExDUyA9IDI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0QXNNb25leSA9IChhbXQgOiBudW1iZXIpID0+XHJcbiAgYCQke2FtdCA/IGFtdC50b0ZpeGVkKERFQ19QTENTKSA6IFwiMC4wMFwifWA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==