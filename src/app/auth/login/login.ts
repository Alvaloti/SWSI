import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

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

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
      if (this.loginForm.invalid || this.submitting) {
        this.loginForm.markAllAsTouched();
        return;
      }

      this.loginError = '';
      this.submitting = true;
      const formData = this.loginForm.getRawValue();
      this.authService.login(formData).subscribe({
        next: (response) => {
          this.submitting = false;
          if (response.status !== 'success') {
            this.loginError = response.message ?? 'No fue posible iniciar sesión.';
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
            this.authService.logout().subscribe();
            return;
          }

          this.router.navigateByUrl(destination, { replaceUrl: true });
        },
        error: (error) => {
          this.submitting = false;
          this.loginError = error.error?.message ?? 'No fue posible iniciar sesión. Verifica tus credenciales.';
        }
      });
  }
}
