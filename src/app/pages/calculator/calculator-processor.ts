import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorProcessor {
  public readonly resultText = signal('0');
  public readonly subResultText = signal('0');
  public readonly lastOperator = signal('+');


}
