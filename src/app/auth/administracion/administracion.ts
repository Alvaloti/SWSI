import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { AuthService } from '../../service/auth-service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    selector: 'app-administracion',
    standalone: true,
    imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    RouterLink
],
    templateUrl: './administracion.html',
    styleUrl: './administracion.css',
})
export class Administracion {

    constructor(
            private authService: AuthService,
            private router: Router,
        ) {}
    loadChildren(arg0: string) {
        this.router.navigate([`/${arg0}`]);
    }
}
