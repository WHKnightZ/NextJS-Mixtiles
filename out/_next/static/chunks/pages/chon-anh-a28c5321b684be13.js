(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{6050:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chon-anh",function(){return t(5516)}])},5516:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(4051),o=t.n(r),i=t(5893),a=t(7533),c=t(6885),u="".concat("http://100.24.140.74","/api/"),s=function(){return"orders"},l=t(7294),f=t(9669),d=t.n(f),h=t(6486),v=t(439);function p(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){g(e,n,t[n])}))}return e}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}d().defaults.baseURL=u;var y=function(){var e,n=(e=o().mark((function e(n,t){var r,i,a,c,u,s,l,f,p,g,y,w,j=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=j.length>2&&void 0!==j[2]?j[2]:{},i=j.length>3&&void 0!==j[3]?j[3]:function(){},a=j.length>4&&void 0!==j[4]?j[4]:{},c={Authorization:"bearer ".concat("f0526a9f9b3576b7da0c17ec3890753984585890cef058e12dfb61ddd5bc5c704935328b0ec7da58d8092b889034eb7fc4c91d0c11638c281c604949ac556fcbb81c42b537707f8c5afc31164dee11954d484b583b1f17fa84d0a9adbcede3ec1372e48d3b3cd136931767e6784362c45ed1159912417bcb18d6bee97a2048c0")},u=a.hideToast,s=a.successMessage,l=b(a,["hideToast","successMessage"]),f=m({headers:c,method:n,url:t},l),p=m({},f,{params:r}),"get"!==n&&"delete"!==n){for(w in g=function(e){var n=r[e];(0,h.isArray)(n)?n.forEach((function(n){return y.append(e,n)})):y.append(e,n)},delete p.params,y=new FormData,r)g(w);p.data=y}return e.abrupt("return",new Promise((function(e){d()(p).then((function(n){var t=n.data,r=void 0===t?{}:t,o=r.error;r={status:!o,text:(o||{}).message||!o?s||"Th\xe0nh c\xf4ng!":"C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau!",data:r},u||(0,v.Yz)({type:r.status,message:{content:r.text}}),e(r),i(r)}))})));case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){p(i,r,o,a,c,"next",e)}function c(e){p(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e,t){return n.apply(this,arguments)}}(),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return y("get",e,n,t,r)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return y("post",e,n,t,r)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return y("put",e,n,t,r)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return y("delete",e,n,t,r)},P=function(){return{apiGet:w,apiPost:j,apiPut:x,apiDelete:O,request:y}},k=t(6716);function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function S(e,n,t,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){N(e,n,t[n])}))}return e}function A(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(){var e=(0,l.useRef)(),n=P().apiPost,t=(0,l.useState)([]),r=t[0],u=t[1],f=(0,l.useState)({show:!1,url:""}),d=f[0],h=f[1],v=(0,l.useState)({show:!1,image:{}}),p=v[0],g=v[1],m=(0,l.useState)("blackBorder"),b=m[0],y=m[1],w=(0,l.useState)(!1),j=w[0],x=w[1];(0,l.useEffect)((function(){var e=(0,k.v$)(),n=e.frameType,t=e.images;u(t||[]),y(n||"blackBorder")}),[]);var O=function(){return e.current.click()};(0,l.useEffect)((function(){(0,k.T8)({frameType:b,images:r.filter((function(e){return!e.loading}))})}),[r,b]);var C=function(){var e,t=(e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.length){e.next=2;break}return e.abrupt("return");case 2:return console.log(r),x(!0),e.next=6,Promise.all(r.map((function(e){return(0,k.fi)(e.croppedUrl||e.url)})));case 6:t=e.sent,n(s(),{"files.image":t,data:JSON.stringify({fullname:"Nguy\u1ec5n Chaos Kh\xe1nh",email:"nguyenkhanhsl1997@gmail.com",address:"Ha Noi"})},(function(e){e.status,x(!1)}),{successMessage:"\u0110\u1eb7t h\xe0ng th\xe0nh c\xf4ng!"});case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){S(i,r,o,a,c,"next",e)}function c(e){S(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),N=(0,i.jsx)(c.zx,{className:"btnOrder",variant:"contained",size:"large",fullWidth:!0,onClick:C,loading:j,children:"\u0110\u1eb7t h\xe0ng"}),E=function(){return g(_({},p,{show:!1}))},T=function(e){return h(_({show:!0},e))},z=function(e){return u((function(n){return n.filter((function(n){return n.id!==e.id}))}))};return(0,i.jsx)(c.Ar,{title:"Ch\u1ecdn \u1ea3nh",grayBackground:!0,pickFrames:{selected:b,setSelected:y},mobileBtnBottom:N,children:(0,i.jsxs)("div",{className:"PickPhotos",children:[(0,i.jsx)(a.ZP,{anchor:"bottom",open:p.show,onBackdropClick:E,className:"PickPhotos-drawerActions",children:(0,i.jsxs)("div",{className:"PickPhotos-drawerActions__wrapper",children:[(0,i.jsxs)("div",{onClick:function(){E(),T(p.image)},children:[(0,i.jsx)("i",{className:"icon-crop"}),"C\u1eaft \u1ea3nh"]}),(0,i.jsxs)("div",{onClick:function(){E(),z(p.image)},children:[(0,i.jsx)("i",{className:"icon-remove"}),"X\xf3a \u1ea3nh"]})]})}),(0,i.jsx)(c.Yh,_({},d,{onClose:function(){return h(_({},d,{show:!1}))},onConfirm:function(e,n,t){u((function(r){var o=A(r),i=o.find((function(e){return e.id===d.id}));return i&&(i.crop=t,i.zoom=n,i.croppedUrl=e),o}))}})),(0,i.jsxs)("div",{className:"menu",children:[(0,i.jsx)(c.s9,{selected:b,setSelected:y}),N]}),(0,i.jsx)("div",{className:"main",children:r.length>0?(0,i.jsxs)("div",{className:"PickPhotos-images",children:[r.map((function(e){return(0,i.jsx)(c.zv,_({onClick:O,frameType:b},e,{url:e.croppedUrl||e.url,onCrop:function(){return T(e)},onRemove:function(){return z(e)},onOpenDrawerActions:function(){return function(e){return g({show:!0,image:e})}(e)}}),e.id)})),(0,i.jsx)(c.zv,{onClick:O})]}):(0,i.jsxs)("div",{className:"PickPhotos-getStarted",children:[(0,i.jsx)("div",{className:"pick-photos-text",children:"Ch\u1ecdn v\xe0i b\u1ee9c \u1ea3nh \u0111\u1ec3 b\u1eaft \u0111\u1ea7u"}),(0,i.jsx)(c.zv,{first:!0,onClick:O})]})}),(0,i.jsx)("input",{ref:e,type:"file",accept:"image/x-png,image/jpeg",style:{display:"none"},onChange:function(e){var n,t=null===(n=e.target.files)||void 0===n?void 0:n[0];if(t){var r=URL.createObjectURL(t),o=new Image;o.src=r,o.onload=function(){var e=o.width>o.height,n=o.width/o.height;e||(n=1/n);var t=2.4*n,r=document.createElement("canvas"),i=r.getContext("2d");r.width=o.width,r.height=o.height,null===i||void 0===i||i.drawImage(o,0,0),u((function(o){return A(o).concat([{id:(0,k.kb)(),url:r.toDataURL("image/jpeg"),loading:!1,widthGreater:e,zoom:n,minZoom:n,maxZoom:t}])}))},e.target.value=null}}})]})})}}},function(e){e.O(0,[662,778,774,888,179],(function(){return n=6050,e(e.s=n);var n}));var n=e.O();_N_E=n}]);