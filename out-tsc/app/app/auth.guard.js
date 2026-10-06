import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from './service/auth-service';
export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.getUser().pipe(map((response) => response?.status === 'success'
        ? true
        : router.createUrlTree(['/login'])), catchError(() => of(router.createUrlTree(['/login']))));
};
