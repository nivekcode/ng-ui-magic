import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[trackclick]'
})
export class TrackDirective {

  @HostListener('click', ['$event'])
  onClick($event) {
    console.log(`You clicked on ${$event.srcElement.innerHTML}`);
  }
}
