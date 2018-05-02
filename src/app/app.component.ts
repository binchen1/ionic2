import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
// import { WelcomePage } from '../pages/welcome/welcome';
// import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
//  public rootPage:any = 'CurriculumPage';
 public rootPage:any = 'WelcomePage';
  constructor(platform: Platform,public storage: Storage) {
    console.log(this.storage.get('firstTo'))
    this.storage.get('firstTo').then((result)=> {
      if (result) {
        console.log('第二次进入程序',result)
        // this.rootPage ='HomePage';
        this.rootPage = 'WelcomePage';
      }else {
        console.log("第一次进入程序 设置")
        this.storage.set('firstTo',true);
        console.log(this.storage.get('firstTo'))
        this.rootPage = 'WelcomePage';
      }
    })

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
