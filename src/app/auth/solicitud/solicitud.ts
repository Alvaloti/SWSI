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
    private readonly allowedFileTypes = new Set([
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
    ]);
    private readonly maxFileSize = 10 * 1024 * 1024;
    solicitudForm: FormGroup;
    areas: any[] = [];
    selectedFile: File | null = null;
    fileError = '';
    submitting = false;

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
                this.areas = Array.isArray(areas)
                    ? areas.filter((area) => area.active !== false)
                    : [];
            },
            error: (error) => console.error('No se pudieron cargar las áreas:', error),
        });
    }

    onSubmit() {
        if (this.solicitudForm.invalid) {
            this.solicitudForm.markAllAsTouched();
            return;
        }
        if (this.fileError || this.submitting) return;
        this.submitting = true;
        this.authService.createSolicitud(this.solicitudForm.getRawValue()).subscribe({
            next: (response) => {
                const solicitudId = response.solicitud?._id;
                if (!this.selectedFile) {
                    this.finishCreation(response.message ?? 'Solicitud registrada correctamente.');
                    return;
                }

                if (!solicitudId) {
                    this.submitting = false;
                    window.alert('La solicitud fue creada, pero la API no devolvió su identificador para asociar el archivo.');
                    return;
                }

                this.authService.uploadAttachment(this.selectedFile, { solicitud_id: solicitudId }).subscribe({
                    next: () => this.finishCreation('Solicitud y archivo registrados correctamente.'),
                    error: (error) => {
                        window.alert(
                            error.error?.message ??
                            'La solicitud fue creada, pero no fue posible guardar el archivo adjunto.',
                        );
                        this.router.navigateByUrl('/homesol');
                    },
                });
            },
            error: (error) => {
                this.submitting = false;
                window.alert(error.error?.message ?? 'No fue posible registrar la solicitud.');
            },
        });
    }

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0] ?? null;
        this.selectedFile = null;
        this.fileError = '';

        if (!file) return;
        if (!this.allowedFileTypes.has(file.type)) {
            this.fileError = 'Sólo se permiten archivos PDF, JPEG, PNG, GIF o WebP.';
            input.value = '';
            return;
        }
        if (file.size > this.maxFileSize) {
            this.fileError = 'El archivo no puede superar 10 MB.';
            input.value = '';
            return;
        }
        this.selectedFile = file;
    }

    private finishCreation(message: string): void {
        this.submitting = false;
        window.alert(message);
        this.router.navigateByUrl('/homesol');
    }

    loadChildren(arg0: string) {
        this.router.navigate([`/${arg0}`]);
    }
}
