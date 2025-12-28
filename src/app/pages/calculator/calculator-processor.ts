import { Injectable, signal } from '@angular/core';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];
const specialOperators = ['+/-', 'C', '%', '=', 'Backspace', '.'];


@Injectable({
  providedIn: 'root',
})
export class CalculatorProcessor {
  public readonly resultText = signal('0');
  public readonly subResultText = signal('0');
  public readonly lastOperator = signal('+');

  public constructNumber(value :string) :void {
    // Validar input
    if(![...numbers, ...operators, ...specialOperators].includes(value)) {
      console.log('Invalid input');
      return;
    }
    // Calcular resultado
    if(value === '=') {
      // TODO
      console.log('Calculate result');
      return;
    }
    // Limpiar todo
    if(value === 'C') {
      this.resultText.set('0');
      this.subResultText.set('0');
      this.lastOperator.set('+');
      return;
    }
    // Borrar
    if(value === 'Backspace') {
      if(this.resultText() === '0')
        return;
      if(this.resultText().length === 1) {
        this.resultText.set('0');
        return;
      }
      // TODO: Manejar numeros negativos
      this.resultText.update(v => v.slice(0, -1));
      return;
    }
    // Aplicar operador
    if(operators.includes(value)) {
      this.lastOperator.set(value);
      this.subResultText.set(this.resultText())
      this.resultText.set('0');
      return;
    }
    // Validar punto decimal
    if( value === '.' && !this.resultText().includes('.')) {
      if(this.resultText() === '0')
        this.resultText.update(text => text + '.');
      return;
    }
    this.resultText.update(text => text + '.');
  }
}
