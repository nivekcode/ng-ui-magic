import {NgModule} from '@angular/core';
import {ProjectOnlyDirectiveComponent} from './project-only-directive.component';
import {ContentProjectionComponent} from './content-projection.component';
import {TestDirective} from './test.directive';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    ProjectOnlyDirectiveComponent,
    TestDirective
  ],
  exports: [ContentProjectionComponent]
})
export class ContentProjectionModule {
}
