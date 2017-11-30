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
      // this.XtListChilder = this.XtList[0].children;
      // this.bianli(this.XtList)
    });
    // this.http.get('assets/php/teacher_select.php').subscribe(res=> {
    //   var data=res.json()
    //   console.log('data',data)
    //   // this.XtListChilder = this.XtList[0].children;
    //   // this.bianli(this.XtList)
    // });
    this.http.get('http://localhost/qiche_ionic1.0/php/teacher_select.php').subscribe(res => {
      var data = res.json()
      console.log('data', data)
    });
    //3.1其他服务器请求
    // this.http.get('http://192.168.3.203:9016/app/terminalapi/call?requestValue={"login_name":"bltest","pwd":"62489608","method":"login","module":"Home"}').subscribe((
    //   selfModel) => {
    //   var result1 = selfModel.json()
    //   console.log('111', result1)
    // })
    //3.2其他服务器请求
    // const data = new URLSearchParams();
    // const bodyData = {
    //   "login_name":"bltest","pwd":"62489608","method":"login","module":"Home"
    // };
    // data.append('body', JSON.stringify(bodyData));
    // data.append('tradeCode', '0002');
    // data.append('tradeType', 'authService');
    // console.log(JSON.stringify(bodyData))
    // this.http.post('http://192.168.3.203:9016/app/terminalapi/call?requestValue=', data).subscribe((
    //   selfModel) => {
    //   var result1 = selfModel.json()
    //   console.log('111', result1)
    // })
  }

}
