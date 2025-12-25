import { Component, HostBinding, input, output } from '@angular/core';

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
  public onClick = output<string>();
  public isCommand = input(false);
  public isDoubleSize = input(false);
  public value = input("");

  @HostBinding('class.w-2/4') get doubleSizeClass() {
    return this.isDoubleSize();
  };

  handleClick() {
    this.onClick.emit(this.value());
  }
}
