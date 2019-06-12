import {Component} from '@angular/core';

@Component({
  selector: 'project-only-directive',
  template: `
    <ng-content select="[testDirective]"></ng-content>
  `
})
export class ProjectOnlyDirectiveComponent {
}
