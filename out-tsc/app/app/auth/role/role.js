import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpParams } from '@angular/common/http';
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
const _c0 = ["roleDialog"];
const _c1 = () => [5, 10, 25, 100];
function Role_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function Role_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function Role_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r3.id, " ");
} }
function Role_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Nombre ");
    i0.ɵɵelementEnd();
} }
function Role_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r4.name, " ");
} }
function Role_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Descripci\u00F3n ");
    i0.ɵɵelementEnd();
} }
function Role_td_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r5.description, " ");
} }
function Role_th_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Activa ");
    i0.ɵɵelementEnd();
} }
function Role_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r6.active, " ");
} }
function Role_th_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Acciones ");
    i0.ɵɵelementEnd();
} }
function Role_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 19)(1, "button", 20);
    i0.ɵɵlistener("click", function Role_td_30_Template_button_click_1_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.editarRole(elemento_r8)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 21);
    i0.ɵɵlistener("click", function Role_td_30_Template_button_click_4_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.eliminarRole(elemento_r8)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete");
    i0.ɵɵelementEnd()()();
} }
function Role_tr_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function Role_tr_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
function Role_ng_template_34_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Nombre del rol a crear. ");
    i0.ɵɵelementEnd();
} }
function Role_ng_template_34_small_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Descripci\u00F3n es requerida. ");
    i0.ɵɵelementEnd();
} }
function Role_ng_template_34_label_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 36);
    i0.ɵɵelement(1, "input", 37);
    i0.ɵɵtext(2, " Rol activo ");
    i0.ɵɵelementEnd();
} }
function Role_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 24);
    i0.ɵɵlistener("ngSubmit", function Role_ng_template_34_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSubmit()); });
    i0.ɵɵelementStart(1, "h2", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-dialog-content")(4, "p");
    i0.ɵɵtext(5, "Por favor, completa los datos.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 26)(7, "label", 27);
    i0.ɵɵtext(8, "Nombre de rol");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 28);
    i0.ɵɵtemplate(10, Role_ng_template_34_small_10_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 26)(12, "label", 30);
    i0.ɵɵtext(13, "Descripci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 31);
    i0.ɵɵtemplate(15, Role_ng_template_34_small_15_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, Role_ng_template_34_label_16_Template, 3, 0, "label", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-dialog-actions", 33)(18, "button", 34);
    i0.ɵɵlistener("click", function Role_ng_template_34_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.cerrarFormulario()); });
    i0.ɵɵtext(19, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 35);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r8.roleForm);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.editingId ? "Editar rol" : "Nuevo rol");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r8.roleForm.get("name")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx_r8.roleForm.get("name")) == null ? null : tmp_4_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r8.roleForm.get("description")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r8.roleForm.get("description")) == null ? null : tmp_5_0.touched));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r8.editingId);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r8.roleForm.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r8.editingId ? "Guardar cambios" : "Registrar rol", " ");
} }
export class Role {
    authService;
    router;
    breakpointObserver;
    roleDialog;
    roleForm;
    editingId;
    user;
    constructor(authService, router, breakpointObserver) {
        this.authService = authService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.roleForm = new FormGroup({
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
        console.log('Se ejecuta la función de carga de roles');
        this.cargando = true;
        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);
        this.authService.getRoles(params).subscribe({
            next: (respuesta) => {
                const roles = respuesta.roles ?? respuesta;
                this.datos.data = Array.isArray(roles) ? roles : [];
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
        this.roleForm.reset({ name: '', description: '', active: true });
        this.dialogRef = this.dialog.open(contenido, {
            width: '480px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }
    cerrarFormulario() {
        this.dialogRef?.close();
    }
    crearRole() {
        const formData = this.roleForm.value;
        console.log('Form Data:', formData);
        const request = this.editingId
            ? this.authService.updateRole(this.editingId, formData)
            : this.authService.createRole(formData);
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
    editarRole(role) {
        this.editingId = role._id ?? role.id;
        this.roleForm.patchValue({ name: role.name, description: role.description, active: role.active ?? true });
        this.dialogRef = this.dialog.open(this.roleDialog, {
            width: '480px', maxWidth: '95vw', disableClose: true,
        });
    }
    eliminarRole(role) {
        const id = role._id ?? role.id;
        if (!id || !window.confirm(`¿Eliminar el rol "${role.name}"?`))
            return;
        this.authService.deleteRole(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Rol eliminado correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el rol.'),
        });
    }
    onSubmit() {
        if (this.roleForm.invalid) {
            this.roleForm.markAllAsTouched();
            return;
        }
        this.crearRole();
    }
    static ɵfac = function Role_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Role)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.BreakpointObserver)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Role, selectors: [["app-role"]], viewQuery: function Role_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.roleDialog = _t.first);
        } }, decls: 36, vars: 8, consts: [["roleDialog", ""], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ej. Sistemas", 3, "keyup"], [1, "espaciador-flexible"], ["mat-flat-button", "", "type", "button", "color", "primary", 1, "my_button", 3, "click"], [1, "loading-spinner"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "descripci\u00F3n"], ["matColumnDef", "activa"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Seleccionar p\u00E1gina", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "type", "button", 1, "deleteButton", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "solicitud-form", 3, "ngSubmit", "formGroup"], ["mat-dialog-title", ""], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Nombre del rol"], [4, "ngIf"], ["for", "description"], ["type", "text", "id", "description", "formControlName", "description", "placeholder", "Descripci\u00F3n"], ["class", "checkbox-row", 4, "ngIf"], ["align", "end"], ["type", "button", "mat-button", "", 1, "cancel-btn", 3, "click"], ["type", "submit", "mat-flat-button", "", 1, "submit-btn", 3, "disabled"], [1, "checkbox-row"], ["type", "checkbox", "formControlName", "active"]], template: function Role_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "h2");
            i0.ɵɵtext(2, "Roles");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
            i0.ɵɵtext(5, "Buscar por nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 3);
            i0.ɵɵlistener("keyup", function Role_Template_input_keyup_6_listener($event) { return ctx.onFiltrar($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵelement(8, "span", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function Role_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const roleDialog_r2 = i0.ɵɵreference(35); return i0.ɵɵresetView(ctx.abrirFormulario(roleDialog_r2)); });
            i0.ɵɵelementStart(10, "mat-icon");
            i0.ɵɵtext(11, "add_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, " Agregar");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(14, Role_Conditional_14_Template, 2, 0, "div", 6);
            i0.ɵɵelementStart(15, "table", 7);
            i0.ɵɵelementContainerStart(16, 8);
            i0.ɵɵtemplate(17, Role_th_17_Template, 2, 0, "th", 9)(18, Role_td_18_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(19, 11);
            i0.ɵɵtemplate(20, Role_th_20_Template, 2, 0, "th", 9)(21, Role_td_21_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(22, 12);
            i0.ɵɵtemplate(23, Role_th_23_Template, 2, 0, "th", 9)(24, Role_td_24_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(25, 13);
            i0.ɵɵtemplate(26, Role_th_26_Template, 2, 0, "th", 9)(27, Role_td_27_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(28, 14);
            i0.ɵɵtemplate(29, Role_th_29_Template, 2, 0, "th", 9)(30, Role_td_30_Template, 7, 0, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(31, Role_tr_31_Template, 1, 0, "tr", 15)(32, Role_tr_32_Template, 1, 0, "tr", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "mat-paginator", 17);
            i0.ɵɵlistener("page", function Role_Template_mat_paginator_page_33_listener($event) { return ctx.onCambiarPagina($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(34, Role_ng_template_34_Template, 22, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
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
            MatButtonModule, i8.MatButton, i8.MatIconButton, MatDialogModule, i9.MatDialogTitle, i9.MatDialogActions, i9.MatDialogContent], styles: [".my_button[_ngcontent-%COMP%] {\n    background-color: #0194fe;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n    color: #f44336;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.solicitud-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #f4f7f6;\n}\n\n.solicitud-form[_ngcontent-%COMP%] {\n    background: #ffffff;\n    padding: 1rem;\n    border-radius: 10px;\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.solicitud-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n    color: #333333;\n}\n\n.solicitud-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666666;\n    font-size: 0.9rem;\n    margin-bottom: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; \n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n    color: #555555;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%], \nmat-dialog-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n.checkbox-row[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }\n\n#filosofia-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    float: left;\n    margin: 15px 10px 0px 0px;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: right;\n}\n\n@media (max-width: 930px) {\n    .media-funcion[_ngcontent-%COMP%] {\n        height: 85px;\n        padding: 10px 15px;\n    }\n\n    .social-media[_ngcontent-%COMP%] {\n        float: left;\n        padding: 10px 5px 10px 10px;\n    }\n\n    header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n        top: 185px;\n    }\n\n    .opcion-destacados[_ngcontent-%COMP%] {\n        height: 210px;\n    }\n\n    .opcion-destacados[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        width: 100%;\n        float: none;\n        clear: both;\n        margin-bottom: 25px;\n    }\n\n    .modulo[_ngcontent-%COMP%] {\n        height: 680px;\n    }\n\n    footer[_ngcontent-%COMP%] {\n        padding: 100px 0px 40px 0px;\n        margin: 10px 10px 0px 10px;\n    }\n\n    #copy[_ngcontent-%COMP%] {\n        margin: 0px 10px;\n    }\n\n    #articulo-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 16px;\n        line-height: 16px;\n    }\n\n    .dato-que[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        height: 400px;\n    }\n\n    .box-menu-lateral[_ngcontent-%COMP%] {\n        flex-basis: 220px;\n    }\n\n    .box-textos[_ngcontent-%COMP%] {\n        flex-basis: 500px;\n    }\n\n    .box-datos-contacto[_ngcontent-%COMP%] {\n        flex-basis: 250px;\n    }\n\n    .box-formulario-contacto[_ngcontent-%COMP%] {\n        flex-basis: 380px;\n    }\n\n    .campo[_ngcontent-%COMP%] {\n        float: none;\n        width: 100%;\n        margin-right: 0px;\n    }\n\n    .intro-directorio[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n\n    .img-carrusel[_ngcontent-%COMP%] {\n        width: 95%;\n    }\n\n    .container-cat[_ngcontent-%COMP%] {\n        height: 290px;\n    }\n\n    .sesion[_ngcontent-%COMP%] {\n        width: 85%;\n    }\n\n    #content-login[_ngcontent-%COMP%] {\n        margin-top: -50px;\n    }\n\n    .info-login[_ngcontent-%COMP%] {\n        width: 99%;\n    }\n\n    .img-login[_ngcontent-%COMP%] {\n        width: 200px;\n    }\n\n    .box-descrip-destacado[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 22px;\n        line-height: 25px;\n    }\n\n    .box-img-secc[_ngcontent-%COMP%] {\n        flex-basis: 200px;\n    }\n\n    .box-descrip-destacado[_ngcontent-%COMP%] {\n        flex-basis: 410px;\n    }\n\n    .ilustra-img-secc[_ngcontent-%COMP%] {\n        width: 99%;\n    }\n\n    .ruta-temas[_ngcontent-%COMP%] {\n        width: 98%;\n        font-size: 15px;\n        line-height: 18px;\n    }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Role, [{
        type: Component,
        args: [{ selector: 'app-role', imports: [
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
                ], template: "<div class=\"table-container\">\n    <!-- Filtro de B\u00FAsqueda -->\n    <h2>Roles</h2>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Buscar por nombre</mat-label>\n        <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Ej. Sistemas\">\n    </mat-form-field>\n    <div>\n        <span class=\"espaciador-flexible\"></span>\n        <button mat-flat-button class=\"my_button\" type=\"button\" color=\"primary\" (click)=\"abrirFormulario(roleDialog)\">\n            <mat-icon>add_circle</mat-icon>\n            <span> Agregar</span>\n        </button>\n    </div>\n\n\n    <!-- Spinner de Carga -->\n    @if (cargando) {\n    <div class=\"loading-spinner\">\n        <mat-spinner></mat-spinner>\n    </div>\n    }\n\n    <!-- Tabla Angular Material -->\n    <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n\n        <!-- Columna ID -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> ID </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.id}} </td>\n        </ng-container>\n\n        <!-- Columna Nombre -->\n        <ng-container matColumnDef=\"nombre\">\n            <th mat-header-cell *matHeaderCellDef> Nombre </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.name}} </td>\n        </ng-container>\n\n        <!-- Columna Descripci\u00F3n -->\n        <ng-container matColumnDef=\"descripci\u00F3n\">\n            <th mat-header-cell *matHeaderCellDef> Descripci\u00F3n </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.description}} </td>\n        </ng-container>\n\n        <!-- Columna Rol -->\n        <ng-container matColumnDef=\"activa\">\n            <th mat-header-cell *matHeaderCellDef> Activa </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.active}} </td>\n        </ng-container>\n\n        <!-- Columna Acciones -->\n        <ng-container matColumnDef=\"acciones\">\n            <th mat-header-cell *matHeaderCellDef> Acciones </th>\n            <td mat-cell *matCellDef=\"let elemento\">\n                <button mat-icon-button color=\"primary\" (click)=\"editarRole(elemento)\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n                <button mat-icon-button class=\"deleteButton\" type=\"button\" (click)=\"eliminarRole(elemento)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columnasVisibles;\"></tr>\n    </table>\n\n    <!-- Paginador -->\n    <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\n        (page)=\"onCambiarPagina($event)\" aria-label=\"Seleccionar p\u00E1gina\">\n    </mat-paginator>\n</div>\n\n<ng-template #roleDialog>\n    <form [formGroup]=\"roleForm\" (ngSubmit)=\"onSubmit()\" class=\"solicitud-form\">\n        <h2 mat-dialog-title>{{ editingId ? 'Editar rol' : 'Nuevo rol' }}</h2>\n        <mat-dialog-content>\n            <p>Por favor, completa los datos.</p>\n\n            <div class=\"form-group\">\n                <label for=\"name\">Nombre de rol</label>\n                <input type=\"text\" id=\"name\" formControlName=\"name\" placeholder=\"Nombre del rol\">\n                <small *ngIf=\"roleForm.get('name')?.hasError('required') && roleForm.get('name')?.touched\">\n                    Nombre del rol a crear.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"description\">Descripci\u00F3n</label>\n                <input type=\"text\" id=\"description\" formControlName=\"description\" placeholder=\"Descripci\u00F3n\">\n                <small *ngIf=\"roleForm.get('description')?.hasError('required') && roleForm.get('description')?.touched\">\n                    Descripci\u00F3n es requerida.\n                </small>\n            </div>\n            <label class=\"checkbox-row\" *ngIf=\"editingId\">\n                <input type=\"checkbox\" formControlName=\"active\">\n                Rol activo\n            </label>\n\n           </mat-dialog-content>\n\n        <mat-dialog-actions align=\"end\">\n            <button type=\"button\" mat-button class=\"cancel-btn\" (click)=\"cerrarFormulario()\">Cancelar</button>\n            <button type=\"submit\" mat-flat-button [disabled]=\"roleForm.invalid\" class=\"submit-btn\">\n                {{ editingId ? 'Guardar cambios' : 'Registrar rol' }}\n            </button>\n        </mat-dialog-actions>\n    </form>\n</ng-template>\n", styles: [".my_button {\n    background-color: #0194fe;\n}\n\n.deleteButton {\n    color: #f44336;\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.solicitud-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #f4f7f6;\n}\n\n.solicitud-form {\n    background: #ffffff;\n    padding: 1rem;\n    border-radius: 10px;\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.solicitud-form h2 {\n    margin-bottom: 0.5rem;\n    color: #333333;\n}\n\n.solicitud-form p {\n    color: #666666;\n    font-size: 0.9rem;\n    margin-bottom: 1.5rem;\n}\n\n.form-group {\n    margin-bottom: 1.2rem;\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group input {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group select {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; /* Asegura fondo blanco en select */\n}\n\n.form-group input:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group select:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn {\n    color: #555555;\n}\n\nmat-dialog-actions {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions .submit-btn,\nmat-dialog-actions .cancel-btn {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group small {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n.checkbox-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; }\n\n#filosofia-cintilla h1 {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\nheader .logo img {\n    float: left;\n    margin: 15px 10px 0px 0px;\n}\n\n.espaciador-flexible {\n    flex: 1 1 auto;\n    justify-content: right;\n}\n\n@media (max-width: 930px) {\n    .media-funcion {\n        height: 85px;\n        padding: 10px 15px;\n    }\n\n    .social-media {\n        float: left;\n        padding: 10px 5px 10px 10px;\n    }\n\n    header nav {\n        top: 185px;\n    }\n\n    .opcion-destacados {\n        height: 210px;\n    }\n\n    .opcion-destacados a {\n        width: 100%;\n        float: none;\n        clear: both;\n        margin-bottom: 25px;\n    }\n\n    .modulo {\n        height: 680px;\n    }\n\n    footer {\n        padding: 100px 0px 40px 0px;\n        margin: 10px 10px 0px 10px;\n    }\n\n    #copy {\n        margin: 0px 10px;\n    }\n\n    #articulo-cintilla h1 {\n        font-size: 16px;\n        line-height: 16px;\n    }\n\n    .dato-que a {\n        height: 400px;\n    }\n\n    .box-menu-lateral {\n        flex-basis: 220px;\n    }\n\n    .box-textos {\n        flex-basis: 500px;\n    }\n\n    .box-datos-contacto {\n        flex-basis: 250px;\n    }\n\n    .box-formulario-contacto {\n        flex-basis: 380px;\n    }\n\n    .campo {\n        float: none;\n        width: 100%;\n        margin-right: 0px;\n    }\n\n    .intro-directorio {\n        width: 95%;\n    }\n\n    .img-carrusel {\n        width: 95%;\n    }\n\n    .container-cat {\n        height: 290px;\n    }\n\n    .sesion {\n        width: 85%;\n    }\n\n    #content-login {\n        margin-top: -50px;\n    }\n\n    .info-login {\n        width: 99%;\n    }\n\n    .img-login {\n        width: 200px;\n    }\n\n    .box-descrip-destacado h1 {\n        font-size: 22px;\n        line-height: 25px;\n    }\n\n    .box-img-secc {\n        flex-basis: 200px;\n    }\n\n    .box-descrip-destacado {\n        flex-basis: 410px;\n    }\n\n    .ilustra-img-secc {\n        width: 99%;\n    }\n\n    .ruta-temas {\n        width: 98%;\n        font-size: 15px;\n        line-height: 18px;\n    }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }], { roleDialog: [{
            type: ViewChild,
            args: ['roleDialog']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Role, { className: "Role", filePath: "app/auth/role/role.ts", lineNumber: 41 }); })();
