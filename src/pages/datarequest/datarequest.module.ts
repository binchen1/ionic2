import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatarequestPage } from './datarequest';
import { PagingComponentModule } from '../../components/paging/paging.module';
// import { ComponentsModule } from '../../components/components.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    DatarequestPage,
  ],
  imports: [
    IonicPageModule.forChild(DatarequestPage),
    PagingComponentModule,
    ComponentsModule
  ],
})
export class DatarequestPageModule {}
