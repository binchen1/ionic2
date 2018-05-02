import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the HomeHl page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-home-hl',
  templateUrl: 'home-hl.html'
})
export class HomeHlPage {
  public username:string='';
  public password:string='';
  public img:string='assets/images/2.jpg';
  imgArray:any=[{"id":1,"img":"assets/images/1.jpg"},
    {"id":2,"img":"assets/images/2.jpg"},
    {"id":3,"img":"assets/images/3.jpg"},
    {"id":4,"img":"assets/images/4.jpg"}]
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {}
  goToOtherPage() {
    console.log(this.navCtrl.push('HomePage', {id: "hm"}));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeHlPage');
    var n=0
    var timer=
      setInterval(()=>{
      this.img=this.imgArray[n].img
      n++;
      if(n>=4){
        n=0;
      }
      // console.log(this.img)
    },2000);
    //if(this.viewCtrl.dismiss()){
    //  clearInterval(timer)
    //}
    
  }
  onsubmit(){
      console.log('username',this.username)
      console.log('password',this.password)
      if(this.username==='zhanghong'&&this.password==='123456'){
         this.navCtrl.push('HomePage' , {name:this.username})
      }
    }


}
