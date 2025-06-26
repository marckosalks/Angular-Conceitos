import { Routes } from '@angular/router';
import { RoomComponent } from './pages/room/room.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { LifeCicleComponent } from './pages/life-cicle/life-cicle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'binding', component: DataBindingComponent },
  { path: 'lifeCicle', component: LifeCicleComponent },
];
