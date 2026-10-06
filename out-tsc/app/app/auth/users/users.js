import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/table";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/dialog";
import * as i9 from "@angular/material/button";
const _c0 = ["userDialog"];
const _c1 = () => [5, 10, 25, 100];
function Users_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function Users_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function Users_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r3.id ?? elemento_r3._id, " ");
} }
function Users_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Usuario ");
    i0.ɵɵelementEnd();
} }
function Users_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r4.username, " ");
} }
function Users_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Email ");
    i0.ɵɵelementEnd();
} }
function Users_td_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r5.email, " ");
} }
function Users_th_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Rol ");
    i0.ɵɵelementEnd();
} }
function Users_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", (elemento_r6.rolId == null ? null : elemento_r6.rolId.name) ?? "Sin rol", " ");
} }
function Users_th_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Acciones ");
    i0.ɵɵelementEnd();
} }
function Users_td_30_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 19)(1, "button", 20);
    i0.ɵɵlistener("click", function Users_td_30_Template_button_click_1_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.editarUsuario(elemento_r8)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 21);
    i0.ɵɵlistener("click", function Users_td_30_Template_button_click_4_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.eliminarUsuario(elemento_r8)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete");
    i0.ɵɵelementEnd()()();
} }
function Users_tr_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function Users_tr_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
function Users_ng_template_34_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Usuario es requerido. ");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_small_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " N\u00F3mina es requerida. ");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email es requerido.");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Formato de email inv\u00E1lido.");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, Users_ng_template_34_div_20_div_1_Template, 2, 0, "div", 29)(2, Users_ng_template_34_div_20_div_2_Template, 2, 0, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_3_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_4_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["email"]);
} }
function Users_ng_template_34_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Contrase\u00F1a es requerida.");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Contrase\u00F1a debe tener al menos 8 caracteres. ");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, Users_ng_template_34_div_25_div_1_Template, 2, 0, "div", 29)(2, Users_ng_template_34_div_25_div_2_Template, 2, 0, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_3_0 = ctx_r8.registerForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_4_0 = ctx_r8.registerForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
} }
function Users_ng_template_34_small_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " El nombre es requerido. ");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_option_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r11._id ?? item_r11.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r11.name ?? item_r11.nombre, " ");
} }
function Users_ng_template_34_option_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const area_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", area_r12._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(area_r12.name);
} }
function Users_ng_template_34_label_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 51);
    i0.ɵɵelement(1, "input", 52);
    i0.ɵɵtext(2, " Usuario activo ");
    i0.ɵɵelementEnd();
} }
function Users_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 24);
    i0.ɵɵlistener("ngSubmit", function Users_ng_template_34_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onSubmit()); });
    i0.ɵɵelementStart(1, "h2", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-dialog-content")(4, "p");
    i0.ɵɵtext(5, "Por favor, completa los datos.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 26)(7, "label", 27);
    i0.ɵɵtext(8, "Usuario");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 28);
    i0.ɵɵtemplate(10, Users_ng_template_34_small_10_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 26)(12, "label", 30);
    i0.ɵɵtext(13, "N\u00F3mina");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 31);
    i0.ɵɵtemplate(15, Users_ng_template_34_small_15_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 26)(17, "label", 32);
    i0.ɵɵtext(18, "Correo Electr\u00F3nico");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 33);
    i0.ɵɵtemplate(20, Users_ng_template_34_div_20_Template, 3, 2, "div", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 26)(22, "label", 34);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "input", 35);
    i0.ɵɵtemplate(25, Users_ng_template_34_div_25_Template, 3, 2, "div", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 26)(27, "label", 36);
    i0.ɵɵtext(28, "Nombre");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(29, "input", 37);
    i0.ɵɵtemplate(30, Users_ng_template_34_small_30_Template, 2, 0, "small", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 26)(32, "label", 38);
    i0.ɵɵtext(33, "Apellidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "input", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 26)(36, "label", 40);
    i0.ɵɵtext(37, "Rol de la Cuenta");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "select", 41)(39, "option", 42);
    i0.ɵɵtext(40, "Seleccione una opci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(41, Users_ng_template_34_option_41_Template, 2, 2, "option", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 26)(43, "label", 44);
    i0.ɵɵtext(44, "\u00C1rea");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "select", 45)(46, "option", 42);
    i0.ɵɵtext(47, "Seleccione una opci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(48, Users_ng_template_34_option_48_Template, 2, 2, "option", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(49, Users_ng_template_34_label_49_Template, 3, 0, "label", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "mat-dialog-actions", 47)(51, "button", 48);
    i0.ɵɵlistener("click", function Users_ng_template_34_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r10); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.cerrarFormulario()); });
    i0.ɵɵtext(52, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "button", 49);
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r8.registerForm);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.editingId ? "Editar usuario" : "Nuevo usuario");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r8.registerForm.get("username")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx_r8.registerForm.get("username")) == null ? null : tmp_4_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r8.registerForm.get("nomina")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r8.registerForm.get("nomina")) == null ? null : tmp_5_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_6_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_6_0.touched));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Contrase\u00F1a", ctx_r8.editingId ? " (opcional)" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r8.editingId ? "Dejar vac\u00EDa para conservarla" : "M\u00EDnimo 8 caracteres");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ((tmp_9_0 = ctx_r8.registerForm.get("password")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r8.registerForm.get("password")) == null ? null : tmp_9_0.touched));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_10_0 = ctx_r8.registerForm.get("name")) == null ? null : tmp_10_0.hasError("required")) && ((tmp_10_0 = ctx_r8.registerForm.get("name")) == null ? null : tmp_10_0.touched));
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngForOf", ctx_r8.elementos);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r8.areas);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r8.editingId);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r8.registerForm.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r8.editingId ? "Guardar cambios" : "Registrar usuario", " ");
} }
export class Users {
    authService;
    router;
    breakpointObserver;
    userDialog;
    roleFilter = '';
    titulo = 'Usuarios';
    registerForm;
    editingId;
    user;
    elementos = [];
    areas = [];
    constructor(authService, router, breakpointObserver) {
        this.authService = authService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.registerForm = new FormGroup({
            username: new FormControl('', Validators.required),
            nomina: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
            name: new FormControl('', Validators.required),
            last_name: new FormControl('', Validators.required),
            rolId: new FormControl('', Validators.required),
            area: new FormControl(''),
            active: new FormControl(true),
        });
    }
    http = inject(HttpClient);
    dialog = inject(MatDialog);
    dialogRef;
    // Configuración de Tabla
    columnasVisibles = ['id', 'nombre', 'email', 'rol', 'acciones'];
    datos = new MatTableDataSource([]);
    cargando = false;
    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    ngOnInit() {
        this.cargarDatos();
        this.cargarRoles();
        this.cargarAreas();
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
    cargarRoles() {
        this.authService.getRoles().subscribe({
            next: (respuesta) => {
                const roles = respuesta.roles ?? respuesta;
                this.elementos = Array.isArray(roles) ? roles : [];
            },
            error: (error) => console.error('Error al cargar los roles:', error),
        });
    }
    cargarAreas() {
        this.authService.getAreas().subscribe({
            next: (respuesta) => {
                const areas = respuesta.areas ?? respuesta;
                this.areas = Array.isArray(areas) ? areas.filter((area) => area.active !== false) : [];
            },
            error: (error) => console.error('Error al cargar las áreas:', error),
        });
    }
    cargarDatos() {
        console.log('Se ejecuta la función de carga de usuarios');
        this.cargando = true;
        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda)
            .set('role', this.roleFilter);
        this.authService.getUsers(params).subscribe({
            next: (respuesta) => {
                const usuarios = respuesta.users ?? respuesta;
                console.log('Aquí la respuesta:', usuarios);
                // Tu API debe retornar los renglones y el total general de coincidencias
                this.datos.data = Array.isArray(usuarios) ? usuarios : [];
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
        this.registerForm.get('password')?.setValidators([Validators.required, Validators.minLength(8)]);
        this.registerForm.get('password')?.updateValueAndValidity();
        this.registerForm.reset({
            username: '',
            nomina: '',
            email: '',
            password: '',
            name: '',
            last_name: '',
            rolId: '',
            area: '',
            active: true,
        });
        this.dialogRef = this.dialog.open(contenido, {
            height: 'flex',
            width: '600px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }
    cerrarFormulario() {
        this.dialogRef?.close();
    }
    eliminarUsuario(usuario) {
        const id = usuario._id ?? usuario.id;
        if (!id) {
            window.alert('No se encontró el identificador del usuario.');
            return;
        }
        if (!window.confirm(`¿Eliminar al usuario "${usuario.username}"?`))
            return;
        this.authService.deleteUser(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Usuario eliminado correctamente.');
                this.cargarDatos();
            },
            error: (error) => {
                console.error('Error al eliminar usuario:', error);
                window.alert(error.error?.message ?? 'No fue posible eliminar el usuario.');
            },
        });
    }
    editarUsuario(usuario) {
        this.editingId = usuario._id ?? usuario.id;
        const passwordControl = this.registerForm.get('password');
        passwordControl?.setValidators([Validators.minLength(8)]);
        this.registerForm.reset({
            username: usuario.username ?? '',
            nomina: usuario.nomina ?? '',
            email: usuario.email ?? '',
            password: '',
            name: usuario.name ?? '',
            last_name: usuario.last_name ?? '',
            rolId: usuario.rolId?._id ?? usuario.rolId ?? '',
            area: usuario.area?._id ?? usuario.area ?? '',
            active: usuario.active ?? true,
        });
        passwordControl?.updateValueAndValidity();
        this.dialogRef = this.dialog.open(this.userDialog, {
            width: '560px', maxWidth: '95vw', disableClose: true,
        });
    }
    onSubmit() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        const formData = this.registerForm.getRawValue();
        if (this.editingId && !formData.password)
            delete formData.password;
        const request = this.editingId
            ? this.authService.updateUser(this.editingId, formData)
            : this.authService.register(formData);
        request.subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Usuario registrado correctamente.');
                this.cerrarFormulario();
                this.cargarDatos();
            },
            error: (error) => {
                console.error('Error al registrar usuario:', error);
                window.alert(error.error?.message ?? 'No fue posible registrar el usuario.');
            },
        });
    }
    static ɵfac = function Users_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Users)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.BreakpointObserver)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Users, selectors: [["app-users"]], viewQuery: function Users_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.userDialog = _t.first);
        } }, inputs: { roleFilter: "roleFilter", titulo: "titulo" }, decls: 36, vars: 9, consts: [["userDialog", ""], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ej. Juan", 3, "keyup"], [1, "espaciador-flexible"], ["mat-flat-button", "", 1, "my_button", 3, "click"], [1, "loading-spinner"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "email"], ["matColumnDef", "rol"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Seleccionar p\u00E1gina", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", 1, "deleteButton", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "register-form", 3, "ngSubmit", "formGroup"], ["mat-dialog-title", ""], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Usuario"], [4, "ngIf"], ["for", "nomina"], ["type", "text", "id", "nomina", "formControlName", "nomina", "placeholder", "N\u00F3mina"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "correo@ejemplo.com"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", 3, "placeholder"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Nombre"], ["for", "last_name"], ["type", "text", "id", "last_name", "formControlName", "last_name", "placeholder", "Apellidos"], ["for", "rol"], ["id", "rol", "formControlName", "rolId"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "area"], ["id", "area", "formControlName", "area"], ["class", "checkbox-row", 4, "ngIf"], ["align", "end"], ["type", "button", "mat-button", "", 1, "cancel-btn", 3, "click"], ["type", "submit", "mat-flat-button", "", 1, "submit-btn", 3, "disabled"], [3, "value"], [1, "checkbox-row"], ["type", "checkbox", "formControlName", "active"]], template: function Users_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field", 2)(4, "mat-label");
            i0.ɵɵtext(5, "Buscar por nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 3);
            i0.ɵɵlistener("keyup", function Users_Template_input_keyup_6_listener($event) { return ctx.onFiltrar($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵelement(8, "span", 4);
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function Users_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const userDialog_r2 = i0.ɵɵreference(35); return i0.ɵɵresetView(ctx.abrirFormulario(userDialog_r2)); });
            i0.ɵɵelementStart(10, "mat-icon");
            i0.ɵɵtext(11, "add_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, " Agregar");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(14, Users_Conditional_14_Template, 2, 0, "div", 6);
            i0.ɵɵelementStart(15, "table", 7);
            i0.ɵɵelementContainerStart(16, 8);
            i0.ɵɵtemplate(17, Users_th_17_Template, 2, 0, "th", 9)(18, Users_td_18_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(19, 11);
            i0.ɵɵtemplate(20, Users_th_20_Template, 2, 0, "th", 9)(21, Users_td_21_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(22, 12);
            i0.ɵɵtemplate(23, Users_th_23_Template, 2, 0, "th", 9)(24, Users_td_24_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(25, 13);
            i0.ɵɵtemplate(26, Users_th_26_Template, 2, 0, "th", 9)(27, Users_td_27_Template, 2, 1, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(28, 14);
            i0.ɵɵtemplate(29, Users_th_29_Template, 2, 0, "th", 9)(30, Users_td_30_Template, 7, 0, "td", 10);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(31, Users_tr_31_Template, 1, 0, "tr", 15)(32, Users_tr_32_Template, 1, 0, "tr", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "mat-paginator", 17);
            i0.ɵɵlistener("page", function Users_Template_mat_paginator_page_33_listener($event) { return ctx.onCambiarPagina($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(34, Users_ng_template_34_Template, 55, 14, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.titulo);
            i0.ɵɵadvance(12);
            i0.ɵɵconditional(ctx.cargando ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("dataSource", ctx.datos);
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("matHeaderRowDef", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("matRowDefColumns", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("length", ctx.totalRegistros)("pageSize", ctx.tamanoPagina)("pageSizeOptions", i0.ɵɵpureFunction0(8, _c1));
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, ReactiveFormsModule, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.DefaultValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.FormGroupDirective, i5.FormControlName, MatFormField,
            MatLabel,
            MatProgressSpinner,
            MatPaginator,
            MatIcon,
            MatTableModule, i6.MatTable, i6.MatHeaderCellDef, i6.MatHeaderRowDef, i6.MatColumnDef, i6.MatCellDef, i6.MatRowDef, i6.MatHeaderCell, i6.MatCell, i6.MatHeaderRow, i6.MatRow, MatPaginatorModule,
            MatInputModule, i7.MatInput, MatFormFieldModule,
            MatProgressSpinnerModule,
            MatDialogModule, i8.MatDialogTitle, i8.MatDialogActions, i8.MatDialogContent, MatButtonModule, i9.MatButton, i9.MatIconButton], styles: [".my_button[_ngcontent-%COMP%] {\n    background-color: #0194fe;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n    color: #f44336;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; \n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n    color: #555555;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%], \nmat-dialog-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n#filosofia-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    justify-content: right;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Users, [{
        type: Component,
        args: [{ selector: 'app-users', imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatFormField,
                    MatLabel,
                    MatProgressSpinner,
                    MatPaginator,
                    MatIcon,
                    MatTableModule,
                    MatPaginatorModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatProgressSpinnerModule,
                    MatDialogModule,
                    MatButtonModule,
                ], template: "<div class=\"table-container\">\n    <!-- Filtro de B\u00FAsqueda -->\n    <h2>{{ titulo }}</h2>\n    <mat-form-field appearance=\"outline\">\n        <mat-label>Buscar por nombre</mat-label>\n        <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Ej. Juan\">\n    </mat-form-field>\n    <div>\n        <span class=\"espaciador-flexible\"></span>\n        <button mat-flat-button class=\"my_button\" (click)=\"abrirFormulario(userDialog)\">\n            <mat-icon>add_circle</mat-icon>\n            <span> Agregar</span>\n        </button>\n    </div>\n\n    <!-- Spinner de Carga -->\n    @if (cargando) {\n    <div class=\"loading-spinner\">\n        <mat-spinner></mat-spinner>\n    </div>\n    }\n\n    <!-- Tabla Angular Material -->\n    <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n\n        <!-- Columna ID -->\n        <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef> ID </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.id ?? elemento._id}} </td>\n        </ng-container>\n\n        <!-- Columna Nombre -->\n        <ng-container matColumnDef=\"nombre\">\n            <th mat-header-cell *matHeaderCellDef> Usuario </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.username}} </td>\n        </ng-container>\n\n        <!-- Columna Email -->\n        <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef> Email </th>\n            <td mat-cell *matCellDef=\"let elemento\"> {{elemento.email}} </td>\n        </ng-container>\n\n        <!-- Columna Rol -->\n        <ng-container matColumnDef=\"rol\">\n            <th mat-header-cell *matHeaderCellDef> Rol </th>\n            <td mat-cell *matCellDef=\"let elemento\">\n                {{ elemento.rolId?.name ?? 'Sin rol' }}\n            </td>\n        </ng-container>\n\n        <!-- Columna Acciones -->\n        <ng-container matColumnDef=\"acciones\">\n            <th mat-header-cell *matHeaderCellDef> Acciones </th>\n            <td mat-cell *matCellDef=\"let elemento\">\n                <button mat-icon-button color=\"primary\"  (click)=\"editarUsuario(elemento)\">\n                    <mat-icon>edit</mat-icon>\n                </button>\n                <button mat-icon-button class=\"deleteButton\" (click)=\"eliminarUsuario(elemento)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: columnasVisibles;\"></tr>\n    </table>\n\n    <!-- Paginador -->\n    <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\n        (page)=\"onCambiarPagina($event)\" aria-label=\"Seleccionar p\u00E1gina\">\n    </mat-paginator>\n</div>\n\n<ng-template #userDialog>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"register-form\">\n        <h2 mat-dialog-title>{{ editingId ? 'Editar usuario' : 'Nuevo usuario' }}</h2>\n        <mat-dialog-content>\n            <p>Por favor, completa los datos.</p>\n\n        <div class=\"form-group\">\n            <label for=\"username\">Usuario</label>\n            <input type=\"text\" id=\"username\" formControlName=\"username\" placeholder=\"Usuario\">\n            <small *ngIf=\"registerForm.get('username')?.hasError('required') && registerForm.get('username')?.touched\">\n                Usuario es requerido.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"nomina\" >N\u00F3mina</label>\n            <input type=\"text\" id=\"nomina\" formControlName=\"nomina\" placeholder=\"N\u00F3mina\">\n            <small *ngIf=\"registerForm.get('nomina')?.hasError('required') && registerForm.get('nomina')?.touched\">\n                N\u00F3mina es requerida.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"email\">Correo Electr\u00F3nico</label>\n            <input type=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"correo@ejemplo.com\">\n            <div *ngIf=\"registerForm.get('email')?.invalid && registerForm.get('email')?.touched\">\n                <div *ngIf=\"registerForm.get('email')?.errors?.['required']\">Email es requerido.</div>\n                <div *ngIf=\"registerForm.get('email')?.errors?.['email']\">Formato de email inv\u00E1lido.</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"password\">Contrase\u00F1a{{ editingId ? ' (opcional)' : '' }}</label>\n            <input type=\"password\" id=\"password\" formControlName=\"password\"\n                [placeholder]=\"editingId ? 'Dejar vac\u00EDa para conservarla' : 'M\u00EDnimo 8 caracteres'\">\n            <div *ngIf=\"registerForm.get('password')?.invalid && registerForm.get('password')?.touched\">\n                <div *ngIf=\"registerForm.get('password')?.errors?.['required']\">Contrase\u00F1a es requerida.</div>\n                <div *ngIf=\"registerForm.get('password')?.errors?.['minlength']\">\n                    Contrase\u00F1a debe tener al menos 8 caracteres.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Nombre</label>\n            <input type=\"text\" id=\"name\" formControlName=\"name\" placeholder=\"Nombre\">\n            <small *ngIf=\"registerForm.get('name')?.hasError('required') && registerForm.get('name')?.touched\">\n                El nombre es requerido.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"last_name\">Apellidos</label>\n            <input type=\"text\" id=\"last_name\" formControlName=\"last_name\" placeholder=\"Apellidos\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"rol\">Rol de la Cuenta</label>\n            <select id=\"rol\" formControlName=\"rolId\">\n                <option value=\"\" disabled>Seleccione una opci\u00F3n</option>\n                <option *ngFor=\"let item of elementos\" [value]=\"item._id ?? item.id\">\n                    {{ item.name ?? item.nombre }}\n                </option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"area\">\u00C1rea</label>\n            <select id=\"area\" formControlName=\"area\">\n                <option value=\"\" disabled>Seleccione una opci\u00F3n</option>\n                <option *ngFor=\"let area of areas\" [value]=\"area._id\">{{ area.name }}</option>\n            </select>\n        </div>\n        <label class=\"checkbox-row\" *ngIf=\"editingId\">\n            <input type=\"checkbox\" formControlName=\"active\">\n            Usuario activo\n        </label>\n\n       </mat-dialog-content>\n\n        <mat-dialog-actions align=\"end\">\n            <button type=\"button\" mat-button class=\"cancel-btn\" (click)=\"cerrarFormulario()\">Cancelar</button>\n            <button type=\"submit\" mat-flat-button [disabled]=\"registerForm.invalid\" class=\"submit-btn\">\n                {{ editingId ? 'Guardar cambios' : 'Registrar usuario' }}\n            </button>\n        </mat-dialog-actions>\n    </form>\n</ng-template>\n", styles: [".my_button {\n    background-color: #0194fe;\n}\n\n.deleteButton {\n    color: #f44336;\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.form-group {\n    margin-bottom: 1.2rem;\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 0.4rem;\n    color: #444444;\n    font-weight: 500;\n}\n\n.form-group input {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n}\n\n.form-group select {\n    width: 100%;\n    padding: 0.8rem;\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    font-size: 1rem;\n    box-sizing: border-box;\n    background-color: white; /* Asegura fondo blanco en select */\n}\n\n.form-group input:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.form-group select:focus {\n    border-color: #007bff;\n    outline: none;\n}\n\n.submit-btn {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n}\n\n.submit-btn:disabled {\n    background-color: #b0c4de;\n    cursor: not-allowed;\n}\n\n.submit-btn:hover:not(:disabled) {\n    background-color: #0056b3;\n}\n\n.cancel-btn {\n    color: #555555;\n}\n\nmat-dialog-actions {\n    gap: 0.75rem;\n}\n\nmat-dialog-actions .submit-btn,\nmat-dialog-actions .cancel-btn {\n    width: auto;\n    margin-top: 0;\n}\n\n.form-group small {\n    display: block;\n    margin-top: 0.35rem;\n    color: #b3261e;\n}\n\n#filosofia-cintilla h1 {\n    color: #fff;\n    text-align: center;\n    font-size: 55px;\n    font-weight: 900;\n    margin: 10px 0px;\n}\n\n.espaciador-flexible {\n    flex: 1 1 auto;\n    justify-content: right;\n}\n\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }], { userDialog: [{
            type: ViewChild,
            args: ['userDialog']
        }], roleFilter: [{
            type: Input
        }], titulo: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Users, { className: "Users", filePath: "app/auth/users/users.ts", lineNumber: 39 }); })();
