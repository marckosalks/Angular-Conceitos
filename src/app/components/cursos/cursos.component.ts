import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { CursosService } from './cursos.service';

/* deconmentar quando for usar - devolver para o service*/
// , CursosService
// import { CursosService } from './components/cursos/cursos.service';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {
  // cursos: string[] = [];
  // cursosServices: CursosService;

  // constructor(private cursosService: CursosService) {
  //   // this.cursosServices = new CursosService();
  //   this.cursosServices = cursosService;
  // }

  // ngOnInit(): void {
  //   this.cursos = this.cursosServices.getCurusos();
  // }


  ngOnInit(): void {
    console.log("ola");
  }
}

