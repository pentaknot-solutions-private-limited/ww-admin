"use strict";
exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 2762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kq": () => (/* binding */ SecondaryButton),
/* harmony export */   "tH": () => (/* binding */ StyledTextField),
/* harmony export */   "Jn": () => (/* binding */ StyledDrawer),
/* harmony export */   "Uy": () => (/* binding */ CommentDrawerHeader),
/* harmony export */   "Vy": () => (/* binding */ CommentTableContainer)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);


const SecondaryButton = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  border-radius: 4px;
  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;
const StyledTextField = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField)`
  background: rgba(33, 33, 33, 0.08);
  border-radius: 4px;
  input,
  input::placeholder,
  textarea {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.87);
    opacity: 1;
  }
  margin-bottom: 15px;
  fieldset {
    display: none !important;
  }
`;
const StyledDrawer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Drawer)`
  & .MuiDrawer-paper {
    max-width: 430px;
    width: 100%;
  }
`;
const CommentDrawerHeader = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;

  & h5 {
    font-size: 20px;
    color: #373737;
    font-weight: 400;
    margin: 0px;
  }
`;
const CommentTableContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TableContainer)`
  padding: 15px 10px;
  border: 0px;
  box-shadow: none;
  font-family: "SF Compact Display";
  & .MuiTable-root {
    border: 1px solid #e7e7ed;
    box-sizing: border-box;
    border-radius: 4px;
  }
  th {
    font-weight: 600;
    font-size: 16px;
    color: #272833;
    font-family: inherit;
  }
`;


/***/ })

};
;