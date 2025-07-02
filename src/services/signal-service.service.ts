import { Injectable, signal } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }

  // private count$ = new BehaviorSubject(1);

  // // isso impede de usar um service
  // getCount(){
  //   return this.count$.asObservable();
  // }

   count$ = signal(1);

  getCounte(){
    return this.count$.asReadonly()
  }

}
