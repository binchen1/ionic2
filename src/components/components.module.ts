import { NgModule } from '@angular/core';
import { UpdateImageComponent } from './update-image/update-image';
import { MycomponetComponent } from './mycomponet/mycomponet';

import {IonicPageModule} from "ionic-angular";
import { HomeChildComponent } from './home-child/home-child';
@NgModule({
	declarations: [UpdateImageComponent,
    MycomponetComponent,
    HomeChildComponent],
	imports: [
		// IonicPageModule.forChild(MycomponetComponent),
	],
	exports: [UpdateImageComponent,
    MycomponetComponent,
    HomeChildComponent]
})
export class ComponentsModule {}
