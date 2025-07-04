import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent {
  // input signals -  substituto para o @input
  // text = input.required<any>()
  // @Input({ required: true }) -- forma antiga
  //text = '';
  text = input.required<string>()
}
