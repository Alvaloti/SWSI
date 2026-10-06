import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    http;
    deleteUser(id) {
        return this.http.delete(`${this.baseUrl}/users/${id}`, { withCredentials: true });
    }
    updateUser(id, user) {
        return this.http.put(`${this.baseUrl}/users/${id}`, user, { withCredentials: true });
    }
    baseUrl = 'http://localhost:5001/api';
    constructor(http) {
        this.http = http;
    }
    register(user) {
        return this.http.post(`${this.baseUrl}/register`, user, { withCredentials: true });
    }
    login(user) {
        console.log(sessionStorage.getItem('token'));
        return this.http.post(`${this.baseUrl}/login`, user, { withCredentials: true });
    }
    getUser() {
        return this.http.get(`${this.baseUrl}/user`, { withCredentials: true });
    }
    updateProfile(profile) {
        return this.http.put(`${this.baseUrl}/profile`, profile, { withCredentials: true });
    }
    getUsers(params) {
        return this.http.get(`${this.baseUrl}/users`, { params, withCredentials: true });
    }
    logout() {
        return this.http
            .post(`${this.baseUrl}/logout`, {}, { withCredentials: true })
            .pipe(tap(() => this.clearClientSession()));
    }
    clearClientSession() {
        sessionStorage.clear();
        localStorage.removeItem('token');
    }
    getSolicitudes(params) {
        return this.http.get(`${this.baseUrl}/getSolicitudes`, { params, withCredentials: true });
    }
    createSolicitud(solicitud) {
        return this.http.post(`${this.baseUrl}/createSolicitud`, solicitud, { withCredentials: true });
    }
    getTickets(params) {
        return this.http.get(`${this.baseUrl}/getTickets`, { params, withCredentials: true });
    }
    getEstados() {
        return this.http.get(`${this.baseUrl}/estados`, {
            withCredentials: true,
        });
    }
    createTicket(ticket) {
        return this.http.post(`${this.baseUrl}/createTicket`, ticket, { withCredentials: true });
    }
    getRoles(params) {
        return this.http.get(`${this.baseUrl}/getRoles`, { params, withCredentials: true });
    }
    getRegistrationRoles() {
        return this.http.get(`${this.baseUrl}/getRolesForUser`, { withCredentials: true });
    }
    createRole(role) {
        return this.http.post(`${this.baseUrl}/createRole`, role, { withCredentials: true });
    }
    updateRole(id, role) {
        return this.http.put(`${this.baseUrl}/roles/${id}`, role, { withCredentials: true });
    }
    deleteRole(id) {
        return this.http.delete(`${this.baseUrl}/roles/${id}`, { withCredentials: true });
    }
    getAreas(params) {
        return this.http.get(`${this.baseUrl}/getAreas`, { params, withCredentials: true });
    }
    createArea(area) {
        return this.http.post(`${this.baseUrl}/createArea`, area, { withCredentials: true });
    }
    updateArea(id, area) {
        return this.http.put(`${this.baseUrl}/areas/${id}`, area, { withCredentials: true });
    }
    deleteArea(id) {
        return this.http.delete(`${this.baseUrl}/areas/${id}`, { withCredentials: true });
    }
    getCategories(params) {
        return this.http.get(`${this.baseUrl}/getCategories`, { params, withCredentials: true });
    }
    createCategory(category) {
        return this.http.post(`${this.baseUrl}/createCategory`, category, { withCredentials: true });
    }
    updateCategory(id, category) {
        return this.http.put(`${this.baseUrl}/categories/${id}`, category, { withCredentials: true });
    }
    deleteCategory(id) {
        return this.http.delete(`${this.baseUrl}/categories/${id}`, { withCredentials: true });
    }
    getItems(params) {
        return this.http.get(`${this.baseUrl}/getItems`, { params, withCredentials: true });
    }
    createItem(item) {
        return this.http.post(`${this.baseUrl}/createItem`, item, { withCredentials: true });
    }
    updateItem(id, item) {
        return this.http.put(`${this.baseUrl}/items/${id}`, item, { withCredentials: true });
    }
    deleteItem(id) {
        return this.http.delete(`${this.baseUrl}/items/${id}`, { withCredentials: true });
    }
    updateSolicitud(id, solicitud) {
        return this.http.put(`${this.baseUrl}/solicitudes/${id}`, solicitud, { withCredentials: true });
    }
    deleteSolicitud(id) {
        return this.http.delete(`${this.baseUrl}/solicitudes/${id}`, { withCredentials: true });
    }
    updateTicket(id, ticket) {
        return this.http.put(`${this.baseUrl}/tickets/${id}`, ticket, { withCredentials: true });
    }
    deleteTicket(id) {
        return this.http.delete(`${this.baseUrl}/tickets/${id}`, { withCredentials: true });
    }
    getAssignments(params) {
        return this.http.get(`${this.baseUrl}/assignments`, { params, withCredentials: true });
    }
    createAssignment(assignment) {
        return this.http.post(`${this.baseUrl}/assignments`, assignment, { withCredentials: true });
    }
    updateAssignment(id, assignment) {
        return this.http.put(`${this.baseUrl}/assignments/${id}`, assignment, { withCredentials: true });
    }
    deleteAssignment(id) {
        return this.http.delete(`${this.baseUrl}/assignments/${id}`, { withCredentials: true });
    }
    returnAssignment(id, return_notes) {
        return this.http.patch(`${this.baseUrl}/assignments/${id}/return`, { return_notes }, { withCredentials: true });
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
