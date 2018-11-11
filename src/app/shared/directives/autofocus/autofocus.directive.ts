import { AfterViewInit, Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements AfterViewInit, OnChanges {
  private _autofocus: boolean;

  @Input()
  set autofocus(condition: boolean) {
    this._autofocus = condition !== false;
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.focus();
  }

  focus() {
    if (this._autofocus || (typeof this._autofocus === 'undefined' && this.el.nativeElement.focus)) {
      this.el.nativeElement.focus();
    }
  }

  ngOnChanges(changes) {
    if (changes.autofocus && changes.autofocus !== this._autofocus) {
      setTimeout(() => this.focus());
    }
  }
}
