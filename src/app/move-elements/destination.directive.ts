import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';
import {ElementService} from './element.service';

@Directive({
  selector: '[destination]'
})
export class DestinationDirective implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef, private elementService: ElementService) {
  }

  ngAfterViewInit(): void {
    const template = this.elementService.elementMap.get('superman');
    this.renderer.appendChild(this.el.nativeElement, template?.nativeElement);
  }
}
