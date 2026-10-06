import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../service/auth-service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
function Ticket_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " T\u00EDtulo es requerido. ");
    i0.ɵɵelementEnd();
} }
function Ticket_small_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Descripci\u00F3n es requerida. ");
    i0.ɵɵelementEnd();
} }
function Ticket_small_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, " Prioridad es requerida. ");
    i0.ɵɵelementEnd();
} }
export class Ticket {
    fb;
    authService;
    router;
    ticketForm;
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.ticketForm = this.fb.group({
            titulo: ['', Validators.required],
            descripcion: ['', Validators.required],
            prioridad: ['', Validators.required],
            solucion: [''],
        });
    }
    onSubmit() {
        if (this.ticketForm.invalid) {
            this.ticketForm.markAllAsTouched();
            return;
        }
        this.authService.createTicket(this.ticketForm.getRawValue()).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Ticket registrado correctamente.');
                this.router.navigateByUrl('/hometec');
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible registrar el ticket.'),
        });
    }
    loadChildren(arg0) {
        this.router.navigate([`/${arg0}`]);
    }
    static ɵfac = function Ticket_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Ticket)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ticket, selectors: [["app-ticket"]], decls: 41, vars: 5, consts: [[1, "ticket-container"], [1, "ticket-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "titulo"], ["type", "text", "id", "titulo", "formControlName", "titulo", "placeholder", "Ingrese el t\u00EDtulo de la solicitud"], [4, "ngIf"], ["for", "descripcion"], ["type", "text", "id", "descripcion", "formControlName", "descripcion", "placeholder", "Descripci\u00F3n"], ["for", "prioridad"], ["id", "prioridad", "formControlName", "prioridad"], ["value", ""], ["value", "muy-baja"], ["value", "baja"], ["value", "media"], ["value", "alta"], ["value", "muy-alta"], ["for", "solucion"], ["type", "text", "id", "solucion", "formControlName", "solucion", "placeholder", "Describa la soluci\u00F3n"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["type", "button", "mat-raised-button", "", "color", "accent", 1, "cancel-btn", 3, "click"]], template: function Ticket_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1);
            i0.ɵɵlistener("ngSubmit", function Ticket_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "Generar Ticket");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Por favor, complete el siguiente formulario para generar un ticket.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 2)(7, "label", 3);
            i0.ɵɵtext(8, "T\u00EDtulo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 4);
            i0.ɵɵtemplate(10, Ticket_small_10_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 2)(12, "label", 6);
            i0.ɵɵtext(13, "Descripci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 7);
            i0.ɵɵtemplate(15, Ticket_small_15_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 2)(17, "label", 8);
            i0.ɵɵtext(18, "Prioridad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "select", 9)(20, "option", 10);
            i0.ɵɵtext(21, "Seleccionar Prioridad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 11);
            i0.ɵɵtext(23, "Muy Baja");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "option", 12);
            i0.ɵɵtext(25, "Baja");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "option", 13);
            i0.ɵɵtext(27, "Media");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "option", 14);
            i0.ɵɵtext(29, "Alta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "option", 15);
            i0.ɵɵtext(31, "Muy Alta");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(32, Ticket_small_32_Template, 2, 0, "small", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 2)(34, "label", 16);
            i0.ɵɵtext(35, "Soluci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(36, "input", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "button", 18);
            i0.ɵɵtext(38, "Generar Ticket");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "button", 19);
            i0.ɵɵlistener("click", function Ticket_Template_button_click_39_listener() { return ctx.loadChildren("hometick"); });
            i0.ɵɵtext(40, "Cancelar");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.ticketForm);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngIf", ((tmp_1_0 = ctx.ticketForm.get("titulo")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.ticketForm.get("titulo")) == null ? null : tmp_1_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx.ticketForm.get("descripcion")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.ticketForm.get("descripcion")) == null ? null : tmp_2_0.touched));
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("ngIf", ((tmp_3_0 = ctx.ticketForm.get("prioridad")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.ticketForm.get("prioridad")) == null ? null : tmp_3_0.touched));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("disabled", ctx.ticketForm.invalid);
        } }, dependencies: [CommonModule, i4.NgIf, ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: [".ticket-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #f4f7f6;\n}\n\n.ticket-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n}\n\n.ticket-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333333;\n}\n\n.ticket-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.4rem;\n  color: #444444;\n  font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n  background-color: white; \n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background-color: #b0c4de;\n  cursor: not-allowed;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n#filosofia-cintilla[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\ttext-align: center;\n\tfont-size: 55px;\n\tfont-weight: 900;\n\tmargin: 10px 0px;}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ticket, [{
        type: Component,
        args: [{ selector: 'app-ticket', imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"ticket-container\">\n    <form [formGroup]=\"ticketForm\" (ngSubmit)=\"onSubmit()\" class=\"ticket-form\">\n        <h2>Generar Ticket</h2>\n        <p>Por favor, complete el siguiente formulario para generar un ticket.</p>\n\n        <div class=\"form-group\">\n            <label for=\"titulo\">T\u00EDtulo</label>\n            <input type=\"text\" id=\"titulo\" formControlName=\"titulo\" placeholder=\"Ingrese el t\u00EDtulo de la solicitud\">\n            <small *ngIf=\"ticketForm.get('titulo')?.hasError('required') && ticketForm.get('titulo')?.touched\">\n                T\u00EDtulo es requerido.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"descripcion\">Descripci\u00F3n</label>\n            <input type=\"text\" id=\"descripcion\" formControlName=\"descripcion\" placeholder=\"Descripci\u00F3n\">\n            <small\n                *ngIf=\"ticketForm.get('descripcion')?.hasError('required') && ticketForm.get('descripcion')?.touched\">\n                Descripci\u00F3n es requerida.\n            </small>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"prioridad\">Prioridad</label>\n            <select id=\"prioridad\" formControlName=\"prioridad\">\n                <option value=\"\">Seleccionar Prioridad</option>\n                <option value=\"muy-baja\">Muy Baja</option>\n                <option value=\"baja\">Baja</option>\n                <option value=\"media\">Media</option>\n                <option value=\"alta\">Alta</option>\n                <option value=\"muy-alta\">Muy Alta</option>\n            </select>\n            <small\n                *ngIf=\"ticketForm.get('prioridad')?.hasError('required') && ticketForm.get('prioridad')?.touched\">\n                Prioridad es requerida.\n            </small>\n        </div>\n\n         <div class=\"form-group\">\n            <label for=\"solucion\">Soluci\u00F3n</label>\n            <input type=\"text\" id=\"solucion\" formControlName=\"solucion\" placeholder=\"Describa la soluci\u00F3n\">\n        </div>\n\n        <button type=\"submit\" [disabled]=\"ticketForm.invalid\" class=\"submit-btn\">Generar Ticket</button>\n        <button type=\"button\" mat-raised-button color=\"accent\" class=\"cancel-btn\" (click)=\"loadChildren('hometick')\">Cancelar</button>\n    </form>\n</div>\n", styles: [".ticket-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-color: #f4f7f6;\n}\n\n.ticket-form {\n  background: #ffffff;\n  padding: 2.5rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 400px;\n}\n\n.ticket-form h2 {\n  margin-bottom: 0.5rem;\n  color: #333333;\n}\n\n.ticket-form p {\n  color: #666666;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n\n.form-group {\n  margin-bottom: 1.2rem;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 0.4rem;\n  color: #444444;\n  font-weight: 500;\n}\n\n.form-group input {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n}\n\n.form-group select {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  box-sizing: border-box;\n  background-color: white; /* Asegura fondo blanco en select */\n}\n\n.form-group input:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.form-group select:focus {\n  border-color: #007bff;\n  outline: none;\n}\n\n.submit-btn {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n.submit-btn:disabled {\n  background-color: #b0c4de;\n  cursor: not-allowed;\n}\n\n.submit-btn:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n\n.cancel-btn {\n  width: 100%;\n  padding: 0.8rem;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 1rem;\n}\n\n#filosofia-cintilla h1{\n\tcolor:#fff;\n\ttext-align: center;\n\tfont-size: 55px;\n\tfont-weight: 900;\n\tmargin: 10px 0px;}\n"] }]
    }], () => [{ type: i1.FormBuilder }, { type: i2.AuthService }, { type: i3.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Ticket, { className: "Ticket", filePath: "app/auth/ticket/ticket.ts", lineNumber: 13 }); })();
