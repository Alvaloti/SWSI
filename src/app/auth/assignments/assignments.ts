import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-assignments',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatTableModule,
    ],
    templateUrl: './assignments.html',
    styleUrl: './assignments.css',
})
export class Assignments {
    assignmentForm = new FormGroup({
        inventory_id: new FormControl('', Validators.required),
        user_id: new FormControl('', Validators.required),
        notes: new FormControl(''),
    });

    columnasVisibles = ['equipo', 'serie', 'usuario', 'asignacion', 'devolucion', 'estado', 'observaciones', 'asignadoPor', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    items: any[] = [];
    users: any[] = [];
    cargando = false;
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    activeFilter = '';

    private dialog = inject(MatDialog);
    private dialogRef?: MatDialogRef<unknown>;

    constructor(private authService: AuthService) {
        this.datos.filterPredicate = (assignment, filter) => {
            const searchable = [
                assignment.inventory_id?.brand,
                assignment.inventory_id?.model,
                assignment.inventory_id?.serial_number,
                assignment.user_id?.username,
                assignment.user_id?.name,
                assignment.user_id?.last_name,
                assignment.notes,
                assignment.return_notes,
            ].join(' ').toLowerCase();
            return searchable.includes(filter);
        };
    }

    ngOnInit() {
        this.cargarDatos();
        this.cargarCatalogos();
    }

    cargarDatos() {
        this.cargando = true;
        let params = new HttpParams()
            .set('page', String(this.paginaActual + 1))
            .set('limit', String(this.tamanoPagina));
        if (this.activeFilter) params = params.set('active', this.activeFilter);

        this.authService.getAssignments(params).subscribe({
            next: (response) => {
                this.datos.data = response.assignments ?? [];
                this.totalRegistros = response.total ?? this.datos.data.length;
                this.cargando = false;
            },
            error: (error) => {
                this.cargando = false;
                window.alert(error.error?.message ?? 'No fue posible cargar las asignaciones.');
            },
        });
    }

    cargarCatalogos() {
        this.authService.getItems({ limit: 100 }).subscribe({
            next: (response) => {
                const items = response.items ?? response;
                this.items = Array.isArray(items)
                    ? items.filter((item) => !item.assigned_to && String(item.status).toLowerCase() !== 'baja')
                    : [];
            },
        });
        this.authService.getUsers({ limit: 100 }).subscribe({
            next: (response) => {
                const users = response.users ?? response;
                this.users = Array.isArray(users) ? users.filter((user) => user.active !== false) : [];
            },
        });
    }

    abrirFormulario(template: TemplateRef<unknown>) {
        this.assignmentForm.reset({ inventory_id: '', user_id: '', notes: '' });
        this.dialogRef = this.dialog.open(template, { width: '520px', maxWidth: '95vw', disableClose: true });
    }

    cerrarFormulario() {
        this.dialogRef?.close();
    }

    onSubmit() {
        if (this.assignmentForm.invalid) {
            this.assignmentForm.markAllAsTouched();
            return;
        }
        this.authService.createAssignment(this.assignmentForm.getRawValue()).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Equipo asignado correctamente.');
                this.cerrarFormulario();
                this.cargarDatos();
                this.cargarCatalogos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible asignar el equipo.'),
        });
    }

    registrarDevolucion(assignment: any) {
        const notes = window.prompt('Observaciones de devolución:', '');
        if (notes === null) return;
        if (!window.confirm('¿Confirmar la devolución de este equipo?')) return;
        this.authService.returnAssignment(assignment._id, notes).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Devolución registrada correctamente.');
                this.cargarDatos();
                this.cargarCatalogos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible registrar la devolución.'),
        });
    }

    editarAsignacion(assignment: any) {
        const notes = window.prompt('Observaciones de la asignación:', assignment.notes ?? '');
        if (notes === null) return;

        const update: { notes: string; return_notes?: string } = { notes };
        if (!assignment.active) {
            const returnNotes = window.prompt(
                'Observaciones de devolución:',
                assignment.return_notes ?? '',
            );
            if (returnNotes === null) return;
            update.return_notes = returnNotes;
        }

        this.authService.updateAssignment(assignment._id, update).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Asignación actualizada correctamente.');
                this.cargarDatos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible actualizar la asignación.'),
        });
    }

    eliminarAsignacion(assignment: any) {
        if (!assignment._id || !window.confirm('¿Eliminar esta asignación? Esta acción no se puede deshacer.')) return;

        this.authService.deleteAssignment(assignment._id).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Asignación eliminada correctamente.');
                this.cargarDatos();
                this.cargarCatalogos();
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar la asignación.'),
        });
    }

    onFiltrar(event: Event) {
        this.datos.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    }

    onEstadoChange(event: Event) {
        this.activeFilter = (event.target as HTMLSelectElement).value;
        this.paginaActual = 0;
        this.cargarDatos();
    }

    onCambiarPagina(event: PageEvent) {
        this.paginaActual = event.pageIndex;
        this.tamanoPagina = event.pageSize;
        this.cargarDatos();
    }
}
