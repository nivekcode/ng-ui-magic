import {Component} from '@angular/core';

@Component({
  selector: 'good-evil-container',
  template: `
    <ng-container>
      <ng-content select="evil"></ng-content>
    </ng-container>
    <ng-content></ng-content>
  `
})
export class GoodEvilContainerComponent {
}
