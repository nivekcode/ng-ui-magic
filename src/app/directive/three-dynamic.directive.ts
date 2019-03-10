import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[threedynamic]'
})
export class ThreeDynamicDirective {

  @Input() set threedynamicLoop([one, two, three]) {
    this.view.createEmbeddedView(this.template, {
      $implicit: one
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: two
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: three
    });
  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {
  }
}
