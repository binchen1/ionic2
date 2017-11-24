import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the HomeChild page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'child',
  templateUrl: 'home-child.html'
})
export class HomeChildPage {
    @Input() public message:string;
    @Output() public outer=new EventEmitter<string>()
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeChildPage');
   
  }
  sendToParent(){
    this.outer.emit('message from child')
  }

}
