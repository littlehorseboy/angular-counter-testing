import { Injectable } from '@angular/core';
import { Observable, Subscriber, throwError, of } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';

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
    return new Observable((subscriber: Subscriber<number>): void => {
      subscriber.error(new Error('what!?'));
      subscriber.complete();
      // subscriber.next(1);
      // subscriber.complete();
    })
      .pipe(
        delay(1000),
        tap((value) => {
          this.currentCount = value;
        }),
        catchError((error) => {
          this.currentCount = 500;
          // return of(2);
          return throwError(error);
        }),
      );
  }
}
