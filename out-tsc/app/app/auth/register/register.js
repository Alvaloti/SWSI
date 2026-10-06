import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../service/auth-service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
function Register_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Usuario es requerido. ");
    i0.ɵɵelementEnd();
} }
function Register_small_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " N\u00F3mina es requerida. ");
    i0.ɵɵelementEnd();
} }
function Register_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Email es requerido.");
    i0.ɵɵelementEnd();
} }
function Register_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Formato de email inv\u00E1lido.");
    i0.ɵɵelementEnd();
} }
function Register_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, Register_div_20_div_1_Template, 2, 0, "div", 5)(2, Register_div_20_div_2_Template, 2, 0, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
} }
function Register_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Contrase\u00F1a es requerida.");
    i0.ɵɵelementEnd();
} }
function Register_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Contrase\u00F1a debe tener al menos 8 caracteres. ");
    i0.ɵɵelementEnd();
} }
function Register_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, Register_div_25_div_1_Template, 2, 0, "div", 5)(2, Register_div_25_div_2_Template, 2, 0, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
} }
function Register_small_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " El nombre es requerido. ");
    i0.ɵɵelementEnd();
} }
function Register_option_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", role_r2._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", role_r2.name, " ");
} }
function Register_small_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.rolesError);
} }
function Register_option_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const area_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", area_r3._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", area_r3.name, " ");
} }
function Register_small_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " El \u00E1rea es requerida. ");
    i0.ɵɵelementEnd();
} }
function Register_small_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.areasError);
} }
export class Register {
    fb;
    authService;
    router;
    registerForm;
    roles = [];
    rolesError = '';
    areas = [];
    areasError = '';
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            nomina: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            rolId: ['', Validators.required],
            area: ['', Validators.required],
        });
    }
    onSubmit() {
        const formData = this.registerForm.value;
        console.log('Form Data:', formData);
        this.authService.register(formData).subscribe({
            next: (response) => {
                console.log('Registration successful:', response);
                if (response.status === 'success') {
                    this.router.navigate(['/home']);
                }
            },
            error: (error) => {
                console.log('Registration failed:', error);
            },
        });
    }
    ngOnInit() {
        this.authService.getRegistrationRoles().subscribe({
            next: (response) => {
                this.roles = response.roles;
            },
            error: (error) => {
                console.error('No se pudieron cargar los roles:', error);
                this.rolesError = 'No fue posible cargar los roles.';
            },
        });
        this.authService.getAreas().subscribe({
            next: (response) => {
                const areas = response.areas ?? response;
                this.areas = Array.isArray(areas)
                    ? areas.filter((area) => area.active !== false)
                    : [];
            },
            error: (error) => {
                console.error('No se pudieron cargar las áreas:', error);
                this.areasError = 'No fue posible cargar las áreas.';
            },
        });
    }
    loadChildren(arg0) {
        this.router.navigate([`/${arg0}`]);
    }
    static ɵfac = function Register_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Register)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Register, selectors: [["app-register"]], decls: 56, vars: 12, consts: [[1, "register-container"], [1, "register-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "nombre", "formControlName", "username", "placeholder", "Username"], [4, "ngIf"], ["for", "nomina"], ["type", "text", "id", "nomina", "formControlName", "nomina", "placeholder", "N\u00F3mina"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "correo@ejemplo.com"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "M\u00EDnimo 8 caracteres"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Nombre"], ["for", "last_name"], ["type", "text", "id", "last_name", "formControlName", "last_name", "placeholder", "Apellidos"], ["for", "rol"], ["id", "rol", "formControlName", "rolId"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "area"], ["id", "area", "formControlName", "area"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["type", "button", "matFab", "", "extended", "", 1, "cancel-btn", 3, "click"], [3, "value"]], template: function Register_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function Register_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "Alta de Usuario");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Por favor, completa los datos.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 2)(7, "label", 3);
            i0.ɵɵtext(8, "Usuario");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 4);
            i0.ɵɵtemplate(10, Register_small_10_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 2)(12, "label", 6);
            i0.ɵɵtext(13, "N\u00F3mina");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 7);
            i0.ɵɵtemplate(15, Register_small_15_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 2)(17, "label", 8);
            i0.ɵɵtext(18, "Correo Electr\u00F3nico");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "input", 9);
            i0.ɵɵtemplate(20, Register_div_20_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 2)(22, "label", 10);
            i0.ɵɵtext(23, "Contrase\u00F1a");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 11);
            i0.ɵɵtemplate(25, Register_div_25_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "div", 2)(27, "label", 12);
            i0.ɵɵtext(28, "Nombre");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(29, "input", 13);
            i0.ɵɵtemplate(30, Register_small_30_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 2)(32, "label", 14);
            i0.ɵɵtext(33, "Apellidos");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 2)(36, "label", 16);
            i0.ɵɵtext(37, "Rol de la Cuenta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "select", 17)(39, "option", 18);
            i0.ɵɵtext(40, "Seleccione una opci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(41, Register_option_41_Template, 2, 2, "option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(42, Register_small_42_Template, 2, 1, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 2)(44, "label", 20);
            i0.ɵɵtext(45, "\u00C1rea");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "select", 21)(47, "option", 18);
            i0.ɵɵtext(48, "Seleccione una opci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(49, Register_option_49_Template, 2, 2, "option", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(50, Register_small_50_Template, 2, 0, "small", 5)(51, Register_small_51_Template, 2, 1, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "button", 22);
            i0.ɵɵtext(53, "Registrar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "button", 23);
            i0.ɵɵlistener("click", function Register_Template_button_click_54_listener() { return ctx.loadChildren("home"); });
            i0.ɵɵtext(55, "Cancelar");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            let tmp_4_0;
            let tmp_5_0;
            let tmp_9_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.registerForm);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ((tmp_1_0 = ctx.registerForm.get("username")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerForm.get("username")) == null ? null : tmp_1_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx.registerForm.get("nomina")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.registerForm.get("nomina")) == null ? null : tmp_2_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx.registerForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.registerForm.get("password")) == null ? null : tmp_4_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx.registerForm.get("name")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.registerForm.get("name")) == null ? null : tmp_5_0.touched));
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.roles);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.rolesError);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngForOf", ctx.areas);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ((tmp_9_0 = ctx.registerForm.get("area")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.registerForm.get("area")) == null ? null : tmp_9_0.touched));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.areasError);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.registerForm.invalid);
        } }, dependencies: [CommonModule, i4.NgForOf, i4.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["mat-icon[_ngcontent-%COMP%] {\n    margin-right: 8px;\n    color: white;\n}\n\n.my_button[_ngcontent-%COMP%] {\n    background-color: #0194fe;\n}\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #f4f7f6;\n}\n\n.register-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  height: 100%;\n}\n\n.register-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333333;\n}\n\n.register-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.4rem;\n  color: #444444;\n  font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n  background-color: white; \n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background-color: #b0c4de;\n  cursor: not-allowed;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n#filosofia-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\ttext-align: center;\n\tfont-size: 55px;\n\tfont-weight: 900;\n\tmargin: 10px 0px;}\n\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tfloat: left;\n\tmargin: 15px 10px 0px 0px; }\n\n\n@media (max-width:930px) {\n\t.media-funcion[_ngcontent-%COMP%]{\theight: 85px; padding:10px 15px;}\n\n\t.social-media[_ngcontent-%COMP%]{ float:left; padding:10px 5px 10px 10px; }\n\n\theader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {top: 185px;}\n\n\t.opcion-destacados[_ngcontent-%COMP%]{ height: 210px;}\n\n\t.opcion-destacados[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ width:100%; float:none; clear: both; margin-bottom: 25px;}\n\n\t.modulo[_ngcontent-%COMP%]{height:680px;}\n\n\tfooter[_ngcontent-%COMP%]{ padding: 100px 0px 40px 0px; margin: 10px 10px 0px 10px;}\n\n\t#copy[_ngcontent-%COMP%]{ margin: 0px 10px;}\n\n\t#articulo-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{ font-size: 16px; line-height: 16px;}\n\n\t.dato-que[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ height: 400px;}\n\n\t.box-menu-lateral[_ngcontent-%COMP%] { flex-basis:220px;}\n\n\t.box-textos[_ngcontent-%COMP%] { flex-basis:500px;}\n\n\t.box-datos-contacto[_ngcontent-%COMP%] { flex-basis:250px;}\n\n\t.box-formulario-contacto[_ngcontent-%COMP%] { flex-basis:380px;}\n\n\t.campo[_ngcontent-%COMP%]{float: none; width:100%; margin-right: 0px;}\n\n\t.intro-directorio[_ngcontent-%COMP%]{width: 95%;}\n\n\t.img-carrusel[_ngcontent-%COMP%]{ width:95%;}\n\n\t.container-cat[_ngcontent-%COMP%] {  height:290px;}\n\n\t.sesion[_ngcontent-%COMP%]{ width:85%;}\n\n\t#content-login[_ngcontent-%COMP%]{margin-top:-50px;}\n\n\t.info-login[_ngcontent-%COMP%]{width: 99%;}\n\n\t.img-login[_ngcontent-%COMP%]{ width: 200px;}\n\n\t.box-descrip-destacado[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{ font-size:22px; line-height: 25px;}\n\n\t.box-img-secc[_ngcontent-%COMP%] {flex-basis:200px; }\n\n\t.box-descrip-destacado[_ngcontent-%COMP%] { flex-basis:410px;}\n\n\t.ilustra-img-secc[_ngcontent-%COMP%]{ width:99%;}\n\n\n\t.ruta-temas[_ngcontent-%COMP%]{ width: 98%; font-size: 15px; line-height: 18px;}\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Register, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"register-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"register-form\">\n        <h2>Alta de Usuario</h2>\n        <p>Por favor, completa los datos.</p>\n\n        <div class=\"form-group\">\n            <label for=\"username\">Usuario</label>\n            <input type=\"text\" id=\"nombre\" formControlName=\"username\" placeholder=\"Username\">\n            <small *ngIf=\"registerForm.get('username')?.hasError('required') && registerForm.get('username')?.touched\">\n                Usuario es requerido.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"nomina\" >N\u00F3mina</label>\n            <input type=\"text\" id=\"nomina\" formControlName=\"nomina\" placeholder=\"N\u00F3mina\">\n            <small *ngIf=\"registerForm.get('nomina')?.hasError('required') && registerForm.get('nomina')?.touched\">\n                N\u00F3mina es requerida.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"email\">Correo Electr\u00F3nico</label>\n            <input type=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"correo@ejemplo.com\">\n            <div *ngIf=\"registerForm.get('email')?.invalid && registerForm.get('email')?.touched\">\n                <div *ngIf=\"registerForm.get('email')?.errors?.['required']\">Email es requerido.</div>\n                <div *ngIf=\"registerForm.get('email')?.errors?.['email']\">Formato de email inv\u00E1lido.</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"password\">Contrase\u00F1a</label>\n            <input type=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"M\u00EDnimo 8 caracteres\">\n            <div *ngIf=\"registerForm.get('password')?.invalid && registerForm.get('password')?.touched\">\n                <div *ngIf=\"registerForm.get('password')?.errors?.['required']\">Contrase\u00F1a es requerida.</div>\n                <div *ngIf=\"registerForm.get('password')?.errors?.['minlength']\">\n                    Contrase\u00F1a debe tener al menos 8 caracteres.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Nombre</label>\n            <input type=\"text\" id=\"name\" formControlName=\"name\" placeholder=\"Nombre\">\n            <small *ngIf=\"registerForm.get('name')?.hasError('required') && registerForm.get('name')?.touched\">\n                El nombre es requerido.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"last_name\">Apellidos</label>\n            <input type=\"text\" id=\"last_name\" formControlName=\"last_name\" placeholder=\"Apellidos\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"rol\">Rol de la Cuenta</label>\n            <select id=\"rol\" formControlName=\"rolId\">\n                <option value=\"\" disabled>Seleccione una opci\u00F3n</option>\n                <option *ngFor=\"let role of roles\" [value]=\"role._id\">\n                    {{ role.name }}\n                </option>\n            </select>\n            <small *ngIf=\"rolesError\">{{ rolesError }}</small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"area\">\u00C1rea</label>\n            <select id=\"area\" formControlName=\"area\">\n                <option value=\"\" disabled>Seleccione una opci\u00F3n</option>\n                <option *ngFor=\"let area of areas\" [value]=\"area._id\">\n                    {{ area.name }}\n                </option>\n            </select>\n            <small *ngIf=\"registerForm.get('area')?.hasError('required') && registerForm.get('area')?.touched\">\n                El \u00E1rea es requerida.\n            </small>\n            <small *ngIf=\"areasError\">{{ areasError }}</small>\n        </div>\n\n        <button type=\"submit\" [disabled]=\"registerForm.invalid\" class=\"submit-btn\">Registrar</button>\n        <button type=\"button\" matFab extended class=\"cancel-btn\" (click)=\"loadChildren('home')\">Cancelar</button>\n    </form>\n\n</div>\n", styles: ["mat-icon {\n    margin-right: 8px;\n    color: white;\n}\n\n.my_button {\n    background-color: #0194fe;\n}\n\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #f4f7f6;\n}\n\n.register-form {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n  height: 100%;\n}\n\n.register-form h2 {\n  margin-bottom: 0.5rem;\n  color: #333333;\n}\n\n.register-form p {\n  color: #666666;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n\n.form-group {\n  margin-bottom: 1.2rem;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 0.4rem;\n  color: #444444;\n  font-weight: 500;\n}\n\n.form-group input {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n\n.form-group select {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n  background-color: white; /* Asegura fondo blanco en select */\n}\n\n.form-group input:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.form-group select:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.submit-btn {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.submit-btn:disabled {\n  background-color: #b0c4de;\n  cursor: not-allowed;\n}\n\n.submit-btn:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n\n.cancel-btn {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n#filosofia-cintilla h1{\n\tcolor:#fff;\n\ttext-align: center;\n\tfont-size: 55px;\n\tfont-weight: 900;\n\tmargin: 10px 0px;}\n\nheader .logo img {\n\tfloat: left;\n\tmargin: 15px 10px 0px 0px; }\n\n\n@media (max-width:930px) {\n\t.media-funcion{\theight: 85px; padding:10px 15px;}\n\n\t.social-media{ float:left; padding:10px 5px 10px 10px; }\n\n\theader nav {top: 185px;}\n\n\t.opcion-destacados{ height: 210px;}\n\n\t.opcion-destacados a{ width:100%; float:none; clear: both; margin-bottom: 25px;}\n\n\t.modulo{height:680px;}\n\n\tfooter{ padding: 100px 0px 40px 0px; margin: 10px 10px 0px 10px;}\n\n\t#copy{ margin: 0px 10px;}\n\n\t#articulo-cintilla h1{ font-size: 16px; line-height: 16px;}\n\n\t.dato-que a{ height: 400px;}\n\n\t.box-menu-lateral { flex-basis:220px;}\n\n\t.box-textos { flex-basis:500px;}\n\n\t.box-datos-contacto { flex-basis:250px;}\n\n\t.box-formulario-contacto { flex-basis:380px;}\n\n\t.campo{float: none; width:100%; margin-right: 0px;}\n\n\t.intro-directorio{width: 95%;}\n\n\t.img-carrusel{ width:95%;}\n\n\t.container-cat {  height:290px;}\n\n\t.sesion{ width:85%;}\n\n\t#content-login{margin-top:-50px;}\n\n\t.info-login{width: 99%;}\n\n\t.img-login{ width: 200px;}\n\n\t.box-descrip-destacado h1{ font-size:22px; line-height: 25px;}\n\n\t.box-img-secc {flex-basis:200px; }\n\n\t.box-descrip-destacado { flex-basis:410px;}\n\n\t.ilustra-img-secc{ width:99%;}\n\n\n\t.ruta-temas{ width: 98%; font-size: 15px; line-height: 18px;}\n}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Register, { className: "Register", filePath: "app/auth/register/register.ts", lineNumber: 25 }); })();
