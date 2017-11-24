import { Component } from '@angular/core';
import { NavController, NavParams,Events } from 'ionic-angular';

/*
  Generated class for the HomeHm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-hm',
  templateUrl: 'home-hm.html'
})
export class HomeHmPage {
  public tap: number = 0;
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  constructor(public navCtrl: NavController,public events: Events, public navParams: NavParams) {
    console.log(this.navParams.get('id'));
     events.subscribe('user:created', (user, time) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    console.log('Welcome', user, 'at', time);
  });
  }
  tapEvent(e) {
    // console.log(e);
    this.tap++;
  }

  /**
   * 按下事件
   */
  pressEvent(e) {
    // console.log(e);
    this.press++;
  }
  /**
   * 滑动事件
   */
  panEvent(e) {
    // console.log(e);
    this.pan++;
  }
  /**
   * 迅速滑动事件
   */
  swipeEvent(e) {
    // console.log(e);
    this.swipe++;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeHmPage');
  }

}
