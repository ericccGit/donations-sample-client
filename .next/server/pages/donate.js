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
      lineNumber: 23,
      columnNumber: 9
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
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FieldError__WEBPACK_IMPORTED_MODULE_2__.FieldError, _objectSpread({}, meta), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
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
    mutation CreateDonation($amount: Float!, $tip: Float!, $userId: String!){
        createDonation(data: {amount: $amount, tip: $tip, userId: $userId}){
            id
        }
    }   
`;
const DEFAULT_USER_ID = '4699519a-733e-466c-9473-3da5808a3293';

const DonationForm = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const [addDonation] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(ADD_DONATION, {
    errorPolicy: 'all'
  });

  const onSubmit = async values => {
    //Add the donation
    //Don't think this is the nicest way for error handling with appollo client,
    //but seems to work
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
          lineNumber: 59,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Add a tip?",
          name: "tip",
          required: true,
          component: _DecimalInput__WEBPACK_IMPORTED_MODULE_4__.default,
          placeholder: "Plz"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_3__.FormItemCtr, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_styled__WEBPACK_IMPORTED_MODULE_9__.ButtonPrimary, {
            type: "submit",
            disabled: submitting || pristine,
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
  columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC8uL2NvbXBvbmVudHMvZG9uYXRpb25Gb3JtL0RlY2ltYWxJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL2RvbmF0aW9uRm9ybS9Eb25hdGlvbkZvcm0udHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy9kb25hdGlvbkZvcm0vRmllbGRFcnJvci50c3giLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvLi9jb21wb25lbnRzL2RvbmF0aW9uRm9ybS9zdHlsZWQudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vY29tcG9uZW50cy91aS9zdHlsZWQudHN4Iiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50Ly4vcGFnZXMvZG9uYXRlLnRzeCIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC8uL3V0aWwvdmFsaWRhdGlvblV0aWwudHMiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kb25hdGlvbnMtc2FtcGxlLWNsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC1maW5hbC1mb3JtXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2RvbmF0aW9ucy1zYW1wbGUtY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZG9uYXRpb25zLXNhbXBsZS1jbGllbnQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkRFRkFVTFRfTUFYX0xFTiIsIkRlY2ltYWxJbnB1dCIsInR5cGUiLCJpbnB1dCIsIm1ldGEiLCJyZXN0IiwiYmFzZUxlbiIsIm1heExlbmd0aCIsImRlY2ltYWxSZWdleCIsIlJlZ0V4cCIsInVzZUVmZmVjdCIsInZhbHVlIiwiaXNOYU4iLCJOdW1iZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsInRvRml4ZWQiLCJyZXF1aXJlZCIsImxhYmVsIiwidGFyZ2V0IiwicmVnZXgiLCJ0ZXN0IiwiQUREX0RPTkFUSU9OIiwiZ3FsIiwiREVGQVVMVF9VU0VSX0lEIiwiRG9uYXRpb25Gb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkRG9uYXRpb24iLCJ1c2VNdXRhdGlvbiIsImVycm9yUG9saWN5Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJ2YXJpYWJsZXMiLCJhbW91bnQiLCJwYXJzZUZsb2F0IiwidGlwIiwidXNlcklkIiwiZSIsInRvYXN0IiwibWVzc2FnZSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJzdWJtaXR0aW5nIiwicHJpc3RpbmUiLCJnZW5lcmF0ZUVyckRpc3BsYXkiLCJoYXNFcnJvciIsImVycm9yIiwiRmllbGRFcnJvciIsInRvdWNoZWQiLCJGaWVsZExhYmVsIiwic3R5bGVkIiwicHJvcHMiLCJ0aGVtZSIsIkZPUk1fTEFCRUwiLCJpc0FjdGl2ZSIsImNzcyIsIkZvcm1DdHIiLCJGb3JtSXRlbUN0ciIsIkVycm9yTXNnIiwiRk9STV9FUlJPUl9NRVNTQUdFIiwiaXNWaXNpYmxlIiwiQnV0dG9uUHJpbWFyeSIsIkJVVFRPTl9QUklNQVJZX1RFWFQiLCJCVVRUT05fUFJJTUFSWSIsInAiLCJkaXNhYmxlZCIsIkRvbmF0ZSIsIlJFUVVJUkVEX01FU1NBR0UiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7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Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlA7QUFFTyxNQUFNTSxhQUFhLEdBQUdYLDBFQUFIO0FBQUE7QUFBQTtBQUFBLHNVQWNkQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxtQkFkUixFQWVIWCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVyxjQWZuQixFQXFCckJDLENBQUQsSUFDQUEsQ0FBQyxDQUFDQyxRQUFGLElBQ0FWLHNEQURBLGtCQXRCc0IsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDs7QUFFQSxTQUFTVyxNQUFULEdBQWtCO0FBQ2hCLHNCQUFPLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlQSxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTyxNQUFNQyxnQkFBZ0IsR0FBRyxnQkFBekI7QUFDQSxNQUFNbkQsUUFBUSxHQUFJb0QsR0FBRCxJQUFlLENBQUNBLEdBQUQsSUFBUSxFQUFFQSxHQUFHLEtBQUssQ0FBVixDQUFSLElBQXdCRCxnQkFBeEQsQzs7Ozs7Ozs7Ozs7QUNEUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9kb25hdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGaWVsZFJlbmRlclByb3BzLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCB7IEZpZWxkRXJyb3IgfSBmcm9tIFwiLi9GaWVsZEVycm9yXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwsIEZvcm1JdGVtQ3RyIH0gZnJvbSBcIi4vc3R5bGVkXCI7XHJcblxyXG50eXBlIFByb3BzID0gRmllbGRSZW5kZXJQcm9wczxzdHJpbmcsIGFueT47XHJcblxyXG4vL0lmIGEgbWF4LWxlbmd0aCBwcm9wZXJ0eSBpcyBzcGVjaWZlZCwgdGhlIHJlZ2V4IHdpbGwgbm90IHdvcmsgcHJvcGVybHkgd2l0aG91dCB0aGlzXHJcbmNvbnN0IERFRkFVTFRfTUFYX0xFTiA9IDE2O1xyXG5cclxuLy9JbnB1dCBjb21wb25lbnQgZm9yIHJlc3RyaWN0aW5nIHRoZSB1c2VyJ3MgaW5wdXRzIHRvIGEgZGVjaW1hbCBcclxuY29uc3QgRGVjaW1hbElucHV0IDogUmVhY3QuRkM8UHJvcHM+ID0gKHt0eXBlLCBpbnB1dCwgbWV0YSwgLi4ucmVzdCAgfTogUHJvcHMgKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlTGVuID0gcmVzdC5tYXhMZW5ndGggfHwgREVGQVVMVF9NQVhfTEVOO1xyXG4gICAgY29uc3QgZGVjaW1hbFJlZ2V4ID0gW25ldyBSZWdFeHAoYF5cXFxcZHswLCR7YmFzZUxlbn19KFxcXFwuXFxcXGR7MCwyfSk/JGApXTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghIWlucHV0LnZhbHVlICYmICFpc05hTihOdW1iZXIoaW5wdXQudmFsdWUpKSAmJiAhbWV0YS5hY3RpdmUpIHtcclxuICAgICAgICBpbnB1dC5vbkNoYW5nZShOdW1iZXIoaW5wdXQudmFsdWUpLnRvRml4ZWQoMikpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbaW5wdXQsIGlucHV0LnZhbHVlLCBtZXRhLmFjdGl2ZV0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUl0ZW1DdHI+XHJcbiAgICAgICAgPEZpZWxkTGFiZWwgaXNBY3RpdmU9eyEhbWV0YS5hY3RpdmV9PlxyXG4gICAgICAgICAge3Jlc3QucmVxdWlyZWQgJiYgXCIqIFwifVxyXG4gICAgICAgICAge3Jlc3QubGFiZWx9XHJcbiAgICAgICAgPC9GaWVsZExhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT17XCJvZmZcIn1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwieHgueHhcIlxyXG4gICAgICAgICAgLy97Li4uaW5wdXRQcm9wc31cclxuICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcmVnZXggb2YgZGVjaW1hbFJlZ2V4KSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlZ2V4LnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZpZWxkRXJyb3Igey4uLm1ldGF9Lz5cclxuICAgICAgICA8L0Zvcm1JdGVtQ3RyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBEZWNpbWFsSW5wdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCB7IEZvcm1JdGVtQ3RyLCBGb3JtQ3RyIH0gZnJvbSBcIi4vc3R5bGVkXCI7XHJcbmltcG9ydCBEZWNpbWFsSW5wdXQgZnJvbSBcIi4vRGVjaW1hbElucHV0XCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQge3JlcXVpcmVkfSBmcm9tIFwiLi4vLi4vdXRpbC92YWxpZGF0aW9uVXRpbFwiO1xyXG5pbXBvcnQgeyBCdXR0b25QcmltYXJ5IH0gZnJvbSBcIi4uL3VpL3N0eWxlZFwiO1xyXG5cclxuaW50ZXJmYWNlIFZhbHVlcyB7XHJcbiAgYW1vdW50OiBzdHJpbmc7XHJcbiAgdGlwOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEFERF9ET05BVElPTiA9IGdxbGBcclxuICAgIG11dGF0aW9uIENyZWF0ZURvbmF0aW9uKCRhbW91bnQ6IEZsb2F0ISwgJHRpcDogRmxvYXQhLCAkdXNlcklkOiBTdHJpbmchKXtcclxuICAgICAgICBjcmVhdGVEb25hdGlvbihkYXRhOiB7YW1vdW50OiAkYW1vdW50LCB0aXA6ICR0aXAsIHVzZXJJZDogJHVzZXJJZH0pe1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuYDtcclxuXHJcbmNvbnN0IERFRkFVTFRfVVNFUl9JRCA9ICc0Njk5NTE5YS03MzNlLTQ2NmMtOTQ3My0zZGE1ODA4YTMyOTMnO1xyXG5cclxuY29uc3QgRG9uYXRpb25Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbYWRkRG9uYXRpb25dID0gdXNlTXV0YXRpb24oQUREX0RPTkFUSU9OLCB7IGVycm9yUG9saWN5OiAnYWxsJyB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXM6IFZhbHVlcykgPT4ge1xyXG4gICAgICAgIC8vQWRkIHRoZSBkb25hdGlvblxyXG5cclxuICAgICAgICAvL0Rvbid0IHRoaW5rIHRoaXMgaXMgdGhlIG5pY2VzdCB3YXkgZm9yIGVycm9yIGhhbmRsaW5nIHdpdGggYXBwb2xsbyBjbGllbnQsXHJcbiAgICAgICAgLy9idXQgc2VlbXMgdG8gd29ya1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgYXdhaXQgYWRkRG9uYXRpb24oe3ZhcmlhYmxlczoge2Ftb3VudDogcGFyc2VGbG9hdCh2YWx1ZXMuYW1vdW50KSwgXHJcbiAgICAgICAgICAgICAgICB0aXA6IHBhcnNlRmxvYXQodmFsdWVzLnRpcCksICBcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogREVGQVVMVF9VU0VSX0lEfX0pXHJcbiAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICAvL3RvYXN0IGFuIGVycm9yIGFuZCBleGl0XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGBVaCBvaC4uLiB0aGVyZSB3YXMgYW4gZXJyb3I6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vU3VjY2VzcyAtIHRvYXN0IGFuZCByZXR1cm4gaG9tZVxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUaGFuayB5b3UhISFcIik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IHRpcDogXCIwLjAwXCIgfX1cclxuICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHN1Ym1pdHRpbmcsIHByaXN0aW5lIH0pID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxGb3JtQ3RyPlxyXG4gICAgICAgICAgICAgIDxGaWVsZDxzdHJpbmc+XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtcImFtb3VudFwifVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e1wiQW1vdW50XCJ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtEZWNpbWFsSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkPHN0cmluZz5cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtcIkFkZCBhIHRpcD9cIn1cclxuICAgICAgICAgICAgICAgIG5hbWU9e1widGlwXCJ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtEZWNpbWFsSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbHpcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtSXRlbUN0cj5cclxuICAgICAgICAgICAgPEJ1dHRvblByaW1hcnkgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHByaXN0aW5lfT5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b25QcmltYXJ5PlxyXG4gICAgICAgICAgICA8L0Zvcm1JdGVtQ3RyPlxyXG4gICAgICAgICAgPC9Gb3JtQ3RyPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbmF0aW9uRm9ybTtcclxuIiwiaW1wb3J0IHsgRmllbGRNZXRhU3RhdGUgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgeyBFcnJvck1zZyB9IGZyb20gXCIuL3N0eWxlZFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IEZpZWxkTWV0YVN0YXRlPHN0cmluZz5cclxuXHJcbmNvbnN0IGdlbmVyYXRlRXJyRGlzcGxheSA9IChoYXNFcnJvciA6IGJvb2xlYW4sIGVycm9yOiBzdHJpbmcpID0+IChcclxuICAgIDxFcnJvck1zZyBpc1Zpc2libGU9e2hhc0Vycm9yfT57aGFzRXJyb3IgPyBlcnJvciA6IFwiLVwifTwvRXJyb3JNc2c+XHJcbiAgKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWVsZEVycm9yIDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZXJyb3IsIGFjdGl2ZSwgdG91Y2hlZCB9IDogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhc0Vycm9yID0gISEodG91Y2hlZCAmJiAhYWN0aXZlICYmICEhZXJyb3IpO1xyXG4gICAgcmV0dXJuIGdlbmVyYXRlRXJyRGlzcGxheShoYXNFcnJvciwgZXJyb3IpO1xyXG4gIH07XHJcblxyXG4gICIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBGaWVsZExhYmVsID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLkZPUk1fTEFCRUx9O1xyXG4gICR7KHByb3BzIDoge2lzQWN0aXZlIDogYm9vbGVhbiB9KSA9PlxyXG4gICAgcHJvcHMuaXNBY3RpdmUgJiZcclxuICAgIGNzc2BcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1DdHIgPSBzdHlsZWQuZGl2YFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1JdGVtQ3RyID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXJyb3JNc2cgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuRk9STV9FUlJPUl9NRVNTQUdFfTtcclxuICBmb250LXNpemU6IDgwJTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnVsaWZlTGlnaHQ7XHJcbiAgJHsocHJvcHMgOiB7aXNWaXNpYmxlIDogYm9vbGVhbn0pID0+XHJcbiAgICAhcHJvcHMuaXNWaXNpYmxlICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGB9XHJcbmA7IiwiaW1wb3J0IHN0eWxlZCwge2Nzc30gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uUHJpbWFyeSA9IHN0eWxlZC5idXR0b25gXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIGhvcml6b250YWwgYWxpZ25tZW50ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogdmVydGljYWwgYWxpZ25tZW50ICovXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5CVVRUT05fUFJJTUFSWV9URVhUfTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuQlVUVE9OX1BSSU1BUll9O1xyXG5cclxuICAmOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAkeyhwIDogeyBkaXNhYmxlZCA6IGJvb2xlYW4gfSkgPT5cclxuICAgIHAuZGlzYWJsZWQgJiZcclxuICAgIGNzc2BcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgYH1cclxuYDsiLCJpbXBvcnQgRG9uYXRpb25Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2RvbmF0aW9uRm9ybS9Eb25hdGlvbkZvcm1cIjtcclxuXHJcbmZ1bmN0aW9uIERvbmF0ZSgpIHtcclxuICByZXR1cm4gPERvbmF0aW9uRm9ybSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9uYXRlO1xyXG4iLCJleHBvcnQgY29uc3QgUkVRVUlSRURfTUVTU0FHRSA9IFwiUmVxdWlyZWQgZmllbGRcIjtcclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gKHZhbCA6IGFueSkgPT4gIXZhbCAmJiAhKHZhbCA9PT0gMCkgJiYgUkVRVUlSRURfTUVTU0FHRTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maW5hbC1mb3JtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==