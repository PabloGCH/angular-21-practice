import { Component, HostBinding, input, output, signal } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()' 
  }
})
export class CalculatorButton{
  public readonly onClick = output<string>();
  public readonly isCommand = input(false);
  public readonly isDoubleSize = input(false);
  public readonly value = input("");
  public readonly isPressed = signal(false);

  protected handleClick(event :MouseEvent) {
    event.stopPropagation();
    (event.target as HTMLElement).blur();
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
