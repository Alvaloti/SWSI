import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatDialogModule, MatIconModule],
    templateUrl: './profile.html',
    styleUrl: './profile.css',
})
export class Profile {
    @ViewChild('profileDialog') profileDialog!: TemplateRef<unknown>;
    @Output() profileUpdated = new EventEmitter<any>();

    readonly profileForm = new FormGroup({
        username: new FormControl('', { nonNullable: true, validators: Validators.required }),
        nomina: new FormControl('', { nonNullable: true, validators: Validators.required }),
        email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
        name: new FormControl('', { nonNullable: true, validators: Validators.required }),
        last_name: new FormControl('', { nonNullable: true, validators: Validators.required }),
        area: new FormControl('', { nonNullable: true, validators: Validators.required }),
        password: new FormControl('', { nonNullable: true, validators: Validators.minLength(8) }),
    });

    areas: any[] = [];
    roleName = '';
    loading = false;
    saving = false;
    errorMessage = '';

    private readonly authService = inject(AuthService);
    private readonly dialog = inject(MatDialog);
    private dialogRef?: MatDialogRef<unknown>;

    openProfile(): void {
        this.loading = true;
        this.errorMessage = '';
        this.dialogRef = this.dialog.open(this.profileDialog, {
            width: '600px',
            maxWidth: '95vw',
            disableClose: true,
        });

        this.authService.getAreas().subscribe({
            next: (response) => {
                const areas = response.areas ?? response;
                this.areas = Array.isArray(areas) ? areas.filter((area) => area.active !== false) : [];
            },
            error: () => (this.errorMessage = 'No fue posible cargar las áreas.'),
        });

        this.authService.getUser().subscribe({
            next: (response) => {
                const user = response.user;
                this.roleName = user?.rolId?.name ?? '';
                this.profileForm.reset({
                    username: user?.username ?? '',
                    nomina: String(user?.nomina ?? ''),
                    email: user?.email ?? '',
                    name: user?.name ?? '',
                    last_name: user?.last_name ?? '',
                    area: user?.area?._id ?? user?.area ?? '',
                    password: '',
                });
                this.loading = false;
            },
            error: (error) => {
                this.loading = false;
                this.errorMessage = error.error?.message ?? 'No fue posible cargar tu perfil.';
            },
        });
    }

    closeProfile(): void {
        this.dialogRef?.close();
    }

    saveProfile(): void {
        if (this.profileForm.invalid || this.saving) {
            this.profileForm.markAllAsTouched();
            return;
        }

        this.saving = true;
        this.errorMessage = '';
        const profile: Record<string, unknown> = { ...this.profileForm.getRawValue() };
        if (!profile['password']) delete profile['password'];

        this.authService.updateProfile(profile).subscribe({
            next: (response) => {
                this.saving = false;
                this.profileUpdated.emit(response.user);
                this.closeProfile();
                window.alert(response.message ?? 'Perfil actualizado correctamente.');
            },
            error: (error) => {
                this.saving = false;
                this.errorMessage = error.error?.message ?? 'No fue posible actualizar tu perfil.';
            },
        });
    }
}
