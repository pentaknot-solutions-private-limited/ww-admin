(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{4370:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inventory/[id]",function(){return r(5010)}])},9788:function(e,n){"use strict";n.Z={src:"/_next/static/media/deleteIcon.f157f765.svg",height:43,width:43}},9180:function(e,n){"use strict";n.Z={src:"/_next/static/media/upload-icon.0b1e9562.svg",height:44,width:51}},5010:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Y}});var a=r(5666),t=r.n(a),i=r(5893),l=r(2741),o=r(4288),d=r(9072),c=r(5343),u=r(8316),s=r(6515),f=r(7056),v=r(7169),p=r(562),m=r(7294),h=r(2762),x=r(5675),b=r(9788),y=r(4231),g=r(2175),j=r(4266),w=r(1163),Z=r(9180),k=r(1622),C=r(4976),I=r(5867),P=r(381),_=r.n(P),B=r(7628),N=r(5948),S=r(2359),O=r(774);function D(e,n,r,a,t,i,l){try{var o=e[i](l),d=o.value}catch(c){return void r(c)}o.done?n(d):Promise.resolve(d).then(a,t)}function T(e){return function(){var n=this,r=arguments;return new Promise((function(a,t){var i=e.apply(n,r);function l(e){D(i,a,t,l,o,"next",e)}function o(e){D(i,a,t,l,o,"throw",e)}l(void 0)}))}}function q(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function E(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(n){q(e,n,r[n])}))}return e}function z(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],a=!0,t=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(r.push(l.value),!n||r.length!==n);a=!0);}catch(d){t=!0,i=d}finally{try{a||null==o.return||o.return()}finally{if(t)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Y(){var e,n,a,P,D,q,Y,H,W,M,R,J,F,K=(0,m.useState)(!0),V=K[0],L=K[1],U=(0,m.useState)(),X=U[0],G=U[1],Q=(0,m.useState)(!0),$=(Q[0],Q[1]),ee=(0,m.useState)(!0),ne=(ee[0],ee[1]),re=(0,m.useState)(),ae=re[0],te=re[1],ie=(0,m.useState)(),le=ie[0],oe=ie[1],de=(0,m.useState)(""),ce=de[0],ue=de[1],se=(0,m.useRef)(),fe=(0,m.useState)(!1),ve=(fe[0],fe[1]),pe=se.current||{},me=pe.CKEditor,he=pe.ClassicEditor,xe=(0,m.useState)(""),be=xe[0],ye=xe[1],ge=(0,m.useState)(),je=ge[0],we=ge[1],Ze=(0,w.useRouter)().query.id,ke=new j.V,Ce=new I.Z,Ie=(0,m.useRef)(),Pe={carName:X&&(null===(e=X[0])||void 0===e?void 0:e.Car_Detail.name),carNumber:X&&(null===(n=X[0])||void 0===n?void 0:n.Car_Detail.carNumber),color:X&&(null===(a=X[0])||void 0===a?void 0:a.Car_Detail.color),fuelType:X&&(null===(P=X[0])||void 0===P?void 0:P.Car_Detail.fuelType),kmDriven:X&&(null===(D=X[0])||void 0===D?void 0:D.Car_Detail.kmDriven),minPrice:X&&(null===(q=X[0])||void 0===q?void 0:q.Car_Detail.minPrice),maxPrice:X&&(null===(Y=X[0])||void 0===Y?void 0:Y.Car_Detail.maxPrice),milege:X&&(null===(H=X[0])||void 0===H?void 0:H.Car_Detail.milege),model:X&&(null===(W=X[0])||void 0===W?void 0:W.Car_Detail.modelName),ownerShip:X&&(null===(M=X[0])||void 0===M?void 0:M.Car_Detail.ownerShip),manufactureYear:X&&(null===(R=X[0])||void 0===R?void 0:R.Car_Detail.year),carBrand:X&&(null===(J=X[0])||void 0===J?void 0:J.Car_Make._id),carBodyId:X&&(null===(F=X[0])||void 0===F?void 0:F.Car_Body._id)},_e=(0,B.z)(),Be=(y.Ry({carName:y.Z_().required("This field can't be blank"),carNumber:y.Z_().required("This field can't be blank"),color:y.Z_().required("This field can't be blank"),fuelType:y.Z_().required("This field can't be blank"),kmDriven:y.Z_().required("This field can't be blank"),minPrice:y.Z_().required("This field can't be blank"),maxPrice:y.Z_().required("This field can't be blank"),milege:y.Z_().required("This field can't be blank"),ownerShip:y.Z_().required("This field can't be blank"),manufactureYear:y.Z_().required("This field can't be blank"),carBrand:y.Z_().required("This field can't be blank"),carBodyId:y.Z_().required("This field can't be blank")}),(0,m.useContext)(k.Z)),Ne=(Be.loading,Be.setLoading),Se=function(){L(!V)},Oe=T(t().mark((function e(n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ne(!0),e.prev=1,e.next=4,ke.getInventoryById(n);case 4:(r=e.sent).data.error||(G(r.data.data),we(r.data.data[0].Car_Images)),Ne(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Ne(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),De=T(t().mark((function e(n,r){var a,i,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue(""),Ne(!0),e.prev=2,e.next=5,Ce.updateCarInventory(n,r);case 5:(a=e.sent).data.error?(Ne(!1),ue(a.data.error)):(Ne(!1),He(),ue("")),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(2),Ne(!1),l=JSON.parse(null===e.t0||void 0===e.t0||null===(i=e.t0.request)||void 0===i?void 0:i.response),ue(null===l||void 0===l?void 0:l.message);case 15:case"end":return e.stop()}}),e,null,[[2,9]])}))),Te=function(e){e.target.files.length>0?ne(!1):ne(!0);var n=[],r=A(e.target.files);r.map((function(e){return n.push(e)}));var a=new FormData;if(Ze){a.append("carId",Ze);for(var t=0;t<r.length;t++)a.append("image",r[t]);ze(a)}},qe=T(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ne(!0),e.prev=1,e.next=4,Ce.allBrands();case 4:(n=e.sent).data.error||te(n.data.data),Ne(!1),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])}))),Ee=T(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ne(!0),e.prev=1,e.next=4,Ce.getAllCarBody();case 4:(n=e.sent).data.errro||oe(n.data.data),Ne(!1),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])}))),ze=T(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ne(!0),e.prev=1,e.next=4,Ce.updateCarImageById(n);case 4:e.sent.data.error||(Ne(!1),He()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Ne(!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),Ae=T(t().mark((function e(n,r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(je),Ne(!0),e.prev=2,e.next=5,Ce.deleteCarImageById(n);case 5:e.sent.data.error||(console.log(je),Ne(!1),He()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),Ne(!1);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),Ye=T(t().mark((function e(n,r){var a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ne(!0),e.prev=1,a={equipmentName:r},e.next=5,Ce.updateCarEquiment(n,a);case 5:e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])}))),He=function(){Ze&&Oe(Ze)},We=function(e){if(e.destination){var n=null===Array||void 0===Array?void 0:Array.from(je||""),r=z(n.splice(e.source.index,1),1)[0];n.splice(e.destination.index,0,r),n=n.map((function(e,n){return e.imageOrder=n,e})),we(n),console.log(je)}},Me=T(t().mark((function e(n,r){var a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={imageOrder:r},Ne(!0),e.prev=2,e.next=5,ke.updateCarImageOrder(n,a);case 5:(null===(i=e.sent)||void 0===i?void 0:i.data.error)?console.log(null===i||void 0===i?void 0:i.data.error):console.log(null===i||void 0===i?void 0:i.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return(0,m.useEffect)((function(){Ze&&Oe(Ze)}),[Ze]),(0,m.useEffect)((function(){X&&ye(X[0].Car_Equipments[0].equipmentName)}),[X]),(0,m.useEffect)((function(){se.current={CKEditor:r(5568).CKEditor,ClassicEditor:r(5234)},ve(!0),qe(),Ee()}),[]),(0,i.jsxs)("section",{className:"inspection-detail",children:[ce&&(0,i.jsx)("div",{className:"site-alert",children:(0,i.jsx)(l.Z,{severity:"error",children:ce})}),(0,i.jsxs)(o.Z,{maxWidth:"lg",children:[(0,i.jsxs)("h3",{className:"page-subtitle",children:["Dashboard ",(0,i.jsx)("span",{children:"/"})," Inventory"]}),(0,i.jsx)("div",{className:"site-card",children:X&&(0,i.jsx)(g.J9,{enableReinitialize:!0,initialValues:Pe,onSubmit:function(e){var n,r,a;V&&(_e&&(a={name:null===e||void 0===e?void 0:e.carName,modelName:null===e||void 0===e?void 0:e.model,year:_()(null===e||void 0===e?void 0:e.manufactureYear).format("YYYY"),color:null===e||void 0===e?void 0:e.color,kmDriven:null===e||void 0===e?void 0:e.kmDriven,carNumber:null===e||void 0===e?void 0:e.carNumber,ownerShip:null===e||void 0===e?void 0:e.ownerShip,fuelType:null===e||void 0===e?void 0:e.fuelType,minPrice:null===e||void 0===e?void 0:e.minPrice,maxPrice:null===e||void 0===e?void 0:e.maxPrice,milege:null===e||void 0===e?void 0:e.milege,carMakeId:null===e||void 0===e?void 0:e.carBrand,carBodyId:null===e||void 0===e?void 0:e.carBodyId,userId:null===_e||void 0===_e?void 0:_e.id,roleId:"617adebb2c17ccbd23fe474f"}),Ye(X&&(null===(n=X[0])||void 0===n?void 0:n.Car_Equipments[0]._id),be),De(X&&(null===(r=X[0])||void 0===r?void 0:r.Car_Detail._id),a),null===je||void 0===je||je.map((function(e){Me(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.imageOrder)})))},children:function(e){return(0,i.jsxs)(g.l0,{children:[(0,i.jsxs)("div",{className:"flex-container",children:[(0,i.jsx)("h5",{children:"Car"}),(0,i.jsx)(h.kq,{variant:"contained",color:"secondary",type:"submit",onClick:Se,children:V?"Edit":"Save"})]}),(0,i.jsxs)(d.ZP,{container:!0,spacing:2,sx:{marginBottom:"20px"},children:[(0,i.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,i.jsx)(h.tH,{name:"carName",label:"Car Name",value:e.values.carName,onChange:e.handleChange,InputProps:{readOnly:V},disabled:V,variant:"outlined",fullWidth:!0})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,i.jsx)(h.tH,{name:"color",label:"Color",value:e.values.color,onChange:e.handleChange,InputProps:{readOnly:V},disabled:V,variant:"outlined",fullWidth:!0})}),(0,i.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:3,className:"site-form-field",children:[(0,i.jsxs)(c.Z,{fullWidth:!0,children:[(0,i.jsx)(u.Z,{id:"fueltype-lable",children:"FuelType"}),(0,i.jsxs)(s.Z,{labelId:"fueltype-lable",id:"fueltype-select",error:e.touched.fuelType&&e.errors.fuelType,required:!0,label:"fueltype",name:"fuelType",value:e.values.fuelType,onChange:e.handleChange,inputProps:{readOnly:V},disabled:V,onBlur:e.handleBlur,children:[(0,i.jsx)(f.Z,{value:"petrol",children:"Petrol "}),(0,i.jsx)(f.Z,{value:"diesel",children:"Diesel"}),(0,i.jsx)(f.Z,{value:"electric",children:"Electric"})]})]}),(0,i.jsx)("span",{className:"error",children:e.touched.fuelType&&e.errors.fuelType})]}),(0,i.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,i.jsx)(h.tH,{name:"kmDriven",label:"Km Driven",type:"number",value:e.values.kmDriven,onChange:e.handleChange,InputProps:{readOnly:V},disabled:V,variant:"outlined",fullWidth:!0})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,i.jsx)(h.tH,{name:"maxPrice",label:"Ask Price",type:"number",value:e.values.maxPrice,onChange:e.handleChange,InputProps:{readOnly:V},disabled:V,variant:"outlined",fullWidth:!0})}),(0,i.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:3,className:"site-form-field",children:[(0,i.jsxs)(c.Z,{fullWidth:!0,children:[(0,i.jsx)(u.Z,{id:"ownership-lable",children:"OwnerShip"}),(0,i.jsxs)(s.Z,{labelId:"ownership-lable",error:e.touched.ownerShip&&e.errors.ownerShip,required:!0,id:"ownership-select",label:"ownership",name:"ownerShip",value:e.values.ownerShip,onChange:e.handleChange,inputProps:{readOnly:V},disabled:V,onBlur:e.handleBlur,children:[(0,i.jsx)(f.Z,{value:"1st",children:"1st"}),(0,i.jsx)(f.Z,{value:"2nd",children:"2nd"}),(0,i.jsx)(f.Z,{value:"3rd",children:"3rd"})]})]}),(0,i.jsx)("span",{className:"error",children:e.touched.ownerShip&&e.errors.ownerShip})]}),(0,i.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:3,className:"site-form-field",children:[(0,i.jsx)(S._,{dateAdapter:C.Z,children:(0,i.jsx)(O.M,{views:["year"],label:"Manufacture Year",value:e.values.manufactureYear,InputProps:{readOnly:V},disabled:V,maxDate:new Date,onChange:function(n){return e.setFieldValue("manufactureYear",n)},renderInput:function(e){return(0,i.jsx)(v.Z,E({name:"manufactureYear"},e,{helperText:null,fullWidth:!0}))}})}),(0,i.jsx)("span",{className:"error",children:e.touched.manufactureYear&&e.errors.manufactureYear})]}),(0,i.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:3,className:"site-form-field",children:[(0,i.jsxs)(c.Z,{fullWidth:!0,children:[(0,i.jsx)(u.Z,{id:"brand-lable",children:"Brand"}),(0,i.jsx)(s.Z,{labelId:"brand-lable",id:"brand-select",label:"brand",name:"carBrand",required:!0,value:e.values.carBrand,inputProps:{readOnly:V},disabled:V,onChange:e.handleChange,onBlur:e.handleBlur,children:ae&&ae.map((function(e,n){return(0,i.jsx)(f.Z,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},"brand-item-".concat(n))}))})]}),(0,i.jsx)("span",{className:"error",children:e.touched.carBrand&&e.errors.carBrand})]}),(0,i.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,i.jsx)(h.tH,{name:"model",label:"Model",value:e.values.model,onChange:e.handleChange,InputProps:{readOnly:V},disabled:V,variant:"outlined",fullWidth:!0})}),(0,i.jsxs)(d.ZP,{item:!0,xs:12,sm:6,md:3,className:"site-form-field",children:[(0,i.jsxs)(c.Z,{fullWidth:!0,children:[(0,i.jsx)(u.Z,{id:"carBody-lable",children:"Car Body"}),(0,i.jsx)(s.Z,{labelId:"carBody-lable",id:"carBody-select",label:"Car Body",name:"carBodyId",required:!0,value:e.values.carBodyId,onChange:e.handleChange,onBlur:e.handleBlur,inputProps:{readOnly:V},disabled:V,children:le&&le.map((function(e,n){return(0,i.jsx)(f.Z,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.bodyType},"carbody-item-".concat(n))}))})]}),(0,i.jsx)("span",{className:"error",children:e.touched.carBodyId&&e.errors.carBodyId})]})]}),(0,i.jsx)("h5",{children:"Additional Feature"}),(0,i.jsx)("div",{className:"ck-editor",children:X?(0,i.jsx)(me,{editor:he,data:X[0].Car_Equipments[0].equipmentName,id:"inputText",disabled:V,onChange:function(e,n){n.getData().length>0?($(!1),ye(n.getData())):$(!0)}}):null}),(0,i.jsx)("h5",{children:"Images"}),(0,i.jsx)(N.Z5,{onDragEnd:We,children:(0,i.jsx)(N.bK,{droppableId:"updateCarImage",isDropDisabled:V,direction:"horizontal",children:function(e){return(0,i.jsxs)("div",E({className:"inventory-img-container"},e.droppableProps,{ref:e.innerRef,children:[!V&&(0,i.jsx)("div",{className:"img-card-wrapper",children:(0,i.jsxs)("div",{className:"upload-file-container",children:[(0,i.jsx)("input",{className:"uploadfile",accept:"image/*",type:"file",ref:Ie,onChange:Te,multiple:!0}),(0,i.jsxs)("div",{className:"upload-file-logo",children:[(0,i.jsx)(x.default,{src:Z.Z,alt:"Upload",height:30,width:30}),(0,i.jsx)("p",{children:"Browse to upload"})]}),(0,i.jsxs)("div",{className:"select-file",children:[(0,i.jsx)("span",{children:"Select a file"})," or drag in form"]})]})}),je&&je.sort((function(e,n){return e.imageOrder-n.imageOrder})).map((function(e,n,r){return(0,i.jsx)(N._l,{draggableId:"update-car-image-".concat(n),isDragDisabled:V,index:n,children:function(n){return(0,i.jsxs)("div",E({},n.draggableProps,n.dragHandleProps,{ref:n.innerRef,className:"img-card-wrapper",children:[!V&&(0,i.jsx)(p.Z,{onClick:function(){Ae(e._id)},children:(0,i.jsx)(x.default,{src:b.Z,alt:"delete"})}),(0,i.jsx)("img",{src:e.imageLink,height:150,width:250,alt:e.title})]}))}},"priview-car-".concat(n))}))]}))}})})]})}})})]})]})}},2762:function(e,n,r){"use strict";r.d(n,{kq:function(){return p},tH:function(){return m},Jn:function(){return h},Uy:function(){return x},Vy:function(){return b}});var a=r(5084),t=r(7169),i=r(4631),l=r(6777),o=r(3264);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function c(){var e=d(["\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  border-radius: 4px;\n  @media (max-width: 768px) {\n    padding: 5px 10px;\n  }\n"]);return c=function(){return e},e}function u(){var e=d(["\n  background: rgba(33, 33, 33, 0.08);\n  border-radius: 4px;\n  input,\n  input::placeholder,\n  textarea {\n    font-size: 16px;\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 1;\n  }\n  margin-bottom: 15px;\n  fieldset {\n    display: none !important;\n  }\n"]);return u=function(){return e},e}function s(){var e=d(["\n  & .MuiDrawer-paper {\n    max-width: 430px;\n    width: 100%;\n  }\n"]);return s=function(){return e},e}function f(){var e=d(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #dedede;\n\n  & h5 {\n    font-size: 20px;\n    color: #373737;\n    font-weight: 400;\n    margin: 0px;\n  }\n"]);return f=function(){return e},e}function v(){var e=d(['\n  padding: 15px 10px;\n  border: 0px;\n  box-shadow: none;\n  font-family: "SF Compact Display";\n  & .MuiTable-root {\n    border: 1px solid #e7e7ed;\n    box-sizing: border-box;\n    border-radius: 4px;\n  }\n  th {\n    font-weight: 600;\n    font-size: 16px;\n    color: #272833;\n    font-family: inherit;\n  }\n']);return v=function(){return e},e}var p=(0,o.Z)(a.Z)(c()),m=(0,o.Z)(t.Z)(u()),h=(0,o.Z)(i.ZP)(s()),x=(0,o.Z)("div")(f()),b=(0,o.Z)(l.Z)(v())},5867:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var a=r(5669);function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,i;return n=e,(r=[{key:"allBrands",value:function(){return a.Z.get("/carMake")}},{key:"deleteBrands",value:function(e){return a.Z.post("/carMake/delete/".concat(e))}},{key:"addBrand",value:function(e){return a.Z.post("/carMake",e)}},{key:"getCityList",value:function(){return a.Z.get("/city")}},{key:"deleteCityById",value:function(e){return a.Z.post("/city/delete/".concat(e))}},{key:"addCity",value:function(e){return a.Z.post("/city",e)}},{key:"addCarInventory",value:function(e){return a.Z.post("/carDetail",e)}},{key:"updateCarInventory",value:function(e,n){return a.Z.put("/carDetail/".concat(e),n)}},{key:"updateCarEquiment",value:function(e,n){return a.Z.put("/carequipment/".concat(e),n)}},{key:"getAllCarBody",value:function(){return a.Z.get("/carBody")}},{key:"deleteCarImageById",value:function(e){return a.Z.post("/carImage/delete/".concat(e))}},{key:"updateCarImageById",value:function(e){return a.Z.post("/carImage",e)}},{key:"getAllCommentById",value:function(e){return a.Z.get("/comment?id=".concat(e))}},{key:"addComment",value:function(e){return a.Z.post("/comment",e)}}])&&t(n.prototype,r),i&&t(n,i),e}()},4266:function(e,n,r){"use strict";r.d(n,{V:function(){return i}});var a=r(5669);function t(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,i;return n=e,(r=[{key:"getAllInventory",value:function(){return a.Z.get("/car/complete/car/detail")}},{key:"getInventoryById",value:function(e){return a.Z.get("/car/completeCarDetailById/".concat(e))}},{key:"uploadCarImage",value:function(e){return a.Z.post("/carImage",e)}},{key:"updateCarImageOrder",value:function(e,n){return a.Z.put("/carImage/".concat(e),n)}},{key:"deleteCarInventoryById",value:function(e){return a.Z.post("/api/car/delete/".concat(e))}}])&&t(n.prototype,r),i&&t(n,i),e}()},5669:function(e,n,r){"use strict";var a=r(5666),t=r.n(a),i=r(6388),l=r.n(i),o=r(4929),d=r(7628),c=r(6245),u=r(7484),s=r.n(u);function f(e,n,r,a,t,i,l){try{var o=e[i](l),d=o.value}catch(c){return void r(c)}o.done?n(d):Promise.resolve(d).then(a,t)}var v,p=(0,d.H)()&&(0,d.H)(),m=(0,d.z)()&&(0,d.z)(),h=l().create({baseURL:o.z,headers:{"x-access-token":p}});h.interceptors.request.use((v=t().mark((function e(n){var r,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=(0,d.H)()&&(0,d.H)(),n.headers["x-access-token"]=p,!((r=p&&(0,c.Z)(p))&&s().unix(r.exp).diff(s()())<1)){e.next=15;break}return console.log(m.id),e.prev=6,e.next=9,l().get("".concat(o.z,"/admin/refreshToken/").concat(m.id));case 9:(a=e.sent).data.error||m&&(m.accessToken=a.data.data,localStorage.setItem("jwt",JSON.stringify(m))),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(6);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var t=v.apply(e,n);function i(e){f(t,r,a,i,l,"next",e)}function l(e){f(t,r,a,i,l,"throw",e)}i(void 0)}))})),n.Z=h},4929:function(e,n,r){"use strict";r.d(n,{z:function(){return a}});var a="https://api.wishwheels.com/api"},7628:function(e,n,r){"use strict";r.d(n,{H:function(){return a},z:function(){return t}});var a=function(){if(localStorage.getItem("jwt")){var e,n,r=localStorage.getItem("jwt");if(r)e=null===(n=JSON.parse(r))||void 0===n?void 0:n.accessToken;return e}},t=function(){var e="",n="";return localStorage&&(e=localStorage.getItem("jwt")||"")&&(n=JSON.parse(e)),n}}},function(e){e.O(0,[885,630,554,669,267,175,231,642,715,655,675,686,774,888,179],(function(){return n=4370,e(e.s=n);var n}));var n=e.O();_N_E=n}]);