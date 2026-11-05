import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-forgot-password',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './forgot-password.html',
    styleUrl: './forgot-password.css',
})
export class ForgotPassword {
    form = new FormGroup({
        email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    });
    submitting = false;
    message = '';
    errorMessage = '';

    constructor(
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    onSubmit(): void {
        if (this.submitting) return;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.errorMessage = this.form.controls.email.hasError('required')
                ? 'El correo electrónico es obligatorio.'
                : 'Ingresa un correo electrónico válido.';
            return;
        }

        this.submitting = true;
        this.message = '';
        this.errorMessage = '';
        this.authService.forgotPassword(this.form.controls.email.value).pipe(
            finalize(() => {
                this.submitting = false;
                this.changeDetectorRef.markForCheck();
            }),
        ).subscribe({
            next: (response) => {
                this.message = response.message;
                this.form.disable();
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                this.errorMessage = error.error?.message ?? 'No fue posible solicitar la recuperación.';
                this.changeDetectorRef.markForCheck();
            },
        });
    }
}
