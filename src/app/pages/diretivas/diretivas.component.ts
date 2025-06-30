import { Component } from '@angular/core';
import { NgSwitchComponent } from '../../components/ng-switch/ng-switch.component';
import { ElvesOperatorComponent } from '../../components/elves-operator/elves-operator.component';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [NgSwitchComponent, ElvesOperatorComponent],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.scss'
})
export class DiretivasComponent {

}
