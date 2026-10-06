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
function Home_Conditional_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-home-sol");
} }
function Home_Conditional_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-register");
} }
function Home_Conditional_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-area");
} }
function Home_Conditional_88_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-category");
} }
function Home_Conditional_89_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-role");
} }
function Home_Conditional_90_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-inventory");
} }
function Home_Conditional_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-assignments");
} }
function Home_Conditional_92_Template(rf, ctx) { if (rf & 1) {
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
        } }, decls: 93, vars: 6, consts: [["drawer", ""], ["administracion", "matMenu"], [3, "click"], ["src", "https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg", "alt", "Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital", 1, "img-login"], [1, "espaciador-flexible"], ["mat-button", "", 1, "menu-button"], [1, "mat-elevation-z8", 3, "openedChange", "mode", "opened"], ["src", "../../../../public/Lot.png", 1, "avatar", "mat-elevation-z8"], [1, "name"], [1, "designation"], [3, "profileUpdated"], ["mat-button", "", 1, "menu-button", 3, "click"], [1, "span"], ["mat-button", "", 1, "menu-button", 3, "matMenuTriggerFor"], ["matListItemMeta", ""], ["xPosition", "after", "panelClass", "menu-personalizado"], [1, "main-container"], [1, "contenido-dinamico"]], template: function Home_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelementStart(10, "span")(11, "button", 5)(12, "mat-icon");
            i0.ɵɵtext(13, "notifications_none");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(14, "mat-sidenav-container")(15, "mat-sidenav", 6, 0);
            i0.ɵɵtwoWayListener("openedChange", function Home_Template_mat_sidenav_openedChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.menuAbierto, $event) || (ctx.menuAbierto = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelement(17, "img", 7);
            i0.ɵɵelementStart(18, "h4", 8);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p", 9);
            i0.ɵɵtext(21, "Software Engineer");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "mat-divider");
            i0.ɵɵelementStart(23, "app-profile", 10);
            i0.ɵɵlistener("profileUpdated", function Home_Template_app_profile_profileUpdated_23_listener($event) { return ctx.user = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_24_listener() { return ctx.cambiarVista("users"); });
            i0.ɵɵelementStart(25, "mat-icon");
            i0.ɵɵtext(26, "person");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span", 12);
            i0.ɵɵtext(28, "Usuarios");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_29_listener() { return ctx.cambiarVista("register"); });
            i0.ɵɵelementStart(30, "mat-icon");
            i0.ɵɵtext(31, "assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span", 12);
            i0.ɵɵtext(33, "Nuevo usuario");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_34_listener() { return ctx.cambiarVista("reportes"); });
            i0.ɵɵelementStart(35, "mat-icon");
            i0.ɵɵtext(36, "inbox");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "span", 12);
            i0.ɵɵtext(38, "Reportes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "mat-nav-list")(40, "button", 13)(41, "mat-icon", 14);
            i0.ɵɵtext(42, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "span", 12);
            i0.ɵɵtext(44, "Administraci\u00F3n");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "mat-menu", 15, 1)(47, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_47_listener() { return ctx.cambiarVista("area"); });
            i0.ɵɵelementStart(48, "mat-icon");
            i0.ɵɵtext(49, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "span", 12);
            i0.ɵɵtext(51, "\u00C1reas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_52_listener() { return ctx.cambiarVista("categoria"); });
            i0.ɵɵelementStart(53, "mat-icon");
            i0.ɵɵtext(54, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "span", 12);
            i0.ɵɵtext(56, "Categor\u00EDas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_57_listener() { return ctx.cambiarVista("role"); });
            i0.ɵɵelementStart(58, "mat-icon");
            i0.ɵɵtext(59, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "span", 12);
            i0.ɵɵtext(61, "Roles");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_62_listener() { return ctx.cambiarVista("inventario"); });
            i0.ɵɵelementStart(63, "mat-icon");
            i0.ɵɵtext(64, "settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "span", 12);
            i0.ɵɵtext(66, "Inventario");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_67_listener() { return ctx.cambiarVista("asignaciones"); });
            i0.ɵɵelementStart(68, "mat-icon");
            i0.ɵɵtext(69, "assignment_ind");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "span", 12);
            i0.ɵɵtext(71, "Asignaciones");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(72, "mat-divider");
            i0.ɵɵelementStart(73, "button", 5)(74, "mat-icon");
            i0.ɵɵtext(75, "help");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "span", 12);
            i0.ɵɵtext(77, "Ayuda");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(78, "button", 11);
            i0.ɵɵlistener("click", function Home_Template_button_click_78_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(79, "mat-icon");
            i0.ɵɵtext(80, "exit_to_app");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "span", 12);
            i0.ɵɵtext(82, "Salir");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(83, "mat-sidenav-content", 16)(84, "div", 17);
            i0.ɵɵconditionalCreate(85, Home_Conditional_85_Template, 1, 0, "app-home-sol")(86, Home_Conditional_86_Template, 1, 0, "app-register")(87, Home_Conditional_87_Template, 1, 0, "app-area")(88, Home_Conditional_88_Template, 1, 0, "app-category")(89, Home_Conditional_89_Template, 1, 0, "app-role")(90, Home_Conditional_90_Template, 1, 0, "app-inventory")(91, Home_Conditional_91_Template, 1, 0, "app-assignments")(92, Home_Conditional_92_Template, 1, 0, "app-users");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const administracion_r2 = i0.ɵɵreference(46);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" Bienvenido ", ctx.user == null ? null : ctx.user.username, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("mode", ctx.isMobile ? "over" : "side");
            i0.ɵɵtwoWayProperty("opened", ctx.menuAbierto);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.username);
            i0.ɵɵadvance(21);
            i0.ɵɵproperty("matMenuTriggerFor", administracion_r2);
            i0.ɵɵadvance(45);
            i0.ɵɵconditional(ctx.vistaActiva === "" ? 85 : ctx.vistaActiva === "register" ? 86 : ctx.vistaActiva === "area" ? 87 : ctx.vistaActiva === "categoria" ? 88 : ctx.vistaActiva === "role" ? 89 : ctx.vistaActiva === "inventario" ? 90 : ctx.vistaActiva === "asignaciones" ? 91 : 92);
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
            Profile], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\n  .mat-mdc-menu-panel {\n  background-color: #0194fe !important;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\n.mat-menu[_ngcontent-%COMP%]{\n  background-color: #0194fe;\n  color: #0194fe;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.span[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login[_ngcontent-%COMP%]{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido[_ngcontent-%COMP%] {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n\n.media-funcion[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
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
                    Profile
                ], template: "<mat-toolbar>\n    <button (click)=\"toggleMenu()\">\n        <mat-icon>menu</mat-icon>\n        <span> Men\u00FA </span>\n    </button>\n    <img class=\"img-login\" src=\"https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg\"\n        alt=\"Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital\">\n\n    <span class=\"espaciador-flexible\"></span>\n    <span> Bienvenido {{ user?.username}} </span>\n    <span>\n        <button mat-button class=\"menu-button\">\n            <mat-icon>notifications_none</mat-icon>\n        </button>\n    </span>\n\n</mat-toolbar>\n\n<mat-sidenav-container>\n    <mat-sidenav #drawer [mode]=\"isMobile ? 'over' : 'side'\" [(opened)]=\"menuAbierto\" class=\"mat-elevation-z8\">\n        <img class=\"avatar mat-elevation-z8\" src=\"../../../../public/Lot.png\" />\n\n        <h4 class=\"name\">{{user?.username}}</h4>\n        <p class=\"designation\">Software Engineer</p>\n\n        <mat-divider></mat-divider>\n        <app-profile (profileUpdated)=\"user = $event\"></app-profile>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('users')\">\n            <mat-icon>person</mat-icon>\n            <span class=\"span\">Usuarios</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('register')\">\n            <mat-icon>assignment</mat-icon>\n            <span class=\"span\">Nuevo usuario</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('reportes')\">\n            <mat-icon>inbox</mat-icon>\n            <span class=\"span\">Reportes</span>\n        </button>\n        <mat-nav-list>\n            <!-- Opci\u00F3n con men\u00FA flotante -->\n            <button mat-button class=\"menu-button\" [matMenuTriggerFor]=\"administracion\">\n                <mat-icon matListItemMeta>settings</mat-icon>\n                <span class=\"span\">Administraci\u00F3n</span>\n            </button>\n            <!-- Definici\u00F3n del men\u00FA flotante (fuera del flujo del sidenav) -->\n            <mat-menu #administracion=\"matMenu\" xPosition=\"after\" panelClass=\"menu-personalizado\">\n                <button mat-button class=\"menu-button\" (click)=\"cambiarVista('area')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">\u00C1reas</span>\n                </button>\n                <button mat-button class=\"menu-button\"  (click)=\"cambiarVista('categoria')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">Categor\u00EDas</span>\n                </button>\n                <button mat-button class=\"menu-button\"  (click)=\"cambiarVista('role')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">Roles</span>\n                </button>\n                <button mat-button class=\"menu-button\"  (click)=\"cambiarVista('inventario')\">\n                    <mat-icon>settings</mat-icon>\n                    <span class=\"span\">Inventario</span>\n                </button>\n                <button mat-button class=\"menu-button\" (click)=\"cambiarVista('asignaciones')\">\n                    <mat-icon>assignment_ind</mat-icon>\n                    <span class=\"span\">Asignaciones</span>\n                </button>\n\n            </mat-menu>\n            <mat-divider></mat-divider>\n\n            <button mat-button class=\"menu-button\">\n                <mat-icon>help</mat-icon>\n                <span class=\"span\">Ayuda</span>\n            </button>\n            <button mat-button class=\"menu-button\" (click)=\"logout()\">\n                <mat-icon>exit_to_app</mat-icon>\n                <span class=\"span\">Salir</span>\n            </button>\n        </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"main-container\">\n        <div class=\"contenido-dinamico\">\n            @if (vistaActiva === '') {\n            <app-home-sol></app-home-sol>\n            } @else if (vistaActiva === 'register') {\n            <app-register></app-register>\n            } @else if (vistaActiva === 'area') {\n            <app-area></app-area>\n            }@else if (vistaActiva === 'categoria') {\n            <app-category></app-category>\n            }@else if (vistaActiva === 'role') {\n            <app-role></app-role>\n            }@else if (vistaActiva === 'inventario') {\n            <app-inventory></app-inventory>\n            }@else if (vistaActiva === 'asignaciones') {\n            <app-assignments></app-assignments>\n            } @else {\n            <app-users></app-users>\n            }\n\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n", styles: ["mat-toolbar {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\n::ng-deep .mat-mdc-menu-panel {\n  background-color: #0194fe !important;\n}\n\nmat-sidenav {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\n.mat-menu{\n  background-color: #0194fe;\n  color: #0194fe;\n}\n\nmat-sidenav-container {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto {\n    transform: translateX(-250px);\n}\n\n.span {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto {\n    transform: translateX(-250px);\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-row:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido {\n    margin-left: 0;\n}\n\n.media-funcion {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible {\n  flex: 1 1 auto;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }], { sidenav: [{
            type: ViewChild,
            args: [MatSidenav]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Home, { className: "Home", filePath: "app/auth/home/home.ts", lineNumber: 60 }); })();
