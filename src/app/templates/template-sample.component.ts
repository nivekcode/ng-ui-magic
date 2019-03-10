import {Component} from '@angular/core';

@Component({
  selector: 'template-sample',
  template: `
    <ng-template #foo>
      <h1>I am a template</h1>
    </ng-template>

    <div [ngTemplateOutlet]="foo"></div>
  `
})
export class TemplateSampleComponent {
}
