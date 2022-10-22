"use strict";
exports.id = 781;
exports.ids = [781];
exports.modules = {

/***/ 9781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentPhoneComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2762);
/* harmony import */ var _src_context_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1622);
/* harmony import */ var _src_service_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2295);








function ContentPhoneComponent() {
    // States
    const { 0: PhoneUpdateSuccess , 1: setPhoneUpdateSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: adminData , 1: setAdminData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: formLoading , 1: setFormLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    // Variables
    const initialValues = {
        phone: adminData === null || adminData === void 0 ? void 0 : adminData.contactNo
    };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validataion = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
        phone: yup__WEBPACK_IMPORTED_MODULE_4__.string().matches(phoneRegExp, "Phone number is not valid")
    });
    const adminService = new _src_service_admin__WEBPACK_IMPORTED_MODULE_7__/* .AdminService */ .l();
    // Context
    const { loading , setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_src_context_loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    // Functions
    const HandleSubmit = async (values)=>{
        setLoading(true);
        setFormLoading(true);
        console.log(values);
        const payload = {
            contactNo: values.phone
        };
        try {
            const updateAdminDataApiCall = await adminService.updateAdminData(payload);
            if (!updateAdminDataApiCall.data.error) {
                console.log(updateAdminDataApiCall.data.data);
                setFormLoading(false);
                setPhoneUpdateSuccess(true);
            } else {
                console.log(updateAdminDataApiCall.data.error);
                setFormLoading(false);
            }
        } catch (error) {
            setFormLoading(false);
            console.log(error.request);
        }
        refreshApi();
        setTimeout(()=>{
            setPhoneUpdateSuccess(false);
        }, 2000);
    };
    //   Refresh Api
    const refreshApi = ()=>{
        getAdminData();
    };
    //   Get Admin Data Api
    const getAdminData = async ()=>{
        setLoading(true);
        try {
            const adminDataApiCall = await adminService.getAdminData();
            if (!adminDataApiCall.data.error) {
                setAdminData(adminDataApiCall.data.data);
                // initialValues.email = adminDataApiCall.data.data.emailId;
                setLoading(false);
            } else {
                console.log(adminDataApiCall.data.error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    // Effects
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getAdminData();
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            PhoneUpdateSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                className: "successToasty",
                variant: "outlined",
                severity: "success",
                children: "Phone Number Updated Successfully"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content-page-section",
                children: adminData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                    initialValues: initialValues,
                    validationSchema: validataion,
                    onSubmit: HandleSubmit,
                    children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "textfield-wrapper",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_5__/* .StyledTextField */ .tH, {
                                                name: "phone",
                                                label: "Phone Number",
                                                value: props.values.phone,
                                                onChange: props.handleChange,
                                                onBlur: props.handleBlur,
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "error",
                                                children: props.errors.phone
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_5__/* .SecondaryButton */ .kq, {
                                        variant: "contained",
                                        className: "secondaryButton",
                                        color: "secondary",
                                        type: "submit",
                                        disabled: !(props.isValid && props.dirty) || formLoading,
                                        children: formLoading ? "Updating.." : "Update"
                                    })
                                ]
                            })
                        })
                })
            })
        ]
    }));
};


/***/ })

};
;