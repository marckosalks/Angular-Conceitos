import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TesteService } from '../../../services/teste.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent implements OnInit {
  constructor(private router: Router, private testeS: TesteService) {}

  info: string | undefined = '';

  ngOnInit(): void {
    this.info = this.testeS.getInfo();
    console.log(this.info);
  }

  goBackToHome() {
    this.router.navigate(['']);
  }
}
