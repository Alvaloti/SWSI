import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule,RouterModule],
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
})
export class Login {
    loginForm:FormGroup;
    loginError = '';
    submitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
      if (this.submitting) return;

      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
        const email = this.loginForm.get('email');
        const password = this.loginForm.get('password');
        if (email?.hasError('required')) {
          this.loginError = 'El correo electrónico es obligatorio.';
        } else if (email?.hasError('email')) {
          this.loginError = 'Ingresa un correo electrónico válido.';
        } else if (password?.hasError('required')) {
          this.loginError = 'La contraseña es obligatoria.';
        } else if (password?.hasError('minlength')) {
          this.loginError = 'La contraseña debe contener al menos 8 caracteres.';
        } else {
          this.loginError = 'Revisa los datos ingresados.';
        }
        this.changeDetectorRef.markForCheck();
        return;
      }

      this.loginError = '';
      this.submitting = true;
      this.changeDetectorRef.markForCheck();
      const formData = this.loginForm.getRawValue();
      this.authService.login(formData).pipe(
        finalize(() => {
          this.submitting = false;
          this.changeDetectorRef.markForCheck();
        }),
      ).subscribe({
        next: (response) => {
          if (response.status !== 'success') {
            this.loginError = response.message ?? 'No fue posible iniciar sesión.';
            this.changeDetectorRef.markForCheck();
            return;
          }

          const roleName = String(
            response.user?.rolId?.name ?? '',
          ).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

          const routesByRole: Record<string, string> = {
            admin: '/home',
            administrador: '/home',
            solicitante: '/homesol',
            soporte: '/hometick',
            tecnico: '/hometec',
            supervisor: '/homesup',
          };
          const destination = routesByRole[roleName];

          if (!destination) {
            this.loginError = 'Tu cuenta no tiene un rol válido para acceder al sistema.';
            this.changeDetectorRef.markForCheck();
            this.authService.logout().subscribe();
            return;
          }

          this.router.navigateByUrl(destination, { replaceUrl: true });
        },
        error: (error) => {
          this.loginError = error.error?.message ?? 'No fue posible iniciar sesión. Verifica tus credenciales.';
          this.changeDetectorRef.markForCheck();
        }
      });
  }
}
