import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counterValues: BehaviorSubject<number> = new BehaviorSubject(0);

  increment(){
    const oldValue = this.counterValues.value;
    const newNumber = oldValue + 1;
    this.counterValues.next(newNumber);
  }

  decrement(){
    const oldValue = this.counterValues.value;
    const newNumber = oldValue - 1;
    this.counterValues.next(newNumber);
  }

  constructor() { }
}
