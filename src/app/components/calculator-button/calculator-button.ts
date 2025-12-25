import { Component, HostBinding, input, output, signal } from '@angular/core';

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
  public isPressed = signal(false);

  @HostBinding('class.w-2/4') get doubleSizeClass() {
    return this.isDoubleSize();
  };

  handleClick() {
    this.onClick.emit(this.value());
  }

  public keyboardPressedStyle(key :string) {
    if(!this.value()) return;
    const value = this.value();
    if(value != key) { return }
    this.isPressed.set(true);
    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }
}
