import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    deleteUser(id: string): Observable<any> {
        return this.http.delete(`/api/users/${id}`, { withCredentials: true });
    }

    updateUser(id: string, user: any): Observable<any> {
        return this.http.put(`/api/users/${id}`, user, { withCredentials: true });
    }
    baseUrl = 'http://138.68.20.40:5001/api';

    constructor(private http: HttpClient) {}

    register(user: any): Observable<any> {
        return this.http.post(`/api/register`, user, { withCredentials: true });
    }

    login(user: any): Observable<any> {
        console.log(sessionStorage.getItem('token'));
        return this.http.post(`/api/login`, user, { withCredentials: true });
    }

    getUser(): Observable<any> {
        return this.http.get(`/api/user`, { withCredentials: true });
    }

    updateProfile(profile: any): Observable<any> {
        return this.http.put(`/api/profile`, profile, { withCredentials: true });
    }

    getUsers(params?: any): Observable<any> {
        return this.http.get(`/api/users`, { params, withCredentials: true });
    }

    logout(): Observable<any> {
        return this.http
            .post(`/api/logout`, {}, { withCredentials: true })
            .pipe(tap(() => this.clearClientSession()));
    }

    clearClientSession(): void {
        sessionStorage.clear();
        localStorage.removeItem('token');
    }

    getSolicitudes(params?: any): Observable<any> {
        return this.http.get(`/api/getSolicitudes`, { params, withCredentials: true });
    }

    createSolicitud(solicitud: any): Observable<any> {
        return this.http.post(`/api/createSolicitud`, solicitud, { withCredentials: true });
    }

    getTickets(params?: any): Observable<any> {
        return this.http.get(`/api/getTickets`, { params, withCredentials: true });
    }

    getEstados(): Observable<{ status: string; estados: string[] }> {
        return this.http.get<{ status: string; estados: string[] }>(`/api/estados`, {
            withCredentials: true,
        });
    }

    createTicket(ticket: any): Observable<any> {
        return this.http.post(`/api/createTicket`, ticket, { withCredentials: true });
    }
    getRoles(params?: any): Observable<any> {
        return this.http.get<any[]>(`/api/getRoles`, { params, withCredentials: true });
    }

    getRegistrationRoles(): Observable<{ status: string; roles: Array<{ _id: string; name: string }> }> {
        return this.http.get<{ status: string; roles: Array<{ _id: string; name: string }> }>(
            `/api/getRolesForUser`, { withCredentials: true }
        );
    }

    createRole(role:any): Observable<any> {
        return this.http.post(`/api/createRole`, role, { withCredentials: true });
    }

    updateRole(id: string, role: any): Observable<any> {
        return this.http.put(`/api/roles/${id}`, role, { withCredentials: true });
    }

    deleteRole(id: string): Observable<any> {
        return this.http.delete(`/api/roles/${id}`, { withCredentials: true });
    }

    getAreas(params?: any): Observable<any> {
        return this.http.get(`/api/getAreas`, { params, withCredentials: true });
    }

    createArea(area:any): Observable<any> {
        return this.http.post(`/api/createArea`, area, { withCredentials: true });
    }

    updateArea(id: string, area: any): Observable<any> {
        return this.http.put(`/api/areas/${id}`, area, { withCredentials: true });
    }

    deleteArea(id: string): Observable<any> {
        return this.http.delete(`/api/areas/${id}`, { withCredentials: true });
    }

    getCategories(params?: any): Observable<any> {
        return this.http.get(`/api/getCategories`, { params, withCredentials: true });
    }

    createCategory(category:any): Observable<any> {
        return this.http.post(`/api/createCategory`, category, { withCredentials: true });
    }

    updateCategory(id: string, category: any): Observable<any> {
        return this.http.put(`/api/categories/${id}`, category, { withCredentials: true });
    }

    deleteCategory(id: string): Observable<any> {
        return this.http.delete(`/api/categories/${id}`, { withCredentials: true });
    }

    getItems(params?: any): Observable<any> {
        return this.http.get(`/api/getItems`, { params, withCredentials: true });
    }

    createItem(item:any): Observable<any> {
        return this.http.post(`/api/createItem`, item, { withCredentials: true });
    }

    updateItem(id: string, item: any): Observable<any> {
        return this.http.put(`/api/items/${id}`, item, { withCredentials: true });
    }

    deleteItem(id: string): Observable<any> {
        return this.http.delete(`/api/items/${id}`, { withCredentials: true });
    }

    updateSolicitud(id: string, solicitud: any): Observable<any> {
        return this.http.put(`/api/solicitudes/${id}`, solicitud, { withCredentials: true });
    }

    deleteSolicitud(id: string): Observable<any> {
        return this.http.delete(`/api/solicitudes/${id}`, { withCredentials: true });
    }

    updateTicket(id: string, ticket: any): Observable<any> {
        return this.http.put(`/api/tickets/${id}`, ticket, { withCredentials: true });
    }

    deleteTicket(id: string): Observable<any> {
        return this.http.delete(`/api/tickets/${id}`, { withCredentials: true });
    }

    getAssignments(params?: any): Observable<any> {
        return this.http.get(`/api/assignments`, { params, withCredentials: true });
    }

    createAssignment(assignment: any): Observable<any> {
        return this.http.post(`/api/assignments`, assignment, { withCredentials: true });
    }

    updateAssignment(id: string, assignment: { notes?: string; return_notes?: string }): Observable<any> {
        return this.http.put(`/api/assignments/${id}`, assignment, { withCredentials: true });
    }

    deleteAssignment(id: string): Observable<any> {
        return this.http.delete(`/api/assignments/${id}`, { withCredentials: true });
    }

    returnAssignment(id: string, return_notes: string): Observable<any> {
        return this.http.patch(
            `/api/assignments/${id}/return`,
            { return_notes },
            { withCredentials: true },
        );
    }
}
