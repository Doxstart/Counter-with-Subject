import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subscribe() {
    throw new Error('Method not implemented.');
  }

  counter = new BehaviorSubject<number>(0);

  constructor() { }

  increment(){
    const actualValue = this.counter.value;
    const newValue = actualValue + 1;
    this.counter.next(newValue);
  }

  decrement(){
    const actualValue = this.counter.value;
    const newValue = actualValue - 1;
    this.counter.next(newValue);
  }

}
