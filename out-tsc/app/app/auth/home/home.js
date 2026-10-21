import { Component, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { HomeSol } from "../home-sol/home-sol";
import { Register } from "../register/register";
import { Users } from "../users/users";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { Area } from '../area/area';
import { Category } from '../category/category';
import { Role } from '../role/role';
import { Inventory } from '../inventory/inventory';
import { Assignments } from '../assignments/assignments';
import { Profile } from '../profile/profile';
import { Notifications } from '../notifications/notifications';
import { Reports } from '../reports/reports';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "@angular/material/toolbar";
import * as i5 from "@angular/material/sidenav";
import * as i6 from "@angular/material/list";
import * as i7 from "@angular/material/menu";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
function Home_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-home-sol");
} }
function Home_Conditional_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-register");
} }
function Home_Conditional_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-area");
} }
function Home_Conditional_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-category");
} }
function Home_Conditional_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-role");
} }
function Home_Conditional_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-inventory");
} }
function Home_Conditional_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-assignments");
} }
function Home_Conditional_88_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-reports");
} }
function Home_Conditional_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-users");
} }
export class Home {
    authService;
    router;
    breakpointObserver;
    sidenav;
    user;
    isMobile = true;
    menuAbierto = true;
    vistaActiva = 'users';
    constructor(authService, router, breakpointObserver) {
        this.authService = authService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
    }
    http = inject(HttpClient);
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
        this.observarTamanoPantalla();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success')
                    this.user = response.user;
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }
    cambiarVista(nuevaVista) {
        this.vistaActiva = nuevaVista;
    }
    observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
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
    static ɵfac = function Home_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Home)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.BreakpointObserver)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Home, selectors: [["app-sidebar"]], viewQuery: function Home_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatSidenav, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, decls: 90, vars: 7, consts: [["drawer", ""], ["administracion", "matMenu"], [3, "click"], ["src", "https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg", "alt", "Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital", 1, "img-login"], [1, "espaciador-flexible"], [1, "mat-elevation-z8", 3, "openedChange", "mode", "opened"], [1, "name"], [1, "designation"], [3, "profileUpdated"], ["mat-button", "", 1, "menu-button", 3, "click"], [1, "span"], ["mat-button", "", 1, "menu-button", 3, "matMenuTriggerFor"], ["matListItemMeta", ""], ["xPosition", "after", "panelClass", "menu-personalizado"], ["mat-button", "", 1, "menu-button"], [1, "main-container"], [1, "contenido-dinamico"]], template: function Home_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-toolbar")(1, "button", 2);
            i0.ɵɵlistener("click", function Home_Template_button_click_1_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, " Men\u00FA ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "img", 3)(7, "span", 4);
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "app-notifications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-sidenav-container")(12, "mat-sidenav", 5, 0);
            i0.ɵɵtwoWayListener("openedChange", function Home_Template_mat_sidenav_openedChange_12_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.menuAbierto, $event) || (ctx.menuAbierto = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(14, "h4", 6);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 7);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "mat-divider");
            i0.ɵɵelementStart(19, "app-profile", 8);
            i0.ɵɵlistener("profileUpdated", function Home_Template_app_profile_profileUpdated_19_listener($event) { return ctx.user = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_20_listener() { return ctx.cambiarVista("users"); });
            i0.ɵɵelementStart(21, "mat-icon");
            i0.ɵɵtext(22, "person");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span", 10);
            i0.ɵɵtext(24, "Usuarios");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_25_listener() { return ctx.cambiarVista("register"); });
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27, "assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span", 10);
            i0.ɵɵtext(29, "Nuevo usuario");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_30_listener() { return ctx.cambiarVista("reportes"); });
            i0.ɵɵelementStart(31, "mat-icon");
            i0.ɵɵtext(32, "inbox");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "span", 10);
            i0.ɵɵtext(34, "Reportes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "mat-nav-list")(36, "button", 11)(37, "mat-icon", 12);
            i0.ɵɵtext(38, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span", 10);
            i0.ɵɵtext(40, "Administraci\u00F3n");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "mat-menu", 13, 1)(43, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_43_listener() { return ctx.cambiarVista("area"); });
            i0.ɵɵelementStart(44, "mat-icon");
            i0.ɵɵtext(45, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "span", 10);
            i0.ɵɵtext(47, "\u00C1reas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_48_listener() { return ctx.cambiarVista("categoria"); });
            i0.ɵɵelementStart(49, "mat-icon");
            i0.ɵɵtext(50, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "span", 10);
            i0.ɵɵtext(52, "Categor\u00EDas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(53, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_53_listener() { return ctx.cambiarVista("role"); });
            i0.ɵɵelementStart(54, "mat-icon");
            i0.ɵɵtext(55, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "span", 10);
            i0.ɵɵtext(57, "Roles");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(58, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_58_listener() { return ctx.cambiarVista("inventario"); });
            i0.ɵɵelementStart(59, "mat-icon");
            i0.ɵɵtext(60, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "span", 10);
            i0.ɵɵtext(62, "Inventario");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_63_listener() { return ctx.cambiarVista("asignaciones"); });
            i0.ɵɵelementStart(64, "mat-icon");
            i0.ɵɵtext(65, "assignment_ind");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "span", 10);
            i0.ɵɵtext(67, "Asignaciones");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(68, "mat-divider");
            i0.ɵɵelementStart(69, "button", 14)(70, "mat-icon");
            i0.ɵɵtext(71, "help");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "span", 10);
            i0.ɵɵtext(73, "Ayuda");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "button", 9);
            i0.ɵɵlistener("click", function Home_Template_button_click_74_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(75, "mat-icon");
            i0.ɵɵtext(76, "exit_to_app");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "span", 10);
            i0.ɵɵtext(78, "Salir");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(79, "mat-sidenav-content", 15)(80, "div", 16);
            i0.ɵɵconditionalCreate(81, Home_Conditional_81_Template, 1, 0, "app-home-sol")(82, Home_Conditional_82_Template, 1, 0, "app-register")(83, Home_Conditional_83_Template, 1, 0, "app-area")(84, Home_Conditional_84_Template, 1, 0, "app-category")(85, Home_Conditional_85_Template, 1, 0, "app-role")(86, Home_Conditional_86_Template, 1, 0, "app-inventory")(87, Home_Conditional_87_Template, 1, 0, "app-assignments")(88, Home_Conditional_88_Template, 1, 0, "app-reports")(89, Home_Conditional_89_Template, 1, 0, "app-users");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const administracion_r2 = i0.ɵɵreference(42);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" Bienvenido ", ctx.user == null ? null : ctx.user.name, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("mode", ctx.isMobile ? "over" : "side");
            i0.ɵɵtwoWayProperty("opened", ctx.menuAbierto);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.last_name);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("matMenuTriggerFor", administracion_r2);
            i0.ɵɵadvance(45);
            i0.ɵɵconditional(ctx.vistaActiva === "" ? 81 : ctx.vistaActiva === "register" ? 82 : ctx.vistaActiva === "area" ? 83 : ctx.vistaActiva === "categoria" ? 84 : ctx.vistaActiva === "role" ? 85 : ctx.vistaActiva === "inventario" ? 86 : ctx.vistaActiva === "asignaciones" ? 87 : ctx.vistaActiva === "reportes" ? 88 : 89);
        } }, dependencies: [MatToolbarModule, i4.MatToolbar, MatSidenavModule, i5.MatSidenav, i5.MatSidenavContainer, i5.MatSidenavContent, MatListModule, i6.MatNavList, i6.MatDivider, i6.MatListItemMeta, MatMenuModule, i7.MatMenu, i7.MatMenuTrigger, MatButtonModule, i8.MatButton, MatIconModule, i9.MatIcon, MatExpansionModule,
            MatDividerModule,
            RouterModule,
            MatTableModule,
            MatPaginatorModule,
            MatInputModule,
            MatFormFieldModule,
            MatProgressSpinnerModule,
            Register,
            Users,
            HomeSol,
            Area,
            Category,
            Role,
            Inventory,
            Assignments,
            Profile,
            Notifications,
            Reports], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\n  .mat-mdc-menu-panel {\n  background-color: #0194fe !important;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\n.mat-menu[_ngcontent-%COMP%]{\n  background-color: #0194fe;\n  color: #0194fe;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.span[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login[_ngcontent-%COMP%]{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido[_ngcontent-%COMP%] {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n\n.media-funcion[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Home, [{
        type: Component,
        args: [{ selector: 'app-sidebar', imports: [
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
                    Register,
                    Users,
                    HomeSol,
                    Area,
                    Category,
                    Role,
                    Inventory,
                    Assignments,
                    Profile,
                    Notifications,
                    Reports
                ], template: "<mat-toolbar>\n    <button (click)=\"toggleMenu()\">\n        <mat-icon>menu</mat-icon>\n        <span> Men\u00FA </span>\n    </button>\n    <img class=\"img-login\" src=\"https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg\"\n        alt=\"Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital\">\n\n    <span class=\"espaciador-flexible\"></span>\n    <span> Bienvenido {{ user?.name}} </span>\n    <app-notifications></app-notifications>\n\n</mat-toolbar>\n\n<mat-sidenav-container>\n    <mat-sidenav #drawer [mode]=\"isMobile ? 'over' : 'side'\" [(opened)]=\"menuAbierto\" class=\"mat-elevation-z8\">\n\n        <h4 class=\"name\">{{user?.name}}</h4>\n        <p class=\"designation\">{{user?.last_name}}</p>\n\n        <mat-divider></mat-divider>\n        <app-profile (profileUpdated)=\"user = $event\"></app-profile>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('users')\">\n            <mat-icon>person</mat-icon>\n            <span class=\"span\">Usuarios</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('register')\">\n            <mat-icon>assignment</mat-icon>\n            <span class=\"span\">Nuevo usuario</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('reportes')\">\n            <mat-icon>inbox</mat-icon>\n            <span class=\"span\">Reportes</span>\n        </button>\n        <mat-nav-list>\n            <!-- Opci\u00F3n con men\u00FA flotante -->\n            <button mat-button class=\"menu-button\" [matMenuTriggerFor]=\"administracion\">\n                <mat-icon matListItemMeta>settings</mat-icon>\n                <span class=\"span\">Administraci\u00F3n</span>\n            </button>\n            <!-- Definici\u00F3n del men\u00FA flotante (fuera del flujo del sidenav) -->\n            <mat-menu #administracion=\"matMenu\" xPosition=\"after\" panelClass=\"menu-personalizado\">\n                <button mat-button class=\"menu-button\" (click)=\"cambiarVista('area')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">\u00C1reas</span>\n                </button>\n                <button mat-button class=\"menu-button\"  (click)=\"cambiarVista('categoria')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">Categor\u00EDas</span>\n                </button>\n                <button mat-button class=\"menu-button\"  (click)=\"cambiarVista('role')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">Roles</span>\n                </button>\n                <button mat-button class=\"menu-button\"  (click)=\"cambiarVista('inventario')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">Inventario</span>\n                </button>\n                <button mat-button class=\"menu-button\" (click)=\"cambiarVista('asignaciones')\">\n                    <mat-icon>assignment_ind</mat-icon>\n                    <span class=\"span\">Asignaciones</span>\n                </button>\n\n            </mat-menu>\n            <mat-divider></mat-divider>\n\n            <button mat-button class=\"menu-button\">\n                <mat-icon>help</mat-icon>\n                <span class=\"span\">Ayuda</span>\n            </button>\n            <button mat-button class=\"menu-button\" (click)=\"logout()\">\n                <mat-icon>exit_to_app</mat-icon>\n                <span class=\"span\">Salir</span>\n            </button>\n        </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"main-container\">\n        <div class=\"contenido-dinamico\">\n            @if (vistaActiva === '') {\n            <app-home-sol></app-home-sol>\n            } @else if (vistaActiva === 'register') {\n            <app-register></app-register>\n            } @else if (vistaActiva === 'area') {\n            <app-area></app-area>\n            }@else if (vistaActiva === 'categoria') {\n            <app-category></app-category>\n            }@else if (vistaActiva === 'role') {\n            <app-role></app-role>\n            }@else if (vistaActiva === 'inventario') {\n            <app-inventory></app-inventory>\n            }@else if (vistaActiva === 'asignaciones') {\n            <app-assignments></app-assignments>\n            } @else if (vistaActiva === 'reportes') {\n            <app-reports></app-reports>\n            } @else {\n            <app-users></app-users>\n            }\n\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n", styles: ["mat-toolbar {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\n::ng-deep .mat-mdc-menu-panel {\n  background-color: #0194fe !important;\n}\n\nmat-sidenav {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\n.mat-menu{\n  background-color: #0194fe;\n  color: #0194fe;\n}\n\nmat-sidenav-container {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto {\n    transform: translateX(-250px);\n}\n\n.span {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto {\n    transform: translateX(-250px);\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-row:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido {\n    margin-left: 0;\n}\n\n.media-funcion {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible {\n  flex: 1 1 auto;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }], { sidenav: [{
            type: ViewChild,
            args: [MatSidenav]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Home, { className: "Home", filePath: "app/auth/home/home.ts", lineNumber: 64 }); })();
