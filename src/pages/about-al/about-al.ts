import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';

/*
  Generated class for the AboutAl page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-about-al',
  templateUrl: 'about-al.html'
})
export class AboutAlPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutAlPage');
  }

}
