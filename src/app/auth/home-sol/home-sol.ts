import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavContainer, MatSidenav,} from '@angular/material/sidenav';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../../service/auth-service';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PageEvent, MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { Profile } from '../profile/profile';

@Component({
    selector: 'app-home-sol',
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
    MatSidenavContainer,
    MatSidenav,
    MatTable,
    MatTableModule,
    MatDivider,
    MatIcon,
    MatToolbar,
    MatSidenavModule,
    MatPaginator,
    RouterOutlet,
    MatFormField,
    MatLabel,
    MatProgressSpinner,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    MatFormField,
    MatLabel,
    MatProgressSpinner,
    MatPaginator,
    MatTable,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIcon,
    RouterLink,
    Profile
],
    templateUrl: './home-sol.html',
    styleUrl: './home-sol.css',
})
export class HomeSol {
    eliminarSolicitud(solicitud: any) {
        const id = solicitud._id ?? solicitud.id;
        if (!id || !window.confirm(`¿Eliminar la solicitud "${solicitud.folio ?? id}"?`)) return;
        this.authService.deleteSolicitud(id).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar la solicitud.'),
        });
    }
    editarSolicitud(solicitud: any) {
        const id = solicitud._id ?? solicitud.id;
        if (!id) return;
        const comentarios = window.prompt('Comentarios:', solicitud.comentarios ?? '');
        if (comentarios === null) return;
        this.authService.updateSolicitud(id, { comentarios }).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible actualizar la solicitud.'),
        });
    }
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
    user: any;
    isMobile = true;
    menuAbierto = true;
    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
    ) {}

    private http = inject(HttpClient);

    // Configuración de Tabla
    columnasVisibles: string[] = ['folio', 'tipo', 'descripcion', 'estado', 'comentarios', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;

    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';

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
        console.log('Se ejecuta la función de carga de datos');
        this.cargando = true;

        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);

        this.authService.getSolicitudes(params).subscribe({
            next: (respuesta) => {
                const solicitudes = respuesta.solicitudes ?? respuesta;
                this.datos.data = Array.isArray(solicitudes) ? solicitudes : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.cargando = false;
            },
            error: () => (this.cargando = false),
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

    logout() {
        this.authService.logout().subscribe({
            next: (response: { message: any }) => {
                window.alert(response.message);
                this.router.navigateByUrl('/login', { replaceUrl: true });
            },
            error: () => {
                console.log('err');
                window.alert('Falla en salida del sistema, intenta de nuevo');
            },
        });
    }
}
