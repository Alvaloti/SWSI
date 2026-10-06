import { Component, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-users',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatProgressSpinner,
        MatPaginator,
        MatIcon,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
    ],
    templateUrl: './users.html',
    styleUrl: './users.css',
})
export class Users {
    @ViewChild('userDialog') userDialog!: TemplateRef<unknown>;
    @Input() roleFilter = '';
    @Input() titulo = 'Usuarios';
    registerForm: FormGroup;
    editingId?: string;
    user: any;
    elementos: any[] = [];
    areas: any[] = [];
    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
    ) {
        this.registerForm = new FormGroup({
            username: new FormControl('', Validators.required),
            nomina: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
            name: new FormControl('', Validators.required),
            last_name: new FormControl('', Validators.required),
            rolId: new FormControl('', Validators.required),
            area: new FormControl(''),
            active: new FormControl(true),
        });
    }

    private http = inject(HttpClient);
    private dialog = inject(MatDialog);
    private dialogRef?: MatDialogRef<unknown>;

    // Configuración de Tabla
    columnasVisibles: string[] = ['id', 'usuario', 'email', 'name', 'last_name','rol', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;

    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';

    ngOnInit() {
        this.cargarDatos();
        this.cargarRoles();
        this.cargarAreas();

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

    cargarRoles() {
        this.authService.getRoles().subscribe({
            next: (respuesta) => {
                const roles = respuesta.roles ?? respuesta;
                this.elementos = Array.isArray(roles) ? roles : [];
            },
            error: (error) => console.error('Error al cargar los roles:', error),
        });
    }

    cargarAreas() {
        this.authService.getAreas().subscribe({
            next: (respuesta) => {
                const areas = respuesta.areas ?? respuesta;
                this.areas = Array.isArray(areas) ? areas.filter((area) => area.active !== false) : [];
            },
            error: (error) => console.error('Error al cargar las áreas:', error),
        });
    }

    cargarDatos() {
        console.log('Se ejecuta la función de carga de usuarios');
        this.cargando = true;

        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda)
            .set('role', this.roleFilter);

        this.authService.getUsers(params).subscribe({
            next: (respuesta) => {
                const usuarios = respuesta.users ?? respuesta;
                console.log('Aquí la respuesta:', usuarios);
                // Tu API debe retornar los renglones y el total general de coincidencias
                this.datos.data = Array.isArray(usuarios) ? usuarios : [];
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
        this.registerForm.get('password')?.setValidators([Validators.required, Validators.minLength(8)]);
        this.registerForm.get('password')?.updateValueAndValidity();
        this.registerForm.reset({
            username: '',
            nomina: '',
            email: '',
            password: '',
            name: '',
            last_name: '',
            rolId: '',
            area: '',
            active: true,
        });
        this.dialogRef = this.dialog.open(contenido, {
            height:'flex',
            width: '600px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }

    cerrarFormulario() {
        this.dialogRef?.close();
    }

    eliminarUsuario(usuario: any) {
        const id = usuario._id ?? usuario.id;

        if (!id) {
            window.alert('No se encontró el identificador del usuario.');
            return;
        }

        if (!window.confirm(`¿Eliminar al usuario "${usuario.username}"?`)) return;

        this.authService.deleteUser(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Usuario eliminado correctamente.');
                this.cargarDatos();
            },
            error: (error) => {
                console.error('Error al eliminar usuario:', error);
                window.alert(error.error?.message ?? 'No fue posible eliminar el usuario.');
            },
        });
    }

    editarUsuario(usuario: any) {
        this.editingId = usuario._id ?? usuario.id;
        const passwordControl = this.registerForm.get('password');
        passwordControl?.setValidators([Validators.minLength(8)]);

        this.registerForm.reset({
            username: usuario.username ?? '',
            nomina: usuario.nomina ?? '',
            email: usuario.email ?? '',
            password: '',
            name: usuario.name ?? '',
            last_name: usuario.last_name ?? '',
            rolId: usuario.rolId?._id ?? usuario.rolId ?? '',
            area: usuario.area?._id ?? usuario.area ?? '',
            active: usuario.active ?? true,
        });
        passwordControl?.updateValueAndValidity();
        this.dialogRef = this.dialog.open(this.userDialog, {
            width: '560px', maxWidth: '95vw', disableClose: true,
        });
    }

    onSubmit() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        const formData = this.registerForm.getRawValue();
        if (this.editingId && !formData.password) delete formData.password;

        const request = this.editingId
            ? this.authService.updateUser(this.editingId, formData)
            : this.authService.register(formData);

        request.subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Usuario registrado correctamente.');
                this.cerrarFormulario();
                this.cargarDatos();
            },
            error: (error) => {
                console.error('Error al registrar usuario:', error);
                window.alert(error.error?.message ?? 'No fue posible registrar el usuario.');
            },
        });
    }
}
