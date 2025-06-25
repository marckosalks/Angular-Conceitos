import { Injectable } from '@angular/core';
import { Compra } from './carrinho.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private carrinho: Compra[] = [];
  private produtoAdicionado$ = new BehaviorSubject<number>(0);
  // private produtoAdicionado$ = new Subject<number>();

  obterValorNotificado() {
    return this.produtoAdicionado$.asObservable();
  }

  addProd(produto: string) {
    const prodCompra: Compra = {
      id: this.carrinho.length + 1,
      nomeProd: produto,
    };

    this.carrinho.push(prodCompra);
    this.produtoAdicionado$.next(this.carrinho.length);
  }
}
