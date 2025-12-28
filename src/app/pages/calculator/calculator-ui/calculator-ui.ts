import { Component, computed, HostListener, inject, viewChildren } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';
import { CalculatorProcessor } from '../calculator-processor';

@Component({
  selector: 'calculator-ui',
  imports: [ CalculatorButton ],
  templateUrl: './calculator-ui.html',
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorUi {
  private calculatorProcessor = inject(CalculatorProcessor);
  private calculatorButtons = viewChildren(CalculatorButton);

  protected resultText = computed(() => this.calculatorProcessor.resultText());
  protected subResultText = computed(() => this.calculatorProcessor.subResultText());
  protected lastOperator = computed(() => this.calculatorProcessor.lastOperator());

  protected handleClick(key :string) {
    this.calculatorProcessor.constructNumber(key);
  }

  protected handleKeyboardEvent(event :KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    const key = event.key;
    const keyEquivalents :Record<string,string> = {
      Escape: 'C',
      Clear: 'C',
      'x': '*',
      Enter: '=',
      '/': '÷'
    }
    const actualKey = keyEquivalents[key] ?? key;


    this.handleClick(actualKey);
    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(actualKey);
    })
  }
}
