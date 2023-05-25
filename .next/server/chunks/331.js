"use strict";
exports.id = 331;
exports.ids = [331];
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

/***/ 9480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ OverviewService)
/* harmony export */ });
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5669);

class OverviewService {
    // Get the counts of the Inspection, Booking And Query
    getDataCount() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/adminDashboard`);
    }
    /* Bookings */ // Get All Bookings
    getBookings() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/trial`);
    }
    // Get Booking By Id
    getBookingById(payload) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/trial/${payload}`);
    }
    /* Inspections */ // Get All Inspections
    getInspections() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/sellCar`);
    }
    // Get  Inspections by Id
    getInspectionsById(payload1) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/sellCar/${payload1}`);
    }
    /* Querys */ // Get All Querys
    getQuerys() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/contact`);
    }
    // Get Query by Id
    getQueryById(payload2) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/contact/${payload2}`);
    }
}


/***/ })

};
;