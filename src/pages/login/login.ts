import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private username:string='';
  private password:string='';
  private img:string='assets/images/2.jpg';
  private timer:any=null;
  private imgArray:any=[{"id":1,"img":"assets/images/1.jpg"},
    {"id":2,"img":"assets/images/2.jpg"},
    {"id":3,"img":"assets/images/3.jpg"},
    {"id":4,"img":"assets/images/4.jpg"}]

  constructor(private navCtrl: NavController, private navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
     var n=0
    this.timer=setInterval(()=>{
      this.img=this.imgArray[n].img
      n++;
      if(n>=4){
        n=0;
      }
      console.log('n')
    },2000);
  }
  ionViewDidLeave(){
     console.log('ionViewDidLeter LoginPage');
      clearInterval(this.timer)
  }

  onsubmit(){
      console.log('username',this.username)
      console.log('password',this.password)
      if(this.username.trim()!=='' && this.password.trim() !==''){
         console.log('jjj')
         sessionStorage.setItem("usernames", this.username);
        //  this.events.publish('userLogin',this.username );
         this.navCtrl.setRoot('HomePage')
        //  this.navCtrl.pop()
      }
    }

}
