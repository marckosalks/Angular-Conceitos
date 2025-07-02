import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-on-push',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <p>OnPushComponent valor: {{ valor() }}</p> `,
})
export class OnPushComponent {
  // valor = 1;
  valor = signal(1);

  // usando OnPushComponent
  // constructor(){
  //   setInterval(() => {
  //     this.valor += 1;
  //     console.log(`valor do onPush: ${this.valor}`);
  //   }, 2000);
  // }



  // constructor(){
  //   setInterval(() => {

  //     this.valor.update(atual => atual + 1);
  //     console.log(`valor do onPush: ${this.valor()}`);
  //   }, 2000);
  // }
}
