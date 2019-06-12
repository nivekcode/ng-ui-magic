import {Component} from '@angular/core';

@Component({
  selector: 'container',
  template: `
    <div style="background: red">
    <h1>foo</h1>
    <ng-content *preventRendering></ng-content>
    </div>
    <div style="background: blue">
    <h1>Bar</h1>
    <ng-content select="bar"></ng-content>
    </div>
  `
})
export class ContainerComponent {
}
