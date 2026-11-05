import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../service/auth-service';

@Component({
    selector: 'app-catalogs',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule],
    templateUrl: './catalogs.html',
    styleUrl: './catalogs.css',
})
export class Catalogs implements OnInit {
    columns = ['type', 'key', 'name', 'applies', 'order', 'active', 'actions'];
    items: any[] = [];
    total = 0;
    pageIndex = 0;
    pageSize = 20;
    loading = false;
    saving = false;
    showForm = false;
    editingId = '';
    typeFilter = '';
    search = '';
    form = new FormGroup({
        type: new FormControl('estado', { nonNullable: true, validators: Validators.required }),
        key: new FormControl('', { nonNullable: true }),
        name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(80)] }),
        description: new FormControl('', { nonNullable: true, validators: Validators.maxLength(300) }),
        applies_to: new FormControl('ambos', { nonNullable: true, validators: Validators.required }),
        order: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(999)] }),
        active: new FormControl(true, { nonNullable: true }),
    });

    constructor(private authService: AuthService, private changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void { this.load(); }

    load(): void {
        this.loading = true;
        const params: any = { page: this.pageIndex + 1, limit: this.pageSize, search: this.search.trim() };
        if (this.typeFilter) params.type = this.typeFilter;
        this.authService.getCatalogs(params).pipe(finalize(() => {
            this.loading = false;
            this.changeDetector.detectChanges();
        })).subscribe({
            next: (response) => { this.items = response.items || []; this.total = response.total || 0; },
            error: (error) => window.alert(error?.error?.message || 'No fue posible cargar los catálogos.'),
        });
    }

    filter(): void { this.pageIndex = 0; this.load(); }
    page(event: PageEvent): void { this.pageIndex = event.pageIndex; this.pageSize = event.pageSize; this.load(); }

    create(): void {
        this.editingId = '';
        this.form.reset({ type: 'estado', key: '', name: '', description: '', applies_to: 'ambos', order: 0, active: true });
        this.form.controls.type.enable();
        this.form.controls.key.enable();
        this.showForm = true;
    }

    edit(item: any): void {
        this.editingId = item._id;
        this.form.reset({ type: item.type, key: item.key, name: item.name, description: item.description || '', applies_to: item.applies_to, order: item.order, active: item.active });
        this.form.controls.type.disable();
        this.form.controls.key.disable();
        this.showForm = true;
    }

    cancel(): void { this.showForm = false; this.editingId = ''; }

    save(): void {
        if (this.form.invalid || this.saving) { this.form.markAllAsTouched(); return; }
        this.saving = true;
        const data = this.form.getRawValue();
        const request = this.editingId ? this.authService.updateCatalog(this.editingId, data) : this.authService.createCatalog(data);
        request.pipe(finalize(() => { this.saving = false; this.changeDetector.detectChanges(); })).subscribe({
            next: (response) => { window.alert(response.message); this.cancel(); this.load(); },
            error: (error) => window.alert(error?.error?.message || 'No fue posible guardar el elemento.'),
        });
    }

    remove(item: any): void {
        if (!window.confirm(`¿Eliminar "${item.name}" del catálogo?`)) return;
        this.authService.deleteCatalog(item._id).subscribe({
            next: (response) => { window.alert(response.message); this.load(); },
            error: (error) => window.alert(error?.error?.message || 'No fue posible eliminar el elemento.'),
        });
    }
}
