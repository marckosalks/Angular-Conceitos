import { Component } from '@angular/core';
import { LabelComponent } from '../../components/label/label.component';
import { AsyncCompComponent } from '../../components/async-comp/async-comp.component';

@Component({
  selector: 'app-testes',
  standalone: true,
  imports: [LabelComponent, AsyncCompComponent],
  templateUrl: './testes.component.html',
  styleUrl: './testes.component.scss'
})
export class TestesComponent {
    title = 'angular-tests';
}
