import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoutubePlayerPage } from './youtube-player.page';

const routes: Routes = [
  {
    path: '',
    component: YoutubePlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubePlayerPageRoutingModule {}
