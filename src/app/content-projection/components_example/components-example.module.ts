import {NgModule} from '@angular/core';
import {FooComponent} from './foo.component';
import {BarComponent} from './bar.component';
import {ContainerComponent} from './container.component';

@NgModule({
  declarations: [FooComponent, BarComponent, ContainerComponent],
  exports: [FooComponent, BarComponent, ContainerComponent]
})
export class ComponentsExampleModule {
}
