import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubePlayerPageRoutingModule } from './youtube-player-routing.module';

import { YoutubePlayerPage } from './youtube-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubePlayerPageRoutingModule
  ],
  declarations: [YoutubePlayerPage]
})
export class YoutubePlayerPageModule {}
