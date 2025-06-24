import { Routes } from '@angular/router';
import { RoomComponent } from './pages/room/room.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'cursos', component: CursosComponent },
];
