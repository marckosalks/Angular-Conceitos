import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Compras } from '../carrinho/compras.component';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [FormsModule, Compras, CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
})
export class ProdutoComponent implements OnInit {
  valorInput = '';
  mostarEsconderContador = true;

  // testePromisse = new Promise<string>((resolver, reject) => {
  //   console.log('Promise iniciada!');

  //   setInterval(() => {
  //     resolver('Promise resolvida!!!');
  //   }, 5000);
  // });

  private carrinhoService = inject(CarrinhoService);

  time$ = new Observable<string>((sub) => {
    console.log('INICIANDO OBSERVABLE');

    setInterval(() => {
      sub.next('RESOLVIDO OBSERVABLE');
    }, 5000);
  });

  ngOnInit(): void {
    // this.testePromisse.then((value) => {
    //   console.log(value);
    // });

    this.time$.subscribe((value) => console.log(value));
  }

  adiconarProd() {
    console.log('Valor do input: ', this.valorInput);
    this.carrinhoService.addProd(this.valorInput);
    this.valorInput = '';
  }
}
