import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCanvasPage } from './home-canvas';

@NgModule({
  declarations: [
    HomeCanvasPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCanvasPage),

  ],
})
export class HomeCanvasPageModule {}