import {NgModule} from '@angular/core';
import {MoveExampleComponent} from './move-example.component';
import {MoveDirective} from './move.directive';
import {DestinationDirective} from './destination.directive';

@NgModule({
  declarations: [MoveExampleComponent, MoveDirective, DestinationDirective],
  exports: [MoveExampleComponent]
})
export class MoveElementsModule {
}
