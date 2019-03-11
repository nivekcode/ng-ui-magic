import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[green]'
})
export class GreenDirective {

  private classes = [];

  @HostBinding() get class() {
    return this.classes.join(' ');
  }

  constructor(private elementRef: ElementRef) {
    this.classes = elementRef.nativeElement.className.split(' ');
    this.classes.push('green');
  }

}
