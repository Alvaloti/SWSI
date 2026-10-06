import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-role',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatTableModule,
        MatFormField,
        MatLabel,
        MatProgressSpinner,
        MatIcon,
        MatPaginator,
        MatFormField,
        MatLabel,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatDialogModule,
    ],
    templateUrl: './role.html',
    styleUrl: './role.css',
})
export class Role {
    @ViewChild('roleDialog') roleDialog!: TemplateRef<unknown>;
    roleForm: FormGroup;
    editingId?: string;
    user: any;

    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
    ) {
        this.roleForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            active: new FormControl(true),
        });
    }

    private http = inject(HttpClient);
    private dialog = inject(MatDialog);
    private dialogRef?: MatDialogRef<unknown>;

    // Configuración de Tabla
    columnasVisibles: string[] = ['id', 'nombre', 'descripción', 'activa', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;

    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';

    ngOnInit() {
        this.cargarDatos();
        this.authService.getUser().subscribe({
            next: (response) => {
                console.log('User data:', response);
                if (response.status === 'success') {
                    this.user = response.user;
                } else {
                    console.log('Failed to fetch user data');
                }
            },
            error: (error) => {
                console.log('Failed to fetch user data:', error);
            },
        });
    }

    cargarDatos() {
        console.log('Se ejecuta la función de carga de roles');
        this.cargando = true;

        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);

        this.authService.getRoles(params).subscribe({
            next: (respuesta) => {
                const roles = respuesta.roles ?? respuesta;
                this.datos.data = Array.isArray(roles) ? roles : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.cargando = false;
            },
            error: () => (this.cargando = false),
        });
    }

    onFiltrar(evento: Event) {
        const valorFiltro = (evento.target as HTMLInputElement).value;
        this.filtroBusqueda = valorFiltro.trim().toLowerCase();
        this.paginaActual = 0; // Reiniciar a la primera página tras filtrar
        this.cargarDatos();
    }

    onCambiarPagina(evento: PageEvent) {
        this.paginaActual = evento.pageIndex;
        this.tamanoPagina = evento.pageSize;
        this.cargarDatos();
    }

    abrirFormulario(contenido: TemplateRef<unknown>) {
        this.editingId = undefined;
        this.roleForm.reset({ name: '', description: '', active: true });
        this.dialogRef = this.dialog.open(contenido, {
            width: '480px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }

    cerrarFormulario() {
        this.dialogRef?.close();
    }

    crearRole() {
        const formData = this.roleForm.value;
        console.log('Form Data:', formData);
        const request = this.editingId
            ? this.authService.updateRole(this.editingId, formData)
            : this.authService.createRole(formData);

        request.subscribe({
            next: (response) => {
                console.log('Registration successful:', response);
                window.alert(response.message);
                this.cerrarFormulario();
                this.cargarDatos();
            },
            error: (error) => {
                console.log('Registration failed:', error);
            },
        });
    }

    editarRole(role: any) {
        this.editingId = role._id ?? role.id;
        this.roleForm.patchValue({ name: role.name, description: role.description, active: role.active ?? true });
        this.dialogRef = this.dialog.open(this.roleDialog, {
            width: '480px', maxWidth: '95vw', disableClose: true,
        });
    }

    eliminarRole(role: any) {
        const id = role._id ?? role.id;
        if (!id || !window.confirm(`¿Eliminar el rol "${role.name}"?`)) return;

        this.authService.deleteRole(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Rol eliminado correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el rol.'),
        });
    }

    onSubmit() {
        if (this.roleForm.invalid) {
            this.roleForm.markAllAsTouched();
            return;
        }

        this.crearRole();
    }
}
