import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { CommonModule } from '@angular/common';

import { UpdateImageComponent } from './update-image/update-image';
import { MycomponetComponent } from './mycomponet/mycomponet';
import { HomeChildComponent } from './home-child/home-child';


@NgModule({
	declarations: [
		UpdateImageComponent,
		MycomponetComponent,
		HomeChildComponent,

	],
	imports: [
		CommonModule,
	],
	exports: [
		UpdateImageComponent,
		MycomponetComponent,
		HomeChildComponent,
	]
})
export class ComponentsModule {}
