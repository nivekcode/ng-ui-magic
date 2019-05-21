import {AfterViewInit, Component, OnInit, Type} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit, AfterViewInit {

  childComponentType: Type<any>;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }
}
