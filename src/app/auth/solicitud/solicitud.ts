import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-solicitud',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './solicitud.html',
    styleUrl: './solicitud.css',
})
export class Solicitud {
    solicitudForm: FormGroup;
    areas: any[] = [];

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {
        this.solicitudForm = new FormGroup({
            tipo: new FormControl('', Validators.required),
            descripcion: new FormControl('', Validators.required),
            comentarios: new FormControl(''),
            area: new FormControl('', Validators.required),
            prioridad: new FormControl('', Validators.required),
        });
    }
    ngOnInit() {
        this.authService.getAreas().subscribe({
            next: (response) => {
                const areas = response.areas ?? response;
                this.areas = Array.isArray(areas) ? areas.filter((area) => area.active !== false) : [];
            },
            error: (error) => console.error('No se pudieron cargar las áreas:', error),
        });
    }

    onSubmit() {
        if (this.solicitudForm.invalid) {
            this.solicitudForm.markAllAsTouched();
            return;
        }
        this.authService.createSolicitud(this.solicitudForm.getRawValue()).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Solicitud registrada correctamente.');
                this.router.navigateByUrl('/homesol');
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible registrar la solicitud.'),
        });
    }
    loadChildren(arg0: string) {
        this.router.navigate([`/${arg0}`]);
    }
}
