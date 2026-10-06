import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/table";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/dialog";
const _c0 = ["inventoryDialog"];
const _c1 = () => [5, 10, 25, 100];
function Inventory_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function Inventory_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function Inventory_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r3.id, " ");
} }
function Inventory_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Nombre ");
    i0.ɵɵelementEnd();
} }
function Inventory_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r4.type, " ");
} }
function Inventory_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Marca ");
    i0.ɵɵelementEnd();
} }
function Inventory_td_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r5.brand, " ");
} }
function Inventory_th_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Asignado a ");
    i0.ɵɵelementEnd();
} }
function Inventory_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", (elemento_r6.assigned_to == null ? null : elemento_r6.assigned_to.username) ?? elemento_r6.assigned_to, " ");
} }
function Inventory_th_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Acciones ");
    i0.ɵɵelementEnd();
} }
function Inventory_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 19)(1, "button", 20);
    i0.ɵɵlistener("click", function Inventory_td_30_Template_button_click_1_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.editarItem(elemento_r8)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 21);
    i0.ɵɵlistener("click", function Inventory_td_30_Template_button_click_4_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.eliminarItem(elemento_r8)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete");
    i0.ɵɵelementEnd()()();
} }
function Inventory_tr_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function Inventory_tr_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
function Inventory_ng_template_34_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " El tipo de dispositivo es requerido. ");
    i0.ɵɵelementEnd();
} }
function Inventory_ng_template_34_small_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Marca es requerida. ");
    i0.ɵɵelementEnd();
} }
function Inventory_ng_template_34_small_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Modelo es requerida. ");
    i0.ɵɵelementEnd();
} }
function Inventory_ng_template_34_small_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " N\u00FAmero de serie es requerida. ");
    i0.ɵɵelementEnd();
} }
function Inventory_ng_template_34_small_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " El estado es requerido. ");
    i0.ɵɵelementEnd();
} }
function Inventory_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 24);
    i0.ɵɵlistener("ngSubmit", function Inventory_ng_template_34_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSubmit()); });
    i0.ɵɵelementStart(1, "h2", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-dialog-content")(4, "p");
    i0.ɵɵtext(5, "Por favor, completa los datos.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 26)(7, "label", 27);
    i0.ɵɵtext(8, "Tipo de dispositivo");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 28);
    i0.ɵɵtemplate(10, Inventory_ng_template_34_small_10_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 26)(12, "label", 30);
    i0.ɵɵtext(13, "Marca");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 31);
    i0.ɵɵtemplate(15, Inventory_ng_template_34_small_15_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 26)(17, "label", 32);
    i0.ɵɵtext(18, "Modelo");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 33);
    i0.ɵɵtemplate(20, Inventory_ng_template_34_small_20_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 26)(22, "label", 34);
    i0.ɵɵtext(23, "N\u00FAmero de serie");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "input", 35);
    i0.ɵɵtemplate(25, Inventory_ng_template_34_small_25_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 26)(27, "label", 36);
    i0.ɵɵtext(28, "Estado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "select", 37)(30, "option", 38);
    i0.ɵɵtext(31, "Seleccionar opci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 39);
    i0.ɵɵtext(33, "Activo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 40);
    i0.ɵɵtext(35, "Baja");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "option", 41);
    i0.ɵɵtext(37, "Mantenimiento");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(38, Inventory_ng_template_34_small_38_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "mat-dialog-actions", 42)(40, "button", 43);
    i0.ɵɵlistener("click", function Inventory_ng_template_34_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.cerrarFormulario()); });
    i0.ɵɵtext(41, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "button", 44);
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r8.inventoryForm);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.editingId ? "Editar equipo" : "Nuevo equipo");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r8.inventoryForm.get("type")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx_r8.inventoryForm.get("type")) == null ? null : tmp_4_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r8.inventoryForm.get("brand")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r8.inventoryForm.get("brand")) == null ? null : tmp_5_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx_r8.inventoryForm.get("model")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx_r8.inventoryForm.get("model")) == null ? null : tmp_6_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_7_0 = ctx_r8.inventoryForm.get("serial_number")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx_r8.inventoryForm.get("serial_number")) == null ? null : tmp_7_0.touched));
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ((tmp_8_0 = ctx_r8.inventoryForm.get("status")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx_r8.inventoryForm.get("status")) == null ? null : tmp_8_0.touched));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r8.inventoryForm.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r8.editingId ? "Guardar cambios" : "Registrar equipo", " ");
} }
export class Inventory {
    authService;
    router;
    inventoryDialog;
    inventoryForm;
    editingId;
    user;
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.inventoryForm = new FormGroup({
            type: new FormControl('', Validators.required),
            brand: new FormControl('', Validators.required),
            model: new FormControl('', Validators.required),
            serial_number: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
        });
    }
    http = inject(HttpClient);
    dialog = inject(MatDialog);
    dialogRef;
    // Configuración de Tabla
    columnasVisibles = ['id', 'tipo', 'marca', 'asignado', 'acciones'];
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
        console.log('Se ejecuta la función de carga de categorías');
        this.cargando = true;
        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);
        this.authService.getItems(params).subscribe({
            next: (respuesta) => {
                const items = respuesta.items ?? respuesta;
                console.log('Aquí la respuesta:', items);
                // Tu API debe retornar los renglones y el total general de coincidencias
                this.datos.data = Array.isArray(items) ? items : [];
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
        this.inventoryForm.reset({
            type: '',
            brand: '',
            model: '',
            serial_number: '',
            status: '',
        });
        this.dialogRef = this.dialog.open(contenido, {
            width: '480px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }
    cerrarFormulario() {
        this.dialogRef?.close();
    }
    editarItem(item) {
        this.editingId = item._id ?? item.id;
        this.inventoryForm.patchValue({
            type: item.type,
            brand: item.brand,
            model: item.model,
            serial_number: item.serial_number,
            status: item.status,
        });
        this.dialogRef = this.dialog.open(this.inventoryDialog, {
            width: '480px', maxWidth: '95vw', disableClose: true,
        });
    }
    eliminarItem(item) {
        const id = item._id ?? item.id;
        if (!id || !window.confirm(`¿Eliminar el equipo con serie "${item.serial_number}"?`))
            return;
        this.authService.deleteItem(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Equipo eliminado correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el equipo.'),
        });
    }
    onSubmit() {
        if (this.inventoryForm.invalid) {
            this.inventoryForm.markAllAsTouched();
            return;
        }
        const formData = this.inventoryForm.value;
        console.log('Form Data:', formData);
        const request = this.editingId
            ? this.authService.updateItem(this.editingId, formData)
            : this.authService.createItem(formData);
        request.subscribe({
            next: (response) => {
                console.log('Registration successful:', response);
                window.alert(response.message);
                this.cerrarFormulario();
                this.cargarDatos();
            },
            error: (error) => {
                console.log('Registration failed:', error);
            },
        });
    }
    static ɵfac = function Inventory_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Inventory)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Inventory, selectors: [["app-inventory"]], viewQuery: function Inventory_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inventoryDialog = _t.first);
        } }, decls: 36, vars: 8, consts: [["inventoryDialog", ""], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ej. Sistemas", 3, "keyup"], [1, "espaciador-flexible"], ["mat-flat-button", "", "type", "button", 1, "my_button", 3, "click"], [1, "loading-spinner"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tipo"], ["matColumnDef", "marca"], ["matColumnDef", "asignado"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Seleccionar p\u00E1gina", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 1, "deleteButton", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "solicitud-form", 3, "ngSubmit", "formGroup"], ["mat-dialog-title", ""], [1, "form-group"], ["for", "type"], ["type", "text", "id", "type", "formControlName", "type", "placeholder", "Tipo dispositivo"], [4, "ngIf"], ["for", "brand"], ["type", "text", "id", "brand", "formControlName", "brand", "placeholder", "Descripci\u00F3n"], ["for", "model"], ["type", "text", "id", "model", "formControlName", "model", "placeholder", "Modelo"], ["for", "serial_number"], ["type", "text", "id", "serial_number", "formControlName", "serial_number", "placeholder", "N/Serie"], ["for", "status"], ["id", "status", "formControlName", "status"], ["value", "", "disabled", ""], ["value", "activo"], ["value", "baja"], ["value", "mantenimiento"], ["align", "end"], ["type", "button", "mat-button", "", 1, "cancel-btn", 3, "click"], ["type", "submit", "mat-flat-button", "", 1, "submit-btn", 3, "disabled"]], template: function Inventory_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "h2");
            i0.ɵɵtext(2, "Inventario");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
            i0.ɵɵtext(5, "Buscar por nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 3);
            i0.ɵɵlistener("keyup", function Inventory_Template_input_keyup_6_listener($event) { return ctx.onFiltrar($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵelement(8, "span", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function Inventory_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const inventoryDialog_r2 = i0.ɵɵreference(35); return i0.ɵɵresetView(ctx.abrirFormulario(inventoryDialog_r2)); });
            i0.ɵɵelementStart(10, "mat-icon");
            i0.ɵɵtext(11, "add_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, " Agregar");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(14, Inventory_Conditional_14_Template, 2, 0, "div", 6);
            i0.ɵɵelementStart(15, "table", 7);
            i0.ɵɵelementContainerStart(16, 8);
            i0.ɵɵtemplate(17, Inventory_th_17_Template, 2, 0, "th", 9)(18, Inventory_td_18_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(19, 11);
            i0.ɵɵtemplate(20, Inventory_th_20_Template, 2, 0, "th", 9)(21, Inventory_td_21_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(22, 12);
            i0.ɵɵtemplate(23, Inventory_th_23_Template, 2, 0, "th", 9)(24, Inventory_td_24_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(25, 13);
            i0.ɵɵtemplate(26, Inventory_th_26_Template, 2, 0, "th", 9)(27, Inventory_td_27_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(28, 14);
            i0.ɵɵtemplate(29, Inventory_th_29_Template, 2, 0, "th", 9)(30, Inventory_td_30_Template, 7, 0, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(31, Inventory_tr_31_Template, 1, 0, "tr", 15)(32, Inventory_tr_32_Template, 1, 0, "tr", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "mat-paginator", 17);
            i0.ɵɵlistener("page", function Inventory_Template_mat_paginator_page_33_listener($event) { return ctx.onCambiarPagina($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(34, Inventory_ng_template_34_Template, 44, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
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
        } }, dependencies: [CommonModule, i3.NgIf, ReactiveFormsModule, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName, MatTableModule, i5.MatTable, i5.MatHeaderCellDef, i5.MatHeaderRowDef, i5.MatColumnDef, i5.MatCellDef, i5.MatRowDef, i5.MatHeaderCell, i5.MatCell, i5.MatHeaderRow, i5.MatRow, MatFormField,
            MatLabel,
            MatProgressSpinner,
            MatIcon,
            MatPaginator,
            MatPaginatorModule,
            MatInputModule, i6.MatInput, MatFormFieldModule,
            MatProgressSpinnerModule,
            MatButtonModule, i7.MatButton, i7.MatIconButton, MatDialogModule, i8.MatDialogTitle, i8.MatDialogActions, i8.MatDialogContent], styles: [".my_button[_ngcontent-%COMP%] {\n    background-color: #0194fe;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n    color: #f44336;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; \n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n    color: #555555;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%], \nmat-dialog-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n#filosofia-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: right;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Inventory, [{
        type: Component,
        args: [{ selector: 'app-inventory', imports: [
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
                ], template: "<div class=\"table-container\">\n    <!-- Filtro de B\u00FAsqueda -->\n    <h2>Inventario</h2>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Buscar por nombre</mat-label>\n        <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Ej. Sistemas\">\n    </mat-form-field>\n    <div>\n        <span class=\"espaciador-flexible\"></span>\n        <button mat-flat-button class=\"my_button\" type=\"button\" (click)=\"abrirFormulario(inventoryDialog)\">\n            <mat-icon>add_circle</mat-icon>\n            <span> Agregar</span>\n        </button>\n    </div>\n\n\n    <!-- Spinner de Carga -->\n    @if (cargando) {\n    <div class=\"loading-spinner\">\n        <mat-spinner></mat-spinner>\n    </div>\n    }\n\n    <!-- Tabla Angular Material -->\n    <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n\n        <!-- Columna ID -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> ID </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{ elemento.id}} </td>\n        </ng-container>\n\n        <!-- Columna Nombre -->\n        <ng-container matColumnDef=\"tipo\">\n            <th mat-header-cell *matHeaderCellDef> Nombre </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.type}} </td>\n        </ng-container>\n\n        <!-- Columna Descripci\u00F3n -->\n        <ng-container matColumnDef=\"marca\">\n            <th mat-header-cell *matHeaderCellDef> Marca </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.brand}} </td>\n        </ng-container>\n\n        <!-- Columna Rol -->\n        <ng-container matColumnDef=\"asignado\">\n            <th mat-header-cell *matHeaderCellDef> Asignado a </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.assigned_to?.username ?? elemento.assigned_to}} </td>\n        </ng-container>\n\n        <!-- Columna Acciones -->\n        <ng-container matColumnDef=\"acciones\">\n            <th mat-header-cell *matHeaderCellDef> Acciones </th>\n            <td mat-cell *matCellDef=\"let elemento\">\n                <button mat-icon-button (click)=\"editarItem(elemento)\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n                <button mat-icon-button class=\"deleteButton\" (click)=\"eliminarItem(elemento)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columnasVisibles;\"></tr>\n    </table>\n\n    <!-- Paginador -->\n    <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\n        (page)=\"onCambiarPagina($event)\" aria-label=\"Seleccionar p\u00E1gina\">\n    </mat-paginator>\n</div>\n\n<ng-template #inventoryDialog>\n    <form [formGroup]=\"inventoryForm\" (ngSubmit)=\"onSubmit()\" class=\"solicitud-form\">\n        <h2 mat-dialog-title>{{ editingId ? 'Editar equipo' : 'Nuevo equipo' }}</h2>\n        <mat-dialog-content>\n            <p>Por favor, completa los datos.</p>\n\n            <div class=\"form-group\">\n                <label for=\"type\">Tipo de dispositivo</label>\n                <input type=\"text\" id=\"type\" formControlName=\"type\" placeholder=\"Tipo dispositivo\">\n                <small *ngIf=\"inventoryForm.get('type')?.hasError('required') && inventoryForm.get('type')?.touched\">\n                    El tipo de dispositivo es requerido.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"brand\">Marca</label>\n                <input type=\"text\" id=\"brand\" formControlName=\"brand\" placeholder=\"Descripci\u00F3n\">\n                <small *ngIf=\"inventoryForm.get('brand')?.hasError('required') && inventoryForm.get('brand')?.touched\">\n                    Marca es requerida.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"model\">Modelo</label>\n                <input type=\"text\" id=\"model\" formControlName=\"model\" placeholder=\"Modelo\">\n                <small *ngIf=\"inventoryForm.get('model')?.hasError('required') && inventoryForm.get('model')?.touched\">\n                    Modelo es requerida.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"serial_number\">N\u00FAmero de serie</label>\n                <input type=\"text\" id=\"serial_number\" formControlName=\"serial_number\" placeholder=\"N/Serie\">\n                <small\n                    *ngIf=\"inventoryForm.get('serial_number')?.hasError('required') && inventoryForm.get('serial_number')?.touched\">\n                    N\u00FAmero de serie es requerida.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"status\">Estado</label>\n                <select id=\"status\" formControlName=\"status\">\n                    <option value=\"\" disabled>Seleccionar opci\u00F3n</option>\n                    <option value=\"activo\">Activo</option>\n                    <option value=\"baja\">Baja</option>\n                    <option value=\"mantenimiento\">Mantenimiento</option>\n                </select>\n                <small\n                    *ngIf=\"inventoryForm.get('status')?.hasError('required') && inventoryForm.get('status')?.touched\">\n                    El estado es requerido.\n                </small>\n            </div>\n\n        </mat-dialog-content>\n\n        <mat-dialog-actions align=\"end\">\n            <button type=\"button\" mat-button class=\"cancel-btn\" (click)=\"cerrarFormulario()\">Cancelar</button>\n            <button type=\"submit\" mat-flat-button [disabled]=\"inventoryForm.invalid\" class=\"submit-btn\">\n                {{ editingId ? 'Guardar cambios' : 'Registrar equipo' }}\n            </button>\n        </mat-dialog-actions>\n    </form>\n</ng-template>\n", styles: [".my_button {\n    background-color: #0194fe;\n}\n\n.deleteButton {\n    color: #f44336;\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.form-group {\n    margin-bottom: 1.2rem;\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group input {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group select {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; /* Asegura fondo blanco en select */\n}\n\n.form-group input:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group select:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn {\n    color: #555555;\n}\n\nmat-dialog-actions {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions .submit-btn,\nmat-dialog-actions .cancel-btn {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group small {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n#filosofia-cintilla h1 {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\n.espaciador-flexible {\n    flex: 1 1 auto;\n    justify-content: right;\n}\n\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], { inventoryDialog: [{
            type: ViewChild,
            args: ['inventoryDialog']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Inventory, { className: "Inventory", filePath: "app/auth/inventory/inventory.ts", lineNumber: 40 }); })();
