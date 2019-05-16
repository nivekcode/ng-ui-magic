import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[blueOnClick]'
})
export class BlueOnClickDirective {

  constructor(private elmenetRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event'])
  changeBackground(event): void {
    this.renderer.setStyle(this.elmenetRef.nativeElement, 'background', 'skyblue');
  }

}
