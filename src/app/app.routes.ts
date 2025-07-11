import { Routes } from '@angular/router';
import { RoomComponent } from './pages/room/room.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { LifeCicleComponent } from './pages/life-cicle/life-cicle.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { SinalsComponent } from './pages/sinals/sinals.component';
import { TestesComponent } from './pages/testes/testes.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { ObservablesComponent } from './pages/observables/observables.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'binding', component: DataBindingComponent },
  { path: 'lifeCicle', component: LifeCicleComponent },
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'signal', component: SinalsComponent },
  { path: 'testes', component: TestesComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'observables', component: ObservablesComponent },
];
