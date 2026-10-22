import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-ticket',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './ticket.html',
    styleUrl: './ticket.css',
})
export class Ticket {
    @Input() dialogMode = false;
    @Output() created = new EventEmitter<void>();
    @Output() cancelled = new EventEmitter<void>();
    private readonly allowedFileTypes = new Set([
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
    ]);
    private readonly maxFileSize = 10 * 1024 * 1024;
    ticketForm: FormGroup;
    selectedFile: File | null = null;
    fileError = '';
    submitting = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {
        this.ticketForm = this.fb.group({
            titulo: ['', Validators.required],
            descripcion: ['', Validators.required],
            prioridad: ['', Validators.required],
            solucion: [''],
        });
    }
    onSubmit() {
        if (this.ticketForm.invalid) {
            this.ticketForm.markAllAsTouched();
            return;
        }
        if (this.fileError || this.submitting) return;
        this.submitting = true;
        this.authService.createTicket(this.ticketForm.getRawValue()).subscribe({
            next: (response) => {
                const ticketId = response.ticket?._id;
                if (!this.selectedFile) {
                    this.finishCreation(response.message ?? 'Ticket registrado correctamente.');
                    return;
                }

                if (!ticketId) {
                    this.submitting = false;
                    window.alert('El ticket fue creado, pero la API no devolvió su identificador para asociar el archivo.');
                    return;
                }

                this.authService.uploadAttachment(this.selectedFile, { ticket_id: ticketId }).subscribe({
                    next: () => this.finishCreation('Ticket y archivo registrados correctamente.'),
                    error: (error) => {
                        this.submitting = false;
                        window.alert(
                            error.error?.message ??
                            'El ticket fue creado, pero no fue posible guardar el archivo adjunto.',
                        );
                        this.completeNavigation();
                    },
                });
            },
            error: (error) => {
                this.submitting = false;
                window.alert(error.error?.message ?? 'No fue posible registrar el ticket.');
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
        this.completeNavigation();
    }

    cancel(): void {
        if (this.dialogMode) {
            this.cancelled.emit();
            return;
        }
        this.router.navigateByUrl('/hometick');
    }

    private completeNavigation(): void {
        if (this.dialogMode) {
            this.created.emit();
            return;
        }
        this.router.navigateByUrl('/hometick');
    }

    loadChildren(arg0: string) {
        this.router.navigate([`/${arg0}`]);
    }
}
