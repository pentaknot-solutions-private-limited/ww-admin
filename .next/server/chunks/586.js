"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 4586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentSocialLinkComponent)
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








function ContentSocialLinkComponent() {
    // States
    const { 0: socialLinkUpdate , 1: setSocialLinkUpdate  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: socialData , 1: setSocialData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const { 0: formLoading , 1: setFormLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    // Variables
    const initialValues = {
        facebook: socialData && socialData[0].link,
        instagram: socialData && socialData[1].link,
        youtube: socialData && socialData[2].link
    };
    const validataion = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
        facebook: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("This feild can't be blank"),
        instagram: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("This feild can't be blank"),
        youtube: yup__WEBPACK_IMPORTED_MODULE_4__.string().required("This feild can't be blank")
    });
    const adminService = new _src_service_admin__WEBPACK_IMPORTED_MODULE_7__/* .AdminService */ .l();
    // Context
    const { loading , setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_src_context_loading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    // Functions
    // Facebook Link Update
    const facebookHandleSubmit = async (values)=>{
        setFormLoading(true);
        const facebookPayload = {
            link: values.facebook
        };
        try {
            const faceBookUpdateApiCall = await adminService.updateFacebookLink(facebookPayload);
            if (!faceBookUpdateApiCall.data.error) {
                setFormLoading(false);
                setSocialLinkUpdate(true);
            } else {
                console.log(faceBookUpdateApiCall.data.error);
                setFormLoading(false);
            }
        } catch (error) {
            setFormLoading(false);
            console.log(error.request);
        }
        refreshApi();
        setTimeout(()=>{
            setSocialLinkUpdate(false);
        }, 2000);
    };
    // instagram Link Update
    const instagramHandleSubmit = async (values)=>{
        setFormLoading(true);
        const instagramPayload = {
            link: values.instagram
        };
        try {
            const instagramUpdateApiCall = await adminService.updateInstagramLink(instagramPayload);
            if (!instagramUpdateApiCall.data.error) {
                setFormLoading(false);
                setSocialLinkUpdate(true);
            } else {
                console.log(instagramUpdateApiCall.data.error);
                setFormLoading(false);
            }
        } catch (error) {
            setFormLoading(false);
            console.log(error.request);
        }
        refreshApi();
        setTimeout(()=>{
            setSocialLinkUpdate(false);
        }, 2000);
    };
    // youtube Link Update
    const youtubeHandleSubmit = async (values)=>{
        setFormLoading(true);
        const youtubePayload = {
            link: values.youtube
        };
        try {
            const youtubeUpdateApiCall = await adminService.updateYoutubeLink(youtubePayload);
            if (!youtubeUpdateApiCall.data.error) {
                setFormLoading(false);
                setSocialLinkUpdate(true);
            } else {
                console.log(youtubeUpdateApiCall.data.error);
                setFormLoading(false);
            }
        } catch (error) {
            setFormLoading(false);
            console.log(error.request);
        }
        refreshApi();
        setTimeout(()=>{
            setSocialLinkUpdate(false);
        }, 2000);
    };
    //   Refresh Api
    const refreshApi = ()=>{
        getSocialData();
    };
    // //   Get social Data Api
    const getSocialData = async ()=>{
        setLoading(true);
        try {
            const socialDataApiCall = await adminService.getSocialLink();
            if (!socialDataApiCall.data.error) {
                setSocialData(socialDataApiCall.data.data);
                setLoading(false);
            } else {
                console.log(socialDataApiCall.data.error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    // Effects
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        getSocialData();
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            socialLinkUpdate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                className: "successToasty",
                variant: "outlined",
                severity: "success",
                children: "Social Link Updated Successfully"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content-page-section",
                children: socialData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                    enableReinitialize: true,
                    initialValues: initialValues,
                    validationSchema: validataion,
                    onSubmit: facebookHandleSubmit,
                    children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "textfield-wrapper",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_5__/* .StyledTextField */ .tH, {
                                                name: "facebook",
                                                label: "Facebook",
                                                value: props.values.facebook,
                                                onChange: props.handleChange,
                                                onBlur: props.handleBlur,
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "error",
                                                children: props.errors.facebook
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content-page-section",
                children: socialData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                    enableReinitialize: true,
                    initialValues: initialValues,
                    validationSchema: validataion,
                    onSubmit: instagramHandleSubmit,
                    children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "textfield-wrapper",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_5__/* .StyledTextField */ .tH, {
                                                name: "instagram",
                                                label: "Instagram",
                                                value: props.values.instagram,
                                                onChange: props.handleChange,
                                                onBlur: props.handleBlur,
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "error",
                                                children: props.errors.instagram
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content-page-section",
                children: socialData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                    enableReinitialize: true,
                    initialValues: initialValues,
                    validationSchema: validataion,
                    onSubmit: youtubeHandleSubmit,
                    children: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "textfield-wrapper",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_GlobalElement__WEBPACK_IMPORTED_MODULE_5__/* .StyledTextField */ .tH, {
                                                name: "youtube",
                                                label: "Youtube",
                                                value: props.values.youtube,
                                                onChange: props.handleChange,
                                                onBlur: props.handleBlur,
                                                variant: "outlined",
                                                fullWidth: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "error",
                                                children: props.errors.youtube
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