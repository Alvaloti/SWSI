import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { finalize, timeout } from 'rxjs';
import { Profile } from '../profile/profile';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/toolbar";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/sidenav";
import * as i9 from "@angular/material/list";
import * as i10 from "@angular/material/table";
import * as i11 from "@angular/material/paginator";
import * as i12 from "@angular/material/input";
import * as i13 from "@angular/material/progress-spinner";
const _c0 = () => [5, 10, 25, 100];
function HomeTec_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function HomeTec_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorCarga);
} }
function HomeTec_Conditional_51_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, "Folio");
    i0.ɵɵelementEnd();
} }
function HomeTec_Conditional_51_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const registro_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(registro_r3.folio);
} }
function HomeTec_Conditional_51_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.vistaActiva === "tickets" ? "T\u00EDtulo" : "Tipo");
} }
function HomeTec_Conditional_51_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const registro_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.obtenerAsunto(registro_r4));
} }
function HomeTec_Conditional_51_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, "Descripci\u00F3n");
    i0.ɵɵelementEnd();
} }
function HomeTec_Conditional_51_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const registro_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(registro_r5.descripcion);
} }
function HomeTec_Conditional_51_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, "Prioridad");
    i0.ɵɵelementEnd();
} }
function HomeTec_Conditional_51_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const registro_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(registro_r6.prioridad);
} }
function HomeTec_Conditional_51_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, "Estado");
    i0.ɵɵelementEnd();
} }
function HomeTec_Conditional_51_td_15_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const estado_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", estado_r9);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(estado_r9);
} }
function HomeTec_Conditional_51_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 33)(1, "select", 34);
    i0.ɵɵlistener("change", function HomeTec_Conditional_51_td_15_Template_select_change_1_listener($event) { const registro_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cambiarEstado(registro_r8, $event)); });
    i0.ɵɵtemplate(2, HomeTec_Conditional_51_td_15_option_2_Template, 2, 2, "option", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const registro_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", registro_r8.estado);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.estados);
} }
function HomeTec_Conditional_51_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, "Comentarios");
    i0.ɵɵelementEnd();
} }
function HomeTec_Conditional_51_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const registro_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(registro_r10.comentarios || "Sin comentarios");
} }
function HomeTec_Conditional_51_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1, "Acciones");
    i0.ɵɵelementEnd();
} }
function HomeTec_Conditional_51_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 33)(1, "button", 37);
    i0.ɵɵlistener("click", function HomeTec_Conditional_51_td_21_Template_button_click_1_listener() { const registro_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.editarRegistro(registro_r12)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()()();
} }
function HomeTec_Conditional_51_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 38);
} }
function HomeTec_Conditional_51_tr_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 39);
} }
function HomeTec_Conditional_51_tr_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 40)(1, "td", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.columnasVisibles.length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" No tienes ", ctx_r1.vistaActiva, " asignados. ");
} }
function HomeTec_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 18);
    i0.ɵɵelementContainerStart(1, 20);
    i0.ɵɵtemplate(2, HomeTec_Conditional_51_th_2_Template, 2, 0, "th", 21)(3, HomeTec_Conditional_51_td_3_Template, 2, 1, "td", 22);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(4, 23);
    i0.ɵɵtemplate(5, HomeTec_Conditional_51_th_5_Template, 2, 1, "th", 21)(6, HomeTec_Conditional_51_td_6_Template, 2, 1, "td", 22);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(7, 24);
    i0.ɵɵtemplate(8, HomeTec_Conditional_51_th_8_Template, 2, 0, "th", 21)(9, HomeTec_Conditional_51_td_9_Template, 2, 1, "td", 22);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(10, 25);
    i0.ɵɵtemplate(11, HomeTec_Conditional_51_th_11_Template, 2, 0, "th", 21)(12, HomeTec_Conditional_51_td_12_Template, 2, 1, "td", 22);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 26);
    i0.ɵɵtemplate(14, HomeTec_Conditional_51_th_14_Template, 2, 0, "th", 21)(15, HomeTec_Conditional_51_td_15_Template, 3, 2, "td", 22);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(16, 27);
    i0.ɵɵtemplate(17, HomeTec_Conditional_51_th_17_Template, 2, 0, "th", 21)(18, HomeTec_Conditional_51_td_18_Template, 2, 1, "td", 22);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(19, 28);
    i0.ɵɵtemplate(20, HomeTec_Conditional_51_th_20_Template, 2, 0, "th", 21)(21, HomeTec_Conditional_51_td_21_Template, 4, 0, "td", 22);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(22, HomeTec_Conditional_51_tr_22_Template, 1, 0, "tr", 29)(23, HomeTec_Conditional_51_tr_23_Template, 1, 0, "tr", 30)(24, HomeTec_Conditional_51_tr_24_Template, 3, 2, "tr", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r1.datos);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.columnasVisibles);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.columnasVisibles);
} }
export class HomeTec {
    authService;
    router;
    breakpointObserver;
    changeDetectorRef;
    estados = [];
    sidenav;
    user;
    isMobile = true;
    menuAbierto = true;
    vistaActiva = 'solicitudes';
    columnasVisibles = ['folio', 'asunto', 'descripcion', 'prioridad', 'estado', 'comentarios', 'acciones'];
    datos = new MatTableDataSource([]);
    cargando = false;
    errorCarga = '';
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    temporizadorBusqueda;
    constructor(authService, router, breakpointObserver, changeDetectorRef) {
        this.authService = authService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
        this.observarTamanoPantalla();
        this.cargarEstados();
        this.cargarDatos();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success')
                    this.user = response.user;
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }
    cargarEstados() {
        this.authService.getEstados().subscribe({
            next: (response) => {
                this.estados = response.estados ?? [];
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => console.error('No se pudo cargar el catálogo de estados:', error),
        });
    }
    observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
    }
    cambiarVista(nuevaVista) {
        if (this.vistaActiva === nuevaVista)
            return;
        this.vistaActiva = nuevaVista;
        this.paginaActual = 0;
        this.filtroBusqueda = '';
        this.cargarDatos();
        if (this.isMobile)
            this.menuAbierto = false;
    }
    cargarDatos() {
        this.cargando = true;
        this.errorCarga = '';
        this.datos.data = [];
        const vistaSolicitada = this.vistaActiva;
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString())
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda)
            .set('assignedToMe', 'true');
        const request = vistaSolicitada === 'tickets'
            ? this.authService.getTickets(params)
            : this.authService.getSolicitudes(params);
        request.pipe(timeout(15000), finalize(() => {
            if (this.vistaActiva === vistaSolicitada) {
                this.cargando = false;
                this.changeDetectorRef.markForCheck();
            }
        })).subscribe({
            next: (respuesta) => {
                if (this.vistaActiva !== vistaSolicitada)
                    return;
                const registros = vistaSolicitada === 'tickets' ? respuesta.tickets : respuesta.solicitudes;
                this.datos.data = Array.isArray(registros) ? registros : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                if (this.vistaActiva !== vistaSolicitada)
                    return;
                console.error(`No se pudieron cargar las ${vistaSolicitada}:`, error);
                this.datos.data = [];
                this.totalRegistros = 0;
                this.errorCarga = error.error?.message ?? `No fue posible cargar ${vistaSolicitada}.`;
                this.changeDetectorRef.markForCheck();
            },
        });
    }
    obtenerAsunto(registro) {
        return this.vistaActiva === 'tickets' ? registro.titulo : registro.tipo;
    }
    onFiltrar(evento) {
        this.filtroBusqueda = evento.target.value.trim();
        this.paginaActual = 0;
        if (this.temporizadorBusqueda)
            clearTimeout(this.temporizadorBusqueda);
        this.temporizadorBusqueda = setTimeout(() => this.cargarDatos(), 300);
    }
    onCambiarPagina(evento) {
        this.paginaActual = evento.pageIndex;
        this.tamanoPagina = evento.pageSize;
        this.cargarDatos();
    }
    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
    }
    editarRegistro(registro) {
        const id = registro._id ?? registro.id;
        if (!id)
            return;
        const comentarios = window.prompt('Comentarios:', registro.comentarios ?? '');
        if (comentarios === null)
            return;
        const request = this.vistaActiva === 'tickets'
            ? this.authService.updateTicket(id, { comentarios })
            : this.authService.updateSolicitud(id, { comentarios });
        request.subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible actualizar el registro.'),
        });
    }
    cambiarEstado(registro, event) {
        const estado = event.target.value;
        const request = this.vistaActiva === 'tickets'
            ? this.authService.updateTicket(registro._id, { estado })
            : this.authService.updateSolicitud(registro._id, { estado });
        request.subscribe({
            next: () => this.cargarDatos(),
            error: (error) => {
                window.alert(error.error?.message ?? 'No fue posible actualizar el estado.');
                this.cargarDatos();
            },
        });
    }
    logout() {
        this.authService.logout().subscribe({
            next: (response) => {
                window.alert(response.message);
                this.router.navigateByUrl('/login', { replaceUrl: true });
            },
            error: () => window.alert('Falla en salida del sistema, intenta de nuevo'),
        });
    }
    static ɵfac = function HomeTec_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeTec)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.BreakpointObserver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeTec, selectors: [["app-home-tec"]], viewQuery: function HomeTec_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatSidenav, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, decls: 53, vars: 12, consts: [["drawer", ""], ["type", "button", "aria-label", "Abrir o cerrar men\u00FA", 3, "click"], ["src", "https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg", "alt", "Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital", 1, "img-login"], [1, "espaciador-flexible"], [1, "mat-elevation-z8", 3, "openedChange", "mode", "opened"], ["src", "../../../../public/Lot.png", "alt", "Foto de perfil", 1, "avatar", "mat-elevation-z8"], [1, "name"], [1, "designation"], [3, "profileUpdated"], ["type", "button", "mat-button", "", 1, "menu-button", 3, "click"], [1, "span"], ["type", "button", "mat-button", "", 1, "menu-button"], [1, "main-container"], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Escribe para buscar", 3, "keyup", "value"], [1, "loading-spinner"], ["role", "alert", 1, "load-error"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["aria-label", "Seleccionar p\u00E1gina", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["matColumnDef", "folio"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "asunto"], ["matColumnDef", "descripcion"], ["matColumnDef", "prioridad"], ["matColumnDef", "estado"], ["matColumnDef", "comentarios"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["aria-label", "Estado del registro", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "button", "mat-icon-button", "", "color", "primary", "aria-label", "Actualizar estado y comentarios", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"]], template: function HomeTec_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-toolbar")(1, "button", 1);
            i0.ɵɵlistener("click", function HomeTec_Template_button_click_1_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, " Men\u00FA ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "img", 2)(7, "span", 3);
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "mat-sidenav-container")(11, "mat-sidenav", 4, 0);
            i0.ɵɵtwoWayListener("openedChange", function HomeTec_Template_mat_sidenav_openedChange_11_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.menuAbierto, $event) || (ctx.menuAbierto = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelement(13, "img", 5);
            i0.ɵɵelementStart(14, "h4", 6);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 7);
            i0.ɵɵtext(17, "T\u00E9cnico");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "mat-divider");
            i0.ɵɵelementStart(19, "app-profile", 8);
            i0.ɵɵlistener("profileUpdated", function HomeTec_Template_app_profile_profileUpdated_19_listener($event) { return ctx.user = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 9);
            i0.ɵɵlistener("click", function HomeTec_Template_button_click_20_listener() { return ctx.cambiarVista("solicitudes"); });
            i0.ɵɵelementStart(21, "mat-icon");
            i0.ɵɵtext(22, "assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span", 10);
            i0.ɵɵtext(24, "Solicitudes asignadas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "button", 9);
            i0.ɵɵlistener("click", function HomeTec_Template_button_click_25_listener() { return ctx.cambiarVista("tickets"); });
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27, "confirmation_number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span", 10);
            i0.ɵɵtext(29, "Tickets asignados");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(30, "mat-divider");
            i0.ɵɵelementStart(31, "button", 11)(32, "mat-icon");
            i0.ɵɵtext(33, "help");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "span", 10);
            i0.ɵɵtext(35, "Ayuda");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "button", 9);
            i0.ɵɵlistener("click", function HomeTec_Template_button_click_36_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(37, "mat-icon");
            i0.ɵɵtext(38, "exit_to_app");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span", 10);
            i0.ɵɵtext(40, "Salir");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "mat-sidenav-content", 12)(42, "div", 13)(43, "h2");
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "mat-form-field", 14)(46, "mat-label");
            i0.ɵɵtext(47, "Buscar por folio, asunto o descripci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "input", 15);
            i0.ɵɵlistener("keyup", function HomeTec_Template_input_keyup_48_listener($event) { return ctx.onFiltrar($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(49, HomeTec_Conditional_49_Template, 2, 0, "div", 16)(50, HomeTec_Conditional_50_Template, 2, 1, "p", 17)(51, HomeTec_Conditional_51_Template, 25, 3, "table", 18);
            i0.ɵɵelementStart(52, "mat-paginator", 19);
            i0.ɵɵlistener("page", function HomeTec_Template_mat_paginator_page_52_listener($event) { return ctx.onCambiarPagina($event); });
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1("Bienvenido ", ctx.user == null ? null : ctx.user.username);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mode", ctx.isMobile ? "over" : "side");
            i0.ɵɵtwoWayProperty("opened", ctx.menuAbierto);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.username);
            i0.ɵɵadvance(29);
            i0.ɵɵtextInterpolate(ctx.vistaActiva === "tickets" ? "Tickets asignados" : "Solicitudes asignadas");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("value", ctx.filtroBusqueda);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.cargando ? 49 : ctx.errorCarga ? 50 : 51);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("length", ctx.totalRegistros)("pageSize", ctx.tamanoPagina)("pageIndex", ctx.paginaActual)("pageSizeOptions", i0.ɵɵpureFunction0(11, _c0));
        } }, dependencies: [CommonModule, i4.NgForOf, MatToolbarModule, i5.MatToolbar, MatButtonModule, i6.MatButton, i6.MatIconButton, MatIconModule, i7.MatIcon, MatSidenavModule, i8.MatSidenav, i8.MatSidenavContainer, i8.MatSidenavContent, MatDividerModule, i9.MatDivider, MatTableModule, i10.MatTable, i10.MatHeaderCellDef, i10.MatHeaderRowDef, i10.MatColumnDef, i10.MatCellDef, i10.MatRowDef, i10.MatHeaderCell, i10.MatCell, i10.MatHeaderRow, i10.MatRow, i10.MatNoDataRow, MatPaginatorModule, i11.MatPaginator, MatFormFieldModule, i12.MatFormField, i12.MatLabel, MatInputModule, i12.MatInput, MatProgressSpinnerModule, i13.MatProgressSpinner, Profile], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 65px);\n    margin-right: 10px;\n}\n\nmat-sidenav-container.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.span[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login[_ngcontent-%COMP%]{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    overflow-x: auto;\n}\n\n.table-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], \n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], \n.table-container[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 32px;\n}\n\n.load-error[_ngcontent-%COMP%] {\n    margin: 16px 0;\n    padding: 12px;\n    border-radius: 6px;\n    background: #ffebee;\n    color: #b71c1c;\n}\n\n.mat-column-acciones[_ngcontent-%COMP%] {\n    width: 90px;\n    text-align: center;\n}\n\n.mat-row[_ngcontent-%COMP%]   .mat-cell[colspan][_ngcontent-%COMP%] {\n    padding: 32px;\n    text-align: center;\n    color: #666;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido[_ngcontent-%COMP%] {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n\n.media-funcion[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeTec, [{
        type: Component,
        args: [{ selector: 'app-home-tec', imports: [
                    CommonModule,
                    MatToolbarModule,
                    MatButtonModule,
                    MatIconModule,
                    MatSidenavModule,
                    MatDividerModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatProgressSpinnerModule,
                    Profile,
                ], template: "<mat-toolbar>\n    <button type=\"button\" (click)=\"toggleMenu()\" aria-label=\"Abrir o cerrar men\u00FA\">\n        <mat-icon>menu</mat-icon>\n        <span> Men\u00FA </span>\n    </button>\n    <img class=\"img-login\" src=\"https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg\"\n        alt=\"Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital\">\n    <span class=\"espaciador-flexible\"></span>\n    <span>Bienvenido {{ user?.username }}</span>\n</mat-toolbar>\n\n<mat-sidenav-container>\n    <mat-sidenav #drawer [mode]=\"isMobile ? 'over' : 'side'\" [(opened)]=\"menuAbierto\" class=\"mat-elevation-z8\">\n        <img class=\"avatar mat-elevation-z8\" src=\"../../../../public/Lot.png\" alt=\"Foto de perfil\">\n        <h4 class=\"name\">{{ user?.username }}</h4>\n        <p class=\"designation\">T\u00E9cnico</p>\n\n        <mat-divider></mat-divider>\n        <app-profile (profileUpdated)=\"user = $event\"></app-profile>\n        <button type=\"button\" mat-button class=\"menu-button\" (click)=\"cambiarVista('solicitudes')\">\n            <mat-icon>assignment</mat-icon>\n            <span class=\"span\">Solicitudes asignadas</span>\n        </button>\n        <button type=\"button\" mat-button class=\"menu-button\" (click)=\"cambiarVista('tickets')\">\n            <mat-icon>confirmation_number</mat-icon>\n            <span class=\"span\">Tickets asignados</span>\n        </button>\n\n        <mat-divider></mat-divider>\n        <button type=\"button\" mat-button class=\"menu-button\">\n            <mat-icon>help</mat-icon>\n            <span class=\"span\">Ayuda</span>\n        </button>\n        <button type=\"button\" mat-button class=\"menu-button\" (click)=\"logout()\">\n            <mat-icon>exit_to_app</mat-icon>\n            <span class=\"span\">Salir</span>\n        </button>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"main-container\">\n        <div class=\"table-container\">\n            <h2>{{ vistaActiva === 'tickets' ? 'Tickets asignados' : 'Solicitudes asignadas' }}</h2>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Buscar por folio, asunto o descripci\u00F3n</mat-label>\n                <input matInput [value]=\"filtroBusqueda\" (keyup)=\"onFiltrar($event)\" placeholder=\"Escribe para buscar\">\n            </mat-form-field>\n\n            @if (cargando) {\n            <div class=\"loading-spinner\"><mat-spinner></mat-spinner></div>\n            } @else if (errorCarga) {\n            <p class=\"load-error\" role=\"alert\">{{ errorCarga }}</p>\n            } @else {\n            <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n                <ng-container matColumnDef=\"folio\">\n                    <th mat-header-cell *matHeaderCellDef>Folio</th>\n                    <td mat-cell *matCellDef=\"let registro\">{{ registro.folio }}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"asunto\">\n                    <th mat-header-cell *matHeaderCellDef>{{ vistaActiva === 'tickets' ? 'T\u00EDtulo' : 'Tipo' }}</th>\n                    <td mat-cell *matCellDef=\"let registro\">{{ obtenerAsunto(registro) }}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"descripcion\">\n                    <th mat-header-cell *matHeaderCellDef>Descripci\u00F3n</th>\n                    <td mat-cell *matCellDef=\"let registro\">{{ registro.descripcion }}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"prioridad\">\n                    <th mat-header-cell *matHeaderCellDef>Prioridad</th>\n                    <td mat-cell *matCellDef=\"let registro\">{{ registro.prioridad }}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"estado\">\n                    <th mat-header-cell *matHeaderCellDef>Estado</th>\n                    <td mat-cell *matCellDef=\"let registro\">\n                        <select [value]=\"registro.estado\" (change)=\"cambiarEstado(registro, $event)\"\n                            aria-label=\"Estado del registro\">\n                            <option *ngFor=\"let estado of estados\" [value]=\"estado\">{{ estado }}</option>\n                        </select>\n                    </td>\n                </ng-container>\n                <ng-container matColumnDef=\"comentarios\">\n                    <th mat-header-cell *matHeaderCellDef>Comentarios</th>\n                    <td mat-cell *matCellDef=\"let registro\">{{ registro.comentarios || 'Sin comentarios' }}</td>\n                </ng-container>\n                <ng-container matColumnDef=\"acciones\">\n                    <th mat-header-cell *matHeaderCellDef>Acciones</th>\n                    <td mat-cell *matCellDef=\"let registro\">\n                        <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"editarRegistro(registro)\"\n                            aria-label=\"Actualizar estado y comentarios\"><mat-icon>edit</mat-icon></button>\n                    </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: columnasVisibles;\"></tr>\n                <tr class=\"mat-row\" *matNoDataRow>\n                    <td class=\"mat-cell\" [attr.colspan]=\"columnasVisibles.length\">\n                        No tienes {{ vistaActiva }} asignados.\n                    </td>\n                </tr>\n            </table>\n            }\n\n            <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageIndex]=\"paginaActual\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\" (page)=\"onCambiarPagina($event)\"\n                aria-label=\"Seleccionar p\u00E1gina\">\n            </mat-paginator>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n", styles: ["mat-toolbar {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\nmat-sidenav {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\nmat-sidenav-container {\n    height: calc(100vh - 65px);\n    margin-right: 10px;\n}\n\nmat-sidenav-container.oculto {\n    transform: translateX(-250px);\n}\n\n.span {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto {\n    transform: translateX(-250px);\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    overflow-x: auto;\n}\n\n.table-container mat-form-field,\n.table-container table,\n.table-container mat-paginator {\n    width: 100%;\n}\n\n.loading-spinner {\n    display: flex;\n    justify-content: center;\n    padding: 32px;\n}\n\n.load-error {\n    margin: 16px 0;\n    padding: 12px;\n    border-radius: 6px;\n    background: #ffebee;\n    color: #b71c1c;\n}\n\n.mat-column-acciones {\n    width: 90px;\n    text-align: center;\n}\n\n.mat-row .mat-cell[colspan] {\n    padding: 32px;\n    text-align: center;\n    color: #666;\n}\n\n.mat-mdc-row:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido {\n    margin-left: 0;\n}\n\n.media-funcion {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible {\n  flex: 1 1 auto;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }, { type: i0.ChangeDetectorRef }], { sidenav: [{
            type: ViewChild,
            args: [MatSidenav]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeTec, { className: "HomeTec", filePath: "app/auth/home-tec/home-tec.ts", lineNumber: 41 }); })();
