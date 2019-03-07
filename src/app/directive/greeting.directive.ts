import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[greeting]'
})
export class GreetingDirective implements AfterViewInit {

  @Input() firstname: string;
  @Input() lastname: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.innerText = `Hy ${this.firstname} ${this.lastname}: ${this.el.nativeElement.innerText}`;
  }
}
