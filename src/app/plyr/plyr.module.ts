import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlyrPageRoutingModule } from './plyr-routing.module';

import { PlyrPage } from './plyr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlyrPageRoutingModule
  ],
  declarations: [PlyrPage]
})
export class PlyrPageModule {}
