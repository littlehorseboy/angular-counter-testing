import { Component, OnInit } from '@angular/core';
import { CounterFromServiceService } from './counter-from-service.service';

@Component({
  selector: 'app-counter-from-service',
  templateUrl: './counter-from-service.component.html',
  styleUrls: ['./counter-from-service.component.scss']
})
export class CounterFromServiceComponent implements OnInit {

  currentCount: number;

  constructor(
    private counterFromServiceService: CounterFromServiceService,
  ) { }

  ngOnInit(): void {
    this.syncCurrentCount();
  }

  syncCurrentCount(): void {
    this.currentCount = this.counterFromServiceService.currentCount;
  }

  increaseCount(count: 1 = 1): void {
    this.counterFromServiceService.increaseCount(count);
    this.syncCurrentCount();
  }

  decreaseCount(count: 1 = 1): void {
    this.counterFromServiceService.decreaseCount(count);
    this.syncCurrentCount();
  }
}
