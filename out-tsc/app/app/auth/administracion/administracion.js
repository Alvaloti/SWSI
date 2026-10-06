import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/card";
export class Administracion {
    authService;
    router;
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    loadChildren(arg0) {
        this.router.navigate([`/${arg0}`]);
    }
    static ɵfac = function Administracion_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Administracion)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Administracion, selectors: [["app-administracion"]], decls: 27, vars: 0, consts: [[1, "main-content"], [1, "section-heading"], ["cols", "2", 1, "card-grid"], ["href", "/area", 1, "mat-ripple", "docs-guide-item"], ["appearance", "outlined", 1, "example-card"], [1, "mat-mdc-card-title"], [1, "mat-mdc-card-content", "docs-guide-card-summary"], ["routerLink", "/role", 1, "mat-ripple", "docs-guide-item"], ["href", "/categoria", 1, "mat-ripple", "docs-guide-item"], ["href", "/inventario", 1, "mat-ripple", "docs-guide-item"]], template: function Administracion_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "h1");
            i0.ɵɵtext(3, "Administraci\u00F3n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "Gestiona y administra el sistema");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 2)(7, "a", 3)(8, "mat-card", 4)(9, "mat-card-title", 5);
            i0.ɵɵtext(10, " \u00C1reas ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "mat-card-content", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 7)(13, "mat-card", 4)(14, "mat-card-title", 5);
            i0.ɵɵtext(15, " Roles ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "mat-card-content", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "a", 8)(18, "mat-card", 4)(19, "mat-card-title", 5);
            i0.ɵɵtext(20, " Categor\u00EDas ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "mat-card-content", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "a", 9)(23, "mat-card", 4)(24, "mat-card-title", 5);
            i0.ɵɵtext(25, " Inventario ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "mat-card-content", 6);
            i0.ɵɵelementEnd()()()();
        } }, dependencies: [MatIconModule,
            MatCardModule, i3.MatCard, i3.MatCardContent, i3.MatCardTitle, MatButtonModule,
            MatGridListModule,
            RouterLink], styles: [".example-card[_ngcontent-%COMP%] {\n    max-width: 200px;\n    height: 200px;\n    background: lightblue;\n}\n\n.example-card-footer[_ngcontent-%COMP%] {\n    padding: 16px;\n}\n\n.main-content[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\nsection-heading[_ngcontent-%COMP%] {\n    align-content: center;\n}\n\nmat-mdc-card-title[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nmain-content[_ngcontent-%COMP%]{\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.card-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n    padding: 16px;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n    width: 30%;\n    padding: 0.8rem;\n    background: #0194fe;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n    align-content: center;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Administracion, [{
        type: Component,
        args: [{ selector: 'app-administracion', standalone: true, imports: [
                    MatIconModule,
                    MatCardModule,
                    MatButtonModule,
                    MatGridListModule,
                    RouterLink
                ], template: "<div class=\"main-content\">\n    <section class=\"section-heading\">\n        <h1>Administraci\u00F3n</h1>\n        <p>Gestiona y administra el sistema</p>\n    </section>\n    <div class=\"card-grid\" cols=\"2\">\n        <a class=\"mat-ripple docs-guide-item\" href=\"/area\">\n            <mat-card class=\"example-card\" appearance=\"outlined\">\n                <mat-card-title class=\"mat-mdc-card-title\">\n                    \u00C1reas\n                </mat-card-title>\n                <mat-card-content class=\"mat-mdc-card-content docs-guide-card-summary\">\n\n                </mat-card-content>\n            </mat-card>\n        </a>\n        <a class=\"mat-ripple docs-guide-item\" routerLink=\"/role\">\n            <mat-card class=\"example-card\" appearance=\"outlined\">\n                <mat-card-title class=\"mat-mdc-card-title\">\n                    Roles\n                </mat-card-title>\n                <mat-card-content class=\"mat-mdc-card-content docs-guide-card-summary\">\n\n                </mat-card-content>\n            </mat-card>\n        </a>\n        <a class=\"mat-ripple docs-guide-item\" href=\"/categoria\">\n            <mat-card class=\"example-card\" appearance=\"outlined\">\n                <mat-card-title class=\"mat-mdc-card-title\">\n                    Categor\u00EDas\n                </mat-card-title>\n                <mat-card-content class=\"mat-mdc-card-content docs-guide-card-summary\">\n\n                </mat-card-content>\n            </mat-card>\n        </a>\n        <a class=\"mat-ripple docs-guide-item\" href=\"/inventario\">\n            <mat-card class=\"example-card\" appearance=\"outlined\">\n                <mat-card-title class=\"mat-mdc-card-title\">\n                    Inventario\n                </mat-card-title>\n                <mat-card-content class=\"mat-mdc-card-content docs-guide-card-summary\">\n\n                </mat-card-content>\n            </mat-card>\n        </a>\n    </div>\n</div>\n", styles: [".example-card {\n    max-width: 200px;\n    height: 200px;\n    background: lightblue;\n}\n\n.example-card-footer {\n    padding: 16px;\n}\n\n.main-content {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\nsection-heading {\n    align-content: center;\n}\n\nmat-mdc-card-title {\n    text-align: center;\n}\n\nmain-content{\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.card-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 16px;\n    padding: 16px;\n}\n\n.cancel-btn {\n    width: 30%;\n    padding: 0.8rem;\n    background: #0194fe;\n    color: white;\n    border: none;\n    border-radius: 6px;\n    font-size: 1rem;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 1rem;\n    align-content: center;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Administracion, { className: "Administracion", filePath: "app/auth/administracion/administracion.ts", lineNumber: 22 }); })();
