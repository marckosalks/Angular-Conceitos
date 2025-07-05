import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

export interface Product{
  title: string
}


@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})


export class ObservablesComponent {
  http = inject(HttpClient);

  cold$ = new Observable<number>((subscriber)=>{
    const numeroAleatorio = Math.round(Math.random() * 2);
    console.log('EXECUTANDO', numeroAleatorio);
    subscriber.next(numeroAleatorio);
  });


  hot$ = new BehaviorSubject<number>(0);

  produto$ = this.http.get<Product>('https://dummyjson.com/products/1')
    .pipe(shareReplay());

  constructor(){
    // this.cold$.subscribe(valor => console.log(`Recebendo ${valor}`));


    this.produto$.subscribe(valor => console.log(`Recebendo ${valor.title}`));

    this.produto$.subscribe(valor => console.log(`Recebendo ${valor.title}`));


    // this.hot$.subscribe(valor => console.log('SUB1', valor));
    // this.hot$.subscribe(valor => console.log('SUB2', valor));

    // setTimeout(()=>{
    //   this.hot$.next(Math.round(Math.random() * 100));
    // }, 5000);
  }
}
