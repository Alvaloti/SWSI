import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

interface RoleOption {
    _id: string;
    name: string;
}

interface AreaOption {
    _id: string;
    name: string;
    active?: boolean;
}

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register.html',
    styleUrl: './register.css',
})
export class Register {
    registerForm: FormGroup;
    roles: RoleOption[] = [];
    rolesError = '';
    areas: AreaOption[] = [];
    areasError = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {
        this.registerForm = this.fb.group({
            username: ['', Validators.required],
            nomina: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            name: ['', Validators.required],
            last_name: ['', Validators.required],
            rolId: ['', Validators.required],
            area: ['', Validators.required],
        });
    }

    onSubmit() {
        const formData = this.registerForm.value;
        console.log('Form Data:', formData);
        this.authService.register(formData).subscribe({
            next: (response) => {
                console.log('Registration successful:', response);
                if (response.status === 'success') {
                    this.router.navigate(['/home']);
                }
            },
            error: (error) => {
                console.log('Registration failed:', error);
            },
        });
    }

    ngOnInit(): void {
        this.authService.getRegistrationRoles().subscribe({
            next: (response) => {
                this.roles = response.roles;
            },
            error: (error) => {
                console.error('No se pudieron cargar los roles:', error);
                this.rolesError = 'No fue posible cargar los roles.';
            },
        });

        this.authService.getAreas().subscribe({
            next: (response) => {
                const areas: AreaOption[] = response.areas ?? response;
                this.areas = Array.isArray(areas)
                    ? areas.filter((area) => area.active !== false)
                    : [];
            },
            error: (error) => {
                console.error('No se pudieron cargar las áreas:', error);
                this.areasError = 'No fue posible cargar las áreas.';
            },
        });
    }

    loadChildren(arg0: string) {
        this.router.navigate([`/${arg0}`]);
    }
}
