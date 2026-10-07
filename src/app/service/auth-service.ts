import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    deleteUser(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/users/${id}`, { withCredentials: true });
    }

    updateUser(id: string, user: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/users/${id}`, user, { withCredentials: true });
    }
    baseUrl = 'https://138.68.20.40:5001/api';

    constructor(private http: HttpClient) {}

    register(user: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/register`, user, { withCredentials: true });
    }

    login(user: any): Observable<any> {
        console.log(sessionStorage.getItem('token'));
        return this.http.post(`${this.baseUrl}/login`, user, { withCredentials: true });
    }

    getUser(): Observable<any> {
        return this.http.get(`${this.baseUrl}/user`, { withCredentials: true });
    }

    updateProfile(profile: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/profile`, profile, { withCredentials: true });
    }

    getUsers(params?: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/users`, { params, withCredentials: true });
    }

    logout(): Observable<any> {
        return this.http
            .post(`${this.baseUrl}/logout`, {}, { withCredentials: true })
            .pipe(tap(() => this.clearClientSession()));
    }

    clearClientSession(): void {
        sessionStorage.clear();
        localStorage.removeItem('token');
    }

    getSolicitudes(params?: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/getSolicitudes`, { params, withCredentials: true });
    }

    createSolicitud(solicitud: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/createSolicitud`, solicitud, { withCredentials: true });
    }

    getTickets(params?: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/getTickets`, { params, withCredentials: true });
    }

    getEstados(): Observable<{ status: string; estados: string[] }> {
        return this.http.get<{ status: string; estados: string[] }>(`${this.baseUrl}/estados`, {
            withCredentials: true,
        });
    }

    createTicket(ticket: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/createTicket`, ticket, { withCredentials: true });
    }
    getRoles(params?: any): Observable<any> {
        return this.http.get<any[]>(`${this.baseUrl}/getRoles`, { params, withCredentials: true });
    }

    getRegistrationRoles(): Observable<{ status: string; roles: Array<{ _id: string; name: string }> }> {
        return this.http.get<{ status: string; roles: Array<{ _id: string; name: string }> }>(
            `${this.baseUrl}/getRolesForUser`, { withCredentials: true }
        );
    }

    createRole(role:any): Observable<any> {
        return this.http.post(`${this.baseUrl}/createRole`, role, { withCredentials: true });
    }

    updateRole(id: string, role: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/roles/${id}`, role, { withCredentials: true });
    }

    deleteRole(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/roles/${id}`, { withCredentials: true });
    }

    getAreas(params?: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/getAreas`, { params, withCredentials: true });
    }

    createArea(area:any): Observable<any> {
        return this.http.post(`${this.baseUrl}/createArea`, area, { withCredentials: true });
    }

    updateArea(id: string, area: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/areas/${id}`, area, { withCredentials: true });
    }

    deleteArea(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/areas/${id}`, { withCredentials: true });
    }

    getCategories(params?: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/getCategories`, { params, withCredentials: true });
    }

    createCategory(category:any): Observable<any> {
        return this.http.post(`${this.baseUrl}/createCategory`, category, { withCredentials: true });
    }

    updateCategory(id: string, category: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/categories/${id}`, category, { withCredentials: true });
    }

    deleteCategory(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/categories/${id}`, { withCredentials: true });
    }

    getItems(params?: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/getItems`, { params, withCredentials: true });
    }

    createItem(item:any): Observable<any> {
        return this.http.post(`${this.baseUrl}/createItem`, item, { withCredentials: true });
    }

    updateItem(id: string, item: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/items/${id}`, item, { withCredentials: true });
    }

    deleteItem(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/items/${id}`, { withCredentials: true });
    }

    updateSolicitud(id: string, solicitud: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/solicitudes/${id}`, solicitud, { withCredentials: true });
    }

    deleteSolicitud(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/solicitudes/${id}`, { withCredentials: true });
    }

    updateTicket(id: string, ticket: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/tickets/${id}`, ticket, { withCredentials: true });
    }

    deleteTicket(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/tickets/${id}`, { withCredentials: true });
    }

    getAssignments(params?: any): Observable<any> {
        return this.http.get(`${this.baseUrl}/assignments`, { params, withCredentials: true });
    }

    createAssignment(assignment: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/assignments`, assignment, { withCredentials: true });
    }

    updateAssignment(id: string, assignment: { notes?: string; return_notes?: string }): Observable<any> {
        return this.http.put(`${this.baseUrl}/assignments/${id}`, assignment, { withCredentials: true });
    }

    deleteAssignment(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/assignments/${id}`, { withCredentials: true });
    }

    returnAssignment(id: string, return_notes: string): Observable<any> {
        return this.http.patch(
            `${this.baseUrl}/assignments/${id}/return`,
            { return_notes },
            { withCredentials: true },
        );
    }
}
