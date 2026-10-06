import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavContainer, MatSidenav, } from '@angular/material/sidenav';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { Profile } from '../profile/profile';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "@angular/material/toolbar";
import * as i5 from "@angular/material/sidenav";
import * as i6 from "@angular/material/list";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/table";
import * as i10 from "@angular/material/paginator";
import * as i11 from "@angular/material/input";
import * as i12 from "@angular/material/progress-spinner";
const _c0 = () => [5, 10, 25, 100];
function HomeSol_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function HomeSol_th_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, " Folio ");
    i0.ɵɵelementEnd();
} }
function HomeSol_td_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r2.folio, " ");
} }
function HomeSol_th_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, " Tipo ");
    i0.ɵɵelementEnd();
} }
function HomeSol_td_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r3.tipo, " ");
} }
function HomeSol_th_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, " Descripci\u00F3n ");
    i0.ɵɵelementEnd();
} }
function HomeSol_td_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r4.descripcion, " ");
} }
function HomeSol_th_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, " estado ");
    i0.ɵɵelementEnd();
} }
function HomeSol_td_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r5.estado, " ");
} }
function HomeSol_th_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, " Comentarios ");
    i0.ɵɵelementEnd();
} }
function HomeSol_td_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elemento_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", elemento_r6.comentarios, " ");
} }
function HomeSol_th_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, " Acciones ");
    i0.ɵɵelementEnd();
} }
function HomeSol_td_68_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 33)(1, "button", 34);
    i0.ɵɵlistener("click", function HomeSol_td_68_Template_button_click_1_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.editarSolicitud(elemento_r8)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 35);
    i0.ɵɵlistener("click", function HomeSol_td_68_Template_button_click_4_listener() { const elemento_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.eliminarSolicitud(elemento_r8)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete");
    i0.ɵɵelementEnd()()();
} }
function HomeSol_tr_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 36);
} }
function HomeSol_tr_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 37);
} }
export class HomeSol {
    authService;
    router;
    breakpointObserver;
    eliminarSolicitud(solicitud) {
        const id = solicitud._id ?? solicitud.id;
        if (!id || !window.confirm(`¿Eliminar la solicitud "${solicitud.folio ?? id}"?`))
            return;
        this.authService.deleteSolicitud(id).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar la solicitud.'),
        });
    }
    editarSolicitud(solicitud) {
        const id = solicitud._id ?? solicitud.id;
        if (!id)
            return;
        const comentarios = window.prompt('Comentarios:', solicitud.comentarios ?? '');
        if (comentarios === null)
            return;
        this.authService.updateSolicitud(id, { comentarios }).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible actualizar la solicitud.'),
        });
    }
    sidenav;
    user;
    isMobile = true;
    menuAbierto = true;
    constructor(authService, router, breakpointObserver) {
        this.authService = authService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
    }
    http = inject(HttpClient);
    // Configuración de Tabla
    columnasVisibles = ['folio', 'tipo', 'descripcion', 'estado', 'comentarios', 'acciones'];
    datos = new MatTableDataSource([]);
    cargando = false;
    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    ngOnInit() {
        this.observarTamanoPantalla();
        this.cargarDatos();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success')
                    this.user = response.user;
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }
    observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
    }
    cargarDatos() {
        console.log('Se ejecuta la función de carga de datos');
        this.cargando = true;
        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);
        this.authService.getSolicitudes(params).subscribe({
            next: (respuesta) => {
                const solicitudes = respuesta.solicitudes ?? respuesta;
                this.datos.data = Array.isArray(solicitudes) ? solicitudes : [];
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
    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
    }
    logout() {
        this.authService.logout().subscribe({
            next: (response) => {
                window.alert(response.message);
                this.router.navigateByUrl('/login', { replaceUrl: true });
            },
            error: () => {
                console.log('err');
                window.alert('Falla en salida del sistema, intenta de nuevo');
            },
        });
    }
    static ɵfac = function HomeSol_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeSol)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.BreakpointObserver)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeSol, selectors: [["app-home-sol"]], viewQuery: function HomeSol_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatSidenav, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, decls: 72, vars: 12, consts: [["drawer", ""], [3, "click"], ["src", "https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg", "alt", "Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital", 1, "img-login"], [1, "espaciador-flexible"], ["mat-button", "", 1, "menu-button"], [1, "sidenav-container"], [1, "mat-elevation-z8", 3, "openedChange", "mode", "opened"], ["src", "../../../../public/Lot.png", 1, "avatar", "mat-elevation-z8"], [1, "name"], [1, "designation"], [3, "profileUpdated"], ["mat-button", "", "routerLink", "/solicitud", 1, "menu-button"], [1, "span"], ["mat-button", "", 1, "menu-button", 3, "click"], [1, "content"], ["name", "Solicitudes"], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Ej. Juan", 3, "keyup"], [1, "loading-spinner"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "folio"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tipo"], ["matColumnDef", "descripcion"], ["matColumnDef", "estado"], ["matColumnDef", "comentarios"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Seleccionar p\u00E1gina", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", 1, "deleteButton", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function HomeSol_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-toolbar")(1, "button", 1);
            i0.ɵɵlistener("click", function HomeSol_Template_button_click_1_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, " Men\u00FA ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "img", 2)(7, "span", 3);
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "span")(11, "button", 4)(12, "mat-icon");
            i0.ɵɵtext(13, "notifications_none");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(14, "mat-sidenav-container", 5)(15, "mat-sidenav", 6, 0);
            i0.ɵɵtwoWayListener("openedChange", function HomeSol_Template_mat_sidenav_openedChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.menuAbierto, $event) || (ctx.menuAbierto = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelement(17, "img", 7);
            i0.ɵɵelementStart(18, "h4", 8);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p", 9);
            i0.ɵɵtext(21, "Software Engineer");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "mat-divider");
            i0.ɵɵelementStart(23, "app-profile", 10);
            i0.ɵɵlistener("profileUpdated", function HomeSol_Template_app_profile_profileUpdated_23_listener($event) { return ctx.user = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 11)(25, "mat-icon");
            i0.ɵɵtext(26, "assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span", 12);
            i0.ɵɵtext(28, "Crea solicitud");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(29, "mat-divider");
            i0.ɵɵelementStart(30, "button", 4)(31, "mat-icon");
            i0.ɵɵtext(32, "help");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "span", 12);
            i0.ɵɵtext(34, "Help");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "button", 13);
            i0.ɵɵlistener("click", function HomeSol_Template_button_click_35_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(36, "mat-icon");
            i0.ɵɵtext(37, "exit_to_app");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span", 12);
            i0.ɵɵtext(39, "Salir");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "div", 14);
            i0.ɵɵelement(41, "router-outlet")(42, "router-outlet", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "mat-sidenav-content")(44, "div", 16)(45, "mat-form-field", 17)(46, "mat-label");
            i0.ɵɵtext(47, "Buscar por nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "input", 18);
            i0.ɵɵlistener("keyup", function HomeSol_Template_input_keyup_48_listener($event) { return ctx.onFiltrar($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(49, HomeSol_Conditional_49_Template, 2, 0, "div", 19);
            i0.ɵɵelementStart(50, "table", 20);
            i0.ɵɵelementContainerStart(51, 21);
            i0.ɵɵtemplate(52, HomeSol_th_52_Template, 2, 0, "th", 22)(53, HomeSol_td_53_Template, 2, 1, "td", 23);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(54, 24);
            i0.ɵɵtemplate(55, HomeSol_th_55_Template, 2, 0, "th", 22)(56, HomeSol_td_56_Template, 2, 1, "td", 23);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(57, 25);
            i0.ɵɵtemplate(58, HomeSol_th_58_Template, 2, 0, "th", 22)(59, HomeSol_td_59_Template, 2, 1, "td", 23);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(60, 26);
            i0.ɵɵtemplate(61, HomeSol_th_61_Template, 2, 0, "th", 22)(62, HomeSol_td_62_Template, 2, 1, "td", 23);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(63, 27);
            i0.ɵɵtemplate(64, HomeSol_th_64_Template, 2, 0, "th", 22)(65, HomeSol_td_65_Template, 2, 1, "td", 23);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(66, 28);
            i0.ɵɵtemplate(67, HomeSol_th_67_Template, 2, 0, "th", 22)(68, HomeSol_td_68_Template, 7, 0, "td", 23);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(69, HomeSol_tr_69_Template, 1, 0, "tr", 29)(70, HomeSol_tr_70_Template, 1, 0, "tr", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "mat-paginator", 31);
            i0.ɵɵlistener("page", function HomeSol_Template_mat_paginator_page_71_listener($event) { return ctx.onCambiarPagina($event); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" Bienvenido ", ctx.user == null ? null : ctx.user.username, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("mode", ctx.isMobile ? "over" : "side");
            i0.ɵɵtwoWayProperty("opened", ctx.menuAbierto);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.username);
            i0.ɵɵadvance(30);
            i0.ɵɵconditional(ctx.cargando ? 49 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("dataSource", ctx.datos);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("matHeaderRowDef", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("matRowDefColumns", ctx.columnasVisibles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("length", ctx.totalRegistros)("pageSize", ctx.tamanoPagina)("pageSizeOptions", i0.ɵɵpureFunction0(11, _c0));
        } }, dependencies: [CommonModule,
            MatToolbarModule, i4.MatToolbar, MatSidenavModule, i5.MatSidenav, i5.MatSidenavContainer, i5.MatSidenavContent, MatListModule, i6.MatDivider, MatMenuModule,
            MatButtonModule, i7.MatButton, i7.MatIconButton, MatIconModule, i8.MatIcon, MatExpansionModule,
            MatDividerModule,
            RouterModule, i2.RouterOutlet, i2.RouterLink, MatTableModule, i9.MatTable, i9.MatHeaderCellDef, i9.MatHeaderRowDef, i9.MatColumnDef, i9.MatCellDef, i9.MatRowDef, i9.MatHeaderCell, i9.MatCell, i9.MatHeaderRow, i9.MatRow, MatPaginatorModule, i10.MatPaginator, MatInputModule, i11.MatInput, i11.MatFormField, i11.MatLabel, MatFormFieldModule,
            MatProgressSpinnerModule, i12.MatProgressSpinner, Profile], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.span[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login[_ngcontent-%COMP%]{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido[_ngcontent-%COMP%] {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n\n.media-funcion[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeSol, [{
        type: Component,
        args: [{ selector: 'app-home-sol', imports: [
                    CommonModule,
                    MatToolbarModule,
                    MatSidenavModule,
                    MatListModule,
                    MatMenuModule,
                    MatButtonModule,
                    MatIconModule,
                    MatExpansionModule,
                    MatDividerModule,
                    RouterModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatProgressSpinnerModule,
                    MatIcon,
                    MatSidenavContainer,
                    MatSidenav,
                    MatTable,
                    MatTableModule,
                    MatDivider,
                    MatIcon,
                    MatToolbar,
                    MatSidenavModule,
                    MatPaginator,
                    RouterOutlet,
                    MatFormField,
                    MatLabel,
                    MatProgressSpinner,
                    MatToolbarModule,
                    MatSidenavModule,
                    MatButtonModule,
                    MatIconModule,
                    MatDividerModule,
                    RouterModule,
                    MatFormField,
                    MatLabel,
                    MatProgressSpinner,
                    MatPaginator,
                    MatTable,
                    MatTableModule,
                    MatPaginatorModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatProgressSpinnerModule,
                    MatIcon,
                    RouterLink,
                    Profile
                ], template: "<mat-toolbar>\n    <button (click)=\"toggleMenu()\">\n        <mat-icon>menu</mat-icon>\n        <span> Men\u00FA </span>\n    </button>\n    <img class=\"img-login\" src=\"https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg\"\n        alt=\"Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital\">\n    <span class=\"espaciador-flexible\"></span>\n    <span> Bienvenido {{ user?.username}} </span>\n    <span>\n        <button mat-button class=\"menu-button\">\n            <mat-icon>notifications_none</mat-icon>\n        </button>\n    </span>\n\n</mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer [mode]=\"isMobile ? 'over' : 'side'\" [(opened)]=\"menuAbierto\" class=\"mat-elevation-z8\">\n        <img class=\"avatar mat-elevation-z8\" src=\"../../../../public/Lot.png\" />\n\n        <h4 class=\"name\">{{user?.username}}</h4>\n        <p class=\"designation\">Software Engineer</p>\n\n        <mat-divider></mat-divider>\n        <app-profile (profileUpdated)=\"user = $event\"></app-profile>\n        <button mat-button class=\"menu-button\" routerLink=\"/solicitud\">\n            <mat-icon>assignment</mat-icon>\n            <span class=\"span\">Crea solicitud</span>\n        </button>\n\n        <mat-divider></mat-divider>\n\n        <button mat-button class=\"menu-button\">\n            <mat-icon>help</mat-icon>\n            <span class=\"span\">Help</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"logout()\">\n            <mat-icon>exit_to_app</mat-icon>\n            <span class=\"span\">Salir</span>\n        </button>\n    </mat-sidenav>\n\n    <div class=\"content\">\n        <router-outlet></router-outlet>\n        <router-outlet name=\"Solicitudes\"></router-outlet>\n    </div>\n    <mat-sidenav-content>\n        <div class=\"table-container\">\n            <!-- Filtro de B\u00FAsqueda -->\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Buscar por nombre</mat-label>\n                <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Ej. Juan\">\n            </mat-form-field>\n\n\n            <!-- Spinner de Carga -->\n            @if (cargando) {\n            <div class=\"loading-spinner\">\n                <mat-spinner></mat-spinner>\n            </div>\n            }\n\n            <!-- Tabla Angular Material -->\n            <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n\n                <!-- Columna ID -->\n                <ng-container matColumnDef=\"folio\">\n                    <th mat-header-cell *matHeaderCellDef> Folio </th>\n                    <td mat-cell *matCellDef=\"let elemento\"> {{elemento.folio}} </td>\n                </ng-container>\n\n                <!-- Columna Nombre -->\n                <ng-container matColumnDef=\"tipo\">\n                    <th mat-header-cell *matHeaderCellDef> Tipo </th>\n                    <td mat-cell *matCellDef=\"let elemento\"> {{elemento.tipo}} </td>\n                </ng-container>\n\n                <!-- Columna Email -->\n                <ng-container matColumnDef=\"descripcion\">\n                    <th mat-header-cell *matHeaderCellDef> Descripci\u00F3n </th>\n                    <td mat-cell *matCellDef=\"let elemento\"> {{elemento.descripcion}} </td>\n                </ng-container>\n\n                <!-- Columna Estatus -->\n                <ng-container matColumnDef=\"estado\">\n                    <th mat-header-cell *matHeaderCellDef> estado </th>\n                    <td mat-cell *matCellDef=\"let elemento\"> {{elemento.estado}} </td>\n                </ng-container>\n\n                <!-- Columna Rol -->\n                <ng-container matColumnDef=\"comentarios\">\n                    <th mat-header-cell *matHeaderCellDef> Comentarios </th>\n                    <td mat-cell *matCellDef=\"let elemento\"> {{elemento.comentarios}} </td>\n                </ng-container>\n\n                <!-- Columna Acciones -->\n                <ng-container matColumnDef=\"acciones\">\n                    <th mat-header-cell *matHeaderCellDef> Acciones </th>\n                    <td mat-cell *matCellDef=\"let elemento\">\n                        <button mat-icon-button color=\"primary\" (click)=\"editarSolicitud(elemento)\">\n                            <mat-icon>edit</mat-icon>\n                        </button>\n                        <button mat-icon-button class=\"deleteButton\" (click)=\"eliminarSolicitud(elemento)\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: columnasVisibles;\"></tr>\n            </table>\n\n            <!-- Paginador -->\n            <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageSizeOptions]=\"[5, 10, 25, 100]\"\n                (page)=\"onCambiarPagina($event)\" aria-label=\"Seleccionar p\u00E1gina\">\n            </mat-paginator>\n        </div>\n\n    </mat-sidenav-content>\n</mat-sidenav-container>\n", styles: ["mat-toolbar {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\nmat-sidenav {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\nmat-sidenav-container {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto {\n    transform: translateX(-250px);\n}\n\n.span {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto {\n    transform: translateX(-250px);\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-row:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido {\n    margin-left: 0;\n}\n\n.media-funcion {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible {\n  flex: 1 1 auto;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }], { sidenav: [{
            type: ViewChild,
            args: [MatSidenav]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeSol, { className: "HomeSol", filePath: "app/auth/home-sol/home-sol.ts", lineNumber: 79 }); })();
