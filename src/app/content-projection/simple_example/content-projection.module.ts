import {NgModule} from '@angular/core';
import {ProjectOnlyDirectiveComponent} from './project-only-directive.component';
import {ContentProjectionComponent} from './content-projection.component';
import {TestDirective} from './test.directive';
import {ProjectDirectiveAndFallbackComponent} from './project-directive-and-fallback.component';
import {ClassProjectionComponent} from './class-projection.component';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    ProjectOnlyDirectiveComponent,
    ProjectDirectiveAndFallbackComponent,
    ClassProjectionComponent,
    TestDirective
  ],
  exports: [ContentProjectionComponent]
})
export class ContentProjectionModule {
}
