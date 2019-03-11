import {AfterContentInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'create-template',
  template: `
    <ng-template #foo>
      <h1>Hello I am created by the ViewContainer ref</h1>
    </ng-template>
  `
})
export class CreateTemplateComponent implements AfterContentInit {

  @ViewChild('foo')
  private fooTemplate: TemplateRef<any>;

  constructor(private viewContainer: ViewContainerRef) {
  }

  ngAfterContentInit(): void {
    this.viewContainer.createEmbeddedView(this.fooTemplate);
  }

}
