/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EmailPageRoutingModule } from './email-routing.module';
import { EmailPage } from './email.page';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player:playerFactory}),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EmailPageRoutingModule
  ],
  declarations: [EmailPage]
})
export class EmailPageModule {}
