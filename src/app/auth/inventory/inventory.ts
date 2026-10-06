import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-inventory',
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
    templateUrl: './inventory.html',
    styleUrl: './inventory.css',
})
export class Inventory {
    @ViewChild('inventoryDialog') inventoryDialog!: TemplateRef<unknown>;
    inventoryForm: FormGroup;
    editingId?: string;
    user: any;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
        this.inventoryForm = new FormGroup({
            type: new FormControl('', Validators.required),
            brand: new FormControl('', Validators.required),
            model: new FormControl('', Validators.required),
            serial_number: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
        });
    }
    private http = inject(HttpClient);
    private dialog = inject(MatDialog);
    private dialogRef?: MatDialogRef<unknown>;

    // Configuración de Tabla
    columnasVisibles: string[] = ['id', 'tipo', 'marca', 'asignado', 'acciones'];
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
        console.log('Se ejecuta la función de carga de categorías');
        this.cargando = true;

        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);

        this.authService.getItems(params).subscribe({
            next: (respuesta) => {
                const items = respuesta.items ?? respuesta;
                console.log('Aquí la respuesta:', items);
                // Tu API debe retornar los renglones y el total general de coincidencias
                this.datos.data = Array.isArray(items) ? items : [];
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
        this.inventoryForm.reset({
            type: '',
            brand: '',
            model: '',
            serial_number: '',
            status: '',
        });
        this.dialogRef = this.dialog.open(contenido, {
            width: '480px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }

    cerrarFormulario() {
        this.dialogRef?.close();
    }

    editarItem(item: any) {
        this.editingId = item._id ?? item.id;
        this.inventoryForm.patchValue({
            type: item.type,
            brand: item.brand,
            model: item.model,
            serial_number: item.serial_number,
            status: item.status,
        });
        this.dialogRef = this.dialog.open(this.inventoryDialog, {
            width: '480px', maxWidth: '95vw', disableClose: true,
        });
    }

    eliminarItem(item: any) {
        const id = item._id ?? item.id;
        if (!id || !window.confirm(`¿Eliminar el equipo con serie "${item.serial_number}"?`)) return;

        this.authService.deleteItem(id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Equipo eliminado correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el equipo.'),
        });
    }

    onSubmit() {
        if (this.inventoryForm.invalid) {
            this.inventoryForm.markAllAsTouched();
            return;
        }

        const formData = this.inventoryForm.value;
        console.log('Form Data:', formData);
        const request = this.editingId
            ? this.authService.updateItem(this.editingId, formData)
            : this.authService.createItem(formData);

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
}
