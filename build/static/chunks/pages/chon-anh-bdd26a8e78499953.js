(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{6050:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chon-anh",function(){return r(3001)}])},3001:function(n,e,r){"use strict";r.r(e);var t=r(5893),i=r(9990),o=r(7294),c=r(3827);function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function u(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){u(n,e,r[e])}))}return n}function s(n){return function(n){if(Array.isArray(n))return a(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return a(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(){var n=(0,o.useRef)(),e=(0,o.useState)([]),r=e[0],a=e[1],u=(0,o.useState)({show:!1,url:""}),f=u[0],d=u[1],h=(0,o.useState)("blackBorder"),m=h[0],p=h[1];(0,o.useEffect)((function(){var n=(0,c.v$)(),e=n.frameType,r=n.images;a(r||[]),p(e||"blackBorder")}),[]);var v=function(){return n.current.click()};return(0,o.useEffect)((function(){(0,c.T8)({frameType:m,images:r.filter((function(n){return!n.loading}))})}),[r,m]),(0,t.jsx)(i.Ar,{title:"Ch\u1ecdn \u1ea3nh",grayBackground:!0,children:(0,t.jsxs)("div",{className:"PickPhotos",children:[(0,t.jsx)(i.Yh,l({},f,{onClose:function(){return d(l({},f,{show:!1}))},onConfirm:function(n,e,r){a((function(t){var i=s(t),o=i.find((function(n){return n.id===f.id}));return o&&(o.crop=r,o.zoom=e,o.croppedUrl=n),i}))}})),(0,t.jsxs)("div",{className:"menu",children:[(0,t.jsx)(i.s9,{selected:m,setSelected:p}),(0,t.jsx)(i.zx,{variant:"contained",size:"large",fullWidth:!0,style:{borderRadius:8,marginTop:24},children:"\u0110\u1eb7t h\xe0ng"})]}),(0,t.jsx)("div",{className:"main",children:r.length>0?(0,t.jsxs)("div",{className:"PickPhotos-images",children:[r.map((function(n){return(0,t.jsx)(i.zv,l({onClick:v,frameType:m},n,{url:n.croppedUrl||n.url,onCrop:function(){return d(l({show:!0},n))},onRemove:function(){return a((function(e){return e.filter((function(e){return e.id!==n.id}))}))}}),n.id)})),(0,t.jsx)(i.zv,{onClick:v})]}):(0,t.jsxs)("div",{className:"PickPhotos-getStarted",children:[(0,t.jsx)("div",{className:"pick-photos-text",children:"Ch\u1ecdn v\xe0i b\u1ee9c \u1ea3nh \u0111\u1ec3 b\u1eaft \u0111\u1ea7u"}),(0,t.jsx)(i.zv,{first:!0,onClick:v})]})}),(0,t.jsx)("input",{ref:n,type:"file",accept:"image/x-png,image/jpeg",style:{display:"none"},onChange:function(n){var e,t=null===(e=n.target.files)||void 0===e?void 0:e[0];if(t){var o=URL.createObjectURL(t),u=new Image;u.src=o,u.onload=function(){var n=u.width>u.height,e=r.length,l=u.width/u.height;n||(l=1/l);var f=2.4*l;a((function(e){return s(e).concat([{id:(0,c.kb)(),url:o,loading:!0,widthGreater:n,zoom:l,minZoom:l,maxZoom:f}])})),(0,i.Ix)(t,(function(n){a((function(r){var t=s(r);return t[e].loading=!1,t[e].url=n,t}))}))},n.target.value=null}}})]})})}}},function(n){n.O(0,[201,990,774,888,179],(function(){return e=6050,n(n.s=e);var e}));var e=n.O();_N_E=e}]);