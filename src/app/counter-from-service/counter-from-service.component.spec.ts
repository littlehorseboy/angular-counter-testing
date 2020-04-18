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

  it('data-testid="currentCount" 渲染的預設內容為 0', () => {
    const { nativeElement } = fixture;
    expect(
      nativeElement.querySelector('[data-testid=currentCount]').textContent.trim(),
    ).toBe('0');
  });

  it('按下 + 按鈕後內容是否變為 1', () => {
    const { nativeElement } = fixture;

    const button = nativeElement.querySelector('[data-testid=increaseBtn]');
    button.click();

    fixture.detectChanges();

    expect(
      nativeElement.querySelector('[data-testid=currentCount]').textContent.trim(),
    ).toBe('1');
  });

  it('按下 - 按鈕後內容是否變為 -1', () => {
    const { nativeElement } = fixture;

    const button = nativeElement.querySelector('[data-testid=decreaseBtn]');
    button.click();

    fixture.detectChanges();

    expect(
      nativeElement.querySelector('[data-testid=currentCount]').textContent.trim(),
    ).toBe('-1');
  });


  it('component 使用 increaseCount() 兩次後，currentCount 值為 2', () => {
    component.increaseCount();
    component.increaseCount();

    expect(component.currentCount).toBe(2);
  });

  it('component 使用 decreaseCount() 三次後，currentCount 值為 -3', () => {
    component.decreaseCount();
    component.decreaseCount();
    component.decreaseCount();

    expect(component.currentCount).toBe(-3);
  });
});
