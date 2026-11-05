import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-system-settings',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
    templateUrl: './system-settings.html',
    styleUrl: './system-settings.css',
})
export class SystemSettings implements OnInit {
    settings: any = {
        system_name: 'SWSI', organization_name: '', support_email: '', timezone: 'America/Mexico_City',
        date_format: 'dd/MM/yyyy', default_page_size: 10, max_attachment_mb: 10,
        session_duration_minutes: 60, maintenance_mode: false,
        maintenance_message: 'El sistema se encuentra temporalmente en mantenimiento.',
    };
    loading = false;
    saving = false;
    constructor(private authService: AuthService, private changeDetector: ChangeDetectorRef) {}
    ngOnInit(): void { this.load(); }
    load(): void {
        this.loading = true;
        this.authService.getSystemSettings().pipe(finalize(() => { this.loading = false; this.changeDetector.detectChanges(); })).subscribe({
            next: (response) => this.settings = { ...this.settings, ...(response.settings || {}) },
            error: (error) => window.alert(error?.error?.message || 'No fue posible cargar los parámetros.'),
        });
    }
    save(): void {
        if (!String(this.settings.system_name || '').trim()) { window.alert('El nombre del sistema es obligatorio.'); return; }
        if (this.settings.support_email && !/^\S+@\S+\.\S+$/.test(this.settings.support_email)) { window.alert('El correo de soporte no es válido.'); return; }
        this.saving = true;
        this.authService.updateSystemSettings(this.settings).pipe(finalize(() => { this.saving = false; this.changeDetector.detectChanges(); })).subscribe({
            next: (response) => { this.settings = { ...this.settings, ...response.settings }; window.alert(response.message); },
            error: (error) => window.alert(error?.error?.message || 'No fue posible guardar los parámetros.'),
        });
    }
}
