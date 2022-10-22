"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 9788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/deleteIcon.d2f63f4f.svg","height":43,"width":43});

/***/ }),

/***/ 7985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/upload-icon.5fc560ca.svg","height":44,"width":51});

/***/ }),

/***/ 2354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5669);

class InventoryService {
    getAllInventory() {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/car/complete/car/detail`);
    }
    getInventoryById(payload) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/car/completeCarDetailById/${payload}`);
    }
    /* Add Image */ uploadCarImage(payload1) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/carImage`, payload1);
    }
    /* Add Image */ // Update the car image order
    updateCarImageOrder(carId, payload2) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .Z.put(`/carImage/${carId}`, payload2);
    }
    // Delete Inventory car by id
    deleteCarInventoryById(carId1) {
        return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`/api/car/delete/${carId1}`);
    }
}


/***/ })

};
;