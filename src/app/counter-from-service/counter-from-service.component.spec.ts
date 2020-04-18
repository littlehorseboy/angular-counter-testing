import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFromServiceComponent } from './counter-from-service.component';

describe('CounterFromServiceComponent', () => {
  let component: CounterFromServiceComponent;
  let fixture: ComponentFixture<CounterFromServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterFromServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterFromServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
