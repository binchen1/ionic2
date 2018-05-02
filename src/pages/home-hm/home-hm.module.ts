import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeHmPage } from './home-hm';

@NgModule({
  declarations: [
    HomeHmPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeHmPage),

  ],
})
export class HomeHmPageModule {}