import { Component } from '@angular/core';

/**
 * Generated class for the PagingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

export class CountCfg {
  public pageZise: number = 10;//每页数量
  public pageI: number = 1;//页码数
  public totalCount: number = 0;//总数量
  public totalPage: number = 0;//总页数
  // public isData: boolean = false;//没有数据的显示
  public isInfinite: boolean = true;//下拉加载
  // public isShow: boolean = false;//数据为空显示默认图片
  // public isHide: boolean = true;//数据为空，不显示图片
}
@Component({
  selector: 'paging',
  templateUrl: 'paging.html'
})
export class PagingComponent {

  text: string;
  private totalCount:number=135;
  private spanList:number[]=[];
  private isSpecialN: number=1;


  constructor() {
    console.log('Hello PagingComponent Component');
    this.text = 'Hello World';
    
    this.load()
  }
  load(){
    let vcount = new CountCfg();
    console.log(vcount)
    vcount.totalCount=this.totalCount;
    vcount.totalPage=Math.ceil(vcount.totalCount/vcount.pageZise);
    for(let i=0;i<vcount.totalPage;i++){
       this.spanList.push(i+1)
    }
   
  }
  onSapn(spanitem){
    this.isSpecialN=spanitem;
    console.log(spanitem)
  }
  onPrevious(spanitem){
    this.isSpecialN--;
    console.log('上一页',this.isSpecialN)
    // this.onSapn(spanitem)
    this.spanList=[this.isSpecialN-2,this.isSpecialN-1,this.isSpecialN,this.isSpecialN+1,this.isSpecialN+2];
  }
  onNext(spanitem){
    console.log('下一页',this.isSpecialN)
    this.isSpecialN++;
    // this.onSapn(spanitem)
    this.spanList=[this.isSpecialN-2,this.isSpecialN-1,this.isSpecialN,this.isSpecialN+1,this.isSpecialN+2];
  }

}
