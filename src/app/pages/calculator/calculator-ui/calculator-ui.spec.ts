import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorUi } from './calculator-ui';

describe('CalculatorUi', () => {
  let component: CalculatorUi;
  let fixture: ComponentFixture<CalculatorUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
