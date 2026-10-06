import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth-service';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { Profile } from '../profile/profile';

@Component({
    selector: 'app-home-tick',
    imports: [
    CommonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatDividerModule,
        RouterModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatIcon,
        Profile,
    ],
    templateUrl: './home-tick.html',
    styleUrl: './home-tick.css',
})
export class HomeTick {
    @ViewChild(MatSidenav) sidenav!: MatSidenav;

    user: any;
    isMobile = true;
    menuAbierto = true;
    columnasVisibles: string[] = ['folio', 'titulo', 'descripcion', 'estado', 'comentarios', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';

    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
    ) {}

    private http = inject(HttpClient);

    ngOnInit() {
        this.observarTamanoPantalla();
        this.cargarDatos();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success') this.user = response.user;
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }

    private observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
    }

    cargarDatos() {
        this.cargando = true;
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString())
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);

        this.authService.getTickets(params).subscribe({
            next: (respuesta) => {
                const tickets = respuesta.tickets ?? respuesta;
                this.datos.data = Array.isArray(tickets) ? tickets : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.cargando = false;
            },
            error: (error) => {
                console.error('No se pudieron cargar los tickets:', error);
                this.cargando = false;
            },
        });
    }

    onFiltrar(evento: Event) {
        const valorFiltro = (evento.target as HTMLInputElement).value;
        this.filtroBusqueda = valorFiltro.trim().toLowerCase();
        this.paginaActual = 0; // Reiniciar a la primera página tras filtrar
        this.cargarDatos();
    }

    onCambiarPagina(evento: PageEvent) {
        this.paginaActual = evento.pageIndex;
        this.tamanoPagina = evento.pageSize;
        this.cargarDatos();
    }

    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
    }

    editarTicket(ticket: any) {
        const id = ticket._id ?? ticket.id;
        if (!id) return;

        const comentarios = window.prompt('Comentarios:', ticket.comentarios ?? '');
        if (comentarios === null) return;

        this.authService.updateTicket(id, { comentarios }).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible actualizar el ticket.'),
        });
    }

    eliminarTicket(ticket: any) {
        const id = ticket._id ?? ticket.id;
        if (!id || !window.confirm(`¿Eliminar el ticket "${ticket.folio ?? id}"?`)) return;

        this.authService.deleteTicket(id).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el ticket.'),
        });
    }

    logout() {
        this.authService.logout().subscribe({
            next: (response: { message: string }) => {
                window.alert(response.message);
                this.router.navigateByUrl('/login', { replaceUrl: true });
            },
            error: () => window.alert('Falla en salida del sistema, intenta de nuevo'),
        });
    }
}
