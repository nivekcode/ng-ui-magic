import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GreetingDirective} from './directive/greeting.directive';
import {ClickDirective} from './directive/click.directive';
import {TrackDirective} from './directive/track.directive';
import {TemplateSampleComponent} from './templates/template-sample.component';
import {CreateTemplateComponent} from './templates/create-template.component';
import {TemplateWithDataComponent} from './templates/template-with-data.component';
import {ThreeDirective} from './directive/three.directive';
import {ThreeDataDirective} from './directive/three-data.directive';
import {ThreeDynamicDirective} from './directive/three-dynamic.directive';
import {MyNgIfDirective} from './directive/myNgIf.directive';
import {ThreedataIndexDirective} from './directive/threedata-index.directive';
import {MoveElementsModule} from './move-elements/move-elements.module';
import {GreenDirective} from './directive/green.directive';
import {BlueOnClickDirective} from './directive/blue-on-hover.directive';
import {DialogComponent} from './dialog/dialog.component';
import {ContentProjectionModule} from './content-projection/simple_example/content-projection.module';
import {ComponentsExampleModule} from './content-projection/components_example/components-example.module';
import {GoodEvilModule} from './content-projection/good_evil/good-evil.module';
import {CommonModule} from '@angular/common';
import { GlorifiedExpanderComponent } from './glorified-expander/glorified-expander.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    GreetingDirective,
    ClickDirective,
    TrackDirective,
    TemplateSampleComponent,
    CreateTemplateComponent,
    TemplateWithDataComponent,
    ThreeDirective,
    ThreeDataDirective,
    ThreeDynamicDirective,
    MyNgIfDirective,
    ThreedataIndexDirective,
    GreenDirective,
    BlueOnClickDirective,
    GlorifiedExpanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoveElementsModule,
    ContentProjectionModule,
    ComponentsExampleModule,
    GoodEvilModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
