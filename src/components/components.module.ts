import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { CommonModule } from '@angular/common';

import { UpdateImageComponent } from './update-image/update-image';
import { MycomponetComponent } from './mycomponet/mycomponet';
import { HomeChildComponent } from './home-child/home-child';
import { AdvertisementComponent } from './advertisement/advertisement';
import { LiItemComponent } from './li-item/li-item';
import { LiDetailComponent } from './li-detail/li-detail';



@NgModule({
	declarations: [
		UpdateImageComponent,
		MycomponetComponent,
		HomeChildComponent,
    AdvertisementComponent,
    LiItemComponent,
    LiDetailComponent,

	],
	imports: [
		CommonModule,
	],
	exports: [
		UpdateImageComponent,
		MycomponetComponent,
		HomeChildComponent,
    AdvertisementComponent,
    LiItemComponent,
    LiDetailComponent,

	],
	schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class ComponentsModule {}
