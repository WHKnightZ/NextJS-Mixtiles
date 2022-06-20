"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 7845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ button_Button),
  "Ar": () => (/* reexport */ layout_Layout),
  "Yh": () => (/* reexport */ pickPhotos_ModalCrop),
  "s9": () => (/* reexport */ pickFrames_PickFrames),
  "zv": () => (/* reexport */ pickPhotos_UploadImage),
  "Ix": () => (/* reexport */ uploadImage)
});

// UNUSED EXPORTS: Modal, Scrollbar, getCroppedImg

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/modal/Modal.tsx



const Modal = ({ show , title , children , size ="xs" , ...rest })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Dialog, {
        className: "Modal",
        open: show,
        fullWidth: true,
        maxWidth: size,
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogTitle, {
                children: title
            }),
            children
        ]
    });
};
/* harmony default export */ const modal_Modal = (Modal);

;// CONCATENATED MODULE: ./src/components/button/Button.tsx



const Button = ({ innerRef , loading , children , disabled , className ="" , size ="small" , ...rest })=>{
    const isSmall = size === "small";
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        className: `Button ${className}`,
        ref: innerRef,
        disabled: loading || disabled,
        ...rest,
        size: size,
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {
            size: isSmall ? 20 : 24,
            color: "inherit"
        }) : children
    });
};
/* harmony default export */ const button_Button = (Button);

;// CONCATENATED MODULE: ./src/components/scrollbar/Scrollbar.tsx


const Scrollbar = ({ children , className ="" , ...rest })=>{
    return /*#__PURE__*/ _jsx("div", {
        ...rest,
        className: `Scrollbar ${className}`,
        children: children
    });
};
/* harmony default export */ const scrollbar_Scrollbar = ((/* unused pure expression or super */ null && (Scrollbar)));

;// CONCATENATED MODULE: ./src/assets/images/icon_black_border.png
/* harmony default export */ const icon_black_border = ({"src":"/_next/static/media/icon_black_border.5d90b04a.png","height":140,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AO/s6OLV1fykAPHo5N7P7ucoAPf87dbW/6ETAGe/9Pn46heYAKAzOqzxqRnTAPPlsEQdAJfqAOjt8+y9lt/sAOrp6O3z8uzq1T8wGFP8bJAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/icon_black.png
/* harmony default export */ const icon_black = ({"src":"/_next/static/media/icon_black.733a779f.png","height":140,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/ANrVzcS5qpdYANfQyL+yo4AeANXTxbipmVJGAFqevbekhACaAKJEJneTWUTRAPLlslkAAJjqAOjt8+q+lt/sAOrp6O3z8ezqoGAp/NV+Sh8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/icon_white_border.png
/* harmony default export */ const icon_white_border = ({"src":"/_next/static/media/icon_white_border.2294b1af.png","height":140,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAUElEQVR42gVAMQqAIBR9979F0NoS1Ra1VFu4NBiE0JDy+oaI4hrQx772UwowapkbU25E0cOYYwsJiSxXBesYYu42vLTPZ2oHipDq9CAp3nv+rf03nnDxHHcAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/icon_white.png
/* harmony default export */ const icon_white = ({"src":"/_next/static/media/icon_white.70bf78b2.png","height":140,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/ANrVzcS5rI3MANjRyb+znKDhANLJw7qth8+8AOfYv6yZn9uiAOjr59KVz73FAOvp6Ozq3KToAOrs7Onr0dntAOrq6uzs7e3q8uEzqTeVLa8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/icon_no_frame.png
/* harmony default export */ const icon_no_frame = ({"src":"/_next/static/media/icon_no_frame.8ac2a7fb.png","height":140,"width":140,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AOrj29PJvKuWAObe187DtKN9AOba0cm8rJNnAMbZ1MOzpXWWAJWGp7uymGfOAO3VoHV/ZZbqAOnv8d+vjtzsAOnp6e7y7uzqnGkv2qfo4QYAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/pickFrames/PickFrames.tsx







const mappingFrameIcon = {
    blackBorder: {
        img: icon_black_border,
        label: "\u0110en vi\u1EC1n"
    },
    black: {
        img: icon_black,
        label: "\u0110en"
    },
    whiteBorder: {
        img: icon_white_border,
        label: "Tr\u1EAFng vi\u1EC1n"
    },
    white: {
        img: icon_white,
        label: "Tr\u1EAFng"
    },
    noFrame: {
        img: icon_no_frame,
        label: "Kh\xf4ng khung"
    }
};
const frameTypes = [
    "blackBorder",
    "black",
    "whiteBorder",
    "white",
    "noFrame"
];
const PickFrames = ({ selected , setSelected , small  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `PickFrames${small ? " small" : ""}`,
        children: frameTypes.map((item)=>{
            const { img , label  } = mappingFrameIcon[item];
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `PickFrame${selected === item ? " selected" : ""}`,
                onClick: ()=>setSelected(item)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "",
                        src: img.src
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: label
                    })
                ]
            }, item);
        })
    });
};
/* harmony default export */ const pickFrames_PickFrames = (PickFrames);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/configs/constants.ts + 1 modules
var constants = __webpack_require__(9652);
;// CONCATENATED MODULE: ./src/components/layout/AccountPopover.tsx




const AccountPopover = ()=>{
    const anchorRef = (0,external_react_.useRef)(null);
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const menuOptions = [
        {
            label: "C\xe2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p 1",
            icon: "plus",
            linkTo: "#"
        },
        {
            label: "C\xe2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p 2",
            icon: "plus",
            linkTo: "#"
        },
        {
            label: "C\xe2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p 3",
            icon: "plus",
            linkTo: "#"
        }, 
    ];
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                ref: anchorRef,
                onClick: handleOpen,
                sx: {
                    padding: 0,
                    width: 34,
                    height: 34
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                    src: constants/* DEFAULT_AVATAR */.tU,
                    alt: "avatar",
                    style: {
                        width: 34,
                        height: 34
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Popover, {
                className: "MenuPopover",
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "right"
                },
                transformOrigin: {
                    vertical: "top",
                    horizontal: "right"
                },
                PaperProps: {
                    sx: {
                        mt: 1.5,
                        ml: 0.5,
                        width: 250,
                        borderRadius: "8px",
                        pb: 2
                    }
                },
                open: open,
                onClose: handleClose,
                anchorEl: anchorRef.current,
                sx: {
                    width: 250
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            my: 1.5,
                            px: 2.5
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body2",
                                noWrap: true,
                                style: {
                                    color: "var(--cl-secondary)"
                                },
                                children: "Ng\u01B0\u1EDDi d\xf9ng"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "subtitle1",
                                noWrap: true,
                                textOverflow: "ellipsis",
                                style: {
                                    color: "var(--cl-secondary)"
                                },
                                children: "Nguy\u1EC5n Kh\xe1nh"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                        sx: {
                            my: 1
                        }
                    }),
                    menuOptions.map((option)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.MenuItem, {
                            // component={RouterLink}
                            // to={option.linkTo}
                            // onClick={() => {
                            //   handleClose();
                            //   option.onClick?.();
                            // }}
                            sx: {
                                typography: "body2",
                                py: 1.5,
                                px: 2.5
                            },
                            style: {
                                color: "var(--cl-secondary)"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    mr: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: `icon-${option.icon}`
                                    })
                                }),
                                option.label
                            ]
                        }, option.label)
                    )
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_AccountPopover = (AccountPopover);

;// CONCATENATED MODULE: ./src/components/layout/Navbar.tsx






const Navbar = ({ pickFrames  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `Navbar${pickFrames ? " hasPickFrames" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "Navbar-wrapper",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "Navbar-inside",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
                            className: "Navbar-menu",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "icon-bars"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "Navbar-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: "Mixtiles"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_AccountPopover, {})
                    ]
                }),
                !!pickFrames && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "Navbar-pickFrames",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(pickFrames_PickFrames, {
                        selected: pickFrames.selected,
                        setSelected: pickFrames.setSelected,
                        small: true
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx





const Layout = ({ title , description , grayBackground , children , pickFrames , mobileBtnBottom  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                        children: [
                            "Mixtiles",
                            title ? ` - ${title}` : ""
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description || "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "Layout",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Navbar, {
                        pickFrames: pickFrames
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "Main",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `Container${grayBackground ? " background-gray" : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                                children: children
                            })
                        })
                    }),
                    !!mobileBtnBottom && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "MobileBtnButton",
                        children: mobileBtnBottom
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

// EXTERNAL MODULE: external "react-easy-crop"
var external_react_easy_crop_ = __webpack_require__(6335);
var external_react_easy_crop_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_crop_);
// EXTERNAL MODULE: ./src/configs/apis.ts
var apis = __webpack_require__(1071);
// EXTERNAL MODULE: ./src/services/api.ts
var api = __webpack_require__(8467);
// EXTERNAL MODULE: ./src/utils/index.ts + 1 modules
var utils = __webpack_require__(3827);
;// CONCATENATED MODULE: ./src/components/pages/pickPhotos/constants.ts
const CANVAS_SIZE = 280;
const FULL_SIZE = 600;

;// CONCATENATED MODULE: ./src/components/pages/pickPhotos/utils.ts




const uploadImage = (file, onSuccess)=>api/* default.post */.Z.post(apis/* apiUrls.upload */.m.upload(), {
        files: file
    }, ({ status , data  })=>{
        if (status) {
            onSuccess(data[0].url);
        }
    })
;
const createImage = (url)=>new Promise((resolve)=>{
        const image = new Image();
        image.setAttribute("crossorigin", "anonymous");
        image.onload = ()=>resolve(image)
        ;
        image.src = url;
    })
;
const getCroppedImg = async (imageSrc, crop)=>{
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = FULL_SIZE;
    canvas.height = FULL_SIZE;
    ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, FULL_SIZE, FULL_SIZE);
    return new Promise((resolve)=>{
        canvas.toBlob((blob)=>{
            const file = new File([
                blob
            ], `${(0,utils/* randomId */.kb)()}.jpg`);
            console.log(file);
            resolve(file);
        }, "image/jpeg");
    });
};

;// CONCATENATED MODULE: ./src/assets/images/frame_white.png
/* harmony default export */ const frame_white = ({"src":"/_next/static/media/frame_white.87344e6b.png","height":492,"width":487,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42h3KwQ3CMBAF0bHZaGWJQqiBGqiMQiiDGqAADtxzCwrgeP1BnuPopfWsOxONjvJST5ZvfsXZCMT8PZgmXE4mOruCGY2NzBBUwug0jBgj6CZVNAr2ElYWZgp/jJLWV3pcPs9kisHefvwBZus/mEmRrGcAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/pages/pickPhotos/ModalCrop.tsx









const ModalCrop = ({ show , url: url1 , crop: defaultCrop = {
    x: 0,
    y: 0
} , onClose , onConfirm , zoom: defaultZoom , minZoom , maxZoom ,  })=>{
    const ref = (0,external_react_.useRef)();
    const { 0: crop , 1: setCrop  } = (0,external_react_.useState)(defaultCrop);
    const { 0: zoom , 1: setZoom  } = (0,external_react_.useState)(defaultZoom);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!show) return;
        setCrop(defaultCrop);
        setZoom(defaultZoom);
    }, [
        show
    ]);
    // const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    //   console.log(croppedArea, croppedAreaPixels)
    // }, [])
    const handleConfirm = async ()=>{
        setLoading(true);
        const file = await getCroppedImg(url1, ref.current.getCropData().croppedAreaPixels);
        uploadImage(file, (url)=>{
            setLoading(false);
            onConfirm(url, zoom, crop, file);
            onClose();
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(modal_Modal, {
        title: "C\u1EAFt \u1EA3nh",
        show: show,
        size: "sm",
        onBackdropClick: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogContent, {
                className: "Scrollbar Modal-crop",
                style: {
                    paddingTop: 12
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "image-frame-wrapper",
                        style: {
                            width: CANVAS_SIZE + 6,
                            height: CANVAS_SIZE + 6
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "image-frame",
                                alt: "",
                                src: frame_white.src
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    position: "relative",
                                    width: CANVAS_SIZE,
                                    height: CANVAS_SIZE,
                                    margin: "0 auto",
                                    maxWidth: "100%"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_easy_crop_default()), {
                                    ref: ref,
                                    image: url1,
                                    crop: crop,
                                    zoom: zoom,
                                    aspect: 1,
                                    onCropChange: setCrop,
                                    // onCropComplete={onCropComplete}
                                    onZoomChange: setZoom,
                                    cropSize: {
                                        width: CANVAS_SIZE,
                                        height: CANVAS_SIZE
                                    },
                                    showGrid: false,
                                    minZoom: minZoom,
                                    maxZoom: maxZoom
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            padding: "30px 8px 8px",
                            width: "100%",
                            maxWidth: CANVAS_SIZE,
                            margin: "0 auto"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Slider, {
                            value: zoom,
                            min: minZoom,
                            max: maxZoom,
                            step: (maxZoom - minZoom) / 60,
                            onChange: (_, value)=>setZoom(value)
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.DialogActions, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
                        onClick: onClose,
                        disabled: loading,
                        children: "H\u1EE7y"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
                        variant: "contained",
                        onClick: handleConfirm,
                        loading: loading,
                        children: "Xong"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pickPhotos_ModalCrop = (ModalCrop);

;// CONCATENATED MODULE: ./src/assets/images/frame_black.png
/* harmony default export */ const frame_black = ({"src":"/_next/static/media/frame_black.588bcc16.png","height":492,"width":487,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAhElEQVR42g3KsQ3CMBAF0J/oHCtlkLIDFaJmACpWYAnGYBDGoKOHASjoI4rYkOTs84dXv+p03jyCs5yLUsLtINv78QqPBAMxPNcyOvjRNzUtom8/IiUjNbX/j0RoMkkFmQKDGWFaRAlEKgvf6DhDXMDQt1BYR3CO1f6yen0l28KF06S7Hwk5S41rnJg1AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/images/frame_none.png
/* harmony default export */ const frame_none = ({"src":"/_next/static/media/frame_none.59d3c410.png","height":492,"width":487,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXUlEQVR42jWK0QmAMBBDWzjQD2fQFfxwT3dxM1ttsTQ5PUsDCbxHPFcHV78ClHQs0tBW6ertpaGtiQLp+As8kIZdJEihWkhmjgwqQ7SHdaKrGmXfki/ITLj0zGF+AbC3U8DCZNH9AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/components/pages/pickPhotos/UploadImage.tsx







const mapping = {
    "": {},
    blackBorder: {
        frame: frame_black,
        imgSize: "70%"
    },
    black: {
        frame: frame_black,
        imgSize: "calc(100% - 4px)"
    },
    whiteBorder: {
        frame: frame_white,
        imgSize: "70%"
    },
    white: {
        frame: frame_white,
        imgSize: "calc(100% - 4px)"
    },
    noFrame: {
        frame: frame_none,
        imgSize: "100%"
    }
};
const UploadImage = ({ first , url , loading , onClick , onCrop , onRemove , frameType ="" , widthGreater ,  })=>{
    const { frame , imgSize  } = mapping[frameType];
    const handleClick = (e, callback)=>{
        e.stopPropagation();
        callback === null || callback === void 0 ? void 0 : callback();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `UploadImage ${first ? "first" : "tileAppear"}`,
        children: url ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "UploadImage-btn MuiButton-root no-radius",
            onClick: onCrop,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "image-frame",
                    alt: "",
                    src: frame.src
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                width: imgSize,
                                height: imgSize
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: widthGreater ? "height" : "width",
                                alt: "",
                                src: url
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `overlay${loading ? " loading" : ""}`,
                            children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {
                                thickness: 5,
                                size: 32,
                                color: "inherit"
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overlay-btn btn-crop",
                                        onClick: (e)=>handleClick(e, onCrop)
                                        ,
                                        title: "C\u1EAFt \u1EA3nh",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-crop"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overlay-btn btn-remove",
                                        onClick: (e)=>handleClick(e, onRemove)
                                        ,
                                        title: "X\xf3a \u1EA3nh",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-remove"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(button_Button, {
            onClick: onClick,
            className: "UploadImage-btn",
            variant: "contained",
            color: "primary",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "upload",
                children: first ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "icon-camera"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "T\u1EA3i \u1EA3nh l\xean"
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "icon-plus"
                })
            })
        })
    });
};
/* harmony default export */ const pickPhotos_UploadImage = (UploadImage);

;// CONCATENATED MODULE: ./src/components/pages/pickPhotos/index.ts




;// CONCATENATED MODULE: ./src/components/index.tsx








/***/ }),

/***/ 1071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL),
/* harmony export */   "m": () => (/* binding */ apiUrls)
/* harmony export */ });
const API_URL = `${"http://34.200.245.150:1337"}/api/`;
const apiUrls = {
    upload: ()=>"upload"
    ,
    orders: ()=>"orders"
};


/***/ }),

/***/ 9652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tU": () => (/* binding */ DEFAULT_AVATAR),
  "mL": () => (/* binding */ LS_PHOTOS)
});

// UNUSED EXPORTS: ERROR, LANGUAGES, LS_LANG, MAX_ATTACHMENT_FILES, MAX_FILENAME_LENGTH, SUCCESS

;// CONCATENATED MODULE: ./src/assets/images/default_avatar.png
/* harmony default export */ const default_avatar = ({"src":"/_next/static/media/default_avatar.2f9d89ab.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42mMAgcDJv6QCpvxbHTjj//sgIA6Y/Hc1SAwsGTT5p5T/5H/3gyb9+e9Zef6/S9mZ//6T/v4PAImBFPlN/L0mcNr//yzRG34C1f8HYcOcQz/9gWL+k36vARr/9537pP//J7TP+9+UG/P/9KrG/xvnL/9v2Pv/f8iUv+8YgMRbIyDn+r5D//9eng7G1/Ye+m/c9/8/SI4hbMqf1TYT/v9vX/Lh5++Lc//9vjjnXweQbQ0UA8qtYvCf+k8CyLjLUPT//7GdD8AYxAaJgeQYQMC1+Z+ESeaf1fr5/9+AMIjt2vwXLAkAscac9lhMTgQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/configs/constants.ts

const DEFAULT_AVATAR = default_avatar.src;
const LS_LANG = "LANG";
const LS_PHOTOS = "MIXTILES_PHOTOS";
const LANGUAGES = {
    VI: "vi",
    EN: "en"
};
const SUCCESS = true;
const ERROR = false;
const MAX_ATTACHMENT_FILES = 10;
const MAX_FILENAME_LENGTH = 40;


/***/ }),

/***/ 8467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useApis),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1071);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = _configs_apis__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T;
/**
 * Config request common
 *
 * @param {String} method Request method
 * @param {String} url Request URL
 * @param {Object} data Request params
 * @param {Object} options Config options
 */ const request = async (method, url, data1 = {}, callback = ()=>{}, options = {})=>{
    // config params
    const accessToken = "f0526a9f9b3576b7da0c17ec3890753984585890cef058e12dfb61ddd5bc5c704935328b0ec7da58d8092b889034eb7fc4c91d0c11638c281c604949ac556fcbb81c42b537707f8c5afc31164dee11954d484b583b1f17fa84d0a9adbcede3ec1372e48d3b3cd136931767e6784362c45ed1159912417bcb18d6bee97a2048c0";
    const headers = {
        Authorization: `bearer ${accessToken}`
    };
    const { showToast , ...optionsRest } = options;
    const defaultParams = {
        headers,
        method,
        url,
        ...optionsRest
    };
    const paramConfigs = {
        ...defaultParams,
        params: data1
    };
    if (method !== "get" && method !== "delete") {
        delete paramConfigs.params;
        const formData = new FormData();
        for(const key in data1){
            const value = data1[key];
            if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(value)) {
                value.forEach((i)=>formData.append(key, i)
                );
            } else formData.append(key, value);
        }
        paramConfigs.data = formData;
    }
    return new Promise((resolve)=>{
        axios__WEBPACK_IMPORTED_MODULE_0___default()(paramConfigs).then((res)=>{
            let { data ={}  } = res;
            const error = data.error;
            const message = (error || {}).message;
            data = {
                status: !error,
                text: message || "C\xf3 l\u1ED7i x\u1EA3y ra, vui l\xf2ng th\u1EED l\u1EA1i sau!",
                data: data
            };
            resolve(data);
            callback(data);
        });
    });
};
/**
 * Request process callback with method GET
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */ const apiGet = (url = "", params = {}, callback, showToast)=>{
    return request("get", url, params, callback, {
        showToast
    });
};
/**
 * Request process callback with method POST
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */ const apiPost = (url = "", params = {}, callback, showToast)=>{
    return request("post", url, params, callback, {
        showToast
    });
};
/**
 * Request process callback with method PUT
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */ const apiPut = (url = "", params = {}, callback, showToast)=>{
    return request("put", url, params, callback, {
        showToast
    });
};
/**
 * Request process callback with method DELETE
 *
 * @param {String} url Request URL
 * @param {Object} params Request params
 * @param {Function} callback callback
 */ const apiDelete = (url = "", params = {}, callback, showToast)=>{
    return request("delete", url, params, callback, {
        showToast
    });
};
const useApis = ()=>({
        apiGet,
        apiPost,
        apiPut,
        apiDelete,
        request
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    get: apiGet,
    post: apiPost,
    put: apiPut,
    delete: apiDelete,
    request
});


/***/ }),

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v$": () => (/* reexport */ getLsPhotos),
  "kb": () => (/* reexport */ randomId),
  "T8": () => (/* reexport */ saveLsPhotos)
});

// UNUSED EXPORTS: convertToId, createFileName, drawRoundedImage, formatFilename, getUserLS, isMobile, removeAccents, removeUserLS, resizeImage, trimFileName, updateUserLS

// EXTERNAL MODULE: ./src/configs/constants.ts + 1 modules
var constants = __webpack_require__(9652);
;// CONCATENATED MODULE: ./src/utils/common.ts

/**
 * Detect user agent is mobile or not
 *
 * @return Boolean
 */ const isMobile = ()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
;
/**
 * Get user from local storage
 */ const getUserLS = ()=>{
    const oldUser = localStorage.getItem("user") || "{}";
    let parsedUser;
    try {
        parsedUser = JSON.parse(oldUser);
    } catch (e) {}
    return parsedUser || {};
};
/**
 * Update user to local storage
 * @param user
 */ const updateUserLS = (user)=>{
    const oldUser = getUserLS();
    localStorage.setItem("user", JSON.stringify({
        ...oldUser,
        ...user
    }));
};
/**
 * Remove user from local storage
 * @param user
 */ const removeUserLS = ()=>{
    localStorage.removeItem("user");
};
// Random id with 6 characters
const randomId = ()=>Math.random().toString(36).substr(2, 6)
;
const removeAccents = (name)=>{
    return name.trim().toLowerCase()// Tách chữ có dấu thành 2 thành phần: chữ và dấu
    .normalize("NFD")// Chuyển đ thành d
    .replace(/đ/g, "d")// Xóa toàn bộ dấu
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, "");
};
const convertToId = (name)=>{
    return removeAccents(name)// Chuyển hết dấu cách thành gạch ngang
    .replace(/\s+/g, "-");
};
const saveLsPhotos = (photos)=>localStorage.setItem(constants/* LS_PHOTOS */.mL, JSON.stringify(photos))
;
const getLsPhotos = ()=>{
    let photos;
    try {
        photos = localStorage.getItem(constants/* LS_PHOTOS */.mL);
        if (photos) photos = JSON.parse(photos);
    } catch  {}
    return photos || {};
};
const formatFilename = (name)=>{
    return name.trim().normalize("NFD").replace(/đ/g, "d").replace(/Đ/g, "D")// eslint-disable-next-line no-useless-escape
    .replace(/([\u0300-\u036f]|[^ 0-9a-zA-Z`~!@#$%^&*(),.?'":;{}+=|<>_\-\\\/\[\]])/g, "")// eslint-disable-next-line no-useless-escape
    .replace(/([`~!@#$%^&*()?'":;{}+=|<>_\-\\\/\[\]])/g, " ").replace(/ +(?= )/g, "").replace(/ /g, "_");
};
const trimFileName = (fileName = "")=>{
    // Normalize NFC on safari => fix bug germany character
    fileName = formatFilename(fileName);
    if (fileName.length > MAX_FILENAME_LENGTH) {
        const indexExtension = fileName.lastIndexOf(".");
        // if extension length > 5 => only take 4 characters
        const ext = indexExtension > -1 ? fileName.substr(indexExtension).substr(0, 5) : "";
        const newName = fileName.substr(0, MAX_FILENAME_LENGTH - ext.length);
        fileName = newName + ext;
    }
    return fileName;
};
const createFileName = (fileName)=>randomId() + "_" + trimFileName(fileName)
;

;// CONCATENATED MODULE: ./src/utils/index.ts




/***/ })

};
;