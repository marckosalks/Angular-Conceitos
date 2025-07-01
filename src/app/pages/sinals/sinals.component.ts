import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-sinals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sinals.component.html',
  styleUrl: './sinals.component.scss',
})


export class SinalsComponent {

  // declarar var do tipo signal
  // protected exemploSignalCount = signal<Pessoa>({nome:'Marcos',  idade: 20});
  protected exemploSignalCount = signal(0);

  protected computedExemplo = computed(()=> `${this.exemploSignalCount()} computed!`)

  executar() {
    console.log('passei pelo computed');
    this.exemploSignalCount.update(atual => atual +1);

    // SET: define o signal para um novo valor absoluto
    // this.exemploSignalCount.set(20);

    // UPDATE: define o signal com base no valor atual
    // this.exemploSignalCount.update(atual=> {
    //   return { ...atual, idade: 24}

    // });

  }

  // A cada mudança na pagina ele chama o aj novamente
  chamaOAjota(){
    console.log('chama o aj');
    return 'chama o aj';
  }

}
