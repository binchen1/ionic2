import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private rootPage: any = 'WelcomePage';
  @ViewChild(Nav) nav: Nav;
  chosenPicture: any;  
  butPages;  
  pages; 
  footerBtn;  
  constructor(private platform: Platform, private storage: Storage,

  ) {
    console.log(this.storage.get('firstTo'))
    this.storage.get('firstTo').then((result) => {
      if (result) {
        console.log('第二次进入程序', result)
        // this.rootPage ='HomePage';
        this.rootPage = 'WelcomePage';
      } else {
        console.log("第一次进入程序 设置")
        this.storage.set('firstTo', true);
        console.log(this.storage.get('firstTo'))
        this.rootPage = 'WelcomePage';
      }
    })

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
     this.initPages();  
    this.initButPages();  
    this.initfooter();  
  }

  initPages() {
    this.pages = [
      { title: '我的消息', component: 'LoginPage', icon: 'ios-mail-outline' },
      { title: '我的好友', component: 'LoginPage', icon: 'ios-contact-outline' },
      { title: '附近的人', component: 'LoginPage', icon: 'ios-pin-outline' },
      { title: '商城', component: 'AboutPage', icon: 'ios-cart-outline' },
      { title: '听歌识别', component: 'AboutPage', icon: 'ios-mic-outline' },
      { title: '定时停止播放', component: 'AboutPage', icon: 'ios-clock-outline' },
      { title: '扫一扫', component: 'HomePage', icon: 'ios-qr-scanner-outline' },
      { title: '音乐闹钟', component: 'HomePage', icon: 'ios-alarm-outline' },
      { title: '驾驶模式', component: 'HomePage', icon: 'ios-car-outline' },
      { title: '个性换肤', component: 'HomePage', icon: 'ios-shirt-outline' },
      { title: '音乐云盘', component: 'HomePage', icon: 'ios-cloudy-outline' }
    ]
  }

  initButPages() {
    this.butPages = [
      { title: 'my info', component: 'LoginPage' },
      { title: 'my grade', component: 'HomePage' },
      { title: 'my grade', component: 'HomePage' }
    ]
  }
  openPage(page) {
    console.log(page)
    // this.nav.push(page.component);
    this.rootPage=page.component
  }
  initfooter() {
    this.footerBtn = [
      { title: '夜间', icon: 'ios-moon-outline' },
      { title: '设置', icon: 'ios-settings-outline' },
      { title: '退出', icon: 'ios-power-outline' },
    ]
  }

}
