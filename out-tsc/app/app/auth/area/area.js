import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatLabel } from "@angular/material/select";
import { MatProgressSpinner, MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/table";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/dialog";
const _c0 = ["areaDialog"];
const _c1 = () => [5, 10, 25, 100];
function Area_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function Area_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function Area_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r3._id ?? elemento_r3.id, " ");
} }
function Area_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Nombre ");
    i0.ɵɵelementEnd();
} }
function Area_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r4.name, " ");
} }
function Area_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Descripci\u00F3n ");
    i0.ɵɵelementEnd();
} }
function Area_td_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r5.description, " ");
} }
function Area_th_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Activa ");
    i0.ɵɵelementEnd();
} }
function Area_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r6.active, " ");
} }
function Area_th_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Acciones ");
    i0.ɵɵelementEnd();
} }
function Area_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 19)(1, "button", 20);
    i0.ɵɵlistener("click", function Area_td_30_Template_button_click_1_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.editarArea(elemento_r8)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 21);
    i0.ɵɵlistener("click", function Area_td_30_Template_button_click_4_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.eliminarArea(elemento_r8)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete");
    i0.ɵɵelementEnd()()();
} }
function Area_tr_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function Area_tr_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
function Area_ng_template_34_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Nombre del \u00E1rea a crear. ");
    i0.ɵɵelementEnd();
} }
function Area_ng_template_34_small_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Descripci\u00F3n es requerida. ");
    i0.ɵɵelementEnd();
} }
function Area_ng_template_34_label_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 36);
    i0.ɵɵelement(1, "input", 37);
    i0.ɵɵtext(2, " \u00C1rea activa ");
    i0.ɵɵelementEnd();
} }
function Area_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 24);
    i0.ɵɵlistener("ngSubmit", function Area_ng_template_34_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSubmit()); });
    i0.ɵɵelementStart(1, "h2", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-dialog-content")(4, "p");
    i0.ɵɵtext(5, "Por favor, completa los datos.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 26)(7, "label", 27);
    i0.ɵɵtext(8, "Nombre");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 28);
    i0.ɵɵtemplate(10, Area_ng_template_34_small_10_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 26)(12, "label", 30);
    i0.ɵɵtext(13, "Descripci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 31);
    i0.ɵɵtemplate(15, Area_ng_template_34_small_15_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, Area_ng_template_34_label_16_Template, 3, 0, "label", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-dialog-actions", 33)(18, "button", 34);
    i0.ɵɵlistener("click", function Area_ng_template_34_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.cerrarFormulario()); });
    i0.ɵɵtext(19, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 35);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r8.areaForm);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.editingId ? "Editar \u00E1rea" : "Nueva \u00E1rea");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r8.areaForm.get("name")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx_r8.areaForm.get("name")) == null ? null : tmp_4_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r8.areaForm.get("description")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r8.areaForm.get("description")) == null ? null : tmp_5_0.touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r8.editingId);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r8.areaForm.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r8.editingId ? "Guardar cambios" : "Registrar \u00E1rea", " ");
} }
export class Area {
    authService;
    router;
    breakpointObserver;
    areaDialog;
    areaForm;
    editingId;
    user;
    constructor(authService, router, breakpointObserver) {
        this.authService = authService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.areaForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            active: new FormControl(true),
        });
    }
    http = inject(HttpClient);
    dialog = inject(MatDialog);
    dialogRef;
    // Configuración de Tabla
    columnasVisibles = ['id', 'nombre', 'descripción', 'activa', 'acciones'];
    datos = new MatTableDataSource([]);
    cargando = false;
    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    ngOnInit() {
        this.cargarDatos();
        this.authService.getUser().subscribe({
            next: (response) => {
                console.log('User data:', response);
                if (response.status === 'success') {
                    this.user = response.user;
                }
                else {
                    console.log('Failed to fetch user data');
                }
            },
            error: (error) => {
                console.log('Failed to fetch user data:', error);
            },
        });
    }
    cargarDatos() {
        console.log('Se ejecuta la función de carga de áreas');
        this.cargando = true;
        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);
        this.authService.getAreas(params).subscribe({
            next: (respuesta) => {
                const areas = respuesta.areas ?? respuesta;
                this.datos.data = Array.isArray(areas) ? areas : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.cargando = false;
            },
            error: () => (this.cargando = false),
        });
    }
    onFiltrar(evento) {
        const valorFiltro = evento.target.value;
        this.filtroBusqueda = valorFiltro.trim().toLowerCase();
        this.paginaActual = 0; // Reiniciar a la primera página tras filtrar
        this.cargarDatos();
    }
    onCambiarPagina(evento) {
        this.paginaActual = evento.pageIndex;
        this.tamanoPagina = evento.pageSize;
        this.cargarDatos();
    }
    abrirFormulario(contenido) {
        this.editingId = undefined;
        this.areaForm.reset({ name: '', description: '', active: true });
        this.dialogRef = this.dialog.open(contenido, {
            width: '480px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }
    cerrarFormulario() {
        this.dialogRef?.close();
    }
    crearArea() {
        const formData = this.areaForm.value;
        const request = this.editingId
            ? this.authService.updateArea(this.editingId, formData)
            : this.authService.createArea(formData);
        request.subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Área guardada correctamente.');
                this.cerrarFormulario();
                this.cargarDatos();
            },
            error: (error) => {
                console.log('Registration failed:', error);
            },
        });
    }
    editarArea(area) {
        this.editingId = area._id ?? area.id;
        this.areaForm.patchValue({ name: area.name, description: area.description, active: area.active ?? true });
        this.dialogRef = this.dialog.open(this.areaDialog, {
            width: '480px', maxWidth: '95vw', disableClose: true,
        });
    }
    eliminarArea(area) {
        const id = area._id ?? area.id;
        if (!id || !window.confirm(`¿Eliminar el área "${area.name}"?`))
            return;
        this.authService.deleteArea(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Área eliminada correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el área.'),
        });
    }
    onSubmit() {
        if (this.areaForm.invalid) {
            this.areaForm.markAllAsTouched();
            return;
        }
        this.crearArea();
    }
    static ɵfac = function Area_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Area)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.BreakpointObserver)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Area, selectors: [["app-area"]], viewQuery: function Area_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.areaDialog = _t.first);
        } }, decls: 36, vars: 8, consts: [["areaDialog", ""], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ej. Sistemas", 3, "keyup"], [1, "espaciador-flexible"], ["mat-flat-button", "", "type", "button", 1, "my_button", 3, "click"], [1, "loading-spinner"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "descripci\u00F3n"], ["matColumnDef", "activa"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Seleccionar p\u00E1gina", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 1, "deleteButton", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "solicitud-form", 3, "ngSubmit", "formGroup"], ["mat-dialog-title", ""], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "\u00C1rea"], [4, "ngIf"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description", "placeholder", "Descripci\u00F3n"], ["class", "checkbox-row", 4, "ngIf"], ["align", "end"], ["type", "button", "mat-button", "", 1, "cancel-btn", 3, "click"], ["type", "submit", "mat-flat-button", "", 1, "submit-btn", 3, "disabled"], [1, "checkbox-row"], ["type", "checkbox", "formControlName", "active"]], template: function Area_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "h2");
            i0.ɵɵtext(2, "\u00C1reas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
            i0.ɵɵtext(5, "Buscar por nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 3);
            i0.ɵɵlistener("keyup", function Area_Template_input_keyup_6_listener($event) { return ctx.onFiltrar($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵelement(8, "span", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function Area_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const areaDialog_r2 = i0.ɵɵreference(35); return i0.ɵɵresetView(ctx.abrirFormulario(areaDialog_r2)); });
            i0.ɵɵelementStart(10, "mat-icon");
            i0.ɵɵtext(11, "add_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, " Agregar");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(14, Area_Conditional_14_Template, 2, 0, "div", 6);
            i0.ɵɵelementStart(15, "table", 7);
            i0.ɵɵelementContainerStart(16, 8);
            i0.ɵɵtemplate(17, Area_th_17_Template, 2, 0, "th", 9)(18, Area_td_18_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(19, 11);
            i0.ɵɵtemplate(20, Area_th_20_Template, 2, 0, "th", 9)(21, Area_td_21_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(22, 12);
            i0.ɵɵtemplate(23, Area_th_23_Template, 2, 0, "th", 9)(24, Area_td_24_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(25, 13);
            i0.ɵɵtemplate(26, Area_th_26_Template, 2, 0, "th", 9)(27, Area_td_27_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(28, 14);
            i0.ɵɵtemplate(29, Area_th_29_Template, 2, 0, "th", 9)(30, Area_td_30_Template, 7, 0, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(31, Area_tr_31_Template, 1, 0, "tr", 15)(32, Area_tr_32_Template, 1, 0, "tr", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "mat-paginator", 17);
            i0.ɵɵlistener("page", function Area_Template_mat_paginator_page_33_listener($event) { return ctx.onCambiarPagina($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(34, Area_ng_template_34_Template, 22, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵconditional(ctx.cargando ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("dataSource", ctx.datos);
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("matHeaderRowDef", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("matRowDefColumns", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("length", ctx.totalRegistros)("pageSize", ctx.tamanoPagina)("pageSizeOptions", i0.ɵɵpureFunction0(7, _c1));
        } }, dependencies: [CommonModule, i4.NgIf, ReactiveFormsModule, i5.ɵNgNoValidate, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.FormGroupDirective, i5.FormControlName, MatTableModule, i6.MatTable, i6.MatHeaderCellDef, i6.MatHeaderRowDef, i6.MatColumnDef, i6.MatCellDef, i6.MatRowDef, i6.MatHeaderCell, i6.MatCell, i6.MatHeaderRow, i6.MatRow, MatFormField,
            MatLabel,
            MatProgressSpinner,
            MatIcon,
            MatPaginator,
            MatPaginatorModule,
            MatInputModule, i7.MatInput, MatFormFieldModule,
            MatProgressSpinnerModule,
            MatButtonModule, i8.MatButton, i8.MatIconButton, MatDialogModule, i9.MatDialogTitle, i9.MatDialogActions, i9.MatDialogContent], styles: [".my_button[_ngcontent-%COMP%] {\n    background-color: #0194fe;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n    color: #f44336;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; \n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n    color: #555555;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%], \nmat-dialog-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n.checkbox-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }\n\n#filosofia-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: right;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Area, [{
        type: Component,
        args: [{ selector: 'app-area', imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatTableModule,
                    MatFormField,
                    MatLabel,
                    MatProgressSpinner,
                    MatIcon,
                    MatPaginator,
                    MatFormField,
                    MatLabel,
                    MatPaginatorModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatProgressSpinnerModule,
                    MatButtonModule,
                    MatDialogModule,
                ], template: "<div class=\"table-container\">\n    <!-- Filtro de B\u00FAsqueda -->\n    <h2>\u00C1reas</h2>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Buscar por nombre</mat-label>\n        <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Ej. Sistemas\">\n    </mat-form-field>\n    <div>\n        <span class=\"espaciador-flexible\"></span>\n        <button mat-flat-button class=\"my_button\" type=\"button\" (click)=\"abrirFormulario(areaDialog)\">\n            <mat-icon>add_circle</mat-icon>\n            <span> Agregar</span>\n        </button>\n    </div>\n\n\n    <!-- Spinner de Carga -->\n    @if (cargando) {\n    <div class=\"loading-spinner\">\n        <mat-spinner></mat-spinner>\n    </div>\n    }\n\n    <!-- Tabla Angular Material -->\n    <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n\n        <!-- Columna ID -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> ID </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento._id ?? elemento.id}} </td>\n        </ng-container>\n\n        <!-- Columna Nombre -->\n        <ng-container matColumnDef=\"nombre\">\n            <th mat-header-cell *matHeaderCellDef> Nombre </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.name}} </td>\n        </ng-container>\n\n        <!-- Columna Descripci\u00F3n -->\n        <ng-container matColumnDef=\"descripci\u00F3n\">\n            <th mat-header-cell *matHeaderCellDef> Descripci\u00F3n </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.description}} </td>\n        </ng-container>\n\n        <!-- Columna Rol -->\n        <ng-container matColumnDef=\"activa\">\n            <th mat-header-cell *matHeaderCellDef> Activa </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.active}} </td>\n        </ng-container>\n\n        <!-- Columna Acciones -->\n        <ng-container matColumnDef=\"acciones\">\n            <th mat-header-cell *matHeaderCellDef> Acciones </th>\n            <td mat-cell *matCellDef=\"let elemento\">\n                <button mat-icon-button (click)=\"editarArea(elemento)\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n                <button mat-icon-button class=\"deleteButton\" (click)=\"eliminarArea(elemento)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columnasVisibles;\"></tr>\n    </table>\n\n    <!-- Paginador -->\n    <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\n        (page)=\"onCambiarPagina($event)\" aria-label=\"Seleccionar p\u00E1gina\">\n    </mat-paginator>\n</div>\n\n<ng-template #areaDialog>\n    <form [formGroup]=\"areaForm\" (ngSubmit)=\"onSubmit()\" class=\"solicitud-form\">\n        <h2 mat-dialog-title>{{ editingId ? 'Editar \u00E1rea' : 'Nueva \u00E1rea' }}</h2>\n        <mat-dialog-content>\n            <p>Por favor, completa los datos.</p>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Nombre</label>\n                <input type=\"text\" id=\"name\" formControlName=\"name\" placeholder=\"\u00C1rea\">\n                <small *ngIf=\"areaForm.get('name')?.hasError('required') && areaForm.get('name')?.touched\">\n                    Nombre del \u00E1rea a crear.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"description\">Descripci\u00F3n</label>\n                <input type=\"text\" id=\"description\" formControlName=\"description\" placeholder=\"Descripci\u00F3n\">\n                <small\n                    *ngIf=\"areaForm.get('description')?.hasError('required') && areaForm.get('description')?.touched\">\n                    Descripci\u00F3n es requerida.\n                </small>\n            </div>\n            <label class=\"checkbox-row\" *ngIf=\"editingId\">\n                <input type=\"checkbox\" formControlName=\"active\">\n                \u00C1rea activa\n            </label>\n        </mat-dialog-content>\n\n        <mat-dialog-actions align=\"end\">\n            <button type=\"button\" mat-button class=\"cancel-btn\" (click)=\"cerrarFormulario()\">Cancelar</button>\n            <button type=\"submit\" mat-flat-button [disabled]=\"areaForm.invalid\" class=\"submit-btn\">\n                {{ editingId ? 'Guardar cambios' : 'Registrar \u00E1rea' }}\n            </button>\n        </mat-dialog-actions>\n    </form>\n</ng-template>\n", styles: [".my_button {\n    background-color: #0194fe;\n}\n\n.deleteButton {\n    color: #f44336;\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.form-group {\n    margin-bottom: 1.2rem;\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group input {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group select {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; /* Asegura fondo blanco en select */\n}\n\n.form-group input:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group select:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn {\n    color: #555555;\n}\n\nmat-dialog-actions {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions .submit-btn,\nmat-dialog-actions .cancel-btn {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group small {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n.checkbox-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }\n\n#filosofia-cintilla h1 {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\n.espaciador-flexible {\n    flex: 1 1 auto;\n    justify-content: right;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }], { areaDialog: [{
            type: ViewChild,
            args: ['areaDialog']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Area, { className: "Area", filePath: "app/auth/area/area.ts", lineNumber: 41 }); })();
