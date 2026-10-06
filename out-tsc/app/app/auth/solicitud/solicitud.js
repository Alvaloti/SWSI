import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function Solicitud_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Tipo de Solicitud es requerido. ");
    i0.ɵɵelementEnd();
} }
function Solicitud_small_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Descripci\u00F3n es requerida. ");
    i0.ɵɵelementEnd();
} }
function Solicitud_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const area_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", area_r1._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(area_r1.name);
} }
function Solicitud_small_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " \u00C1rea es requerida. ");
    i0.ɵɵelementEnd();
} }
function Solicitud_small_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Prioridad es requerida. ");
    i0.ɵɵelementEnd();
} }
export class Solicitud {
    authService;
    router;
    solicitudForm;
    areas = [];
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.solicitudForm = new FormGroup({
            tipo: new FormControl('', Validators.required),
            descripcion: new FormControl('', Validators.required),
            comentarios: new FormControl(''),
            area: new FormControl('', Validators.required),
            prioridad: new FormControl('', Validators.required),
        });
    }
    ngOnInit() {
        this.authService.getAreas().subscribe({
            next: (response) => {
                const areas = response.areas ?? response;
                this.areas = Array.isArray(areas) ? areas.filter((area) => area.active !== false) : [];
            },
            error: (error) => console.error('No se pudieron cargar las áreas:', error),
        });
    }
    onSubmit() {
        if (this.solicitudForm.invalid) {
            this.solicitudForm.markAllAsTouched();
            return;
        }
        this.authService.createSolicitud(this.solicitudForm.getRawValue()).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Solicitud registrada correctamente.');
                this.router.navigateByUrl('/homesol');
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible registrar la solicitud.'),
        });
    }
    loadChildren(arg0) {
        this.router.navigate([`/${arg0}`]);
    }
    static ɵfac = function Solicitud_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Solicitud)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Solicitud, selectors: [["app-solicitud"]], decls: 49, vars: 7, consts: [[1, "solicitud-container"], [1, "solicitud-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "tipo"], ["type", "text", "id", "tipo", "formControlName", "tipo", "placeholder", "Tipo de Solicitud"], [4, "ngIf"], ["for", "descripcion"], ["type", "text", "id", "descripcion", "formControlName", "descripcion", "placeholder", "Descripci\u00F3n"], ["for", "area"], ["id", "area", "formControlName", "area"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "prioridad"], ["id", "prioridad", "formControlName", "prioridad"], ["value", ""], ["value", "muy-baja"], ["value", "baja"], ["value", "media"], ["value", "alta"], ["value", "muy-alta"], ["for", "comentarios"], ["type", "text", "id", "comentarios", "formControlName", "comentarios", "placeholder", "Comentarios"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "disabled"], ["type", "button", "mat-raised-button", "", "color", "accent", 1, "cancel-btn", 3, "click"], [3, "value"]], template: function Solicitud_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function Solicitud_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "Solicitud de Soporte");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Por favor, completa los datos.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 2)(7, "label", 3);
            i0.ɵɵtext(8, "Tipo de Solicitud");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 4);
            i0.ɵɵtemplate(10, Solicitud_small_10_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 2)(12, "label", 6);
            i0.ɵɵtext(13, "Descripci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 7);
            i0.ɵɵtemplate(15, Solicitud_small_15_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 2)(17, "label", 8);
            i0.ɵɵtext(18, "\u00C1rea");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "select", 9)(20, "option", 10);
            i0.ɵɵtext(21, "Seleccionar \u00E1rea");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, Solicitud_option_22_Template, 2, 2, "option", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, Solicitud_small_23_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 2)(25, "label", 12);
            i0.ɵɵtext(26, "Prioridad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "select", 13)(28, "option", 14);
            i0.ɵɵtext(29, "Seleccionar Prioridad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "option", 15);
            i0.ɵɵtext(31, "Muy Baja");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "option", 16);
            i0.ɵɵtext(33, "Baja");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "option", 17);
            i0.ɵɵtext(35, "Media");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "option", 18);
            i0.ɵɵtext(37, "Alta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "option", 19);
            i0.ɵɵtext(39, "Muy Alta");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(40, Solicitud_small_40_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 2)(42, "label", 20);
            i0.ɵɵtext(43, "Comentarios");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(44, "input", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "button", 22);
            i0.ɵɵtext(46, " Enviar Solicitud");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "button", 23);
            i0.ɵɵlistener("click", function Solicitud_Template_button_click_47_listener() { return ctx.loadChildren("homesol"); });
            i0.ɵɵtext(48, "Cancelar");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_4_0;
            let tmp_5_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.solicitudForm);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ((tmp_1_0 = ctx.solicitudForm.get("tipo")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.solicitudForm.get("tipo")) == null ? null : tmp_1_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx.solicitudForm.get("descripcion")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.solicitudForm.get("descripcion")) == null ? null : tmp_2_0.touched));
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.areas);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx.solicitudForm.get("area")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.solicitudForm.get("area")) == null ? null : tmp_4_0.touched));
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx.solicitudForm.get("prioridad")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.solicitudForm.get("prioridad")) == null ? null : tmp_5_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.solicitudForm.invalid);
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, ReactiveFormsModule, i4.ɵNgNoValidate, i4.NgSelectOption, i4.ɵNgSelectMultipleOption, i4.DefaultValueAccessor, i4.SelectControlValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.FormGroupDirective, i4.FormControlName], styles: ["mat-icon[_ngcontent-%COMP%] {\n    margin-right: 8px;\n    color: white;\n}\n\n.my_button[_ngcontent-%COMP%] {\n    background-color: #0194fe;\n}\n\n.solicitud-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f4f7f6;\n}\n\n.solicitud-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n}\n\n.solicitud-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333333;\n}\n\n.solicitud-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.4rem;\n  color: #444444;\n  font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n  background-color: white; \n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background-color: #b0c4de;\n  cursor: not-allowed;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n#filosofia-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\ttext-align: center;\n\tfont-size: 55px;\n\tfont-weight: 900;\n\tmargin: 10px 0px;}\n\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tfloat: left;\n\tmargin: 15px 10px 0px 0px; }\n\n\n@media (max-width:930px) {\n\t.media-funcion[_ngcontent-%COMP%]{\theight: 85px; padding:10px 15px;}\n\n\t.social-media[_ngcontent-%COMP%]{ float:left; padding:10px 5px 10px 10px; }\n\n\theader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {top: 185px;}\n\n\t.opcion-destacados[_ngcontent-%COMP%]{ height: 210px;}\n\n\t.opcion-destacados[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ width:100%; float:none; clear: both; margin-bottom: 25px;}\n\n\t.modulo[_ngcontent-%COMP%]{height:680px;}\n\n\tfooter[_ngcontent-%COMP%]{ padding: 100px 0px 40px 0px; margin: 10px 10px 0px 10px;}\n\n\t#copy[_ngcontent-%COMP%]{ margin: 0px 10px;}\n\n\t#articulo-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{ font-size: 16px; line-height: 16px;}\n\n\t.dato-que[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ height: 400px;}\n\n\t.box-menu-lateral[_ngcontent-%COMP%] { flex-basis:220px;}\n\n\t.box-textos[_ngcontent-%COMP%] { flex-basis:500px;}\n\n\t.box-datos-contacto[_ngcontent-%COMP%] { flex-basis:250px;}\n\n\t.box-formulario-contacto[_ngcontent-%COMP%] { flex-basis:380px;}\n\n\t.campo[_ngcontent-%COMP%]{float: none; width:100%; margin-right: 0px;}\n\n\t.intro-directorio[_ngcontent-%COMP%]{width: 95%;}\n\n\t.img-carrusel[_ngcontent-%COMP%]{ width:95%;}\n\n\t.container-cat[_ngcontent-%COMP%] {  height:290px;}\n\n\t.sesion[_ngcontent-%COMP%]{ width:85%;}\n\n\t#content-login[_ngcontent-%COMP%]{margin-top:-50px;}\n\n\t.info-login[_ngcontent-%COMP%]{width: 99%;}\n\n\t.img-login[_ngcontent-%COMP%]{ width: 200px;}\n\n\t.box-descrip-destacado[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{ font-size:22px; line-height: 25px;}\n\n\t.box-img-secc[_ngcontent-%COMP%] {flex-basis:200px; }\n\n\t.box-descrip-destacado[_ngcontent-%COMP%] { flex-basis:410px;}\n\n\t.ilustra-img-secc[_ngcontent-%COMP%]{ width:99%;}\n\n\n\t.ruta-temas[_ngcontent-%COMP%]{ width: 98%; font-size: 15px; line-height: 18px;}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Solicitud, [{
        type: Component,
        args: [{ selector: 'app-solicitud', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"solicitud-container\">\n    <form [formGroup]=\"solicitudForm\" (ngSubmit)=\"onSubmit()\" class=\"solicitud-form\">\n        <h2>Solicitud de Soporte</h2>\n        <p>Por favor, completa los datos.</p>\n\n        <div class=\"form-group\">\n            <label for=\"tipo\">Tipo de Solicitud</label>\n            <input type=\"text\" id=\"tipo\" formControlName=\"tipo\" placeholder=\"Tipo de Solicitud\">\n            <small *ngIf=\"solicitudForm.get('tipo')?.hasError('required') && solicitudForm.get('tipo')?.touched\">\n                Tipo de Solicitud es requerido.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"descripcion\">Descripci\u00F3n</label>\n            <input type=\"text\" id=\"descripcion\" formControlName=\"descripcion\" placeholder=\"Descripci\u00F3n\">\n            <small\n                *ngIf=\"solicitudForm.get('descripcion')?.hasError('required') && solicitudForm.get('descripcion')?.touched\">\n                Descripci\u00F3n es requerida.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"area\">\u00C1rea</label>\n            <select id=\"area\" formControlName=\"area\">\n                <option value=\"\" disabled>Seleccionar \u00E1rea</option>\n                <option *ngFor=\"let area of areas\" [value]=\"area._id\">{{ area.name }}</option>\n            </select>\n            <small *ngIf=\"solicitudForm.get('area')?.hasError('required') && solicitudForm.get('area')?.touched\">\n                \u00C1rea es requerida.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"prioridad\">Prioridad</label>\n            <select id=\"prioridad\" formControlName=\"prioridad\">\n                <option value=\"\">Seleccionar Prioridad</option>\n                <option value=\"muy-baja\">Muy Baja</option>\n                <option value=\"baja\">Baja</option>\n                <option value=\"media\">Media</option>\n                <option value=\"alta\">Alta</option>\n                <option value=\"muy-alta\">Muy Alta</option>\n            </select>\n            <small\n                *ngIf=\"solicitudForm.get('prioridad')?.hasError('required') && solicitudForm.get('prioridad')?.touched\">\n                Prioridad es requerida.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"comentarios\">Comentarios</label>\n            <input type=\"text\" id=\"comentarios\" formControlName=\"comentarios\" placeholder=\"Comentarios\">\n        </div>\n\n        <button type=\"submit\" mat-raised-button color=\"primary\" class=\"submit-btn\" [disabled]=\"solicitudForm.invalid\">\n            Enviar Solicitud</button>\n        <button type=\"button\" mat-raised-button color=\"accent\" class=\"cancel-btn\" (click)=\"loadChildren('homesol')\">Cancelar</button>\n    </form>\n</div>\n", styles: ["mat-icon {\n    margin-right: 8px;\n    color: white;\n}\n\n.my_button {\n    background-color: #0194fe;\n}\n\n.solicitud-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f4f7f6;\n}\n\n.solicitud-form {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n}\n\n.solicitud-form h2 {\n  margin-bottom: 0.5rem;\n  color: #333333;\n}\n\n.solicitud-form p {\n  color: #666666;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n\n.form-group {\n  margin-bottom: 1.2rem;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 0.4rem;\n  color: #444444;\n  font-weight: 500;\n}\n\n.form-group input {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n\n.form-group select {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n  background-color: white; /* Asegura fondo blanco en select */\n}\n\n.form-group input:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.form-group select:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.submit-btn {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.submit-btn:disabled {\n  background-color: #b0c4de;\n  cursor: not-allowed;\n}\n\n.submit-btn:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n\n.cancel-btn {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n#filosofia-cintilla h1{\n\tcolor:#fff;\n\ttext-align: center;\n\tfont-size: 55px;\n\tfont-weight: 900;\n\tmargin: 10px 0px;}\n\nheader .logo img {\n\tfloat: left;\n\tmargin: 15px 10px 0px 0px; }\n\n\n@media (max-width:930px) {\n\t.media-funcion{\theight: 85px; padding:10px 15px;}\n\n\t.social-media{ float:left; padding:10px 5px 10px 10px; }\n\n\theader nav {top: 185px;}\n\n\t.opcion-destacados{ height: 210px;}\n\n\t.opcion-destacados a{ width:100%; float:none; clear: both; margin-bottom: 25px;}\n\n\t.modulo{height:680px;}\n\n\tfooter{ padding: 100px 0px 40px 0px; margin: 10px 10px 0px 10px;}\n\n\t#copy{ margin: 0px 10px;}\n\n\t#articulo-cintilla h1{ font-size: 16px; line-height: 16px;}\n\n\t.dato-que a{ height: 400px;}\n\n\t.box-menu-lateral { flex-basis:220px;}\n\n\t.box-textos { flex-basis:500px;}\n\n\t.box-datos-contacto { flex-basis:250px;}\n\n\t.box-formulario-contacto { flex-basis:380px;}\n\n\t.campo{float: none; width:100%; margin-right: 0px;}\n\n\t.intro-directorio{width: 95%;}\n\n\t.img-carrusel{ width:95%;}\n\n\t.container-cat {  height:290px;}\n\n\t.sesion{ width:85%;}\n\n\t#content-login{margin-top:-50px;}\n\n\t.info-login{width: 99%;}\n\n\t.img-login{ width: 200px;}\n\n\t.box-descrip-destacado h1{ font-size:22px; line-height: 25px;}\n\n\t.box-img-secc {flex-basis:200px; }\n\n\t.box-descrip-destacado { flex-basis:410px;}\n\n\t.ilustra-img-secc{ width:99%;}\n\n\n\t.ruta-temas{ width: 98%; font-size: 15px; line-height: 18px;}\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Solicitud, { className: "Solicitud", filePath: "app/auth/solicitud/solicitud.ts", lineNumber: 14 }); })();
