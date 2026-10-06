import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/dialog";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/paginator";
import * as i9 from "@angular/material/progress-spinner";
import * as i10 from "@angular/material/table";
const _c0 = () => [5, 10, 25, 100];
function Assignments_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner", 23);
    i0.ɵɵelementEnd();
} }
function Assignments_th_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Equipo");
    i0.ɵɵelementEnd();
} }
function Assignments_td_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", item_r3.inventory_id == null ? null : item_r3.inventory_id.brand, " ", item_r3.inventory_id == null ? null : item_r3.inventory_id.model, " ");
} }
function Assignments_th_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "N\u00FAmero de serie");
    i0.ɵɵelementEnd();
} }
function Assignments_td_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.inventory_id == null ? null : item_r4.inventory_id.serial_number);
} }
function Assignments_th_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Asignado a");
    i0.ɵɵelementEnd();
} }
function Assignments_td_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.user_id == null ? null : item_r5.user_id.username);
} }
function Assignments_th_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Fecha de asignaci\u00F3n");
    i0.ɵɵelementEnd();
} }
function Assignments_td_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, item_r6.assigned_at, "dd/MM/yyyy HH:mm"));
} }
function Assignments_th_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Fecha de devoluci\u00F3n");
    i0.ɵɵelementEnd();
} }
function Assignments_td_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.returned_at ? i0.ɵɵpipeBind2(2, 1, item_r7.returned_at, "dd/MM/yyyy HH:mm") : "\u2014", " ");
} }
function Assignments_th_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Estado");
    i0.ɵɵelementEnd();
} }
function Assignments_td_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25)(1, "span", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", item_r8.active);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.active ? "Asignado" : "Devuelto", " ");
} }
function Assignments_th_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Observaciones");
    i0.ɵɵelementEnd();
} }
function Assignments_td_37_small_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Devoluci\u00F3n: ", item_r9.return_notes);
} }
function Assignments_td_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25)(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, Assignments_td_37_small_3_Template, 2, 1, "small", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.notes || "\u2014");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r9.return_notes);
} }
function Assignments_th_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Registrado por");
    i0.ɵɵelementEnd();
} }
function Assignments_td_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r10.assigned_by == null ? null : item_r10.assigned_by.username);
} }
function Assignments_th_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 24);
    i0.ɵɵtext(1, "Acciones");
    i0.ɵɵelementEnd();
} }
function Assignments_td_43_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function Assignments_td_43_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const item_r13 = i0.ɵɵnextContext().$implicit; const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.registrarDevolucion(item_r13)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "assignment_return");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Devolver ");
    i0.ɵɵelementEnd();
} }
function Assignments_td_43_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtemplate(1, Assignments_td_43_button_1_Template, 4, 0, "button", 28);
    i0.ɵɵelementStart(2, "button", 29);
    i0.ɵɵlistener("click", function Assignments_td_43_Template_button_click_2_listener() { const item_r13 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.editarAsignacion(item_r13)); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 30);
    i0.ɵɵlistener("click", function Assignments_td_43_Template_button_click_5_listener() { const item_r13 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.eliminarAsignacion(item_r13)); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "delete");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r13.active);
} }
function Assignments_tr_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 32);
} }
function Assignments_tr_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 33);
} }
function Assignments_ng_template_47_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r16._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", item_r16.brand, " ", item_r16.model, " \u2014 ", item_r16.serial_number, " ");
} }
function Assignments_ng_template_47_small_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " El equipo es obligatorio. ");
    i0.ɵɵelementEnd();
} }
function Assignments_ng_template_47_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 47);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r17 = ctx.$implicit;
    i0.ɵɵproperty("value", user_r17._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", user_r17.username, " \u2014 ", user_r17.name, " ", user_r17.last_name, " ");
} }
function Assignments_ng_template_47_small_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " El usuario es obligatorio. ");
    i0.ɵɵelementEnd();
} }
function Assignments_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 34);
    i0.ɵɵlistener("ngSubmit", function Assignments_ng_template_47_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onSubmit()); });
    i0.ɵɵelementStart(1, "h2", 35);
    i0.ɵɵtext(2, "Nueva asignaci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-dialog-content")(4, "p");
    i0.ɵɵtext(5, "Selecciona un equipo disponible y el usuario que lo recibir\u00E1.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 36)(7, "label", 37);
    i0.ɵɵtext(8, "Equipo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 38)(10, "option", 39);
    i0.ɵɵtext(11, "Seleccionar equipo");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, Assignments_ng_template_47_option_12_Template, 2, 4, "option", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, Assignments_ng_template_47_small_13_Template, 2, 0, "small", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 36)(15, "label", 41);
    i0.ɵɵtext(16, "Usuario");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "select", 42)(18, "option", 39);
    i0.ɵɵtext(19, "Seleccionar usuario");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, Assignments_ng_template_47_option_20_Template, 2, 4, "option", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(21, Assignments_ng_template_47_small_21_Template, 2, 0, "small", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 36)(23, "label", 43);
    i0.ɵɵtext(24, "Observaciones");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(25, "textarea", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "mat-dialog-actions", 45)(27, "button", 31);
    i0.ɵɵlistener("click", function Assignments_ng_template_47_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r15); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.cerrarFormulario()); });
    i0.ɵɵtext(28, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 46);
    i0.ɵɵtext(30, "Asignar equipo");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r13.assignmentForm);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r13.items);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r13.assignmentForm.get("inventory_id")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r13.assignmentForm.get("inventory_id")) == null ? null : tmp_4_0.invalid));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r13.users);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx_r13.assignmentForm.get("user_id")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r13.assignmentForm.get("user_id")) == null ? null : tmp_6_0.invalid));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", ctx_r13.assignmentForm.invalid);
} }
export class Assignments {
    authService;
    assignmentForm = new FormGroup({
        inventory_id: new FormControl('', Validators.required),
        user_id: new FormControl('', Validators.required),
        notes: new FormControl(''),
    });
    columnasVisibles = ['equipo', 'serie', 'usuario', 'asignacion', 'devolucion', 'estado', 'observaciones', 'asignadoPor', 'acciones'];
    datos = new MatTableDataSource([]);
    items = [];
    users = [];
    cargando = false;
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    activeFilter = '';
    dialog = inject(MatDialog);
    dialogRef;
    constructor(authService) {
        this.authService = authService;
        this.datos.filterPredicate = (assignment, filter) => {
            const searchable = [
                assignment.inventory_id?.brand,
                assignment.inventory_id?.model,
                assignment.inventory_id?.serial_number,
                assignment.user_id?.username,
                assignment.user_id?.name,
                assignment.user_id?.last_name,
                assignment.notes,
                assignment.return_notes,
            ].join(' ').toLowerCase();
            return searchable.includes(filter);
        };
    }
    ngOnInit() {
        this.cargarDatos();
        this.cargarCatalogos();
    }
    cargarDatos() {
        this.cargando = true;
        let params = new HttpParams()
            .set('page', String(this.paginaActual + 1))
            .set('limit', String(this.tamanoPagina));
        if (this.activeFilter)
            params = params.set('active', this.activeFilter);
        this.authService.getAssignments(params).subscribe({
            next: (response) => {
                this.datos.data = response.assignments ?? [];
                this.totalRegistros = response.total ?? this.datos.data.length;
                this.cargando = false;
            },
            error: (error) => {
                this.cargando = false;
                window.alert(error.error?.message ?? 'No fue posible cargar las asignaciones.');
            },
        });
    }
    cargarCatalogos() {
        this.authService.getItems({ limit: 100 }).subscribe({
            next: (response) => {
                const items = response.items ?? response;
                this.items = Array.isArray(items)
                    ? items.filter((item) => !item.assigned_to && String(item.status).toLowerCase() !== 'baja')
                    : [];
            },
        });
        this.authService.getUsers({ limit: 100 }).subscribe({
            next: (response) => {
                const users = response.users ?? response;
                this.users = Array.isArray(users) ? users.filter((user) => user.active !== false) : [];
            },
        });
    }
    abrirFormulario(template) {
        this.assignmentForm.reset({ inventory_id: '', user_id: '', notes: '' });
        this.dialogRef = this.dialog.open(template, { width: '520px', maxWidth: '95vw', disableClose: true });
    }
    cerrarFormulario() {
        this.dialogRef?.close();
    }
    onSubmit() {
        if (this.assignmentForm.invalid) {
            this.assignmentForm.markAllAsTouched();
            return;
        }
        this.authService.createAssignment(this.assignmentForm.getRawValue()).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Equipo asignado correctamente.');
                this.cerrarFormulario();
                this.cargarDatos();
                this.cargarCatalogos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible asignar el equipo.'),
        });
    }
    registrarDevolucion(assignment) {
        const notes = window.prompt('Observaciones de devolución:', '');
        if (notes === null)
            return;
        if (!window.confirm('¿Confirmar la devolución de este equipo?'))
            return;
        this.authService.returnAssignment(assignment._id, notes).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Devolución registrada correctamente.');
                this.cargarDatos();
                this.cargarCatalogos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible registrar la devolución.'),
        });
    }
    editarAsignacion(assignment) {
        const notes = window.prompt('Observaciones de la asignación:', assignment.notes ?? '');
        if (notes === null)
            return;
        const update = { notes };
        if (!assignment.active) {
            const returnNotes = window.prompt('Observaciones de devolución:', assignment.return_notes ?? '');
            if (returnNotes === null)
                return;
            update.return_notes = returnNotes;
        }
        this.authService.updateAssignment(assignment._id, update).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Asignación actualizada correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible actualizar la asignación.'),
        });
    }
    eliminarAsignacion(assignment) {
        if (!assignment._id || !window.confirm('¿Eliminar esta asignación? Esta acción no se puede deshacer.'))
            return;
        this.authService.deleteAssignment(assignment._id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Asignación eliminada correctamente.');
                this.cargarDatos();
                this.cargarCatalogos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar la asignación.'),
        });
    }
    onFiltrar(event) {
        this.datos.filter = event.target.value.trim().toLowerCase();
    }
    onEstadoChange(event) {
        this.activeFilter = event.target.value;
        this.paginaActual = 0;
        this.cargarDatos();
    }
    onCambiarPagina(event) {
        this.paginaActual = event.pageIndex;
        this.tamanoPagina = event.pageSize;
        this.cargarDatos();
    }
    static ɵfac = function Assignments_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Assignments)(i0.ɵɵdirectiveInject(i1.AuthService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Assignments, selectors: [["app-assignments"]], decls: 49, vars: 8, consts: [["assignmentDialog", ""], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ej. Sistemas", 3, "keyup"], [1, "espaciador-flexible"], ["mat-flat-button", "", "type", "button", 1, "my_button", 3, "click"], [1, "loading-spinner"], [1, "table-scroll"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "equipo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "serie"], ["matColumnDef", "usuario"], ["matColumnDef", "asignacion"], ["matColumnDef", "devolucion"], ["matColumnDef", "estado"], ["matColumnDef", "observaciones"], ["matColumnDef", "asignadoPor"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "page", "length", "pageSize", "pageSizeOptions"], ["diameter", "42"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "status"], [4, "ngIf"], ["mat-button", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "type", "button", "aria-label", "Editar asignaci\u00F3n", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Eliminar asignaci\u00F3n", 1, "deleteButton", 3, "click"], ["mat-button", "", "type", "button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "assignment-form", 3, "ngSubmit", "formGroup"], ["mat-dialog-title", ""], [1, "form-group"], ["for", "inventory_id"], ["id", "inventory_id", "formControlName", "inventory_id"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "user_id"], ["id", "user_id", "formControlName", "user_id"], ["for", "notes"], ["id", "notes", "formControlName", "notes", "rows", "3", "placeholder", "Estado de entrega, accesorios, etc."], ["align", "end"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], [3, "value"]], template: function Assignments_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "h2");
            i0.ɵɵtext(2, "Asignaciones");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
            i0.ɵɵtext(5, "Buscar por nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 3);
            i0.ɵɵlistener("keyup", function Assignments_Template_input_keyup_6_listener($event) { return ctx.onFiltrar($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵelement(8, "span", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function Assignments_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const assignmentDialog_r2 = i0.ɵɵreference(48); return i0.ɵɵresetView(ctx.abrirFormulario(assignmentDialog_r2)); });
            i0.ɵɵelementStart(10, "mat-icon");
            i0.ɵɵtext(11, "add_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, " Nueva asignaci\u00F3n");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(14, Assignments_Conditional_14_Template, 2, 0, "div", 6);
            i0.ɵɵelementStart(15, "div", 7)(16, "table", 8);
            i0.ɵɵelementContainerStart(17, 9);
            i0.ɵɵtemplate(18, Assignments_th_18_Template, 2, 0, "th", 10)(19, Assignments_td_19_Template, 2, 2, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(20, 12);
            i0.ɵɵtemplate(21, Assignments_th_21_Template, 2, 0, "th", 10)(22, Assignments_td_22_Template, 2, 1, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(23, 13);
            i0.ɵɵtemplate(24, Assignments_th_24_Template, 2, 0, "th", 10)(25, Assignments_td_25_Template, 2, 1, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(26, 14);
            i0.ɵɵtemplate(27, Assignments_th_27_Template, 2, 0, "th", 10)(28, Assignments_td_28_Template, 3, 4, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(29, 15);
            i0.ɵɵtemplate(30, Assignments_th_30_Template, 2, 0, "th", 10)(31, Assignments_td_31_Template, 3, 4, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(32, 16);
            i0.ɵɵtemplate(33, Assignments_th_33_Template, 2, 0, "th", 10)(34, Assignments_td_34_Template, 3, 3, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(35, 17);
            i0.ɵɵtemplate(36, Assignments_th_36_Template, 2, 0, "th", 10)(37, Assignments_td_37_Template, 4, 2, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(38, 18);
            i0.ɵɵtemplate(39, Assignments_th_39_Template, 2, 0, "th", 10)(40, Assignments_td_40_Template, 2, 1, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(41, 19);
            i0.ɵɵtemplate(42, Assignments_th_42_Template, 2, 0, "th", 10)(43, Assignments_td_43_Template, 8, 1, "td", 11);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(44, Assignments_tr_44_Template, 1, 0, "tr", 20)(45, Assignments_tr_45_Template, 1, 0, "tr", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "mat-paginator", 22);
            i0.ɵɵlistener("page", function Assignments_Template_mat_paginator_page_46_listener($event) { return ctx.onCambiarPagina($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(47, Assignments_ng_template_47_Template, 31, 6, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵconditional(ctx.cargando ? 14 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("dataSource", ctx.datos);
            i0.ɵɵadvance(28);
            i0.ɵɵproperty("matHeaderRowDef", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("matRowDefColumns", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("length", ctx.totalRegistros)("pageSize", ctx.tamanoPagina)("pageSizeOptions", i0.ɵɵpureFunction0(7, _c0));
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, ReactiveFormsModule, i3.ɵNgNoValidate, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName, MatButtonModule, i4.MatButton, i4.MatIconButton, MatDialogModule, i5.MatDialogTitle, i5.MatDialogActions, i5.MatDialogContent, MatFormFieldModule, i6.MatFormField, i6.MatLabel, MatIconModule, i7.MatIcon, MatInputModule, i6.MatInput, MatPaginatorModule, i8.MatPaginator, MatProgressSpinnerModule, i9.MatProgressSpinner, MatTableModule, i10.MatTable, i10.MatHeaderCellDef, i10.MatHeaderRowDef, i10.MatColumnDef, i10.MatCellDef, i10.MatRowDef, i10.MatHeaderCell, i10.MatCell, i10.MatHeaderRow, i10.MatRow, i2.DatePipe], styles: ["mat-icon[_ngcontent-%COMP%] {\n    margin-right: 8px;\n    color: white;\n}\n\n.my_button[_ngcontent-%COMP%] {\n    background-color: #0194fe;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.header-row[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    flex-wrap: wrap;\n}\n\n.header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #666; margin-top: 0; }\n.filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] { min-width: 280px; }\n.status-filter[_ngcontent-%COMP%] { display: grid; gap: 6px; color: #444; }\n.status-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    background: #fff;\n    font: inherit;\n}\n\n.table-scroll[_ngcontent-%COMP%] { overflow-x: auto; }\ntable[_ngcontent-%COMP%] { width: 100%; }\n.loading-spinner[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 24px; }\n.status[_ngcontent-%COMP%] { color: #666; }\n.status.active[_ngcontent-%COMP%] { color: #087f23; font-weight: 600; }\n.assignment-form[_ngcontent-%COMP%] { width: 100%; box-sizing: border-box; }\n.form-group[_ngcontent-%COMP%] { display: grid; gap: 6px; margin-bottom: 16px; }\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: #b3261e; }\n\n@media (max-width: 700px) {\n    .header-row[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] { width: 100%; }\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Assignments, [{
        type: Component,
        args: [{ selector: 'app-assignments', imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatProgressSpinnerModule,
                    MatTableModule,
                ], template: "<div class=\"table-container\">\n    <!-- Filtro de B\u00FAsqueda -->\n    <h2>Asignaciones</h2>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Buscar por nombre</mat-label>\n        <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Ej. Sistemas\">\n    </mat-form-field>\n    <div>\n        <span class=\"espaciador-flexible\"></span>\n        <button mat-flat-button class=\"my_button\" type=\"button\" (click)=\"abrirFormulario(assignmentDialog)\">\n            <mat-icon>add_circle</mat-icon>\n            <span> Nueva asignaci\u00F3n</span>\n        </button>\n    </div>\n\n    @if (cargando) {\n        <div class=\"loading-spinner\"><mat-spinner diameter=\"42\"></mat-spinner></div>\n    }\n\n    <div class=\"table-scroll\">\n        <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"equipo\">\n                <th mat-header-cell *matHeaderCellDef>Equipo</th>\n                <td mat-cell *matCellDef=\"let item\">\n                    {{ item.inventory_id?.brand }} {{ item.inventory_id?.model }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"serie\">\n                <th mat-header-cell *matHeaderCellDef>N\u00FAmero de serie</th>\n                <td mat-cell *matCellDef=\"let item\">{{ item.inventory_id?.serial_number }}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"usuario\">\n                <th mat-header-cell *matHeaderCellDef>Asignado a</th>\n                <td mat-cell *matCellDef=\"let item\">{{ item.user_id?.username }}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"asignacion\">\n                <th mat-header-cell *matHeaderCellDef>Fecha de asignaci\u00F3n</th>\n                <td mat-cell *matCellDef=\"let item\">{{ item.assigned_at | date:'dd/MM/yyyy HH:mm' }}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"devolucion\">\n                <th mat-header-cell *matHeaderCellDef>Fecha de devoluci\u00F3n</th>\n                <td mat-cell *matCellDef=\"let item\">\n                    {{ item.returned_at ? (item.returned_at | date:'dd/MM/yyyy HH:mm') : '\u2014' }}\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"estado\">\n                <th mat-header-cell *matHeaderCellDef>Estado</th>\n                <td mat-cell *matCellDef=\"let item\">\n                    <span class=\"status\" [class.active]=\"item.active\">\n                        {{ item.active ? 'Asignado' : 'Devuelto' }}\n                    </span>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"observaciones\">\n                <th mat-header-cell *matHeaderCellDef>Observaciones</th>\n                <td mat-cell *matCellDef=\"let item\">\n                    <div>{{ item.notes || '\u2014' }}</div>\n                    <small *ngIf=\"item.return_notes\">Devoluci\u00F3n: {{ item.return_notes }}</small>\n                </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"asignadoPor\">\n                <th mat-header-cell *matHeaderCellDef>Registrado por</th>\n                <td mat-cell *matCellDef=\"let item\">{{ item.assigned_by?.username }}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"acciones\">\n                <th mat-header-cell *matHeaderCellDef>Acciones</th>\n                <td mat-cell *matCellDef=\"let item\">\n                    <button mat-button type=\"button\" *ngIf=\"item.active\" (click)=\"registrarDevolucion(item)\">\n                        <mat-icon>assignment_return</mat-icon>\n                        Devolver\n                    </button>\n                    <button mat-icon-button color=\"primary\" type=\"button\" (click)=\"editarAsignacion(item)\"\n                        aria-label=\"Editar asignaci\u00F3n\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                    <button mat-icon-button class=\"deleteButton\" type=\"button\" (click)=\"eliminarAsignacion(item)\"\n                        aria-label=\"Eliminar asignaci\u00F3n\">\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: columnasVisibles\"></tr>\n        </table>\n    </div>\n\n    <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\"\n        [pageSizeOptions]=\"[5, 10, 25, 100]\" (page)=\"onCambiarPagina($event)\">\n    </mat-paginator>\n</div>\n\n<ng-template #assignmentDialog>\n    <form [formGroup]=\"assignmentForm\" (ngSubmit)=\"onSubmit()\" class=\"assignment-form\">\n        <h2 mat-dialog-title>Nueva asignaci\u00F3n</h2>\n        <mat-dialog-content>\n            <p>Selecciona un equipo disponible y el usuario que lo recibir\u00E1.</p>\n\n            <div class=\"form-group\">\n                <label for=\"inventory_id\">Equipo</label>\n                <select id=\"inventory_id\" formControlName=\"inventory_id\">\n                    <option value=\"\" disabled>Seleccionar equipo</option>\n                    <option *ngFor=\"let item of items\" [value]=\"item._id\">\n                        {{ item.brand }} {{ item.model }} \u2014 {{ item.serial_number }}\n                    </option>\n                </select>\n                <small *ngIf=\"assignmentForm.get('inventory_id')?.touched && assignmentForm.get('inventory_id')?.invalid\">\n                    El equipo es obligatorio.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"user_id\">Usuario</label>\n                <select id=\"user_id\" formControlName=\"user_id\">\n                    <option value=\"\" disabled>Seleccionar usuario</option>\n                    <option *ngFor=\"let user of users\" [value]=\"user._id\">\n                        {{ user.username }} \u2014 {{ user.name }} {{ user.last_name }}\n                    </option>\n                </select>\n                <small *ngIf=\"assignmentForm.get('user_id')?.touched && assignmentForm.get('user_id')?.invalid\">\n                    El usuario es obligatorio.\n                </small>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"notes\">Observaciones</label>\n                <textarea id=\"notes\" formControlName=\"notes\" rows=\"3\" placeholder=\"Estado de entrega, accesorios, etc.\"></textarea>\n            </div>\n        </mat-dialog-content>\n\n        <mat-dialog-actions align=\"end\">\n            <button mat-button type=\"button\" (click)=\"cerrarFormulario()\">Cancelar</button>\n            <button mat-flat-button type=\"submit\" [disabled]=\"assignmentForm.invalid\">Asignar equipo</button>\n        </mat-dialog-actions>\n    </form>\n</ng-template>\n", styles: ["mat-icon {\n    margin-right: 8px;\n    color: white;\n}\n\n.my_button {\n    background-color: #0194fe;\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.header-row, .filters {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    flex-wrap: wrap;\n}\n\n.header-row p { color: #666; margin-top: 0; }\n.filters mat-form-field { min-width: 280px; }\n.status-filter { display: grid; gap: 6px; color: #444; }\n.status-filter select, .form-group select, .form-group textarea {\n    padding: 0.75rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    background: #fff;\n    font: inherit;\n}\n\n.table-scroll { overflow-x: auto; }\ntable { width: 100%; }\n.loading-spinner { display: flex; justify-content: center; padding: 24px; }\n.status { color: #666; }\n.status.active { color: #087f23; font-weight: 600; }\n.assignment-form { width: 100%; box-sizing: border-box; }\n.form-group { display: grid; gap: 6px; margin-bottom: 16px; }\n.form-group small { color: #b3261e; }\n\n@media (max-width: 700px) {\n    .header-row > button, .filters mat-form-field { width: 100%; }\n}\n"] }]
    }], () => [{ type: i1.AuthService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Assignments, { className: "Assignments", filePath: "app/auth/assignments/assignments.ts", lineNumber: 32 }); })();
