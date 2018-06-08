import { Component } from '@angular/core';

import { NavController, NavParams, IonicModule,IonicPage } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

import { MycomponetComponent } from '../../components/mycomponet/mycomponet';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  nxPage: any = 'ContactPage';

  param: any = { dd: 42 };
  lists:any[]=[]
  // detailMsg: string = "";
  //单双选
  nature: any;
  ptbuttonList1: boolean = false;
  ptbuttonList2: boolean = false;

  constructor(
    public navCtrl: NavController,
    public params: NavParams
  ) {
    console.log(this.params.get('id'));
    this.lists=['普通','公益','其他'];
    console.log(this.lists)
  }

  productName: string = "Frist Product";
  nextProduct() {
    this.productName = "下一个产品";
  }

  productNumber: number = 2;
  nextNumber() {
    this.productNumber += 2;
  }
  onClick(e) {
    alert(e.from)
    console.log(e)
  }
  changeNature(e) {
    console.log(e)
    console.log(this.nature)
    if (this.nature == '公益') {
      this.ptbuttonList1 = true;
      this.ptbuttonList2 = false;
    } else {
      this.ptbuttonList1 = false;
      this.ptbuttonList2 = true;
    }
  }
  //获取其他服务器数据
  qitaFwq() {
    console.log('点击获取数据')
  }
  listItem(e){
    console.log(e)
  }

}
