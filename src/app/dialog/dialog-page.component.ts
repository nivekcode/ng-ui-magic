import {Component} from '@angular/core';
import {DialogService} from './dialog.service';

@Component({
  selector: 'dialog-page',
  template: `
    <button (click)="createDialog()">Create dialog</button>
  `
})
export class DialogPageComponent {

  constructor(private dialogService: DialogService) {
  }

  public createDialog(): void {
    // this.dialogService.open();
  }
}
