import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { finalize } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../service/auth-service';

type ReportType = 'solicitudes' | 'tickets' | 'tecnicos' | 'inventario';

interface ChartItem {
    estado: string;
    total: number;
}

interface ReportSummary {
    solicitudes: number;
    tickets: number;
    sin_asignar: number;
    cerrados: number;
    estados_solicitudes: Array<{ estado: string; total: number }>;
    estados_tickets: Array<{ estado: string; total: number }>;
    inventario: number;
    inventario_asignado: number;
    inventario_disponible: number;
    inventario_baja: number;
    estados_inventario: ChartItem[];
    tipos_inventario: ChartItem[];
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
    exporting = false;
    errorMessage = '';
    exportError = '';
    total = 0;
    pageIndex = 0;
    pageSize = 10;

    readonly workItemColumns = ['folio', 'asunto', 'estado', 'prioridad', 'solicitante', 'tecnico', 'fecha'];
    readonly technicianColumns = ['tecnico', 'email', 'area', 'asignados', 'cerrados', 'pendientes', 'activo'];
    readonly inventoryColumns = ['id', 'tipoEquipo', 'marca', 'modelo', 'serie', 'estado', 'asignadoA', 'fecha'];

    constructor(
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.loadReport();
    }

    get displayedColumns(): string[] {
        if (this.reportType === 'tecnicos') return this.technicianColumns;
        if (this.reportType === 'inventario') return this.inventoryColumns;
        return this.workItemColumns;
    }

    get summaryCards(): Array<{ label: string; value: number; icon: string; style: string }> {
        if (this.reportType === 'inventario') {
            return [
                { label: 'Equipos', value: this.summary.inventario, icon: 'devices', style: '' },
                { label: 'Asignados', value: this.summary.inventario_asignado, icon: 'assignment_ind', style: '' },
                { label: 'Sin asignar', value: this.summary.inventario_disponible, icon: 'inventory_2', style: 'warning' },
                { label: 'Dados de baja', value: this.summary.inventario_baja, icon: 'delete_forever', style: 'danger' },
            ];
        }
        return [
            { label: 'Solicitudes', value: this.summary.solicitudes, icon: 'assignment', style: '' },
            { label: 'Tickets', value: this.summary.tickets, icon: 'confirmation_number', style: '' },
            { label: 'Sin asignar', value: this.summary.sin_asignar, icon: 'person_off', style: 'warning' },
            { label: 'Resueltos o cerrados', value: this.summary.cerrados, icon: 'task_alt', style: 'success' },
        ];
    }

    get chartGroups(): Array<{ title: string; items: ChartItem[]; style: string }> {
        if (this.reportType === 'inventario') {
            return [
                { title: 'Inventario por estado', items: this.summary.estados_inventario, style: 'primary' },
                { title: 'Inventario por tipo', items: this.summary.tipos_inventario, style: 'secondary' },
            ];
        }
        if (this.reportType === 'tecnicos') {
            const assigned = this.rows.map((row) => ({ estado: this.personName(row), total: Number(row.asignados) || 0 }));
            const closed = this.rows.map((row) => ({ estado: this.personName(row), total: Number(row.cerrados) || 0 }));
            return [
                { title: 'Carga asignada por técnico (página actual)', items: assigned, style: 'primary' },
                { title: 'Casos cerrados por técnico (página actual)', items: closed, style: 'secondary' },
            ];
        }
        return [
            { title: 'Solicitudes por estado', items: this.summary.estados_solicitudes, style: 'primary' },
            { title: 'Tickets por estado', items: this.summary.estados_tickets, style: 'secondary' },
        ];
    }

    chartPercent(item: ChartItem, items: ChartItem[]): number {
        if ((Number(item.total) || 0) <= 0) return 0;
        const maximum = Math.max(...items.map((entry) => Number(entry.total) || 0), 1);
        return Math.max(2, Math.round(((Number(item.total) || 0) / maximum) * 100));
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
        this.exportError = '';
        this.changeDetectorRef.markForCheck();
        const params = this.reportParams(false);

        this.authService.getReports(params).pipe(
            finalize(() => {
                this.loading = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe({
            next: (response) => {
                this.rows = Array.isArray(response.rows) ? response.rows : [];
                this.summary = response.summary ?? this.emptySummary();
                this.total = Number(response.total) || 0;
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                this.rows = [];
                this.total = 0;
                this.errorMessage = error.error?.message ?? 'No fue posible generar el reporte.';
                this.changeDetectorRef.markForCheck();
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

    async exportExcel(): Promise<void> {
        if (this.exporting) return;
        this.exporting = true;
        this.exportError = '';
        this.changeDetectorRef.markForCheck();
        try {
            const response = await this.exportData();
            const { default: writeXlsxFile } = await import('write-excel-file/browser');
            const columns = this.exportColumns();
            const headerStyle = {
                backgroundColor: '#003871',
                color: '#FFFFFF',
                fontWeight: 'bold',
                align: 'center' as const,
                verticalAlign: 'center' as const,
            };
            const titleStyle = { fontWeight: 'bold', fontSize: 16, color: '#003871' };
            const data: any[][] = [
                [{ value: `Reporte de ${this.reportLabel()}`, ...titleStyle, span: columns.length }],
                [{ value: `Generado: ${this.formatDate(new Date())}`, span: columns.length }],
                [{ value: this.filterDescription(), span: columns.length }],
                [],
                this.summaryPairs(response.summary).flatMap((item) => [
                    { value: item.label, fontWeight: 'bold' },
                    { value: Number(item.value) || 0, type: Number },
                ]),
                [],
                columns.map((column) => ({ value: column.label, type: String, ...headerStyle })),
                ...response.rows.map((row: any) => columns.map((column) => column.excel(row))),
            ];

            const workbook = writeXlsxFile(data, {
                columns: columns.map((column) => ({ width: column.width })),
                sheet: 'Reporte',
                stickyRowsCount: 7,
            });
            await workbook.toFile(this.exportFileName('xlsx'));
        } catch (error: any) {
            this.exportError = error?.error?.message ?? error?.message ?? 'No fue posible exportar el reporte a Excel.';
        } finally {
            this.exporting = false;
            this.changeDetectorRef.markForCheck();
        }
    }

    async exportPdf(): Promise<void> {
        if (this.exporting) return;
        this.exporting = true;
        this.exportError = '';
        this.changeDetectorRef.markForCheck();
        try {
            const response = await this.exportData();
            const [{ jsPDF }, { default: autoTable }] = await Promise.all([
                import('jspdf'),
                import('jspdf-autotable'),
            ]);
            const columns = this.exportColumns();
            const document = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
            document.setTextColor(0, 56, 113);
            document.setFontSize(17);
            document.text(`Reporte de ${this.reportLabel()}`, 14, 15);
            document.setTextColor(70, 70, 70);
            document.setFontSize(9);
            document.text(`Generado: ${this.formatDate(new Date())}`, 14, 22);
            document.text(this.filterDescription(), 14, 27);
            document.setFontSize(10);
            document.text(this.summaryPairs(response.summary).map((item) => `${item.label}: ${item.value}`).join('   '), 14, 34);

            autoTable(document, {
                startY: 40,
                head: [columns.map((column) => column.label)],
                body: response.rows.map((row: any) => columns.map((column) => column.pdf(row))),
                theme: 'grid',
                styles: { fontSize: 8, cellPadding: 2, overflow: 'linebreak' },
                headStyles: { fillColor: [0, 56, 113], textColor: 255, fontStyle: 'bold' },
                alternateRowStyles: { fillColor: [244, 249, 255] },
                margin: { top: 14, right: 14, bottom: 14, left: 14 },
            });

            const pages = document.getNumberOfPages();
            for (let page = 1; page <= pages; page += 1) {
                document.setPage(page);
                document.setFontSize(8);
                document.setTextColor(100, 100, 100);
                document.text(
                    `SWSI - Página ${page} de ${pages}`,
                    document.internal.pageSize.getWidth() - 14,
                    document.internal.pageSize.getHeight() - 6,
                    { align: 'right' },
                );
            }
            document.save(this.exportFileName('pdf'));
        } catch (error: any) {
            this.exportError = error?.error?.message ?? error?.message ?? 'No fue posible exportar el reporte a PDF.';
        } finally {
            this.exporting = false;
            this.changeDetectorRef.markForCheck();
        }
    }

    private reportParams(exportAll: boolean): HttpParams {
        let params = new HttpParams()
            .set('type', this.reportType)
            .set('page', exportAll ? '1' : String(this.pageIndex + 1))
            .set('limit', exportAll ? '10000' : String(this.pageSize));
        if (exportAll) params = params.set('export', 'true');
        if (this.from) params = params.set('from', this.from);
        if (this.to) params = params.set('to', this.to);
        if (this.search.trim()) params = params.set('search', this.search.trim());
        return params;
    }

    private async exportData(): Promise<any> {
        const response = await firstValueFrom(this.authService.getReports(this.reportParams(true)));
        const rows = Array.isArray(response.rows) ? response.rows : [];
        if (!rows.length) throw new Error('No hay datos para exportar con los filtros seleccionados.');
        if (Number(response.total) > rows.length) {
            throw new Error('El reporte supera 10,000 registros. Aplica un rango de fechas más específico.');
        }
        return { ...response, rows };
    }

    private exportColumns(): Array<{
        label: string;
        width: number;
        excel: (row: any) => any;
        pdf: (row: any) => string | number;
    }> {
        const textCell = (value: unknown) => ({ value: String(value ?? ''), type: String, wrap: true, verticalAlign: 'top' as const });
        const numberCell = (value: unknown) => ({ value: Number(value) || 0, type: Number, format: '#,##0' });
        if (this.reportType === 'inventario') {
            return [
                { label: 'ID', width: 10, excel: (r) => numberCell(r.id), pdf: (r) => Number(r.id) || 0 },
                { label: 'Tipo', width: 22, excel: (r) => textCell(r.type), pdf: (r) => r.type ?? '' },
                { label: 'Marca', width: 20, excel: (r) => textCell(r.brand), pdf: (r) => r.brand ?? '' },
                { label: 'Modelo', width: 22, excel: (r) => textCell(r.model), pdf: (r) => r.model ?? '' },
                { label: 'Número de serie', width: 24, excel: (r) => textCell(r.serial_number), pdf: (r) => r.serial_number ?? '' },
                { label: 'Estado', width: 16, excel: (r) => textCell(r.status || 'Sin estado'), pdf: (r) => r.status || 'Sin estado' },
                { label: 'Asignado a', width: 24, excel: (r) => textCell(this.personName(r.assigned_to)), pdf: (r) => this.personName(r.assigned_to) },
                { label: 'Registro', width: 20, excel: (r) => ({ value: new Date(r.createdAt), type: Date, format: 'dd/mm/yyyy hh:mm' }), pdf: (r) => this.formatDate(r.createdAt) },
            ];
        }
        if (this.reportType === 'tecnicos') {
            return [
                { label: 'Técnico', width: 24, excel: (r) => textCell(this.personName(r)), pdf: (r) => this.personName(r) },
                { label: 'Usuario', width: 20, excel: (r) => textCell(r.username), pdf: (r) => r.username ?? '' },
                { label: 'Correo', width: 30, excel: (r) => textCell(r.email), pdf: (r) => r.email ?? '' },
                { label: 'Área', width: 22, excel: (r) => textCell(r.area?.name ?? 'Sin área'), pdf: (r) => r.area?.name ?? 'Sin área' },
                { label: 'Asignados', width: 14, excel: (r) => numberCell(r.asignados), pdf: (r) => Number(r.asignados) || 0 },
                { label: 'Cerrados', width: 14, excel: (r) => numberCell(r.cerrados), pdf: (r) => Number(r.cerrados) || 0 },
                { label: 'Pendientes', width: 14, excel: (r) => numberCell(this.pending(r)), pdf: (r) => this.pending(r) },
                { label: 'Activo', width: 12, excel: (r) => textCell(r.active === false ? 'No' : 'Sí'), pdf: (r) => r.active === false ? 'No' : 'Sí' },
            ];
        }
        return [
            { label: 'Folio', width: 16, excel: (r) => textCell(r.folio), pdf: (r) => r.folio ?? '' },
            { label: 'Asunto', width: 30, excel: (r) => textCell(this.subject(r)), pdf: (r) => this.subject(r) },
            { label: 'Descripción', width: 42, excel: (r) => textCell(r.descripcion), pdf: (r) => r.descripcion ?? '' },
            { label: 'Estado', width: 15, excel: (r) => textCell(r.estado), pdf: (r) => r.estado ?? '' },
            { label: 'Prioridad', width: 14, excel: (r) => textCell(r.prioridad), pdf: (r) => r.prioridad ?? '' },
            { label: 'Solicitante', width: 24, excel: (r) => textCell(this.personName(r.solicitante_id)), pdf: (r) => this.personName(r.solicitante_id) },
            { label: 'Técnico', width: 24, excel: (r) => textCell(this.personName(r.tecnico_id)), pdf: (r) => this.personName(r.tecnico_id) },
            {
                label: 'Fecha',
                width: 20,
                excel: (r) => ({ value: new Date(r.createdAt), type: Date, format: 'dd/mm/yyyy hh:mm' }),
                pdf: (r) => this.formatDate(r.createdAt),
            },
        ];
    }

    private reportLabel(): string {
        return { solicitudes: 'solicitudes', tickets: 'tickets', tecnicos: 'técnicos', inventario: 'inventario' }[this.reportType];
    }

    private summaryPairs(summary: ReportSummary): Array<{ label: string; value: number }> {
        if (this.reportType === 'inventario') {
            return [
                { label: 'Equipos', value: Number(summary?.inventario) || 0 },
                { label: 'Asignados', value: Number(summary?.inventario_asignado) || 0 },
                { label: 'Sin asignar', value: Number(summary?.inventario_disponible) || 0 },
                { label: 'Bajas', value: Number(summary?.inventario_baja) || 0 },
            ];
        }
        return [
            { label: 'Solicitudes', value: Number(summary?.solicitudes) || 0 },
            { label: 'Tickets', value: Number(summary?.tickets) || 0 },
            { label: 'Sin asignar', value: Number(summary?.sin_asignar) || 0 },
            { label: 'Cerrados', value: Number(summary?.cerrados) || 0 },
        ];
    }

    private filterDescription(): string {
        const dates = this.from || this.to
            ? `Periodo: ${this.from || 'inicio'} a ${this.to || 'hoy'}`
            : 'Periodo: todos los registros';
        return `${dates}${this.search.trim() ? ` | Búsqueda: ${this.search.trim()}` : ''}`;
    }

    private formatDate(value: string | Date): string {
        const date = value instanceof Date ? value : new Date(value);
        if (Number.isNaN(date.getTime())) return '';
        return new Intl.DateTimeFormat('es-MX', { dateStyle: 'short', timeStyle: 'short' }).format(date);
    }

    private exportFileName(extension: 'xlsx' | 'pdf'): string {
        const date = new Date().toISOString().slice(0, 10);
        return `reporte-${this.reportType}-${date}.${extension}`;
    }

    private emptySummary(): ReportSummary {
        return {
            solicitudes: 0,
            tickets: 0,
            sin_asignar: 0,
            cerrados: 0,
            estados_solicitudes: [],
            estados_tickets: [],
            inventario: 0,
            inventario_asignado: 0,
            inventario_disponible: 0,
            inventario_baja: 0,
            estados_inventario: [],
            tipos_inventario: [],
        };
    }
}
