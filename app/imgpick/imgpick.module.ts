import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import {ImagePicker} from  '@ionic-native/image-picker';

import { IonicModule } from '@ionic/angular';

import { ImgpickPageRoutingModule } from './imgpick-routing.module';

import { ImgpickPage } from './imgpick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgpickPageRoutingModule
  ],
  declarations: [ImgpickPage]
})
export class ImgpickPageModule {}
