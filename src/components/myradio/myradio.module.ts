import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicPageModule} from "ionic-angular";


import { MyradioComponent } from './myradio';

@NgModule({
   declarations:[MyradioComponent],
   imports:[
        CommonModule,
   ],
   exports:[MyradioComponent],
   schemas:[CUSTOM_ELEMENTS_SCHEMA]
}) 
export class MyradioComponentModule{}