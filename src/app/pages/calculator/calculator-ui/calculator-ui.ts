import { Component, HostListener, viewChildren } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';

@Component({
  selector: 'calculator-ui',
  imports: [ CalculatorButton ],
  templateUrl: './calculator-ui.html',
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorUi {
  public calculatorButtons = viewChildren(CalculatorButton);

  handleClick(key :string) {
    console.log(key);
  }

  handleKeyboardEvent(event :KeyboardEvent) {
    const key = event.key;
    const keyEquivalents :Record<string,string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
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
