import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[clickeme]'
})
export class ClickDirective {

  clickName: string;

  @HostBinding() get innerText() {
    return this.clickName || this.el.nativeElement.innerText;
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    this.clickName = 'well done! you clicked';
  }

  constructor(private el: ElementRef) {
  }
}
