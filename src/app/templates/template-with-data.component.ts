import {Component} from '@angular/core';

@Component({
  selector: 'template-with-data',
  template: `
    <ng-template #foo let-name="name">
      Hi my name is {{name}}
    </ng-template>

    <div [ngTemplateOutlet]="foo"
         [ngTemplateOutletContext]="{name: 'Kevin'}">
    </div>

  `
})
export class TemplateWithDataComponent {
}
