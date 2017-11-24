import { NgModule } from '@angular/core';
import { UpdateImageComponent } from './update-image/update-image';
import { MycomponetComponent } from './mycomponet/mycomponet';

import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [UpdateImageComponent,
    MycomponetComponent],
	imports: [
		// IonicPageModule.forChild(MycomponetComponent),
	],
	exports: [UpdateImageComponent,
    MycomponetComponent]
})
export class ComponentsModule {}
