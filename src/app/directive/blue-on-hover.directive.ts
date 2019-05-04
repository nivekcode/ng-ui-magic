import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[blueOnHover]'
})
export class BlueOnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event'])
  clicked(event): void {
    console.log('Element', this.el);
    console.log('Target', event.target);
    this.renderer.setStyle(this.el.nativeElement, 'background', 'blue');
  }

  @HostListener('mouseenter', ['$event'])
  mouseEnter(): void {
    console.log('Hier');
    // this.renderer.setStyle(this.el.nativeElement, 'background', 'blue');
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'background');
  }

}
