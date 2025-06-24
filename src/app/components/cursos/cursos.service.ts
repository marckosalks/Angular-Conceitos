import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  getCurusos() {
    return ['Java', 'React Native', 'Angular'];
  }
}
