import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  Injector,
  OnInit,
  signal,
} from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-sinals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sinals.component.html',
  styleUrl: './sinals.component.scss',
})
export class SinalsComponent implements OnInit {
  // declarar var do tipo signal
  // protected exemploSignalCount = signal<Pessoa>({nome:'Marcos',  idade: 20});
  protected exemploSignalCount = signal(0);
  protected showCount = signal(true);

  // quando ele processa, assume exemploSignalCount como dependencia
  // toda vez que o exemploSignalCount for modificado ele notifica
  protected computedExemplo = computed(() => {
    // console.log('COMPUTED ATIVAR');

    if (this.showCount()) {
      return `${this.exemploSignalCount()} computed!`;
    } else {
      return ' Nada';
    }
  });

  // usando dentro do construtor
  constructor(private injector: Injector) {
    // effect(()=>{
    //    console.log(`ALTERAÇÃO EFFECT: ${this.showCount()}`);
    // })
  }

  // usar effect fora do construtor
  ngOnInit(): void {
    effect(()=>{
       console.log(`ALTERAÇÃO EFFECT: ${this.showCount()}`);
    }, {injector: this.injector})
  }

  executar() {
    this.exemploSignalCount.update((atual) => atual + 1);
    // console.log('passei pelo computed');
    // this.exemploSignalCount.update(atual => atual +1);

    // SET: define o signal para um novo valor absoluto
    // this.exemploSignalCount.set(20);

    // UPDATE: define o signal com base no valor atual
    // this.exemploSignalCount.update(atual=> {
    //   return { ...atual, idade: 24}

    // });
  }

  // A cada mudança na pagina ele chama o aj novamente
  // chamaOAjota() {
  //   console.log('chama o aj');
  //   return 'chama o aj';
  // }

  ShowCoutFunc() {
    if (this.showCount) {
      this.showCount.update((atual) => !atual);
    }
  }
}
