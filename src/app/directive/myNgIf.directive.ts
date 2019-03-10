import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myNgIf]'
})
export class MyNgIfDirective {

  @Input() set myNgIf(condition: boolean) {
    if (condition) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }

  constructor(private view: ViewContainerRef,
              private template: TemplateRef<any>) {
  }
}
