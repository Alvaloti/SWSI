import { ChangeDetectorRef, Component, inject, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { finalize, timeout } from 'rxjs';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth-service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HomeSol } from "../home-sol/home-sol";
import { Users } from "../users/users";
import { Profile } from '../profile/profile';

@Component({
    selector: 'app-home-sup',
    imports: [
    CommonModule,
    MatToolbar,
    MatButtonModule,
    MatIcon,
    MatSidenavContainer,
    MatSidenav,
    MatDivider,
    MatSidenavContent,
    MatTableModule,
    Users,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
    Profile
],
    templateUrl: './home-sup.html',
    styleUrl: './home-sup.css',
})
export class HomeSup {
    @ViewChild('assignmentDialog') assignmentDialog!: TemplateRef<unknown>;
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
    user: any;
    isMobile = true;
    menuAbierto = true;
    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
        private changeDetectorRef: ChangeDetectorRef,
    ) {}

    private http = inject(HttpClient);

    // Configuración de Tabla
    columnasVisibles: string[] = ['folio', 'tipo', 'descripcion', 'prioridad', 'estado', 'comentarios', 'acciones'];
    columnasTickets: string[] = ['folio', 'titulo', 'descripcion', 'prioridad', 'estado', 'comentarios', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;
    errorCarga = '';
    vistaActiva: string = 'users';

    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';
    tecnicos: any[] = [];
    registroEditando: any;
    tipoEditando: 'solicitud' | 'ticket' = 'solicitud';
    tecnicoSeleccionado = '';
    comentariosEditando = '';
    guardandoAsignacion = false;

    private dialog = inject(MatDialog);
    private dialogRef?: MatDialogRef<unknown>;

    ngOnInit() {
        this.observarTamanoPantalla();
        this.cargarTecnicos();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success') this.user = response.user;
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }

    private cargarTecnicos() {
        const params = new HttpParams().set('page', '1').set('limit', '100').set('role', 'tecnico');
        this.authService.getUsers(params).subscribe({
            next: (response) => {
                const usuarios = response.users ?? response;
                this.tecnicos = Array.isArray(usuarios)
                    ? usuarios.filter((tecnico) => tecnico.active !== false)
                    : [];
            },
            error: (error) => console.error('No se pudieron cargar los técnicos:', error),
        });
    }

    private observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
    }

    cambiarVista(nuevaVista: string) {
        this.vistaActiva = nuevaVista;
        if (nuevaVista === 'solicitud' || nuevaVista === 'tickets') {
            this.paginaActual = 0;
            this.filtroBusqueda = '';
            this.cargarDatos();
        }
        if (this.isMobile) this.menuAbierto = false;
    }

    cargarDatos() {
        this.cargando = true;
        this.errorCarga = '';
        this.datos.data = [];

        // Configurar parámetros de la URL para el backend
        const params = new HttpParams()
            .set('page', (this.paginaActual + 1).toString()) // Las API suelen empezar en página 1
            .set('limit', this.tamanoPagina.toString())
            .set('search', this.filtroBusqueda);

        const vistaSolicitada = this.vistaActiva;
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
                const registros = vistaSolicitada === 'tickets'
                    ? respuesta.tickets ?? respuesta
                    : respuesta.solicitudes ?? respuesta;
                this.datos.data = Array.isArray(registros) ? registros : [];
                this.totalRegistros = respuesta.total ?? this.datos.data.length;
                this.changeDetectorRef.markForCheck();
            },
            error: (error) => {
                if (this.vistaActiva !== vistaSolicitada) return;
                console.error(`No se pudieron cargar ${vistaSolicitada}:`, error);
                this.errorCarga = error.error?.message ?? `No fue posible cargar ${vistaSolicitada}.`;
                this.totalRegistros = 0;
                this.changeDetectorRef.markForCheck();
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

    eliminarSolicitud(solicitud: any) {
        const id = solicitud._id ?? solicitud.id;
        if (!id || !window.confirm(`¿Eliminar la solicitud "${solicitud.folio ?? id}"?`)) return;
        this.authService.deleteSolicitud(id).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar la solicitud.'),
        });
    }
    editarSolicitud(solicitud: any) {
        this.abrirEditor(solicitud, 'solicitud');
    }

    eliminarTicket(ticket: any) {
        const id = ticket._id ?? ticket.id;
        if (!id || !window.confirm(`¿Eliminar el ticket "${ticket.folio ?? id}"?`)) return;
        this.authService.deleteTicket(id).subscribe({
            next: () => this.cargarDatos(),
            error: (error) => window.alert(error.error?.message ?? 'No fue posible eliminar el ticket.'),
        });
    }

    editarTicket(ticket: any) {
        this.abrirEditor(ticket, 'ticket');
    }

    private abrirEditor(registro: any, tipo: 'solicitud' | 'ticket') {
        const id = registro._id ?? registro.id;
        if (!id) return;
        this.registroEditando = registro;
        this.tipoEditando = tipo;
        this.tecnicoSeleccionado = registro.tecnico_id?._id ?? registro.tecnico_id ?? '';
        this.comentariosEditando = registro.comentarios ?? '';
        this.dialogRef = this.dialog.open(this.assignmentDialog, {
            width: '520px',
            maxWidth: '95vw',
            disableClose: true,
        });
    }

    cerrarEditor() {
        this.dialogRef?.close();
    }

    guardarAsignacion() {
        const id = this.registroEditando?._id ?? this.registroEditando?.id;
        if (!id || !this.tecnicoSeleccionado || this.guardandoAsignacion) return;
        this.guardandoAsignacion = true;
        const cambios = {
            tecnico_id: this.tecnicoSeleccionado,
            comentarios: this.comentariosEditando,
        };
        const request = this.tipoEditando === 'ticket'
            ? this.authService.updateTicket(id, cambios)
            : this.authService.updateSolicitud(id, cambios);
        request.subscribe({
            next: () => {
                this.guardandoAsignacion = false;
                this.cerrarEditor();
                this.cargarDatos();
            },
            error: (error) => {
                this.guardandoAsignacion = false;
                window.alert(error.error?.message ?? 'No fue posible asignar el técnico.');
            },
        });
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
