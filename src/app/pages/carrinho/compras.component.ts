import { Component, inject, OnDestroy } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  template: `
    <span>Qtd: </span>
    <span>{{ qtdProd }}</span>
  `,
})
export class Compras implements OnDestroy {
  carrinhoService = inject(CarrinhoService);
  quantidadeCarrinho$ = this.carrinhoService.obterValorNotificado();

  qtdProd: number = 0;

  sub = new Subscription();

  ngOnDestroy(): void {
    console.log('Carrinho destruido');
    this.sub.unsubscribe();
  }

  constructor() {
    const subCotator = this.quantidadeCarrinho$.subscribe((qtd) => {
      console.log('VALOR NOTIFICADO: ', qtd);
      this.qtdProd = qtd;
    });

    this.sub.add(subCotator);
  }
}
