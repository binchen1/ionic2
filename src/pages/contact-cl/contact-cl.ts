import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';

/*
  Generated class for the ContactCl page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-contact-cl',
  templateUrl: 'contact-cl.html'
})
export class ContactClPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactClPage');
  }

}
