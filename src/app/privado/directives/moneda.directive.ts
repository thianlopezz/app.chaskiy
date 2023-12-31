import { Directive, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { MonedaPipe } from '../pipes/moneda.pipe';

@Directive({
  selector: '[appMoneda]'
})
export class MonedaDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef, private monedaPipe: MonedaPipe) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.monedaPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.monedaPipe.parse(value); // opossite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.monedaPipe.transform(value);
  }

  @Input() appMoneda: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent>event;
    if (this.appMoneda) {
      if (
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
  }
}
