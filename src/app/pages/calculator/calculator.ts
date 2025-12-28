import { Component } from '@angular/core';
import { CalculatorUi } from './calculator-ui/calculator-ui';

@Component({
  selector: 'calculator',
  imports: [ CalculatorUi ],
  templateUrl: './calculator.html'
})
export default class Calculator {

}
