"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[326],{

/***/ 1326:
/*!****************************************************!*\
  !*** ./apps/demo/src/app/pages/functions/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 2895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ 5706);
var _FunctionsComponent;



const code = `import {
    addFunctions,
    editFunctions,
    getFunctions,
    removeFunctions,
    setActiveProject,
    saveActiveProject,
} from 'ng-morph';

setActiveProject(createProject(new NgMorphTree(), '/', ['**/*.ts'));

addFunctions('some/**/**.ts', {
    isExported: true,
    name: 'b',
    statements: "return 'b'",
});

const declarations = getFunctions('some/path/**.ts');

editFunctions(functions, () => ({
    isExported: true,
    name: 'b',
    statements: "return 'b'",
}));

removeFunctions(declarations);

saveActiveProject();
`;
class FunctionsComponent {
  constructor() {
    this.code = code;
  }
}
_FunctionsComponent = FunctionsComponent;
_FunctionsComponent.ɵfac = function FunctionsComponent_Factory(t) {
  return new (t || _FunctionsComponent)();
};
_FunctionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _FunctionsComponent,
  selectors: [["ng-component"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 1,
  consts: [["header", "Functions"], ["filename", "migration.ts", 3, "code"]],
  template: function FunctionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You can create, get, edit and remove functions in your files with declarative descriptions and conditions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-doc-code", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code);
    }
  },
  dependencies: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_1__.TuiAddonDocModule, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__.TuiDocCodeComponent, _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__.TuiDocPageComponent],
  encapsulation: 2,
  changeDetection: 0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FunctionsComponent);

/***/ })

}]);
//# sourceMappingURL=326.js.map