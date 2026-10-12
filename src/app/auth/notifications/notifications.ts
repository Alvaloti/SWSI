import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription, switchMap, timer } from 'rxjs';
import { AuthService } from '../../service/auth-service';

interface UserNotification {
    _id: string;
    type: 'assignment' | 'status';
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

    private applyResponse(response: any): void {
        this.notifications = Array.isArray(response.notifications) ? response.notifications : [];
        this.unreadCount = Number(response.unreadCount) || 0;
        this.loadError = '';
    }
}
