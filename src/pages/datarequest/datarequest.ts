import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient ,HttpHeaders}          from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Json } from '../zjson/json';

/**
 * Generated class for the DatarequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datarequest',
  templateUrl: 'datarequest.html',
})
export class DatarequestPage {
  XtList :any;//首次获取目录的数组
   public headers: HttpHeaders;
   public json: Json;
   public id: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public http:HttpClient) {
       this.headers=new HttpHeaders();
       this.headers.append('','');

       this.json=new Json();      
       this.id=this.json.id=3;
       this.XtList=this.json.get();
       console.log('constructor',this.json)
       console.log('id',this.id)
       console.log('get',this.XtList)
      //  console.log(this.json.get())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatarequestPage');
    //  this.http.get('assets/json/system.json').subscribe(res => {
    //   // this.XtList = res.data
    //   console.log('XtList', res)
    // });
    // this.http.get('http://localhost/qiche_ionic1.0/php/teacher_select.php').subscribe(res => {
    //   // var data = res.json()
    //   console.log('data', res)
    // });
    
  }

}
