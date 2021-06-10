(function() {
var exports = {};
exports.id = "pages/donate";
exports.ids = ["pages/donate"];
exports.modules = {

/***/ "./components/donationForm/DecimalInput.tsx":
/*!**************************************************!*\
  !*** ./components/donationForm/DecimalInput.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FieldError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldError */ "./components/donationForm/FieldError.tsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/donationForm/styled.tsx");

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\components\\donationForm\\DecimalInput.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




//If a max-length property is specifed, the regex will not work properly without this
const DEFAULT_MAX_LEN = 16; //Input component for restricting the user's inputs to a decimal

const DecimalInput = (_ref) => {
  let {
    type,
    input,
    meta
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["type", "input", "meta"]);

  const baseLen = rest.maxLength || DEFAULT_MAX_LEN;
  const decimalRegex = [new RegExp(`^\\d{0,${baseLen}}(\\.\\d{0,2})?$`)];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!!input.value && !isNaN(Number(input.value)) && !meta.active) {
      input.onChange(Number(input.value).toFixed(2));
    }
  }, [input, input.value, meta.active]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.FormItemCtr, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.FieldLabel, {
      isActive: !!meta.active,
      children: [rest.required && "* ", rest.label]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread(_objectSpread({}, input), {}, {
      type: type,
      autoComplete: "off",
      placeholder: "xx.xx" //{...inputProps}

    }, rest), {}, {
      onChange: ({
        target: {
          value
        }
      }) => {
        for (let regex of decimalRegex) {
          if (regex.test(value)) {
            input.onChange(value);
          }
        }
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, _objectSpread({}, meta), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DecimalInput);

/***/ }),

/***/ "./components/donationForm/DonationForm.tsx":
/*!**************************************************!*\
  !*** ./components/donationForm/DonationForm.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/donationForm/styled.tsx");
/* harmony import */ var _DecimalInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DecimalInput */ "./components/donationForm/DecimalInput.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_validationUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/validationUtil */ "./util/validationUtil.ts");
/* harmony import */ var _ui_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/styled */ "./components/ui/styled.tsx");

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\components\\donationForm\\DonationForm.tsx";









const ADD_DONATION = _apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql`
  mutation CreateDonation($amount: Float!, $tip: Float!, $userId: String!) {
    createDonation(data: { amount: $amount, tip: $tip, userId: $userId }) {
      id
    }
  }
`;
const DEFAULT_USER_ID = "4699519a-733e-466c-9473-3da5808a3293";

const DonationForm = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const [addDonation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(ADD_DONATION, {
    errorPolicy: "all"
  });

  const onSubmit = async values => {
    //Add the donation
    //Don't think this is the nicest way for error handling
    //with appollo client, but seems to work
    try {
      await addDonation({
        variables: {
          amount: parseFloat(values.amount),
          tip: parseFloat(values.tip),
          userId: DEFAULT_USER_ID
        }
      });
    } catch (e) {
      //toast an error and exit
      react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(`Uh oh... there was an error: ${e.message}`);
      return;
    } //Success - toast and return home


    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success("Thank you!!!");
    router.push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: onSubmit,
    initialValues: {
      tip: "0.00"
    },
    render: ({
      handleSubmit,
      submitting,
      pristine
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.FormCtr, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
          name: "amount",
          label: "Amount",
          required: true,
          validate: _util_validationUtil__WEBPACK_IMPORTED_MODULE_8__.required,
          component: _DecimalInput__WEBPACK_IMPORTED_MODULE_4__.default,
          placeholder: "Amount"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Add a tip?",
          name: "tip",
          required: true,
          component: _DecimalInput__WEBPACK_IMPORTED_MODULE_4__.default,
          placeholder: "Plz"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.FormItemCtr, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_styled__WEBPACK_IMPORTED_MODULE_9__.ButtonPrimary, {
            type: "submit",
            disabled: submitting || pristine,
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DonationForm);

/***/ }),

/***/ "./components/donationForm/FieldError.tsx":
/*!************************************************!*\
  !*** ./components/donationForm/FieldError.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldError": function() { return /* binding */ FieldError; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/donationForm/styled.tsx");

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\components\\donationForm\\FieldError.tsx";


const generateErrDisplay = (hasError, error) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_1__.ErrorMsg, {
  isVisible: hasError,
  children: hasError ? error : "-"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

const FieldError = ({
  error,
  active,
  touched
}) => {
  const hasError = !!(touched && !active && !!error);
  return generateErrDisplay(hasError, error);
};

/***/ }),

/***/ "./components/donationForm/styled.tsx":
/*!********************************************!*\
  !*** ./components/donationForm/styled.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldLabel": function() { return /* binding */ FieldLabel; },
/* harmony export */   "FormCtr": function() { return /* binding */ FormCtr; },
/* harmony export */   "FormItemCtr": function() { return /* binding */ FormItemCtr; },
/* harmony export */   "ErrorMsg": function() { return /* binding */ ErrorMsg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FieldLabel = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  color: ${props => props.theme.FORM_LABEL};
  ${props => props.isActive && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: bold;
    `}
`;
const FormCtr = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
`;
const FormItemCtr = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;
const ErrorMsg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  color: ${props => props.theme.FORM_ERROR_MESSAGE};
  font-size: 80%;
  margin-top: 5px;
  font-family: manulifeLight;
  ${props => !props.isVisible && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      visibility: hidden;
    `}
`;

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

/***/ "./pages/donate.tsx":
/*!**************************!*\
  !*** ./pages/donate.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_donationForm_DonationForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/donationForm/DonationForm */ "./components/donationForm/DonationForm.tsx");

var _jsxFileName = "C:\\Users\\cromier\\source\\repos\\donations-sample-client\\pages\\donate.tsx";


function Donate() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donationForm_DonationForm__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Donate);

/***/ }),

/***/ "./util/validationUtil.ts":
/*!********************************!*\
  !*** ./util/validationUtil.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUIRED_MESSAGE": function() { return /* binding */ REQUIRED_MESSAGE; },
/* harmony export */   "required": function() { return /* binding */ required; }
/* harmony export */ });
const REQUIRED_MESSAGE = "Required field";
/**
 * Returns a 'Required Message' if val is null or undefined
 * @param val Feild Value
 * @returns The 'Required Message' or false
 */

const required = val => !val && !(val === 0) && REQUIRED_MESSAGE;

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

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-final-form");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/donate.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC8uL2NvbXBvbmVudHMvZG9uYXRpb25Gb3JtL0RlY2ltYWxJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL2RvbmF0aW9uRm9ybS9Eb25hdGlvbkZvcm0udHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkZvcm0vRmllbGRFcnJvci50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL2RvbmF0aW9uRm9ybS9zdHlsZWQudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy91aS9zdHlsZWQudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vcGFnZXMvZG9uYXRlLnRzeCIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC8uL3V0aWwvdmFsaWRhdGlvblV0aWwudHMiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1maW5hbC1mb3JtXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkRFRkFVTFRfTUFYX0xFTiIsIkRlY2ltYWxJbnB1dCIsInR5cGUiLCJpbnB1dCIsIm1ldGEiLCJyZXN0IiwiYmFzZUxlbiIsIm1heExlbmd0aCIsImRlY2ltYWxSZWdleCIsIlJlZ0V4cCIsInVzZUVmZmVjdCIsInZhbHVlIiwiaXNOYU4iLCJOdW1iZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsInRvRml4ZWQiLCJyZXF1aXJlZCIsImxhYmVsIiwidGFyZ2V0IiwicmVnZXgiLCJ0ZXN0IiwiQUREX0RPTkFUSU9OIiwiZ3FsIiwiREVGQVVMVF9VU0VSX0lEIiwiRG9uYXRpb25Gb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkRG9uYXRpb24iLCJ1c2VNdXRhdGlvbiIsImVycm9yUG9saWN5Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJ2YXJpYWJsZXMiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwidGlwIiwidXNlcklkIiwiZSIsInRvYXN0IiwibWVzc2FnZSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJzdWJtaXR0aW5nIiwicHJpc3RpbmUiLCJnZW5lcmF0ZUVyckRpc3BsYXkiLCJoYXNFcnJvciIsImVycm9yIiwiRmllbGRFcnJvciIsInRvdWNoZWQiLCJGaWVsZExhYmVsIiwic3R5bGVkIiwicHJvcHMiLCJ0aGVtZSIsIkZPUk1fTEFCRUwiLCJpc0FjdGl2ZSIsImNzcyIsIkZvcm1DdHIiLCJGb3JtSXRlbUN0ciIsIkVycm9yTXNnIiwiRk9STV9FUlJPUl9NRVNTQUdFIiwiaXNWaXNpYmxlIiwiQnV0dG9uUHJpbWFyeSIsIkJVVFRPTl9QUklNQVJZX1RFWFQiLCJCVVRUT05fUFJJTUFSWSIsInAiLCJkaXNhYmxlZCIsIkRvbmF0ZSIsIlJFUVVJUkVEX01FU1NBR0UiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7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Q0FWTyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUVPLE1BQU1NLGFBQWEsR0FBR1gsMEVBQUg7QUFBQTtBQUFBO0FBQUEsc1VBY2RDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlVLG1CQWRSLEVBZUhYLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlXLGNBZm5CLEVBcUJyQkMsQ0FBRCxJQUNBQSxDQUFDLENBQUNDLFFBQUYsSUFDQVYsc0RBREEsa0JBdEJzQixDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOztBQUVBLFNBQVNXLE1BQVQsR0FBa0I7QUFDaEIsc0JBQU8sOERBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVBLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05PLE1BQU1DLGdCQUFnQixHQUFHLGdCQUF6QjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTW5ELFFBQVEsR0FBSW9ELEdBQUQsSUFBYyxDQUFDQSxHQUFELElBQVEsRUFBRUEsR0FBRyxLQUFLLENBQVYsQ0FBUixJQUF3QkQsZ0JBQXZELEM7Ozs7Ozs7Ozs7O0FDUFAsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvZG9uYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWVsZFJlbmRlclByb3BzLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCB7IEZpZWxkRXJyb3IgfSBmcm9tIFwiLi9GaWVsZEVycm9yXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwsIEZvcm1JdGVtQ3RyIH0gZnJvbSBcIi4vc3R5bGVkXCI7XHJcblxyXG50eXBlIFByb3BzID0gRmllbGRSZW5kZXJQcm9wczxzdHJpbmcsIGFueT47XHJcblxyXG4vL0lmIGEgbWF4LWxlbmd0aCBwcm9wZXJ0eSBpcyBzcGVjaWZlZCwgdGhlIHJlZ2V4IHdpbGwgbm90IHdvcmsgcHJvcGVybHkgd2l0aG91dCB0aGlzXHJcbmNvbnN0IERFRkFVTFRfTUFYX0xFTiA9IDE2O1xyXG5cclxuLy9JbnB1dCBjb21wb25lbnQgZm9yIHJlc3RyaWN0aW5nIHRoZSB1c2VyJ3MgaW5wdXRzIHRvIGEgZGVjaW1hbFxyXG5jb25zdCBEZWNpbWFsSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgdHlwZSxcclxuICBpbnB1dCxcclxuICBtZXRhLFxyXG4gIC4uLnJlc3RcclxufTogUHJvcHMpID0+IHtcclxuICBjb25zdCBiYXNlTGVuID0gcmVzdC5tYXhMZW5ndGggfHwgREVGQVVMVF9NQVhfTEVOO1xyXG4gIGNvbnN0IGRlY2ltYWxSZWdleCA9IFtuZXcgUmVnRXhwKGBeXFxcXGR7MCwke2Jhc2VMZW59fShcXFxcLlxcXFxkezAsMn0pPyRgKV07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghIWlucHV0LnZhbHVlICYmICFpc05hTihOdW1iZXIoaW5wdXQudmFsdWUpKSAmJiAhbWV0YS5hY3RpdmUpIHtcclxuICAgICAgaW5wdXQub25DaGFuZ2UoTnVtYmVyKGlucHV0LnZhbHVlKS50b0ZpeGVkKDIpKTtcclxuICAgIH1cclxuICB9LCBbaW5wdXQsIGlucHV0LnZhbHVlLCBtZXRhLmFjdGl2ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1JdGVtQ3RyPlxyXG4gICAgICA8RmllbGRMYWJlbCBpc0FjdGl2ZT17ISFtZXRhLmFjdGl2ZX0+XHJcbiAgICAgICAge3Jlc3QucmVxdWlyZWQgJiYgXCIqIFwifVxyXG4gICAgICAgIHtyZXN0LmxhYmVsfVxyXG4gICAgICA8L0ZpZWxkTGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGF1dG9Db21wbGV0ZT17XCJvZmZcIn1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cInh4Lnh4XCJcclxuICAgICAgICAvL3suLi5pbnB1dFByb3BzfVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCByZWdleCBvZiBkZWNpbWFsUmVnZXgpIHtcclxuICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgaW5wdXQub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPEZpZWxkRXJyb3Igey4uLm1ldGF9IC8+XHJcbiAgICA8L0Zvcm1JdGVtQ3RyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWNpbWFsSW5wdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgeyBGb3JtSXRlbUN0ciwgRm9ybUN0ciB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5pbXBvcnQgRGVjaW1hbElucHV0IGZyb20gXCIuL0RlY2ltYWxJbnB1dFwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyByZXF1aXJlZCB9IGZyb20gXCIuLi8uLi91dGlsL3ZhbGlkYXRpb25VdGlsXCI7XHJcbmltcG9ydCB7IEJ1dHRvblByaW1hcnkgfSBmcm9tIFwiLi4vdWkvc3R5bGVkXCI7XHJcblxyXG5pbnRlcmZhY2UgVmFsdWVzIHtcclxuICBhbW91bnQ6IHN0cmluZztcclxuICB0aXA6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQUREX0RPTkFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENyZWF0ZURvbmF0aW9uKCRhbW91bnQ6IEZsb2F0ISwgJHRpcDogRmxvYXQhLCAkdXNlcklkOiBTdHJpbmchKSB7XHJcbiAgICBjcmVhdGVEb25hdGlvbihkYXRhOiB7IGFtb3VudDogJGFtb3VudCwgdGlwOiAkdGlwLCB1c2VySWQ6ICR1c2VySWQgfSkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERFRkFVTFRfVVNFUl9JRCA9IFwiNDY5OTUxOWEtNzMzZS00NjZjLTk0NzMtM2RhNTgwOGEzMjkzXCI7XHJcblxyXG5jb25zdCBEb25hdGlvbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFthZGREb25hdGlvbl0gPSB1c2VNdXRhdGlvbihBRERfRE9OQVRJT04sIHsgZXJyb3JQb2xpY3k6IFwiYWxsXCIgfSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlczogVmFsdWVzKSA9PiB7XHJcbiAgICAvL0FkZCB0aGUgZG9uYXRpb25cclxuXHJcbiAgICAvL0Rvbid0IHRoaW5rIHRoaXMgaXMgdGhlIG5pY2VzdCB3YXkgZm9yIGVycm9yIGhhbmRsaW5nXHJcbiAgICAvL3dpdGggYXBwb2xsbyBjbGllbnQsIGJ1dCBzZWVtcyB0byB3b3JrXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhZGREb25hdGlvbih7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQodmFsdWVzLmFtb3VudCksXHJcbiAgICAgICAgICB0aXA6IHBhcnNlRmxvYXQodmFsdWVzLnRpcCksXHJcbiAgICAgICAgICB1c2VySWQ6IERFRkFVTFRfVVNFUl9JRCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy90b2FzdCBhbiBlcnJvciBhbmQgZXhpdFxyXG4gICAgICB0b2FzdC5lcnJvcihgVWggb2guLi4gdGhlcmUgd2FzIGFuIGVycm9yOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9TdWNjZXNzIC0gdG9hc3QgYW5kIHJldHVybiBob21lXHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiVGhhbmsgeW91ISEhXCIpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVxyXG4gICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdGlwOiBcIjAuMDBcIiB9fVxyXG4gICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZywgcHJpc3RpbmUgfSkgPT4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPEZvcm1DdHI+XHJcbiAgICAgICAgICAgIDxGaWVsZDxzdHJpbmc+XHJcbiAgICAgICAgICAgICAgbmFtZT17XCJhbW91bnRcIn1cclxuICAgICAgICAgICAgICBsYWJlbD17XCJBbW91bnRcIn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0RlY2ltYWxJbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGaWVsZDxzdHJpbmc+XHJcbiAgICAgICAgICAgICAgbGFiZWw9e1wiQWRkIGEgdGlwP1wifVxyXG4gICAgICAgICAgICAgIG5hbWU9e1widGlwXCJ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0RlY2ltYWxJbnB1dH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBselwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbUN0cj5cclxuICAgICAgICAgICAgICA8QnV0dG9uUHJpbWFyeSB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgcHJpc3RpbmV9PlxyXG4gICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25QcmltYXJ5PlxyXG4gICAgICAgICAgICA8L0Zvcm1JdGVtQ3RyPlxyXG4gICAgICAgICAgPC9Gb3JtQ3RyPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbmF0aW9uRm9ybTtcclxuIiwiaW1wb3J0IHsgRmllbGRNZXRhU3RhdGUgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgeyBFcnJvck1zZyB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IEZpZWxkTWV0YVN0YXRlPHN0cmluZz47XHJcblxyXG5jb25zdCBnZW5lcmF0ZUVyckRpc3BsYXkgPSAoaGFzRXJyb3I6IGJvb2xlYW4sIGVycm9yOiBzdHJpbmcpID0+IChcclxuICA8RXJyb3JNc2cgaXNWaXNpYmxlPXtoYXNFcnJvcn0+e2hhc0Vycm9yID8gZXJyb3IgOiBcIi1cIn08L0Vycm9yTXNnPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpZWxkRXJyb3I6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgZXJyb3IsXHJcbiAgYWN0aXZlLFxyXG4gIHRvdWNoZWQsXHJcbn06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgaGFzRXJyb3IgPSAhISh0b3VjaGVkICYmICFhY3RpdmUgJiYgISFlcnJvcik7XHJcbiAgcmV0dXJuIGdlbmVyYXRlRXJyRGlzcGxheShoYXNFcnJvciwgZXJyb3IpO1xyXG59O1xyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgRmllbGRMYWJlbCA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5GT1JNX0xBQkVMfTtcclxuICAkeyhwcm9wcyA6IHtpc0FjdGl2ZSA6IGJvb2xlYW4gfSkgPT5cclxuICAgIHByb3BzLmlzQWN0aXZlICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtQ3RyID0gc3R5bGVkLmRpdmBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtSXRlbUN0ciA9IHN0eWxlZC5kaXZgXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yTXNnID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLkZPUk1fRVJST1JfTUVTU0FHRX07XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBtYW51bGlmZUxpZ2h0O1xyXG4gICR7KHByb3BzIDoge2lzVmlzaWJsZSA6IGJvb2xlYW59KSA9PlxyXG4gICAgIXByb3BzLmlzVmlzaWJsZSAmJlxyXG4gICAgY3NzYFxyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBgfVxyXG5gOyIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uUHJpbWFyeSA9IHN0eWxlZC5idXR0b25gXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIGhvcml6b250YWwgYWxpZ25tZW50ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogdmVydGljYWwgYWxpZ25tZW50ICovXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5CVVRUT05fUFJJTUFSWV9URVhUfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuQlVUVE9OX1BSSU1BUll9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHA6IHsgZGlzYWJsZWQ6IGJvb2xlYW4gfSkgPT5cclxuICAgIHAuZGlzYWJsZWQgJiZcclxuICAgIGNzc2BcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgYH1cclxuYDtcclxuIiwiaW1wb3J0IERvbmF0aW9uRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9kb25hdGlvbkZvcm0vRG9uYXRpb25Gb3JtXCI7XHJcblxyXG5mdW5jdGlvbiBEb25hdGUoKSB7XHJcbiAgcmV0dXJuIDxEb25hdGlvbkZvcm0gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbmF0ZTtcclxuIiwiZXhwb3J0IGNvbnN0IFJFUVVJUkVEX01FU1NBR0UgPSBcIlJlcXVpcmVkIGZpZWxkXCI7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhICdSZXF1aXJlZCBNZXNzYWdlJyBpZiB2YWwgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICogQHBhcmFtIHZhbCBGZWlsZCBWYWx1ZVxyXG4gKiBAcmV0dXJucyBUaGUgJ1JlcXVpcmVkIE1lc3NhZ2UnIG9yIGZhbHNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsOiBhbnkpID0+ICF2YWwgJiYgISh2YWwgPT09IDApICYmIFJFUVVJUkVEX01FU1NBR0U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpbmFsLWZvcm1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9