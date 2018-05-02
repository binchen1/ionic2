import { Component,ViewChild,ElementRef } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController,NavParams } from 'ionic-angular';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  pushPage:any='HomePage';
  @ViewChild("theCanvas") theCanvas:ElementRef;
  @ViewChild("content") content:ElementRef;
  private ctx:CanvasRenderingContext2D;  // canvas context
  private canvasWidth:number = 100;
  private canvasHeight:number = 100;
  private canvasInnerWidth:number = 0;
  private canvasInnerHeight:number = 0;
  private getWidth:string = '100%';
  //private getHeight:string = '30%';
  constructor(public navCtrl: NavController,
              public params:NavParams) {
    console.log(this.params.get('id'));
    console.log(this.params.get('dd'));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCanvasPage');
    this.ctx = this.theCanvas.nativeElement.getContext("2d");
    console.log(this.ctx)

    this.ctx.beginPath();
    this.ctx.arc(100,100,40,1.5*Math.PI,Math.PI/2,false);
    this.ctx.fillStyle="white";
    this.ctx.closePath();
    this.ctx.fill();

//绘制黑色半圆的代码如下：
    this.ctx.beginPath();
    this.ctx.arc(100,100,40,Math.PI/2,1.5*Math.PI,false);
    this.ctx.fillStyle="black";
    this.ctx.closePath();
    this.ctx.fill();

//绘制黑色小圆
    this.ctx.beginPath();
    this.ctx.arc(100,120,20,0,Math.PI*2,true);
    this.ctx.fillStyle="black";
    this.ctx.closePath();
    this.ctx.fill();

//绘制白色小圆
    this.ctx.beginPath();
    this.ctx.arc(100,80,20,0,Math.PI*2,true);
    this.ctx.fillStyle="white";
    this.ctx.closePath();
    this.ctx.fill();

//绘制白色小圆心
    this.ctx.beginPath();
    this.ctx.arc(100,80,2,0,Math.PI*2,true);
    this.ctx.fillStyle="black";
    this.ctx.closePath();
    this.ctx.fill();

//绘制黑色小圆心
    this.ctx.beginPath();
    this.ctx.arc(100,120,2,0,Math.PI*2,true);
    this.ctx.fillStyle="white";
    this.ctx.closePath();
    this.ctx.fill();
    console.log(this.r())
  }

  r(){
    var n=Math.floor(Math.random()*5);
    return n;
  }

}

