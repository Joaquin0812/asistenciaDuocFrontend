import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeAlumnosPage } from './lista-de-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeAlumnosPageRoutingModule {}
