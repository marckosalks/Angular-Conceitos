import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, exhaustMap, filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

  input = new FormControl<string>('');

  constructor(){
    //como fazer um autocomplet com angular
    this.input.valueChanges
    .pipe(
      filter(valor => !!valor),
      debounceTime(1000),
      exhaustMap(valorPesquisa => this.buscarPesquisa(valorPesquisa || '')))
      // switchMap(valorPesquisa => this.buscarPesquisa(valorPesquisa || '')))
    .subscribe(itemInput => {

      console.log( `Buscando... ${itemInput}`)
    });
  }

  buscarPesquisa(pesquisa: string ){
    return of(`Resultado: Parabens voce entrou na F1rst`)
    .pipe(
      tap(() => console.log(`Buscando...  ${pesquisa}`)),  delay(3000),)
  }

}
