import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Users } from "../users/users";
import { Profile } from '../profile/profile';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth-service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/table";
import * as i7 from "@angular/material/paginator";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/material/progress-spinner";
import * as i10 from "@angular/material/dialog";
import * as i11 from "@angular/forms";
const _c0 = ["assignmentDialog"];
const _c1 = () => [5, 10, 25, 100];
function HomeSup_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-users", 15);
} }
function HomeSup_Conditional_58_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.errorCarga);
} }
function HomeSup_Conditional_58_Conditional_9_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Folio");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_9_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const solicitud_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(solicitud_r4.folio);
} }
function HomeSup_Conditional_58_Conditional_9_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Tipo");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_9_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const solicitud_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(solicitud_r5.tipo);
} }
function HomeSup_Conditional_58_Conditional_9_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Descripci\u00F3n");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_9_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const solicitud_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(solicitud_r6.descripcion);
} }
function HomeSup_Conditional_58_Conditional_9_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Prioridad");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_9_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const solicitud_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(solicitud_r7.prioridad);
} }
function HomeSup_Conditional_58_Conditional_9_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Estado");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_9_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const solicitud_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(solicitud_r8.estado);
} }
function HomeSup_Conditional_58_Conditional_9_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Comentarios");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_9_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const solicitud_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(solicitud_r9.comentarios || "Sin comentarios");
} }
function HomeSup_Conditional_58_Conditional_9_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Acciones");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_58_Conditional_9_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 36)(1, "button", 37);
    i0.ɵɵlistener("click", function HomeSup_Conditional_58_Conditional_9_td_21_Template_button_click_1_listener() { const solicitud_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editarSolicitud(solicitud_r11)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 38);
    i0.ɵɵlistener("click", function HomeSup_Conditional_58_Conditional_9_td_21_Template_button_click_4_listener() { const solicitud_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.eliminarSolicitud(solicitud_r11)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete");
    i0.ɵɵelementEnd()()();
} }
function HomeSup_Conditional_58_Conditional_9_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 39);
} }
function HomeSup_Conditional_58_Conditional_9_tr_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 40);
} }
function HomeSup_Conditional_58_Conditional_9_tr_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 41)(1, "td", 42);
    i0.ɵɵtext(2, "No hay solicitudes disponibles.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r2.columnasVisibles.length);
} }
function HomeSup_Conditional_58_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 21);
    i0.ɵɵelementContainerStart(1, 23);
    i0.ɵɵtemplate(2, HomeSup_Conditional_58_Conditional_9_th_2_Template, 2, 0, "th", 24)(3, HomeSup_Conditional_58_Conditional_9_td_3_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(4, 26);
    i0.ɵɵtemplate(5, HomeSup_Conditional_58_Conditional_9_th_5_Template, 2, 0, "th", 24)(6, HomeSup_Conditional_58_Conditional_9_td_6_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(7, 27);
    i0.ɵɵtemplate(8, HomeSup_Conditional_58_Conditional_9_th_8_Template, 2, 0, "th", 24)(9, HomeSup_Conditional_58_Conditional_9_td_9_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(10, 28);
    i0.ɵɵtemplate(11, HomeSup_Conditional_58_Conditional_9_th_11_Template, 2, 0, "th", 24)(12, HomeSup_Conditional_58_Conditional_9_td_12_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 29);
    i0.ɵɵtemplate(14, HomeSup_Conditional_58_Conditional_9_th_14_Template, 2, 0, "th", 24)(15, HomeSup_Conditional_58_Conditional_9_td_15_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(16, 30);
    i0.ɵɵtemplate(17, HomeSup_Conditional_58_Conditional_9_th_17_Template, 2, 0, "th", 24)(18, HomeSup_Conditional_58_Conditional_9_td_18_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(19, 31);
    i0.ɵɵtemplate(20, HomeSup_Conditional_58_Conditional_9_th_20_Template, 2, 0, "th", 24)(21, HomeSup_Conditional_58_Conditional_9_td_21_Template, 7, 0, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(22, HomeSup_Conditional_58_Conditional_9_tr_22_Template, 1, 0, "tr", 32)(23, HomeSup_Conditional_58_Conditional_9_tr_23_Template, 1, 0, "tr", 33)(24, HomeSup_Conditional_58_Conditional_9_tr_24_Template, 3, 1, "tr", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("dataSource", ctx_r2.datos);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r2.columnasVisibles);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r2.columnasVisibles);
} }
function HomeSup_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h2");
    i0.ɵɵtext(2, "Solicitudes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 17)(4, "mat-label");
    i0.ɵɵtext(5, "Buscar solicitud");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 18);
    i0.ɵɵlistener("keyup", function HomeSup_Conditional_58_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onFiltrar($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, HomeSup_Conditional_58_Conditional_7_Template, 2, 0, "div", 19)(8, HomeSup_Conditional_58_Conditional_8_Template, 2, 1, "p", 20)(9, HomeSup_Conditional_58_Conditional_9_Template, 25, 3, "table", 21);
    i0.ɵɵelementStart(10, "mat-paginator", 22);
    i0.ɵɵlistener("page", function HomeSup_Conditional_58_Template_mat_paginator_page_10_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCambiarPagina($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r2.cargando ? 7 : ctx_r2.errorCarga ? 8 : 9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("length", ctx_r2.totalRegistros)("pageSize", ctx_r2.tamanoPagina)("pageIndex", ctx_r2.paginaActual)("pageSizeOptions", i0.ɵɵpureFunction0(5, _c1));
} }
function HomeSup_Conditional_59_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.errorCarga);
} }
function HomeSup_Conditional_59_Conditional_9_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Folio");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_9_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r13 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ticket_r13.folio);
} }
function HomeSup_Conditional_59_Conditional_9_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "T\u00EDtulo");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_9_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r14 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ticket_r14.titulo);
} }
function HomeSup_Conditional_59_Conditional_9_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Descripci\u00F3n");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_9_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ticket_r15.descripcion);
} }
function HomeSup_Conditional_59_Conditional_9_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Prioridad");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_9_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ticket_r16.prioridad);
} }
function HomeSup_Conditional_59_Conditional_9_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Estado");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_9_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r17 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ticket_r17.estado);
} }
function HomeSup_Conditional_59_Conditional_9_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Comentarios");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_9_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ticket_r18 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ticket_r18.comentarios || "Sin comentarios");
} }
function HomeSup_Conditional_59_Conditional_9_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 35);
    i0.ɵɵtext(1, "Acciones");
    i0.ɵɵelementEnd();
} }
function HomeSup_Conditional_59_Conditional_9_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 36)(1, "button", 46);
    i0.ɵɵlistener("click", function HomeSup_Conditional_59_Conditional_9_td_21_Template_button_click_1_listener() { const ticket_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.editarTicket(ticket_r20)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 47);
    i0.ɵɵlistener("click", function HomeSup_Conditional_59_Conditional_9_td_21_Template_button_click_4_listener() { const ticket_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.eliminarTicket(ticket_r20)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "delete");
    i0.ɵɵelementEnd()()();
} }
function HomeSup_Conditional_59_Conditional_9_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 39);
} }
function HomeSup_Conditional_59_Conditional_9_tr_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 40);
} }
function HomeSup_Conditional_59_Conditional_9_tr_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 41)(1, "td", 42);
    i0.ɵɵtext(2, "No hay tickets disponibles.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r2.columnasTickets.length);
} }
function HomeSup_Conditional_59_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 21);
    i0.ɵɵelementContainerStart(1, 23);
    i0.ɵɵtemplate(2, HomeSup_Conditional_59_Conditional_9_th_2_Template, 2, 0, "th", 24)(3, HomeSup_Conditional_59_Conditional_9_td_3_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(4, 45);
    i0.ɵɵtemplate(5, HomeSup_Conditional_59_Conditional_9_th_5_Template, 2, 0, "th", 24)(6, HomeSup_Conditional_59_Conditional_9_td_6_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(7, 27);
    i0.ɵɵtemplate(8, HomeSup_Conditional_59_Conditional_9_th_8_Template, 2, 0, "th", 24)(9, HomeSup_Conditional_59_Conditional_9_td_9_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(10, 28);
    i0.ɵɵtemplate(11, HomeSup_Conditional_59_Conditional_9_th_11_Template, 2, 0, "th", 24)(12, HomeSup_Conditional_59_Conditional_9_td_12_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 29);
    i0.ɵɵtemplate(14, HomeSup_Conditional_59_Conditional_9_th_14_Template, 2, 0, "th", 24)(15, HomeSup_Conditional_59_Conditional_9_td_15_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(16, 30);
    i0.ɵɵtemplate(17, HomeSup_Conditional_59_Conditional_9_th_17_Template, 2, 0, "th", 24)(18, HomeSup_Conditional_59_Conditional_9_td_18_Template, 2, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(19, 31);
    i0.ɵɵtemplate(20, HomeSup_Conditional_59_Conditional_9_th_20_Template, 2, 0, "th", 24)(21, HomeSup_Conditional_59_Conditional_9_td_21_Template, 7, 0, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(22, HomeSup_Conditional_59_Conditional_9_tr_22_Template, 1, 0, "tr", 32)(23, HomeSup_Conditional_59_Conditional_9_tr_23_Template, 1, 0, "tr", 33)(24, HomeSup_Conditional_59_Conditional_9_tr_24_Template, 3, 1, "tr", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("dataSource", ctx_r2.datos);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r2.columnasTickets);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r2.columnasTickets);
} }
function HomeSup_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h2");
    i0.ɵɵtext(2, "Tickets");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 17)(4, "mat-label");
    i0.ɵɵtext(5, "Buscar ticket");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 43);
    i0.ɵɵlistener("keyup", function HomeSup_Conditional_59_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onFiltrar($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, HomeSup_Conditional_59_Conditional_7_Template, 2, 0, "div", 19)(8, HomeSup_Conditional_59_Conditional_8_Template, 2, 1, "p", 20)(9, HomeSup_Conditional_59_Conditional_9_Template, 25, 3, "table", 21);
    i0.ɵɵelementStart(10, "mat-paginator", 44);
    i0.ɵɵlistener("page", function HomeSup_Conditional_59_Template_mat_paginator_page_10_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCambiarPagina($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r2.cargando ? 7 : ctx_r2.errorCarga ? 8 : 9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("length", ctx_r2.totalRegistros)("pageSize", ctx_r2.tamanoPagina)("pageIndex", ctx_r2.paginaActual)("pageSizeOptions", i0.ɵɵpureFunction0(5, _c1));
} }
function HomeSup_ng_template_60_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 59);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tecnico_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", tecnico_r22._id ?? tecnico_r22.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", tecnico_r22.name, " ", tecnico_r22.last_name, " (", tecnico_r22.username, ") ");
} }
function HomeSup_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h2", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-dialog-content")(3, "div", 49)(4, "label", 50);
    i0.ɵɵtext(5, "T\u00E9cnico asignado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function HomeSup_ng_template_60_Template_select_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.tecnicoSeleccionado, $event) || (ctx_r2.tecnicoSeleccionado = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(7, "option", 52);
    i0.ɵɵtext(8, "Selecciona un t\u00E9cnico");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, HomeSup_ng_template_60_option_9_Template, 2, 4, "option", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "label", 54);
    i0.ɵɵtext(11, "Comentarios");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "textarea", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function HomeSup_ng_template_60_Template_textarea_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.comentariosEditando, $event) || (ctx_r2.comentariosEditando = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "mat-dialog-actions", 56)(14, "button", 57);
    i0.ɵɵlistener("click", function HomeSup_ng_template_60_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cerrarEditor()); });
    i0.ɵɵtext(15, " Cancelar ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 58);
    i0.ɵɵlistener("click", function HomeSup_ng_template_60_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.guardarAsignacion()); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" Editar ", ctx_r2.tipoEditando === "ticket" ? "ticket" : "solicitud", " ", ctx_r2.registroEditando == null ? null : ctx_r2.registroEditando.folio, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.tecnicoSeleccionado);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.tecnicos);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.comentariosEditando);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.guardandoAsignacion);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r2.tecnicoSeleccionado || ctx_r2.guardandoAsignacion);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.guardandoAsignacion ? "Guardando..." : "Asignar t\u00E9cnico", " ");
} }
export class HomeSup {
    authService;
    router;
    breakpointObserver;
    changeDetectorRef;
    assignmentDialog;
    sidenav;
    user;
    isMobile = true;
    menuAbierto = true;
    constructor(authService, router, breakpointObserver, changeDetectorRef) {
        this.authService = authService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.changeDetectorRef = changeDetectorRef;
    }
    http = inject(HttpClient);
    // Configuración de Tabla
    columnasVisibles = ['folio', 'tipo', 'descripcion', 'prioridad', 'estado', 'comentarios', 'acciones'];
    columnasTickets = ['folio', 'titulo', 'descripcion', 'prioridad', 'estado', 'comentarios', 'acciones'];
    datos = new MatTableDataSource([]);
    cargando = false;
    errorCarga = '';
    vistaActiva = 'users';
    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    tecnicos = [];
    registroEditando;
    tipoEditando = 'solicitud';
    tecnicoSeleccionado = '';
    comentariosEditando = '';
    guardandoAsignacion = false;
    dialog = inject(MatDialog);
    dialogRef;
    ngOnInit() {
        this.observarTamanoPantalla();
        this.cargarTecnicos();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success')
                    this.user = response.user;
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }
    cargarTecnicos() {
        const params = new HttpParams().set('page', '1').set('limit', '100').set('role', 'tecnico');
        this.authService.getUsers(params).subscribe({
            next: (response) => {
                const usuarios = response.users ?? response;
                this.tecnicos = Array.isArray(usuarios)
                    ? usuarios.filter((tecnico) => tecnico.active !== false)
                    : [];
            },
            error: (error) => console.error('No se pudieron cargar los técnicos:', error),
        });
    }
    observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
    }
    cambiarVista(nuevaVista) {
        this.vistaActiva = nuevaVista;
        if (nuevaVista === 'solicitud' || nuevaVista === 'tickets') {
            this.paginaActual = 0;
            this.filtroBusqueda = '';
            this.cargarDatos();
        }
        if (this.isMobile)
            this.menuAbierto = false;
    }
    cargarDatos() {
        this.cargando = true;
        this.errorCarga = '';
        this.datos.data = [];
        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);
        const vistaSolicitada = this.vistaActiva;
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
                const registros = vistaSolicitada === 'tickets'
                    ? respuesta.tickets ?? respuesta
                    : respuesta.solicitudes ?? respuesta;
                this.datos.data = Array.isArray(registros) ? registros : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                if (this.vistaActiva !== vistaSolicitada)
                    return;
                console.error(`No se pudieron cargar ${vistaSolicitada}:`, error);
                this.errorCarga = error.error?.message ?? `No fue posible cargar ${vistaSolicitada}.`;
                this.totalRegistros = 0;
                this.changeDetectorRef.markForCheck();
            },
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
        this.abrirEditor(solicitud, 'solicitud');
    }
    eliminarTicket(ticket) {
        const id = ticket._id ?? ticket.id;
        if (!id || !window.confirm(`¿Eliminar el ticket "${ticket.folio ?? id}"?`))
            return;
        this.authService.deleteTicket(id).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el ticket.'),
        });
    }
    editarTicket(ticket) {
        this.abrirEditor(ticket, 'ticket');
    }
    abrirEditor(registro, tipo) {
        const id = registro._id ?? registro.id;
        if (!id)
            return;
        this.registroEditando = registro;
        this.tipoEditando = tipo;
        this.tecnicoSeleccionado = registro.tecnico_id?._id ?? registro.tecnico_id ?? '';
        this.comentariosEditando = registro.comentarios ?? '';
        this.dialogRef = this.dialog.open(this.assignmentDialog, {
            width: '520px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }
    cerrarEditor() {
        this.dialogRef?.close();
    }
    guardarAsignacion() {
        const id = this.registroEditando?._id ?? this.registroEditando?.id;
        if (!id || !this.tecnicoSeleccionado || this.guardandoAsignacion)
            return;
        this.guardandoAsignacion = true;
        const cambios = {
            tecnico_id: this.tecnicoSeleccionado,
            comentarios: this.comentariosEditando,
        };
        const request = this.tipoEditando === 'ticket'
            ? this.authService.updateTicket(id, cambios)
            : this.authService.updateSolicitud(id, cambios);
        request.subscribe({
            next: () => {
                this.guardandoAsignacion = false;
                this.cerrarEditor();
                this.cargarDatos();
            },
            error: (error) => {
                this.guardandoAsignacion = false;
                window.alert(error.error?.message ?? 'No fue posible asignar el técnico.');
            },
        });
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
    static ɵfac = function HomeSup_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomeSup)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.BreakpointObserver), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeSup, selectors: [["app-home-sup"]], viewQuery: function HomeSup_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5)(MatSidenav, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.assignmentDialog = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, decls: 62, vars: 5, consts: [["drawer", ""], ["assignmentDialog", ""], [3, "click"], ["src", "https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg", "alt", "Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital", 1, "img-login"], [1, "espaciador-flexible"], ["mat-button", "", 1, "menu-button"], [1, "mat-elevation-z8", 3, "openedChange", "mode", "opened"], ["src", "../../../../public/Lot.png", 1, "avatar", "mat-elevation-z8"], [1, "name"], [1, "designation"], [3, "profileUpdated"], ["mat-button", "", 1, "menu-button", 3, "click"], [1, "span"], [1, "main-container"], [1, "contenido-dinamico"], ["roleFilter", "tecnico", "titulo", "T\u00E9cnicos"], [1, "table-container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Folio, tipo o descripci\u00F3n", 3, "keyup"], [1, "loading-spinner"], ["role", "alert", 1, "load-error"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["aria-label", "Seleccionar p\u00E1gina de solicitudes", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["matColumnDef", "folio"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tipo"], ["matColumnDef", "descripcion"], ["matColumnDef", "prioridad"], ["matColumnDef", "estado"], ["matColumnDef", "comentarios"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["type", "button", "mat-icon-button", "", "color", "primary", "aria-label", "Editar solicitud", 3, "click"], ["type", "button", "mat-icon-button", "", "aria-label", "Eliminar solicitud", 1, "deleteButton", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"], ["matInput", "", "placeholder", "Folio, t\u00EDtulo o descripci\u00F3n", 3, "keyup"], ["aria-label", "Seleccionar p\u00E1gina de tickets", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["matColumnDef", "titulo"], ["type", "button", "mat-icon-button", "", "color", "primary", "aria-label", "Editar ticket", 3, "click"], ["type", "button", "mat-icon-button", "", "aria-label", "Eliminar ticket", 1, "deleteButton", 3, "click"], ["mat-dialog-title", ""], [1, "assignment-form"], ["for", "tecnico"], ["id", "tecnico", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "comentariosEdicion"], ["id", "comentariosEdicion", "rows", "4", "placeholder", "Comentarios para el t\u00E9cnico", 3, "ngModelChange", "ngModel"], ["align", "end"], ["type", "button", "mat-button", "", 3, "click", "disabled"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click", "disabled"], [3, "value"]], template: function HomeSup_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-toolbar")(1, "button", 2);
            i0.ɵɵlistener("click", function HomeSup_Template_button_click_1_listener() { return ctx.toggleMenu(); });
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
            i0.ɵɵtwoWayListener("openedChange", function HomeSup_Template_mat_sidenav_openedChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.menuAbierto, $event) || (ctx.menuAbierto = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelement(17, "img", 7);
            i0.ɵɵelementStart(18, "h4", 8);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p", 9);
            i0.ɵɵtext(21, "Software Engineer");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "mat-divider");
            i0.ɵɵelementStart(23, "app-profile", 10);
            i0.ɵɵlistener("profileUpdated", function HomeSup_Template_app_profile_profileUpdated_23_listener($event) { return ctx.user = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 11);
            i0.ɵɵlistener("click", function HomeSup_Template_button_click_24_listener() { return ctx.cambiarVista("users"); });
            i0.ɵɵelementStart(25, "mat-icon");
            i0.ɵɵtext(26, "person");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span", 12);
            i0.ɵɵtext(28, "T\u00E9cnicos");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "button", 11);
            i0.ɵɵlistener("click", function HomeSup_Template_button_click_29_listener() { return ctx.cambiarVista("solicitud"); });
            i0.ɵɵelementStart(30, "mat-icon");
            i0.ɵɵtext(31, "assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span", 12);
            i0.ɵɵtext(33, "Solicitudes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "button", 11);
            i0.ɵɵlistener("click", function HomeSup_Template_button_click_34_listener() { return ctx.cambiarVista("tickets"); });
            i0.ɵɵelementStart(35, "mat-icon");
            i0.ɵɵtext(36, "assignment");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "span", 12);
            i0.ɵɵtext(38, "Tickets");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "button", 11);
            i0.ɵɵlistener("click", function HomeSup_Template_button_click_39_listener() { return ctx.cambiarVista("reportes"); });
            i0.ɵɵelementStart(40, "mat-icon");
            i0.ɵɵtext(41, "inbox");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "span", 12);
            i0.ɵɵtext(43, "Reportes");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(44, "mat-divider");
            i0.ɵɵelementStart(45, "button", 5)(46, "mat-icon");
            i0.ɵɵtext(47, "help");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "span", 12);
            i0.ɵɵtext(49, "Ayuda");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "button", 11);
            i0.ɵɵlistener("click", function HomeSup_Template_button_click_50_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(51, "mat-icon");
            i0.ɵɵtext(52, "exit_to_app");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span", 12);
            i0.ɵɵtext(54, "Salir");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "mat-sidenav-content", 13)(56, "div", 14);
            i0.ɵɵconditionalCreate(57, HomeSup_Conditional_57_Template, 1, 0, "app-users", 15)(58, HomeSup_Conditional_58_Template, 11, 6, "div", 16)(59, HomeSup_Conditional_59_Template, 11, 6, "div", 16);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(60, HomeSup_ng_template_60_Template, 18, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate1(" Bienvenido ", ctx.user == null ? null : ctx.user.username, " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("mode", ctx.isMobile ? "over" : "side");
            i0.ɵɵtwoWayProperty("opened", ctx.menuAbierto);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.user == null ? null : ctx.user.username);
            i0.ɵɵadvance(38);
            i0.ɵɵconditional(ctx.vistaActiva === "users" ? 57 : ctx.vistaActiva === "solicitud" ? 58 : ctx.vistaActiva === "tickets" ? 59 : -1);
        } }, dependencies: [CommonModule, i4.NgForOf, MatToolbar,
            MatButtonModule, i5.MatButton, i5.MatIconButton, MatIcon,
            MatSidenavContainer,
            MatSidenav,
            MatDivider,
            MatSidenavContent,
            MatTableModule, i6.MatTable, i6.MatHeaderCellDef, i6.MatHeaderRowDef, i6.MatColumnDef, i6.MatCellDef, i6.MatRowDef, i6.MatHeaderCell, i6.MatCell, i6.MatHeaderRow, i6.MatRow, i6.MatNoDataRow, Users,
            MatPaginatorModule, i7.MatPaginator, MatFormFieldModule, i8.MatFormField, i8.MatLabel, MatInputModule, i8.MatInput, MatProgressSpinnerModule, i9.MatProgressSpinner, MatDialogModule, i10.MatDialogTitle, i10.MatDialogActions, i10.MatDialogContent, FormsModule, i11.NgSelectOption, i11.ɵNgSelectMultipleOption, i11.DefaultValueAccessor, i11.SelectControlValueAccessor, i11.NgControlStatus, i11.RequiredValidator, i11.NgModel, Profile], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\nmat-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \nmat-sidenav[_ngcontent-%COMP%]   .menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        color: white;\n    }\n\n.span[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    .icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login[_ngcontent-%COMP%]{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto[_ngcontent-%COMP%] {\n    transform: translateX(-250px);\n}\n\n.table-container[_ngcontent-%COMP%] {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    overflow-x: auto;\n}\n\n.table-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], \n.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], \n.table-container[_ngcontent-%COMP%]   mat-paginator[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 32px;\n}\n\n.load-error[_ngcontent-%COMP%] {\n    margin: 16px 0;\n    padding: 12px;\n    border-radius: 6px;\n    background: #ffebee;\n    color: #b71c1c;\n}\n\n.assignment-form[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 10px;\n    padding-top: 8px;\n}\n\n.assignment-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.assignment-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid #bdbdbd;\n    border-radius: 6px;\n    padding: 10px;\n    font: inherit;\n}\n\n.mat-row[_ngcontent-%COMP%]   .mat-cell[colspan][_ngcontent-%COMP%] {\n    padding: 32px;\n    text-align: center;\n    color: #666;\n}\n\n.mat-mdc-row[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido[_ngcontent-%COMP%] {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n\n.media-funcion[_ngcontent-%COMP%] {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeSup, [{
        type: Component,
        args: [{ selector: 'app-home-sup', imports: [
                    CommonModule,
                    MatToolbar,
                    MatButtonModule,
                    MatIcon,
                    MatSidenavContainer,
                    MatSidenav,
                    MatDivider,
                    MatSidenavContent,
                    MatTableModule,
                    Users,
                    MatPaginatorModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatProgressSpinnerModule,
                    MatDialogModule,
                    FormsModule,
                    Profile
                ], template: "<mat-toolbar>\n    <button (click)=\"toggleMenu()\">\n        <mat-icon>menu</mat-icon>\n        <span> Men\u00FA </span>\n    </button>\n    <img class=\"img-login\" src=\"https://imagenes.leon.gob.mx/dependencias/tecnologias-de-la-informacion-b.svg\"\n        alt=\"Direcci\u00F3n General de Tecnolog\u00EDas de la Informaci\u00F3n y Gobierno Digital\">\n    <span class=\"espaciador-flexible\"></span>\n    <span> Bienvenido {{ user?.username}} </span>\n    <span>\n        <button mat-button class=\"menu-button\">\n            <mat-icon>notifications_none</mat-icon>\n        </button>\n    </span>\n\n</mat-toolbar>\n\n<mat-sidenav-container>\n    <mat-sidenav #drawer [mode]=\"isMobile ? 'over' : 'side'\" [(opened)]=\"menuAbierto\" class=\"mat-elevation-z8\">\n        <img class=\"avatar mat-elevation-z8\" src=\"../../../../public/Lot.png\" />\n\n        <h4 class=\"name\">{{user?.username}}</h4>\n        <p class=\"designation\">Software Engineer</p>\n\n        <mat-divider></mat-divider>\n        <app-profile (profileUpdated)=\"user = $event\"></app-profile>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('users')\">\n            <mat-icon>person</mat-icon>\n            <span class=\"span\">T\u00E9cnicos</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('solicitud')\">\n            <mat-icon>assignment</mat-icon>\n            <span class=\"span\">Solicitudes</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('tickets')\">\n            <mat-icon>assignment</mat-icon>\n            <span class=\"span\">Tickets</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"cambiarVista('reportes')\">\n            <mat-icon>inbox</mat-icon>\n            <span class=\"span\">Reportes</span>\n        </button>\n\n        <mat-divider></mat-divider>\n\n        <button mat-button class=\"menu-button\">\n            <mat-icon>help</mat-icon>\n            <span class=\"span\">Ayuda</span>\n        </button>\n        <button mat-button class=\"menu-button\" (click)=\"logout()\">\n            <mat-icon>exit_to_app</mat-icon>\n            <span class=\"span\">Salir</span>\n        </button>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"main-container\">\n        <div class=\"contenido-dinamico\">\n        @if (vistaActiva === 'users') {\n            <app-users roleFilter=\"tecnico\" titulo=\"T\u00E9cnicos\"></app-users>\n        } @else if (vistaActiva === 'solicitud') {\n            <div class=\"table-container\">\n                <h2>Solicitudes</h2>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Buscar solicitud</mat-label>\n                    <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Folio, tipo o descripci\u00F3n\">\n                </mat-form-field>\n\n                @if (cargando) {\n                <div class=\"loading-spinner\"><mat-spinner></mat-spinner></div>\n                } @else if (errorCarga) {\n                <p class=\"load-error\" role=\"alert\">{{ errorCarga }}</p>\n                } @else {\n                <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n                    <ng-container matColumnDef=\"folio\">\n                        <th mat-header-cell *matHeaderCellDef>Folio</th>\n                        <td mat-cell *matCellDef=\"let solicitud\">{{ solicitud.folio }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"tipo\">\n                        <th mat-header-cell *matHeaderCellDef>Tipo</th>\n                        <td mat-cell *matCellDef=\"let solicitud\">{{ solicitud.tipo }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"descripcion\">\n                        <th mat-header-cell *matHeaderCellDef>Descripci\u00F3n</th>\n                        <td mat-cell *matCellDef=\"let solicitud\">{{ solicitud.descripcion }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"prioridad\">\n                        <th mat-header-cell *matHeaderCellDef>Prioridad</th>\n                        <td mat-cell *matCellDef=\"let solicitud\">{{ solicitud.prioridad }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"estado\">\n                        <th mat-header-cell *matHeaderCellDef>Estado</th>\n                        <td mat-cell *matCellDef=\"let solicitud\">{{ solicitud.estado }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"comentarios\">\n                        <th mat-header-cell *matHeaderCellDef>Comentarios</th>\n                        <td mat-cell *matCellDef=\"let solicitud\">{{ solicitud.comentarios || 'Sin comentarios' }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"acciones\">\n                        <th mat-header-cell *matHeaderCellDef>Acciones</th>\n                        <td mat-cell *matCellDef=\"let solicitud\">\n                            <button type=\"button\" mat-icon-button color=\"primary\"\n                                (click)=\"editarSolicitud(solicitud)\" aria-label=\"Editar solicitud\">\n                                <mat-icon>edit</mat-icon>\n                            </button>\n                            <button type=\"button\" mat-icon-button class=\"deleteButton\"\n                                (click)=\"eliminarSolicitud(solicitud)\" aria-label=\"Eliminar solicitud\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"columnasVisibles\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: columnasVisibles;\"></tr>\n                    <tr class=\"mat-row\" *matNoDataRow>\n                        <td class=\"mat-cell\" [attr.colspan]=\"columnasVisibles.length\">No hay solicitudes disponibles.</td>\n                    </tr>\n                </table>\n                }\n\n                <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageIndex]=\"paginaActual\"\n                    [pageSizeOptions]=\"[5, 10, 25, 100]\" (page)=\"onCambiarPagina($event)\"\n                    aria-label=\"Seleccionar p\u00E1gina de solicitudes\">\n                </mat-paginator>\n            </div>\n        } @else if (vistaActiva === 'tickets') {\n            <div class=\"table-container\">\n                <h2>Tickets</h2>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Buscar ticket</mat-label>\n                    <input matInput (keyup)=\"onFiltrar($event)\" placeholder=\"Folio, t\u00EDtulo o descripci\u00F3n\">\n                </mat-form-field>\n\n                @if (cargando) {\n                <div class=\"loading-spinner\"><mat-spinner></mat-spinner></div>\n                } @else if (errorCarga) {\n                <p class=\"load-error\" role=\"alert\">{{ errorCarga }}</p>\n                } @else {\n                <table mat-table [dataSource]=\"datos\" class=\"mat-elevation-z8\">\n                    <ng-container matColumnDef=\"folio\">\n                        <th mat-header-cell *matHeaderCellDef>Folio</th>\n                        <td mat-cell *matCellDef=\"let ticket\">{{ ticket.folio }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"titulo\">\n                        <th mat-header-cell *matHeaderCellDef>T\u00EDtulo</th>\n                        <td mat-cell *matCellDef=\"let ticket\">{{ ticket.titulo }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"descripcion\">\n                        <th mat-header-cell *matHeaderCellDef>Descripci\u00F3n</th>\n                        <td mat-cell *matCellDef=\"let ticket\">{{ ticket.descripcion }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"prioridad\">\n                        <th mat-header-cell *matHeaderCellDef>Prioridad</th>\n                        <td mat-cell *matCellDef=\"let ticket\">{{ ticket.prioridad }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"estado\">\n                        <th mat-header-cell *matHeaderCellDef>Estado</th>\n                        <td mat-cell *matCellDef=\"let ticket\">{{ ticket.estado }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"comentarios\">\n                        <th mat-header-cell *matHeaderCellDef>Comentarios</th>\n                        <td mat-cell *matCellDef=\"let ticket\">{{ ticket.comentarios || 'Sin comentarios' }}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"acciones\">\n                        <th mat-header-cell *matHeaderCellDef>Acciones</th>\n                        <td mat-cell *matCellDef=\"let ticket\">\n                            <button type=\"button\" mat-icon-button color=\"primary\"\n                                (click)=\"editarTicket(ticket)\" aria-label=\"Editar ticket\">\n                                <mat-icon>edit</mat-icon>\n                            </button>\n                            <button type=\"button\" mat-icon-button class=\"deleteButton\"\n                                (click)=\"eliminarTicket(ticket)\" aria-label=\"Eliminar ticket\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                        </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"columnasTickets\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: columnasTickets;\"></tr>\n                    <tr class=\"mat-row\" *matNoDataRow>\n                        <td class=\"mat-cell\" [attr.colspan]=\"columnasTickets.length\">No hay tickets disponibles.</td>\n                    </tr>\n                </table>\n                }\n\n                <mat-paginator [length]=\"totalRegistros\" [pageSize]=\"tamanoPagina\" [pageIndex]=\"paginaActual\"\n                    [pageSizeOptions]=\"[5, 10, 25, 100]\" (page)=\"onCambiarPagina($event)\"\n                    aria-label=\"Seleccionar p\u00E1gina de tickets\">\n                </mat-paginator>\n            </div>\n        }\n\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n<ng-template #assignmentDialog>\n    <h2 mat-dialog-title>\n        Editar {{ tipoEditando === 'ticket' ? 'ticket' : 'solicitud' }}\n        {{ registroEditando?.folio }}\n    </h2>\n    <mat-dialog-content>\n        <div class=\"assignment-form\">\n            <label for=\"tecnico\">T\u00E9cnico asignado</label>\n            <select id=\"tecnico\" [(ngModel)]=\"tecnicoSeleccionado\" required>\n                <option value=\"\" disabled>Selecciona un t\u00E9cnico</option>\n                <option *ngFor=\"let tecnico of tecnicos\" [value]=\"tecnico._id ?? tecnico.id\">\n                    {{ tecnico.name }} {{ tecnico.last_name }} ({{ tecnico.username }})\n                </option>\n            </select>\n\n            <label for=\"comentariosEdicion\">Comentarios</label>\n            <textarea id=\"comentariosEdicion\" [(ngModel)]=\"comentariosEditando\" rows=\"4\"\n                placeholder=\"Comentarios para el t\u00E9cnico\"></textarea>\n        </div>\n    </mat-dialog-content>\n    <mat-dialog-actions align=\"end\">\n        <button type=\"button\" mat-button (click)=\"cerrarEditor()\" [disabled]=\"guardandoAsignacion\">\n            Cancelar\n        </button>\n        <button type=\"button\" mat-flat-button color=\"primary\" (click)=\"guardarAsignacion()\"\n            [disabled]=\"!tecnicoSeleccionado || guardandoAsignacion\">\n            {{ guardandoAsignacion ? 'Guardando...' : 'Asignar t\u00E9cnico' }}\n        </button>\n    </mat-dialog-actions>\n</ng-template>\n", styles: ["mat-toolbar {\n    background: #0194fe;\n    color: white;\n    top:0;\n    z-index: 2;\n}\n\nmat-sidenav {\n    margin: 16px;\n    width: 200px;\n    border-right: none;\n    background: #0194fe;\n    color: white;\n    border-radius: 10px;\n    padding: 16px;\n    text-align: center;\n}\n\n.content {\n    height: calc(100vh - 98px);\n    border-radius: 10px;\n    margin: 16px;\n    margin-left: 32px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-size: 2rem;\n    color: lightgray;\n}\n\nmat-sidenav-container {\n    height: calc(100vh - 65px);\n    margin-right: 10;\n}\n\nmat-sidenav-container.oculto {\n    transform: translateX(-250px);\n}\n\nmat-toolbar mat-icon,\nmat-sidenav .menu-button mat-icon {\n        margin-right: 8px;\n        color: white;\n    }\n\n.span {\n    color: white;\n    font-size: 1rem;\n    margin-left: 8px;\n}\n\n.menu-button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 1rem;\n\n    .icon {\n        margin-right: 8px;\n        color: white;\n    }\n}\n\n.avatar {\n    margin-top: 16px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.name {\n    margin-top: 8px;\n    font-weight: normal;\n}\n\n.designation {\n    margin-top: 2px;\n    font-size: 0.7rem;\n    color: lightgrey;\n}\n\n.img-login{\n\twidth: auto;\n    height: 40px;\n\tmargin: 20px 5px;\n}\n\nmat-divider {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    background-color: white;\n}\n\n.sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background-color: #2c3e50;\n    color: white;\n    transition: transform 0.3s ease;\n    transform: translateX(0);\n}\n\n.sidebar.oculto {\n    transform: translateX(-250px);\n}\n\n.table-container {\n    margin: 16px;\n    padding: 16px;\n    background-color: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    overflow-x: auto;\n}\n\n.table-container mat-form-field,\n.table-container table,\n.table-container mat-paginator {\n    width: 100%;\n}\n\n.loading-spinner {\n    display: flex;\n    justify-content: center;\n    padding: 32px;\n}\n\n.load-error {\n    margin: 16px 0;\n    padding: 12px;\n    border-radius: 6px;\n    background: #ffebee;\n    color: #b71c1c;\n}\n\n.assignment-form {\n    display: grid;\n    gap: 10px;\n    padding-top: 8px;\n}\n\n.assignment-form select,\n.assignment-form textarea {\n    width: 100%;\n    box-sizing: border-box;\n    border: 1px solid #bdbdbd;\n    border-radius: 6px;\n    padding: 10px;\n    font: inherit;\n}\n\n.mat-row .mat-cell[colspan] {\n    padding: 32px;\n    text-align: center;\n    color: #666;\n}\n\n.mat-mdc-row:hover {\n  background-color: #f5f5f5;\n}\n\n.contenido {\n    margin-left: 250px;\n    transition: margin-left 0.3s ease;\n    padding: 20px;\n}\n\n.contenido.expandido {\n    margin-left: 0;\n}\n\n.media-funcion {\n    float: left;\n    margin: 0 auto;\n    max-width: 100%;\n    height: 30px;\n    padding: 15px 15px;\n    font-size: 14px;\n    background: #0194fe;\n}\n\n.espaciador-flexible {\n  flex: 1 1 auto;\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }, { type: i3.BreakpointObserver }, { type: i0.ChangeDetectorRef }], { assignmentDialog: [{
            type: ViewChild,
            args: ['assignmentDialog']
        }], sidenav: [{
            type: ViewChild,
            args: [MatSidenav]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeSup, { className: "HomeSup", filePath: "app/auth/home-sup/home-sup.ts", lineNumber: 49 }); })();
