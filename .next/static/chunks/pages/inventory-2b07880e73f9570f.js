(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{4288:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(916),a=n(4695),o=n(7294),i=n(6010),u=n(8320),s=n(4867),c=n(4780),d=n(9628),l=n(3264),f=n(6500),p=n(5893);const m=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,f.Z)(),y=(0,l.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,u.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),h=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:v});var g=n(6622),x=n(1719),b=n(8884);var k=function(e={}){const{createStyledComponent:t=y,useThemeProps:n=h,componentName:d="MuiContainer"}=e,l=t((({theme:e,ownerState:t})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,n)=>{const r=n,a=e.breakpoints.values[r];return 0!==a&&(t[e.breakpoints.up(r)]={maxWidth:`${a}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})));return o.forwardRef((function(e,t){const o=n(e),{className:f,component:v="div",disableGutters:y=!1,fixed:h=!1,maxWidth:g="lg"}=o,x=(0,r.Z)(o,m),b=(0,a.Z)({},o,{component:v,disableGutters:y,fixed:h,maxWidth:g}),k=((e,t)=>{const{classes:n,fixed:r,disableGutters:a,maxWidth:o}=e,i={root:["root",o&&`maxWidth${(0,u.Z)(String(o))}`,r&&"fixed",a&&"disableGutters"]};return(0,c.Z)(i,(e=>(0,s.Z)(t,e)),n)})(b,d);return(0,p.jsx)(l,(0,a.Z)({as:v,ownerState:b,className:(0,i.Z)(k.root,f),ref:t},x))}))}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`maxWidth${(0,g.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,b.Z)({props:e,name:"MuiContainer"})})},9707:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(4695),a=n(916),o=n(9766),i=n(5578);const u=["sx"];function s(e){const{sx:t}=e,n=(0,a.Z)(e,u),{systemProps:s,otherProps:c}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{i.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let d;return d=Array.isArray(t)?[s,...t]:"function"===typeof t?(...e)=>{const n=t(...e);return(0,o.P)(n)?(0,r.Z)({},s,n):s}:(0,r.Z)({},s,t),(0,r.Z)({},c,{sx:d})}},5881:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inventory",function(){return n(9996)}])},9996:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5666),a=n.n(r),o=n(5893),i=n(4288),u=n(1163),s=n(7294),c=n(2762),d=n(6762),l=n(1622),f=n(7174),p=n(5867),m=n(4266);function v(e,t,n,r,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){v(o,r,a,i,u,"next",e)}function u(e){v(o,r,a,i,u,"throw",e)}i(void 0)}))}}var h=[{id:"createdAt",name:"Date",disabledSorting:"true"},{id:"carImage",name:"Image",disabledSorting:"true"},{id:"carName",name:"Title",disabledSorting:"true"},{id:"ownerShip",name:"Owner Ship",disabledSorting:"true"},{id:"kmDriven",name:"KM Driven",disabledSorting:"true"},{id:"year",name:"Year",disabledSorting:"true"},{id:"delete",name:"Delete",disabledSorting:"true",action:"deleteInventoryCar"}];function g(){var e=(0,s.useState)(),t=e[0],n=e[1],r=(0,s.useState)(),v=r[0],g=r[1],x=new m.V,b=new p.Z,k=(0,u.useRouter)(),Z=(0,s.useContext)(l.Z),C=(Z.loading,Z.setLoading),w=(0,s.useContext)(f.Z),I=w.refreshData,S=(w.setRefreshData,y(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,x.getAllInventory();case 4:t=e.sent,n(t.data.data),C(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),C(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))),W=y(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S();case 1:case"end":return e.stop()}}),e)}))),P=y(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),r={carOrder:n},e.prev=2,e.next=5,b.updateCarInventory(t,r);case 5:e.sent,C(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),C(!1);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return(0,s.useEffect)((function(){S()}),[]),(0,s.useEffect)((function(){I&&W()}),[I]),(0,s.useEffect)((function(){v&&(v.map((function(e,t){P(e.Car_Detail._id,t)})),W())}),[v]),(0,o.jsx)("section",{className:"section-inventory",children:(0,o.jsxs)(i.Z,{maxWidth:"lg",children:[(0,o.jsxs)("div",{className:"flex-container",children:[(0,o.jsx)("h3",{children:"Inventory"}),(0,o.jsx)(c.kq,{variant:"contained",color:"secondary",onClick:function(){k.push("/inventory/add-inventory")},children:"ADD Inventory"})]}),t&&t.length>0?(0,o.jsx)(d.Z,{parentPage:"inventory",inventoryOrdering:!0,userDatas:t,setImageReorder:g,setUserData:n,headCells:h}):(0,o.jsx)("div",{className:"no-data-available",children:(0,o.jsx)("span",{children:"No Data Available"})})]})})}},5867:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5669);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"allBrands",value:function(){return r.Z.get("/carMake")}},{key:"deleteBrands",value:function(e){return r.Z.post("/carMake/delete/".concat(e))}},{key:"addBrand",value:function(e){return r.Z.post("/carMake",e)}},{key:"getCityList",value:function(){return r.Z.get("/city")}},{key:"deleteCityById",value:function(e){return r.Z.post("/city/delete/".concat(e))}},{key:"addCity",value:function(e){return r.Z.post("/city",e)}},{key:"addCarInventory",value:function(e){return r.Z.post("/carDetail",e)}},{key:"updateCarInventory",value:function(e,t){return r.Z.put("/carDetail/".concat(e),t)}},{key:"updateCarEquiment",value:function(e,t){return r.Z.put("/carequipment/".concat(e),t)}},{key:"getAllCarBody",value:function(){return r.Z.get("/carBody")}},{key:"deleteCarImageById",value:function(e){return r.Z.post("/carImage/delete/".concat(e))}},{key:"updateCarImageById",value:function(e){return r.Z.post("/carImage",e)}},{key:"getAllCommentById",value:function(e){return r.Z.get("/comment?id=".concat(e))}},{key:"addComment",value:function(e){return r.Z.post("/comment",e)}}])&&a(t.prototype,n),o&&a(t,o),e}()},4266:function(e,t,n){"use strict";n.d(t,{V:function(){return o}});var r=n(5669);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"getAllInventory",value:function(){return r.Z.get("/car/complete/car/detail")}},{key:"getInventoryById",value:function(e){return r.Z.get("/car/completeCarDetailById/".concat(e))}},{key:"uploadCarImage",value:function(e){return r.Z.post("/carImage",e)}},{key:"updateCarImageOrder",value:function(e,t){return r.Z.put("/carImage/".concat(e),t)}},{key:"deleteCarInventoryById",value:function(e){return r.Z.post("/api/car/delete/".concat(e))}}])&&a(t.prototype,n),o&&a(t,o),e}()}},function(e){e.O(0,[885,630,669,267,118,694,960,762,774,888,179],(function(){return t=5881,e(e.s=t);var t}));var t=e.O();_N_E=t}]);