import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlyrPage } from './plyr.page';

const routes: Routes = [
  {
    path: '',
    component: PlyrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlyrPageRoutingModule {}
