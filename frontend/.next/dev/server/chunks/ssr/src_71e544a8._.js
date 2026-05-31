module.exports = [
"[project]/src/lib/cn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(...inputs));
}
}),
"[project]/src/components/switch-locale/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Main = ()=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])((lenis)=>{});
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const listLangs = [
        {
            lang: "en",
            name: "ENG",
            flag: "/images/ic_us.svg"
        },
        {
            lang: "es",
            name: "ESP",
            flag: "/images/ic_mx.svg"
        }
    ];
    const switchLocale = (newLang)=>{
        if (lang === newLang) return;
        const params = new URLSearchParams(window.location.search);
        params.set("step", "1");
        localStorage.setItem("lang-avionica", newLang);
        window.location.href = `${window.location.pathname}?${params.toString()}`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const storedLocale = localStorage.getItem("lang-avionica") || "en";
        setLang(storedLocale);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseLeave: ()=>setOpen(false),
        onClick: ()=>setOpen(true),
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 min-w-22 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: listLangs.find((l)=>l.lang === lang)?.flag,
                        alt: listLangs.find((l)=>l.lang === lang)?.name,
                        width: 640,
                        height: 480,
                        className: "w-8"
                    }, void 0, false, {
                        fileName: "[project]/src/components/switch-locale/Main.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-calibri-bold",
                        children: listLangs.find((l)=>l.lang === lang)?.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/switch-locale/Main.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/switch-locale/Main.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-9 left-0 right-0 bottom-0 bg-white min-h-min w-full flex flex-col ring ring-c_golden rounded", "group-hover:visible", "hidden group-hover:flex", open && "visible flex"),
                children: listLangs.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "flex justify-between items-center cursor-pointer px-2 py-1 group/button hover:bg-c_golden",
                        onClick: ()=>switchLocale(item.lang),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: item.flag,
                                alt: item.name,
                                width: 640,
                                height: 480,
                                className: "w-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/switch-locale/Main.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-calibri-bold text-c_dark_blue text-center w-8 group-hover/button:text-white",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/switch-locale/Main.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `langs-${index}`, true, {
                        fileName: "[project]/src/components/switch-locale/Main.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/switch-locale/Main.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/switch-locale/Main.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/components/slide-over/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Close = ({ onClose = ()=>{} })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 sm:px-6 py-4 flex justify-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-label": "Close",
            type: "button",
            className: "w-10 h-10 bg-c_kimchi text-black flex items-center justify-center cursor-pointer",
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 30,
                height: 30,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon icon-tabler icons-tabler-outline icon-tabler-x",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/slide-over/Main.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 6l-12 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/slide-over/Main.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/slide-over/Main.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/slide-over/Main.jsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/slide-over/Main.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/slide-over/Main.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Main = ({ open = false, onClose = ()=>{}, children })=>{
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    }; // keys of arrow of the keyboard
    const preventDefault = (e)=>{
        e.preventDefault();
    };
    const preventDefaultForScrollKeys = (e)=>{
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            window.addEventListener("wheel", preventDefault, {
                passive: false
            });
            window.addEventListener("onwheel", preventDefault, {
                passive: false
            });
            window.addEventListener("mousewheel", preventDefault, {
                passive: false
            });
            window.addEventListener("keydown", preventDefaultForScrollKeys, {
                passive: false
            });
            document.body.setAttribute("data-lenis-prevent", "true");
        } else {
            document.body.removeAttribute("data-lenis-prevent");
        }
        return ()=>{
            window.removeEventListener("wheel", preventDefault, {
                passive: false
            });
            window.removeEventListener("onwheel", preventDefault, {
                passive: false
            });
            window.removeEventListener("mousewheel", preventDefault, {
                passive: false
            });
            window.removeEventListener("keydown", preventDefaultForScrollKeys, {
                passive: false
            });
        };
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: `fixed z-50 cursor-pointer inset-0 bg-black/20 backdrop-blur-[3px] bg-opacity-75 w-screen h-screen ${!open && "hidden"}`
            }, void 0, false, {
                fileName: "[project]/src/components/slide-over/Main.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 z-[999] transition ease-in duration-300 h-full w-full ${!open ? "translate-x-full" : "-translate-x-0"}`,
                "aria-labelledby": "slide-over-title",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "slide over",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 overflow-hidden h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-auto relative w-screen max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-lvh flex-col overflow-hidden bg-white shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Close, {
                                            onClose: onClose
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/slide-over/Main.jsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mt-6 flex-1 px-4 sm:px-6 ",
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/slide-over/Main.jsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/slide-over/Main.jsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/slide-over/Main.jsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/slide-over/Main.jsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/slide-over/Main.jsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/slide-over/Main.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/slide-over/Main.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/slide-over/Main.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), document.body);
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/components/container/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Container = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 md:px-12 2xl:px-10 content mx-auto",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/container/Main.jsx",
        lineNumber: 2,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Container;
}),
"[project]/src/components/texts/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>T
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function T({ value = "" }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: t(value)
    }, void 0, false, {
        fileName: "[project]/src/components/texts/Main.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/views/global/menu/Logo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
const Logo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: "flex items-center gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 130,
                height: 70,
                viewBox: "0 0 469 138",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "ic_logo_saltamontes"
                    }, void 0, false, {
                        fileName: "[project]/src/views/global/menu/Logo.jsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M419.482 47.153c-.311.042-5.232-1.258-6.4-1.504-.65-.137-1.917-.218-2.252-.442.68-.35 1.07.206 1.473-.648a1.506 1.506 0 0 0-.826-.736c-.48-.186-.866-.107-1.373-.081-.658.032-.815-.08-1.385-.132-.612-.056-.83.167-1.436.082l-4.49-.247c-.486.003-.943-.129-1.447-.174-1.747-.155-4.007-.318-5.704-.656-.524-.104-3.474-.785-3.922-.739-.673.07-.248.104-.818-.388-.588.175-.234.513-1.142.28-1.768-.454-.103.18-2.152-.66-.35-.143-.781-.22-1.224-.275l-3.815-.712c-.511-.122-1.006-.046-1.198-.426.479-.404 4.383-.938 5.34-1.126.93-.183 1.777-.345 2.68-.556l5.76-.806c.494-.063.88-.19 1.397-.219.57-.032 1.135.03 1.678-.044 1.84-.253 4.058-.425 5.668-.92.165.169.178.173.286.414.67-.287 2.208-.43 2.92-.41 1.301.035 1.01 1.088 2.28 2.68.564.705.212.37.838.885.316.26.477.629.787.939.344.344.662.394 1.005.72.456.433.25.35.964.65 1.364.572.103 1.431 1.669 1.785.467.106.967.623 1.45 1.038.92.79 1.498 1.123 2.581 1.743.303.174.901.373.808.685"
                            }, void 0, false, {
                                fileName: "[project]/src/views/global/menu/Logo.jsx",
                                lineNumber: 9,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M407.664 35.813c-.494-.062-.488-.172-.848-.268l-3.046.035c-1.274.17-2.766.184-4.024.411-2.466.446-5.435.522-7.748 1.082-1.234.298-2.682.054-3.724.578-.478.24-2.483.333-3.809.61l-3.545.876c-.587.23-.991-.071-1.727-.011-.642.052-1.464-.024-1.814-.404.06-.542.378-.606.948-.525 1.13.16 1.995-.632 3.825-.507.412.028.78-.129 1.187-.24.522-.144 1.693-.124 2.58-.436.39-.136.632-.438.973-.63.956 1.01.585.4 1.745.235.844-.12 1.662-.114 2.445-.336-.126-.106.224-.31-.956-.012-.466.119-.56.105-1-.037.241-.654.775-.503 1.558-.702.736-.187.958-.365 1.823-.32.634.032 1.225-.24 1.9-.263 1.054-.036.87.15 2.012-.143 2.335-.598 2.186-.214 2.683-.251.26-.02.612-.195.916-.246.803-.136 1.168-.094 1.929-.337 1.029-.329.718.102 1.926-.046l.057.302c.025.147-.006.164.05.261.741-.068 1.322-.233 2.151-.318.639-.066 1.14-.744 2.02-.502l-.487 2.144Z"
                            }, void 0, false, {
                                fileName: "[project]/src/views/global/menu/Logo.jsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M377.628 40.745c-.023.741-.116 1.437-.373 2.055-2.052-.094-1.698.147-2.451.13-.42-.487-.297-.48-.45-1.266-.22-1.13-.64-1.3 1.855-1.192 1.216.052.587-.115 1.42.273"
                            }, void 0, false, {
                                fileName: "[project]/src/views/global/menu/Logo.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M446.664 32.564c-7.034-5.336-16.654-8.364-30.596-4.788-19.816-3.485-40.398-4.463-70.491-1.704-11.703.506-11.777 6.724-6.13 7.58 9.43 1.653 15.812 3.092 25.242 4.746-6.687 3.879-10.578 5.131-6.459 10.376-4.719 1.388-7.177 3.02-9.25 3.377l-7.39 1.05c-5.383 1.026.054 7.512 6.22 5.104 1.75-.729-.457-2.442 3.591-2.1 26.82.562 50.079-3.8 72.587-7.236 8.433 1.818 16.8 2.468 24.824-3.002 7.494 13.15 17.463 12.06 19.78 4.559 2.475-10.192-6.671-26.207-17.574-23.481-2.271 1.082-3.618 3.018-4.354 5.519"
                            }, void 0, false, {
                                fileName: "[project]/src/views/global/menu/Logo.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M416.277 46.428c-19.205-1.677-33.902-4.526-38.898-7.706 9.61-2.774 20.286-4.666 31.276-5.118-1.802 4.176 1.274 9.364 7.622 12.824ZM410.18.656c12.04-2.683 28.691 2.63 45.793 20.279 3.761 4.354.514 7.014-3.685 1.916-9.801-10.34-22.225-21.506-41.973-21.57-.63-.048-.683-.457-.135-.625M382.107 20.52c-20.7-1.507-23.759-.75-51.824-.521-14.514.489-12.255 5.083-4.133 4.802 15.729-2.023 38.58-2.735 57.005-2.977 1.245-.017.74-1.175-1.048-1.305M401.536 67.264c10.386-3.24 18.54-7.589 26.301-12.131 3.181-1.861 3.19.49-.293 2.766-11.506 6.686-22.942 11.906-35.984 17.206-6.532 2.112-9.6-1.499-7.528-4.1 1.3-1.525 1.333-.159 6.037-.813 4.126-.575 7.173-1.657 11.467-2.928M343.841 46.029c5.464-.632 6.013-.099 10.94 1.121-6.05 2.59-5.27 2.843-12.312 3.382-2.807-.006-3.815.843-5.029 1.84-4.52 1-8.402-2.46-5.177-5.725 1.5-.679 2.858-1.048 4.862-.742 3.328.754 3.221 1.094 6.716.124M264.703 63.479c34.916-8.766 48.075-11.035 55.416-11.566 5.553-.114 2.847 1.85.652 1.988-29.698 4.809-55.018 13.835-78.66 26.195-5.741 3.047-5.419-.536.652-5.37 3.297-2.733 3.23-3.552 6.526-6.284 4.465-4.188 7.935-3.199 15.414-4.963M280.917 73.294c16.864-7.329 33.723-12.495 50.58-16.461 3.862-.585 3.591.844.52 1.878-20.236 6.837-39.704 15.086-58.146 25.225-5.603 3.412-12.885 7.637-18.488 11.049-6.467 3.405-1.505-2.503 2.04-6.715 1.717-3.48-.303-3.365 8.668-8.016l14.826-6.96Z"
                            }, void 0, false, {
                                fileName: "[project]/src/views/global/menu/Logo.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fill: "currentColor",
                                d: "M390.805 63.51c10.733-.616 18.556-3.7 26.636-6.956 3.363-1.094 2.894 1.114-.837 2.535-11.653 5.299-23.134 8.738-37.256 8.778-5.56-.417-7.437-3.834-4.964-5.85 2.259-1.84 1.53 1.028 7.9 1.884 3.963.532 4.234-.079 8.52-.392M465.626 47.586c-.093-1.422-.722-.543-.89-.015-2.495 4.232-7.06 2.065-12.065-3.383-.711-.83-1.894-1.258-1.306-.182 5.45 10.534 13.742 11.147 14.261 3.58M0 135.726V138h1.802c1.209-1.016 3.119-2.223 4.088-3.34-.258-.609-.967-1.583-1.551-2.029-1.166.43-3.054 2.338-4.339 3.095ZM151.12 62.29l5.078 1.15c.357-1.207.799-1.818.51-2.636-.99-.409-4.128-1.21-5.236-1.075l-.352 2.56ZM33.147 111.53c.454 1.01.821 1.15 1.212 2.178 1.304-.423 3.386-2.257 4.619-3.011-.423-.84-.962-1.505-1.402-2.23-1.419.635-3.195 2.062-4.429 3.064ZM6.6 130.705c.367.968.896 1.537 1.568 2.227.845-.42 3.638-2.441 4.24-3.154-.382-.805-.898-1.296-1.316-2.114-1.734.8-2.932 2.226-4.492 3.041Zm201.107-58.749 1.111 2.28c1.116-.402 4.044-1.717 4.757-2.537l-1.14-2.255c-1.2.527-3.922 1.781-4.728 2.512ZM88.599 76.558l1.17 2.373c1.19-.384 3.828-1.865 4.818-2.434l-1.135-2.256c-1.473.265-3.563 1.67-4.853 2.317ZM19.762 121.13c.55.83.91 1.336 1.623 2.125l3.099-2.232c.173-.12.448-.311.59-.44l.516-.572c-.456-.783-.922-1.29-1.335-2.053-1.183.546-3.53 2.308-4.493 3.172Zm265.614-74.55.15 2.73 5.29-.36-.02-2.524c-1.376-.457-3.89.051-5.42.154ZM253.05 52.94l.675 2.406 5.197-1.385-.63-2.616c-1.158.197-4.513.993-5.242 1.595Zm-109.876 8.759 5.294.17.182-2.689-5.533-.262.057 2.78Zm32.906 18.14c.272.733 2.144 4.265 2.577 4.632l2.25-1.11c-.641-1.505-1.739-3.687-2.595-4.884l-2.232 1.362Zm-4.613-6.34 3.068 4.044c.79-.344 1.44-.92 2.125-1.475-.47-1.167-2.587-3.792-3.362-4.339-.7.552-1.41 1.024-1.83 1.77Zm-75.49-.515 1.047 2.287 4.85-2.209-.96-2.45c-1.233.32-4.166 1.64-4.937 2.372ZM277.115 47.48l.351 2.678 5.349-.591-.248-2.702-5.452.615ZM299 46h-5.384l-.025 2.739 5.377-.016L299 46Zm-30.024 2.828.515 2.667 5.314-.909-.419-2.654-5.41.896ZM46.619 102.28l1.328 2.066c.964-.306 3.69-2.256 4.546-2.894l-1.397-2.208-3.318 2.061c-.237.158-.364.227-.604.427a4.796 4.796 0 0 0-.144.125l-.276.277a3.28 3.28 0 0 0-.135.146Zm-20.218 13.99c.352.769 1.08 1.746 1.747 2.182 1.055-1.169 3.022-1.996 4.142-3.16-.523-.686-.944-1.37-1.596-2.117l-4.293 3.095Zm234.551-65.685.596 2.657 5.189-1.151-.412-2.655-5.373 1.149Zm-81.228 36.533L181 90.373l4.209-2.556-1.34-2.294c-.499.227-.833.483-1.085.562-1.366.428.464-.11-1.035.08-.674.087-1.535.546-2.025.952Zm13.563-7.303 1.263 2.347c.722-.26 4.295-2.289 4.655-2.753l-1.213-2.23-4.705 2.636ZM60.33 93.285c.38.743.751 1.509 1.433 2.116l4.381-2.676-1.225-2.35c-.93.358-4.118 2.329-4.589 2.91Zm-6.928 4.35c.213.536.218.552.604 1.142.27.412-.006.043.325.46l.541.594c.854-.404 1.567-.967 2.284-1.418l2.113-1.53-1.306-2.065c-1.073.34-3.644 2.192-4.561 2.817ZM158.745 64.24l4.57 2.366 1.406-2.362c-1.751-.68-3.11-1.88-5.197-2.361l-.779 2.357Zm6.908 3.86 3.816 3.291a4.49 4.49 0 0 0 1.875-2.113c-1.314-.846-2.687-2.45-4.172-3.266l-1.52 2.089Zm79.537-12.858.795 2.592 5.121-1.624-.712-2.573-5.204 1.605Zm-58.929 28.723c.3.95.847 1.665 1.28 2.328l4.652-2.675c-.409-.87-.903-1.627-1.359-2.318l-4.573 2.665Zm-111.98.597c.359.966.828 1.43 1.166 2.352 1.73-.642 3.212-1.991 4.78-2.507l-1.263-2.472-4.683 2.627Zm29.1-15.187 1.044 2.511 4.884-2.04-.866-2.521-5.063 2.05Zm15.338-5.939c.212.858.49 1.967.981 2.55l4.872-1.441-.564-2.595-5.29 1.486Zm-105.47 62.486c.218.578.322.754.636 1.181l.768.815c.03.028.097.087.15.125l4.178-3.15c-.487-.882-.969-1.34-1.31-2.107-.87.352-3.728 2.438-4.422 3.136ZM237.438 58.12l.94 2.51 5.054-1.832-.875-2.502-5.12 1.824Zm-102.635 1.467.41 2.604 5.278-.419-.15-2.67-5.538.485Zm80.14 8.548 1.13 2.392 4.785-2.24c-.15-.891-.475-1.68-1.11-2.408l-4.804 2.256ZM39.8 106.829l1.456 2.208c1.584-.854 2.943-2.166 4.445-2.885l-1.453-2.352-4.448 3.029ZM222.346 64.54l1.115 2.487 4.86-2.165-.963-2.427-5.012 2.105ZM81.403 80.46l1.19 2.374c.86-.321 1.817-.875 2.51-1.26l1.917-1.15c.039-.03.114-.097.144-.122.031-.024.097-.08.142-.123l-1.295-2.177-4.608 2.459Zm29.607-14.255.921 2.519 5.01-1.798-.815-2.514-5.116 1.793Zm89.395 9.573 1.214 2.345 4.755-2.49-1.15-2.382-4.819 2.527Zm29.475-14.593.993 2.517 4.939-2.006-.922-2.444-5.01 1.933ZM67.289 88.916l1.271 2.207 4.623-2.747c-.151-.314-.42-.834-.583-1.113a5.972 5.972 0 0 0-.401-.621c-.3-.387-.246-.307-.48-.512l-4.43 2.786Zm59.384-27.734.632 2.546 5.136-.982-.387-2.604-5.38 1.04Z"
                            }, void 0, false, {
                                fileName: "[project]/src/views/global/menu/Logo.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/global/menu/Logo.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/global/menu/Logo.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 230,
                    height: 30,
                    viewBox: "0 0 276 21",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: "logo_saltamontes_text"
                        }, void 0, false, {
                            fileName: "[project]/src/views/global/menu/Logo.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fill: "currentColor",
                            fillRule: "evenodd",
                            d: "M5.224 13.373h7.132l-3.58-7.172-3.552 7.172ZM0 19.624 7.939 3.426h1.673l8.029 16.198h-2.19l-2.198-4.357h-8.95l-2.144 4.357H0Zm24.052 0H23.04L16.75 7.092h2.083l4.708 9.377 4.638-9.377h2.154l-6.281 12.532Zm8.75 0V7.062h1.983v12.562h-1.983Zm12.892-1.442c1.673 0 3.04-.451 4.097-1.358 1.057-.901 1.583-2.053 1.583-3.45 0-1.388-.53-2.535-1.592-3.447-1.062-.906-2.425-1.362-4.088-1.362-1.663 0-3.02.45-4.072 1.357-1.051.902-1.577 2.054-1.577 3.451 0 1.398.526 2.55 1.577 3.451 1.052.907 2.41 1.358 4.072 1.358Zm0 1.833c-2.229 0-4.067-.631-5.504-1.894-1.438-1.257-2.159-2.84-2.159-4.748 0-1.913.716-3.496 2.149-4.743 1.437-1.247 3.276-1.868 5.514-1.868 2.26 0 4.108.62 5.545 1.863 1.433 1.242 2.149 2.825 2.149 4.748 0 1.919-.721 3.501-2.159 4.759-1.438 1.257-3.28 1.883-5.535 1.883ZM45.24 5.139H43.89L46.951 0h2.23l-3.942 5.139Zm11.364 14.485V7.092h1.027l7.959 8.806V7.092h1.923v12.532h-1.027l-7.958-8.775v8.775h-1.924Zm15.232 0V7.062h1.983v12.562h-1.983Zm19.569-3.065a7.074 7.074 0 0 1-2.81 2.57c-1.157.59-2.48.886-3.957.886-2.199 0-4.012-.621-5.44-1.869-1.422-1.247-2.133-2.83-2.133-4.743 0-1.918.711-3.5 2.134-4.758 1.427-1.257 3.24-1.883 5.439-1.883 1.372 0 2.615.255 3.732.771 1.116.51 2.013 1.237 2.7 2.174l-1.558 1.082a5.07 5.07 0 0 0-2.044-1.648c-.847-.386-1.788-.576-2.825-.576-1.608 0-2.935.456-3.987 1.372-1.052.912-1.578 2.059-1.578 3.436 0 1.378.526 2.525 1.583 3.436 1.057.917 2.384 1.373 3.982 1.373 1.112 0 2.099-.22 2.95-.657.852-.44 1.598-1.121 2.244-2.048l1.568 1.082Zm5.99-1.773h4.899l-2.435-4.804-2.464 4.804Zm-4.543 4.838 6.376-12.532h1.232l6.427 12.532h-2.099l-1.628-3.186h-6.616l-1.618 3.186H92.85Zm24.668-2.44 1.172-1.737c1.147.886 2.34 1.562 3.576 2.033 1.237.466 2.465.702 3.677.702 1.497 0 2.714-.316 3.646-.952.937-.636 1.402-1.453 1.402-2.45 0-.79-.335-1.442-1.006-1.953-.671-.51-1.598-.816-2.78-.916-.286-.03-.696-.06-1.232-.086-2.665-.19-4.478-.5-5.45-.941-.751-.366-1.327-.832-1.718-1.403a3.36 3.36 0 0 1-.586-1.933c0-1.302.581-2.374 1.748-3.22 1.162-.842 2.675-1.263 4.533-1.263 1.353 0 2.685.22 4.002.666a13.72 13.72 0 0 1 3.752 1.979l-1.172 1.683c-1.002-.807-2.049-1.413-3.15-1.823a9.757 9.757 0 0 0-3.397-.611c-1.222 0-2.229.24-3.025.716-.791.476-1.187 1.072-1.187 1.788 0 .28.065.54.19.776s.326.461.586.666c.666.496 2.104.817 4.318.952 1.016.06 1.808.12 2.364.19 1.643.186 2.945.712 3.907 1.583.956.872 1.437 1.939 1.437 3.21 0 1.513-.656 2.76-1.973 3.737-1.318.977-3.046 1.468-5.18 1.468-1.612 0-3.115-.236-4.497-.701-1.388-.471-2.705-1.187-3.957-2.16Zm21.327-2.398h4.899l-2.435-4.804-2.464 4.804Zm-4.543 4.838 6.376-12.532h1.232l6.427 12.532h-2.099l-1.628-3.186h-6.616l-1.618 3.186h-2.074Zm15.903 0V7.092h1.953v10.729h9.316v1.803h-11.27Zm14.14 0V8.835h-5.29V7.092h12.532v1.743h-5.29v10.789h-1.953Zm10.257-4.838h4.899l-2.435-4.804-2.464 4.804Zm-4.543 4.838 6.376-12.532h1.232l6.427 12.532h-2.099l-1.628-3.186h-6.616l-1.618 3.186h-2.074Zm15.903 0V7.092h1.628l5.129 7.333 5.139-7.333h1.627v12.532h-1.953v-9.01l-4.813 6.966-4.804-6.967v9.011h-1.953Zm24.397-1.442c1.673 0 3.04-.451 4.097-1.358 1.057-.901 1.583-2.053 1.583-3.45 0-1.388-.53-2.535-1.593-3.447-1.062-.906-2.424-1.362-4.087-1.362-1.663 0-3.02.45-4.072 1.357-1.052.902-1.578 2.054-1.578 3.451 0 1.398.526 2.55 1.578 3.451 1.052.907 2.41 1.358 4.072 1.358Zm0 1.833c-2.229 0-4.067-.631-5.504-1.894-1.438-1.257-2.16-2.84-2.16-4.748 0-1.913.717-3.496 2.15-4.743 1.437-1.247 3.275-1.868 5.514-1.868 2.26 0 4.107.62 5.545 1.863 1.432 1.242 2.149 2.825 2.149 4.748 0 1.919-.722 3.501-2.16 4.759-1.437 1.257-3.28 1.883-5.534 1.883Zm10.91-.391V7.092h1.026l7.959 8.806V7.092h1.923v12.532h-1.027l-7.958-8.775v8.775h-1.924Zm18.176 0V8.835h-5.29V7.092h12.532v1.743H241.4v10.789h-1.953Zm9.19 0V7.092h11.751v1.833h-9.797v3.126h6.431v1.803h-6.431v3.967h10.338v1.803h-12.291Zm14.005-1.603.952-1.643a11 11 0 0 0 2.82 1.348c1.021.325 1.993.486 2.925.486 1.117 0 2.018-.226 2.704-.682.686-.455 1.027-1.036 1.027-1.748 0-.716-.315-1.242-.942-1.592-.626-.346-1.612-.536-2.965-.576-2.284-.03-3.851-.296-4.703-.792-.851-.5-1.277-1.327-1.277-2.479 0-1.077.466-1.943 1.402-2.6.937-.656 2.194-.981 3.772-.981 1.077 0 2.119.15 3.135.456 1.012.3 1.989.75 2.93 1.347l-.986 1.623a9.971 9.971 0 0 0-2.525-1.222c-.901-.286-1.763-.431-2.584-.431-.952 0-1.718.165-2.294.496-.576.335-.867.766-.867 1.302 0 .556.29.952.872 1.187.58.235 1.593.35 3.03.35 1.999 0 3.501.336 4.518 1.012 1.017.677 1.528 1.678 1.528 3.01 0 1.183-.516 2.164-1.548 2.95-1.032.782-2.37 1.173-4.012 1.173-1.217 0-2.42-.176-3.621-.521a12.55 12.55 0 0 1-3.291-1.473Z"
                        }, void 0, false, {
                            fileName: "[project]/src/views/global/menu/Logo.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/global/menu/Logo.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Logo.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/global/menu/Logo.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Logo;
}),
"[project]/src/views/global/menu/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$switch$2d$locale$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/switch-locale/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slide$2d$over$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/slide-over/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$container$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/container/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/texts/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$global$2f$menu$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/views/global/menu/Logo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Main.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Menu = ({ open, setOpen })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleMove = (id)=>{
        setOpen(false);
        if (pathname === "/") {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
        } else {
            router.push("/");
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex items-center justify-center h-[80%] gap-10 lg:gap-20 flex-col lg:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "block lg:hidden -mt-44 bg-red-500 h-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    alt: "",
                    src: "/images/saltamontes_animation.webp",
                    width: 672,
                    height: 356,
                    className: "w-full"
                }, void 0, false, {
                    fileName: "[project]/src/views/global/menu/Main.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "uppercase",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleMove("gallery"),
                    className: "cursor-pointer font-calibri-regular text-xl md:text-base uppercase",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: "label_aircraft"
                    }, void 0, false, {
                        fileName: "[project]/src/views/global/menu/Main.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/views/global/menu/Main.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "uppercase",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>handleMove("about"),
                    className: "cursor-pointer font-calibri-regular text-xl md:text-base uppercase",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: "label_about_us"
                    }, void 0, false, {
                        fileName: "[project]/src/views/global/menu/Main.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/views/global/menu/Main.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleMove("contact"),
                    type: "button",
                    className: "h-10 md:h-9 bg-c_golden rounded-full uppercase text-white cursor-pointer font-calibri-bold text-xl md:text-base px-10 md:px-7",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: "label_contact"
                    }, void 0, false, {
                        fileName: "[project]/src/views/global/menu/Main.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/views/global/menu/Main.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$switch$2d$locale$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/views/global/menu/Main.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/global/menu/Main.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Hamburger = ({ setOpen, open })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>setOpen(!open),
        className: "w-9 h-9 cursor-pointer flex items-center justify-center text-white ring-2 rounded",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            className: "transition-all duration-300 ease-in-out",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: `transition-transform duration-300 ease-in-out ${open ? "rotate-45" : ""}`,
                style: {
                    transformOrigin: "center",
                    transformBox: "fill-box"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "4",
                        y1: "8",
                        x2: "20",
                        y2: "8",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        className: `transition-all duration-300 ease-in-out ${open ? "translate-y-1" : ""}`
                    }, void 0, false, {
                        fileName: "[project]/src/views/global/menu/Main.jsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "4",
                        y1: "16",
                        x2: "20",
                        y2: "16",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        className: `transition-all duration-300 ease-in-out ${open ? "-translate-y-1 -rotate-90" : ""}`,
                        style: {
                            transformOrigin: "center",
                            transformBox: "fill-box"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/views/global/menu/Main.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/views/global/menu/Main.jsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/views/global/menu/Main.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Main = ()=>{
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { backgroundLoaded, setBackgroundLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMainContext"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setShow(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname !== "/") {
            setBackgroundLoaded(true);
        }
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$slide$2d$over$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {
                    open: open,
                    setOpen: setOpen
                }, void 0, false, {
                    fileName: "[project]/src/views/global/menu/Main.jsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-40 -translate-y-full transition-transform duration-2000 delay-100 shadow", backgroundLoaded && "translate-y-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-full transition-colors duration-300", pathname === "/" ? "text-white bg-c_dark_blue/40" : "bg-white", show && "bg-white text-c_midnight_blue"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$container$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$global$2f$menu$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/views/global/menu/Main.jsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block lg:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$switch$2d$locale$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/views/global/menu/Main.jsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/global/menu/Main.jsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mix-blend-difference block lg:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Hamburger, {
                                                setOpen: setOpen,
                                                open: open
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/global/menu/Main.jsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/global/menu/Main.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/global/menu/Main.jsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden lg:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Menu, {
                                        open: open,
                                        setOpen: setOpen
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/global/menu/Main.jsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/global/menu/Main.jsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/global/menu/Main.jsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/global/menu/Main.jsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/views/global/menu/Main.jsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/global/menu/Main.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/global/menu/Main.jsx",
        lineNumber: 130,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/views/quote/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$container$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/container/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/texts/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Item = ({ active = false, title = "", src1 = "", src2 = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            !active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                alt: "",
                src: src1,
                width: 60,
                height: 60,
                className: "w-10 md:w-16"
            }, void 0, false, {
                fileName: "[project]/src/views/quote/components/Header.jsx",
                lineNumber: 13,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                alt: "",
                src: src2,
                width: 60,
                height: 60,
                className: "w-10 md:w-16"
            }, void 0, false, {
                fileName: "[project]/src/views/quote/components/Header.jsx",
                lineNumber: 14,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-12 md:-bottom-8 left-1/2 -translate-x-1/2 min-w-36 md:min-w-44 text-xs md:text-base",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-calibri-regular text-nowrap text-center text-sm leading-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        value: title
                    }, void 0, false, {
                        fileName: "[project]/src/views/quote/components/Header.jsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/views/quote/components/Header.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/quote/components/Header.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/quote/components/Header.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Divider = ({ active = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b-2 w-20 md:w-40 border-slate-200", active && "border-c_dark_blue/70")
    }, void 0, false, {
        fileName: "[project]/src/views/quote/components/Header.jsx",
        lineNumber: 25,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const Header = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const step = Number(searchParams.get("step")) || 1;
    const handleChangeStep = (step)=>{
        router.push(`?step=${step}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-10 pb-12 md:pb-10 mt-14 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$container$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 md:gap-7 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleChangeStep(1),
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                            active: step >= 1,
                            src1: "/images/ic_flight_details_w.svg",
                            src2: "/images/ic_flight_details.svg",
                            title: "label_flight_details"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quote/components/Header.jsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/quote/components/Header.jsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {
                        active: step >= 1
                    }, void 0, false, {
                        fileName: "[project]/src/views/quote/components/Header.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleChangeStep(2),
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                            active: step >= 2,
                            src1: "/images/ic_contact_information_w.svg",
                            src2: "/images/ic_contact_information.svg",
                            title: "label_contact_information"
                        }, void 0, false, {
                            fileName: "[project]/src/views/quote/components/Header.jsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/quote/components/Header.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Divider, {
                        active: step >= 2
                    }, void 0, false, {
                        fileName: "[project]/src/views/quote/components/Header.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                        active: step >= 3,
                        src1: "/images/ic_submit_w.svg",
                        src2: "/images/ic_submit.svg",
                        title: "label_submit"
                    }, void 0, false, {
                        fileName: "[project]/src/views/quote/components/Header.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/quote/components/Header.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/views/quote/components/Header.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/views/quote/components/Header.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/input-date/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$range$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-date-range/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/en-US.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/locale/es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/texts/Main.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Main = ({ label = "", date, setDate })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lang = localStorage.getItem("lang-avionica") || "en";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    value: label
                }, void 0, false, {
                    fileName: "[project]/src/components/input-date/Main.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/input-date/Main.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen(true),
                className: "w-full h-10 border border-c_golden rounded px-3 font-calibri-regular cursor-pointer relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-calibri-regular mt-2",
                        children: date.toLocaleDateString(lang === "en" ? "en-US" : "es-MX", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/input-date/Main.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$date$2d$range$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Calendar"], {
                        locale: lang === "en" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enUS"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$locale$2f$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["es"],
                        minDate: new Date(),
                        date: date,
                        onChange: (item)=>setDate(item),
                        className: "absolute top-12 z-20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/input-date/Main.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/input-date/Main.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/input-date/Main.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/components/text-area/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
"use client";
;
;
const Main = ({ placeholder = "", ...props })=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full relative mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular",
                children: props?.label ? t(props.label) : ""
            }, void 0, false, {
                fileName: "[project]/src/components/text-area/Main.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "w-full h-28 border border-c_golden rounded p-2 resize-none font-calibri-regular",
                placeholder: placeholder ? t(placeholder) : "",
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/text-area/Main.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/text-area/Main.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/components/checkbox/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const icon = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22white%22%3E%3Cpath d=%22M9 16.17l-3.88-3.88a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l10-10a.996.996 0 10-1.41-1.41L9 16.17z%22/%3E%3C/svg%3E";
const Main = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...props,
                type: "checkbox",
                className: "appearance-none w-4.5 h-4.5 cursor-pointer rounded border border-c_golden relative after:bg-contain after:bg-c_golden",
                style: {
                    "--icon-url": `url('${icon}')`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/checkbox/Main.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          input[type="checkbox"]:checked::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: var(--icon-url);
            background-repeat: no-repeat;
            background-position: center;
          }
        `
            }, void 0, false, {
                fileName: "[project]/src/components/checkbox/Main.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/checkbox/Main.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/components/spinner/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.js [app-ssr] (ecmascript)");
;
;
const Main = ({ className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "status",
            "aria-label": "loading",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-spin inline-block size-7 border-[3px] border-current border-t-transparent text-white rounded-full", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/spinner/Main.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/spinner/Main.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/spinner/Main.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/components/select/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/texts/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.js [app-ssr] (ecmascript)");
;
;
;
const Main = ({ label = "", children, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full relative transition-all", props.value === "OTHER" && "min-w-[83px] w-[83px]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    value: label
                }, void 0, false, {
                    fileName: "[project]/src/components/select/Main.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/select/Main.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                ...props,
                className: "w-full h-10 border border-c_golden rounded px-3 font-calibri-regular appearance-none",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/select/Main.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "icon icon-tabler icons-tabler-outline icon-tabler-chevron-down",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            stroke: "none",
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/select/Main.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 9l6 6l6 -6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/select/Main.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/select/Main.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/select/Main.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/select/Main.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/utils/data.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listLocations",
    ()=>listLocations,
    "listPhoneCodes",
    ()=>listPhoneCodes
]);
const listLocations = [
    "San Juanico",
    "Adolfo López Mateos",
    "Ciudad Constitución",
    "Loreto",
    "Mulegé",
    "San Ignacio",
    "Punta Abreojos",
    "Santa Rosalía",
    "Guerrero Negro",
    "Punta Chivato",
    "Isla Cedros",
    "La Paz",
    "Cabo San Lucas",
    "Las Cruces",
    "Todos Santos"
];
const listPhoneCodes = [
    {
        name: "United States",
        code: "US",
        emoji: "🇺🇸",
        unicode: "U+1F1FA U+1F1F8",
        image: "US.svg",
        dial_code: "+1"
    },
    {
        name: "Mexico",
        code: "MX",
        emoji: "🇲🇽",
        unicode: "U+1F1F2 U+1F1FD",
        image: "MX.svg",
        dial_code: "+52"
    },
    {
        name: "Canada",
        code: "CA",
        emoji: "🇨🇦",
        unicode: "U+1F1E8 U+1F1E6",
        image: "CA.svg",
        dial_code: "+1"
    },
    {
        name: "Russia",
        code: "RU",
        emoji: "🇷🇺",
        unicode: "U+1F1F7 U+1F1FA",
        image: "RU.svg",
        dial_code: "+7"
    },
    {
        name: "Egypt",
        code: "EG",
        emoji: "🇪🇬",
        unicode: "U+1F1EA U+1F1EC",
        image: "EG.svg",
        dial_code: "+20"
    },
    {
        name: "South Africa",
        code: "ZA",
        emoji: "🇿🇦",
        unicode: "U+1F1FF U+1F1E6",
        image: "ZA.svg",
        dial_code: "+27"
    },
    {
        name: "Greece",
        code: "GR",
        emoji: "🇬🇷",
        unicode: "U+1F1EC U+1F1F7",
        image: "GR.svg",
        dial_code: "+30"
    },
    {
        name: "Netherlands",
        code: "NL",
        emoji: "🇳🇱",
        unicode: "U+1F1F3 U+1F1F1",
        image: "NL.svg",
        dial_code: "+31"
    },
    {
        name: "Belgium",
        code: "BE",
        emoji: "🇧🇪",
        unicode: "U+1F1E7 U+1F1EA",
        image: "BE.svg",
        dial_code: "+32"
    },
    {
        name: "France",
        code: "FR",
        emoji: "🇫🇷",
        unicode: "U+1F1EB U+1F1F7",
        image: "FR.svg",
        dial_code: "+33"
    },
    {
        name: "Spain",
        code: "ES",
        emoji: "🇪🇸",
        unicode: "U+1F1EA U+1F1F8",
        image: "ES.svg",
        dial_code: "+34"
    },
    {
        name: "Hungary",
        code: "HU",
        emoji: "🇭🇺",
        unicode: "U+1F1ED U+1F1FA",
        image: "HU.svg",
        dial_code: "+36"
    },
    {
        name: "Italy",
        code: "IT",
        emoji: "🇮🇹",
        unicode: "U+1F1EE U+1F1F9",
        image: "IT.svg",
        dial_code: "+39"
    },
    {
        name: "Romania",
        code: "RO",
        emoji: "🇷🇴",
        unicode: "U+1F1F7 U+1F1F4",
        image: "RO.svg",
        dial_code: "+40"
    },
    {
        name: "Switzerland",
        code: "CH",
        emoji: "🇨🇭",
        unicode: "U+1F1E8 U+1F1ED",
        image: "CH.svg",
        dial_code: "+41"
    },
    {
        name: "Austria",
        code: "AT",
        emoji: "🇦🇹",
        unicode: "U+1F1E6 U+1F1F9",
        image: "AT.svg",
        dial_code: "+43"
    },
    {
        name: "Isle of Man",
        code: "IM",
        emoji: "🇮🇲",
        unicode: "U+1F1EE U+1F1F2",
        image: "IM.svg",
        dial_code: "+44"
    },
    {
        name: "Guernsey",
        code: "GG",
        emoji: "🇬🇬",
        unicode: "U+1F1EC U+1F1EC",
        image: "GG.svg",
        dial_code: "+44"
    },
    {
        name: "Jersey",
        code: "JE",
        emoji: "🇯🇪",
        unicode: "U+1F1EF U+1F1EA",
        image: "JE.svg",
        dial_code: "+44"
    },
    {
        name: "United Kingdom",
        code: "GB",
        emoji: "🇬🇧",
        unicode: "U+1F1EC U+1F1E7",
        image: "GB.svg",
        dial_code: "+44"
    },
    {
        name: "Denmark",
        code: "DK",
        emoji: "🇩🇰",
        unicode: "U+1F1E9 U+1F1F0",
        image: "DK.svg",
        dial_code: "+45"
    },
    {
        name: "Sweden",
        code: "SE",
        emoji: "🇸🇪",
        unicode: "U+1F1F8 U+1F1EA",
        image: "SE.svg",
        dial_code: "+46"
    },
    {
        name: "Svalbard & Jan Mayen",
        code: "SJ",
        emoji: "🇸🇯",
        unicode: "U+1F1F8 U+1F1EF",
        image: "SJ.svg",
        dial_code: "+47"
    },
    {
        name: "Norway",
        code: "NO",
        emoji: "🇳🇴",
        unicode: "U+1F1F3 U+1F1F4",
        image: "NO.svg",
        dial_code: "+47"
    },
    {
        name: "Poland",
        code: "PL",
        emoji: "🇵🇱",
        unicode: "U+1F1F5 U+1F1F1",
        image: "PL.svg",
        dial_code: "+48"
    },
    {
        name: "Germany",
        code: "DE",
        emoji: "🇩🇪",
        unicode: "U+1F1E9 U+1F1EA",
        image: "DE.svg",
        dial_code: "+49"
    },
    {
        name: "Peru",
        code: "PE",
        emoji: "🇵🇪",
        unicode: "U+1F1F5 U+1F1EA",
        image: "PE.svg",
        dial_code: "+51"
    },
    {
        name: "Cuba",
        code: "CU",
        emoji: "🇨🇺",
        unicode: "U+1F1E8 U+1F1FA",
        image: "CU.svg",
        dial_code: "+53"
    },
    {
        name: "Argentina",
        code: "AR",
        emoji: "🇦🇷",
        unicode: "U+1F1E6 U+1F1F7",
        image: "AR.svg",
        dial_code: "+54"
    },
    {
        name: "Brazil",
        code: "BR",
        emoji: "🇧🇷",
        unicode: "U+1F1E7 U+1F1F7",
        image: "BR.svg",
        dial_code: "+55"
    },
    {
        name: "Chile",
        code: "CL",
        emoji: "🇨🇱",
        unicode: "U+1F1E8 U+1F1F1",
        image: "CL.svg",
        dial_code: "+56"
    },
    {
        name: "Colombia",
        code: "CO",
        emoji: "🇨🇴",
        unicode: "U+1F1E8 U+1F1F4",
        image: "CO.svg",
        dial_code: "+57"
    },
    {
        name: "Venezuela",
        code: "VE",
        emoji: "🇻🇪",
        unicode: "U+1F1FB U+1F1EA",
        image: "VE.svg",
        dial_code: "+58"
    },
    {
        name: "Malaysia",
        code: "MY",
        emoji: "🇲🇾",
        unicode: "U+1F1F2 U+1F1FE",
        image: "MY.svg",
        dial_code: "+60"
    },
    {
        name: "Christmas Island",
        code: "CX",
        emoji: "🇨🇽",
        unicode: "U+1F1E8 U+1F1FD",
        image: "CX.svg",
        dial_code: "+61"
    },
    {
        name: "Cocos (Keeling) Islands",
        code: "CC",
        emoji: "🇨🇨",
        unicode: "U+1F1E8 U+1F1E8",
        image: "CC.svg",
        dial_code: "+61"
    },
    {
        name: "Australia",
        code: "AU",
        emoji: "🇦🇺",
        unicode: "U+1F1E6 U+1F1FA",
        image: "AU.svg",
        dial_code: "+61"
    },
    {
        name: "Indonesia",
        code: "ID",
        emoji: "🇮🇩",
        unicode: "U+1F1EE U+1F1E9",
        image: "ID.svg",
        dial_code: "+62"
    },
    {
        name: "Philippines",
        code: "PH",
        emoji: "🇵🇭",
        unicode: "U+1F1F5 U+1F1ED",
        image: "PH.svg",
        dial_code: "+63"
    },
    {
        name: "New Zealand",
        code: "NZ",
        emoji: "🇳🇿",
        unicode: "U+1F1F3 U+1F1FF",
        image: "NZ.svg",
        dial_code: "+64"
    },
    {
        name: "Singapore",
        code: "SG",
        emoji: "🇸🇬",
        unicode: "U+1F1F8 U+1F1EC",
        image: "SG.svg",
        dial_code: "+65"
    },
    {
        name: "Thailand",
        code: "TH",
        emoji: "🇹🇭",
        unicode: "U+1F1F9 U+1F1ED",
        image: "TH.svg",
        dial_code: "+66"
    },
    {
        name: "Kazakhstan",
        code: "KZ",
        emoji: "🇰🇿",
        unicode: "U+1F1F0 U+1F1FF",
        image: "KZ.svg",
        dial_code: "+77"
    },
    {
        name: "Japan",
        code: "JP",
        emoji: "🇯🇵",
        unicode: "U+1F1EF U+1F1F5",
        image: "JP.svg",
        dial_code: "+81"
    },
    {
        name: "South Korea",
        code: "KR",
        emoji: "🇰🇷",
        unicode: "U+1F1F0 U+1F1F7",
        image: "KR.svg",
        dial_code: "+82"
    },
    {
        name: "Vietnam",
        code: "VN",
        emoji: "🇻🇳",
        unicode: "U+1F1FB U+1F1F3",
        image: "VN.svg",
        dial_code: "+84"
    },
    {
        name: "China",
        code: "CN",
        emoji: "🇨🇳",
        unicode: "U+1F1E8 U+1F1F3",
        image: "CN.svg",
        dial_code: "+86"
    },
    {
        name: "Turkey",
        code: "TR",
        emoji: "🇹🇷",
        unicode: "U+1F1F9 U+1F1F7",
        image: "TR.svg",
        dial_code: "+90"
    },
    {
        name: "India",
        code: "IN",
        emoji: "🇮🇳",
        unicode: "U+1F1EE U+1F1F3",
        image: "IN.svg",
        dial_code: "+91"
    },
    {
        name: "Pakistan",
        code: "PK",
        emoji: "🇵🇰",
        unicode: "U+1F1F5 U+1F1F0",
        image: "PK.svg",
        dial_code: "+92"
    },
    {
        name: "Afghanistan",
        code: "AF",
        emoji: "🇦🇫",
        unicode: "U+1F1E6 U+1F1EB",
        image: "AF.svg",
        dial_code: "+93"
    },
    {
        name: "Sri Lanka",
        code: "LK",
        emoji: "🇱🇰",
        unicode: "U+1F1F1 U+1F1F0",
        image: "LK.svg",
        dial_code: "+94"
    },
    {
        name: "Myanmar (Burma)",
        code: "MM",
        emoji: "🇲🇲",
        unicode: "U+1F1F2 U+1F1F2",
        image: "MM.svg",
        dial_code: "+95"
    },
    {
        name: "Iran",
        code: "IR",
        emoji: "🇮🇷",
        unicode: "U+1F1EE U+1F1F7",
        image: "IR.svg",
        dial_code: "+98"
    },
    {
        name: "South Sudan",
        code: "SS",
        emoji: "🇸🇸",
        unicode: "U+1F1F8 U+1F1F8",
        image: "SS.svg",
        dial_code: "+211"
    },
    {
        name: "Morocco",
        code: "MA",
        emoji: "🇲🇦",
        unicode: "U+1F1F2 U+1F1E6",
        image: "MA.svg",
        dial_code: "+212"
    },
    {
        name: "Algeria",
        code: "DZ",
        emoji: "🇩🇿",
        unicode: "U+1F1E9 U+1F1FF",
        image: "DZ.svg",
        dial_code: "+213"
    },
    {
        name: "Tunisia",
        code: "TN",
        emoji: "🇹🇳",
        unicode: "U+1F1F9 U+1F1F3",
        image: "TN.svg",
        dial_code: "+216"
    },
    {
        name: "Libya",
        code: "LY",
        emoji: "🇱🇾",
        unicode: "U+1F1F1 U+1F1FE",
        image: "LY.svg",
        dial_code: "+218"
    },
    {
        name: "Gambia",
        code: "GM",
        emoji: "🇬🇲",
        unicode: "U+1F1EC U+1F1F2",
        image: "GM.svg",
        dial_code: "+220"
    },
    {
        name: "Senegal",
        code: "SN",
        emoji: "🇸🇳",
        unicode: "U+1F1F8 U+1F1F3",
        image: "SN.svg",
        dial_code: "+221"
    },
    {
        name: "Mauritania",
        code: "MR",
        emoji: "🇲🇷",
        unicode: "U+1F1F2 U+1F1F7",
        image: "MR.svg",
        dial_code: "+222"
    },
    {
        name: "Mali",
        code: "ML",
        emoji: "🇲🇱",
        unicode: "U+1F1F2 U+1F1F1",
        image: "ML.svg",
        dial_code: "+223"
    },
    {
        name: "Guinea",
        code: "GN",
        emoji: "🇬🇳",
        unicode: "U+1F1EC U+1F1F3",
        image: "GN.svg",
        dial_code: "+224"
    },
    {
        name: "Côte d’Ivoire",
        code: "CI",
        emoji: "🇨🇮",
        unicode: "U+1F1E8 U+1F1EE",
        image: "CI.svg",
        dial_code: "+225"
    },
    {
        name: "Burkina Faso",
        code: "BF",
        emoji: "🇧🇫",
        unicode: "U+1F1E7 U+1F1EB",
        image: "BF.svg",
        dial_code: "+226"
    },
    {
        name: "Niger",
        code: "NE",
        emoji: "🇳🇪",
        unicode: "U+1F1F3 U+1F1EA",
        image: "NE.svg",
        dial_code: "+227"
    },
    {
        name: "Togo",
        code: "TG",
        emoji: "🇹🇬",
        unicode: "U+1F1F9 U+1F1EC",
        image: "TG.svg",
        dial_code: "+228"
    },
    {
        name: "Benin",
        code: "BJ",
        emoji: "🇧🇯",
        unicode: "U+1F1E7 U+1F1EF",
        image: "BJ.svg",
        dial_code: "+229"
    },
    {
        name: "Mauritius",
        code: "MU",
        emoji: "🇲🇺",
        unicode: "U+1F1F2 U+1F1FA",
        image: "MU.svg",
        dial_code: "+230"
    },
    {
        name: "Liberia",
        code: "LR",
        emoji: "🇱🇷",
        unicode: "U+1F1F1 U+1F1F7",
        image: "LR.svg",
        dial_code: "+231"
    },
    {
        name: "Sierra Leone",
        code: "SL",
        emoji: "🇸🇱",
        unicode: "U+1F1F8 U+1F1F1",
        image: "SL.svg",
        dial_code: "+232"
    },
    {
        name: "Ghana",
        code: "GH",
        emoji: "🇬🇭",
        unicode: "U+1F1EC U+1F1ED",
        image: "GH.svg",
        dial_code: "+233"
    },
    {
        name: "Nigeria",
        code: "NG",
        emoji: "🇳🇬",
        unicode: "U+1F1F3 U+1F1EC",
        image: "NG.svg",
        dial_code: "+234"
    },
    {
        name: "Chad",
        code: "TD",
        emoji: "🇹🇩",
        unicode: "U+1F1F9 U+1F1E9",
        image: "TD.svg",
        dial_code: "+235"
    },
    {
        name: "Central African Republic",
        code: "CF",
        emoji: "🇨🇫",
        unicode: "U+1F1E8 U+1F1EB",
        image: "CF.svg",
        dial_code: "+236"
    },
    {
        name: "Cameroon",
        code: "CM",
        emoji: "🇨🇲",
        unicode: "U+1F1E8 U+1F1F2",
        image: "CM.svg",
        dial_code: "+237"
    },
    {
        name: "Cape Verde",
        code: "CV",
        emoji: "🇨🇻",
        unicode: "U+1F1E8 U+1F1FB",
        image: "CV.svg",
        dial_code: "+238"
    },
    {
        name: "São Tomé & Príncipe",
        code: "ST",
        emoji: "🇸🇹",
        unicode: "U+1F1F8 U+1F1F9",
        image: "ST.svg",
        dial_code: "+239"
    },
    {
        name: "Equatorial Guinea",
        code: "GQ",
        emoji: "🇬🇶",
        unicode: "U+1F1EC U+1F1F6",
        image: "GQ.svg",
        dial_code: "+240"
    },
    {
        name: "Gabon",
        code: "GA",
        emoji: "🇬🇦",
        unicode: "U+1F1EC U+1F1E6",
        image: "GA.svg",
        dial_code: "+241"
    },
    {
        name: "Congo - Brazzaville",
        code: "CG",
        emoji: "🇨🇬",
        unicode: "U+1F1E8 U+1F1EC",
        image: "CG.svg",
        dial_code: "+242"
    },
    {
        name: "Congo - Kinshasa",
        code: "CD",
        emoji: "🇨🇩",
        unicode: "U+1F1E8 U+1F1E9",
        image: "CD.svg",
        dial_code: "+243"
    },
    {
        name: "Angola",
        code: "AO",
        emoji: "🇦🇴",
        unicode: "U+1F1E6 U+1F1F4",
        image: "AO.svg",
        dial_code: "+244"
    },
    {
        name: "Guinea-Bissau",
        code: "GW",
        emoji: "🇬🇼",
        unicode: "U+1F1EC U+1F1FC",
        image: "GW.svg",
        dial_code: "+245"
    },
    {
        name: "British Indian Ocean Territory",
        code: "IO",
        emoji: "🇮🇴",
        unicode: "U+1F1EE U+1F1F4",
        image: "IO.svg",
        dial_code: "+246"
    },
    {
        name: "Seychelles",
        code: "SC",
        emoji: "🇸🇨",
        unicode: "U+1F1F8 U+1F1E8",
        image: "SC.svg",
        dial_code: "+248"
    },
    {
        name: "Sudan",
        code: "SD",
        emoji: "🇸🇩",
        unicode: "U+1F1F8 U+1F1E9",
        image: "SD.svg",
        dial_code: "+249"
    },
    {
        name: "Rwanda",
        code: "RW",
        emoji: "🇷🇼",
        unicode: "U+1F1F7 U+1F1FC",
        image: "RW.svg",
        dial_code: "+250"
    },
    {
        name: "Ethiopia",
        code: "ET",
        emoji: "🇪🇹",
        unicode: "U+1F1EA U+1F1F9",
        image: "ET.svg",
        dial_code: "+251"
    },
    {
        name: "Somalia",
        code: "SO",
        emoji: "🇸🇴",
        unicode: "U+1F1F8 U+1F1F4",
        image: "SO.svg",
        dial_code: "+252"
    },
    {
        name: "Djibouti",
        code: "DJ",
        emoji: "🇩🇯",
        unicode: "U+1F1E9 U+1F1EF",
        image: "DJ.svg",
        dial_code: "+253"
    },
    {
        name: "Kenya",
        code: "KE",
        emoji: "🇰🇪",
        unicode: "U+1F1F0 U+1F1EA",
        image: "KE.svg",
        dial_code: "+254"
    },
    {
        name: "Tanzania",
        code: "TZ",
        emoji: "🇹🇿",
        unicode: "U+1F1F9 U+1F1FF",
        image: "TZ.svg",
        dial_code: "+255"
    },
    {
        name: "Uganda",
        code: "UG",
        emoji: "🇺🇬",
        unicode: "U+1F1FA U+1F1EC",
        image: "UG.svg",
        dial_code: "+256"
    },
    {
        name: "Burundi",
        code: "BI",
        emoji: "🇧🇮",
        unicode: "U+1F1E7 U+1F1EE",
        image: "BI.svg",
        dial_code: "+257"
    },
    {
        name: "Mozambique",
        code: "MZ",
        emoji: "🇲🇿",
        unicode: "U+1F1F2 U+1F1FF",
        image: "MZ.svg",
        dial_code: "+258"
    },
    {
        name: "Zambia",
        code: "ZM",
        emoji: "🇿🇲",
        unicode: "U+1F1FF U+1F1F2",
        image: "ZM.svg",
        dial_code: "+260"
    },
    {
        name: "Madagascar",
        code: "MG",
        emoji: "🇲🇬",
        unicode: "U+1F1F2 U+1F1EC",
        image: "MG.svg",
        dial_code: "+261"
    },
    {
        name: "Réunion",
        code: "RE",
        emoji: "🇷🇪",
        unicode: "U+1F1F7 U+1F1EA",
        image: "RE.svg",
        dial_code: "+262"
    },
    {
        name: "Mayotte",
        code: "YT",
        emoji: "🇾🇹",
        unicode: "U+1F1FE U+1F1F9",
        image: "YT.svg",
        dial_code: "+262"
    },
    {
        name: "Zimbabwe",
        code: "ZW",
        emoji: "🇿🇼",
        unicode: "U+1F1FF U+1F1FC",
        image: "ZW.svg",
        dial_code: "+263"
    },
    {
        name: "Namibia",
        code: "NA",
        emoji: "🇳🇦",
        unicode: "U+1F1F3 U+1F1E6",
        image: "NA.svg",
        dial_code: "+264"
    },
    {
        name: "Malawi",
        code: "MW",
        emoji: "🇲🇼",
        unicode: "U+1F1F2 U+1F1FC",
        image: "MW.svg",
        dial_code: "+265"
    },
    {
        name: "Lesotho",
        code: "LS",
        emoji: "🇱🇸",
        unicode: "U+1F1F1 U+1F1F8",
        image: "LS.svg",
        dial_code: "+266"
    },
    {
        name: "Botswana",
        code: "BW",
        emoji: "🇧🇼",
        unicode: "U+1F1E7 U+1F1FC",
        image: "BW.svg",
        dial_code: "+267"
    },
    {
        name: "Eswatini",
        code: "SZ",
        emoji: "🇸🇿",
        unicode: "U+1F1F8 U+1F1FF",
        image: "SZ.svg",
        dial_code: "+268"
    },
    {
        name: "Comoros",
        code: "KM",
        emoji: "🇰🇲",
        unicode: "U+1F1F0 U+1F1F2",
        image: "KM.svg",
        dial_code: "+269"
    },
    {
        name: "St. Helena",
        code: "SH",
        emoji: "🇸🇭",
        unicode: "U+1F1F8 U+1F1ED",
        image: "SH.svg",
        dial_code: "+290"
    },
    {
        name: "Eritrea",
        code: "ER",
        emoji: "🇪🇷",
        unicode: "U+1F1EA U+1F1F7",
        image: "ER.svg",
        dial_code: "+291"
    },
    {
        name: "Aruba",
        code: "AW",
        emoji: "🇦🇼",
        unicode: "U+1F1E6 U+1F1FC",
        image: "AW.svg",
        dial_code: "+297"
    },
    {
        name: "Faroe Islands",
        code: "FO",
        emoji: "🇫🇴",
        unicode: "U+1F1EB U+1F1F4",
        image: "FO.svg",
        dial_code: "+298"
    },
    {
        name: "Greenland",
        code: "GL",
        emoji: "🇬🇱",
        unicode: "U+1F1EC U+1F1F1",
        image: "GL.svg",
        dial_code: "+299"
    },
    {
        name: "Cayman Islands",
        code: "KY",
        emoji: "🇰🇾",
        unicode: "U+1F1F0 U+1F1FE",
        image: "KY.svg",
        dial_code: "+345"
    },
    {
        name: "Gibraltar",
        code: "GI",
        emoji: "🇬🇮",
        unicode: "U+1F1EC U+1F1EE",
        image: "GI.svg",
        dial_code: "+350"
    },
    {
        name: "Portugal",
        code: "PT",
        emoji: "🇵🇹",
        unicode: "U+1F1F5 U+1F1F9",
        image: "PT.svg",
        dial_code: "+351"
    },
    {
        name: "Luxembourg",
        code: "LU",
        emoji: "🇱🇺",
        unicode: "U+1F1F1 U+1F1FA",
        image: "LU.svg",
        dial_code: "+352"
    },
    {
        name: "Ireland",
        code: "IE",
        emoji: "🇮🇪",
        unicode: "U+1F1EE U+1F1EA",
        image: "IE.svg",
        dial_code: "+353"
    },
    {
        name: "Iceland",
        code: "IS",
        emoji: "🇮🇸",
        unicode: "U+1F1EE U+1F1F8",
        image: "IS.svg",
        dial_code: "+354"
    },
    {
        name: "Albania",
        code: "AL",
        emoji: "🇦🇱",
        unicode: "U+1F1E6 U+1F1F1",
        image: "AL.svg",
        dial_code: "+355"
    },
    {
        name: "Malta",
        code: "MT",
        emoji: "🇲🇹",
        unicode: "U+1F1F2 U+1F1F9",
        image: "MT.svg",
        dial_code: "+356"
    },
    {
        name: "Cyprus",
        code: "CY",
        emoji: "🇨🇾",
        unicode: "U+1F1E8 U+1F1FE",
        image: "CY.svg",
        dial_code: "+357"
    },
    {
        name: "Finland",
        code: "FI",
        emoji: "🇫🇮",
        unicode: "U+1F1EB U+1F1EE",
        image: "FI.svg",
        dial_code: "+358"
    },
    {
        name: "Åland Islands",
        code: "AX",
        emoji: "🇦🇽",
        unicode: "U+1F1E6 U+1F1FD",
        image: "AX.svg",
        dial_code: "+358"
    },
    {
        name: "Bulgaria",
        code: "BG",
        emoji: "🇧🇬",
        unicode: "U+1F1E7 U+1F1EC",
        image: "BG.svg",
        dial_code: "+359"
    },
    {
        name: "Lithuania",
        code: "LT",
        emoji: "🇱🇹",
        unicode: "U+1F1F1 U+1F1F9",
        image: "LT.svg",
        dial_code: "+370"
    },
    {
        name: "Latvia",
        code: "LV",
        emoji: "🇱🇻",
        unicode: "U+1F1F1 U+1F1FB",
        image: "LV.svg",
        dial_code: "+371"
    },
    {
        name: "Estonia",
        code: "EE",
        emoji: "🇪🇪",
        unicode: "U+1F1EA U+1F1EA",
        image: "EE.svg",
        dial_code: "+372"
    },
    {
        name: "Moldova",
        code: "MD",
        emoji: "🇲🇩",
        unicode: "U+1F1F2 U+1F1E9",
        image: "MD.svg",
        dial_code: "+373"
    },
    {
        name: "Armenia",
        code: "AM",
        emoji: "🇦🇲",
        unicode: "U+1F1E6 U+1F1F2",
        image: "AM.svg",
        dial_code: "+374"
    },
    {
        name: "Belarus",
        code: "BY",
        emoji: "🇧🇾",
        unicode: "U+1F1E7 U+1F1FE",
        image: "BY.svg",
        dial_code: "+375"
    },
    {
        name: "Andorra",
        code: "AD",
        emoji: "🇦🇩",
        unicode: "U+1F1E6 U+1F1E9",
        image: "AD.svg",
        dial_code: "+376"
    },
    {
        name: "Monaco",
        code: "MC",
        emoji: "🇲🇨",
        unicode: "U+1F1F2 U+1F1E8",
        image: "MC.svg",
        dial_code: "+377"
    },
    {
        name: "San Marino",
        code: "SM",
        emoji: "🇸🇲",
        unicode: "U+1F1F8 U+1F1F2",
        image: "SM.svg",
        dial_code: "+378"
    },
    {
        name: "Vatican City",
        code: "VA",
        emoji: "🇻🇦",
        unicode: "U+1F1FB U+1F1E6",
        image: "VA.svg",
        dial_code: "+379"
    },
    {
        name: "Ukraine",
        code: "UA",
        emoji: "🇺🇦",
        unicode: "U+1F1FA U+1F1E6",
        image: "UA.svg",
        dial_code: "+380"
    },
    {
        name: "Serbia",
        code: "RS",
        emoji: "🇷🇸",
        unicode: "U+1F1F7 U+1F1F8",
        image: "RS.svg",
        dial_code: "+381"
    },
    {
        name: "Montenegro",
        code: "ME",
        emoji: "🇲🇪",
        unicode: "U+1F1F2 U+1F1EA",
        image: "ME.svg",
        dial_code: "+382"
    },
    {
        name: "Croatia",
        code: "HR",
        emoji: "🇭🇷",
        unicode: "U+1F1ED U+1F1F7",
        image: "HR.svg",
        dial_code: "+385"
    },
    {
        name: "Slovenia",
        code: "SI",
        emoji: "🇸🇮",
        unicode: "U+1F1F8 U+1F1EE",
        image: "SI.svg",
        dial_code: "+386"
    },
    {
        name: "Bosnia & Herzegovina",
        code: "BA",
        emoji: "🇧🇦",
        unicode: "U+1F1E7 U+1F1E6",
        image: "BA.svg",
        dial_code: "+387"
    },
    {
        name: "North Macedonia",
        code: "MK",
        emoji: "🇲🇰",
        unicode: "U+1F1F2 U+1F1F0",
        image: "MK.svg",
        dial_code: "+389"
    },
    {
        name: "Czechia",
        code: "CZ",
        emoji: "🇨🇿",
        unicode: "U+1F1E8 U+1F1FF",
        image: "CZ.svg",
        dial_code: "+420"
    },
    {
        name: "Slovakia",
        code: "SK",
        emoji: "🇸🇰",
        unicode: "U+1F1F8 U+1F1F0",
        image: "SK.svg",
        dial_code: "+421"
    },
    {
        name: "Liechtenstein",
        code: "LI",
        emoji: "🇱🇮",
        unicode: "U+1F1F1 U+1F1EE",
        image: "LI.svg",
        dial_code: "+423"
    },
    {
        name: "South Georgia & South Sandwich Islands",
        code: "GS",
        emoji: "🇬🇸",
        unicode: "U+1F1EC U+1F1F8",
        image: "GS.svg",
        dial_code: "+500"
    },
    {
        name: "Falkland Islands",
        code: "FK",
        emoji: "🇫🇰",
        unicode: "U+1F1EB U+1F1F0",
        image: "FK.svg",
        dial_code: "+500"
    },
    {
        name: "Belize",
        code: "BZ",
        emoji: "🇧🇿",
        unicode: "U+1F1E7 U+1F1FF",
        image: "BZ.svg",
        dial_code: "+501"
    },
    {
        name: "Guatemala",
        code: "GT",
        emoji: "🇬🇹",
        unicode: "U+1F1EC U+1F1F9",
        image: "GT.svg",
        dial_code: "+502"
    },
    {
        name: "El Salvador",
        code: "SV",
        emoji: "🇸🇻",
        unicode: "U+1F1F8 U+1F1FB",
        image: "SV.svg",
        dial_code: "+503"
    },
    {
        name: "Honduras",
        code: "HN",
        emoji: "🇭🇳",
        unicode: "U+1F1ED U+1F1F3",
        image: "HN.svg",
        dial_code: "+504"
    },
    {
        name: "Nicaragua",
        code: "NI",
        emoji: "🇳🇮",
        unicode: "U+1F1F3 U+1F1EE",
        image: "NI.svg",
        dial_code: "+505"
    },
    {
        name: "Costa Rica",
        code: "CR",
        emoji: "🇨🇷",
        unicode: "U+1F1E8 U+1F1F7",
        image: "CR.svg",
        dial_code: "+506"
    },
    {
        name: "Panama",
        code: "PA",
        emoji: "🇵🇦",
        unicode: "U+1F1F5 U+1F1E6",
        image: "PA.svg",
        dial_code: "+507"
    },
    {
        name: "St. Pierre & Miquelon",
        code: "PM",
        emoji: "🇵🇲",
        unicode: "U+1F1F5 U+1F1F2",
        image: "PM.svg",
        dial_code: "+508"
    },
    {
        name: "Haiti",
        code: "HT",
        emoji: "🇭🇹",
        unicode: "U+1F1ED U+1F1F9",
        image: "HT.svg",
        dial_code: "+509"
    },
    {
        name: "St. Barthélemy",
        code: "BL",
        emoji: "🇧🇱",
        unicode: "U+1F1E7 U+1F1F1",
        image: "BL.svg",
        dial_code: "+590"
    },
    {
        name: "Guadeloupe",
        code: "GP",
        emoji: "🇬🇵",
        unicode: "U+1F1EC U+1F1F5",
        image: "GP.svg",
        dial_code: "+590"
    },
    {
        name: "St. Martin",
        code: "MF",
        emoji: "🇲🇫",
        unicode: "U+1F1F2 U+1F1EB",
        image: "MF.svg",
        dial_code: "+590"
    },
    {
        name: "Bolivia",
        code: "BO",
        emoji: "🇧🇴",
        unicode: "U+1F1E7 U+1F1F4",
        image: "BO.svg",
        dial_code: "+591"
    },
    {
        name: "Ecuador",
        code: "EC",
        emoji: "🇪🇨",
        unicode: "U+1F1EA U+1F1E8",
        image: "EC.svg",
        dial_code: "+593"
    },
    {
        name: "French Guiana",
        code: "GF",
        emoji: "🇬🇫",
        unicode: "U+1F1EC U+1F1EB",
        image: "GF.svg",
        dial_code: "+594"
    },
    {
        name: "Guyana",
        code: "GY",
        emoji: "🇬🇾",
        unicode: "U+1F1EC U+1F1FE",
        image: "GY.svg",
        dial_code: "+595"
    },
    {
        name: "Paraguay",
        code: "PY",
        emoji: "🇵🇾",
        unicode: "U+1F1F5 U+1F1FE",
        image: "PY.svg",
        dial_code: "+595"
    },
    {
        name: "Martinique",
        code: "MQ",
        emoji: "🇲🇶",
        unicode: "U+1F1F2 U+1F1F6",
        image: "MQ.svg",
        dial_code: "+596"
    },
    {
        name: "Suriname",
        code: "SR",
        emoji: "🇸🇷",
        unicode: "U+1F1F8 U+1F1F7",
        image: "SR.svg",
        dial_code: "+597"
    },
    {
        name: "Uruguay",
        code: "UY",
        emoji: "🇺🇾",
        unicode: "U+1F1FA U+1F1FE",
        image: "UY.svg",
        dial_code: "+598"
    },
    {
        name: "Timor-Leste",
        code: "TL",
        emoji: "🇹🇱",
        unicode: "U+1F1F9 U+1F1F1",
        image: "TL.svg",
        dial_code: "+670"
    },
    {
        name: "Norfolk Island",
        code: "NF",
        emoji: "🇳🇫",
        unicode: "U+1F1F3 U+1F1EB",
        image: "NF.svg",
        dial_code: "+672"
    },
    {
        name: "Antarctica",
        code: "AQ",
        emoji: "🇦🇶",
        unicode: "U+1F1E6 U+1F1F6",
        image: "AQ.svg",
        dial_code: "+672"
    },
    {
        name: "Brunei",
        code: "BN",
        emoji: "🇧🇳",
        unicode: "U+1F1E7 U+1F1F3",
        image: "BN.svg",
        dial_code: "+673"
    },
    {
        name: "Nauru",
        code: "NR",
        emoji: "🇳🇷",
        unicode: "U+1F1F3 U+1F1F7",
        image: "NR.svg",
        dial_code: "+674"
    },
    {
        name: "Papua New Guinea",
        code: "PG",
        emoji: "🇵🇬",
        unicode: "U+1F1F5 U+1F1EC",
        image: "PG.svg",
        dial_code: "+675"
    },
    {
        name: "Tonga",
        code: "TO",
        emoji: "🇹🇴",
        unicode: "U+1F1F9 U+1F1F4",
        image: "TO.svg",
        dial_code: "+676"
    },
    {
        name: "Solomon Islands",
        code: "SB",
        emoji: "🇸🇧",
        unicode: "U+1F1F8 U+1F1E7",
        image: "SB.svg",
        dial_code: "+677"
    },
    {
        name: "Vanuatu",
        code: "VU",
        emoji: "🇻🇺",
        unicode: "U+1F1FB U+1F1FA",
        image: "VU.svg",
        dial_code: "+678"
    },
    {
        name: "Fiji",
        code: "FJ",
        emoji: "🇫🇯",
        unicode: "U+1F1EB U+1F1EF",
        image: "FJ.svg",
        dial_code: "+679"
    },
    {
        name: "Palau",
        code: "PW",
        emoji: "🇵🇼",
        unicode: "U+1F1F5 U+1F1FC",
        image: "PW.svg",
        dial_code: "+680"
    },
    {
        name: "Wallis & Futuna",
        code: "WF",
        emoji: "🇼🇫",
        unicode: "U+1F1FC U+1F1EB",
        image: "WF.svg",
        dial_code: "+681"
    },
    {
        name: "Cook Islands",
        code: "CK",
        emoji: "🇨🇰",
        unicode: "U+1F1E8 U+1F1F0",
        image: "CK.svg",
        dial_code: "+682"
    },
    {
        name: "Niue",
        code: "NU",
        emoji: "🇳🇺",
        unicode: "U+1F1F3 U+1F1FA",
        image: "NU.svg",
        dial_code: "+683"
    },
    {
        name: "Samoa",
        code: "WS",
        emoji: "🇼🇸",
        unicode: "U+1F1FC U+1F1F8",
        image: "WS.svg",
        dial_code: "+685"
    },
    {
        name: "Kiribati",
        code: "KI",
        emoji: "🇰🇮",
        unicode: "U+1F1F0 U+1F1EE",
        image: "KI.svg",
        dial_code: "+686"
    },
    {
        name: "New Caledonia",
        code: "NC",
        emoji: "🇳🇨",
        unicode: "U+1F1F3 U+1F1E8",
        image: "NC.svg",
        dial_code: "+687"
    },
    {
        name: "Tuvalu",
        code: "TV",
        emoji: "🇹🇻",
        unicode: "U+1F1F9 U+1F1FB",
        image: "TV.svg",
        dial_code: "+688"
    },
    {
        name: "French Polynesia",
        code: "PF",
        emoji: "🇵🇫",
        unicode: "U+1F1F5 U+1F1EB",
        image: "PF.svg",
        dial_code: "+689"
    },
    {
        name: "Tokelau",
        code: "TK",
        emoji: "🇹🇰",
        unicode: "U+1F1F9 U+1F1F0",
        image: "TK.svg",
        dial_code: "+690"
    },
    {
        name: "Micronesia",
        code: "FM",
        emoji: "🇫🇲",
        unicode: "U+1F1EB U+1F1F2",
        image: "FM.svg",
        dial_code: "+691"
    },
    {
        name: "Marshall Islands",
        code: "MH",
        emoji: "🇲🇭",
        unicode: "U+1F1F2 U+1F1ED",
        image: "MH.svg",
        dial_code: "+692"
    },
    {
        name: "North Korea",
        code: "KP",
        emoji: "🇰🇵",
        unicode: "U+1F1F0 U+1F1F5",
        image: "KP.svg",
        dial_code: "+850"
    },
    {
        name: "Hong Kong SAR China",
        code: "HK",
        emoji: "🇭🇰",
        unicode: "U+1F1ED U+1F1F0",
        image: "HK.svg",
        dial_code: "+852"
    },
    {
        name: "Macao SAR China",
        code: "MO",
        emoji: "🇲🇴",
        unicode: "U+1F1F2 U+1F1F4",
        image: "MO.svg",
        dial_code: "+853"
    },
    {
        name: "Cambodia",
        code: "KH",
        emoji: "🇰🇭",
        unicode: "U+1F1F0 U+1F1ED",
        image: "KH.svg",
        dial_code: "+855"
    },
    {
        name: "Laos",
        code: "LA",
        emoji: "🇱🇦",
        unicode: "U+1F1F1 U+1F1E6",
        image: "LA.svg",
        dial_code: "+856"
    },
    {
        name: "Pitcairn Islands",
        code: "PN",
        emoji: "🇵🇳",
        unicode: "U+1F1F5 U+1F1F3",
        image: "PN.svg",
        dial_code: "+872"
    },
    {
        name: "Bangladesh",
        code: "BD",
        emoji: "🇧🇩",
        unicode: "U+1F1E7 U+1F1E9",
        image: "BD.svg",
        dial_code: "+880"
    },
    {
        name: "Taiwan",
        code: "TW",
        emoji: "🇹🇼",
        unicode: "U+1F1F9 U+1F1FC",
        image: "TW.svg",
        dial_code: "+886"
    },
    {
        name: "Maldives",
        code: "MV",
        emoji: "🇲🇻",
        unicode: "U+1F1F2 U+1F1FB",
        image: "MV.svg",
        dial_code: "+960"
    },
    {
        name: "Lebanon",
        code: "LB",
        emoji: "🇱🇧",
        unicode: "U+1F1F1 U+1F1E7",
        image: "LB.svg",
        dial_code: "+961"
    },
    {
        name: "Jordan",
        code: "JO",
        emoji: "🇯🇴",
        unicode: "U+1F1EF U+1F1F4",
        image: "JO.svg",
        dial_code: "+962"
    },
    {
        name: "Syria",
        code: "SY",
        emoji: "🇸🇾",
        unicode: "U+1F1F8 U+1F1FE",
        image: "SY.svg",
        dial_code: "+963"
    },
    {
        name: "Iraq",
        code: "IQ",
        emoji: "🇮🇶",
        unicode: "U+1F1EE U+1F1F6",
        image: "IQ.svg",
        dial_code: "+964"
    },
    {
        name: "Kuwait",
        code: "KW",
        emoji: "🇰🇼",
        unicode: "U+1F1F0 U+1F1FC",
        image: "KW.svg",
        dial_code: "+965"
    },
    {
        name: "Saudi Arabia",
        code: "SA",
        emoji: "🇸🇦",
        unicode: "U+1F1F8 U+1F1E6",
        image: "SA.svg",
        dial_code: "+966"
    },
    {
        name: "Yemen",
        code: "YE",
        emoji: "🇾🇪",
        unicode: "U+1F1FE U+1F1EA",
        image: "YE.svg",
        dial_code: "+967"
    },
    {
        name: "Oman",
        code: "OM",
        emoji: "🇴🇲",
        unicode: "U+1F1F4 U+1F1F2",
        image: "OM.svg",
        dial_code: "+968"
    },
    {
        name: "Palestinian Territories",
        code: "PS",
        emoji: "🇵🇸",
        unicode: "U+1F1F5 U+1F1F8",
        image: "PS.svg",
        dial_code: "+970"
    },
    {
        name: "United Arab Emirates",
        code: "AE",
        emoji: "🇦🇪",
        unicode: "U+1F1E6 U+1F1EA",
        image: "AE.svg",
        dial_code: "+971"
    },
    {
        name: "Israel",
        code: "IL",
        emoji: "🇮🇱",
        unicode: "U+1F1EE U+1F1F1",
        image: "IL.svg",
        dial_code: "+972"
    },
    {
        name: "Bahrain",
        code: "BH",
        emoji: "🇧🇭",
        unicode: "U+1F1E7 U+1F1ED",
        image: "BH.svg",
        dial_code: "+973"
    },
    {
        name: "Qatar",
        code: "QA",
        emoji: "🇶🇦",
        unicode: "U+1F1F6 U+1F1E6",
        image: "QA.svg",
        dial_code: "+974"
    },
    {
        name: "Bhutan",
        code: "BT",
        emoji: "🇧🇹",
        unicode: "U+1F1E7 U+1F1F9",
        image: "BT.svg",
        dial_code: "+975"
    },
    {
        name: "Mongolia",
        code: "MN",
        emoji: "🇲🇳",
        unicode: "U+1F1F2 U+1F1F3",
        image: "MN.svg",
        dial_code: "+976"
    },
    {
        name: "Nepal",
        code: "NP",
        emoji: "🇳🇵",
        unicode: "U+1F1F3 U+1F1F5",
        image: "NP.svg",
        dial_code: "+977"
    },
    {
        name: "Tajikistan",
        code: "TJ",
        emoji: "🇹🇯",
        unicode: "U+1F1F9 U+1F1EF",
        image: "TJ.svg",
        dial_code: "+992"
    },
    {
        name: "Turkmenistan",
        code: "TM",
        emoji: "🇹🇲",
        unicode: "U+1F1F9 U+1F1F2",
        image: "TM.svg",
        dial_code: "+993"
    },
    {
        name: "Azerbaijan",
        code: "AZ",
        emoji: "🇦🇿",
        unicode: "U+1F1E6 U+1F1FF",
        image: "AZ.svg",
        dial_code: "+994"
    },
    {
        name: "Georgia",
        code: "GE",
        emoji: "🇬🇪",
        unicode: "U+1F1EC U+1F1EA",
        image: "GE.svg",
        dial_code: "+995"
    },
    {
        name: "Kyrgyzstan",
        code: "KG",
        emoji: "🇰🇬",
        unicode: "U+1F1F0 U+1F1EC",
        image: "KG.svg",
        dial_code: "+996"
    },
    {
        name: "Uzbekistan",
        code: "UZ",
        emoji: "🇺🇿",
        unicode: "U+1F1FA U+1F1FF",
        image: "UZ.svg",
        dial_code: "+998"
    },
    {
        name: "Bahamas",
        code: "BS",
        emoji: "🇧🇸",
        unicode: "U+1F1E7 U+1F1F8",
        image: "BS.svg",
        dial_code: "+1242"
    },
    {
        name: "Barbados",
        code: "BB",
        emoji: "🇧🇧",
        unicode: "U+1F1E7 U+1F1E7",
        image: "BB.svg",
        dial_code: "+1246"
    },
    {
        name: "Anguilla",
        code: "AI",
        emoji: "🇦🇮",
        unicode: "U+1F1E6 U+1F1EE",
        image: "AI.svg",
        dial_code: "+1264"
    },
    {
        name: "Antigua & Barbuda",
        code: "AG",
        emoji: "🇦🇬",
        unicode: "U+1F1E6 U+1F1EC",
        image: "AG.svg",
        dial_code: "+1268"
    },
    {
        name: "British Virgin Islands",
        code: "VG",
        emoji: "🇻🇬",
        unicode: "U+1F1FB U+1F1EC",
        image: "VG.svg",
        dial_code: "+1284"
    },
    {
        name: "U.S. Virgin Islands",
        code: "VI",
        emoji: "🇻🇮",
        unicode: "U+1F1FB U+1F1EE",
        image: "VI.svg",
        dial_code: "+1340"
    },
    {
        name: "Bermuda",
        code: "BM",
        emoji: "🇧🇲",
        unicode: "U+1F1E7 U+1F1F2",
        image: "BM.svg",
        dial_code: "+1441"
    },
    {
        name: "Grenada",
        code: "GD",
        emoji: "🇬🇩",
        unicode: "U+1F1EC U+1F1E9",
        image: "GD.svg",
        dial_code: "+1473"
    },
    {
        name: "Turks & Caicos Islands",
        code: "TC",
        emoji: "🇹🇨",
        unicode: "U+1F1F9 U+1F1E8",
        image: "TC.svg",
        dial_code: "+1649"
    },
    {
        name: "Montserrat",
        code: "MS",
        emoji: "🇲🇸",
        unicode: "U+1F1F2 U+1F1F8",
        image: "MS.svg",
        dial_code: "+1664"
    },
    {
        name: "Northern Mariana Islands",
        code: "MP",
        emoji: "🇲🇵",
        unicode: "U+1F1F2 U+1F1F5",
        image: "MP.svg",
        dial_code: "+1670"
    },
    {
        name: "Guam",
        code: "GU",
        emoji: "🇬🇺",
        unicode: "U+1F1EC U+1F1FA",
        image: "GU.svg",
        dial_code: "+1671"
    },
    {
        name: "American Samoa",
        code: "AS",
        emoji: "🇦🇸",
        unicode: "U+1F1E6 U+1F1F8",
        image: "AS.svg",
        dial_code: "+1684"
    },
    {
        name: "St. Lucia",
        code: "LC",
        emoji: "🇱🇨",
        unicode: "U+1F1F1 U+1F1E8",
        image: "LC.svg",
        dial_code: "+1758"
    },
    {
        name: "Dominica",
        code: "DM",
        emoji: "🇩🇲",
        unicode: "U+1F1E9 U+1F1F2",
        image: "DM.svg",
        dial_code: "+1767"
    },
    {
        name: "St. Vincent & Grenadines",
        code: "VC",
        emoji: "🇻🇨",
        unicode: "U+1F1FB U+1F1E8",
        image: "VC.svg",
        dial_code: "+1784"
    },
    {
        name: "Dominican Republic",
        code: "DO",
        emoji: "🇩🇴",
        unicode: "U+1F1E9 U+1F1F4",
        image: "DO.svg",
        dial_code: "+1849"
    },
    {
        name: "Trinidad & Tobago",
        code: "TT",
        emoji: "🇹🇹",
        unicode: "U+1F1F9 U+1F1F9",
        image: "TT.svg",
        dial_code: "+1868"
    },
    {
        name: "St. Kitts & Nevis",
        code: "KN",
        emoji: "🇰🇳",
        unicode: "U+1F1F0 U+1F1F3",
        image: "KN.svg",
        dial_code: "+1869"
    },
    {
        name: "Jamaica",
        code: "JM",
        emoji: "🇯🇲",
        unicode: "U+1F1EF U+1F1F2",
        image: "JM.svg",
        dial_code: "+1876"
    },
    {
        name: "Puerto Rico",
        code: "PR",
        emoji: "🇵🇷",
        unicode: "U+1F1F5 U+1F1F7",
        image: "PR.svg",
        dial_code: "+1939"
    }
];
}),
"[project]/src/components/input/Main.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/data.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Main = ({ type = "text", placeholder = "", valueSelect = "", onChangeSelect, ...props })=>{
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])((lenis)=>{});
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listLangs = [
        {
            lang: "en",
            lada: "+1",
            flag: "/images/ic_us.svg"
        },
        {
            lang: "es",
            lada: "+52",
            flag: "/images/ic_mx.svg"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            document.body.setAttribute("data-lenis-prevent", "true");
        } else {
            document.body.removeAttribute("data-lenis-prevent");
        }
    }, [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm absolute top-0 -translate-y-1/2 left-3 bg-white px-0.5 pointer-events-none font-calibri-regular",
                children: props?.label ? t(props.label) : ""
            }, void 0, false, {
                fileName: "[project]/src/components/input/Main.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                onClick: ()=>type === "tel" && setOpen(false),
                type: type,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-10 border border-c_golden rounded px-3 font-calibri-regular", type === "tel" && "pl-28"),
                placeholder: placeholder ? t(placeholder) : "",
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/input/Main.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            type === "tel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setOpen(true),
                        className: " absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-100 py-0.5 text-base mt-0.5 rounded font-calibri-regular flex justify-center gap-3 w-full max-w-24 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                alt: "",
                                src: `/images/flags/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listPhoneCodes"].find((l)=>l.dial_code === valueSelect)?.code.toLocaleLowerCase()}.svg`,
                                width: 640,
                                height: 480,
                                className: "w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/input/Main.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-calibri-regular text-c_dark_blue text-base",
                                children: valueSelect
                            }, void 0, false, {
                                fileName: "[project]/src/components/input/Main.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/input/Main.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-10 left-2 z-10 w-full max-w-24 h-28 overflow-x-hidden overflow-y-scroll",
                        children: open && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listPhoneCodes"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onChangeSelect(item.dial_code);
                                    setOpen(false);
                                },
                                type: "button",
                                className: "flex justify-between items-center cursor-pointer px-2 bg-neutral-100 hover:bg-neutral-200 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        alt: "",
                                        src: `/images/flags/${item.code.toLocaleLowerCase()}.svg`,
                                        width: 640,
                                        height: 480,
                                        className: "w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/input/Main.jsx",
                                        lineNumber: 85,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-calibri-regular text-c_dark_blue text-center text-base w-9",
                                        children: item.dial_code
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/input/Main.jsx",
                                        lineNumber: 86,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, `langs-${index}`, true, {
                                fileName: "[project]/src/components/input/Main.jsx",
                                lineNumber: 76,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/input/Main.jsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/input/Main.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/input/Main.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Main;
}),
"[project]/src/lib/toast.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorToast",
    ()=>ErrorToast,
    "SuccessToast",
    ()=>SuccessToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
;
const SuccessToast = (message, duration = 5000)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(message, {
        duration: duration,
        style: {
            borderRadius: "10px",
            background: "#18AE19",
            color: "#fff"
        }
    });
};
const ErrorToast = (message, duration = 5000)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(message, {
        duration: duration,
        style: {
            borderRadius: "10px",
            background: "#dc2626",
            color: "#fff"
        }
    });
};
}),
"[project]/src/api/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "post",
    ()=>post,
    "urlApi",
    ()=>urlApi
]);
const configuredApiBaseUrl = ("TURBOPACK compile-time value", "https://asabackend.ialumbra-test.com/nservices/transactional/mailing/") || "https://api.example.com/services/transactional/mailing/";
const urlApi = configuredApiBaseUrl.endsWith("/") ? configuredApiBaseUrl : `${configuredApiBaseUrl}/`;
const post = async (url, obj)=>{
    let data = null;
    let flag = false;
    let status = 200;
    let message = "";
    const request = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    };
    await fetch(url, request).then(async (res)=>{
        status = res.status;
        if (res.status === 200 || res.status === 202) {
            flag = true;
        }
        return res.json();
    }).then((res)=>{
        if (res.message) {
            message = res.message;
        }
        if (flag === true) {
            data = res;
        }
    }).catch(()=>{
        flag = false;
        status = 400;
    });
    return {
        data,
        status,
        message
    };
};
}),
"[project]/src/api/quote/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "postQuote",
    ()=>postQuote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.js [app-ssr] (ecmascript)");
;
const postQuote = async (data)=>{
    const url = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlApi"] + "v3/send?tpl=quote";
    const obj = data;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(url, obj);
};
}),
"[project]/src/views/quote/components/Form.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2d$date$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/input-date/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$container$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/container/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2d$area$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/text-area/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkbox$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/checkbox/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spinner$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/spinner/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$select$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/select/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/input/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/texts/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/toast.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/Main.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$quote$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/quote/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Form = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const lang = localStorage.getItem("lang-avionica") || "en";
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])("");
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const step = Number(searchParams.get("step")) || 1;
    const { date, setDate, from, setFrom, to, setTo, passengers, otherFrom, setOtherFrom, toFrom, setToFrom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMainContext"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [company, setCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(lang === "es" ? "+52" : "+1");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleChangeStep = (step)=>{
        router.push(`?step=${step}`);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const recaptchaKey = ("TURBOPACK compile-time value", "6LeoRwEtAAAAACsJV7U5JVfC5REzAb-TfhzuMFxY");
        if (!recaptchaKey || typeof grecaptcha === "undefined") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorToast"])(t("message_quote_sent_error"));
            setLoading(false);
            return;
        }
        const token = await grecaptcha.execute(recaptchaKey, {
            action: "contact_form"
        });
        const obj = {
            captcha: token,
            lang,
            name: `${name.trim()} ${lastName.trim()}`,
            phone: `${company} ${phone.trim()}`,
            email: email.trim(),
            passengers: passengers,
            from: from === "OTHER" ? otherFrom : from,
            to: to === "OTHER" ? toFrom : to,
            date: date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            }),
            message: message.trim()
        };
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$quote$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postQuote"])(obj);
        if (response.status === 202 || response.status === 200) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SuccessToast"])(t("message_quote_sent_success"));
            setName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setCompany(lang === "es" ? "+52" : "+1");
            setMessage("");
            handleChangeStep(3);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorToast"])(t("message_quote_sent_error"));
        }
        setLoading(false);
    };
    const handleChangeFirstStep = (e)=>{
        e.preventDefault();
        handleChangeStep(2);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$container$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleChangeFirstStep,
                            className: "ring-neutral-300 ring-2 rounded-lg px-5 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$select$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    label: "label_from",
                                                    value: from,
                                                    onChange: (e)=>setFrom(e.target.value),
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listLocations"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: item
                                                            }, `from-${index}`, false, {
                                                                fileName: "[project]/src/views/quote/components/Form.jsx",
                                                                lineNumber: 112,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "OTHER",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                value: "label_other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/quote/components/Form.jsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                from === "OTHER" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: otherFrom,
                                                    onChange: (e)=>setOtherFrom(e.target.value),
                                                    placeholder: "label_white_your_origin_here",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$select$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    label: "label_to",
                                                    value: to,
                                                    onChange: (e)=>setTo(e.target.value),
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listLocations"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: item
                                                            }, `from-${index}`, false, {
                                                                fileName: "[project]/src/views/quote/components/Form.jsx",
                                                                lineNumber: 125,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "OTHER",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                value: "label_other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/quote/components/Form.jsx",
                                                                lineNumber: 128,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                to === "OTHER" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: toFrom,
                                                    onChange: (e)=>setToFrom(e.target.value),
                                                    placeholder: "label_write_your_destiny_here",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2d$date$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: "label_date",
                                        date: date,
                                        setDate: setDate
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quote/components/Form.jsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "h-9 px-8 min-w-32 bg-c_golden text-white rounded-full cursor-pointer font-calibri-bold",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            value: "label_continue"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quote/components/Form.jsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/quote/components/Form.jsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "ring-neutral-300 ring-2 rounded-lg p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            id: "name",
                                            label: "label_first_name",
                                            placeholder: "label_write_name",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            id: "lastName",
                                            label: "label_last_name",
                                            placeholder: "label_write_last_name",
                                            value: lastName,
                                            onChange: (e)=>setLastName(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 lg:gap-10 mt-4 flex-wrap md:flex-nowrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            id: "email",
                                            label: "label_email",
                                            type: "email",
                                            placeholder: "label_email_sample",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$input$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            id: "phone",
                                            label: "label_phone_number",
                                            type: "tel",
                                            placeholder: "label_10_digits",
                                            value: phone,
                                            onChange: (e)=>setPhone(e.target.value),
                                            valueSelect: company,
                                            onChangeSelect: (e)=>setCompany(e)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$text$2d$area$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    label: "label_message",
                                    placeholder: "label_write_message",
                                    value: message,
                                    onChange: (e)=>setMessage(e.target.value),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$checkbox$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-calibri-regular",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            value: "label_accept_privacy_policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/politicas-de-privacidad",
                                                            className: "font-calibri-bold",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                value: "label_privacy_policy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/quote/components/Form.jsx",
                                                                lineNumber: 205,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                                            lineNumber: 204,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "h-9 px-8 min-w-32 bg-c_golden text-white rounded-full cursor-pointer font-calibri-bold",
                                            children: [
                                                !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    value: "label_continue"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$spinner$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 31
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/quote/components/Form.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ring-neutral-300 ring-2 rounded-lg px-5 py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-3xl font-calibri-bold mt-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        value: "label_quote_submitted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quote/components/Form.jsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-md text-center font-calibri-regular text-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            value: "label_message_quote_submitted"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quote/components/Form.jsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "h-9 px-8 min-w-32 bg-c_golden text-white rounded-full cursor-pointer uppercase flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-calibri-bold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$texts$2f$Main$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                value: "label_back_home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/quote/components/Form.jsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/quote/components/Form.jsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/quote/components/Form.jsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/quote/components/Form.jsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/quote/components/Form.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/quote/components/Form.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/views/quote/components/Form.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 md:h-[650px] xl:h-72"
            }, void 0, false, {
                fileName: "[project]/src/views/quote/components/Form.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/quote/components/Form.jsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Form;
}),
];

//# sourceMappingURL=src_71e544a8._.js.map