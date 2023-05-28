"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 1253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentCityComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2762);
/* harmony import */ var _src_context_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1622);
/* harmony import */ var _src_service_cars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5867);







function ContentCityComponent() {
    // States
    const { 0: formLoading , 1: setFormLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: allCity , 1: setAllCity  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    // Variables
    const cityInitialValues = {
        city: ""
    };
    const carService = new _src_service_cars__WEBPACK_IMPORTED_MODULE_6__/* .CarService */ .Z();
    // Context
    const { loading , setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_src_context_loading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    // Functions
    const CityHandleSubmit = async (values, { resetForm  })=>{
        setLoading(true);
        setFormLoading(true);
        const payload = {
            name: values.city,
            stateId: "61798f24fc6c04fffc6ba6f3"
        };
        try {
            const addCityApiCall = await carService.addCity(payload);
            if (!addCityApiCall.data.error) {
                setFormLoading(false);
                resetForm();
                setLoading(false);
            } else {
                console.log(addCityApiCall.data.error);
                setFormLoading(false);
                resetForm();
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setFormLoading(false);
            resetForm();
            setLoading(false);
        }
        refreshApi();
    };
    const cityHandleDelete = (item)=>()=>{
            console.log(item);
            if (confirm("Are you sure you really want to delete!") == true) {
                deleteCityById(item.id);
            } else {
                setLoading(false);
            }
            refreshApi();
        }
    ;
    const refreshApi = ()=>{
        setLoading(true);
        getCityList();
        setLoading(false);
    };
    // Get all City list api
    const getCityList = async ()=>{
        setLoading(true);
        try {
            const cityListApiCall = await carService.getCityList();
            if (!cityListApiCall.data.error) {
                setAllCity(cityListApiCall.data.data);
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    // Delete city by id api
    const deleteCityById = async (payload)=>{
        setLoading(true);
        try {
            const deleteCityApiCall = await carService.deleteCityById(payload);
            if (!deleteCityApiCall.data.error) {
                setLoading(false);
            } else {
                console.log(deleteCityApiCall.data.error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        refreshApi();
    };
    // Effects
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getCityList();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content-page-section",
            children: allCity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                initialValues: cityInitialValues,
                onSubmit: CityHandleSubmit,
                children: (props)=>{
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "textfield-wrapper",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_4__/* .StyledTextField */ .tH, {
                                            name: "city",
                                            label: "City",
                                            value: props.values.city,
                                            onChange: props.handleChange,
                                            variant: "outlined",
                                            fullWidth: true
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_4__/* .SecondaryButton */ .kq, {
                                        variant: "contained",
                                        className: "secondaryButton",
                                        color: "secondary",
                                        type: "submit",
                                        disabled: !(props.isValid && props.dirty) || formLoading,
                                        children: formLoading ? "Adding.." : "Add"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                className: "material-ui-stack",
                                direction: "row",
                                spacing: 1,
                                children: allCity.map((item, index)=>{
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                                        className: "site-chip",
                                        label: item === null || item === void 0 ? void 0 : item.name,
                                        onDelete: cityHandleDelete(item)
                                    }, `deletable-chips-${index}`));
                                })
                            })
                        ]
                    }));
                }
            })
        })
    }));
};


/***/ })

};
;