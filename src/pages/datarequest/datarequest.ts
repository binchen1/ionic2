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
   public vcount: number;
   public isPaging: Boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public http:HttpClient) {
       this.headers=new HttpHeaders();
       this.headers.append('','');
       this.vcount=35;
       this.json=new Json();      
       this.id=this.json.id=3;
       this.XtList=this.json.get(1,2);
       this.vcount=this.json.list.length;
       console.log('constructor get',this.json.get(1,2))
       console.log('constructor list',this.json.list)
       console.log('id',this.id)
       console.log('get',this.XtList)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatarequestPage');
    console.log('vcount',this.vcount)
       this.isPaging=this.vcount>0?true:false;
       console.log(this.vcount)
  }
  getList(paging){
    console.log(paging)
     this.XtList=this.json.get(paging.pageI,paging.pageZise);
  }

}
