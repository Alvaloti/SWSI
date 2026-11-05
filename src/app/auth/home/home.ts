import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth-service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { HomeSol } from "../home-sol/home-sol";
import { Register } from "../register/register";
import { Users } from "../users/users";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { Area } from '../area/area';
import { Category } from '../category/category';
import { Role } from '../role/role';
import { Inventory } from '../inventory/inventory';
import { Assignments } from '../assignments/assignments';
import { Profile } from '../profile/profile';
import { Notifications } from '../notifications/notifications';
import { Reports } from '../reports/reports';
import { Audit } from '../audit/audit';
import { Catalogs } from '../catalogs/catalogs';
import { SlaSettings } from '../sla-settings/sla-settings';

@Component({
    selector: 'app-sidebar',
    imports: [
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
    Users,
    HomeSol,
    Area,
    Category,
    Role,
    Inventory,
    Assignments,
    Profile,
    Notifications,
    Reports,
    Audit,
    Catalogs,
    SlaSettings
],
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})
export class Home implements OnInit {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
    user: any;
    isMobile = true;
    menuAbierto = true;
    vistaActiva: string = 'users';

    constructor(
        private authService: AuthService,
        private router: Router,
        private breakpointObserver: BreakpointObserver,
    ) {}

    private http = inject(HttpClient);

    // Configuración de Tabla
    columnasVisibles: string[] = ['id', 'nombre', 'email', 'rol', 'acciones'];
    datos = new MatTableDataSource<any>([]);
    cargando = false;

    // Estado de Paginación y Filtros (Servidor)
    totalRegistros = 0;
    tamanoPagina = 10;
    paginaActual = 0;
    filtroBusqueda = '';

    ngOnInit() {
        this.observarTamanoPantalla();
        this.authService.getUser().subscribe({
            next: (response) => {
                if (response.status === 'success') {
                    this.user = response.user;
                    if (this.hasPermission('users.manage')) this.vistaActiva = 'users';
                    else if (this.hasPermission('reports.view')) this.vistaActiva = 'reportes';
                    else if (this.hasPermission('audit.view')) this.vistaActiva = 'auditoria';
                    else if (this.hasPermission('inventory.manage')) this.vistaActiva = 'inventario';
                    else if (this.hasPermission('catalogs.manage')) this.vistaActiva = 'catalogos';
                    else if (this.hasPermission('sla.manage')) this.vistaActiva = 'sla';
                }
            },
            error: (error) => console.error('No se pudo cargar el usuario:', error),
        });
    }

    cambiarVista(nuevaVista: string) {
        this.vistaActiva = nuevaVista;
    }

    hasPermission(permission: string): boolean {
        const permissions: string[] = this.user?.rolId?.permissions ?? [];
        return permissions.includes('system.manage') || permissions.includes(permission);
    }

    hasAnyAdministrationPermission(): boolean {
        return ['catalogs.manage', 'roles.manage', 'inventory.manage', 'sla.manage'].some((permission) => this.hasPermission(permission));
    }

    private observarTamanoPantalla() {
        this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            this.isMobile = res.matches;
            this.menuAbierto = !res.matches;
        });
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
