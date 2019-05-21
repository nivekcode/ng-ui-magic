import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DialogPageComponent} from './dialog-page.component';

@NgModule({
  declarations: [DialogPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: DialogPageComponent, pathMatch: 'full'
    }])
  ]
})
export class DialogModule {
}
