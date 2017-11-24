import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AboutAlPage } from '../pages/about-al/about-al';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeHmPage } from '../pages/home-hm/home-hm';
import { HomeHlPage } from '../pages/home-hl/home-hl';
import { HomeCanvasPage } from '../pages/home-canvas/home-canvas';
import { HomeChildPage } from '../pages/home-child/home-child';
import { SystemPage } from '../pages/system/system';
import { ContactClPage } from '../pages/contact-cl/contact-cl';
import { WelcomePage } from '../pages/welcome/welcome';
import { UpdateImageProvider } from '../providers/update-image/update-image';

import { ComponentsModule } from '../components/components.module'
import { MycomponetComponent } from '../components/mycomponet/mycomponet';

import tinymce from 'tinymce/tinymce.js';
import { plupload } from 'plupload';
import { Qiniu } from 'qiniu/dist/plugin.js'; 

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AboutAlPage,
    ContactPage,
    ContactClPage,
    HomePage,
    TabsPage,
    HomeHmPage,
    HomeHlPage,
    HomeCanvasPage,
    SystemPage,
    HomeChildPage,
    WelcomePage
  ],
  imports: [
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AboutAlPage,
    ContactPage,
    ContactClPage,
    HomePage,
    TabsPage,
    HomeHmPage,
    HomeHlPage,
    HomeCanvasPage,
    SystemPage,
    WelcomePage
    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    UpdateImageProvider]
})
export class AppModule {}
