import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SystemPage } from './system';
import { CrumbsComponentModule } from '../../components/crumbs/crumbs.module';

@NgModule({
  declarations: [
    SystemPage,
  ],
  imports: [
    IonicPageModule.forChild(SystemPage),
    CrumbsComponentModule,
  ],
})
export class SystemPageModule {}