import {NgModule} from '@angular/core';
import {GoodComponent} from './good.component';
import {EvilComponent} from './evil.component';
import {GoodEvilContainerComponent} from './good-evil-container.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [GoodComponent, EvilComponent, GoodEvilContainerComponent],
  exports: [GoodComponent, EvilComponent, GoodEvilContainerComponent]
})
export class GoodEvilModule {
}
