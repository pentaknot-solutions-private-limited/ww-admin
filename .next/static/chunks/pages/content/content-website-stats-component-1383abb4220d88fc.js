(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{5544:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/content-website-stats-component",function(){return t(1560)}])},1560:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(5666),a=t.n(r),o=t(5893),i=t(2741),c=t(2175),u=t(7294),s=t(4231),d=t(2762),l=t(1622),f=t(2295);function p(e,n,t,r,a,o,i){try{var c=e[o](i),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,a)}function v(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){p(o,r,a,i,c,"next",e)}function c(e){p(o,r,a,i,c,"throw",e)}i(void 0)}))}}function m(){var e=(0,u.useState)(!1),n=e[0],t=e[1],r=(0,u.useState)(),p=r[0],m=r[1],x=(0,u.useState)(),h=x[0],b=x[1],g={customersServed:null===p||void 0===p?void 0:p.customersServed},w=s.Ry().shape({customersServed:s.Z_().required("This field can't be blank")}),k=new f.l,y=(0,u.useContext)(l.Z),S=(y.loading,y.setLoading),Z=v(a().mark((function e(n){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),b(!0),console.log(n),r={customersServed:n.customersServed},e.prev=4,e.next=7,k.updateAdminData(r);case 7:(o=e.sent).data.error?(console.log(o.data.error),b(!1),S(!1)):(console.log(o.data.data),b(!1),t(!0),S(!1)),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),b(!1),console.log(e.t0.request),S(!1);case 16:j(),setTimeout((function(){t(!1)}),2e3);case 18:case"end":return e.stop()}}),e,null,[[4,11]])}))),j=function(){S(!0),z(),S(!1)},z=v(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,k.getAdminData();case 4:(n=e.sent).data.error?(console.log(n.data.error),S(!1)):(m(n.data.data),S(!1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),S(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return(0,u.useEffect)((function(){z()}),[]),(0,o.jsxs)(o.Fragment,{children:[n&&(0,o.jsx)(i.Z,{className:"successToasty",variant:"outlined",severity:"success",children:"Customers Served Updated Successfully"}),(0,o.jsx)("div",{className:"content-page-section",children:p&&(0,o.jsx)(c.J9,{enableReinitialize:!0,initialValues:g,validationSchema:w,onSubmit:Z,children:function(e){return(0,o.jsx)(c.l0,{children:(0,o.jsxs)("div",{className:"flex-container",children:[(0,o.jsxs)("div",{className:"textfield-wrapper",children:[(0,o.jsx)(d.tH,{name:"customersServed",label:"Customers Served",value:e.values.customersServed,onChange:e.handleChange,onBlur:e.handleBlur,variant:"outlined",fullWidth:!0}),(0,o.jsx)("span",{className:"error",children:e.errors.customersServed})]}),(0,o.jsx)(d.kq,{variant:"contained",className:"secondaryButton",color:"secondary",type:"submit",disabled:!(e.isValid&&e.dirty)||h,children:h?"Updating..":"Update"})]})})}})})]})}},2762:function(e,n,t){"use strict";t.d(n,{kq:function(){return v},tH:function(){return m},Jn:function(){return x},Uy:function(){return h},Vy:function(){return b}});var r=t(5084),a=t(7169),o=t(4631),i=t(6777),c=t(3264);function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function s(){var e=u(["\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  border-radius: 4px;\n  @media (max-width: 768px) {\n    padding: 5px 10px;\n  }\n"]);return s=function(){return e},e}function d(){var e=u(["\n  background: rgba(33, 33, 33, 0.08);\n  border-radius: 4px;\n  input,\n  input::placeholder,\n  textarea {\n    font-size: 16px;\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 1;\n  }\n  margin-bottom: 15px;\n  fieldset {\n    display: none !important;\n  }\n"]);return d=function(){return e},e}function l(){var e=u(["\n  & .MuiDrawer-paper {\n    max-width: 430px;\n    width: 100%;\n  }\n"]);return l=function(){return e},e}function f(){var e=u(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #dedede;\n\n  & h5 {\n    font-size: 20px;\n    color: #373737;\n    font-weight: 400;\n    margin: 0px;\n  }\n"]);return f=function(){return e},e}function p(){var e=u(['\n  padding: 15px 10px;\n  border: 0px;\n  box-shadow: none;\n  font-family: "SF Compact Display";\n  & .MuiTable-root {\n    border: 1px solid #e7e7ed;\n    box-sizing: border-box;\n    border-radius: 4px;\n  }\n  th {\n    font-weight: 600;\n    font-size: 16px;\n    color: #272833;\n    font-family: inherit;\n  }\n']);return p=function(){return e},e}var v=(0,c.Z)(r.Z)(s()),m=(0,c.Z)(a.Z)(d()),x=(0,c.Z)(o.ZP)(l()),h=(0,c.Z)("div")(f()),b=(0,c.Z)(i.Z)(p())},2295:function(e,n,t){"use strict";t.d(n,{l:function(){return u}});var r=t(6388),a=t.n(r),o=t(5669),i=t(4929);function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,(t=[{key:"getAdminData",value:function(){return a().get("".concat(i.z,"/contactDetail/623202048d85ac348ad4704c"))}},{key:"updateAdminData",value:function(e){return a().put("".concat(i.z,"/contactDetail/623202048d85ac348ad4704c"),e)}},{key:"getSocialLink",value:function(){return o.Z.get("/socialMedia")}},{key:"updateFacebookLink",value:function(e){return o.Z.put("/socialMedia/61f03b1260bd87265cfa1f67",e)}},{key:"updateInstagramLink",value:function(e){return o.Z.put("/socialMedia/61f03bd960bd87265cfa1f6f",e)}},{key:"updateYoutubeLink",value:function(e){return o.Z.put("/socialMedia/61f03c2360bd87265cfa1f73",e)}},{key:"getAllUserList",value:function(){return o.Z.get("admin/getAll/User")}},{key:"getWebsiteStats",value:function(){return o.Z.get("admin/getAll/User")}}])&&c(n.prototype,t),r&&c(n,r),e}()},5669:function(e,n,t){"use strict";var r=t(5666),a=t.n(r),o=t(6388),i=t.n(o),c=t(4929),u=t(7628),s=t(6245),d=t(7484),l=t.n(d);function f(e,n,t,r,a,o,i){try{var c=e[o](i),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,a)}var p,v=(0,u.H)()&&(0,u.H)(),m=(0,u.z)()&&(0,u.z)(),x=i().create({baseURL:c.z,headers:{"x-access-token":v}});x.interceptors.request.use((p=a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v=(0,u.H)()&&(0,u.H)(),n.headers["x-access-token"]=v,!((t=v&&(0,s.Z)(v))&&l().unix(t.exp).diff(l()())<1)){e.next=15;break}return console.log(m.id),e.prev=6,e.next=9,i().get("".concat(c.z,"/admin/refreshToken/").concat(m.id));case 9:(r=e.sent).data.error||m&&(m.accessToken=r.data.data,localStorage.setItem("jwt",JSON.stringify(m))),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(6);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})),function(){var e=this,n=arguments;return new Promise((function(t,r){var a=p.apply(e,n);function o(e){f(a,t,r,o,i,"next",e)}function i(e){f(a,t,r,o,i,"throw",e)}o(void 0)}))})),n.Z=x},4929:function(e,n,t){"use strict";t.d(n,{z:function(){return r}});var r="https://api.wishwheels.com/api"},7628:function(e,n,t){"use strict";t.d(n,{H:function(){return r},z:function(){return a}});var r=function(){if(localStorage.getItem("jwt")){var e,n,t=localStorage.getItem("jwt");if(t)e=null===(n=JSON.parse(t))||void 0===n?void 0:n.accessToken;return e}},a=function(){var e="",n="";return localStorage&&(e=localStorage.getItem("jwt")||"")&&(n=JSON.parse(e)),n}}},function(e){e.O(0,[669,267,175,231,642,774,888,179],(function(){return n=5544,e(e.s=n);var n}));var n=e.O();_N_E=n}]);