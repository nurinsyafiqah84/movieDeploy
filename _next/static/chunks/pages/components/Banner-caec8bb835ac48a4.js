(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{735:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Banner",function(){return __webpack_require__(3024)}])},8573:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);let SearchButton=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{...props,className:"h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-green bg-gradient-to-r from-lightGreen to-lightBlue hover:text-darkBlue inline-flex justify-center items-center",children:[" ","Search"]});__webpack_exports__.default=SearchButton},5203:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);let SearchInput=param=>{let{forwardRef,props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{...props,type:"text",ref:forwardRef,className:"w-full h-11 rounded-[8rem] outline-none px-5 py-3 placeholder:text-slate-500 text-[1.1rem] text-black/50",placeholder:"Search for a movie, tv show, person......"})};__webpack_exports__.default=SearchInput},3024:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_baseUI_Input_SearchInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5203),_baseUI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8573);let Banner=()=>{let searchInputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),handleSearch=()=>{alert("You typed ".concat(searchInputRef.current.value))},handleKeyDown=event=>{"Enter"===event.key&&handleSearch()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"h-[300px] bg-banner bg-cover py-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex flex-col gap-10 px-10 py-10",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"font-extrabold text-5xl",children:"Welcome."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{className:"font-semibold text-[2rem] leading-1",children:"Millions of movies, TV shows and people to discover. Explore now."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"relative ",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_baseUI_Input_SearchInput__WEBPACK_IMPORTED_MODULE_2__.default,{ref:searchInputRef,onKeyDown:handleKeyDown}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute top-0 right-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_baseUI_Button_SearchButton__WEBPACK_IMPORTED_MODULE_3__.default,{onClick:handleSearch})})]})]})})};__webpack_exports__.default=Banner}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=735)}),_N_E=__webpack_require__.O()}]);