import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    ticketForm: FormGroup;

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
        this.authService.createTicket(this.ticketForm.getRawValue()).subscribe({
            next: (response) => {
                window.alert(response.message ?? 'Ticket registrado correctamente.');
                this.router.navigateByUrl('/hometec');
            },
            error: (error) => window.alert(error.error?.message ?? 'No fue posible registrar el ticket.'),
        });
    }

    loadChildren(arg0: string) {
        this.router.navigate([`/${arg0}`]);
    }
}
