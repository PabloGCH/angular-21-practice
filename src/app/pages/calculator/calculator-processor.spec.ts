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

  it('should be created with default values', () => {
    expect(service.resultText()).toEqual('0');
    expect(service.subResultText()).toEqual('0');
    expect(service.lastOperator()).toEqual('+');
  });

  it('should set resultText, subResultText to "0" when C is pressed', () => {
    service.resultText.set('1');
    service.subResultText.set('2');

    service.constructNumber('C');

    expect(service.resultText()).toEqual('0');
    expect(service.subResultText()).toEqual('0');
  })

  it('should update resultText with number input', () => {
    service.constructNumber('1');
    expect(service.resultText()).toEqual('1');

    service.constructNumber('2');
    expect(service.resultText()).toEqual('12');
  });

  it('should handle operators correctly', () => {
    service.constructNumber('2');
    service.constructNumber('-');
    expect(service.resultText()).toEqual('0');
    service.constructNumber('1');

    expect(service.subResultText()).toEqual('2');
    expect(service.lastOperator()).toEqual('-');
    expect(service.resultText()).toEqual('1');
  });

  it('should calculate result correctly for addition', () => {
    service.constructNumber('2');
    service.constructNumber('+');
    service.constructNumber('1');
    service.constructNumber('=');
    
    expect(service.resultText()).toEqual('3');
    expect(service.subResultText()).toEqual('0');
  });

  it('should calculate result correctly for subtraction', () => {
    service.constructNumber('2');
    service.constructNumber('-');
    service.constructNumber('1');
    service.constructNumber('=');
    
    expect(service.resultText()).toEqual('1');
    expect(service.subResultText()).toEqual('0');
  });

  it('should calculate result correctly for multiplication', () => {
    service.constructNumber('3');
    service.constructNumber('*');
    service.constructNumber('2');

    service.constructNumber('=');
    
    expect(service.resultText()).toEqual('6');
    expect(service.subResultText()).toEqual('0');
  });

  it('should calculate result correctly for division', () => {
    service.constructNumber('1');
    service.constructNumber('0');
    service.constructNumber('÷');
    service.constructNumber('2');

    service.constructNumber('=');
    
    expect(service.resultText()).toEqual('5');
    expect(service.subResultText()).toEqual('0');
  });

  it('should handle decimal point correctly', () => {
    service.constructNumber('3');
    service.constructNumber('.');
    service.constructNumber('2');

    service.constructNumber('=');
    
    expect(service.resultText()).toEqual('3.2');
  });

  it('should handle decimal point starting with 0', () => {
    service.constructNumber('0');
    service.constructNumber('.');
    service.constructNumber('2');

    service.constructNumber('=');
    
    expect(service.resultText()).toEqual('0.2');
  });

  it('should handle sign change +/-', () => {
    service.constructNumber('4');
    service.constructNumber('+/-');
    
    expect(service.resultText()).toEqual('-4');
  });

  it('should handle backspace', () => {
    service.constructNumber('4');
    service.constructNumber('5');
    service.constructNumber('Backspace');

    expect(service.resultText()).toEqual('4');
  });

  it('should handle backspace with negative numbers', () => {
    service.constructNumber('-');
    service.constructNumber('2');
    service.constructNumber('3');

    service.constructNumber('Backspace');
    expect(service.resultText()).toEqual('-2');
    service.constructNumber('Backspace');
    expect(service.resultText()).toEqual('-');
    service.constructNumber('Backspace');
    expect(service.resultText()).toEqual('0');
  });

  it('should handle max length', () => {
    for(let i = 0; i < 15; i++)
      service.constructNumber('1');

    expect(service.resultText().length).toEqual(10);
  });

  it('should handle invalid input', () => {
    service.constructNumber('a');
    service.constructNumber('b');
    service.constructNumber('c');

    expect(service.resultText()).toEqual('0');
    expect(service.subResultText()).toEqual('0');
    expect(service.lastOperator()).toEqual('+');
  });

  it('should handle negative zero input correctly', () => {
    // todo:
  });
});
