import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { timer } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(appRoutes), {
    provide: APP_INITIALIZER,
    multi: true,
    useValue: () => timer(300)
  }],
};
