import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription, switchMap, timer } from 'rxjs';
import { AuthService } from '../../service/auth-service';

interface UserNotification {
    _id: string;
    type: 'assignment' | 'status' | 'decision' | 'solution' | 'escalation' | 'closure' | 'sla_warning' | 'sla_breach';
    title: string;
    message: string;
    entity_type: 'solicitud' | 'ticket';
    entity_id: string;
    read_at: string | null;
    createdAt: string;
}

@Component({
    selector: 'app-notifications',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
    templateUrl: './notifications.html',
    styleUrl: './notifications.css',
})
export class Notifications implements OnInit, OnDestroy {
    notifications: UserNotification[] = [];
    unreadCount = 0;
    loading = false;
    loadError = '';
    showPreferences = false;
    savingPreferences = false;
    preferences: Record<string, boolean> = {};
    readonly preferenceOptions = [
        ['assignment', 'Asignaciones'], ['status', 'Cambios de estado'], ['decision', 'Aprobaciones y rechazos'],
        ['solution', 'Soluciones'], ['escalation', 'Escalamientos'], ['closure', 'Cierres'],
        ['sla_warning', 'SLA próximo a vencer'], ['sla_breach', 'Incumplimientos de SLA'],
    ];

    private readonly authService = inject(AuthService);
    private pollingSubscription?: Subscription;

    ngOnInit(): void {
        this.pollingSubscription = timer(0, 30000)
            .pipe(switchMap(() => this.authService.getNotifications()))
            .subscribe({
                next: (response) => this.applyResponse(response),
                error: () => (this.loadError = 'No fue posible cargar las notificaciones.'),
            });
    }

    ngOnDestroy(): void {
        this.pollingSubscription?.unsubscribe();
    }

    loadNotifications(): void {
        this.loading = true;
        this.loadError = '';
        this.authService.getNotifications().subscribe({
            next: (response) => {
                this.applyResponse(response);
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.loadError = 'No fue posible cargar las notificaciones.';
            },
        });
    }

    markAsRead(notification: UserNotification): void {
        if (notification.read_at) return;
        this.authService.markNotificationAsRead(notification._id).subscribe({
            next: (response) => {
                notification.read_at = response.notification?.read_at ?? new Date().toISOString();
                this.unreadCount = Math.max(0, this.unreadCount - 1);
            },
        });
    }

    markAllAsRead(event: Event): void {
        event.stopPropagation();
        if (!this.unreadCount) return;
        this.authService.markAllNotificationsAsRead().subscribe({
            next: () => {
                const readAt = new Date().toISOString();
                this.notifications = this.notifications.map((notification) => ({
                    ...notification,
                    read_at: notification.read_at ?? readAt,
                }));
                this.unreadCount = 0;
            },
        });
    }

    notificationIcon(type: UserNotification['type']): string {
        const icons: Record<UserNotification['type'], string> = {
            assignment: 'assignment_ind',
            status: 'update',
            decision: 'fact_check',
            solution: 'task_alt',
            escalation: 'priority_high',
            closure: 'lock',
            sla_warning: 'schedule',
            sla_breach: 'timer_off',
        };
        return icons[type];
    }

    openPreferences(event: Event): void {
        event.stopPropagation();
        this.showPreferences = !this.showPreferences;
        if (!this.showPreferences) return;
        this.authService.getNotificationPreferences().subscribe({
            next: (response) => this.preferences = response.preferences || {},
            error: () => this.loadError = 'No fue posible cargar las preferencias.',
        });
    }

    updatePreference(key: string, event: Event): void {
        event.stopPropagation();
        this.preferences[key] = (event.target as HTMLInputElement).checked;
    }

    savePreferences(event: Event): void {
        event.stopPropagation();
        this.savingPreferences = true;
        this.authService.updateNotificationPreferences(this.preferences).subscribe({
            next: () => { this.savingPreferences = false; this.showPreferences = false; this.loadNotifications(); },
            error: () => { this.savingPreferences = false; this.loadError = 'No fue posible guardar las preferencias.'; },
        });
    }

    private applyResponse(response: any): void {
        this.notifications = Array.isArray(response.notifications) ? response.notifications : [];
        this.unreadCount = Number(response.unreadCount) || 0;
        this.loadError = '';
    }
}
