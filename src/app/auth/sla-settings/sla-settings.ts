import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-sla-settings',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
    templateUrl: './sla-settings.html',
    styleUrl: './sla-settings.css',
})
export class SlaSettings implements OnInit {
    policies: any[] = [];
    loading = false;
    savingPriority = '';
    constructor(private authService: AuthService, private changeDetector: ChangeDetectorRef) {}
    ngOnInit(): void { this.load(); }
    load(): void {
        this.loading = true;
        this.authService.getSlaPolicies().pipe(finalize(() => { this.loading = false; this.changeDetector.detectChanges(); })).subscribe({
            next: (response) => this.policies = (response.policies || []).map((row: any) => ({
                ...row,
                response_hours: row.policy?.response_hours ?? 8,
                resolution_hours: row.policy?.resolution_hours ?? 24,
                warning_percent: row.policy?.warning_percent ?? 80,
                sla_active: row.policy?.active ?? true,
            })),
            error: (error) => window.alert(error?.error?.message || 'No fue posible cargar las políticas SLA.'),
        });
    }
    save(row: any): void {
        if (!(row.response_hours > 0) || !(row.resolution_hours >= row.response_hours) || !(row.warning_percent > 0 && row.warning_percent < 100)) {
            window.alert('La resolución debe ser igual o mayor que la respuesta y el porcentaje debe estar entre 1 y 99.'); return;
        }
        this.savingPriority = row.key;
        this.authService.updateSlaPolicy(row.key, { response_hours: row.response_hours, resolution_hours: row.resolution_hours, warning_percent: row.warning_percent, active: row.sla_active })
            .pipe(finalize(() => { this.savingPriority = ''; this.changeDetector.detectChanges(); }))
            .subscribe({ next: (response) => window.alert(response.message), error: (error) => window.alert(error?.error?.message || 'No fue posible guardar la política.') });
    }
}
