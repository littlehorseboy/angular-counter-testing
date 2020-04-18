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
});
