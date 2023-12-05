import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P401Page } from './p401.page';

const routes: Routes = [
  {
    path: '',
    component: P401Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P401PageRoutingModule {}
