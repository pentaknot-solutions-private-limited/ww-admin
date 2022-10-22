"use strict";
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentEmailComponent)
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








function ContentEmailComponent() {
    // States
    const { 0: emailUpdateSuccess , 1: setEmailUpdateSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: adminData , 1: setAdminData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: formLoading , 1: setFormLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    // Variables
    const initialValues = {
        email: adminData === null || adminData === void 0 ? void 0 : adminData.emailId
    };
    const validataion = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_4__.string().email("Invalid email").required("This field can't be blank")
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
            emailId: values.email
        };
        try {
            const updateAdminDataApiCall = await adminService.updateAdminData(payload);
            if (!updateAdminDataApiCall.data.error) {
                console.log(updateAdminDataApiCall.data.data);
                setFormLoading(false);
                setEmailUpdateSuccess(true);
                setLoading(false);
            } else {
                console.log(updateAdminDataApiCall.data.error);
                setFormLoading(false);
                setLoading(false);
            }
        } catch (error) {
            setFormLoading(false);
            console.log(error.request);
            setLoading(false);
        }
        refreshApi();
        setTimeout(()=>{
            setEmailUpdateSuccess(false);
        }, 2000);
    };
    //   Refresh Api
    const refreshApi = ()=>{
        setLoading(true);
        getAdminData();
        setLoading(false);
    };
    //   Get Admin Data Api
    const getAdminData = async ()=>{
        setLoading(true);
        try {
            const adminDataApiCall = await adminService.getAdminData();
            if (!adminDataApiCall.data.error) {
                setAdminData(adminDataApiCall.data.data);
                setLoading(false);
            // initialValues.email = adminDataApiCall.data.data.emailId;
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
            emailUpdateSuccess && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                className: "successToasty",
                variant: "outlined",
                severity: "success",
                children: "Email Updated Successfully"
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
                                                name: "email",
                                                label: "Email",
                                                value: props.values.email,
                                                onChange: props.handleChange,
                                                onBlur: props.handleBlur,
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "error",
                                                children: props.errors.email
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