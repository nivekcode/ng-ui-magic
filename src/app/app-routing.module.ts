import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DialogComponent} from './dialog/dialog.component';

const routes: Routes = [
  {path: 'dialog', loadChildren: './dialog/dialog.module#DialogModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
