import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../service/auth-service';

const STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

@Component({
    selector: 'app-reset-password',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './reset-password.html',
    styleUrl: '../forgot-password/forgot-password.css',
})
export class ResetPassword {
    readonly token: string;
    form = new FormGroup({
        password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(STRONG_PASSWORD)] }),
        confirmation: new FormControl('', { nonNullable: true, validators: Validators.required }),
    });
    submitting = false;
    completed = false;
    message = '';
    errorMessage = '';

    constructor(
        route: ActivatedRoute,
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        this.token = route.snapshot.queryParamMap.get('token') ?? '';
        if (!this.token) this.errorMessage = 'El enlace de recuperación no contiene un token válido.';
    }

    onSubmit(): void {
        if (this.submitting || !this.token) return;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.errorMessage = 'Revisa los requisitos de la contraseña.';
            return;
        }
        const { password, confirmation } = this.form.getRawValue();
        if (password !== confirmation) {
            this.errorMessage = 'Las contraseñas no coinciden.';
            return;
        }

        this.submitting = true;
        this.errorMessage = '';
        this.authService.resetPassword(this.token, password).pipe(
            finalize(() => {
                this.submitting = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe({
            next: (response) => {
                this.completed = true;
                this.message = response.message;
                this.form.disable();
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                this.errorMessage = error.error?.message ?? 'No fue posible restablecer la contraseña.';
                this.changeDetectorRef.markForCheck();
            },
        });
    }
}
