import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../service/auth-service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/dialog";
import * as i5 from "@angular/material/icon";
const _c0 = ["profileDialog"];
function Profile_ng_template_5_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMessage);
} }
function Profile_ng_template_5_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Cargando informaci\u00F3n...");
    i0.ɵɵelementEnd();
} }
function Profile_ng_template_5_Conditional_8_small_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "El usuario es requerido.");
    i0.ɵɵelementEnd();
} }
function Profile_ng_template_5_Conditional_8_small_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "La n\u00F3mina es requerida.");
    i0.ɵɵelementEnd();
} }
function Profile_ng_template_5_Conditional_8_small_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Ingresa un correo electr\u00F3nico v\u00E1lido.");
    i0.ɵɵelementEnd();
} }
function Profile_ng_template_5_Conditional_8_option_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const area_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", area_r3._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(area_r3.name);
} }
function Profile_ng_template_5_Conditional_8_small_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "La contrase\u00F1a debe tener al menos 8 caracteres.");
    i0.ɵɵelementEnd();
} }
function Profile_ng_template_5_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 10)(2, "label", 11);
    i0.ɵɵtext(3, "Usuario");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 12);
    i0.ɵɵtemplate(5, Profile_ng_template_5_Conditional_8_small_5_Template, 2, 0, "small", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 10)(7, "label", 14);
    i0.ɵɵtext(8, "N\u00F3mina");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 15);
    i0.ɵɵtemplate(10, Profile_ng_template_5_Conditional_8_small_10_Template, 2, 0, "small", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 10)(12, "label", 16);
    i0.ɵɵtext(13, "Nombre");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 10)(16, "label", 18);
    i0.ɵɵtext(17, "Apellidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "input", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 20)(20, "label", 21);
    i0.ɵɵtext(21, "Correo electr\u00F3nico");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(22, "input", 22);
    i0.ɵɵtemplate(23, Profile_ng_template_5_Conditional_8_small_23_Template, 2, 0, "small", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 10)(25, "label", 23);
    i0.ɵɵtext(26, "\u00C1rea");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 24)(28, "option", 25);
    i0.ɵɵtext(29, "Seleccione una opci\u00F3n");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(30, Profile_ng_template_5_Conditional_8_option_30_Template, 2, 2, "option", 26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div", 10)(32, "label", 27);
    i0.ɵɵtext(33, "Rol");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "input", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 20)(36, "label", 29);
    i0.ɵɵtext(37, "Nueva contrase\u00F1a (opcional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(38, "input", 30);
    i0.ɵɵtemplate(39, Profile_ng_template_5_Conditional_8_small_39_Template, 2, 0, "small", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_3_0 = ctx_r1.profileForm.get("username")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.profileForm.get("username")) == null ? null : tmp_3_0.hasError("required")));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx_r1.profileForm.get("nomina")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.profileForm.get("nomina")) == null ? null : tmp_4_0.hasError("required")));
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx_r1.profileForm.get("email")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.profileForm.get("email")) == null ? null : tmp_5_0.invalid));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.areas);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.roleName);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ((tmp_8_0 = ctx_r1.profileForm.get("password")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r1.profileForm.get("password")) == null ? null : tmp_8_0.hasError("minlength")));
} }
function Profile_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 3);
    i0.ɵɵlistener("ngSubmit", function Profile_ng_template_5_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveProfile()); });
    i0.ɵɵelementStart(1, "h2", 4);
    i0.ɵɵtext(2, "Editar perfil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-dialog-content")(4, "p");
    i0.ɵɵtext(5, "Actualiza la informaci\u00F3n de tu cuenta.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, Profile_ng_template_5_Conditional_6_Template, 2, 1, "p", 5);
    i0.ɵɵconditionalCreate(7, Profile_ng_template_5_Conditional_7_Template, 2, 0, "p")(8, Profile_ng_template_5_Conditional_8_Template, 40, 6, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-dialog-actions", 7)(10, "button", 8);
    i0.ɵɵlistener("click", function Profile_ng_template_5_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeProfile()); });
    i0.ɵɵtext(11, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 9);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.profileForm);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.errorMessage ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.loading ? 7 : 8);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.loading || ctx_r1.saving || ctx_r1.profileForm.invalid);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving ? "Guardando..." : "Guardar cambios", " ");
} }
export class Profile {
    profileDialog;
    profileUpdated = new EventEmitter();
    profileForm = new FormGroup({
        username: new FormControl('', { nonNullable: true, validators: Validators.required }),
        nomina: new FormControl('', { nonNullable: true, validators: Validators.required }),
        email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
        name: new FormControl('', { nonNullable: true, validators: Validators.required }),
        last_name: new FormControl('', { nonNullable: true, validators: Validators.required }),
        area: new FormControl('', { nonNullable: true, validators: Validators.required }),
        password: new FormControl('', { nonNullable: true, validators: Validators.minLength(8) }),
    });
    areas = [];
    roleName = '';
    loading = false;
    saving = false;
    errorMessage = '';
    authService = inject(AuthService);
    dialog = inject(MatDialog);
    dialogRef;
    openProfile() {
        this.loading = true;
        this.errorMessage = '';
        this.dialogRef = this.dialog.open(this.profileDialog, {
            width: '600px',
            maxWidth: '95vw',
            disableClose: true,
        });
        this.authService.getAreas().subscribe({
            next: (response) => {
                const areas = response.areas ?? response;
                this.areas = Array.isArray(areas) ? areas.filter((area) => area.active !== false) : [];
            },
            error: () => (this.errorMessage = 'No fue posible cargar las áreas.'),
        });
        this.authService.getUser().subscribe({
            next: (response) => {
                const user = response.user;
                this.roleName = user?.rolId?.name ?? '';
                this.profileForm.reset({
                    username: user?.username ?? '',
                    nomina: String(user?.nomina ?? ''),
                    email: user?.email ?? '',
                    name: user?.name ?? '',
                    last_name: user?.last_name ?? '',
                    area: user?.area?._id ?? user?.area ?? '',
                    password: '',
                });
                this.loading = false;
            },
            error: (error) => {
                this.loading = false;
                this.errorMessage = error.error?.message ?? 'No fue posible cargar tu perfil.';
            },
        });
    }
    closeProfile() {
        this.dialogRef?.close();
    }
    saveProfile() {
        if (this.profileForm.invalid || this.saving) {
            this.profileForm.markAllAsTouched();
            return;
        }
        this.saving = true;
        this.errorMessage = '';
        const profile = { ...this.profileForm.getRawValue() };
        if (!profile['password'])
            delete profile['password'];
        this.authService.updateProfile(profile).subscribe({
            next: (response) => {
                this.saving = false;
                this.profileUpdated.emit(response.user);
                this.closeProfile();
                window.alert(response.message ?? 'Perfil actualizado correctamente.');
            },
            error: (error) => {
                this.saving = false;
                this.errorMessage = error.error?.message ?? 'No fue posible actualizar tu perfil.';
            },
        });
    }
    static ɵfac = function Profile_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Profile)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Profile, selectors: [["app-profile"]], viewQuery: function Profile_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.profileDialog = _t.first);
        } }, outputs: { profileUpdated: "profileUpdated" }, decls: 7, vars: 0, consts: [["profileDialog", ""], ["type", "button", "mat-button", "", 1, "menu-button", 3, "click"], [1, "span"], [1, "profile-form", 3, "ngSubmit", "formGroup"], ["mat-dialog-title", ""], ["role", "alert", 1, "form-error"], [1, "form-grid"], ["align", "end"], ["type", "button", "mat-button", "", 1, "cancel-btn", 3, "click"], ["type", "submit", "mat-flat-button", "", 1, "submit-btn", 3, "disabled"], [1, "form-group"], ["for", "profile-username"], ["id", "profile-username", "type", "text", "formControlName", "username"], [4, "ngIf"], ["for", "profile-nomina"], ["id", "profile-nomina", "type", "text", "formControlName", "nomina"], ["for", "profile-name"], ["id", "profile-name", "type", "text", "formControlName", "name"], ["for", "profile-last-name"], ["id", "profile-last-name", "type", "text", "formControlName", "last_name"], [1, "form-group", "full-width"], ["for", "profile-email"], ["id", "profile-email", "type", "email", "formControlName", "email"], ["for", "profile-area"], ["id", "profile-area", "formControlName", "area"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "profile-role"], ["id", "profile-role", "type", "text", "disabled", "", 3, "value"], ["for", "profile-password"], ["id", "profile-password", "type", "password", "formControlName", "password", "placeholder", "M\u00EDnimo 8 caracteres"], [3, "value"]], template: function Profile_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 1);
            i0.ɵɵlistener("click", function Profile_Template_button_click_0_listener() { return ctx.openProfile(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "person");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵtext(4, "Perfil");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, Profile_ng_template_5_Template, 14, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, ReactiveFormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, MatButtonModule, i3.MatButton, MatDialogModule, i4.MatDialogTitle, i4.MatDialogActions, i4.MatDialogContent, MatIconModule, i5.MatIcon], styles: ["[_nghost-%COMP%] {\n    display: block;\n    width: 100%;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n}\n\n.menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin-right: 8px;\n    color: white;\n}\n\n.menu-button[_ngcontent-%COMP%]   .span[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.profile-form[_ngcontent-%COMP%] { min-width: 0; }\n.form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }\n.form-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n.full-width[_ngcontent-%COMP%] { grid-column: 1 / -1; }\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { box-sizing: border-box; width: 100%; padding: 10px; border: 1px solid #bdbdbd; border-radius: 4px; }\ninput[_ngcontent-%COMP%]:disabled { background: #eeeeee; color: #616161; }\nsmall[_ngcontent-%COMP%], .form-error[_ngcontent-%COMP%] { color: #b00020; }\n@media (max-width: 600px) { .form-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } .full-width[_ngcontent-%COMP%] { grid-column: auto; } }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Profile, [{
        type: Component,
        args: [{ selector: 'app-profile', standalone: true, imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatIconModule], template: "<button type=\"button\" mat-button class=\"menu-button\" (click)=\"openProfile()\">\n    <mat-icon>person</mat-icon>\n    <span class=\"span\">Perfil</span>\n</button>\n\n<ng-template #profileDialog>\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveProfile()\" class=\"profile-form\">\n        <h2 mat-dialog-title>Editar perfil</h2>\n        <mat-dialog-content>\n            <p>Actualiza la informaci\u00F3n de tu cuenta.</p>\n\n            @if (errorMessage) {\n                <p class=\"form-error\" role=\"alert\">{{ errorMessage }}</p>\n            }\n\n            @if (loading) {\n                <p>Cargando informaci\u00F3n...</p>\n            } @else {\n                <div class=\"form-grid\">\n                    <div class=\"form-group\">\n                        <label for=\"profile-username\">Usuario</label>\n                        <input id=\"profile-username\" type=\"text\" formControlName=\"username\">\n                        <small *ngIf=\"profileForm.get('username')?.touched && profileForm.get('username')?.hasError('required')\">El usuario es requerido.</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"profile-nomina\">N\u00F3mina</label>\n                        <input id=\"profile-nomina\" type=\"text\" formControlName=\"nomina\">\n                        <small *ngIf=\"profileForm.get('nomina')?.touched && profileForm.get('nomina')?.hasError('required')\">La n\u00F3mina es requerida.</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"profile-name\">Nombre</label>\n                        <input id=\"profile-name\" type=\"text\" formControlName=\"name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"profile-last-name\">Apellidos</label>\n                        <input id=\"profile-last-name\" type=\"text\" formControlName=\"last_name\">\n                    </div>\n                    <div class=\"form-group full-width\">\n                        <label for=\"profile-email\">Correo electr\u00F3nico</label>\n                        <input id=\"profile-email\" type=\"email\" formControlName=\"email\">\n                        <small *ngIf=\"profileForm.get('email')?.touched && profileForm.get('email')?.invalid\">Ingresa un correo electr\u00F3nico v\u00E1lido.</small>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"profile-area\">\u00C1rea</label>\n                        <select id=\"profile-area\" formControlName=\"area\">\n                            <option value=\"\" disabled>Seleccione una opci\u00F3n</option>\n                            <option *ngFor=\"let area of areas\" [value]=\"area._id\">{{ area.name }}</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"profile-role\">Rol</label>\n                        <input id=\"profile-role\" type=\"text\" [value]=\"roleName\" disabled>\n                    </div>\n                    <div class=\"form-group full-width\">\n                        <label for=\"profile-password\">Nueva contrase\u00F1a (opcional)</label>\n                        <input id=\"profile-password\" type=\"password\" formControlName=\"password\" placeholder=\"M\u00EDnimo 8 caracteres\">\n                        <small *ngIf=\"profileForm.get('password')?.touched && profileForm.get('password')?.hasError('minlength')\">La contrase\u00F1a debe tener al menos 8 caracteres.</small>\n                    </div>\n                </div>\n            }\n        </mat-dialog-content>\n        <mat-dialog-actions align=\"end\">\n            <button type=\"button\" mat-button class=\"cancel-btn\" (click)=\"closeProfile()\">Cancelar</button>\n            <button type=\"submit\" mat-flat-button class=\"submit-btn\" [disabled]=\"loading || saving || profileForm.invalid\">\n                {{ saving ? 'Guardando...' : 'Guardar cambios' }}\n            </button>\n        </mat-dialog-actions>\n    </form>\n</ng-template>\n", styles: [":host {\n    display: block;\n    width: 100%;\n}\n\n.menu-button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n}\n\n.menu-button mat-icon {\n    margin-right: 8px;\n    color: white;\n}\n\n.menu-button .span {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.profile-form { min-width: 0; }\n.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }\n.form-group { display: flex; flex-direction: column; gap: 6px; }\n.full-width { grid-column: 1 / -1; }\ninput, select { box-sizing: border-box; width: 100%; padding: 10px; border: 1px solid #bdbdbd; border-radius: 4px; }\ninput:disabled { background: #eeeeee; color: #616161; }\nsmall, .form-error { color: #b00020; }\n@media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } .full-width { grid-column: auto; } }\n"] }]
    }], null, { profileDialog: [{
            type: ViewChild,
            args: ['profileDialog']
        }], profileUpdated: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Profile, { className: "Profile", filePath: "app/auth/profile/profile.ts", lineNumber: 16 }); })();
