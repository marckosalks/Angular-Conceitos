import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, interval, take, takeUntil, map } from 'rxjs';
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
export class ProdutoComponent implements OnInit, OnDestroy {
  valorInput = '';
  mostarEsconderContador = true;

  private carrinhoService = inject(CarrinhoService);
  private destroy$ = new Subject<void>();

  // Observable usando RxJS interval (mais seguro)
  time$: Observable<string> = interval(5000).pipe(
    map(() => 'RESOLVIDO OBSERVABLE')
  );

  ngOnInit(): void {
    this.time$
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((value) => console.log(value));
  }

  adiconarProd(): void {
    console.log('Valor do input: ', this.valorInput);
    this.carrinhoService.addProd(this.valorInput);
    this.valorInput = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log('ngOnDestroy chamado');
  }
}
