import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response }          from '@angular/http';
import 'rxjs/add/operator/map';

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
  XtList = [];//首次获取目录的数组
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatarequestPage');
     this.http.get('assets/json/system.json', 3).subscribe(res => {
      this.XtList = res.json().data
      console.log('XtList', this.XtList)
    });
    this.http.get('http://localhost/qiche_ionic1.0/php/teacher_select.php').subscribe(res => {
      var data = res.json()
      console.log('data', data)
    });
  }

}
