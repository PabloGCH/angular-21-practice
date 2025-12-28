import { TestBed } from '@angular/core/testing';

import { CalculatorProcessor } from './calculator-processor';

describe('CalculatorProcessor', () => {
  let service: CalculatorProcessor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorProcessor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
