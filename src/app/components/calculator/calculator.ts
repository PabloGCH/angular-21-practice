import { Component } from '@angular/core';
import { CalculatorButton } from '../calculator-button/calculator-button';

@Component({
  selector: 'calculator',
  imports: [ CalculatorButton ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  handleClick(key :string) {
    console.log(key);
  }
}
