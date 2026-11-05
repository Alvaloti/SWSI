import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-audit',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTableModule,
    ],
    templateUrl: './audit.html',
    styleUrl: './audit.css',
})
export class Audit implements OnInit {
    displayedColumns = ['date', 'user', 'category', 'action', 'resource', 'result', 'ip', 'details'];
    logs: any[] = [];
    total = 0;
    pageIndex = 0;
    pageSize = 20;
    loading = false;
    errorMessage = '';
    filters = { search: '', category: '', success: '', from: '', to: '' };

    constructor(
        private authService: AuthService,
        private changeDetector: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.loadAudit();
    }

    loadAudit(): void {
        this.loading = true;
        this.errorMessage = '';
        const params: Record<string, string | number> = {
            page: this.pageIndex,
            limit: this.pageSize,
        };
        Object.entries(this.filters).forEach(([key, value]) => {
            if (value !== '') params[key] = value;
        });

        this.authService.getAudit(params)
            .pipe(finalize(() => {
                this.loading = false;
                this.changeDetector.detectChanges();
            }))
            .subscribe({
                next: (response) => {
                    this.logs = response.logs || [];
                    this.total = response.total || 0;
                },
                error: (error) => {
                    this.logs = [];
                    this.total = 0;
                    this.errorMessage = error?.error?.message || 'No fue posible consultar la auditoría';
                },
            });
    }

    applyFilters(): void {
        this.pageIndex = 0;
        this.loadAudit();
    }

    clearFilters(): void {
        this.filters = { search: '', category: '', success: '', from: '', to: '' };
        this.applyFilters();
    }

    changePage(event: PageEvent): void {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.loadAudit();
    }

    userLabel(log: any): string {
        const user = log.user_id;
        if (user?.name || user?.last_name) return `${user.name || ''} ${user.last_name || ''}`.trim();
        return user?.username || log.user_email || 'Usuario no identificado';
    }

    detailsLabel(details: any): string {
        if (!details || !Object.keys(details).length) return '—';
        const text = JSON.stringify(details);
        return text.length > 160 ? `${text.slice(0, 160)}…` : text;
    }
}
