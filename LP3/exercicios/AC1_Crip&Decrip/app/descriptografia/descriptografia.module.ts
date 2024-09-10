import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptografiaPageRoutingModule } from './descriptografia-routing.module';

import { DescriptografiaPage } from './descriptografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptografiaPageRoutingModule
  ],
  declarations: [DescriptografiaPage]
})
export class DescriptografiaPageModule {}
