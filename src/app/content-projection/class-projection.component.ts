import {Component} from '@angular/core';

@Component({
  selector: 'class-projection',
  template: `
    <ng-content select=".blue"></ng-content>
    <ng-content select=":not(blue)"></ng-content>
  `
})
export class ClassProjectionComponent {
}
