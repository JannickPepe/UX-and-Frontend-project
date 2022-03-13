import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBar2PageRoutingModule } from './tab-bar2-routing.module';

import { TabBar2Page } from './tab-bar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBar2PageRoutingModule
  ],
  declarations: [TabBar2Page]
})
export class TabBar2PageModule {}
