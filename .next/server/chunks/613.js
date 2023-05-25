"use strict";
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 1622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LoadingContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    loading: false,
    setLoading: (loading)=>{
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingContext);


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ AdminService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5669);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4929);



class AdminService {
    // Get Admin Data
    getAdminData() {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .APIURL */ .z}/contactDetail/623202048d85ac348ad4704c`);
    }
    // Update Admin Data
    updateAdminData(payload) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${_utils_constant__WEBPACK_IMPORTED_MODULE_2__/* .APIURL */ .z}/contactDetail/623202048d85ac348ad4704c`, payload);
    }
    // Get Admin Social Link
    getSocialLink() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get(`/socialMedia`);
    }
    // Update Facebook Link
    updateFacebookLink(payload1) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].put */ .Z.put(`/socialMedia/61f03b1260bd87265cfa1f67`, payload1);
    }
    // Update Instagram Link
    updateInstagramLink(payload2) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].put */ .Z.put(`/socialMedia/61f03bd960bd87265cfa1f6f`, payload2);
    }
    // Update Youtube Link
    updateYoutubeLink(payload3) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].put */ .Z.put(`/socialMedia/61f03c2360bd87265cfa1f73`, payload3);
    }
    // Get All user list
    getAllUserList() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("admin/getAll/User");
    }
    getWebsiteStats() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get("admin/getAll/User");
    }
}


/***/ })

};
;