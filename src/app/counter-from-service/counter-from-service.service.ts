import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, tap, map, takeUntil } from 'rxjs/operators';

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

  getCount() {
    const stopSignal$ = new Subject();

    return of(1)
      .pipe(
        delay(1000),
        map((value) => {
          if (!value) {
            return value;
          } else {
            stopSignal$.next();
          }
        }),
        tap((value) => {
          debugger;
          this.currentCount = value;
        }),
        takeUntil(stopSignal$),
      );
  }
}
