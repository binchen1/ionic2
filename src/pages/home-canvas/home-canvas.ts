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

