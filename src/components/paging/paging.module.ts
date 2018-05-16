import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicPageModule} from "ionic-angular";


import { PagingComponent } from './paging';

@NgModule({
   declarations:[PagingComponent],
   imports:[
        CommonModule,
   ],
   exports:[PagingComponent]
}) 
export class PagingComponentModule{}

