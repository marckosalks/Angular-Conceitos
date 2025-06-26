import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from '../../components/input-property/input-property.component';
import { LifeCicleComponent } from '../life-cicle/life-cicle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule,
    InputPropertyComponent,
    LifeCicleComponent,
    CommonModule,
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  url: string = 'https://profile-ms.vercel.app/';
  urlImg = 'https://picsum.photos/200/300';

  valorDigitadio: string = '';
  valorSalvo: string = '';

  valor: number = 5;
  nome = 'abc';

  nomeDoCurso: string = 'Angular';
  nomePessoa: string = 'marcão';

  deletarCompoente: boolean = false;

  getNumber() {
    return 1;
  }

  getTrue() {
    return true;
  }
  getFalse() {
    return false;
  }

  botaoClicado() {
    alert('Sou mais novo dev pleno da f1rst');
  }

  fazAlgo(evento: KeyboardEvent) {
    this.valorDigitadio = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(evento: any) {
    this.valorSalvo = evento;
  }

  mudarValor() {
    this.valor++;
  }

  DeletarComponentefunc() {
    this.deletarCompoente = true;
  }
}
