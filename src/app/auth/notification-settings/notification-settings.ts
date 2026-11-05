import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-notification-settings',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
    templateUrl: './notification-settings.html',
    styleUrl: './notification-settings.css',
})
export class NotificationSettings implements OnInit {
    readonly eventOptions = [
        ['assignment', 'Asignaciones', 'Avisos cuando una solicitud o ticket se asigna a un técnico.'],
        ['status', 'Cambios de estado', 'Actualizaciones del estado de solicitudes y tickets.'],
        ['decision', 'Aprobaciones y rechazos', 'Resultado de la revisión formal de solicitudes.'],
        ['solution', 'Soluciones', 'Avisos cuando un técnico registra una solución.'],
        ['escalation', 'Escalamientos', 'Avisos relacionados con tickets escalados.'],
        ['closure', 'Cierres', 'Confirmaciones de cierre de tickets.'],
        ['sla_warning', 'Advertencias SLA', 'Avisos antes de alcanzar el límite de resolución.'],
        ['sla_breach', 'Incumplimientos SLA', 'Alertas por tiempos de respuesta o resolución vencidos.'],
    ];
    settings: any = { events: {}, allow_user_preferences: true, polling_seconds: 30, retention_days: 90 };
    loading = false;
    saving = false;

    constructor(private authService: AuthService, private changeDetector: ChangeDetectorRef) {}
    ngOnInit(): void { this.load(); }

    load(): void {
        this.loading = true;
        this.authService.getNotificationSettings().pipe(finalize(() => { this.loading = false; this.changeDetector.detectChanges(); })).subscribe({
            next: (response) => {
                const value = response.settings || {};
                this.settings = {
                    events: Object.fromEntries(this.eventOptions.map(([key]) => [key, value.events?.[key] !== false])),
                    allow_user_preferences: value.allow_user_preferences !== false,
                    polling_seconds: value.polling_seconds ?? 30,
                    retention_days: value.retention_days ?? 90,
                };
            },
            error: (error) => window.alert(error?.error?.message || 'No fue posible cargar la configuración.'),
        });
    }

    save(): void {
        const polling = Number(this.settings.polling_seconds);
        const retention = Number(this.settings.retention_days);
        if (!Number.isInteger(polling) || polling < 15 || polling > 300) { window.alert('El intervalo debe estar entre 15 y 300 segundos.'); return; }
        if (!Number.isInteger(retention) || retention < 7 || retention > 730) { window.alert('La retención debe estar entre 7 y 730 días.'); return; }
        this.saving = true;
        this.authService.updateNotificationSettings(this.settings).pipe(finalize(() => { this.saving = false; this.changeDetector.detectChanges(); })).subscribe({
            next: (response) => window.alert(response.message),
            error: (error) => window.alert(error?.error?.message || 'No fue posible guardar la configuración.'),
        });
    }
}
