import { Component, HostListener } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';

@Component({
  selector: 'calculator',
  imports: [ CalculatorButton ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class Calculator {
  handleClick(key :string) {
    console.log(key);
  }

  handleKeyboardEvent(event :KeyboardEvent) {
    this.handleClick(event.key);
  }
}
