import { Component,ViewChild,ElementRef,Renderer } from '@angular/core';

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
  @ViewChild('mySpan') mySpan:ElementRef;
  private renderer: Renderer;
  private vcount: CountCfg;


  constructor() {
    console.log('Hello PagingComponent Component');
    this.text = 'Hello World';
    
    
    this.load()
  }
  load(){
    console.log(this.vcount)
     this.vcount= new CountCfg();
    this.vcount.totalCount=this.totalCount;
    this.vcount.totalPage=Math.ceil(this.vcount.totalCount/this.vcount.pageZise);
    // for(let i=0;i<this.vcount.totalPage;i++){
    //    this.spanList.push(i+1)
    // }
    this.spanlistFun(this.isSpecialN)
   
  }
  spanlistFun(pageI){
    this.spanList=[];
    let startpage=pageI+4;
      if(pageI<=4){
        if(this.vcount.totalPage>5){

          this.spanList=[1,2,3,4,5]
        }else{
          for(let i=1;i<this.vcount.totalPage;i++){
            this.spanList.push(i)
          }
        }
      }else{
        console.log('pageI',pageI)
        console.log('this.vcount.totalPage',this.vcount.totalPage)
        let endpage=pageI+4;
        console.log('endpage',endpage)
        if(this.vcount.totalPage<=endpage){
          this.spanList=[this.vcount.totalPage-4,this.vcount.totalPage-3,this.vcount.totalPage-2,this.vcount.totalPage-1,this.vcount.totalPage]
        }else{
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
    // this.onSapn(spanitem)
    // this.spanList=[this.isSpecialN-2,this.isSpecialN-1,this.isSpecialN,this.isSpecialN+1,this.isSpecialN+2];
  }
  onNext(spanitem){
    console.log('下一页',this.isSpecialN)
    this.vcount.totalPage===this.isSpecialN?'':this.isSpecialN++;
    // this.onSapn(spanitem)
    console.log (typeof this.isSpecialN)
    this.spanlistFun(this.isSpecialN)
    // this.spanList=[this.isSpecialN-2,this.isSpecialN-1,this.isSpecialN,this.isSpecialN+1,this.isSpecialN+2];
  }

  inputblur(){
    console.log(this.isSpecialN)
     console.log (typeof this.isSpecialN)
     this.isSpecialN=Number(this.isSpecialN)
    // this.onSapn(this.isSpecialN)
    console.dir(this.mySpan.nativeElement);
    this.spanlistFun(this.isSpecialN)
    // this.renderer.invokeElementMethod(this.mySpan.nativeElement, "click")
    // this.renderer.invokeElementMethod(this.mySpan.nativeElement, "click");
    //  this.spanList=[this.isSpecialN-2,this.isSpecialN-1,this.isSpecialN,this.isSpecialN+1,this.isSpecialN+2];
  }

}
