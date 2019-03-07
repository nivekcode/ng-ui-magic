import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GreetingDirective} from './directive/greeting.directive';
import {ClickDirective} from './directive/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreetingDirective,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
