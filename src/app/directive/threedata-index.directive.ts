import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[threedataIndex]'
})
export class ThreedataIndexDirective {

  @Input() set threedataIndexGoThrough([one, two, three]) {
    this.vcr.createEmbeddedView(this.template, {
      $implicit: one,
      index: 0
    });

    this.vcr.createEmbeddedView(this.template, {
      $implicit: two,
      index: 1
    });

    this.vcr.createEmbeddedView(this.template, {
      $implicit: three,
      index: 2
    });
  }

  constructor(private vcr: ViewContainerRef,
              private template: TemplateRef<any>) {
  }
}
