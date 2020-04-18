import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-from-service',
  templateUrl: './counter-from-service.component.html',
  styleUrls: ['./counter-from-service.component.scss']
})
export class CounterFromServiceComponent {

  currentCount = 0;

  increaseCount(count: 1 = 1): void {
    this.currentCount += count;
  }

  decreaseCount(count: 1 = 1): void {
    this.currentCount -= count;
  }
}
