import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteSeService {

  private httpClient =  inject(HttpClient);

  private url: string = 'http://localhost:3000/fruits';

  constructor() { }

  getFruits() {
    return this.httpClient.get<string[]>(this.url);
  }
}
