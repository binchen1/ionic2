import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { CommonModule } from '@angular/common';

import { CrumbsComponent } from './crumbs';
@NgModule({
    declarations:[CrumbsComponent],
    imports:[CommonModule],
    exports:[CrumbsComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) 
export class CrumbsComponentModule{}
