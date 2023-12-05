import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P401PageRoutingModule } from './p401-routing.module';

import { P401Page } from './p401.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P401PageRoutingModule
  ],
  declarations: [P401Page]
})
export class P401PageModule {}
