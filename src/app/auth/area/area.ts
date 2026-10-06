import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PageEvent, MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatLabel } from "@angular/material/select";
import { MatProgressSpinner, MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-area',
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
    templateUrl: './area.html',
    styleUrl: './area.css',
})
export class Area {
    @ViewChild('areaDialog') areaDialog!: TemplateRef<unknown>;
    areaForm: FormGroup;
    editingId?: string;
    user: any;
    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
    ) {
        this.areaForm = new FormGroup({
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
        console.log('Se ejecuta la función de carga de áreas');
        this.cargando = true;

        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);

        this.authService.getAreas(params).subscribe({
            next: (respuesta) => {
                const areas = respuesta.areas ?? respuesta;
                this.datos.data = Array.isArray(areas) ? areas : [];
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
        this.areaForm.reset({ name: '', description: '', active: true });
        this.dialogRef = this.dialog.open(contenido, {
            width: '480px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }

    cerrarFormulario() {
        this.dialogRef?.close();
    }

    crearArea() {
        const formData = this.areaForm.value;
        const request = this.editingId
            ? this.authService.updateArea(this.editingId, formData)
            : this.authService.createArea(formData);

        request.subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Área guardada correctamente.');
                this.cerrarFormulario();
                this.cargarDatos();
            },
            error: (error) => {
                console.log('Registration failed:', error);
            },
        });
    }

    editarArea(area: any) {
        this.editingId = area._id ?? area.id;
        this.areaForm.patchValue({ name: area.name, description: area.description, active: area.active ?? true });
        this.dialogRef = this.dialog.open(this.areaDialog, {
            width: '480px', maxWidth: '95vw', disableClose: true,
        });
    }

    eliminarArea(area: any) {
        const id = area._id ?? area.id;
        if (!id || !window.confirm(`¿Eliminar el área "${area.name}"?`)) return;

        this.authService.deleteArea(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Área eliminada correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el área.'),
        });
    }

    onSubmit() {
        if (this.areaForm.invalid) {
            this.areaForm.markAllAsTouched();
            return;
        }

        this.crearArea();
    }
}
