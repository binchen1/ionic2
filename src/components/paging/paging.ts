import { Component,ViewChild,ElementRef,Renderer,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the PagingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

export class CountCfg {
  public pageZise: number = 2;//每页数量
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
  // private totalCount:number=35;
  private totalCount:number;
  @Input()  set totalCounts(vcount:number){
    this.totalCount=vcount;
    this.load()
  }
  get totalCounts(){
    return this.totalCount;
  }
  @Output() outerIndex=new EventEmitter();
  private spanList:number[]=[];
  private isSpecialN: number=1;
  @ViewChild('mySpan') mySpan:ElementRef;
  private renderer: Renderer;
  private vcount: CountCfg;
  public isRight: boolean = false;//右边显示
  constructor() {
    console.log('Hello PagingComponent Component');
  }
  load(){
    console.log(this.totalCount)
    this.vcount= new CountCfg();
    this.vcount.totalCount=this.totalCount;
    this.vcount.totalPage=Math.ceil(this.vcount.totalCount/this.vcount.pageZise);
    this.spanlistFun(this.isSpecialN)
  }
  spanlistFun(pageI){
    this.outerIndex.emit({pageI:pageI,pageZise:this.vcount.pageZise})
    this.spanList=[];
    let startpage=pageI+4;
      if(pageI<=4){
        if(this.vcount.totalPage>5){
          this.isRight=true;
          this.spanList=[1,2,3,4,5]
        }else{
          for(let i=0;i<this.vcount.totalPage;i++){
            this.spanList.push(i+1)
          }
        }
      }else{
        console.log('pageI',pageI)
        console.log('this.vcount.totalPage',this.vcount.totalPage)
        let endpage=pageI+4;
        console.log('endpage',endpage)
        if(this.vcount.totalPage<=endpage){
          this.isRight=false;
          this.spanList=[this.vcount.totalPage-4,this.vcount.totalPage-3,this.vcount.totalPage-2,this.vcount.totalPage-1,this.vcount.totalPage]
        }else{
           this.isRight=true;
          for(let i=pageI-1;i<pageI+2;i++){
              this.spanList.push(i)
            }
        }
      }
  }
  onSapn(spanitem){
    this.isSpecialN=spanitem;
    console.log(spanitem)
    this.spanlistFun(this.isSpecialN)
  }
  onPrevious(spanitem){
    1===spanitem?'':this.isSpecialN--;
    console.log('上一页',this.isSpecialN)
     this.spanlistFun(this.isSpecialN)
  }
  onNext(spanitem){
    console.log('下一页',this.isSpecialN)
    this.vcount.totalPage===this.isSpecialN?'':this.isSpecialN++;
    console.log (typeof this.isSpecialN)
    this.spanlistFun(this.isSpecialN)
  }

  inputblur(){
     console.log (typeof this.isSpecialN)
     this.isSpecialN=Number(this.isSpecialN)
    console.dir(this.mySpan.nativeElement);
    this.spanlistFun(this.isSpecialN)
  }

}
