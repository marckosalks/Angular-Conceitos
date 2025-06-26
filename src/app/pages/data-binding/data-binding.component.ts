import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  url: string = 'https://profile-ms.vercel.app/';
  urlImg = 'https://picsum.photos/200/300';

  valorDigitadio: string = '';
  valorSalvo: string = '';

  nome = 'abc';

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
}
