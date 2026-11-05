import { ChangeDetectorRef, Component, inject, TemplateRef, ViewChild } from '@angular/core';
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
import { finalize } from 'rxjs';

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
    @ViewChild('maintenanceDialog') maintenanceDialog!: TemplateRef<unknown>;
    @ViewChild('historyDialog') historyDialog!: TemplateRef<unknown>;
    inventoryForm: FormGroup;
    maintenanceForm: FormGroup;
    editingId?: string;
    user: any;

    constructor(
        private authService: AuthService,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef,
    ) {
        this.inventoryForm = new FormGroup({
            type: new FormControl('', Validators.required),
            brand: new FormControl('', Validators.required),
            model: new FormControl('', Validators.required),
            serial_number: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
        });
        this.maintenanceForm = new FormGroup({
            maintenance_type: new FormControl('preventivo', Validators.required),
            description: new FormControl('', [Validators.required, Validators.maxLength(2000)]),
            provider: new FormControl('', Validators.maxLength(200)),
            cost: new FormControl(0, [Validators.required, Validators.min(0)]),
            maintenance_date: new FormControl(this.today(), Validators.required),
            status: new FormControl('completado', Validators.required),
            result: new FormControl('', Validators.maxLength(2000)),
        });
    }
    private http = inject(HttpClient);
    private dialog = inject(MatDialog);
    private dialogRef?: MatDialogRef<unknown>;

    // Configuración de Tabla
    columnasVisibles: string[] = ['id', 'tipo', 'marca', 'modelo', 'estado', 'asignado', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;

    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    selectedItem: any;
    timeline: any[] = [];
    historyLoading = false;
    savingMaintenance = false;

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
        this.changeDetectorRef.markForCheck();

        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);

        this.authService.getItems(params).pipe(
            finalize(() => {
                this.cargando = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe({
            next: (respuesta) => {
                const items = respuesta.items ?? respuesta;
                console.log('Aquí la respuesta:', items);
                // Tu API debe retornar los renglones y el total general de coincidencias
                this.datos.data = Array.isArray(items) ? items : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                console.error('No fue posible cargar el inventario:', error);
                this.datos.data = [];
                this.totalRegistros = 0;
                this.changeDetectorRef.markForCheck();
            },
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

    abrirMantenimiento(item: any) {
        this.selectedItem = item;
        this.maintenanceForm.reset({
            maintenance_type: 'preventivo',
            description: '',
            provider: '',
            cost: 0,
            maintenance_date: this.today(),
            status: 'completado',
            result: '',
        });
        this.dialogRef = this.dialog.open(this.maintenanceDialog, {
            width: '620px',
            maxWidth: '95vw',
            maxHeight: '90vh',
            disableClose: true,
        });
    }

    guardarMantenimiento() {
        const id = this.selectedItem?._id ?? this.selectedItem?.id;
        if (!id || this.maintenanceForm.invalid || this.savingMaintenance) {
            this.maintenanceForm.markAllAsTouched();
            return;
        }
        this.savingMaintenance = true;
        this.authService.createMaintenance(id, this.maintenanceForm.getRawValue()).pipe(
            finalize(() => {
                this.savingMaintenance = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe({
            next: (response) => {
                window.alert(response.message);
                this.cerrarFormulario();
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible registrar el mantenimiento.'),
        });
    }

    abrirHistorial(item: any) {
        const id = item?._id ?? item?.id;
        if (!id) return;
        this.selectedItem = item;
        this.timeline = [];
        this.historyLoading = true;
        this.dialogRef = this.dialog.open(this.historyDialog, {
            width: '760px',
            maxWidth: '96vw',
            maxHeight: '90vh',
            disableClose: false,
        });
        this.authService.getInventoryHistory(id).pipe(
            finalize(() => {
                this.historyLoading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe({
            next: (response) => {
                this.timeline = Array.isArray(response.timeline) ? response.timeline : [];
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible cargar el historial.'),
        });
    }

    actorName(actor: any): string {
        if (!actor) return 'Sistema';
        return [actor.name, actor.last_name].filter(Boolean).join(' ') || actor.username || 'Usuario';
    }

    historyIcon(type: string): string {
        const icons: Record<string, string> = {
            registro: 'add_circle',
            actualizacion: 'edit',
            cambio_estado: 'sync_alt',
            asignacion: 'person_add',
            devolucion: 'assignment_return',
            mantenimiento: 'build',
        };
        return icons[type] ?? 'history';
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

    private today(): string {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        return new Date(now.getTime() - offset).toISOString().slice(0, 10);
    }
}
