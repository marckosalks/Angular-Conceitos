import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  info: string = '';

  constructor() {}

  setInfo(Info: string) {
    return (this.info = Info);
  }

  getInfo() {
    return this.info;
  }
}
