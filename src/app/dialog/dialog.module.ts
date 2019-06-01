import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DialogPageComponent} from './dialog-page.component';
import { InsertionDirective } from './insertion.directive';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [DialogPageComponent, InsertionDirective, ExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: DialogPageComponent, pathMatch: 'full'
    }])
  ]
})
export class DialogModule {
}
