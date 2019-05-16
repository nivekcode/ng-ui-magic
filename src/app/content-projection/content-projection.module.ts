import {NgModule} from '@angular/core';
import {ProjectOnlyDirectiveComponent} from './project-only-directive.component';
import {ContentProjectionComponent} from './content-projection.component';
import {TestDirective} from './test.directive';
import {ProjectDirectiveAndFallbackComponent} from './project-directive-and-fallback.component';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    ProjectOnlyDirectiveComponent,
    ProjectDirectiveAndFallbackComponent,
    TestDirective
  ],
  exports: [ContentProjectionComponent]
})
export class ContentProjectionModule {
}
