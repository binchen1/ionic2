import { Component,ViewChild,ElementRef } from '@angular/core';

import { NavController,ViewController,IonicPage } from 'ionic-angular';
import { HttpClient ,HttpHeaders}          from '@angular/common/http';
import { SystemList } from './systemdata/systemdata'

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-system',
  templateUrl: 'system.html'
})
export class SystemPage {
  @ViewChild('myCrumbs') myCrumbs:ElementRef;
  private systemList:SystemList;
  private muDatas:Object={"id":30,"name":"类型"};
  private ChData = [];//子目录数组
  constructor(public navCtrl:NavController,
             public viewCtrl:ViewController, 
             public http:HttpClient
             ) {
             this.systemList=new SystemList();
  }
  
  ngOnInit() {
    console.log(" AppComponent ngOnInit :", "run step ngOnInit ");
    console.log('SystemList',this.systemList.get(1,2))
       this.ChData=this.systemList.get(0,2);
  }
  onMudata(mids) {
    console.log(mids)
    // console.log((mids-30))
    let startIndex=mids-30;
    let endIndex=startIndex+2;
    this.ChData=this.systemList.get(startIndex,endIndex);
  }
  onChdata(muData) {
     console.dir(this.myCrumbs.nativeElement)
    console.log('点击了',muData)
    this.muDatas=muData;
    let startIndex=(muData.id-30);
    let endIndex=(muData.id-30)+2;
    this.ChData=this.systemList.get(startIndex,endIndex);

  }

  
}

