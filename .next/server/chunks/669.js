"use strict";
exports.id = 669;
exports.ids = [669];
exports.modules = {

/***/ 5669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4929);
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7628);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);





let xAccessTokenKey = (0,_jwt__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)() && (0,_jwt__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)();
let adminData = (0,_jwt__WEBPACK_IMPORTED_MODULE_3__/* .userJwtData */ .z)() && (0,_jwt__WEBPACK_IMPORTED_MODULE_3__/* .userJwtData */ .z)();
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _constant__WEBPACK_IMPORTED_MODULE_4__/* .APIURL */ .z,
    headers: {
        "x-access-token": xAccessTokenKey
    }
});
axiosInstance.interceptors.request.use(async (req)=>{
    xAccessTokenKey = (0,_jwt__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)() && (0,_jwt__WEBPACK_IMPORTED_MODULE_3__/* .xAccessToken */ .H)();
    req.headers["x-access-token"] = xAccessTokenKey;
    const user = xAccessTokenKey && jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(xAccessTokenKey);
    const isExpired = user && dayjs__WEBPACK_IMPORTED_MODULE_2___default().unix(user.exp).diff(dayjs__WEBPACK_IMPORTED_MODULE_2___default()()) < 1;
    if (isExpired) {
        console.log(adminData.id);
        try {
            const refreshApiData = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_constant__WEBPACK_IMPORTED_MODULE_4__/* .APIURL */ .z}/admin/refreshToken/${adminData.id}`);
            if (!refreshApiData.data.error) {
                if (adminData) {
                    adminData["accessToken"] = refreshApiData.data.data;
                    localStorage.setItem("jwt", JSON.stringify(adminData));
                }
            }
        } catch (error) {
        }
    }
    return req;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ }),

/***/ 4929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ APIURL)
/* harmony export */ });
// export const APIURL = "http://3.139.226.194:3000/api";
const APIURL = "https://api.wishwheels.com/api";


/***/ }),

/***/ 7628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ xAccessToken),
/* harmony export */   "z": () => (/* binding */ userJwtData)
/* harmony export */ });
const xAccessToken = ()=>{
    if (false) { var ref; }
};
const userJwtData = ()=>{
    let user = "";
    let data = "";
    if (false) {}
    return data;
};


/***/ })

};
;