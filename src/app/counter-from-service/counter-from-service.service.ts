import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterFromServiceService {

  currentCount = 0;

  increaseCount(count: 1 = 1): void {
    this.currentCount += count;
  }

  decreaseCount(count: 1 = 1): void {
    this.currentCount -= count;
  }
}
