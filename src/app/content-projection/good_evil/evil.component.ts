import {Component} from '@angular/core';

@Component({
  selector: 'evil',
  template: `<h1>I am the evil component and I should not be rendered</h1>`
})
export class EvilComponent {
}
