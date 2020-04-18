import { TestBed } from '@angular/core/testing';

import { CounterFromServiceService } from './counter-from-service.service';

describe('CounterFromServiceService', () => {
  let service: CounterFromServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterFromServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('使用 increaseCount() 兩次後，currentCount 值為 2', () => {
    service.increaseCount();
    service.increaseCount();

    expect(service.currentCount).toBe(2);
  });

  it('使用 decreaseCount() 三次後，currentCount 值為 -3', () => {
    service.decreaseCount();
    service.decreaseCount();
    service.decreaseCount();

    expect(service.currentCount).toBe(-3);
  });

  it('使用 getCount() 取得 observable 進行訂閱取得值為 0', (done: DoneFn) => {
    service.getCount().subscribe(
      (value) => {
        expect(value).toBe(1);
        expect(service.currentCount).toBe(1);
        done();
      },
    );
  });
});
