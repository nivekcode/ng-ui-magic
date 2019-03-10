import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[threedata]'
})
export class ThreeDataDirective {

  @Input() set threedata(value) {
    this.view.createEmbeddedView(this.template, {
      $implicit: 'Message one'
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: 'Message two'
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: 'Message three'
    });

  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {
  }
}
