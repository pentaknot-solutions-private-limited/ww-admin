(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7237:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(541)}])},541:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var r=t(5666),a=t.n(r),o=t(5893),i=t(5084),u=t(7294),s=t(2175),c=t(4231),l=t(2762),d=t(1163);function p(n){var e=n.formik,t=function(n){n.target.value.length>n.target.maxLength&&(n.target.value=n.target.value.slice(0,n.target.maxLength))},r=function(n){if("Delete"===n.key||"Backspace"===n.key){var e=n.target.tabIndex-2;e>-1&&n.target.parentNode.childNodes[e].focus()}else if(""!=n.target.value){var t=n.target.tabIndex;t<6&&n.target.parentNode.childNodes[t].focus()}};return(0,o.jsx)("div",{className:"otp-wrapper",children:(0,o.jsxs)("div",{className:"otpContainer",children:[(0,o.jsx)("input",{name:"otp1",value:e.values.otp1,onChange:e.handleChange,type:"number",className:"otpInput",onInput:function(n){return t(n)},maxLength:1,tabIndex:1,onKeyUp:function(n){return r(n)}}),(0,o.jsx)("input",{name:"otp2",value:e.values.otp2,onChange:e.handleChange,type:"number",className:"otpInput",onInput:function(n){return t(n)},maxLength:1,tabIndex:2,onKeyUp:function(n){return r(n)}}),(0,o.jsx)("input",{name:"otp3",value:e.values.otp3,onChange:e.handleChange,type:"number",className:"otpInput",maxLength:1,tabIndex:3,onInput:function(n){return t(n)},onKeyUp:function(n){return r(n)}}),(0,o.jsx)("input",{name:"otp4",value:e.values.otp4,onChange:e.handleChange,type:"number",className:"otpInput",maxLength:1,tabIndex:4,onInput:function(n){return t(n)},onKeyUp:function(n){return r(n)}}),(0,o.jsx)("input",{name:"otp5",value:e.values.otp5,onChange:e.handleChange,type:"number",className:"otpInput",maxLength:1,tabIndex:5,onInput:function(n){return t(n)},onKeyUp:function(n){return r(n)}}),(0,o.jsx)("input",{name:"otp6",value:e.values.otp6,onChange:e.handleChange,type:"number",className:"otpInput",maxLength:1,tabIndex:6,onInput:function(n){return t(n)},onKeyUp:function(n){return r(n)}})]})})}var f=t(6388),h=t.n(f),m=t(4929);function v(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var x=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"sendOtp",value:function(n){return h().post("".concat(m.z,"/otp/sendOtpAdmin"),n)}},{key:"verifyOtp",value:function(n){return h().post("".concat(m.z,"/otp/verifyOtpAdmin"),n)}}])&&v(e.prototype,t),r&&v(e,r),n}(),g=t(3644),b=t(260);function y(n,e,t,r,a,o,i){try{var u=n[o](i),s=u.value}catch(c){return void t(c)}u.done?e(s):Promise.resolve(s).then(r,a)}function w(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(n){y(o,r,a,i,u,"next",n)}function u(n){y(o,r,a,i,u,"throw",n)}i(void 0)}))}}function j(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,a=!1,o=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function N(){var n=(0,u.useState)(!0),e=n[0],t=n[1],r=(0,u.useState)(!1),f=r[0],h=r[1],m=(0,u.useState)(),v=m[0],y=m[1],N=(0,u.useState)(),I=N[0],C=N[1],k=(0,u.useState)(!1),S=k[0],z=k[1],Z=(0,u.useState)(),O=(Z[0],Z[1],j((0,g._)("jwt",null),2)),_=(O[0],O[1]),q=(0,u.useState)(),E=q[0],R=q[1],A=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,D=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,L=c.Ry().shape({adminData:c.Z_().required("phone number or Email  is required")}),P={otp1:"",otp2:"",otp3:"",otp4:"",otp5:"",otp6:""},U=c.Ry().shape({otp1:c.Rx().required(),otp2:c.Rx().required(),otp3:c.Rx().required(),otp4:c.Rx().required(),otp5:c.Rx().required(),otp6:c.Rx().required()}),V=(0,d.useRouter)(),K=new x,T=(0,u.useContext)(b.Z),J=(T.authenticated,T.setAuthenticated,w(a().mark((function n(e,t){var r,o,i,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.resetForm,y(e),h(!1),C(null),z(!0),n.prev=5,n.next=8,K.sendOtp(e);case 8:(o=n.sent).data.error?(C(o.data.error),z(!1),r()):(r(),z(!1),h(!0)),n.next=20;break;case 12:n.prev=12,n.t0=n.catch(5),u=JSON.parse(null===n.t0||void 0===n.t0||null===(i=n.t0.request)||void 0===i?void 0:i.response),C(null===u||void 0===u?void 0:u.message),r(),z(!1),h(!1);case 20:case"end":return n.stop()}}),n,null,[[5,12]])})))),B=w(a().mark((function n(e,t){var r,o,i,u,s,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.resetForm,o="\n            ".concat(e.otp1).concat(e.otp2).concat(e.otp3).concat(e.otp4).concat(e.otp5).concat(e.otp6,"\n            "),i={adminData:null===v||void 0===v?void 0:v.adminData,otp:o.toString().replaceAll(/\s/g,"")},C(null),z(!0),n.prev=5,n.next=8,K.verifyOtp(i);case 8:(u=n.sent).data.error?(C(u.data.error),z(!1),r(P)):(_(u.data.data),R(u.data),z(!1),r(P)),n.next=19;break;case 12:n.prev=12,n.t0=n.catch(5),c=JSON.parse(null===n.t0||void 0===n.t0||null===(s=n.t0.request)||void 0===s?void 0:s.response),C(null===c||void 0===c?void 0:c.message),z(!1),r(P);case 19:case"end":return n.stop()}}),n,null,[[5,12]])})));return(0,u.useEffect)((function(){localStorage.getItem("jwt")?"/login"==V.pathname&&V.push("/"):V.push("/login")}),[]),(0,u.useEffect)((function(){localStorage.getItem("jwt")?"/login"==V.pathname&&V.push("/"):V.push("/login")}),[E]),(0,o.jsx)("div",{children:(0,o.jsxs)("section",{className:"section-login",children:[(0,o.jsx)("div",{className:"wish-wheel-banner order-md-2 "}),(0,o.jsx)("div",{className:"login-form-container order-md-1",children:(0,o.jsxs)("div",{className:"content",children:[(0,o.jsx)("h2",{children:"Welcome Back !"}),(0,o.jsx)("div",{className:"login-form-card",children:f&&f?(0,o.jsxs)("div",{className:"otp-card",children:[(0,o.jsx)("h4",{children:"Enter OTP received on your mobile and email"}),(0,o.jsx)(s.J9,{initialValues:P,validationSchema:U,onSubmit:B,children:function(n){return(0,o.jsxs)(s.l0,{children:[(0,o.jsx)(p,{formik:n}),(0,o.jsx)(i.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",disabled:S||!(n.isValid&&n.dirty),children:S?"Verifying....":"Verify"}),(0,o.jsx)("div",{className:"error",children:I})]})}})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:"Login"}),(0,o.jsx)(s.J9,{enableReinitialize:!0,initialValues:{adminData:""},validationSchema:L,onSubmit:J,children:function(n){return(0,o.jsxs)(s.l0,{id:"login-form",children:[(0,o.jsx)(l.tH,{required:!0,autoComplete:""+Math.random(),name:"adminData",value:n.values.adminData,onChange:function(e){n.handleChange(e),e.target.value>3&&/\d/.test(e.target.value)?A.test(e.target.value)?t(!1):t(!0):D.test(e.target.value)?t(!1):t(!0)},onBlur:n.handleBlur,variant:"filled",label:"Phone number or Email",fullWidth:!0}),(0,o.jsx)(i.Z,{color:"primary",variant:"contained",fullWidth:!0,type:"submit",disabled:e||S||!(n.isValid&&n.dirty),children:S?"Sending Otp...":"Authenticate me"}),(0,o.jsx)("div",{className:"error",children:I})]})}})]})})]})})]})})}},2762:function(n,e,t){"use strict";t.d(e,{kq:function(){return m},C9:function(){return v},tH:function(){return x},Jn:function(){return g},Uy:function(){return b},Vy:function(){return y}});var r=t(5084),a=t(7169),o=t(4631),i=t(6777),u=t(3264);function s(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function c(){var n=s(["\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  border-radius: 4px;\n  @media (max-width: 768px) {\n    padding: 5px 10px;\n  }\n"]);return c=function(){return n},n}function l(){var n=s(["\n  font-weight: 500;\n  font-size: 14px;\n  box-shadow: none;\n  background-color: rgb(249, 249, 249);\n  &:hover {\n    background-color: rgb(237, 237, 238);\n    box-shadow: none;\n  }\n  border: 1px solid rgb(194, 194, 194);\n  text-transform: capitalize;\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 5px 10px;\n  height: 30px;\n"]);return l=function(){return n},n}function d(){var n=s(["\n  background: rgba(33, 33, 33, 0.08);\n  border-radius: 4px;\n  input,\n  input::placeholder,\n  textarea {\n    font-size: 16px;\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 1;\n  }\n  margin-bottom: 15px;\n  fieldset {\n    display: none !important;\n  }\n"]);return d=function(){return n},n}function p(){var n=s(["\n  & .MuiDrawer-paper {\n    max-width: 430px;\n    width: 100%;\n  }\n"]);return p=function(){return n},n}function f(){var n=s(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #dedede;\n\n  & h5 {\n    font-size: 20px;\n    color: #373737;\n    font-weight: 400;\n    margin: 0px;\n  }\n"]);return f=function(){return n},n}function h(){var n=s(['\n  padding: 15px 10px;\n  border: 0px;\n  box-shadow: none;\n  font-family: "SF Compact Display";\n  & .MuiTable-root {\n    border: 1px solid #e7e7ed;\n    box-sizing: border-box;\n    border-radius: 4px;\n  }\n  th {\n    font-weight: 600;\n    font-size: 16px;\n    color: #272833;\n    font-family: inherit;\n  }\n']);return h=function(){return n},n}var m=(0,u.Z)(r.Z)(c()),v=(0,u.Z)(r.Z)(l()),x=(0,u.Z)(a.Z)(d()),g=(0,u.Z)(o.ZP)(p()),b=(0,u.Z)("div")(f()),y=(0,u.Z)(i.Z)(h())},4929:function(n,e,t){"use strict";t.d(e,{z:function(){return r}});var r="https://api.wishwheels.com/api"}},function(n){n.O(0,[669,267,175,231,774,888,179],(function(){return e=7237,n(n.s=e);var e}));var e=n.O();_N_E=e}]);