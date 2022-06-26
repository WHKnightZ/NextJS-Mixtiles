"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/configs/theme.ts

const theme = (0,material_.createTheme)({
    palette: {
        primary: {
            main: "#ff0072"
        }
    },
    typography: {
        fontFamily: '"Mulish", sans-serif'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: 45,
                    textTransform: "initial"
                },
                sizeSmall: {
                    height: 36,
                    fontSize: 13
                },
                sizeLarge: {
                    height: 56,
                    fontSize: 18,
                    fontWeight: 700,
                    padding: "0 40px"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "#919eab3d 0px 0px 3px 0px, #919eab3d 0px 15px 30px -4px",
                    borderRadius: 12,
                    padding: 20
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: 16
                },
                sizeSmall: {
                    fontSize: 15
                }
            }
        }
    }
});

// EXTERNAL MODULE: ./src/components/index.tsx + 21 modules
var components = __webpack_require__(6240);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




// import { useRouter } from "next/router";

function MyApp({ Component , pageProps  }) {
    const AnyComponent = Component;
    // const router = useRouter();
    // console.log(router);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AnyComponent, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components/* ToastContainer */.Ix, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6335:
/***/ ((module) => {

module.exports = require("react-easy-crop");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,240], () => (__webpack_exec__(2493)));
module.exports = __webpack_exports__;

})();