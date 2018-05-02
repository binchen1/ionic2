import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';


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
  @ViewChild("theCanvas") theCanvas: ElementRef;
  @ViewChild("content") content: ElementRef;
  constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams) {
    console.log(this.navParams.get('id'));
    events.subscribe('user:created', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', user, 'at', time);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeHmPage');
  }

}
