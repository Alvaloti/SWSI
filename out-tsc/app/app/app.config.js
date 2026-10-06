import { importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        importProvidersFrom(HttpClientModule),
    ]
};
