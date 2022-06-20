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

;// CONCATENATED MODULE: ./src/pages/_app.tsx




// import { useRouter } from "next/router";
function MyApp({ Component , pageProps  }) {
    const AnyComponent = Component;
    // const router = useRouter();
    // console.log(router);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(AnyComponent, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_exports__ = (__webpack_exec__(2493));
module.exports = __webpack_exports__;

})();