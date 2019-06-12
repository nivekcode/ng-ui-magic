import {NgModule} from '@angular/core';
import {FooComponent} from './foo.component';
import {BarComponent} from './bar.component';
import {ContainerComponent} from './container.component';
import {PreventRenderingDirective} from '../prevent-rendering.directive';

@NgModule({
  declarations: [FooComponent, BarComponent, ContainerComponent, PreventRenderingDirective],
  exports: [FooComponent, BarComponent, ContainerComponent]
})
export class ComponentsExampleModule {
}
