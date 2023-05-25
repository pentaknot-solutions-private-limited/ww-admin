"use strict";
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 5867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CarService)
/* harmony export */ });
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5669);

class CarService {
    /* Brands API Start */ // Get all Brands list
    allBrands() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/carMake`);
    }
    // Delete Brand by Id
    deleteBrands(payload) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/carMake/delete/${payload}`);
    }
    // Add Brand
    addBrand(payload1) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/carMake`, payload1);
    }
    /* Brands API End */ /* City API Start */ // Get city list where service is provided
    getCityList() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/city`);
    }
    // Delete city by id
    deleteCityById(payload2) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/city/delete/${payload2}`);
    }
    // Add City
    addCity(payload3) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/city`, payload3);
    }
    /* City API End */ /* Add Car Inventory */ addCarInventory(payload4) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/carDetail", payload4);
    }
    updateCarInventory(id, payload5) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/carDetail/${id}`, payload5);
    }
    updateCarEquiment(id1, payload6) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/carequipment/${id1}`, payload6);
    }
    /* Car Body  */ getAllCarBody() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/carBody");
    }
    /* Car Body  */ /* Image api */ deleteCarImageById(payload7) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/carImage/delete/${payload7}`);
    }
    updateCarImageById(payload8) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/carImage`, payload8);
    }
    /* Image api */ /* Comment Api */ getAllCommentById(payload9) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/comment?id=${payload9}`);
    }
    addComment(payload10) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/comment", payload10);
    }
}


/***/ })

};
;