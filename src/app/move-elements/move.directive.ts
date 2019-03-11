import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import {ElementService} from './element.service';

@Directive({
  selector: '[move]'
})
export class MoveDirective implements AfterViewInit {

  constructor(private element: ElementRef<any>, private elementService: ElementService) {
  }

  ngAfterViewInit(): void {
    this.elementService.elementMap.set('superman', this.element);
  }
}
