import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeAlumnosPageRoutingModule } from './lista-de-alumnos-routing.module';

import { ListaDeAlumnosPage } from './lista-de-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeAlumnosPageRoutingModule
  ],
  declarations: [ListaDeAlumnosPage]
})
export class ListaDeAlumnosPageModule {}
