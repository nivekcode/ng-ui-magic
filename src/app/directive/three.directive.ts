import {AfterViewInit, Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[three]'
})
export class ThreeDirective implements AfterViewInit {

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngAfterViewInit(): void {
    this.viewContainer.createEmbeddedView(this.template);
    this.viewContainer.createEmbeddedView(this.template);
    this.viewContainer.createEmbeddedView(this.template);
  }
}
