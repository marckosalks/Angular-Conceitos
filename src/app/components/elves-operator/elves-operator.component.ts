import { Component } from '@angular/core';

@Component({
  selector: 'app-elves-operator',
  standalone: true,
  imports: [],
  templateUrl: './elves-operator.component.html',
  styleUrl: './elves-operator.component.scss'
})
export class ElvesOperatorComponent {
  transportadora: any = {
    tarefa: 'Entregar encomendas',
    responsavel: null,
    // responsavel: { nome: 'Anderson'}
  }
}
