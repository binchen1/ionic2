import { Component, ViewChild, ElementRef,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the CrumbsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'crumbs',
  templateUrl: 'crumbs.html'
})
export class CrumbsComponent {
   private ChData = [];//目录数组
  private muData = [];//目录数组
  @ViewChild('myMudata') myMudata: ElementRef;
  @Input()  set muDatas(Object){
    console.log(Object)
    this.muData.push(Object);
    // Object===undefined?this.muData=[]:this.muData.push(Object);
    console.log(this.muData)
  };
  @Output() mids=new EventEmitter();
  private text: string;
 

  constructor() {
    console.log('Hello CrumbsComponent Component');
    this.text = 'Hello World';
  }
  onMudata(mid) {
    console.dir(this.myMudata.nativeElement)
    // console.log(mid)
    this.mids.emit(mid)
    if (mid != 0) {
      for (let i = 0; i < this.muData.length; i++) {
        if (this.muData[i].id == mid) {
          // console.log(this.muData[i])
          // console.log(i)
          this.muData = this.muData.slice(0, i + 1)
        }
      }
    } else {
      this.muData = [];
      console.log()
    }
  }

}
