import { Component } from '@angular/core';

import { NavController,ViewController,IonicPage } from 'ionic-angular';
import { Http, Response }          from '@angular/http';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-system',
  templateUrl: 'system.html'
})
export class SystemPage {
  constructor(public navCtrl:NavController
    , public viewCtrl:ViewController, public http:Http) {
  }
  ChData = [];//子目录数组
  muData = [];//目录数组
  XtList = [];//首次获取目录的数组
  XtListChilder = [];//再次获取子目录的数组
  isShow = true;
  isHide = false;
  public currentClasses:any = {
    'width': '180%',
    'left': '0%'
  };//自定义样式
  ngOnInit() {
    console.log(" AppComponent ngOnInit :", "run step ngOnInit ");
    //备注：页面跳转过来获取初次数据this.muData，this.XtList（调this.bianli（）函数：this.bianli(this.XtList)）
    this.http.get('assets/json/system.json', 3).subscribe(res=> {
      this.XtList = res.json().data
      this.XtListChilder = this.XtList[0].children;
      this.bianli(this.XtList)
    });
    this.muData = [{"id": 11, "name": "物业"},
      {"id": 22, "name": "国贸集团"},
      {"id": 33, "name": "大西"}
    ]
  }
  presentPopoverR(){
    console.log('点击了')
  }

  bianli(arr) {
    for (var i = 0; i < arr.length; i++) {
      this.ChData[i] = ({id: i, name: arr[i].name, img: arr[i].img})
    }
  }
  onMudata(mid) {
    if (mid!=0) {
      for (let i = 0; i < this.muData.length; i++) {
        if (this.muData[i].id == mid) {
          console.log(this.muData[i])
          console.log(i)
          this.muData = this.muData.slice(0, i + 1)
        }
      }
      //备注：根据mid发起请求或者对应的数据保存在this.ChData中
      //this.ChData=[{"id": 3021, "name": "工会","img":"assets/index/xietong03.png"},
      //  {"id": 3021, "name": "事业单位","img":"assets/index/xietong04.png"},
      //  {"id": 3021, "name": "医院","img":"assets/index/xietong03.png"},
      //  {"id": 3021, "name": "学校","img":"assets/index/xietong01.png"}]
    } else {
      this.muData=[];
      console.log()
      //备注：根据mid发起请求或者对应的数据
      this.bianli(this.XtList)
    }
  }
  onChdata(name, cid) {
    console.log('点击了')
    console.log(cid)
    this.muData.push({"id": cid, "name": name});
    //备注：根据n发起请求或者对应的数据
    this.bianli(this.XtListChilder)
  }

  swipeE() {
    console.log('滑动了')
  }

  swipeER() {
    console.log('右滑动了')
    this.isShow = true;
    this.isHide = false;
  }

  swipeEL() {
    console.log('左滑动了')
    this.isShow = false;
    this.isHide = true;
  }

  swipeRR() {
    this.currentClasses = {
      'width': '180%',
      'left': '0%',
      'transition': 'left .2s'
    };
  }

  swipeRL() {
    this.currentClasses = {
      'width': '180%',
      'left': '-80%',
      'transition': 'left .2s'
    };
  }
}

