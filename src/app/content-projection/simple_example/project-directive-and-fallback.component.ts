import {Component} from '@angular/core';

@Component({
  selector: 'project-directive-and-fallback',
  template: `
    <div style="background: blue">
      <h1>Projected directive</h1>
      <ng-content select="[testDirective]"></ng-content>
    </div>
    <div style="background: red">
      <h1>Projected fallback</h1>
      <ng-content></ng-content>
    </div>
  `
})
export class ProjectDirectiveAndFallbackComponent {
}
