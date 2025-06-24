import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CursosService } from './components/cursos/cursos.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), CursosService],
};
