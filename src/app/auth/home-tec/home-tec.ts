import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth-service';
import { finalize, timeout } from 'rxjs';
import { Profile } from '../profile/profile';

type TipoAsignacion = 'solicitudes' | 'tickets';

@Component({
    selector: 'app-home-tec',
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        Profile,
    ],
    templateUrl: './home-tec.html',
    styleUrl: './home-tec.css',
})
export class HomeTec {
    estados: string[] = [];
    @ViewChild(MatSidenav) sidenav!: MatSidenav;

    user: any;
    isMobile = true;
    menuAbierto = true;
    vistaActiva: TipoAsignacion = 'solicitudes';
    columnasVisibles: string[] = ['folio', 'asunto', 'descripcion', 'prioridad', 'estado', 'comentarios', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;
    errorCarga = '';
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    private temporizadorBusqueda?: ReturnType<typeof setTimeout>;

    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
        private changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.observarTamanoPantalla();
        this.cargarEstados();
        this.cargarDatos();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success') this.user = response.user;
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }

    private cargarEstados() {
        this.authService.getEstados().subscribe({
            next: (response) => {
                this.estados = response.estados ?? [];
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => console.error('No se pudo cargar el catálogo de estados:', error),
        });
    }

    private observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
    }

    cambiarVista(nuevaVista: TipoAsignacion) {
        if (this.vistaActiva === nuevaVista) return;
        this.vistaActiva = nuevaVista;
        this.paginaActual = 0;
        this.filtroBusqueda = '';
        this.cargarDatos();
        if (this.isMobile) this.menuAbierto = false;
    }

    cargarDatos() {
        this.cargando = true;
        this.errorCarga = '';
        this.datos.data = [];
        const vistaSolicitada = this.vistaActiva;
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString())
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda)
            .set('assignedToMe', 'true');
        const request = vistaSolicitada === 'tickets'
            ? this.authService.getTickets(params)
            : this.authService.getSolicitudes(params);

        request.pipe(
            timeout(15000),
            finalize(() => {
                if (this.vistaActiva === vistaSolicitada) {
                    this.cargando = false;
                    this.changeDetectorRef.markForCheck();
                }
            }),
        ).subscribe({
            next: (respuesta) => {
                if (this.vistaActiva !== vistaSolicitada) return;
                const registros = vistaSolicitada === 'tickets' ? respuesta.tickets : respuesta.solicitudes;
                this.datos.data = Array.isArray(registros) ? registros : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                if (this.vistaActiva !== vistaSolicitada) return;
                console.error(`No se pudieron cargar las ${vistaSolicitada}:`, error);
                this.datos.data = [];
                this.totalRegistros = 0;
                this.errorCarga = error.error?.message ?? `No fue posible cargar ${vistaSolicitada}.`;
                this.changeDetectorRef.markForCheck();
            },
        });
    }

    obtenerAsunto(registro: any): string {
        return this.vistaActiva === 'tickets' ? registro.titulo : registro.tipo;
    }

    onFiltrar(evento: Event) {
        this.filtroBusqueda = (evento.target as HTMLInputElement).value.trim();
        this.paginaActual = 0;
        if (this.temporizadorBusqueda) clearTimeout(this.temporizadorBusqueda);
        this.temporizadorBusqueda = setTimeout(() => this.cargarDatos(), 300);
    }

    onCambiarPagina(evento: PageEvent) {
        this.paginaActual = evento.pageIndex;
        this.tamanoPagina = evento.pageSize;
        this.cargarDatos();
    }

    toggleMenu() {
        this.menuAbierto = !this.menuAbierto;
    }

    editarRegistro(registro: any) {
        const id = registro._id ?? registro.id;
        if (!id) return;
        const comentarios = window.prompt('Comentarios:', registro.comentarios ?? '');
        if (comentarios === null) return;

        const request = this.vistaActiva === 'tickets'
            ? this.authService.updateTicket(id, { comentarios })
            : this.authService.updateSolicitud(id, { comentarios });
        request.subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible actualizar el registro.'),
        });
    }

    cambiarEstado(registro: any, event: Event) {
        const estado = (event.target as HTMLSelectElement).value;
        const request = this.vistaActiva === 'tickets'
            ? this.authService.updateTicket(registro._id, { estado })
            : this.authService.updateSolicitud(registro._id, { estado });
        request.subscribe({
            next: () => this.cargarDatos(),
            error: (error) => {
                window.alert(error.error?.message ?? 'No fue posible actualizar el estado.');
                this.cargarDatos();
            },
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
