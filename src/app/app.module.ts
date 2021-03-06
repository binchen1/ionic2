import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { HomePage } from '../pages/home/home';
// import { WelcomePage } from '../pages/welcome/welcome';

import { UpdateImageProvider } from '../providers/update-image/update-image';
import { LogserviceProvider } from '../providers/logservice/logservice';

import { ComponentsModule } from '../components/components.module'
import tinymce from 'tinymce/tinymce.js';
import { plupload } from 'plupload';

import { IonicStorageModule } from '@ionic/storage';
import { DatetimeformatProvider } from '../providers/datetimeformat/datetimeformat';

@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // WelcomePage,
  ],
  imports: [
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    BrowserModule,
    ComponentsModule,
    // FormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // WelcomePage,

  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    UpdateImageProvider,
    LogserviceProvider,
    DatetimeformatProvider
  ]
})
export class AppModule { }
