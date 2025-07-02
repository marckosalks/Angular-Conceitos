import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TesteSeService } from '../../../services/teste-se.service';

@Component({
  selector: 'app-async-comp',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './async-comp.component.html',
  styleUrl: './async-comp.component.scss',
})
export class AsyncCompComponent {
  private testeSeService = inject(TesteSeService);

  protected fuits$ = this.testeSeService.getFruits();
}
