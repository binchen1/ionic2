import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeHlPage } from './home-hl';

@NgModule({
  declarations: [
    HomeHlPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeHlPage),

  ],
})
export class HomeHlPageModule {}