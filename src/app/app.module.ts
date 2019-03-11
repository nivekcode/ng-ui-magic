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
import {MoveExampleComponent} from './move-elements/move-example.component';
import {MoveElementsModule} from './move-elements/move-elements.module';

@NgModule({
  declarations: [
    AppComponent,
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
    ThreedataIndexDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoveElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
