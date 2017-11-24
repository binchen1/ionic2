import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home-canvas',
  templateUrl: 'home-canvas.html'
})
export class HomeCanvasPage {

  @ViewChild("theCanvas") theCanvas:ElementRef;
  @ViewChild("content") content:ElementRef;
  private ctx:CanvasRenderingContext2D;  // canvas context
  private canvasWidth:number = 100;
  private canvasHeight:number = 100;
  private canvasInnerWidth:number = 0;
  private canvasInnerHeight:number = 0;
  private getWidth:string = '100%';
  //private getHeight:string = '150px';

  constructor(public navCtrl:NavController,
              public navParams:NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCanvasPage');
    this.ctx = this.theCanvas.nativeElement.getContext("2d");
    console.log(this.ctx)
    var x = this.ctx.canvas.width;
    var y = this.ctx.canvas.height;

    //绘制50小圆
    for (var i = 0; i < 50; i++) {
      this.ctx.beginPath();
      this.ctx.arc(this.rn(0, x), this.rn(0, y), this.rn(0, 5), 0, Math.PI * 2, true);
      this.ctx.fillStyle = `rgba(${this.rc(0, 255)},${this.ra()})`;
      this.ctx.fill();
      // var timer=setInterval(()=>{
      //   x-=0.5
      //   this.ctx.arc(this.rn(0, x), this.rn(0, y), this.rn(0, 5), 0, Math.PI * 2, true);
      //   if(x==0){
      //     clearInterval(timer)
      //   }
      // },5000)
    }
  }
  ra() {
    return Number(Math.random().toFixed(1));
  }
  rn(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

  }
  rc(min, max) {
    var r = this.rn(min, max);
    var g = this.rn(min, max);
    var b = this.rn(min, max);
    return `${r},${g},${b}`
  }

}

//private loadImage(): void {
//
//  let image = new Image();
//  image.onload = () => {
//let ratio: number = image.width / image.height;
// create a canvas and a context for image resizing
//let oc = document.createElement('canvas');
//let octx = oc.getContext('2d');
//oc.width = image.width;
//  this.canvasWidth = this.content.nativeElement.offsetWidth;
//this.canvasInnerHeight = oc.height;
//this.theCanvas.nativeElement.height = this.canvasInnerHeight;
//this.ctx.fillStyle='#FF0000';
//this.ctx.fillRect(0,0,80,100);
//this.ctx.moveTo(0,0);
//this.ctx.lineTo(150,50);
//this.ctx.lineTo(20,100);
//this.ctx.strokeStyle = "blue";    //设定描边颜色为蓝色
//this.ctx.stroke();
