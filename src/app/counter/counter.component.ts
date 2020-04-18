import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  currentCount = 0;

  increaseCount(count: 1 = 1): void {
    this.currentCount += count;
  }

  decreaseCount(count: 1 = 1): void {
    this.currentCount -= count;
  }
}
