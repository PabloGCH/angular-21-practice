import { ComponentFixture, TestBed } from '@angular/core/testing';
import Calculator from './calculator'
import { Component } from '@angular/core';


@Component({
  selector: 'calculator-ui',
  template: '<div>calculator-ui</div>'
}) 
class MockCalculatorUi {}



describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator]
    })
    .overrideComponent(Calculator, {
      set: {
        imports: [MockCalculatorUi]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render calculator-ui', () => {
    const fixture = TestBed.createComponent(Calculator);
    const compiled = fixture.nativeElement as HTMLElement;
    const calculatorUi = compiled.querySelector('calculator-ui');
    expect(calculatorUi).toBeTruthy();
  });
});
