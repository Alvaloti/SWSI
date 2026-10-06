import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Home } from './auth/home/home';
import { Administracion } from './auth/administracion/administracion';
import { Solicitud } from './auth/solicitud/solicitud';
import { Ticket } from './auth/ticket/ticket';
import { HomeTick } from './auth/home-tick/home-tick';
import { HomeSol } from './auth/home-sol/home-sol';
import { HomeTec } from './auth/home-tec/home-tec';
import { HomeSup } from './auth/home-sup/home-sup';
import { Users } from './auth/users/users';
import { Area } from './auth/area/area';
import { Category } from './auth/category/category';
import { Role } from './auth/role/role';
import { Inventory } from './auth/inventory/inventory';
import { authGuard } from './auth.guard';
import { Assignments } from './auth/assignments/assignments';
export const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register, canActivate: [authGuard] },
    { path: 'user', component: Users, canActivate: [authGuard] },
    { path: 'home', component: Home, canActivate: [authGuard] },
    { path: 'homesup', component: HomeSup, canActivate: [authGuard] },
    { path: 'homesol', component: HomeSol, canActivate: [authGuard] },
    { path: 'hometec', component: HomeTec, canActivate: [authGuard] },
    { path: 'administracion', component: Administracion, canActivate: [authGuard] },
    { path: 'solicitud', component: Solicitud, canActivate: [authGuard] },
    { path: 'ticket', component: Ticket, canActivate: [authGuard] },
    { path: 'hometick', component: HomeTick, canActivate: [authGuard] },
    { path: 'area', component: Area, canActivate: [authGuard] },
    { path: 'categoria', component: Category, canActivate: [authGuard] },
    { path: 'role', component: Role, canActivate: [authGuard] },
    { path: 'inventario', component: Inventory, canActivate: [authGuard] },
    { path: 'asignaciones', component: Assignments, canActivate: [authGuard] },
    { path: '**', redirectTo: '/login' },
];
