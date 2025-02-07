(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/Dj":
/*!******************************************************!*\
  !*** ./src/app/experiencia/experiencia.component.ts ***!
  \******************************************************/
/*! exports provided: ExperienciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function() { return ExperienciaComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function ExperienciaComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.languageTexts.obligatorio, " ");
} }
function ExperienciaComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.languageTexts.obligatorio, " ");
} }
function ExperienciaComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.languageTexts.obligatorio, " ");
} }
function ExperienciaComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.languageTexts.obligatorio, " ");
} }
function ExperienciaComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12.languageTexts.obligatorio, " ");
} }
function ExperienciaComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r13.languageTexts.empresa, " ");
} }
function ExperienciaComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r27.empresa, " ");
} }
function ExperienciaComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r15.languageTexts.puesto, " ");
} }
function ExperienciaComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r28.puesto, " ");
} }
function ExperienciaComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.languageTexts.fechaInicio, " ");
} }
function ExperienciaComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r29.fechaIni, "dd-MM-yyyy"), " ");
} }
function ExperienciaComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r19.languageTexts.fechaFin, " ");
} }
function ExperienciaComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, element_r30.fechaFin, "dd-MM-yyyy"), " ");
} }
function ExperienciaComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r21.languageTexts.descripcion, " ");
} }
function ExperienciaComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r31.descripcion, " ");
} }
function ExperienciaComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.languageTexts.eliminar, " ");
} }
function ExperienciaComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExperienciaComponent_td_68_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.eliminarElemento(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExperienciaComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 52);
} }
function ExperienciaComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 53);
} }
class ExperienciaComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.puesto = '';
        this.empresa = '';
        this.descripcion = '';
        this.fechaInicio = null;
        this.fechaFin = null;
        this.actividades = [];
        this.funciones = [];
        this.selectedLanguage = 'es';
        this.fechaActual = new Date();
        this.displayedColumns = ['empresa', 'puesto', 'fechaIni', 'fechaFin', 'descripcion', 'eliminar']; //'actividades', 'funciones',
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.visibleFun = true;
        this.selectableFun = true;
        this.removableFun = true;
        this.addOnBlurFun = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.logros = [];
        this.funcionesArray = [];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
    }
    guardarExperiencia(form) {
        if (this.puesto && this.empresa && this.fechaInicio && this.fechaFin && this.descripcion) { // && this.logros.length !== 0 && this.funcionesArray.length !== 0
            const nuevaExperiencia = {
                puesto: this.puesto,
                empresa: this.empresa,
                fechaIni: this.fechaInicio,
                fechaFin: this.fechaFin,
                actividades: this.actividades,
                funciones: this.funciones,
                descripcion: this.descripcion
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.dataFormularioService.guardarExperiencias(this.dataSource.data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'success',
                title: this.languageTexts.alert,
                text: this.languageTexts.agregarExp
            });
            this.resetFormulario(form);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: 'Error',
                text: this.languageTexts.validar,
            });
        }
    }
    resetFormulario(form) {
        this.puesto = '';
        this.empresa = '';
        this.fechaInicio = null;
        this.fechaFin = null;
        this.actividades = [];
        this.funciones = [];
        this.logros = [];
        this.funcionesArray = [];
        form.resetForm();
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarExperiencias(this.dataSource.data);
    }
    setFechaActual() {
        this.fechaFin = this.fechaActual;
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.logros.push({ nombreLogro: value.trim() });
            this.actividades.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    }
    remove(logro) {
        const index = this.logros.indexOf(logro);
        if (index >= 0) {
            this.logros.splice(index, 1);
            this.actividades.splice(index, 1);
        }
    }
    addFunciones(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.funcionesArray.push({ nombreFuncion: value.trim() });
            this.funciones.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    }
    removeFunciones(funcion) {
        const index = this.funcionesArray.indexOf(funcion);
        if (index >= 0) {
            this.funcionesArray.splice(index, 1);
            this.funciones.splice(index, 1);
        }
    }
}
ExperienciaComponent.ɵfac = function ExperienciaComponent_Factory(t) { return new (t || ExperienciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_4__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"])); };
ExperienciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExperienciaComponent, selectors: [["app-experiencia"]], decls: 71, vars: 28, consts: [["id", "experiencia", 1, "formulario-container"], [1, "titulo"], ["autocomplete", "on", 1, "formulario", 3, "ngSubmit"], ["experienciaForm", "ngForm"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "empresa", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["empresaModel", "ngModel"], [4, "ngIf"], ["matInput", "", "name", "puesto", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["puestoModel", "ngModel"], ["matInput", "", "name", "fechaIni", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["fechaInicioModel", "ngModel"], ["matSuffix", "", 3, "for"], ["pickerInicio", ""], ["matInput", "", "name", "fechaFin", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["fechaFinModel", "ngModel"], ["pickerFin", ""], [2, "padding-right", "5px"], ["mat-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "columna-completa"], ["matInput", "", "name", "descripcion", "required", "", "rows", "6", 3, "placeholder", "ngModel", "ngModelChange"], ["descripcionModel", "ngModel"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "boton"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "empresa"], ["mat-header-cell", "", "style", "width: 150px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 150px;", 4, "matCellDef"], ["matColumnDef", "puesto"], ["mat-header-cell", "", "style", "width: 100px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 100px;", 4, "matCellDef"], ["matColumnDef", "fechaIni"], ["matColumnDef", "fechaFin"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", "style", "width: 200px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 200px;", 4, "matCellDef"], ["matColumnDef", "eliminar"], ["mat-header-cell", "", "style", "width: 40px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 40px;", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 2, "width", "150px"], ["mat-cell", "", 2, "width", "150px"], ["mat-header-cell", "", 2, "width", "100px"], ["mat-cell", "", 2, "width", "100px"], ["mat-header-cell", "", 2, "width", "200px"], ["mat-cell", "", 2, "width", "200px"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", "", 2, "width", "40px"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ExperienciaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "EXPERIENCIA LABORAL / WORK EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ExperienciaComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.guardarExperiencia(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_10_listener($event) { return ctx.empresa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ExperienciaComponent_mat_error_12_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_17_listener($event) { return ctx.puesto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ExperienciaComponent_mat_error_19_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_22_listener($event) { return ctx.fechaInicio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ExperienciaComponent_mat_error_27_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_30_listener($event) { return ctx.fechaFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "mat-datepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ExperienciaComponent_mat_error_35_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExperienciaComponent_Template_button_click_38_listener() { return ctx.setFechaActual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "textarea", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_textarea_ngModelChange_44_listener($event) { return ctx.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ExperienciaComponent_mat_error_46_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](51, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ExperienciaComponent_th_52_Template, 2, 1, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, ExperienciaComponent_td_53_Template, 2, 1, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](54, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ExperienciaComponent_th_55_Template, 2, 1, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ExperienciaComponent_td_56_Template, 2, 1, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](57, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, ExperienciaComponent_th_58_Template, 2, 1, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ExperienciaComponent_td_59_Template, 3, 4, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](60, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, ExperienciaComponent_th_61_Template, 2, 1, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, ExperienciaComponent_td_62_Template, 3, 4, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](63, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ExperienciaComponent_th_64_Template, 2, 1, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, ExperienciaComponent_td_65_Template, 2, 1, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](66, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, ExperienciaComponent_th_67_Template, 2, 1, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, ExperienciaComponent_td_68_Template, 4, 0, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, ExperienciaComponent_tr_69_Template, 1, 0, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, ExperienciaComponent_tr_70_Template, 1, 0, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](31);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.languageTexts.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.languageTexts.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaIniU);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r6)("ngModel", ctx.fechaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaFinU);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r9)("ngModel", ctx.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.languageTexts.fechaActual);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.languageTexts.actual);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.languageTexts.descripcionInd);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.languageTexts.guardarExp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.columna-completa[_ngcontent-%COMP%] {\n  flex-basis: calc(100% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4cGVyaWVuY2lhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBLDZCQUFBOztBQUNBO0VBQ0Usb0NBQUE7RUFBc0MsNkJBQUE7RUFDdEMsdUJBQUE7RUFBeUIsc0NBQUE7QUFFM0I7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVKIiwiZmlsZSI6ImV4cGVyaWVuY2lhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDRUZGICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGEgbmVncm8gKi9cclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZpbGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5jb2x1bW5hIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbmEtY29tcGxldGEge1xyXG4gICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbXBvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "+kO/":
/*!******************************************************!*\
  !*** ./src/app/comentarios/comentarios.component.ts ***!
  \******************************************************/
/*! exports provided: ComentariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosComponent", function() { return ComentariosComponent; });
/* harmony import */ var _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../cv-modal/cv-modal.component */ "Vf++");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pizzip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pizzip */ "VHzF");
/* harmony import */ var pizzip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pizzip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var docxtemplater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! docxtemplater */ "+/lt");
/* harmony import */ var docxtemplater__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(docxtemplater__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















class ComentariosComponent {
    constructor(dataFormularioService, languageService, dialog) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dialog = dialog;
        //Informacion para llenar word
        this.apellido = '';
        this.nombre = '';
        this.nacionalidad = '';
        this.ciudad = '';
        this.pais = '';
        this.edad = 0;
        this.tiempoExperiencia = 0;
        this.estudios = [
            { universidad: 'UNAM', carrera: 'Ingeniería', fechaIni: new Date(2010, 1, 1), generacion: new Date(2014, 1, 1) }
        ];
        this.experiencias = [{ puesto: 'UNAM', empresa: 'Ingeniería', descripcion: '', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1) }];
        this.conocimientos = [{ conocimiento: 'Angular' }];
        this.skills = [{ skill: 'Trabajo en equipo' }];
        this.cursos = [{ nombre: 'Ingeniería', organizacion: '', descripcion: '', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1), entidad: '', tiempoEstudio: '' }];
        this.idiomas = [{ idioma: '', nivel: '' }];
        this.comentarios = '';
        //Finaliza informacion para llenar word
        this.arregloLlenosInfo = { llenos: true, arregloVacio: null };
        this.selectedLanguage = 'es';
        this.comentario = '';
        this.disenoHoja = 'Diseño de una columna';
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
            this.selectedLanguage = this.languageService.language;
        });
        this.dataFormularioService.sendNombre$.subscribe({
            next: (nombre) => {
                this.nombre = nombre;
            }
        });
        this.dataFormularioService.sendApellidos$.subscribe({
            next: (apellido) => {
                this.apellido = apellido;
            }
        });
        this.dataFormularioService.sendNacionalidad$.subscribe({
            next: (nacionalidad) => {
                this.nacionalidad = nacionalidad;
            }
        });
        this.dataFormularioService.sendCiudad$.subscribe({
            next: (ciudad) => {
                this.ciudad = ciudad;
            }
        });
        this.dataFormularioService.sendPais$.subscribe({
            next: (pais) => {
                this.pais = pais;
            }
        });
        this.dataFormularioService.sendEdad$.subscribe({
            next: (edad) => {
                this.edad = edad;
            }
        });
        this.dataFormularioService.sendTiempoExp$.subscribe({
            next: (tiempoExperiencia) => {
                this.tiempoExperiencia = tiempoExperiencia;
            }
        });
        this.dataFormularioService.sendConocimientos$.subscribe({
            next: (conocimientos) => {
                this.conocimientos = conocimientos;
            }
        });
        this.dataFormularioService.sendSkills$.subscribe({
            next: (skills) => {
                this.skills = skills;
            }
        });
        this.dataFormularioService.sendEstudios$.subscribe({
            next: (estudios) => {
                this.estudios = estudios;
            }
        });
        this.dataFormularioService.sendExperiencias$.subscribe({
            next: (experiencias) => {
                this.experiencias = experiencias;
            }
        });
        this.dataFormularioService.sendCursos$.subscribe({
            next: (cursos) => {
                this.cursos = cursos;
            }
        });
        this.dataFormularioService.sendIdiomas$.subscribe({
            next: (idiomas) => {
                this.idiomas = idiomas;
            }
        });
        this.dataFormularioService.sendComentarios$.subscribe({
            next: (comentarios) => {
                this.comentarios = comentarios;
            }
        });
    }
    ngOnInit() {
    }
    enviarDatos() {
        this.dataFormularioService.guardarDatos(this.comentario, this.disenoHoja);
    }
    todosArreglosLlenos() {
        if (!this.dataFormularioService.tieneEstudios) {
            return { llenos: false, arregloVacio: 'UNIVERSIDAD / UNIVERSITY' };
        }
        if (!this.dataFormularioService.tieneConocimientos) {
            return { llenos: false, arregloVacio: 'CONOCIMIENTO TECNICO / TECHNICIAL KNOWHOW' };
        }
        if (!this.dataFormularioService.tieneExperiencias) {
            return { llenos: false, arregloVacio: 'EXPERIENCIA LABORAL / WORK EXPERIENCE' };
        }
        if (!this.dataFormularioService.tieneIdiomas) {
            return { llenos: false, arregloVacio: 'IDIOMAS / LANGUAGES' };
        }
        if (!this.dataFormularioService.tienePersonal) {
            return { llenos: false, arregloVacio: 'DATOS PERSONALES / PERSONAL DATA' };
        }
        return { llenos: true, arregloVacio: null };
    }
    verificarArreglos(event) {
        const resultado = this.todosArreglosLlenos();
        this.arregloLlenosInfo = resultado;
        if (!resultado.llenos && resultado.arregloVacio) {
            // Prevenir el submit
            event.preventDefault();
            event.stopPropagation();
            // Mostrar la notificación
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Error',
                text: `${this.languageTexts.validarGenerarL} ${resultado.arregloVacio} ${this.languageTexts.validarGenerarR}`,
            });
        }
        else {
            // Si todos los arreglos están llenos, permite el submit
            this.enviarDatos();
            this.downloadPdf();
        }
    }
    openPdfViewer() {
        this.dialog.open(_cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_0__["CvModalComponent"], { data: { tipo: this.disenoHoja } });
    }
    downloadPdf() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var templateUrl = 'assets/PlantillaUno.docx';
        var conocimientosFormateados = [];
        var habilidadesFormateados = [];
        if (this.disenoHoja === 'Diseño de una columna') {
            if ((this.conocimientos.length > 0 && this.skills.length === 0) || (this.skills.length > 0 && this.conocimientos.length === 0)
                || (this.conocimientos.length > 13 || this.skills.length > 13)) {
                if (this.selectedLanguage === 'es') {
                    templateUrl = 'assets/PlantillaUno.docx';
                }
                else {
                    templateUrl = 'assets/PlantillaUnoEng.docx';
                }
                // Agrupar los conocimientos en objetos de 4 propiedades
                for (let i = 0; i < this.conocimientos.length; i += 4) {
                    const bloque = {};
                    if ((_a = this.conocimientos[i]) === null || _a === void 0 ? void 0 : _a.conocimiento) {
                        bloque.conocimiento1 = this.conocimientos[i].conocimiento;
                    }
                    if ((_b = this.conocimientos[i + 1]) === null || _b === void 0 ? void 0 : _b.conocimiento) {
                        bloque.conocimiento2 = this.conocimientos[i + 1].conocimiento;
                    }
                    if ((_c = this.conocimientos[i + 2]) === null || _c === void 0 ? void 0 : _c.conocimiento) {
                        bloque.conocimiento3 = this.conocimientos[i + 2].conocimiento;
                    }
                    if ((_d = this.conocimientos[i + 3]) === null || _d === void 0 ? void 0 : _d.conocimiento) {
                        bloque.conocimiento4 = this.conocimientos[i + 3].conocimiento;
                    }
                    conocimientosFormateados.push(bloque);
                }
                // Fin agrupacion conocimientos
                // Agrupar las skills en objetos de 4 propiedades
                for (let i = 0; i < this.skills.length; i += 4) {
                    const bloque = {};
                    if ((_e = this.skills[i]) === null || _e === void 0 ? void 0 : _e.skill) {
                        bloque.skill1 = this.skills[i].skill;
                    }
                    if ((_f = this.skills[i + 1]) === null || _f === void 0 ? void 0 : _f.skill) {
                        bloque.skill2 = this.skills[i + 1].skill;
                    }
                    if ((_g = this.skills[i + 2]) === null || _g === void 0 ? void 0 : _g.skill) {
                        bloque.skill3 = this.skills[i + 2].skill;
                    }
                    if ((_h = this.skills[i + 3]) === null || _h === void 0 ? void 0 : _h.skill) {
                        bloque.skill4 = this.skills[i + 3].skill;
                    }
                    habilidadesFormateados.push(bloque);
                }
                // Fin agrupacion skills
            }
            else if (this.conocimientos.length < 14 && this.skills.length < 14 && this.conocimientos.length > 0 && this.skills.length > 0) {
                if (this.selectedLanguage === 'es') {
                    templateUrl = 'assets/PlantillaUnoColumnas.docx';
                }
                else {
                    templateUrl = 'assets/PlantillaUnoColumnasEng.docx';
                }
                habilidadesFormateados = [];
                habilidadesFormateados = this.skills;
                conocimientosFormateados = [];
                conocimientosFormateados = this.conocimientos;
            }
        }
        else {
            if (this.selectedLanguage === 'es') {
                templateUrl = 'assets/PlantillaDos.docx';
            }
            else {
                templateUrl = 'assets/PlantillaDosEng.docx';
            }
            habilidadesFormateados = [];
            habilidadesFormateados = this.skills;
            conocimientosFormateados = [];
            conocimientosFormateados = this.conocimientos;
        }
        fetch(templateUrl)
            .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo DOCX');
            }
            return response.arrayBuffer();
        })
            .then(data => {
            const zip = new pizzip__WEBPACK_IMPORTED_MODULE_2__(data); // Cargar el archivo DOCX en PizZip
            const doc = new docxtemplater__WEBPACK_IMPORTED_MODULE_3__(zip, { paragraphLoop: true, linebreaks: true });
            //Actualizar estudios
            const estudiosNew = [];
            for (let i = 0; i < this.estudios.length; i++) {
                const bloque = {};
                bloque.universidad = this.estudios[i].universidad;
                bloque.carrera = this.estudios[i].carrera;
                bloque.fechaIni = this.estudios[i].fechaIni.getFullYear();
                bloque.generacion = (this.isToday(this.estudios[i].generacion) ? this.languageTexts.actualidad : this.estudios[i].generacion.getFullYear());
                estudiosNew.push(bloque);
            }
            // Fin actualizar estudios
            // Actualizar experiencias
            const experienciasNew = [];
            for (let i = 0; i < this.experiencias.length; i++) {
                const bloque = {};
                bloque.puesto = this.experiencias[i].puesto;
                bloque.empresa = this.experiencias[i].empresa;
                bloque.descripcion = this.experiencias[i].descripcion;
                bloque.periodo = (this.experiencias[i].fechaIni ? this.capitalizeFirstLetter(this.experiencias[i].fechaIni) : '')
                    + ' - ' + (this.isToday(this.experiencias[i].fechaFin) ? this.languageTexts.actualidad : this.experiencias[i].fechaFin ? this.capitalizeFirstLetter(this.experiencias[i].fechaFin) : '');
                experienciasNew.push(bloque);
            }
            //Fin actualizar experiencias
            // Actualizar cursos
            const cursosNew = [];
            for (let i = 0; i < this.cursos.length; i++) {
                const bloque = {};
                bloque.nombre = this.cursos[i].nombre;
                bloque.organizacion = this.cursos[i].organizacion;
                bloque.descripcion = this.cursos[i].descripcion;
                bloque.entidad = this.cursos[i].entidad;
                bloque.tiempoEstudio = this.cursos[i].tiempoEstudio;
                bloque.periodo = (this.cursos[i].fechaIni ? this.capitalizeFirstLetter(this.cursos[i].fechaIni) : '')
                    + ' - ' + (this.isToday(this.cursos[i].fechaFin) ? this.languageTexts.actualidad : this.cursos[i].fechaFin ? this.capitalizeFirstLetter(this.cursos[i].fechaFin) : '');
                cursosNew.push(bloque);
            }
            // Fin actualizar cursos
            // Datos a insertar en la plantilla
            const datos = {
                EtNom: this.apellido + ' ' + this.nombre,
                EtNa: this.nacionalidad,
                EtId: this.idiomas,
                EtRe: this.ciudad + ', ' + this.pais,
                EtEd: this.edad,
                EtTiempoExp: this.tiempoExperiencia,
                estudios: estudiosNew,
                conocimientos: conocimientosFormateados,
                habilidades: habilidadesFormateados,
                experiencias: experienciasNew,
                cursos: cursosNew,
                comentarios: this.comentarios,
                tieneConocimientos: this.conocimientos.length > 0,
                tieneSkills: this.skills.length > 0,
                tieneCursos: this.cursos.length > 0,
                tieneComentarios: this.comentarios !== '' && this.comentarios !== undefined
            };
            // Establecer los datos en la plantilla
            doc.setData(datos);
            try {
                // Intentar renderizar el documento
                doc.render();
            }
            catch (error) {
                console.error('Error al procesar la plantilla DOCX:', error);
                if (error.properties && error.properties.errors) {
                    error.properties.errors.forEach((err) => {
                        console.error('Error específico en placeholder:', err);
                    });
                }
                return;
            }
            // Obtener el archivo generado y descargarlo
            const docxContent = doc.getZip().generate({ type: 'blob' });
            const blob = new Blob([docxContent], {
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, 'Curriculum_Vitae.docx');
        })
            .catch(error => {
            console.error('Error al cargar la plantilla DOCX:', error);
        });
    }
    isToday(date) {
        const today = new Date();
        return (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear());
    }
    capitalizeFirstLetter(text) {
        if (!text) {
            return ''; // Devuelve una cadena vacía si el texto es null o undefined
        }
        const monthIndex = text.getMonth(); // Obtiene el índice del mes (0-11)
        const year = text.getFullYear(); // Obtiene el año
        const month = this.languageTexts.mesesArray[monthIndex] || '';
        const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1); // Capitaliza la primera letra
        return `${capitalizedMonth} ${year}`;
    }
}
ComentariosComponent.ɵfac = function ComentariosComponent_Factory(t) { return new (t || ComentariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_6__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
ComentariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ComentariosComponent, selectors: [["app-comentarios"]], decls: 24, vars: 8, consts: [["id", "comentarios", 1, "formulario-container"], [1, "titulo"], ["autocomplete", "on", 1, "formulario"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "comentario", 1, "mi-textarea", 3, "placeholder", "ngModel", "ngModelChange"], [1, "lip"], [2, "margin-right", "10px"], ["name", "disenoHoja", 3, "placeholder", "ngModel", "ngModelChange"], ["value", "Dise\u00F1o de una columna"], ["value", "Dise\u00F1o de dos columnas"], ["mat-raised-button", "", 1, "btazul", 2, "margin-right", "10px", 3, "click"], ["mat-raised-button", "", 1, "btazul", 3, "click"]], template: function ComentariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "NOTAS O COMENTARIOS / NOTES OR COMMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ComentariosComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.comentario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ComentariosComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.disenoHoja = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ComentariosComponent_Template_button_click_20_listener($event) { return ctx.verificarArreglos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Generar WORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ComentariosComponent_Template_button_click_22_listener() { return ctx.openPdfViewer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Visualizar documento / View document");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.languageTexts.comentarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.comentarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.comentario);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.languageTexts.indicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.estilos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.disenoHoja);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.languageTexts.estilo1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.languageTexts.estilo2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"]], styles: ["@charset \"UTF-8\";\n.formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(100%);\n  margin-bottom: 20px;\n}\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.mi-textarea[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.imprimir[_ngcontent-%COMP%] {\n  display: none;\n  \n}\n.lip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.btazul[_ngcontent-%COMP%] {\n  background-color: #33CEFF;\n  \n  color: black;\n  \n}\n@media print {\n  .imprimir[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  \n  body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    font-size: 12px;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbWVudGFyaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFFSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0U7RUFDRSxXQUFBO0VBQWEsdURBQUE7QUFHakI7QUFBRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFHSjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQUdKO0FBQUU7RUFDRSxXQUFBO0FBR0o7QUFBRTtFQUNFLHdDQUFBO0FBR0o7QUFBRTtFQUNFLGFBQUE7QUFHSjtBQUFFO0VBQ0UsYUFBQTtFQUFlLGlEQUFBO0FBSW5CO0FBREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFBcUIscUVBQUE7QUFLekI7QUFIRSw2QkFBQTtBQUNGO0VBQ0UseUJBQUE7RUFBNEIsNkJBQUE7RUFDNUIsWUFBQTtFQUFlLHNDQUFBO0FBUWpCO0FBSkU7RUFDRTtJQUNFLGNBQUE7RUFPSjs7RUFMRSwwQ0FBQTtFQUNBO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0lBQ0EsK0JBQUE7RUFRSjtBQUNGIiwiZmlsZSI6ImNvbWVudGFyaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgLyogQWp1c3RhciBlbCBmb3JtdWxhcmlvIHBhcmEgcXVlIG9jdXBlIHRvZG8gZWwgYW5jaG8gKi9cbn1cblxuLmZpbGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbHVtbmEge1xuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2FtcG8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5taS10ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5pbXByaW1pciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIE9jdWx0YSBlbCBlbGVtZW50byBlbiBsYSB2aXN0YSBkZWwgbmF2ZWdhZG9yICovXG59XG5cbi5saXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBBbGluZWFyIHZlcnRpY2FsbWVudGUgbG9zIGVsZW1lbnRvcyBlbiBlbCBjZW50cm8gc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbi8qIHN0eWxlcy5jc3MgbyBzdHlsZXMuc2NzcyAqL1xuLmJ0YXp1bCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0NFRkY7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xuICBjb2xvcjogYmxhY2s7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gYSBuZWdybyAqL1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAuaW1wcmltaXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSBsYSBpbXByZXNpw7NuICovXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLyogT3Ryb3MgZXN0aWxvcyBkZSBpbXByZXNpw7NuICovXG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Crist\Downloads\APP\app\src\main.ts */"zUnb");


/***/ }),

/***/ "3Hxo":
/*!*********************************!*\
  !*** ./src/assets/js/print2.js ***!
  \*********************************/
/*! exports provided: printDiv2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDiv2", function() { return printDiv2; });
function printDiv2(nombre, apellido, nacionalidad, edad, ciudad, pais, estudios, conocimientos, experiencias, cursos, idiomas, languageTexts, skills) {

    var a = window.open("", "", "height=1000, width=1000");
    a.document.write("<html><body>");

    //Encabezado
    a.document
        .write(`<div style="display: block; align-items: center; width:1000;"> <div style="display: flex;
          margin: 15px 5px;">`);
    a.document.write(
        '<img style="width: 120;" src="./assets/images/logo.png" alt="logo">'
    );
    a.document.write(
        '<h3 style="flex: 1; text-align: right; font-family: \'Franklin Gothic Medium Cond\'; font-size: 18px; color: #31DCFE !important; margin-right: 100px;">Curriculum Vitae</h3>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    //Datos Personales
    a.document.write('<div style="margin-top: 20px;">');
    a.document.write(`<div style="font-weight: bold; font-family: \'Mediator Serif Narrow Bold\'; font-size: 40px;"><label>${apellido} ${nombre}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.edad}: ${edad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.nacionalidad}: ${nacionalidad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.ciudad}: ${ciudad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.pais}: ${pais}</label></div>`);
    a.document.write("</div>");

    //SEPARAMIENTO DEL PDF
    a.document.write(
        '<div style="display: flex; align-items: flex-start; width:100%;">'
    );

    // =========== 2 COLUMNAS ============
    a.document.write('<div style="display: flex; flex: 1;">');

    // =========== Columna 1 ============
    a.document.write('<div style="flex: 1; margin-right: 20px;">');

    // =========== 1. EXPERIENCIA LABORAL ============
    a.document.write(
        '<div style="display: flex; flex-direction: column;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.experiencialab + '</label>'
    );
    a.document.write("</div>");

    function capitalizarPrimeraLetra(cadena) {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
      }
    // Aquí debes añadir el código para mostrar la experiencia laboral
    experiencias.forEach(experiencia => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: black;"><strong>${experiencia.puesto}</strong> - <strong>${experiencia.empresa}</strong></p>`);

        // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
    const fechaInicio = new Date(experiencia.fechaIni);
    const fechaFin = new Date(experiencia.fechaFin);

    // Obtener el mes y el año actual
    const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
    const añoActual = new Date().getFullYear();

    // Extraer el mes y el año de cada fecha
    const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
    const añoInicio = fechaInicio.getFullYear();
    let mesFin, añoFin;

    // Verificar si la fecha fin es igual al mes y año actuales
    if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
        mesFin = languageTexts.actualidad;
        añoFin = "";
    } else {
        mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
        añoFin = fechaFin.getFullYear();
    }

    // Construir la cadena de tiempo formateada
    const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

    a.document.write(`<p style="font-family: 'Tara SC Light', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${tiempoFormateado}</p>`);

        // a.document.write('<div style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 10px; color: black;;"><ul style="list-style-type: disc; padding-left: 20px;">'); // Inicio de la lista
        // experiencia.actividades.forEach(function(actividad) {
        //     a.document.write(`<li>${actividad}</li>`); // Mostrar cada actividad como un elemento de lista
        // });
        // a.document.write('</ul></div>'); // Fin de la lista

        // a.document.write('<div style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 10px; color: black;;"><ul style="list-style-type: disc; padding-left: 20px;">'); // Inicio de la lista
        // experiencia.funciones.forEach(function(funcion) {
        //     a.document.write(`<li>${funcion}</li>`); // Mostrar cada función como un elemento de lista
        // });
        // a.document.write('</ul></div>'); // Fin de la lista

        a.document.write('<div style="margin-top: 1px;">');
        a.document.write(`<p style="font-family: 'TilpSerif EF Bold Italic', sans-serif; font-size: 16px; margin-bottom: 2px; color: black; text-align: justify;">${experiencia.descripcion}</p>`);
        a.document.write("</div>");

        a.document.write("</div>"); // Cerrar el div de la experiencia laboral
    });
    a.document.write("</div>");

    // =========== 2. ESTUDIOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.estudioscursados + '</label>'
    );
    a.document.write("</div>");

    estudios.forEach(estudio => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: black;"><strong>${estudio.universidad}</strong></strong></p>`);
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${estudio.carrera}</p>`);

        // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
        const fechaInicio = new Date(estudio.fechaIni);
        const fechaFin = new Date(estudio.generacion);

        // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
    const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
    const añoInicio = fechaInicio.getFullYear();
    let mesFin, añoFin;

    // Verificar si la fecha fin es igual al mes y año actuales
    if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
        mesFin = languageTexts.actualidad;
        añoFin = "";
    } else {
        mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
        añoFin = fechaFin.getFullYear();
    }

    // Construir la cadena de tiempo formateada
    const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

        a.document.write(`<p style="font-family: \'Tara SC Light\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${tiempoFormateado}</p>`);

        a.document.write("</div>"); // Cerrar el div del conocimiento
    });
    a.document.write("</div>");

    // Verificar si hay cursos antes de escribir el contenido
    if (cursos.length > 0) {
    // =========== 3. CURSOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; font-size: 20px; color: #3D5FEA !important;  margin-top: 2%; ">' + languageTexts.otrosEstudios + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los cursos
    cursos.forEach(curso => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: black;"><strong>${curso.nombre}</strong></strong></p>`);
         // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
        const fechaInicio = new Date(curso.fechaIni);
        const fechaFin = new Date(curso.fechaFin);

        // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
        const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
        const añoInicio = fechaInicio.getFullYear();
        let mesFin, añoFin;

        // Verificar si la fecha fin es igual al mes y año actuales
        if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
            mesFin = languageTexts.actualidad;
            añoFin = "";
        } else {
            mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
            añoFin = fechaFin.getFullYear();
        }

        // Construir la cadena de tiempo formateada
        const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${curso.organizacion}</p>`);

        a.document.write(`<p style="font-family: \'Tara SC Light\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${tiempoFormateado}</p>`);
        a.document.write(`<p style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${curso.entidad} - ${curso.tiempoEstudio}</p>`);
        a.document.write(`<p style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 5px; color: black;">${curso.descripcion}</p>`);

        a.document.write("</div>");
    });

    a.document.write("</div>");
}

    a.document.write("</div>");

    // =========== Columna 2 ============
    a.document.write('<div style="flex: 1;">');

    // =========== 4. CONOCIMIENTOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%; margin-bottom: 10px;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.conocimientotec + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los conocimientos
    conocimientos.forEach(conocimiento => {
        a.document.write('<div style="margin-top: 0.5%; margin-bottom: 0.5%;">'); // Ajusta los márgenes superior e inferior
        a.document.write(`<p style="font-family: 'TilpSerif EF Bold Italic', sans-serif; font-size: 16px; margin: 0; color: black;">${conocimiento.conocimiento}</p>`); // Elimina margen inferior y superior
        a.document.write("</div>");
    });
    a.document.write("</div>");

    // =========== 4. skills ============
    if (skills.length > 0) {
      a.document.write(
        '<div style="display: flex; flex-direction: column;">'
      );
      a.document.write('<div style="display: flex; margin-top:3%; margin-bottom: 10px;">');
      a.document.write(
          '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.skillEt + '</label>'
      );
      a.document.write("</div>");
      // Aquí debes añadir el código para mostrar los conocimientos
      skills.forEach(skills => {
          a.document.write('<div style="margin-top: 0.5%; margin-bottom: 0.5%;">'); // Ajusta los márgenes superior e inferior
          a.document.write(`<p style="font-family: 'TilpSerif EF Bold Italic', sans-serif; font-size: 16px; margin: 0; color: black;">${skills.skill}</p>`); // Elimina margen inferior y superior
          a.document.write("</div>");
      });
      a.document.write("</div>");
    }

    // =========== 5. IDIOMAS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; color: #3D5FEA !important; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.idiomas + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los idiomas
    idiomas.forEach(idioma => {
        a.document.write('<div style="margin-top: 1px;">');
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 2px; color: black;">${idioma.idioma + ' - '+ idioma.nivel}</p>`);
        a.document.write("</div>");
    });
    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");
    a.document.write("</body></html>");

    a.document.close();
    setTimeout(function() {
        a.print();
    }, 1000);
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C3ZT":
/*!**********************************************************!*\
  !*** ./src/app/conocimientos/conocimientos.component.ts ***!
  \**********************************************************/
/*! exports provided: ConocimientosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConocimientosComponent", function() { return ConocimientosComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function ConocimientosComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ConocimientosComponent_th_8_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.masterToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected())("aria-label", ctx_r0.checkboxLabel());
} }
function ConocimientosComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientosComponent_td_9_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ConocimientosComponent_td_9_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const row_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.toggleSelection(row_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r10))("aria-label", ctx_r1.checkboxLabel(row_r10));
} }
function ConocimientosComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.languageTexts.conocimiento, " ");
} }
function ConocimientosComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r14.conocimiento, " ");
} }
function ConocimientosComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.languageTexts.eliminar, " ");
} }
function ConocimientosComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientosComponent_td_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.eliminarElemento(element_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConocimientosComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 15);
} }
function ConocimientosComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 16);
} }
class ConocimientosComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.conocimientosPLCs = [
            { conocimiento: 'SIEMENS (PLC)', position: 1 },
            { conocimiento: 'ALLEN BRADLEY (PLC)', position: 2 },
            { conocimiento: 'SCHNEIDER (PLC)', position: 3 },
            { conocimiento: 'MITSUBISHI (PLC)', position: 4 },
            { conocimiento: 'OMRON (PLC)', position: 5 },
            { conocimiento: 'ABB (PLC)', position: 6 },
        ];
        this.conocimientosHMIs = [
            { conocimiento: 'SIEMENS (HMI)', position: 1 },
            { conocimiento: 'ALLEN BRADLEY (HMI)', position: 2 },
            { conocimiento: 'SCHNEIDER (HMI)', position: 3 },
        ];
        this.conocimientosDrivesServos = [
            { conocimiento: 'SIEMENS (Drive/Servo)', position: 1 },
            { conocimiento: 'ALLEN BRADLEY (Drive/Servo)', position: 2 },
            { conocimiento: 'SCHNEIDER (Drive/Servo)', position: 3 },
            { conocimiento: 'YASKAWA (Drive/Servo)', position: 4 },
            { conocimiento: 'LENZE (Drive/Servo)', position: 5 },
            { conocimiento: 'ABB (Drive/Servo)', position: 6 },
        ];
        this.conocimientosSoftware = [
            { conocimiento: 'TIA Portal', position: 1 },
            { conocimiento: 'STEP 7', position: 2 },
            { conocimiento: 'WINCC', position: 3 },
            { conocimiento: 'PCS7', position: 4 },
            { conocimiento: 'StartDrive', position: 5 },
            { conocimiento: 'Starter', position: 6 },
            { conocimiento: 'Studio5000', position: 7 },
            { conocimiento: 'RSLogix', position: 8 },
            { conocimiento: 'Factory Talk View ME/SE', position: 9 },
            { conocimiento: 'Component WorkBench', position: 10 },
            { conocimiento: 'PlantPAx', position: 11 },
            { conocimiento: 'DriveTools', position: 12 },
            { conocimiento: 'RSNetworx', position: 13 },
            { conocimiento: 'EcoStruxure Control Expert', position: 14 },
            { conocimiento: 'Unity Pro', position: 15 },
            { conocimiento: 'Vijeo Designer', position: 16 },
            { conocimiento: 'SoMove', position: 17 },
        ];
        this.conocimientosLenguaje = [
            { conocimiento: 'Ladder', position: 1 },
            { conocimiento: 'FBD', position: 2 },
            { conocimiento: 'ST', position: 3 },
            { conocimiento: 'IL', position: 4 },
            { conocimiento: 'SFC', position: 5 },
            { conocimiento: 'GRAFCET', position: 6 },
        ];
        this.conocimientosNetwork = [
            { conocimiento: 'Profinet', position: 1 },
            { conocimiento: 'Profibus DP', position: 2 },
            { conocimiento: 'Ethernet IP', position: 3 },
            { conocimiento: 'ControlNet', position: 4 },
            { conocimiento: 'DeviceNet', position: 5 },
            { conocimiento: 'EtherCat', position: 6 },
        ];
        this.conocimiento = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['select', 'conocimiento', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
        this.updateDataSource();
    }
    ngOnChanges(changes) {
        if (changes['categoryTitle']) {
            this.updateDataSource();
        }
    }
    updateDataSource() {
        switch (this.categoryTitle) {
            case 'PLCs':
                this.dataSource.data = this.conocimientosPLCs;
                break;
            case 'HMIs':
                this.dataSource.data = this.conocimientosHMIs;
                break;
            case 'DRIVEs / SERVOs':
                this.dataSource.data = this.conocimientosDrivesServos;
                break;
            case 'Software':
                this.dataSource.data = this.conocimientosSoftware;
                break;
            case 'Lenguaje de programación':
                this.dataSource.data = this.conocimientosLenguaje;
                break;
            case 'Language of programming':
                this.dataSource.data = this.conocimientosLenguaje;
                break;
            case 'Network':
                this.dataSource.data = this.conocimientosNetwork;
                break;
            default:
                this.dataSource.data = [];
                break;
        }
    }
    guardarConocimiento() {
        if (this.conocimiento) {
            const nuevaExperiencia = {
                conocimiento: this.conocimiento,
                position: (this.dataSource.data.length + 1)
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.selection.select(nuevaExperiencia);
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.conocimiento = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.selection.deselect(elemento);
        this.dataFormularioService.eliminarConocimientos([elemento]);
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            const deselectedElements = [...this.selection.selected];
            this.selection.clear();
            this.dataFormularioService.eliminarConocimientos(deselectedElements);
        }
        else {
            this.dataSource.data.forEach(row => this.selection.select(row));
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
        }
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    toggleSelection(row) {
        this.selection.toggle(row);
        if (this.selection.isSelected(row)) {
            this.dataFormularioService.guardarConocimientos([row]);
        }
        else {
            this.dataFormularioService.eliminarConocimientos([row]);
        }
    }
}
ConocimientosComponent.ɵfac = function ConocimientosComponent_Factory(t) { return new (t || ConocimientosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
ConocimientosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConocimientosComponent, selectors: [["app-conocimientos"]], inputs: { categoryTitle: "categoryTitle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 4, consts: [[1, "conocimientos-container"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "conocimiento"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ConocimientosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ConocimientosComponent_th_8_Template, 2, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ConocimientosComponent_td_9_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ConocimientosComponent_th_11_Template, 2, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ConocimientosComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ConocimientosComponent_th_14_Template, 2, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ConocimientosComponent_td_15_Template, 4, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ConocimientosComponent_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ConocimientosComponent_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.categoryTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n  \n}\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  \n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: white;\n  \n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  \n}\n.conocimientos-container[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  \n}\n.ng-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbm9jaW1pZW50b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxvQ0FBQTtFQUFzQyw2QkFBQTtFQUN0Qyx1QkFBQTtFQUF5QixzQ0FBQTtBQUUzQjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUFxQiw4QkFBQTtBQUd2QjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFHRjtBQUFBO0VBQ0UsV0FBQTtBQUdGO0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBR0Y7QUFBQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQUFBO0VBQ0UsV0FBQTtBQUdGO0FBQUE7RUFDRSxtQkFBQTtFQUFxQix3Q0FBQTtBQUl2QjtBQURBO0VBQ0UsdUJBQUE7RUFBeUIsNERBQUE7QUFLM0I7QUFGQTtFQUNFLGFBQUE7RUFBZSx3REFBQTtBQU1qQjtBQUhBO0VBQ0Usa0JBQUE7RUFBb0IsNENBQUE7QUFPdEI7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQU9GIiwiZmlsZSI6ImNvbm9jaW1pZW50b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQ0VGRiAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGUgZm9uZG8gKi9cclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBSZWR1Y2UgZWwgbWFyZ2VuIGluZmVyaW9yICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlsYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29sdW1uYSB7XHJcbiAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2FtcG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogUmVkdWNlIGVsIGVzcGFjaW8gZW50cmUgbG9zIHBhbmVsZXMgKi9cclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogT3BjaW9uYWw6IENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyBkZWwgaGVhZGVyIGRlbCBwYW5lbCAqL1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4OyAvKiBPcGNpb25hbDogQWp1c3RhIGVsIHBhZGRpbmcgZGVsIGNvbnRlbmlkbyBkZWwgcGFuZWwgKi9cclxufVxyXG5cclxuLmNvbm9jaW1pZW50b3MtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIFJlZHVjZSBlbCBlc3BhY2lvIGVudHJlIGxvcyBjb21wb25lbnRlcyAqL1xyXG59XHJcblxyXG4ubmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Co0O":
/*!************************************************!*\
  !*** ./src/app/estudios/estudios.component.ts ***!
  \************************************************/
/*! exports provided: EstudiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudiosComponent", function() { return EstudiosComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function EstudiosComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.languageTexts.obligatorio, " ");
} }
function EstudiosComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.languageTexts.obligatorio, " ");
} }
function EstudiosComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.languageTexts.obligatorio, " ");
} }
function EstudiosComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.languageTexts.obligatorio, " ");
} }
function EstudiosComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.languageTexts.universidad, " ");
} }
function EstudiosComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r23.universidad);
} }
function EstudiosComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r13.languageTexts.carrera);
} }
function EstudiosComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r24.carrera);
} }
function EstudiosComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.languageTexts.fechaInicio, " ");
} }
function EstudiosComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r25.fechaIni, "dd-MM-yyyy"), " ");
} }
function EstudiosComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r17.languageTexts.fechaFin);
} }
function EstudiosComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r26.generacion, "dd-MM-yyyy"), " ");
} }
function EstudiosComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.languageTexts.eliminar);
} }
function EstudiosComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EstudiosComponent_td_58_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const element_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.eliminarElemento(element_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EstudiosComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 36);
} }
function EstudiosComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 37);
} }
class EstudiosComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.universidad = '';
        this.carrera = '';
        this.generacion = null;
        this.fechaIni = null;
        this.selectedLanguage = 'es';
        this.fechaActual = new Date();
        this.displayedColumns = ['universidad', 'carrera', 'fechaIni', 'generacion', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() { }
    guardarEstudio(form) {
        if (this.universidad && this.carrera && this.generacion && this.fechaIni) {
            const nuevaExperiencia = {
                universidad: this.universidad,
                carrera: this.carrera,
                generacion: this.generacion,
                fechaIni: this.fechaIni
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.dataFormularioService.guardarEstudios(this.dataSource.data);
            this.resetFormulario(form);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Error',
                text: this.languageTexts.validar,
            });
        }
    }
    resetFormulario(form) {
        this.universidad = '';
        this.carrera = '';
        this.generacion = null;
        this.fechaIni = null;
        form.resetForm();
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarEstudios(this.dataSource.data);
    }
    setFechaActual() {
        this.generacion = this.fechaActual;
    }
}
EstudiosComponent.ɵfac = function EstudiosComponent_Factory(t) { return new (t || EstudiosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
EstudiosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EstudiosComponent, selectors: [["app-estudios"]], decls: 61, vars: 24, consts: [["id", "estudios", 1, "formulario-container"], [1, "titulo"], [1, "formulario", 3, "ngSubmit"], ["estudioForm", "ngForm"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "universidad", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["universidadModel", "ngModel"], [4, "ngIf"], ["matInput", "", "name", "carrera", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["carreraModel", "ngModel"], ["matInput", "", "name", "fechaIni", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["fechaIniModel", "ngModel"], ["matSuffix", "", 3, "for"], ["pickerIn", ""], ["matInput", "", "name", "generacion", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["generacionModel", "ngModel"], ["pickerInicio", ""], [2, "padding-right", "5px"], ["mat-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "boton"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "universidad"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "carrera"], ["matColumnDef", "fechaIni"], ["matColumnDef", "generacion"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function EstudiosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "UNIVERSIDAD / UNIVERSITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EstudiosComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.guardarEstudio(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_10_listener($event) { return ctx.universidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EstudiosComponent_mat_error_12_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_17_listener($event) { return ctx.carrera = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, EstudiosComponent_mat_error_19_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_22_listener($event) { return ctx.fechaIni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, EstudiosComponent_mat_error_27_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_30_listener($event) { return ctx.generacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "mat-datepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, EstudiosComponent_mat_error_35_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EstudiosComponent_Template_button_click_38_listener() { return ctx.setFechaActual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](44, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, EstudiosComponent_th_45_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, EstudiosComponent_td_46_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](47, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, EstudiosComponent_th_48_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, EstudiosComponent_td_49_Template, 2, 1, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](50, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, EstudiosComponent_th_51_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, EstudiosComponent_td_52_Template, 3, 4, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](53, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, EstudiosComponent_th_54_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, EstudiosComponent_td_55_Template, 3, 4, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](56, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, EstudiosComponent_th_57_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, EstudiosComponent_td_58_Template, 4, 0, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, EstudiosComponent_tr_59_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, EstudiosComponent_tr_60_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.universidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.universidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.universidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.carrera);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.carrera);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.carrera);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaIniU);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r6)("ngModel", ctx.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaFinU);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r9)("ngModel", ctx.generacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.fechaActual);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageTexts.actual, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.languageTexts.guardarEstu, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVzdHVkaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBLDZCQUFBOztBQUNBO0VBQ0Usb0NBQUE7RUFBc0MsNkJBQUE7RUFDdEMsdUJBQUE7RUFBeUIsc0NBQUE7QUFFM0I7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVKIiwiZmlsZSI6ImVzdHVkaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDRUZGICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGEgbmVncm8gKi9cclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW5hIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbXBvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "DNzp":
/*!********************************************************************!*\
  !*** ./src/app/conocimiento-total/conocimiento-total.component.ts ***!
  \********************************************************************/
/*! exports provided: ConocimientoTotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConocimientoTotalComponent", function() { return ConocimientoTotalComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../conocimientos/conocimientos.component */ "C3ZT");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function ConocimientoTotalComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function ConocimientoTotalComponent_app_conocimientos_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-conocimientos", 19);
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("categoryTitle", category_r10.title);
} }
function ConocimientoTotalComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ConocimientoTotalComponent_th_20_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.masterToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("aria-label", ctx_r2.checkboxLabel());
} }
function ConocimientoTotalComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientoTotalComponent_td_21_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ConocimientoTotalComponent_td_21_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const row_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.toggleSelection(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r13))("aria-label", ctx_r3.checkboxLabel(row_r13));
} }
function ConocimientoTotalComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.languageTexts.conocimiento, " ");
} }
function ConocimientoTotalComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.conocimiento, " ");
} }
function ConocimientoTotalComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.languageTexts.eliminar, " ");
} }
function ConocimientoTotalComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientoTotalComponent_td_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const element_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.eliminarElemento(element_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConocimientoTotalComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
} }
function ConocimientoTotalComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
} }
class ConocimientoTotalComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.categories = [];
        this.conocimiento = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['select', 'conocimiento', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
            this.updateCategories();
        });
    }
    ngOnInit() {
    }
    guardarConocimiento() {
        if (this.conocimiento) {
            const nuevaExperiencia = {
                conocimiento: this.conocimiento,
                position: (this.dataSource.data.length + 1)
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.selection.select(nuevaExperiencia);
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.conocimiento = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.selection.deselect(elemento);
        this.dataFormularioService.eliminarConocimientos([elemento]);
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            const deselectedElements = [...this.selection.selected];
            this.selection.clear();
            this.dataFormularioService.eliminarConocimientos(deselectedElements);
        }
        else {
            this.dataSource.data.forEach(row => this.selection.select(row));
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
        }
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    toggleSelection(row) {
        this.selection.toggle(row);
        if (this.selection.isSelected(row)) {
            this.dataFormularioService.guardarConocimientos([row]);
        }
        else {
            this.dataFormularioService.eliminarConocimientos([row]);
        }
    }
    updateCategories() {
        this.categories = [
            { title: 'PLCs' },
            { title: 'HMIs' },
            { title: 'DRIVEs / SERVOs' },
            { title: 'Software' },
            { title: this.languageTexts.lenguajeProgramacion },
            { title: 'Network' }
        ];
        this.dataSource.data = [
            { conocimiento: 'Safety', position: 1 },
            { conocimiento: 'Sensores', position: 2 },
            { conocimiento: 'Válvulas', position: 3 },
            { conocimiento: 'Encoders', position: 4 },
            { conocimiento: this.languageTexts.conocimiento5, position: 5 },
            { conocimiento: this.languageTexts.conocimiento6, position: 6 },
            { conocimiento: this.languageTexts.conocimiento7, position: 7 },
        ];
    }
}
ConocimientoTotalComponent.ɵfac = function ConocimientoTotalComponent_Factory(t) { return new (t || ConocimientoTotalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
ConocimientoTotalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConocimientoTotalComponent, selectors: [["app-conocimiento-total"]], decls: 30, vars: 10, consts: [["id", "conocimiento-total", 1, "formulario-container"], [1, "titulo"], ["autocomplete", "on", 1, "formularios"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "conocimiento", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [3, "categoryTitle", 4, "ngFor", "ngForOf"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "conocimiento"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "categoryTitle"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ConocimientoTotalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CONOCIMIENTO TECNICO / TECHNICIAL KNOWHOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConocimientoTotalComponent_Template_input_ngModelChange_12_listener($event) { return ctx.conocimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ConocimientoTotalComponent_mat_error_13_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientoTotalComponent_Template_button_click_14_listener() { return ctx.guardarConocimiento(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ConocimientoTotalComponent_app_conocimientos_16_Template, 1, 1, "app-conocimientos", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ConocimientoTotalComponent_th_20_Template, 2, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ConocimientoTotalComponent_td_21_Template, 2, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ConocimientoTotalComponent_th_23_Template, 2, 1, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ConocimientoTotalComponent_td_24_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ConocimientoTotalComponent_th_26_Template, 2, 1, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ConocimientoTotalComponent_td_27_Template, 4, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ConocimientoTotalComponent_tr_28_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ConocimientoTotalComponent_tr_29_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.indicaConocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.guardarCono);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_10__["ConocimientosComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.formularios[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbm9jaW1pZW50by10b3RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUUsNkJBQUE7O0FBQ0E7RUFDRSxvQ0FBQTtFQUFzQyw2QkFBQTtFQUN0Qyx1QkFBQTtFQUF5QixzQ0FBQTtBQUM3Qjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBQU47O0FBR0k7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQU4iLCJmaWxlIjoiY29ub2NpbWllbnRvLXRvdGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5cclxuICBcclxuLmZvcm11bGFyaW9zIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiAgXHJcbiAgLyogc3R5bGVzLmNzcyBvIHN0eWxlcy5zY3NzICovXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM0NFRkYgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIGZvbmRvICovXHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50aXR1bG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWxhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2x1bW5hIHtcclxuICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jYW1wbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "Dvxi":
/*!********************************!*\
  !*** ./src/assets/js/print.js ***!
  \********************************/
/*! exports provided: printDiv2, generateCvHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDiv2", function() { return printDiv2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCvHtml", function() { return generateCvHtml; });
function printDiv2(nombre, apellido, nacionalidad,edad, ciudad, pais, estudios, conocimientos, experiencias,cursos, idiomas, languageTexts,comentarios, skills) {

    var a = window.open("", "", "height=1000, width=1000");
    a.document.write("<html><body>");

    //Encabezado
    a.document
      .write(`<div style="display: block; align-items: center; width:1000;"> <div style="display: flex;
          margin: 15px 5px;">`);
    a.document.write(
        '<img style="width: 120;" src="./assets/images/logo.png" alt="logo">'
    );
    a.document.write(
      '<h3 style="flex: 1; text-align: right; font-family: \'Franklin Gothic Medium Cond\'; font-size: 18px; color: #31DCFE !important; margin-right: 100px;">Curriculum Vitae</h3>'
    );
    a.document.write("</div>");
    a.document.write("</div>");


    // CV
    a.document.write('<div style="margin-bottom:2%; text-align: left; margin-top:3%;">');
    a.document.write(
      '<label style="font-size: 25px; font-family: \'Franklin Gothic Medium Cond\';">Curriculum Vitae</label>'
    );
    a.document.write("</div>");

    // =========== 1. DATOS PERSONALES ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; ">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important;">'+ languageTexts.datospersonales +'</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    // =========== Apellido y Nombre ============
    a.document.write('<div style="display: flex; margin-top: 15px;">');
    a.document.write('<div style="font-weight: bold; flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.apellidonombre + ': ' + apellido + ' ' + nombre + '</label></div>');
    a.document.write("</div>");

    // =========== Nacionalidad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>'  + languageTexts.nacionalidad+  ': ' + nacionalidad + '</label></div>');
    a.document.write("</div>");

    // =========== Edad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.residenciaactual + ': ' + ciudad + '</label></div>');
    a.document.write("</div>");

    // =========== Edad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.edad + ': ' + edad + '</label></div>');
    a.document.write("</div>");

    // =========== ESTUDIOS CURSADOS ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important; ">' + languageTexts.estudioscursados + '</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    // Supongamos que estudios es un arreglo de objetos con la estructura { nombreUniversidad, carrera, generacion }
    // Iteramos sobre cada objeto en el arreglo
    estudios.forEach(estudio => {
      // =========== Universidad ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write(`<div style="font-weight: bold; flex:5; font-family: \'Arial\'; font-size: 18px;"><label>${estudio.universidad}</label></div>`);
      a.document.write("</div>");

      // =========== Carrera ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.carrera}: <strong>${estudio.carrera}</strong></label></div>`);
      a.document.write("</div>");


      // =========== Fecha inicio ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.fechaInicio}: <strong>${estudio.fechaIni.getFullYear()}</strong></label></div>`);
      a.document.write("</div>");

      // =========== Generacion ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');


      const fechaHoy = new Date();

      // Validación para reemplazar el año con "Actualmente" si la fecha coincide con la fecha de hoy
      if (estudio.generacion.getDate() === fechaHoy.getDate() &&
          estudio.generacion.getMonth() === fechaHoy.getMonth() &&
          estudio.generacion.getFullYear() === fechaHoy.getFullYear()) {
            a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.generacion}: <strong>${languageTexts.actualidad}</strong></label></div>`);
      } else {
        a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.generacion}: <strong>${estudio.generacion.getFullYear()}</strong></label></div>`);
      }

      a.document.write("</div>");
    });


    // =========== CONOCIMIENTOS ============


    // Si hay tanto conocimientos como skills, mostramos dos columnas
    if (conocimientos.length < 14 && skills.length > 0) {
        a.document.write('<div style="display: flex; width: 100%;">');


    // Columna de conocimientos
    a.document.write('<div style="flex: 1; margin-right: 20px;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%; border-bottom: 1px solid black;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important;">' + languageTexts.conocimientotec + '</label>');
    a.document.write('</div>');

    const numConocimientos = conocimientos.length;

    for (let j = 0; j < numConocimientos; j++) {
        const conocimiento = conocimientos[j];
        // =========== Conocimiento ============
        a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
        a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
        a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
        a.document.write('</div>');
    }

    a.document.write('</div>');

    // Columna de habilidades
    a.document.write('<div style="flex: 1; margin-left: 20px;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%; border-bottom: 1px solid black;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important;">' + languageTexts.skillEt + '</label>');
    a.document.write('</div>');

    const numSkills = skills.length;

    for (let j = 0; j < numSkills; j++) {
        const skill = skills[j];
        // =========== Skill ============
        a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
        a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
        a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${skill.skill}</label></div>`);
        a.document.write('</div>');
    }

    a.document.write('</div>');
    a.document.write('</div>');
    } else if (conocimientos.length > 13 && skills.length > 0) {
      a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
      a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
      a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important;">' + languageTexts.conocimientotec + '</label>');
      a.document.write('</div>'); // Cerramos la última columna
      a.document.write("</div>");
        // Si no hay skills, mostramos solo la columna de conocimientos como está actualmente
        a.document.write('<div style="display: flex;">');

        const numConocimientos = conocimientos.length;
        const numColumnas = Math.ceil(numConocimientos / 8); // Calcula el número de columnas necesarias

        for (let i = 0; i < numColumnas; i++) {
            // Abre una nueva columna
            a.document.write('<div style="flex: 1; margin-right: 20px;">');

            // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
            for (let j = i * 8; j < Math.min((i + 1) * 8, numConocimientos); j++) {
                const conocimiento = conocimientos[j];
                // =========== Conocimiento ============
                a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
                a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
                a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
                a.document.write('</div>');
            }

            // Si la columna no tiene 8 conocimientos, añade espacios en blanco
            const numConocimientosEnColumna = Math.min(numConocimientos - i * 8, 8);
            for (let k = numConocimientosEnColumna; k < 8; k++) {
                a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
            }

            // Cierra la columna actual
            a.document.write('</div>');
        }
        a.document.write('</div>');
        a.document.write('</div>');




        a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
        a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
        a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important;">' + languageTexts.skillEt + '</label>');
        a.document.write('</div>');
        a.document.write("</div>");

        // Si no hay skills, mostramos solo la columna de conocimientos como está actualmente
        a.document.write('<div style="display: flex;">');

        const numSkills = skills.length;
        const numColumnasS = Math.ceil(numSkills / 10); // Calcula el número de columnas necesarias

        for (let i = 0; i < numColumnasS; i++) {
            // Abre una nueva columna
            a.document.write('<div style="flex: 1; margin-right: 20px;">');

            // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
            for (let j = i * 8; j < Math.min((i + 1) * 10, numSkills); j++) {
                const skill = skills[j];
                // =========== Conocimiento ============
                a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
                a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
                a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${skill.skill}</label></div>`);
                a.document.write('</div>');
            }

            // Si la columna no tiene 8 conocimientos, añade espacios en blanco
            const numSkillsEnColumna = Math.min(numSkills - i * 10, 10);
            for (let k = numSkillsEnColumna; k < 10; k++) {
                a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
            }

            // Cierra la columna actual
            a.document.write('</div>');
        }


        a.document.write('</div>'); // Cierra el contenedor de la única columna

    } else {
      a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
      a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
      a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important;">' + languageTexts.conocimientotec + '</label>');
      a.document.write('</div>'); // Cerramos la última columna
      a.document.write("</div>");
        // Si no hay skills, mostramos solo la columna de conocimientos como está actualmente
        a.document.write('<div style="display: flex;">');

        const numConocimientos = conocimientos.length;
        const numColumnas = Math.ceil(numConocimientos / 8); // Calcula el número de columnas necesarias

        for (let i = 0; i < numColumnas; i++) {
            // Abre una nueva columna
            a.document.write('<div style="flex: 1; margin-right: 20px;">');

            // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
            for (let j = i * 8; j < Math.min((i + 1) * 8, numConocimientos); j++) {
                const conocimiento = conocimientos[j];
                // =========== Conocimiento ============
                a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
                a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
                a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
                a.document.write('</div>');
            }

            // Si la columna no tiene 8 conocimientos, añade espacios en blanco
            const numConocimientosEnColumna = Math.min(numConocimientos - i * 8, 8);
            for (let k = numConocimientosEnColumna; k < 8; k++) {
                a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
            }

            // Cierra la columna actual
            a.document.write('</div>');
        }

        a.document.write('</div>'); // Cierra el contenedor de la única columna
    }


    // =========== EXPERIENCIA LAB ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important; ">'+languageTexts.experiencialab+'</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    function capitalizarPrimeraLetra(cadena) {
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

    // Iteramos sobre cada objeto en el arreglo
    experiencias.forEach(experiencia => {
      // =========== Puesto ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.puesto+': <strong>'+experiencia.puesto+'</strong></label></div>');
      a.document.write("</div>");

      // =========== Empresa ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.empresa+': <strong>'+experiencia.empresa+'</strong></label></div>');
      a.document.write("</div>");

      // =========== Tiempo ============
      // Convertir las fechas a objetos de fecha JavaScri

      const fechaInicio = new Date(experiencia.fechaIni);
      const fechaFin = new Date(experiencia.fechaFin);

      // Obtener el mes y el año actual
      const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
      const añoActual = new Date().getFullYear();

      // Extraer el mes y el año de cada fecha
      const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
      const añoInicio = fechaInicio.getFullYear();
      let mesFin, añoFin;

      // Verificar si la fecha fin es igual al mes y año actuales
      if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
          mesFin = languageTexts.actualidad;
          añoFin = "";
      } else {
          mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
          añoFin = fechaFin.getFullYear();
      }

      // Construir la cadena de tiempo formateada
      const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

      // Escribir en el documento
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.fecha+': <strong>'+tiempoFormateado+'</strong></label></div>');
      a.document.write("</div>");


      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style=" flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + experiencia.descripcion + '</label></div>');
      a.document.write("</div>");
      a.document.write("</div>");
    });


    // Verificar si hay cursos antes de escribir el contenido
    if (cursos.length > 0) {
      // =========== CURSOS ============
      a.document.write(
          '<div style="display: flex; border-bottom: 1px solid black;">'
      );
      a.document.write('<div style="display: flex; margin-top:3%;">');
      a.document.write(
          '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important; ">'+languageTexts.otrosEstudios+'</label>'
      );
      a.document.write("</div>");
      a.document.write("</div>");

      // Iteramos sobre cada objeto en el arreglo
      cursos.forEach(curso => {
          // =========== nombre ============
          a.document.write('<div style="display: flex; margin-top: 15px;">');
          a.document.write(`<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>${curso.nombre}</label></div>`);
          a.document.write("</div>");

          // =========== Tiempo ============
          // Convertir las fechas a objetos de fecha JavaScri

          const fechaInicio = new Date(curso.fechaIni);
          const fechaFin = new Date(curso.fechaFin);

          // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
        const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
        const añoInicio = fechaInicio.getFullYear();
        let mesFin, añoFin;

        // Verificar si la fecha fin es igual al mes y año actuales
        if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
            mesFin = languageTexts.actualidad;
            añoFin = "";
        } else {
            mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
            añoFin = fechaFin.getFullYear();
        }

          // Construir la cadena de tiempo formateada
          const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

          // =========== organizacion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="font-weight: bold; flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.organizacion}: ${curso.organizacion}</label></div>`);
          a.document.write(`<div style="font-weight: bold; flex:8; font-family: \'Arial\'; font-size: 18px;"><label>${tiempoFormateado}</label></div>`);
          a.document.write("</div>");

          // =========== descripcion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.descripcion}: ${curso.descripcion}</label></div>`);
          a.document.write("</div>");

          // =========== Entidad ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.entidad}: ${curso.entidad}</label></div>`);
          a.document.write("</div>");

                // =========== Horas ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.tiempodeEst}: ${curso.tiempoEstudio}</label></div>`);
          a.document.write("</div>");

          a.document.write("</div>");
      });
    }

    // =========== IDIOMAS ============
    a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important; ">'+languageTexts.idiomas+'</label>');
    a.document.write('</div>'); // Cerramos la última columna
    a.document.write("</div>");

    a.document.write('<div style="display: flex;">');

    const numIdiomas = idiomas.length;
    const numColumnasI = Math.ceil(numIdiomas / 8); // Calcula el número de columnas necesarias

    for (let i = 0; i < numColumnasI; i++) {
          // Abre una nueva columna
          a.document.write('<div style="flex: 1; margin-right: 20px;">');

          // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
          for (let j = i * 8; j < Math.min((i + 1) * 8, numIdiomas); j++) {
              const idioma = idiomas[j];
              // =========== Conocimiento ============
              a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
              a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
              a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${idioma.idioma + ' - '+ idioma.nivel}</label></div>`);
              a.document.write('</div>');
          }

          // Si la columna no tiene 8 conocimientos, añade espacios en blanco
          const numIdiomasEnColumna = Math.min(numIdiomas - i * 8, 8);
          for (let k = numIdiomasEnColumna; k < 8; k++) {
              a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
          }

          // Cierra la columna actual
          a.document.write('</div>');
      }

      a.document.write('</div>');

      if (comentarios != "") {
        // =========== 9. COMENTARIOS ============
        a.document.write(
          '<div style="display: flex; border-bottom: 1px solid black;">'
        );
        a.document.write('<div style="display: flex; margin-top:3%;">');
        a.document.write(
          '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;  color: #3D5FEA !important;">'+languageTexts.comentariotTitulo+'</label>'
        );
        a.document.write("</div>");
        a.document.write("</div>");

        // =========== Nota ============
        a.document.write('<div style="display: flex; margin-top: 15px;">');
        a.document.write('<div style=" flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.comentarios + ': ' + comentarios + '</label></div>');
        a.document.write("</div>");
      }

    a.document.write("</body></html>");


    a.document.close();
    setTimeout(function () {
      a.print();
    }, 1000);
  }

  function generateCvHtml(nombre, apellido, nacionalidad, edad, ciudad, pais, estudios, conocimientos, experiencias, cursos, idiomas, languageTexts, comentarios, skills) {
    let htmlContent = `<div class="cv-content">`;

    // Encabezado
    htmlContent += `<div class="header">
        <div style="display: flex; margin: 15px 5px;">
          <img class="header-logo" src="./assets/images/logo.png" alt="logo">
          <h3 class="header-title">Curriculum Vitae</h3>
        </div>
      </div>
      <div style="margin-bottom: 2%; text-align: left; margin-top: 3%;">
        <label style="font-size: 25px; font-family: 'Franklin Gothic Medium Cond';">Curriculum Vitae</label>
      </div>
      <div class="section">
        <label class="section-title">${languageTexts.datospersonales}</label>
      </div>
      <div class="section-content">
        <div style="flex: 10;"><label>${languageTexts.apellidonombre}: ${apellido} ${nombre}</label></div>
      </div>
      <div class="section-content">
        <div style="flex: 6;"><label>${languageTexts.nacionalidad}: ${nacionalidad}</label></div>
      </div>
      <div class="section-content">
        <div style="flex: 6;"><label>${languageTexts.residenciaactual}: ${ciudad}</label></div>
      </div>
      <div class="section-content">
        <div style="flex: 6;"><label>${languageTexts.edad}: ${edad}</label></div>
      </div>
      <div class="section">
        <label class="section-title">${languageTexts.estudioscursados}</label>
      </div>
  `;

  estudios.forEach(estudio => {
    htmlContent += `
      <div class="section-content">
        <div style="flex: 5;"><label>${estudio.universidad}</label></div>
      </div>
      <div class="section-content">
        <div style="flex: 1;"><label>${languageTexts.carrera}: <strong>${estudio.carrera}</strong></label></div>
      </div>
      <div class="section-content">
        <div style="flex: 2;"><label>${languageTexts.fechaInicio}: <strong>${estudio.fechaIni.getFullYear()}</strong></label></div>
      </div>
      <div class="section-content">
        <div style="flex: 2;"><label>${languageTexts.generacion}: <strong>${estudio.generacion.getFullYear()}</strong></label></div>
      </div>
    `;
  });

  htmlContent += `
    <div class="section">
      <label class="section-title">${languageTexts.conocimientotec}</label>
    </div>
  `;

  conocimientos.forEach(conocimiento => {
    htmlContent += `
      <div class="list-item">
        <label>•</label>
        <label>${conocimiento.conocimiento}</label>
      </div>
    `;
  });

  htmlContent += `
    <div class="section">
      <label class="section-title">${languageTexts.experiencialab}</label>
    </div>
  `;

  experiencias.forEach(experiencia => {
    htmlContent += `
      <div class="section-content">
        <label>${languageTexts.puesto}: <strong>${experiencia.puesto}</strong></label>
      </div>
      <div class="section-content">
        <label>${languageTexts.empresa}: <strong>${experiencia.empresa}</strong></label>
      </div>
      <div class="section-content">
        <label>${languageTexts.fecha}: <strong>${new Date(experiencia.fechaIni).toLocaleString('default', { month: 'long' })} ${new Date(experiencia.fechaIni).getFullYear()} - ${new Date(experiencia.fechaFin).toLocaleString('default', { month: 'long' })} ${new Date(experiencia.fechaFin).getFullYear()}</strong></label>
      </div>
      <div>
        <label>${languageTexts.logroet}:</label>
        <ul>
    `;

    experiencia.actividades.forEach(actividad => {
      htmlContent += `<li>${actividad}</li>`;
    });

    htmlContent += `
        </ul>
        <label>${languageTexts.funcionet}:</label>
        <ul>
    `;

    experiencia.funciones.forEach(funcion => {
      htmlContent += `<li>${funcion}</li>`;
    });

    htmlContent += `
        </ul>
      </div>
    `;
  });

  if (cursos.length > 0) {
    htmlContent += `
      <div class="section">
        <label class="section-title">${languageTexts.otrosEstudios}</label>
      </div>
    `;

    cursos.forEach(curso => {
      htmlContent += `
        <div class="section-content">
          <label>${curso.nombre}</label>
        </div>
        <div class="section-content">
          <label>${languageTexts.organizacion}: ${curso.organizacion}</label>
          <label>${new Date(curso.fechaIni).toLocaleString('default', { month: 'long' })} ${new Date(curso.fechaIni).getFullYear()} - ${new Date(curso.fechaFin).toLocaleString('default', { month: 'long' })} ${new Date(curso.fechaFin).getFullYear()}</label>
        </div>
        <div class="section-content">
          <label>${languageTexts.descripcion}: ${curso.descripcion}</label>
        </div>
        <div class="section-content">
          <label>${languageTexts.entidad}: ${curso.entidad}</label>
        </div>
        <div class="section-content">
          <label>${languageTexts.tiempodeEst}: ${curso.tiempoEstudio}</label>
        </div>
      `;
    });
  }

  htmlContent += `
    <div class="section">
      <label class="section-title">${languageTexts.idiomas}</label>
    </div>
  `;

  idiomas.forEach(idioma => {
    htmlContent += `
      <div class="list-item">
        <label>•</label>
        <label>${idioma.idioma + ' - '+ idioma.nivel}</label>
      </div>
    `;
  });

  if (comentarios) {
    htmlContent += `
      <div class="section">
        <label class="section-title">${languageTexts.comentarios}</label>
      </div>
      <div class="section-content">
        <label>${comentarios}</label>
      </div>
    `;
  }
  return htmlContent;
}


/***/ }),

/***/ "EQYB":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../personal/personal.component */ "m2WJ");
/* harmony import */ var _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../idiomas/idiomas.component */ "OPXo");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skills/skills.component */ "fGbd");
/* harmony import */ var _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../conocimiento-total/conocimiento-total.component */ "DNzp");
/* harmony import */ var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../estudios/estudios.component */ "Co0O");
/* harmony import */ var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../experiencia/experiencia.component */ "+/Dj");
/* harmony import */ var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cursos/cursos.component */ "wxiI");
/* harmony import */ var _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comentarios/comentarios.component */ "+kO/");









class FormularioComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormularioComponent.ɵfac = function FormularioComponent_Factory(t) { return new (t || FormularioComponent)(); };
FormularioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormularioComponent, selectors: [["app-formulario"]], decls: 16, vars: 0, consts: [[1, "formulario-container"]], template: function FormularioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-idiomas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-conocimiento-total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-estudios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-cursos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-comentarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_personal_personal_component__WEBPACK_IMPORTED_MODULE_1__["PersonalComponent"], _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_2__["IdiomasComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"], _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_4__["ConocimientoTotalComponent"], _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_5__["EstudiosComponent"], _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_6__["ExperienciaComponent"], _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_7__["CursosComponent"], _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_8__["ComentariosComponent"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  \n  padding: 20px;\n  \n  margin-bottom: 20px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUF3QixvQkFBQTtFQUN4QixhQUFBO0VBQWUsOENBQUE7RUFDZixtQkFBQTtFQUFxQix3Q0FBQTtBQUl6QiIsImZpbGUiOiJmb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm11bGFyaW8tY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEFncmVnYSB1biBib3JkZSAqL1xyXG4gICAgcGFkZGluZzogMjBweDsgLyogQWdyZWdhIHVuIGVzcGFjaW8gYWxyZWRlZG9yIGRlbCBjb250ZW5pZG8gKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFncmVnYSBlc3BhY2lvIGVuIGxhIHBhcnRlIGluZmVyaW9yICovXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "NLVW":
/*!**************************************************************!*\
  !*** ./src/app/pdf-one-content/pdf-one-content.component.ts ***!
  \**************************************************************/
/*! exports provided: PdfOneContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfOneContentComponent", function() { return PdfOneContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PdfOneContentComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idioma_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", idioma_r6.idioma, " - ", idioma_r6.nivel, "");
} }
function PdfOneContentComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estudio_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estudio_r7.universidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.languageTexts.carrera, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estudio_r7.carrera);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.languageTexts.fechaInicio, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, estudio_r7.fechaIni, "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.languageTexts.generacion, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.isToday(estudio_r7.generacion) ? ctx_r1.languageTexts.actualidad : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 10, estudio_r7.generacion, "yyyy"), " ");
} }
function PdfOneContentComponent_div_35_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conocimiento_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", conocimiento_r11.conocimiento, " ");
} }
function PdfOneContentComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PdfOneContentComponent_div_35_div_1_li_4_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.languageTexts.conocimientotec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.conocimientos);
} }
function PdfOneContentComponent_div_35_div_2_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r13.skill, " ");
} }
function PdfOneContentComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PdfOneContentComponent_div_35_div_2_li_4_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.languageTexts.skillEt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.skills);
} }
function PdfOneContentComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PdfOneContentComponent_div_35_div_1_Template, 5, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PdfOneContentComponent_div_35_div_2_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.conocimientos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.skills.length > 0);
} }
function PdfOneContentComponent_div_36_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conocimiento_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conocimiento_r16.conocimiento);
} }
function PdfOneContentComponent_div_36_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r17.skill);
} }
function PdfOneContentComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PdfOneContentComponent_div_36_div_5_Template, 4, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PdfOneContentComponent_div_36_div_10_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.languageTexts.conocimientotec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.conocimientos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.languageTexts.skillEt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.skills);
} }
function PdfOneContentComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experiencia_r18 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.languageTexts.puesto, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experiencia_r18.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.languageTexts.empresa, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experiencia_r18.empresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.languageTexts.fecha, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", experiencia_r18.fechaIni ? ctx_r4.capitalizeFirstLetter(experiencia_r18.fechaIni) : "", " - ", experiencia_r18.fechaFin ? ctx_r4.capitalizeFirstLetter(experiencia_r18.fechaFin) : ctx_r4.languageTexts.actualidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experiencia_r18.descripcion);
} }
function PdfOneContentComponent_div_41_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curso_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](curso_r20.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r19.languageTexts.organizacion, ": ", curso_r20.organizacion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r19.capitalizeFirstLetter(curso_r20.fechaIni), " - ", curso_r20.fechaFin ? ctx_r19.capitalizeFirstLetter(curso_r20.fechaFin) : ctx_r19.languageTexts.actualidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r19.languageTexts.descripcion, ": ", curso_r20.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r19.languageTexts.entidadet, ": ", curso_r20.entidad, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r19.languageTexts.tiempodeEst, ": ", curso_r20.tiempoEstudio, "");
} }
function PdfOneContentComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PdfOneContentComponent_div_41_div_3_Template, 21, 11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.languageTexts.otrosEstudios);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.cursos);
} }
class PdfOneContentComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selectedLanguage = 'es';
        this.apellido = '';
        this.nombre = '';
        this.nacionalidad = '';
        this.ciudad = '';
        this.pais = '';
        this.edad = 0;
        this.tiempoExperiencia = 0;
        this.estudios = [
            { universidad: 'UNAM', carrera: 'Ingeniería', fechaIni: new Date(2010, 1, 1), generacion: new Date(2014, 1, 1) }
        ];
        this.experiencias = [{ puesto: 'UNAM', empresa: 'Ingeniería', descripcion: '', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1) }];
        this.conocimientos = [{ conocimiento: 'Angular' }];
        this.skills = [{ skill: 'Trabajo en equipo' }];
        this.cursos = [{ nombre: 'Ingeniería', organizacion: '', descripcion: '', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1), entidad: '', tiempoEstudio: '' }];
        this.idiomas = [{ idioma: '', nivel: '' }];
        this.comentarios = '';
        this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
        this.selectedLanguage = this.languageService.language;
        this.dataFormularioService.sendNombre$.subscribe({
            next: (nombre) => {
                this.nombre = nombre;
            }
        });
        this.dataFormularioService.sendApellidos$.subscribe({
            next: (apellido) => {
                this.apellido = apellido;
            }
        });
        this.dataFormularioService.sendNacionalidad$.subscribe({
            next: (nacionalidad) => {
                this.nacionalidad = nacionalidad;
            }
        });
        this.dataFormularioService.sendCiudad$.subscribe({
            next: (ciudad) => {
                this.ciudad = ciudad;
            }
        });
        this.dataFormularioService.sendPais$.subscribe({
            next: (pais) => {
                this.pais = pais;
            }
        });
        this.dataFormularioService.sendEdad$.subscribe({
            next: (edad) => {
                this.edad = edad;
            }
        });
        this.dataFormularioService.sendTiempoExp$.subscribe({
            next: (tiempoExperiencia) => {
                this.tiempoExperiencia = tiempoExperiencia;
            }
        });
        this.dataFormularioService.sendConocimientos$.subscribe({
            next: (conocimientos) => {
                this.conocimientos = conocimientos;
            }
        });
        this.dataFormularioService.sendSkills$.subscribe({
            next: (skills) => {
                this.skills = skills;
            }
        });
        this.dataFormularioService.sendEstudios$.subscribe({
            next: (estudios) => {
                this.estudios = estudios;
            }
        });
        this.dataFormularioService.sendExperiencias$.subscribe({
            next: (experiencias) => {
                this.experiencias = experiencias;
            }
        });
        this.dataFormularioService.sendCursos$.subscribe({
            next: (cursos) => {
                this.cursos = cursos;
            }
        });
        this.dataFormularioService.sendIdiomas$.subscribe({
            next: (idiomas) => {
                this.idiomas = idiomas;
            }
        });
        this.dataFormularioService.sendComentarios$.subscribe({
            next: (comentarios) => {
                this.comentarios = comentarios;
            }
        });
    }
    ngOnInit() {
    }
    isToday(date) {
        const today = new Date();
        return (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear());
    }
    capitalizeFirstLetter(text) {
        if (!text) {
            return ''; // Devuelve una cadena vacía si el texto es null o undefined
        }
        const monthIndex = text.getMonth(); // Obtiene el índice del mes (0-11)
        const year = text.getFullYear(); // Obtiene el año
        const month = this.languageTexts.mesesArray[monthIndex] || '';
        const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1); // Capitaliza la primera letra
        return `${capitalizedMonth} ${year}`;
    }
}
PdfOneContentComponent.ɵfac = function PdfOneContentComponent_Factory(t) { return new (t || PdfOneContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_1__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
PdfOneContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfOneContentComponent, selectors: [["app-pdf-one-content"]], decls: 48, vars: 24, consts: [["id", "cv-container", 1, "cv-container"], [1, "header", "pdf-section"], ["src", "./assets/images/logo.png", "alt", "logo", 1, "logo"], [1, "title"], [1, "cv-title", "pdf-section"], [1, "section", "pdf-section"], [1, "detail"], [1, "detail", "idiomas-detail"], [4, "ngFor", "ngForOf"], ["class", "estudio", 4, "ngFor", "ngForOf"], ["class", "skills-section-columns pdf-section", 4, "ngIf"], ["class", "knowledge-and-skills pdf-section", 4, "ngIf"], ["class", "experience", 4, "ngFor", "ngForOf"], ["class", "section pdf-section", 4, "ngIf"], [1, "estudio"], [1, "label"], [1, "skills-section-columns", "pdf-section"], ["class", "column conocimientos", 4, "ngIf"], ["class", "column skills", 4, "ngIf"], [1, "column", "conocimientos"], [1, "conocimientos-list"], [1, "column", "skills"], [1, "skills-list"], [1, "knowledge-and-skills", "pdf-section"], [1, "knowledge-row"], [1, "knowledge-columns"], ["class", "knowledge-column", 4, "ngFor", "ngForOf"], [1, "skills-row"], [1, "skills-columns"], ["class", "skills-column", 4, "ngFor", "ngForOf"], [1, "knowledge-column"], [1, "skills-column"], [1, "experience"], ["class", "course", 4, "ngFor", "ngForOf"], [1, "course"]], template: function PdfOneContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Curriculum Vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Curriculum Vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PdfOneContentComponent_li_24_Template, 2, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PdfOneContentComponent_div_34_Template, 21, 13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PdfOneContentComponent_div_35_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PdfOneContentComponent_div_36_Template, 11, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PdfOneContentComponent_div_40_Template, 19, 8, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PdfOneContentComponent_div_41_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.datospersonales);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.languageTexts.apellidonombre, ": ", ctx.apellido, " ", ctx.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.languageTexts.tiempoExperiencia, ": ", ctx.tiempoExperiencia, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.languageTexts.nacionalidad, ": ", ctx.nacionalidad, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.languageTexts.idiomas, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.idiomas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.languageTexts.residenciaactual, ": ", ctx.ciudad, " , ", " " + ctx.pais, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.languageTexts.edad, ": ", ctx.edad, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.estudioscursados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estudios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conocimientos.length < 14 && ctx.skills.length < 14 && ctx.conocimientos.length > 0 && ctx.skills.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conocimientos.length > 0 && ctx.skills.length === 0 || ctx.skills.length > 0 && ctx.conocimientos.length === 0 || (ctx.conocimientos.length > 13 || ctx.skills.length > 13));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.experiencialab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cursos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.comentariotTitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comentarios);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap\");\n\n.cv-container[_ngcontent-%COMP%] {\n  width: 8.5in;\n  \n  height: 11in;\n  \n  padding-top: 0.1in;\n  \n  padding-left: 0.5in;\n  padding-right: 0.5in;\n  padding-bottom: 0.5in;\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n  \n  background-color: #fff;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 0;\n}\n\n.cv-container[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .conocimientos2[_ngcontent-%COMP%], .skills2[_ngcontent-%COMP%], .estudio[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  \n  overflow-wrap: break-word;\n  \n}\n\n.detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: normal;\n  \n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  \n  padding: 0;\n  font-size: 14px;\n  \n  font-family: \"Libre Franklin\", sans-serif;\n  color: #31DCFE;\n  font-weight: bold;\n}\n.logo[_ngcontent-%COMP%] {\n  max-height: 80px;\n  \n}\n\n.cv-title[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1px;\n}\n.cv-title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Libre Franklin\", sans-serif;\n}\n.section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .conocimientos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .conocimientos2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .skills2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .skills[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #1d40cc;\n  font-family: \"Merriweather\", serif;\n  font-weight: bold;\n  font-size: 15px;\n}\n.section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.detail[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n\n.skills-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.skills-section.two-columns[_ngcontent-%COMP%] {\n  display: flex;\n  \n  flex-wrap: wrap;\n  gap: 20px;\n  \n  justify-content: space-between;\n}\n\n.skills-section.two-columns[_ngcontent-%COMP%]   .conocimientos[_ngcontent-%COMP%], .skills-section.two-columns[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\n  flex: 1 1 48%;\n  \n  box-sizing: border-box;\n  \n  max-width: 48%;\n  \n  width: 100%;\n  \n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\nh4[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 2px;\n  \n  margin-bottom: 20px;\n  \n}\n\nh4[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  \n  height: 1px;\n  \n  background-color: #000;\n  \n}\n\n.skills-section-columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  \n  justify-content: space-between;\n  \n  gap: 20px;\n  \n}\n\n.skills-section-columns[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  flex: 1 1 48%;\n  \n  box-sizing: border-box;\n  \n  max-width: 48%;\n  \n}\n\n.conocimientos-list[_ngcontent-%COMP%], .skills-list[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  \n  padding-left: 20px;\n  \n  margin: 0;\n}\n.conocimientos-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .skills-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  \n}\n\n.skills-section-columns[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  \n  font-size: 15px;\n  color: #1d40cc;\n  font-family: \"Merriweather\", serif;\n  font-weight: bold;\n}\n\n.knowledge-and-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  \n}\n\n.knowledge-row[_ngcontent-%COMP%], .skills-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.knowledge-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .skills-row[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-weight: bold;\n  color: #1d40cc;\n  font-family: \"Merriweather\", serif;\n}\n\n.knowledge-columns[_ngcontent-%COMP%], .skills-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  \n  column-gap: 20px;\n  \n  row-gap: 1px;\n  \n}\n\n.knowledge-column[_ngcontent-%COMP%], .skills-column[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin: 0;\n}\n\n.knowledge-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .skills-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  \n  padding-left: 10px;\n  \n  margin: 0;\n}\n\n.knowledge-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .skills-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  \n  color: #333;\n  \n}\n\n.knowledge-columns[_ngcontent-%COMP%]::after, .skills-columns[_ngcontent-%COMP%]::after {\n  content: \"\";\n  \n  grid-column: span 1;\n  \n  visibility: hidden;\n  \n}\n.detail.idiomas-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n}\n.detail.idiomas-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  \n  column-count: 3;\n  \n  column-gap: 20px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBkZi1vbmUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUixtSEFBQTtBQUNBLGlNQUFBO0FBRVIsNkNBQUE7QUFDQTtFQUNFLFlBQUE7RUFBaUIsbUJBQUE7RUFDakIsWUFBQTtFQUFpQixrQkFBQTtFQUNqQixrQkFBQTtFQUFxQixvREFBQTtFQUNyQixtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQWdDLDBCQUFBO0VBQ2hDLHNCQUFBO0VBQXdCLGlCQUFBO0VBQ3hCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBTUY7QUFIQSxxRUFBQTtBQUNBOzs7OztFQUtFLHFCQUFBO0VBQXVCLCtDQUFBO0VBQ3ZCLHlCQUFBO0VBQTJCLDJEQUFBO0FBUTdCO0FBTEEsa0ZBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQXFCLDJDQUFBO0FBU3ZCO0FBTEEscUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUFXLHFDQUFBO0VBQ1gsVUFBQTtFQUNBLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIseUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFVRjtBQVBBO0VBQ0UsZ0JBQUE7RUFBa0IsK0JBQUE7QUFXcEI7QUFSQSx3QkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVdGO0FBUkE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7QUFXRjtBQVJBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBV0Y7QUFSQTtFQUNFLG1CQUFBO0FBV0Y7QUFSQSw2QkFBQTtBQUNBO0VBQ0Usa0JBQUE7QUFXRjtBQVJBLHVDQUFBO0FBQ0EseUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFXRjtBQVJBLHlGQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQWdCLCtEQUFBO0VBQ2hCLGVBQUE7RUFDQSxTQUFBO0VBQVcsOENBQUE7RUFDWCw4QkFBQTtBQWFGO0FBVkEsNEVBQUE7QUFDQTs7RUFFRSxhQUFBO0VBQWdCLDRDQUFBO0VBQ2hCLHNCQUFBO0VBQXdCLG1FQUFBO0VBQ3hCLGNBQUE7RUFBZ0IseURBQUE7RUFDaEIsV0FBQTtFQUFjLGlGQUFBO0FBaUJoQjtBQWRBLG9EQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFpQkY7QUFkQTtFQUNFLGtCQUFBO0FBaUJGO0FBZEEsMkNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFBcUIsc0NBQUE7RUFDckIsbUJBQUE7RUFBcUIsK0JBQUE7QUFtQnZCO0FBaEJBLGdDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFBYSx5REFBQTtFQUNiLFdBQUE7RUFBYSx1QkFBQTtFQUNiLHNCQUFBO0VBQXdCLHNCQUFBO0FBc0IxQjtBQW5CQSxtREFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQW1CLG9EQUFBO0VBQ25CLDhCQUFBO0VBQWdDLGlDQUFBO0VBQ2hDLFNBQUE7RUFBVyw2QkFBQTtBQXlCYjtBQXRCQSwwQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUFlLDZEQUFBO0VBQ2Ysc0JBQUE7RUFBd0IsK0NBQUE7RUFDeEIsY0FBQTtFQUFnQiwyQkFBQTtBQTRCbEI7QUF6QkEsa0NBQUE7QUFDQTs7RUFFRSxxQkFBQTtFQUF1QixzQkFBQTtFQUN2QixrQkFBQTtFQUFvQixpQ0FBQTtFQUNwQixTQUFBO0FBOEJGO0FBM0JBOztFQUVFLGtCQUFBO0VBQW9CLHdDQUFBO0FBK0J0QjtBQTVCQSxtQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFBcUIsZ0NBQUE7RUFDckIsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBZ0NGO0FBN0JBLHlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQWUseURBQUE7QUFpQ2pCO0FBOUJBLHdDQUFBO0FBQ0E7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FBaUNGO0FBOUJBOztFQUVFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUFpQ0Y7QUE5QkEsd0NBQUE7QUFDQTs7RUFFRSxhQUFBO0VBQ0EscUNBQUE7RUFBdUMsK0JBQUE7RUFDdkMsZ0JBQUE7RUFBa0IsNkJBQUE7RUFDbEIsWUFBQTtFQUFjLDBCQUFBO0FBb0NoQjtBQWpDQSw4Q0FBQTtBQUNBOztFQUVFLGtCQUFBO0VBQ0EsU0FBQTtBQW9DRjtBQWpDQSxnQ0FBQTtBQUNBOztFQUVFLHFCQUFBO0VBQXVCLHFCQUFBO0VBQ3ZCLGtCQUFBO0VBQW9CLHdEQUFBO0VBQ3BCLFNBQUE7QUFzQ0Y7QUFuQ0Esb0NBQUE7QUFDQTs7RUFFRSxrQkFBQTtFQUFvQiw4Q0FBQTtFQUNwQixXQUFBO0VBQWEsbUJBQUE7QUF3Q2Y7QUFyQ0EsMERBQUE7QUFDQTs7RUFFRSxXQUFBO0VBQWEsK0JBQUE7RUFDYixtQkFBQTtFQUFxQixzQkFBQTtFQUNyQixrQkFBQTtFQUFvQixrQ0FBQTtBQTJDdEI7QUF4Q0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBMkNGO0FBeENBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUFrQixtQ0FBQTtFQUNsQixlQUFBO0VBQWlCLHVCQUFBO0VBQ2pCLGdCQUFBO0VBQWtCLDJCQUFBO0FBOENwQiIsImZpbGUiOiJwZGYtb25lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrRnJhbmtsaW46aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrRnJhbmtsaW46aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9TWVycml3ZWF0aGVyOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcIik7XG4vKiBFc3RhYmxlY2VyIGVsIGNvbnRlbmVkb3IgZGUgdGFtYcOxbyBjYXJ0YSAqL1xuLmN2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4LjVpbjtcbiAgLyogQW5jaG8gZGUgY2FydGEgKi9cbiAgaGVpZ2h0OiAxMWluO1xuICAvKiBBbHRvIGRlIGNhcnRhICovXG4gIHBhZGRpbmctdG9wOiAwLjFpbjtcbiAgLyogUmVkdWNpciBlc3BhY2lhZG8gZGVudHJvIGRlbCBjb250ZW5lZG9yIGEgMC41aW4gKi9cbiAgcGFkZGluZy1sZWZ0OiAwLjVpbjtcbiAgcGFkZGluZy1yaWdodDogMC41aW47XG4gIHBhZGRpbmctYm90dG9tOiAwLjVpbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAvKiBGdWVudGUgcHJlZGV0ZXJtaW5hZGEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLyogRm9uZG8gYmxhbmNvICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLyogQXNlZ3VyYSBxdWUgZWwgdGV4dG8gbGFyZ28gc2UgYWp1c3RlIHkgYmFqZSBhIGxhIHNpZ3VpZW50ZSBsw61uZWEgKi9cbi5jdi1jb250YWluZXIsXG4uc2VjdGlvbixcbi5jb25vY2ltaWVudG9zMixcbi5za2lsbHMyLFxuLmVzdHVkaW8ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC8qIFJvbXBlciBsYXMgcGFsYWJyYXMgbGFyZ2FzIHNpIGVzIG5lY2VzYXJpbyAqL1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAvKiBUYW1iacOpbiBhc2VndXJhIHF1ZSBlbCB0ZXh0byBzZSBkaXZpZGEgc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbi8qIFNpIGRlc2VhcyBjb250cm9sYXIgZWwgYWp1c3RlIGRlIHRleHRvIGVzcGVjw61maWNhbWVudGUgZGVudHJvIGRlIGxvcyBkZXRhbGxlcyAqL1xuLmRldGFpbCBzcGFuIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgLyogUGVybWl0ZSBxdWUgZWwgdGV4dG8gZmx1eWEgeSBzZSBhanVzdGUgKi9cbn1cblxuLyogQWp1c3RhciBlbCBsb2dvIGVuIGVsIGVuY2FiZXphZG8gKi9cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMDtcbiAgLyogRWxpbWluYXIgbcOhcmdlbmVzIGRlbCBlbmNhYmV6YWRvICovXG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogUmVkdWNpciBlbCB0YW1hw7FvIGRlIGxhIGZ1ZW50ZSAqL1xuICBmb250LWZhbWlseTogXCJMaWJyZSBGcmFua2xpblwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMxRENGRTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dvIHtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgLyogUmVkdWNpciBlbCB0YW1hw7FvIGRlbCBsb2dvICovXG59XG5cbi8qIFTDrXR1bG9zIHkgc2VjY2lvbmVzICovXG4uY3YtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5jdi10aXRsZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgRnJhbmtsaW5cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNlY3Rpb24gaDQsIC5jb25vY2ltaWVudG9zIGg0LCAuY29ub2NpbWllbnRvczIgaDQsIC5za2lsbHMyIGg0LCAuc2tpbGxzIGg0IHtcbiAgY29sb3I6ICMxZDQwY2M7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNlY3Rpb24gaDQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4vKiBEZXRhbGxlcyBkZSBjYWRhIHNlY2Npw7NuICovXG4uZGV0YWlsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBDb25vY2ltaWVudG9zIHkgU2tpbGxzIGVuIGNvbHVtbmFzICovXG4vKiBDb250ZW5lZG9yIGRlIGNvbm9jaW1pZW50b3MgeSBza2lsbHMgKi9cbi5za2lsbHMtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLyogQ3VhbmRvIGhheSBtZW5vcyBkZSAxNCBlbGVtZW50b3MsIGxvcyBjb25vY2ltaWVudG9zIHkgc2tpbGxzIHNlIG11ZXN0cmFuIGVuIGNvbHVtbmFzICovXG4uc2tpbGxzLXNlY3Rpb24udHdvLWNvbHVtbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBVc2Ftb3MgZmxleGJveCBwYXJhIGNvbG9jYXIgbG9zIGVsZW1lbnRvcyBlbiBsYSBtaXNtYSBmaWxhICovXG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xuICAvKiBFc3BhY2lvIGVudHJlIGNvbm9jaW1pZW50b3MgeSBoYWJpbGlkYWRlcyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIEFzZWd1cmFyc2UgZGUgcXVlIGFtYm9zLCBjb25vY2ltaWVudG9zIHkgc2tpbGxzLCB0ZW5nYW4gZWwgbWlzbW8gdGFtYcOxbyAqL1xuLnNraWxscy1zZWN0aW9uLnR3by1jb2x1bW5zIC5jb25vY2ltaWVudG9zLFxuLnNraWxscy1zZWN0aW9uLnR3by1jb2x1bW5zIC5za2lsbHMge1xuICBmbGV4OiAxIDEgNDglO1xuICAvKiBBbWJhcyBvY3VwYW4gNDglIGRlbCBlc3BhY2lvIGRpc3BvbmlibGUgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogQXNlZ3VyYSBxdWUgZWwgcGFkZGluZyB5IGVsIGJvcmRlIHNlIGN1ZW50ZW4gZGVudHJvIGRlbCB0YW1hw7FvICovXG4gIG1heC13aWR0aDogNDglO1xuICAvKiBMaW1pdGFyIGVsIGFuY2hvIG3DoXhpbW8gcGFyYSBldml0YXIgcXVlIHNlIGRlc2JvcmRlbiAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogQXNlZ3VyYSBxdWUgb2N1cGVuIGVsIDEwMCUgZGVsIGVzcGFjaW8gZGlzcG9uaWJsZSBkZW50cm8gZGUgc3VzIGNvbnRlbmVkb3JlcyAqL1xufVxuXG4vKiBFc3RpbG9zIGFkaWNpb25hbGVzIHBhcmEgbWVqb3JhciBsYSBsZWdpYmlsaWRhZCAqL1xudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vKiBFc3RpbG8gcGFyYSBsYSBsw61uZWEgZGViYWpvIGRlIGNhZGEgaDQgKi9cbmg0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAvKiBFc3BhY2lvIGVudHJlIGVsIHRleHRvIHkgbGEgbMOtbmVhICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8qIEVzcGFjaW8gZGViYWpvIGRlIGxhIGzDrW5lYSAqL1xufVxuXG4vKiBFc3RpbG8gcGFyYSBsYSBsw61uZWEgZGViYWpvICovXG5oNDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEhhY2UgcXVlIGxhIGzDrW5lYSBvY3VwZSB0b2RvIGVsIGFuY2hvIGRlbCBjb250ZW5lZG9yICovXG4gIGhlaWdodDogMXB4O1xuICAvKiBBbHR1cmEgZGUgbGEgbMOtbmVhICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIC8qIENvbG9yIGRlIGxhIGzDrW5lYSAqL1xufVxuXG4vKiBDb250ZW5lZG9yIHByaW5jaXBhbCBjb24gZmxleGJveCBwYXJhIGNvbHVtbmFzICovXG4uc2tpbGxzLXNlY3Rpb24tY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICAvKiBFdml0YSBxdWUgbGFzIGNvbHVtbmFzIHNlIGVudnVlbHZhbiBhIG90cmEgZmlsYSAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8qIEVzcGFjaWFkbyBlbnRyZSBsYXMgY29sdW1uYXMgKi9cbiAgZ2FwOiAyMHB4O1xuICAvKiBFc3BhY2lhZG8gZW50cmUgY29sdW1uYXMgKi9cbn1cblxuLyogRXN0aWxvIHBhcmEgbGFzIGNvbHVtbmFzIGluZGl2aWR1YWxlcyAqL1xuLnNraWxscy1zZWN0aW9uLWNvbHVtbnMgLmNvbHVtbiB7XG4gIGZsZXg6IDEgMSA0OCU7XG4gIC8qIENhZGEgY29sdW1uYSBvY3VwYSBhcHJveGltYWRhbWVudGUgZWwgNDglIGRlbCBjb250ZW5lZG9yICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIEluY2x1eWUgcGFkZGluZyB5IGJvcmRlIGVuIGVsIHRhbWHDsW8gdG90YWwgKi9cbiAgbWF4LXdpZHRoOiA0OCU7XG4gIC8qIExpbWl0YSBlbCBhbmNobyBtw6F4aW1vICovXG59XG5cbi8qIExpc3RhcyBkZW50cm8gZGUgbGFzIGNvbHVtbmFzICovXG4uY29ub2NpbWllbnRvcy1saXN0LFxuLnNraWxscy1saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAvKiBMaXN0YSBjb24gdmnDsWV0YXMgKi9cbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAvKiBJbmRlbnRhY2nDs24gcGFyYSBsYXMgdmnDsWV0YXMgKi9cbiAgbWFyZ2luOiAwO1xufVxuXG4uY29ub2NpbWllbnRvcy1saXN0IGxpLFxuLnNraWxscy1saXN0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvKiBFc3BhY2lvIGVudHJlIGVsZW1lbnRvcyBkZSBsYSBsaXN0YSAqL1xufVxuXG4vKiBUw610dWxvcyBkZW50cm8gZGUgbGFzIGNvbHVtbmFzICovXG4uc2tpbGxzLXNlY3Rpb24tY29sdW1ucyBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC8qIEVzcGFjaWFkbyBkZWJham8gZGVsIHTDrXR1bG8gKi9cbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzFkNDBjYztcbiAgZm9udC1mYW1pbHk6IFwiTWVycml3ZWF0aGVyXCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogQ29udGVuZWRvciBwcmluY2lwYWwgKi9cbi5rbm93bGVkZ2UtYW5kLXNraWxscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDIwcHg7XG4gIC8qIEVzcGFjaWFkbyBlbnRyZSBmaWxhcyBkZSBjb25vY2ltaWVudG9zIHkgaGFiaWxpZGFkZXMgKi9cbn1cblxuLyogRmlsYSBkZSBjb25vY2ltaWVudG9zIHkgaGFiaWxpZGFkZXMgKi9cbi5rbm93bGVkZ2Utcm93LFxuLnNraWxscy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ua25vd2xlZGdlLXJvdyBoNCxcbi5za2lsbHMtcm93IGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMWQ0MGNjO1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XG59XG5cbi8qIENvbmZpZ3VyYXIgY29udGVuZWRvciBlbiBjdWFkcsOtY3VsYSAqL1xuLmtub3dsZWRnZS1jb2x1bW5zLFxuLnNraWxscy1jb2x1bW5zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgLyogNCBjb2x1bW5hcyBkZSBpZ3VhbCB0YW1hw7FvICovXG4gIGNvbHVtbi1nYXA6IDIwcHg7XG4gIC8qIEVzcGFjaWFkbyBlbnRyZSBjb2x1bW5hcyAqL1xuICByb3ctZ2FwOiAxcHg7XG4gIC8qIEVzcGFjaWFkbyBlbnRyZSBmaWxhcyAqL1xufVxuXG4vKiBFc3RpbG8gcGFyYSBsb3MgZWxlbWVudG9zIGRlIGNhZGEgY29sdW1uYSAqL1xuLmtub3dsZWRnZS1jb2x1bW4sXG4uc2tpbGxzLWNvbHVtbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBBcGxpY2FyIHB1bnRpdG9zIGEgbGEgbGlzdGEgKi9cbi5rbm93bGVkZ2UtY29sdW1uIHVsLFxuLnNraWxscy1jb2x1bW4gdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gIC8qIE1vc3RyYXIgcHVudGl0b3MgKi9cbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvKiBFc3BhY2lhZG8gZW50cmUgZWwgYm9yZGUgeSBlbCBjb250ZW5pZG8gZGUgbGEgbGlzdGEgKi9cbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBFc3RpbG8gZGUgY2FkYSDDrXRlbSBkZSBsYSBsaXN0YSAqL1xuLmtub3dsZWRnZS1jb2x1bW4gbGksXG4uc2tpbGxzLWNvbHVtbiBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgLyogRXNwYWNpYWRvIGVudHJlIGxvcyBlbGVtZW50b3MgZGUgbGEgbGlzdGEgKi9cbiAgY29sb3I6ICMzMzM7XG4gIC8qIENvbG9yIGRlIHRleHRvICovXG59XG5cbi8qIEFsaW5lYXIgY29ycmVjdGFtZW50ZSBsb3MgZWxlbWVudG9zIGVuIGxhIMO6bHRpbWEgZmlsYSAqL1xuLmtub3dsZWRnZS1jb2x1bW5zOjphZnRlcixcbi5za2lsbHMtY29sdW1uczo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICAvKiBBw7FhZGlyIGVsZW1lbnRvcyBmaWN0aWNpb3MgKi9cbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcbiAgLyogT2N1cGEgdW5hIGNvbHVtbmEgKi9cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiBObyB2aXNpYmxlIHBlcm8gb2N1cGEgZXNwYWNpbyAqL1xufVxuXG4uZGV0YWlsLmlkaW9tYXMtZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMTVweDtcbn1cblxuLmRldGFpbC5pZGlvbWFzLWRldGFpbCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgLyogRWxpbWluYSBsb3MgcHVudG9zIGRlIGxhIGxpc3RhICovXG4gIGNvbHVtbi1jb3VudDogMztcbiAgLyogTsO6bWVybyBkZSBjb2x1bW5hcyAqL1xuICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAvKiBFc3BhY2lvIGVudHJlIGNvbHVtbmFzICovXG59Il19 */"] });


/***/ }),

/***/ "OPXo":
/*!**********************************************!*\
  !*** ./src/app/idiomas/idiomas.component.ts ***!
  \**********************************************/
/*! exports provided: IdiomasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomasComponent", function() { return IdiomasComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function IdiomasComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r15.viewValue, " ");
} }
function IdiomasComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.languageTexts.obligatorio, " ");
} }
function IdiomasComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r16.viewValue, " ");
} }
function IdiomasComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.languageTexts.obligatorio, " ");
} }
function IdiomasComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.languageTexts.idioma, " ");
} }
function IdiomasComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.idioma, " ");
} }
function IdiomasComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.languageTexts.nivel, " ");
} }
function IdiomasComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.nivel, " ");
} }
function IdiomasComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.languageTexts.eliminar, " ");
} }
function IdiomasComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdiomasComponent_td_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.eliminarElemento(element_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function IdiomasComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 27);
} }
function IdiomasComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 28);
} }
class IdiomasComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.idioma = '';
        this.nivel = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['idioma', 'nivel', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            var _a;
            this.languageTexts = languageTexts;
            this.nivelOptions = [
                { value: languageTexts.basico, viewValue: languageTexts.basico },
                { value: languageTexts.intermedio, viewValue: languageTexts.intermedio },
                { value: languageTexts.avanzado, viewValue: languageTexts.avanzado }
            ];
            this.idiomaOptions = [
                { value: languageTexts.ingles, viewValue: languageTexts.ingles },
            ];
            this.idioma = (_a = this.idiomaOptions[0]) === null || _a === void 0 ? void 0 : _a.value;
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.languageSubscription.unsubscribe(); // Unsubscribe to avoid memory leaks
    }
    guardarIdioma(form) {
        if (form.valid) {
            const nuevoIdioma = {
                idioma: this.idioma,
                nivel: this.nivel
            };
            console.log('Nuevo elemento a agregar:', nuevoIdioma);
            this.dataSource.data.push(nuevoIdioma);
            this.dataSource.data = [...this.dataSource.data];
            this.dataFormularioService.guardarIdioma(this.dataSource.data);
            this.resetFormulario(form);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Error',
                text: this.languageTexts.validar,
            });
        }
    }
    resetFormulario(form) {
        this.idioma = '';
        this.nivel = '';
        form.resetForm();
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarIdioma(this.dataSource.data);
    }
}
IdiomasComponent.ɵfac = function IdiomasComponent_Factory(t) { return new (t || IdiomasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
IdiomasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IdiomasComponent, selectors: [["app-idiomas"]], decls: 37, vars: 12, consts: [["id", "idiomas", 1, "formulario-container"], [1, "titulo"], ["autocomplete", "on", 1, "formulario", 3, "ngSubmit"], ["idiomaForm", "ngForm"], [1, "fila"], [1, "columna"], [1, "campo"], ["name", "idioma", "required", "", 3, "ngModel", "ngModelChange"], ["idiomaModel", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "nivel", "required", "", 3, "ngModel", "ngModelChange"], ["nivelModel", "ngModel"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "boton"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "idioma"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nivel"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function IdiomasComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "IDIOMAS / LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function IdiomasComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.guardarIdioma(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IdiomasComponent_Template_mat_select_ngModelChange_10_listener($event) { return ctx.idioma = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, IdiomasComponent_mat_option_12_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, IdiomasComponent_mat_error_13_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IdiomasComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.nivel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, IdiomasComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, IdiomasComponent_mat_error_21_Template, 2, 1, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, IdiomasComponent_th_27_Template, 2, 1, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, IdiomasComponent_td_28_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, IdiomasComponent_th_30_Template, 2, 1, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, IdiomasComponent_td_31_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](32, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, IdiomasComponent_th_33_Template, 2, 1, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, IdiomasComponent_td_34_Template, 4, 0, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, IdiomasComponent_tr_35_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, IdiomasComponent_tr_36_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.selectidioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.idioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.idiomaOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.selectnivel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.nivel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.nivelOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.guardarIdioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGlkaW9tYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFLDZCQUFBOztBQUNGO0VBQ0Usb0NBQUE7RUFBc0MsNkJBQUE7RUFDdEMsdUJBQUE7RUFBeUIsc0NBQUE7QUFFM0I7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiaWRpb21hcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybXVsYXJpby1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW5hIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbXBvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLyogc3R5bGVzLmNzcyBvIHN0eWxlcy5zY3NzICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQ0VGRiAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGUgZm9uZG8gKi9cclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbn1cclxuXHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Vf++":
/*!************************************************!*\
  !*** ./src/app/cv-modal/cv-modal.component.ts ***!
  \************************************************/
/*! exports provided: CvModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvModalComponent", function() { return CvModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pdf_one_content_pdf_one_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pdf-one-content/pdf-one-content.component */ "NLVW");
/* harmony import */ var _pdf_two_content_pdf_two_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pdf-two-content/pdf-two-content.component */ "qKLb");







function CvModalComponent_app_pdf_one_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-pdf-one-content");
} }
function CvModalComponent_app_pdf_two_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-pdf-two-content");
} }
class CvModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tipo = '';
        if (data === null || data === void 0 ? void 0 : data.tipo) {
            this.tipo = data.tipo;
        }
    }
    onClose() {
        this.dialogRef.close();
    }
}
CvModalComponent.ɵfac = function CvModalComponent_Factory(t) { return new (t || CvModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
CvModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CvModalComponent, selectors: [["app-cv-modal"]], decls: 6, vars: 2, consts: [["mat-dialog-content", "", 2, "max-height", "80vh", "overflow", "auto"], [4, "ngIf"], ["mat-button", "", 3, "click"]], template: function CvModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CvModalComponent_app_pdf_one_content_1_Template, 1, 0, "app-pdf-one-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CvModalComponent_app_pdf_two_content_2_Template, 1, 0, "app-pdf-two-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CvModalComponent_Template_button_click_4_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cerrar / Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "Dise\u00F1o de una columna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tipo === "Dise\u00F1o de dos columnas");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _pdf_one_content_pdf_one_content_component__WEBPACK_IMPORTED_MODULE_4__["PdfOneContentComponent"], _pdf_two_content_pdf_two_content_component__WEBPACK_IMPORTED_MODULE_5__["PdfTwoContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formulario/formulario.component */ "EQYB");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./personal/personal.component */ "m2WJ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experiencia/experiencia.component */ "+/Dj");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./estudios/estudios.component */ "Co0O");
/* harmony import */ var _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./conocimientos/conocimientos.component */ "C3ZT");
/* harmony import */ var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cursos/cursos.component */ "wxiI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./idiomas/idiomas.component */ "OPXo");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./comentarios/comentarios.component */ "+kO/");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./conocimiento-total/conocimiento-total.component */ "DNzp");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cv-modal/cv-modal.component */ "Vf++");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _pdf_one_content_pdf_one_content_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pdf-one-content/pdf-one-content.component */ "NLVW");
/* harmony import */ var _pdf_two_content_pdf_two_content_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pdf-two-content/pdf-two-content.component */ "qKLb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ "fXoL");





































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
        _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_11__["FormularioComponent"],
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_12__["PersonalComponent"],
        _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_15__["ExperienciaComponent"],
        _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_20__["EstudiosComponent"],
        _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_21__["ConocimientosComponent"],
        _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_22__["CursosComponent"],
        _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_25__["IdiomasComponent"],
        _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_27__["ComentariosComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_29__["SkillsComponent"],
        _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_30__["ConocimientoTotalComponent"],
        _cv_modal_cv_modal_component__WEBPACK_IMPORTED_MODULE_32__["CvModalComponent"],
        _pdf_one_content_pdf_one_content_component__WEBPACK_IMPORTED_MODULE_34__["PdfOneContentComponent"],
        _pdf_two_content_pdf_two_content_component__WEBPACK_IMPORTED_MODULE_35__["PdfTwoContentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]] }); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function SkillsComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function SkillsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SkillsComponent_th_19_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r9.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function SkillsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsComponent_td_20_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function SkillsComponent_td_20_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const row_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r13.selection.toggle(row_r11) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r11))("aria-label", ctx_r2.checkboxLabel(row_r11));
} }
function SkillsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.languageTexts.skill, " ");
} }
function SkillsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r15.skill, " ");
} }
function SkillsComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.languageTexts.eliminar, " ");
} }
function SkillsComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsComponent_td_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.eliminarElemento(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
} }
function SkillsComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 24);
} }
class SkillsComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([
        // Agrega más elementos si es necesario
        ]);
        this.skill = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['select', 'skill', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
    }
    guardarSkill() {
        if (this.skill) {
            const nuevaExperiencia = {
                skill: this.skill,
                position: (this.dataSource.data.length + 1)
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.selection.select(nuevaExperiencia);
            //this.dataFormularioService.guardarConocimientos(this.dataSource.data);
            this.dataFormularioService.guardarSkills(this.selection.selected);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.skill = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.selection.deselect(elemento); // Deselecciona el elemento eliminado
        this.dataFormularioService.guardarSkills(this.dataSource.data);
    }
    // Para select en tabla
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        this.dataFormularioService.guardarSkills(this.selection.selected);
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        this.dataFormularioService.guardarSkills(this.selection.selected);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 29, vars: 9, consts: [["id", "skills", 1, "formulario-container"], [1, "titulo"], ["autocomplete", "on", 1, "formulario"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "skill", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "skill"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "HABILIDADES BLANDAS / SOFT SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SkillsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.skill = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SkillsComponent_mat_error_13_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsComponent_Template_button_click_14_listener() { return ctx.guardarSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SkillsComponent_th_19_Template, 2, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SkillsComponent_td_20_Template, 2, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SkillsComponent_th_22_Template, 2, 1, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SkillsComponent_td_23_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SkillsComponent_th_25_Template, 2, 1, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SkillsComponent_td_26_Template, 4, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SkillsComponent_tr_27_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SkillsComponent_tr_28_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.indicaSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.guardarSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFBSjs7QUFHRSw2QkFBQTs7QUFDQTtFQUNFLG9DQUFBO0VBQXNDLDZCQUFBO0VBQ3RDLHVCQUFBO0VBQXlCLHNDQUFBO0FBRTdCOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7QUFDTjs7QUFFSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFDTjs7QUFFSTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7QUFDTjs7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDTiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLyogc3R5bGVzLmNzcyBvIHN0eWxlcy5zY3NzICovXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM0NFRkYgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIGZvbmRvICovXHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50aXR1bG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWxhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2x1bW5hIHtcclxuICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jYW1wbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function NavigationComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavigationComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", language_r5.viewValue, " ");
} }
class NavigationComponent {
    constructor(breakpointObserver, languageService) {
        this.breakpointObserver = breakpointObserver;
        this.languageService = languageService;
        this.selectedLanguage = 'es';
        this.languages = [
            { value: 'en', viewValue: 'English' },
            { value: 'es', viewValue: 'Español' }
            // Agrega más idiomas si es necesario
        ];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.selectedLanguage = 'es'; // Establece el idioma predeterminado
        this.updateLanguageTexts();
    }
    updateLanguageTexts() {
        this.languageService.updateLanguageTexts(this.selectedLanguage);
        this.languageTexts = this.languageService.languageTextsArray;
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 42, vars: 23, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [1, "toolbar"], [1, "spacer"], ["src", "./assets/images/logo.png", "alt", "Logo Tesis", 1, "logo"], ["mat-list-item", "", "href", "#datospersonales"], ["mat-list-item", "", "href", "#idiomas"], ["mat-list-item", "", "href", "#skills"], ["mat-list-item", "", "href", "#conocimiento-total"], ["mat-list-item", "", "href", "#estudios"], ["mat-list-item", "", "href", "#experiencia"], ["mat-list-item", "", "href", "#cursos"], ["mat-list-item", "", "href", "#comentarios"], ["color", "primary", 1, "toolbar"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "spacera"], [1, "center-text"], [1, "small-select"], [1, "custom-select", 3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [3, "value"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, NavigationComponent_button_30_Template, 3, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function NavigationComponent_Template_mat_select_valueChange_39_listener($event) { return ctx.selectedLanguage = $event; })("selectionChange", function NavigationComponent_Template_mat_select_selectionChange_39_listener() { return ctx.updateLanguageTexts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, NavigationComponent_mat_option_40_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 17, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 19, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 15, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.datosNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.idiomas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.estudiosNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.experienciaNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.cursosNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.comentarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 21, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.bienvenido);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.selectLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #33CEFF;\n  \n}\n.mat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n  \n}\n  .mat-select-value {\n  color: black !important;\n}\n  .mat-form-field-label {\n  color: black !important;\n}\n.custom-select[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: black !important;\n}\n.spacera[_ngcontent-%COMP%] {\n  flex: 1;\n  \n}\n.small-select[_ngcontent-%COMP%] {\n  width: 150px;\n  \n  font-size: 12px;\n  \n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n.spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  \n}\n.logo[_ngcontent-%COMP%] {\n  max-width: 100px;\n  height: auto;\n  margin-left: auto;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsWUFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7RUFBMkIsU0FBQTtBQUc3QjtBQURBO0VBQ0UsWUFBQTtFQUFjLDBCQUFBO0FBS2hCO0FBSEE7RUFDRSx1QkFBQTtBQU1GO0FBSEE7RUFDRSx1QkFBQTtBQU1GO0FBSkE7RUFDRSx1QkFBQTtBQU9GO0FBSkE7RUFDRSxPQUFBO0VBQVMscUVBQUE7QUFRWDtBQUxBO0VBQ0UsWUFBQTtFQUFjLHdDQUFBO0VBQ2QsZUFBQTtFQUFpQixtREFBQTtBQVVuQjtBQU5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQXFCLHVDQUFBO0FBVXZCO0FBUEE7RUFDRSxZQUFBO0VBQWMsbUNBQUE7QUFXaEI7QUFSQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQW1CLHNDQUFBO0FBWXJCIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0NFRkY7XG4gIC8qIFJvam8gKi9cbn1cblxuLm1hdC10b29sYmFyIHNwYW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIC8qIENvbG9yIGRlbCB0ZXh0byBuZWdybyAqL1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXNlbGVjdCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uc3BhY2VyYSB7XG4gIGZsZXg6IDE7XG4gIC8qIEVzdG8gY3JlYSB1biBlc3BhY2lvIGZsZXhpYmxlIGVudHJlIFwiQ1ZcIiB5IGVsIHNlbGVjdG9yIGRlIGlkaW9tYSAqL1xufVxuXG4uc21hbGwtc2VsZWN0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICAvKiBhanVzdGEgZWwgYW5jaG8gc2Vnw7puIHNlYSBuZWNlc2FyaW8gKi9cbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKiBhanVzdGEgZWwgdGFtYcOxbyBkZSBmdWVudGUgc2Vnw7puIHNlYSBuZWNlc2FyaW8gKi9cbn1cblxuLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBDZW50cmEgdmVydGljYWxtZW50ZSBsb3MgZWxlbWVudG9zICovXG59XG5cbi5zcGFjZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIC8qIEhhY2UgcXVlIGVsIGVzcGFjaW8gc2UgZXhwYW5kYSAqL1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIC8qIEVtcHVqYSBsYSBpbWFnZW4gaGFjaWEgbGEgZGVyZWNoYSAqL1xufSJdfQ== */"] });


/***/ }),

/***/ "kLsA":
/*!********************************************!*\
  !*** ./src/app/data-formulario.service.ts ***!
  \********************************************/
/*! exports provided: DataFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormularioService", function() { return DataFormularioService; });
/* harmony import */ var _assets_js_print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/print.js */ "Dvxi");
/* harmony import */ var _assets_js_print2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/print2.js */ "3Hxo");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language.service */ "y91y");
// @ts-ignore

// @ts-ignore




class DataFormularioService {
    constructor(languageService) {
        this.languageService = languageService;
        this.datosKey = 'datosFormulario';
        this.nombre = '';
        this.comentarios = '';
        this.apellidos = '';
        this.nacionalidad = '';
        this.edad = 18;
        this.tiempoExperiencia = 0;
        this.ciudad = '';
        this.pais = '';
        this.estudios = [];
        this.conocimientos = [];
        this.skills = [];
        this.experiencias = [];
        this.cursos = [];
        this.idiomas = [];
        this.sendNombre$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendComentarios$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendApellidos$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendNacionalidad$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendEdad$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendTiempoExp$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendCiudad$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendPais$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendEstudios$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.sendConocimientos$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.sendSkills$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.sendExperiencias$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.sendCursos$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.sendIdiomas$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        // Variables para indicar si los arreglos tienen elementos
        this.tieneEstudios = false;
        this.tieneConocimientos = false;
        this.tieneExperiencias = false;
        this.tieneCursos = false;
        this.tieneIdiomas = false;
        this.tienePersonal = false;
        this.tieneSkills = false;
        this.selectedLanguage = 'es';
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
        const datosGuardados = localStorage.getItem(this.datosKey);
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            // Asignar los datos recuperados a las propiedades del servicio
            this.nombre = datos.nombre;
            this.apellidos = datos.apellidos;
            this.nacionalidad = datos.nacionalidad;
            this.edad = datos.edad;
            this.tiempoExperiencia = datos.tiempoExperiencia;
            this.ciudad = datos.ciudad;
            this.pais = datos.pais;
            this.estudios = datos.estudios;
            this.conocimientos = datos.conocimientos;
            this.experiencias = datos.experiencias;
            this.cursos = datos.cursos;
            this.idiomas = datos.idiomas;
            this.tieneEstudios = datos.tieneEstudios;
            this.tieneConocimientos = datos.tieneConocimientos;
            this.tieneExperiencias = datos.tieneExperiencias;
            this.tieneCursos = datos.tieneCursos;
            this.tieneIdiomas = datos.tieneIdiomas;
            this.tienePersonal = datos.tienePersonal;
        }
    }
    guardarDatos(comentarios, estilo) {
        this.comentarios = comentarios;
        this.sendComentarios$.next(this.comentarios);
        this.actualizarEstadoArreglos();
        // if(estilo === "Diseño de una columna"){
        //   Print.printDiv2(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos,
        //     this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.comentarios, this.skills);
        // } else {
        //   Print2.printDiv2(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos,
        //     this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.skills);
        // }
    }
    guardarPersonal(nombre, apellidos, nacionalidad, edad, ciudad, pais, tiempoExperiencia) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.ciudad = ciudad;
        this.pais = pais;
        this.tiempoExperiencia = tiempoExperiencia;
        this.sendNombre$.next(nombre);
        this.sendNacionalidad$.next(nacionalidad);
        this.sendApellidos$.next(apellidos);
        this.sendEdad$.next(edad);
        this.sendCiudad$.next(ciudad);
        this.sendPais$.next(pais);
        this.sendTiempoExp$.next(tiempoExperiencia);
        this.actualizarEstadoArreglos();
    }
    guardarEstudios(estudios) {
        this.estudios = estudios;
        this.sendEstudios$.next(estudios);
        this.actualizarEstadoArreglos();
    }
    guardarConocimientos(conocimientos) {
        // Recorrer el arreglo recibido
        conocimientos.forEach((conocimiento) => {
            // Comprobar si el conocimiento no está ya en this.conocimientos
            if (!this.conocimientos.some((elem) => elem.conocimiento === conocimiento.conocimiento)) {
                // Si no está, agregarlo a this.conocimientos
                this.conocimientos.push(conocimiento);
            }
        });
        this.sendConocimientos$.next(this.conocimientos);
        // Actualizar el estado de los arreglos
        this.actualizarEstadoArreglos();
    }
    eliminarConocimientos(conocimientos) {
        this.conocimientos = this.conocimientos.filter(conocimiento => !conocimientos.some(elem => elem.conocimiento === conocimiento.conocimiento));
        this.sendConocimientos$.next(this.conocimientos);
        // Actualizar el estado de los arreglos
        this.actualizarEstadoArreglos();
    }
    guardarSkills(skill) {
        this.skills = skill;
        this.sendSkills$.next(this.skills);
        this.actualizarEstadoArreglos();
    }
    guardarIdioma(idiomas) {
        this.idiomas = idiomas;
        this.sendIdiomas$.next(this.idiomas);
        this.actualizarEstadoArreglos();
    }
    guardarExperiencias(experiencias) {
        this.experiencias = experiencias;
        this.sendExperiencias$.next(this.experiencias);
        this.actualizarEstadoArreglos();
    }
    guardarCursos(cursos) {
        this.cursos = cursos;
        this.sendCursos$.next(this.cursos);
        this.actualizarEstadoArreglos();
    }
    actualizarEstadoArreglos() {
        this.tieneEstudios = this.estudios.length > 0;
        this.tieneConocimientos = this.conocimientos.length > 0;
        this.tieneExperiencias = this.experiencias.length > 0;
        this.tieneCursos = this.cursos.length > 0;
        this.tieneIdiomas = this.idiomas.length > 0;
        this.tieneSkills = this.skills.length > 0;
        if (this.nombre != "" && this.apellidos != "" && this.nacionalidad != "" && this.ciudad != "" && this.pais != "" && this.edad > 0 && this.tiempoExperiencia > 0) {
            this.tienePersonal = true;
        }
        else {
            this.tienePersonal = false;
        }
    }
    obtenerHtmlPdf(estilo) {
        if (estilo === "Diseño de una columna") {
            return _assets_js_print_js__WEBPACK_IMPORTED_MODULE_0__["generateCvHtml"](this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos, this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.comentarios, this.skills);
        }
        else {
            _assets_js_print2_js__WEBPACK_IMPORTED_MODULE_1__["printDiv2"](this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos, this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.skills);
        }
    }
}
DataFormularioService.ɵfac = function DataFormularioService_Factory(t) { return new (t || DataFormularioService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
DataFormularioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataFormularioService, factory: DataFormularioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m2WJ":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PersonalComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.languageTexts.obligatorio);
} }
class PersonalComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selectedLanguage = 'es';
        this.nombre = '';
        this.apellidos = '';
        this.nacionalidad = '';
        this.edad = 0;
        this.ciudad = '';
        this.pais = '';
        this.plantillaHTML = '';
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    handleBlurEvent() {
        this.ngOnDestroy();
        this.dataFormularioService.guardarPersonal(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.tiempoExperiencia);
    }
    ngOnDestroy() {
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_1__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 52, vars: 29, consts: [["id", "datospersonales", 1, "formulario-container"], [1, "titulo"], [1, "campo"], ["autocomplete", "on", 1, "formulario", 3, "focusout"], [1, "fila"], [1, "columna"], ["matInput", "", "required", "", "name", "nombre", 3, "placeholder", "ngModel", "ngModelChange", "input"], [4, "ngIf"], ["matInput", "", "required", "", "name", "apellidos", 3, "placeholder", "ngModel", "ngModelChange", "input"], ["matInput", "", "required", "", "name", "nacionalidad", 3, "placeholder", "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "number", "min", "18", "required", "", "name", "edad", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "required", "", "name", "ciudad", 3, "placeholder", "ngModel", "ngModelChange", "input"], ["matInput", "", "required", "", "name", "pais", 3, "placeholder", "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "number", "required", "", "name", "tiempoExperiencia", 3, "placeholder", "ngModel", "ngModelChange"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DATOS PERSONALES / PERSONAL DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function PersonalComponent_Template_form_focusout_5_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.nombre = $event; })("input", function PersonalComponent_Template_input_input_11_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PersonalComponent_mat_error_12_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_17_listener($event) { return ctx.apellidos = $event; })("input", function PersonalComponent_Template_input_input_17_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PersonalComponent_mat_error_18_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_24_listener($event) { return ctx.nacionalidad = $event; })("input", function PersonalComponent_Template_input_input_24_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PersonalComponent_mat_error_25_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_30_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PersonalComponent_mat_error_31_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_37_listener($event) { return ctx.ciudad = $event; })("input", function PersonalComponent_Template_input_input_37_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PersonalComponent_mat_error_38_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_43_listener($event) { return ctx.pais = $event; })("input", function PersonalComponent_Template_input_input_43_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, PersonalComponent_mat_error_44_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_50_listener($event) { return ctx.tiempoExperiencia = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PersonalComponent_mat_error_51_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.indicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.tiempoExpEtiqueta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.tiempoExpEtiqueta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tiempoExperiencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tiempoExperiencia);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["@charset \"UTF-8\";\n.formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.imprimir[_ngcontent-%COMP%] {\n  display: none;\n  \n}\n@media print {\n  .imprimir[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  \n  body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    font-size: 12px;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQWEsdURBQUE7QUFHZjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUdGO0FBQUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFBQTtFQUNFLFdBQUE7QUFHRjtBQUFBO0VBQ0Usd0NBQUE7QUFHRjtBQUFBO0VBQ0UsYUFBQTtFQUFlLGlEQUFBO0FBSWpCO0FBQUE7RUFDRTtJQUNFLGNBQUE7RUFHRjs7RUFEQSwwQ0FBQTtFQUNBO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0lBQ0EsK0JBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgLyogQWp1c3RhciBlbCBmb3JtdWxhcmlvIHBhcmEgcXVlIG9jdXBlIHRvZG8gZWwgYW5jaG8gKi9cbn1cblxuLmZpbGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbHVtbmEge1xuICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDEwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2FtcG8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pbXByaW1pciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIE9jdWx0YSBlbCBlbGVtZW50byBlbiBsYSB2aXN0YSBkZWwgbmF2ZWdhZG9yICovXG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5pbXByaW1pciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBFc3RpbG9zIGVzcGVjw61maWNvcyBwYXJhIGxhIGltcHJlc2nDs24gKi9cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvKiBPdHJvcyBlc3RpbG9zIGRlIGltcHJlc2nDs24gKi9cbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "qKLb":
/*!**************************************************************!*\
  !*** ./src/app/pdf-two-content/pdf-two-content.component.ts ***!
  \**************************************************************/
/*! exports provided: PdfTwoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfTwoContentComponent", function() { return PdfTwoContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PdfTwoContentComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idioma_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", idioma_r6.idioma, " - ", idioma_r6.nivel, "");
} }
function PdfTwoContentComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experiencia_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", experiencia_r7.puesto, " - ", experiencia_r7.empresa, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", experiencia_r7.fechaIni ? ctx_r1.capitalizeFirstLetter(experiencia_r7.fechaIni) : "", " - ", experiencia_r7.fechaFin ? ctx_r1.capitalizeFirstLetter(experiencia_r7.fechaFin) : ctx_r1.languageTexts.actualidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experiencia_r7.descripcion);
} }
function PdfTwoContentComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estudio_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estudio_r8.universidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estudio_r8.carrera);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.languageTexts.fechaInicio, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, estudio_r8.fechaIni, "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.languageTexts.generacion, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.isToday(estudio_r8.generacion) ? ctx_r2.languageTexts.actualidad : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 9, estudio_r8.generacion, "yyyy"), " ");
} }
function PdfTwoContentComponent_div_37_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curso_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](curso_r10.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](curso_r10.organizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r9.capitalizeFirstLetter(curso_r10.fechaIni), " - ", curso_r10.fechaFin ? ctx_r9.capitalizeFirstLetter(curso_r10.fechaFin) : ctx_r9.languageTexts.actualidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", curso_r10.entidad, " - ", curso_r10.tiempoEstudio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", curso_r10.descripcion, "");
} }
function PdfTwoContentComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PdfTwoContentComponent_div_37_div_3_Template, 17, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.languageTexts.otrosEstudios);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cursos);
} }
function PdfTwoContentComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conocimiento_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", conocimiento_r11.conocimiento, " ");
} }
function PdfTwoContentComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r12.skill, " ");
} }
class PdfTwoContentComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selectedLanguage = 'es';
        this.apellido = '';
        this.nombre = '';
        this.nacionalidad = '';
        this.ciudad = '';
        this.pais = '';
        this.edad = 0;
        this.tiempoExperiencia = 0;
        this.estudios = [
            { universidad: 'UNAM', carrera: 'Ingeniería', fechaIni: new Date(2010, 1, 1), generacion: new Date(2014, 1, 1) }
        ];
        this.experiencias = [{ puesto: 'UNAM', empresa: 'Ingeniería', descripcion: '', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1) }];
        this.conocimientos = [{ conocimiento: 'Angular' }];
        this.skills = [{ skill: 'Trabajo en equipo' }];
        this.cursos = [{ nombre: 'Ingeniería', organizacion: '', descripcion: '', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1), entidad: '', tiempoEstudio: '' }];
        this.idiomas = [{ idioma: '', nivel: '' }];
        this.comentarios = '';
        this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
        this.selectedLanguage = this.languageService.language;
        this.dataFormularioService.sendNombre$.subscribe({
            next: (nombre) => {
                this.nombre = nombre;
            }
        });
        this.dataFormularioService.sendApellidos$.subscribe({
            next: (apellido) => {
                this.apellido = apellido;
            }
        });
        this.dataFormularioService.sendNacionalidad$.subscribe({
            next: (nacionalidad) => {
                this.nacionalidad = nacionalidad;
            }
        });
        this.dataFormularioService.sendCiudad$.subscribe({
            next: (ciudad) => {
                this.ciudad = ciudad;
            }
        });
        this.dataFormularioService.sendEdad$.subscribe({
            next: (edad) => {
                this.edad = edad;
            }
        });
        this.dataFormularioService.sendTiempoExp$.subscribe({
            next: (tiempoExperiencia) => {
                this.tiempoExperiencia = tiempoExperiencia;
            }
        });
        this.dataFormularioService.sendConocimientos$.subscribe({
            next: (conocimientos) => {
                this.conocimientos = conocimientos;
            }
        });
        this.dataFormularioService.sendSkills$.subscribe({
            next: (skills) => {
                this.skills = skills;
            }
        });
        this.dataFormularioService.sendEstudios$.subscribe({
            next: (estudios) => {
                this.estudios = estudios;
            }
        });
        this.dataFormularioService.sendExperiencias$.subscribe({
            next: (experiencias) => {
                this.experiencias = experiencias;
            }
        });
        this.dataFormularioService.sendCursos$.subscribe({
            next: (cursos) => {
                this.cursos = cursos;
            }
        });
        this.dataFormularioService.sendIdiomas$.subscribe({
            next: (idiomas) => {
                this.idiomas = idiomas;
            }
        });
        this.dataFormularioService.sendComentarios$.subscribe({
            next: (comentarios) => {
                this.comentarios = comentarios;
            }
        });
        this.dataFormularioService.sendPais$.subscribe({
            next: (pais) => {
                this.pais = pais;
            }
        });
    }
    ngOnInit() {
    }
    isToday(date) {
        const today = new Date();
        return (date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear());
    }
    capitalizeFirstLetter(text) {
        if (!text) {
            return ''; // Devuelve una cadena vacía si el texto es null o undefined
        }
        const monthIndex = text.getMonth(); // Obtiene el índice del mes (0-11)
        const year = text.getFullYear(); // Obtiene el año
        const month = this.languageTexts.mesesArray[monthIndex] || '';
        const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1); // Capitaliza la primera letra
        return `${capitalizedMonth} ${year}`;
    }
}
PdfTwoContentComponent.ɵfac = function PdfTwoContentComponent_Factory(t) { return new (t || PdfTwoContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_1__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
PdfTwoContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfTwoContentComponent, selectors: [["app-pdf-two-content"]], decls: 55, vars: 24, consts: [["id", "cv-container", 1, "cv-container"], [1, "header", "pdf-section"], ["src", "./assets/images/logo.png", "alt", "logo", 1, "logo"], [1, "title"], [1, "personal-info-section", "pdf-section"], [1, "detail"], [1, "detail", "idiomas-detail"], [4, "ngFor", "ngForOf"], [1, "two-columns", "pdf-section"], [1, "column"], [1, "section"], ["class", "experience", 4, "ngFor", "ngForOf"], ["class", "estudio", 4, "ngFor", "ngForOf"], ["class", "section", 4, "ngIf"], [1, "experience"], [1, "estudio"], [1, "label"]], template: function PdfTwoContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Curriculum Vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PdfTwoContentComponent_li_23_Template, 2, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PdfTwoContentComponent_div_32_Template, 12, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PdfTwoContentComponent_div_36_Template, 20, 12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PdfTwoContentComponent_div_37_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PdfTwoContentComponent_li_43_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, PdfTwoContentComponent_li_48_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.apellido, " ", ctx.nombre, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.languageTexts.edad, ": ", ctx.edad, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.languageTexts.tiempoExperiencia, ": ", ctx.tiempoExperiencia, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.languageTexts.nacionalidad, ": ", ctx.nacionalidad, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.languageTexts.idiomas, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.idiomas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.languageTexts.residenciaactual, ": ", ctx.ciudad, " , ", ctx.pais, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.experiencialab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.estudioscursados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estudios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cursos.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.conocimientotec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conocimientos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.skillEt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.comentariotTitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comentarios);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap\");\n.cv-container[_ngcontent-%COMP%] {\n  width: 8.5in;\n  \n  height: 11in;\n  \n  padding-top: 0.1in;\n  \n  padding-left: 0.5in;\n  padding-right: 0.5in;\n  padding-bottom: 0.5in;\n  box-sizing: border-box;\n  font-family: Arial, sans-serif;\n  \n  background-color: #fff;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 0;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  \n  padding: 0;\n  font-size: 14px;\n  \n  font-family: \"Libre Franklin\", sans-serif;\n  color: #31DCFE;\n  font-weight: bold;\n}\n.logo[_ngcontent-%COMP%] {\n  max-height: 80px;\n  \n}\n.personal-info-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.two-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.column[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #1d40cc;\n  font-family: \"Merriweather\", serif;\n  font-weight: bold;\n  font-size: 15px;\n  margin-bottom: 0.5rem;\n}\n.detail[_ngcontent-%COMP%], .experience[_ngcontent-%COMP%], .estudio[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: disc;\n  padding-left: 20px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBkZi10d28tY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBUixtSEFBQTtBQUNBLGlNQUFBO0FBRVI7RUFDRSxZQUFBO0VBQWlCLG1CQUFBO0VBQ2pCLFlBQUE7RUFBaUIsa0JBQUE7RUFDakIsa0JBQUE7RUFBcUIsb0RBQUE7RUFDckIsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUFnQywwQkFBQTtFQUNoQyxzQkFBQTtFQUF3QixpQkFBQTtFQUN4QixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQU1GO0FBSEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFBVyxxQ0FBQTtFQUNYLFVBQUE7RUFDQSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUUY7QUFMQTtFQUNFLGdCQUFBO0VBQWtCLCtCQUFBO0FBU3BCO0FBTkE7RUFDRSxtQkFBQTtBQVNGO0FBTkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBU0Y7QUFOQTtFQUNFLGVBQUE7QUFTRjtBQU5BO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFTRjtBQU5BOzs7RUFHRSxtQkFBQTtBQVNGO0FBTkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBU0Y7QUFOQTtFQUNFLHFCQUFBO0FBU0YiLCJmaWxlIjoicGRmLXR3by1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0ZyYW5rbGluOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0ZyYW5rbGluOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PU1lcnJpd2VhdGhlcjppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXCIpO1xuLmN2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4LjVpbjtcbiAgLyogQW5jaG8gZGUgY2FydGEgKi9cbiAgaGVpZ2h0OiAxMWluO1xuICAvKiBBbHRvIGRlIGNhcnRhICovXG4gIHBhZGRpbmctdG9wOiAwLjFpbjtcbiAgLyogUmVkdWNpciBlc3BhY2lhZG8gZGVudHJvIGRlbCBjb250ZW5lZG9yIGEgMC41aW4gKi9cbiAgcGFkZGluZy1sZWZ0OiAwLjVpbjtcbiAgcGFkZGluZy1yaWdodDogMC41aW47XG4gIHBhZGRpbmctYm90dG9tOiAwLjVpbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAvKiBGdWVudGUgcHJlZGV0ZXJtaW5hZGEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLyogRm9uZG8gYmxhbmNvICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwO1xuICAvKiBFbGltaW5hciBtw6FyZ2VuZXMgZGVsIGVuY2FiZXphZG8gKi9cbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKiBSZWR1Y2lyIGVsIHRhbWHDsW8gZGUgbGEgZnVlbnRlICovXG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEZyYW5rbGluXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzFEQ0ZFO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ28ge1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xuICAvKiBSZWR1Y2lyIGVsIHRhbWHDsW8gZGVsIGxvZ28gKi9cbn1cblxuLnBlcnNvbmFsLWluZm8tc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi50d28tY29sdW1ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY29sdW1uIHtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuXG4uc2VjdGlvbiBoNCB7XG4gIGNvbG9yOiAjMWQ0MGNjO1xuICBmb250LWZhbWlseTogXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmRldGFpbCxcbi5leHBlcmllbmNlLFxuLmVzdHVkaW8ge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulario/formulario.component */ "EQYB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_1__["FormularioComponent"] },
    { path: 'formulario', component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_1__["FormularioComponent"] }
];
//app/formulario
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wxiI":
/*!********************************************!*\
  !*** ./src/app/cursos/cursos.component.ts ***!
  \********************************************/
/*! exports provided: CursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosComponent", function() { return CursosComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function CursosComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.languageTexts.obligatorio, " ");
} }
function CursosComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.languageTexts.obligatorio, " ");
} }
function CursosComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.languageTexts.obligatorio, " ");
} }
function CursosComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.languageTexts.obligatorio, " ");
} }
function CursosComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.languageTexts.obligatorio, " ");
} }
function CursosComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r13.languageTexts.nombre, " ");
} }
function CursosComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r31.nombre, " ");
} }
function CursosComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.languageTexts.organizacion, " ");
} }
function CursosComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r32.organizacion, " ");
} }
function CursosComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r17.languageTexts.fechaInicio, " ");
} }
function CursosComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r33.fechaIni, "dd-MM-yyyy"), " ");
} }
function CursosComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.languageTexts.fechaFin, " ");
} }
function CursosComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r34.fechaFin, "dd-MM-yyyy"), " ");
} }
function CursosComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r21.languageTexts.descripcion, " ");
} }
function CursosComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r35.descripcion, " ");
} }
function CursosComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r23.languageTexts.entidadet, " ");
} }
function CursosComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r36.entidad, " ");
} }
function CursosComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r25.languageTexts.tiempodeEst, " ");
} }
function CursosComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r37.tiempoEstudio, " ");
} }
function CursosComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r27.languageTexts.eliminar, " ");
} }
function CursosComponent_td_86_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CursosComponent_td_86_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const element_r38 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.eliminarElemento(element_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CursosComponent_tr_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 55);
} }
function CursosComponent_tr_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 56);
} }
class CursosComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.nombre = '';
        this.organizacion = '';
        this.fechaIni = null;
        this.fechaFin = null;
        this.descripcion = '';
        this.entidad = '';
        this.tiempoEstudio = '';
        this.tiempoEspecifica = '';
        this.tiempoNum = 1;
        this.selectedLanguage = 'es';
        this.fechaActual = new Date();
        this.displayedColumns = ['nombre', 'organizacion', 'fechaIni', 'fechaFin', 'descripcion', 'entidad', 'tiempoEstudio', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
    }
    guardarCurso(form) {
        if (this.nombre && this.organizacion && this.fechaIni && this.fechaFin && this.descripcion && this.entidad && this.tiempoEspecifica && this.tiempoNum) {
            const nuevoCurso = {
                nombre: this.nombre,
                organizacion: this.organizacion,
                fechaIni: this.fechaIni,
                fechaFin: this.fechaFin,
                descripcion: this.descripcion,
                entidad: this.entidad,
                tiempoEstudio: this.tiempoNum + ' ' + this.tiempoEspecifica,
            };
            console.log('Nuevo elemento a agregar:', nuevoCurso);
            this.dataSource.data.push(nuevoCurso);
            this.dataSource.data = [...this.dataSource.data];
            this.dataFormularioService.guardarCursos(this.dataSource.data);
            this.resetFormulario(form);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Error',
                text: this.languageTexts.validar,
            });
        }
    }
    resetFormulario(form) {
        this.nombre = '';
        this.organizacion = '';
        this.fechaIni = null;
        this.fechaFin = null;
        this.descripcion = '';
        this.entidad = '';
        this.tiempoEspecifica = '';
        this.tiempoNum = 1;
        form.resetForm();
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarCursos(this.dataSource.data);
    }
}
CursosComponent.ɵfac = function CursosComponent_Factory(t) { return new (t || CursosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
CursosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CursosComponent, selectors: [["app-cursos"]], decls: 89, vars: 37, consts: [["id", "cursos", 1, "formulario-container"], [1, "titulo"], ["autocomplete", "on", 1, "formulario", 3, "ngSubmit"], ["cursoForm", "ngForm"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "nombre", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["nombreModel", "ngModel"], [4, "ngIf"], ["matInput", "", "name", "organizacion", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["organizacionModel", "ngModel"], ["matInput", "", "name", "fechaIni", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerInicio", ""], ["matInput", "", "name", "fechaFin", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["pickerFin", ""], ["matInput", "", "name", "descripcion", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["descripcionModel", "ngModel"], ["matInput", "", "name", "entidad", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["entidadModel", "ngModel"], [2, "margin-right", "10px"], ["name", "tiempoEspecifica", 3, "placeholder", "ngModel", "ngModelChange"], ["value", "horas"], ["value", "dias"], ["value", "meses"], ["value", "a\u00F1os"], ["matInput", "", "type", "number", "min", "1", "required", "", "name", "tiempoNum", 3, "placeholder", "ngModel", "ngModelChange"], ["tiempoNumModel", "ngModel"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "boton"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "nombre"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "organizacion"], ["matColumnDef", "fechaIni"], ["mat-header-cell", "", "style", "width: 100px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 100px;", 4, "matCellDef"], ["matColumnDef", "fechaFin"], ["matColumnDef", "descripcion"], ["matColumnDef", "entidad"], ["matColumnDef", "tiempoEstudio"], ["matColumnDef", "eliminar"], ["mat-header-cell", "", "style", "width: 40px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 40px;", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 2, "width", "100px"], ["mat-cell", "", 2, "width", "100px"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", "", 2, "width", "40px"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CursosComponent_Template(rf, ctx) { if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CursosComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.guardarCurso(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_10_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CursosComponent_mat_error_12_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_17_listener($event) { return ctx.organizacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CursosComponent_mat_error_19_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_22_listener($event) { return ctx.fechaIni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_28_listener($event) { return ctx.fechaFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "textarea", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_textarea_ngModelChange_34_listener($event) { return ctx.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CursosComponent_mat_error_36_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_41_listener($event) { return ctx.entidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, CursosComponent_mat_error_43_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_mat_select_ngModelChange_46_listener($event) { return ctx.tiempoEspecifica = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_56_listener($event) { return ctx.tiempoNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, CursosComponent_mat_error_58_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](63, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, CursosComponent_th_64_Template, 2, 1, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, CursosComponent_td_65_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](66, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, CursosComponent_th_67_Template, 2, 1, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, CursosComponent_td_68_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](69, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, CursosComponent_th_70_Template, 2, 1, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, CursosComponent_td_71_Template, 3, 4, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](72, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, CursosComponent_th_73_Template, 2, 1, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, CursosComponent_td_74_Template, 3, 4, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](75, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, CursosComponent_th_76_Template, 2, 1, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, CursosComponent_td_77_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](78, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, CursosComponent_th_79_Template, 2, 1, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, CursosComponent_td_80_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](81, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, CursosComponent_th_82_Template, 2, 1, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, CursosComponent_td_83_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](84, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, CursosComponent_th_85_Template, 2, 1, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, CursosComponent_td_86_Template, 4, 0, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, CursosComponent_tr_87_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, CursosComponent_tr_88_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.tiposcurso);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.organizacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.organizacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.organizacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaIniU);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r5)("ngModel", ctx.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaFinU);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r6)("ngModel", ctx.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.entidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.entidadet);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.entidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.tiempodeEst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tiempoEspecifica);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.horas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.dias);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.cantidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tiempoNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.guardarOtro);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1cnNvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFBRjs7QUFFQSw2QkFBQTs7QUFDQTtFQUNFLG9DQUFBO0VBQXNDLDZCQUFBO0VBQ3RDLHVCQUFBO0VBQXlCLHNDQUFBO0FBRzNCOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFDRTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJjdXJzb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDRUZGICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGEgbmVncm8gKi9cclxufVxyXG5cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbmEge1xyXG4gICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FtcG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9Il19 */"] });


/***/ }),

/***/ "y91y":
/*!*************************************!*\
  !*** ./src/app/language.service.ts ***!
  \*************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LanguageService {
    constructor() {
        this.language = '';
        this.languageTexts = {
            en: {
                selectLanguage: 'Select language',
                menu: 'Menu',
                nombre: 'Name',
                apellidos: 'Last names',
                nacionalidad: 'Nationality',
                edad: 'Age',
                ciudad: 'Current city of residence',
                pais: 'Current country of residence',
                obligatorio: 'This field is required',
                actual: 'Current',
                universidad: 'University',
                carrera: 'Degree',
                fechaIniU: 'Select start date',
                fechaFinU: 'Select end date',
                fechaActual: 'Select date',
                puesto: 'Position',
                empresa: 'Enterprise',
                actividades: 'Activities',
                conocimiento: 'Knowledge',
                logros: 'List three (3) major accomplishments',
                funciones: 'Indicate three (3) main functions',
                formulario: 'Form',
                generarDoc: 'Generate Document',
                guardarCono: 'Save Knowledge',
                guardarEstu: 'Save University',
                guardarExp: 'Save Work Experience',
                guardarOtro: 'Save another study',
                guardarIdioma: 'Save Language',
                eliminar: 'Delete',
                fechaInicio: 'Start date',
                fechaFin: 'End date',
                organizacion: 'Organization',
                tiempodeEst: 'Study Time',
                selectidioma: 'Select language',
                idioma: 'Language',
                logroet: 'Accomplishments',
                funcionet: 'Functions',
                descripcion: 'Description',
                entidad: 'Enter entity where course',
                entidadet: 'Entity',
                cantidad: 'Amount of time',
                horas: 'Hours',
                meses: 'Months',
                dias: 'Days',
                year: 'Years',
                apellidonombre: 'Surname and first name',
                datospersonales: 'PERSONAL DATA',
                estudioscursados: 'STUDIES COMPLETED',
                generacion: 'Generation',
                actualidad: 'Currently',
                conocimientotec: 'TECHNICIAL KNOWHOW',
                experiencialab: 'WORK EXPERIENCE',
                fecha: 'Date',
                otrosEstudios: 'OTHER STUDIES',
                comentarios: 'Comments',
                tiposcurso: 'COURSES, DIPLOMA, MASTERS, DOCTORATE, CERTIFICATION',
                estilos: 'Document Design',
                estilo1: 'A column',
                estilo2: 'Two columns',
                idiomas: 'Languages',
                comentariotTitulo: 'NOTES OR COMMENTS',
                indicaConocimiento: 'Select the knowledge in the table (In the box) or enter a new knowledge (Type in the field)',
                residenciaactual: 'Current residence',
                indicaSkill: 'Select the skill in the table (In the box) or enter a new skill (Type in the field)',
                skill: 'Soft skill',
                guardarSkill: 'Save Soft Skill',
                skillEt: 'SOFT SKILLS',
                lenguajeProgramacion: 'Language of programming',
                conocimiento5: 'Vision Systems',
                conocimiento6: 'Drives / Protections',
                conocimiento7: 'Reading and Designing Electrical Drawings',
                indicacion: 'This form will generate a WORD document, please send it to the human resources staff.',
                selectnivel: 'Select language level',
                basico: 'Basic',
                intermedio: 'Intermediate',
                avanzado: 'Advanced',
                descripcionAct: 'Describe your activities',
                mesesArray: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ],
                ingles: 'English',
                validar: 'Please complete all required fields.',
                agregarExp: 'Remember to add all your experiences so that your CV is complete',
                alerta: 'Alert',
                validarGenerarL: '',
                validarGenerarR: ' is empty',
                cursosNav: 'Courses',
                experienciaNav: 'Experience',
                estudiosNav: 'University',
                datosNav: 'Personal data',
                descripcionInd: 'Description (Please write in paragraph form)',
                bienvenido: 'Welcome',
                tiempoExperiencia: 'Years of professional experience',
                tiempoExpEtiqueta: 'Total years of professional experience to date'
                // Agrega más claves y valores según sea necesario para otros elementos de la interfaz de usuario en inglés
            },
            es: {
                selectLanguage: 'Seleccionar idioma',
                menu: 'Menú',
                nombre: 'Nombre',
                apellidos: 'Apellidos',
                nacionalidad: 'Nacionalidad',
                edad: 'Edad',
                ciudad: 'Ciudad de residencia actual',
                pais: 'País de residencia actual',
                obligatorio: 'El campo es obligatorio',
                actual: 'Actual',
                universidad: 'Universidad',
                carrera: 'Carrera',
                fechaIniU: 'Seleccione fecha de inicio',
                fechaFinU: 'Seleccione fecha de fin',
                fechaActual: 'Seleccione fecha',
                puesto: 'Puesto',
                empresa: 'Empresa',
                actividades: 'Actividades',
                conocimiento: 'Conocimiento',
                logros: 'Indique tres (3) principales logros',
                funciones: 'Indique tres (3) principales funciones',
                formulario: 'Formulario',
                generarDoc: 'Generar documento',
                guardarCono: 'Guardar Conocimiento',
                guardarEstu: 'Guardar Estudio',
                guardarExp: 'Guardar Experiencia Laboral',
                guardarOtro: 'Guardar otro estudio',
                guardarIdioma: 'Guardar idioma',
                eliminar: 'Eliminar',
                fechaInicio: 'Fecha de inicio',
                fechaFin: 'Fecha de fin',
                organizacion: 'Organización',
                tiempodeEst: 'Tiempo de estudios',
                selectidioma: 'Selecciona el idioma',
                idioma: 'Idioma',
                logroet: 'Logros',
                funcionet: 'Funciones',
                descripcion: 'Descripción',
                entidad: 'Ingrese entidad en donde curso',
                entidadet: 'Entidad',
                cantidad: 'Cantidad de tiempo (Aproximado)',
                horas: 'Horas',
                meses: 'Meses',
                dias: 'Días',
                year: 'Años',
                apellidonombre: 'Apellido y nombre',
                datospersonales: 'DATOS PERSONALES',
                estudioscursados: 'ESTUDIOS CURSADOS',
                generacion: 'Generación',
                actualidad: 'Actualmente',
                conocimientotec: 'CONOCIMIENTO TECNICO',
                experiencialab: 'EXPERIENCIA LABORAL',
                fecha: 'Fecha',
                otrosEstudios: 'OTROS ESTUDIOS',
                comentarios: 'Comentarios',
                tiposcurso: 'CURSOS, DIPLOMADO, MAESTRIA, DOCTORADO, CERTIFICACIÓN',
                estilos: 'Diseño del documento',
                estilo1: 'Una columna',
                estilo2: 'Dos columnas',
                idiomas: 'Idiomas',
                comentariotTitulo: 'NOTAS O COMENTARIOS',
                indicaConocimiento: 'Seleccione el conocimiento en la tabla (En la casilla) o ingrese un nuevo conocimiento (Escriba en el campo)',
                residenciaactual: 'Residencia actual',
                indicaSkill: 'Seleccione la habilidad en la tabla (En la casilla) o ingrese una nueva habilidad (Escriba en el campo)',
                skill: 'Habilidad blanda',
                guardarSkill: 'Guardar habilidad blanda',
                skillEt: 'HABILIDADES BLANDAS',
                lenguajeProgramacion: 'Lenguaje de programación',
                conocimiento5: 'Sistemas de vision',
                conocimiento6: 'Accionamientos / Protecciones',
                conocimiento7: 'Lectura y diseños de Planos Electricos',
                indicacion: 'En este formulario se generara un documento en WORD, favor de enviarlo al personal de recursos humanos.',
                selectnivel: 'Selecciona el nivel del idioma',
                basico: 'Básico',
                intermedio: 'Intermedio',
                avanzado: 'Avanzado',
                descripcionAct: 'Describa sus actividades',
                mesesArray: [
                    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                ],
                ingles: 'Inglés',
                validar: 'Por favor completa todos los campos obligatorios.',
                agregarExp: 'Recuerda agregar todas tus experiencias para que tu cv este completo',
                alerta: 'Alerta',
                validarGenerarL: 'La sección de ',
                validarGenerarR: ' está vacío',
                cursosNav: 'Cursos',
                experienciaNav: 'Experiencia',
                estudiosNav: 'Universidad',
                datosNav: 'Datos personales',
                descripcionInd: 'Descripción (Favor de escribirlo en forma de párrafos)',
                bienvenido: 'Bienvenido',
                tiempoExperiencia: 'Años de experiencia profesional',
                tiempoExpEtiqueta: 'Total de años de experiencia profesional a la fecha'
                // Agrega más claves y valores según sea necesario para otros elementos de la interfaz de usuario en español
            }
            // Agrega más idiomas según sea necesario
        };
        this._languageTextsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.languageTexts.es);
        this.languageTexts$ = this._languageTextsSubject.asObservable();
    }
    getLanguageTexts(language) {
        this.language = language;
        return this.languageTexts[language] || this.languageTexts['en']; // Fallback al inglés si no se encuentra el idioma
    }
    updateLanguageTexts(language) {
        this.languageTextsArray = this.getLanguageTexts(language);
        this._languageTextsSubject.next(this.languageTextsArray);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map