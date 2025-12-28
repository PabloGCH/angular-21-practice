import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorButton } from './calculator-button';

describe('CalculatorButton', () => {
  let component: CalculatorButton;
  let fixture: ComponentFixture<CalculatorButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorButton]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CalculatorButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply w-1/4 double size is false', () => {
    const htmlElement = fixture.nativeElement as HTMLElement;
    const hostCss = htmlElement.classList.value;

    expect(hostCss).toContain('w-1/4');
    expect(hostCss).not.toContain('w-2/4');
  });

  it('should apply w-2/4 double size is true', () => {
    fixture.componentRef.setInput('isDoubleSize', true);
    fixture.detectChanges();
    
    const htmlElement = fixture.nativeElement as HTMLElement;
    const hostCss = htmlElement.classList.value;

    expect(hostCss).toContain('w-2/4');
    expect(hostCss).not.toContain('w-1/4');
  });

  it('should apply is-command class when isCommand is true', () => {
    fixture.componentRef.setInput('isCommand', true);
    fixture.detectChanges();
    
    const htmlElement = fixture.nativeElement as HTMLElement;
    const buttonElement = htmlElement.querySelector('button') as HTMLElement;
    const hostCss = buttonElement.classList.value;

    expect(hostCss).toContain('is-command');
  });

  it('should not apply is-command class when isCommand is false', () => {
    fixture.componentRef.setInput('isCommand', false);
    fixture.detectChanges();
    
    const htmlElement = fixture.nativeElement as HTMLElement;
    const buttonElement = htmlElement.querySelector('button') as HTMLElement;
    const hostCss = buttonElement.classList.value;

    expect(hostCss).not.toContain('is-command');
  });

  it('should emit onClick when handleClick is called', () => {
    const spy = vi.spyOn(component.onClick, 'emit');
    fixture.componentRef.setInput('value', '2');
    fixture.detectChanges();

    const htmlElement = fixture.nativeElement as HTMLElement;
    const buttonElement = htmlElement.querySelector('button') as HTMLElement;

    expect(component).toBeTruthy();
    buttonElement.click();
    expect(spy).toHaveBeenCalledWith('2');
  });


  it('should set isPressed to true and then false when keyboardPressedStyle is called with matching key', () => {
    fixture.componentRef.setInput('value', '2');
    fixture.detectChanges();
    vi.useFakeTimers();
    const htmlElement = fixture.nativeElement as HTMLElement;
    const buttonElement = htmlElement.querySelector('button') as HTMLElement;

    component.keyboardPressedStyle('2');
    fixture.detectChanges();
    let buttonCss = buttonElement.classList.value.split(' ');

    expect(component.isPressed()).toBe(true);
    expect(buttonCss).toContain('is-pressed');

    
    vi.advanceTimersByTime(120)

    buttonCss = buttonElement.classList.value.split(' ');
    expect(component.isPressed()).toBe(false);
    expect(buttonCss).not.toContain('is-pressed');
  });

  it('should NOT set isPressed if key does not match', () => {
    fixture.componentRef.setInput('value', '2');
    fixture.detectChanges();

    const htmlElement = fixture.nativeElement as HTMLElement;
    const buttonElement = htmlElement.querySelector('button') as HTMLElement;

    component.keyboardPressedStyle('3');
    fixture.detectChanges();
    const buttonCss = buttonElement.classList.value.split(' ');
    expect(component.isPressed()).toBe(false);
    expect(buttonCss).not.toContain('is-pressed');
  });

  it('should display projected content', () => {
    // todo:
  });
});
