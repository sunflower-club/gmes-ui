module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_table_canvas_vue__ = __webpack_require__(31);

var canvas = __WEBPACK_IMPORTED_MODULE_0__src_table_canvas_vue__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = (canvas);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_canvas_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_c04a53be_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_table_canvas_vue__ = __webpack_require__(32);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_script_index_0_table_canvas_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_2_vue_loader_lib_template_compiler_index_id_data_v_c04a53be_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_13_7_2_vue_loader_lib_selector_type_template_index_0_table_canvas_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{style:({'border-top':'1px solid' + _vm.borderc,'border-left':'1px solid'+_vm.borderc}),attrs:{"id":"a_canvas","height":_vm.canvasHeight,"width":_vm.canvasWidth},on:{"click":_vm.coordinate}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'TableCanvas',
    data: function data() {
        return {
            a_canvas: null,
            context: null,
            imgObj: null,
            cell_width: 0,
            cell_height: 0
        };
    },

    props: {
        canvasHeight: {
            type: Number,
            default: 400
        },
        canvasWidth: {
            type: Number,
            default: 400
        },
        grid_cols: {
            type: Number,
            default: 10
        },
        grid_rows: {
            type: Number,
            default: 10
        },
        borderc: {
            type: String,
            default: "#000"
        },
        selectc: {
            type: String,
            default: '#000'
        },
        canvasImg: {
            type: String,
            default: ''
        }
    },
    methods: {
        imgload: function imgload() {
            var vm = this;
            var context = this.context,
                drawtable = this.drawtable,
                canvasHeight = this.canvasHeight,
                canvasWidth = this.canvasWidth,
                canvasImg = this.canvasImg;

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            this.imgObj = new Image();
            this.imgObj.src = canvasImg;
            this.imgObj.onload = function () {
                vm.drawtable(this);
            };
        },
        coordinate: function coordinate(e) {
            var cell_width = this.cell_width,
                cell_height = this.cell_height,
                context = this.context,
                drawtable = this.drawtable,
                imgObj = this.imgObj,
                canvasHeight = this.canvasHeight,
                canvasWidth = this.canvasWidth;
            var layerX = e.layerX,
                layerY = e.layerY; //获取canvas中的点击位置坐标

            var x_line = Math.floor(layerX / cell_width);
            var y_line = Math.floor(layerY / cell_height);
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            drawtable(imgObj);
            context.fillStyle = this.selectc;
            context.fillRect(x_line * cell_width, y_line * cell_height, cell_width, cell_height);
            this.$emit('click', [x_line, y_line], e);
        },
        drawtable: function drawtable(img) {
            var a_canvas = this.a_canvas,
                imgObj = this.imgObj,
                context = this.context,
                canvasHeight = this.canvasHeight,
                canvasWidth = this.canvasWidth,
                grid_cols = this.grid_cols,
                grid_rows = this.grid_rows;


            if (imgObj.width >= imgObj.height) {
                var imgH = imgObj.height * canvasHeight / imgObj.width;
                var top = (canvasHeight - imgH) / 2;
                context.drawImage(imgObj, 0, top, canvasWidth, imgH);
            } else {
                var imgW = imgObj.width * canvasWidth / imgObj.height;
                var left = (canvasWidth - imgW) / 2;
                context.drawImage(imgObj, left, 0, imgW, canvasHeight);
            }
            context.fillStyle = "rgba(255,255,255,0)";
            context.fillRect(0, 0, a_canvas.width, a_canvas.height);
            // 描绘边框
            this.cell_height = a_canvas.height / grid_rows;
            this.cell_width = a_canvas.width / grid_cols;
            context.lineWidth = 1;
            context.strokeStyle = this.borderc;
            // 结束边框描绘
            context.beginPath();
            // 准备画横线
            for (var col = 0; col <= grid_cols; col++) {
                var x = Math.ceil(col * this.cell_width);
                context.moveTo(x - 0.5, 0);
                context.lineTo(x - 0.5, a_canvas.height);
            }
            // 准备画竖线
            for (var row = 0; row <= grid_rows; row++) {
                var y = Math.ceil(row * this.cell_height);
                context.moveTo(0, y - 0.5);
                context.lineTo(a_canvas.width, y - 0.5);
            }
            //由于画布划线是画在 像素中线 所以当linewidth = 奇数时 会导致 左右都0.5 由于浏览器像素最小为1 导致0.5被自动补全。
            //当坐标点（8.5--11.5）+10*n;有效
            context.stroke();
        }
    },
    mounted: function mounted() {
        this.a_canvas = document.getElementById('a_canvas');
        this.context = this.a_canvas.getContext("2d");
        this.imgload();
    },

    watch: {
        canvasImg: function canvasImg(val, oldval) {
            if (val != oldval) {
                this.imgload();
            }
        }
    }
    // canvasHeight="400" 画布高度
    // canvasWidth="400" 画布宽度
    // grid_cols="10"  画布表格行数
    // grid_rows="10" 画布表格列数
    // borderc="#ff5000" 画布表格线颜色
    // selectc="#ff5000" 画布选择块颜色
    // canvasImg="img" 画布背景图

});

/***/ })

/******/ });