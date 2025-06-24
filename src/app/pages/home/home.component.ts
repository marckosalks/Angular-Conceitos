import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TesteService } from '../../../services/teste.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('testeInput') testeInput: ElementRef | undefined;

  constructor(private testeS: TesteService, private router: Router) {}

  onSetValue() {
    const valorInput = this.testeInput?.nativeElement.value;
    this.testeS.setInfo(valorInput);
    console.log(valorInput);

    this.router.navigate(['/room']);
  }
}
