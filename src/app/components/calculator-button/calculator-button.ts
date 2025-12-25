import { Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  }
})
export class CalculatorButton{
  public isCommand = input(false);
}
