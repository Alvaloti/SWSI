import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../service/auth-service';

type ReportType = 'solicitudes' | 'tickets' | 'tecnicos';

interface ReportSummary {
    solicitudes: number;
    tickets: number;
    sin_asignar: number;
    cerrados: number;
    estados_solicitudes: Array<{ estado: string; total: number }>;
    estados_tickets: Array<{ estado: string; total: number }>;
}

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatTableModule,
    ],
    templateUrl: './reports.html',
    styleUrl: './reports.css',
})
export class Reports {
    reportType: ReportType = 'solicitudes';
    from = '';
    to = '';
    search = '';
    rows: any[] = [];
    summary: ReportSummary = this.emptySummary();
    loading = false;
    errorMessage = '';
    total = 0;
    pageIndex = 0;
    pageSize = 10;

    readonly workItemColumns = ['folio', 'asunto', 'estado', 'prioridad', 'solicitante', 'tecnico', 'fecha'];
    readonly technicianColumns = ['tecnico', 'email', 'area', 'asignados', 'cerrados', 'pendientes', 'activo'];

    constructor(private readonly authService: AuthService) {}

    ngOnInit(): void {
        this.loadReport();
    }

    get displayedColumns(): string[] {
        return this.reportType === 'tecnicos' ? this.technicianColumns : this.workItemColumns;
    }

    generateReport(): void {
        this.pageIndex = 0;
        this.loadReport();
    }

    changeType(): void {
        this.search = '';
        this.pageIndex = 0;
        this.loadReport();
    }

    changePage(event: PageEvent): void {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.loadReport();
    }

    loadReport(): void {
        this.loading = true;
        this.errorMessage = '';
        let params = new HttpParams()
            .set('type', this.reportType)
            .set('page', String(this.pageIndex + 1))
            .set('limit', String(this.pageSize));
        if (this.from) params = params.set('from', this.from);
        if (this.to) params = params.set('to', this.to);
        if (this.search.trim()) params = params.set('search', this.search.trim());

        this.authService.getReports(params).subscribe({
            next: (response) => {
                this.rows = Array.isArray(response.rows) ? response.rows : [];
                this.summary = response.summary ?? this.emptySummary();
                this.total = Number(response.total) || 0;
                this.loading = false;
            },
            error: (error) => {
                this.rows = [];
                this.total = 0;
                this.loading = false;
                this.errorMessage = error.error?.message ?? 'No fue posible generar el reporte.';
            },
        });
    }

    subject(row: any): string {
        return row.tipo ?? row.titulo ?? 'Sin asunto';
    }

    personName(person: any): string {
        if (!person) return 'Sin asignar';
        return [person.name, person.last_name].filter(Boolean).join(' ') || person.username || 'Sin nombre';
    }

    pending(row: any): number {
        return Math.max(0, Number(row.asignados || 0) - Number(row.cerrados || 0));
    }

    private emptySummary(): ReportSummary {
        return {
            solicitudes: 0,
            tickets: 0,
            sin_asignar: 0,
            cerrados: 0,
            estados_solicitudes: [],
            estados_tickets: [],
        };
    }
}
