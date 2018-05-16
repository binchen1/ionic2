import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { LogserviceProvider } from '../../providers/logservice/logservice';
// import { HomePage } from '../home/home';

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild('mycanvas') mycanvas: ElementRef;
  @ViewChild('myimage') myimage: ElementRef;
  @ViewChild('contentclass') contentclass: ElementRef;
  /** pc canvas宽高与图片一致写固定800*600
   *  webapp canvas宽高与设备一致，图片居中显示
   */
  private imgpath: string = "assets/welcome/timg.png"
  private canvasWidth: number = 800; //画布宽
  private canvasHeight: number = 600; //画布高
  private imageWidth: number = 1500; //图片宽
  private imageHeight: number = 800; //图片高
  private leftMargin: number = 0;   //图片位置移动
  private topMargin: number = 0;   //图片位置移动
  private theleft: number = 0;     //图片离画布边缘的距离
  private thetop: number = 0;     //图片离画布边缘的距离
  private canvasImage: any; //canvas 图片
  private context: any;
  private arcclip: any = { x: 100, y: 50, r: 50 };//圆形的属性
  private radius: number = 50;//圆形的半径
  private reverseX: number = 1;//移动方向
  private reverseY: number = 1;//移动方向
  private timer: any = null;//移动方向

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private logserviceProvider: LogserviceProvider,
    private renderer: Renderer,
  ) { }

  ionViewDidLoad() {
    this.logserviceProvider.log('ionViewDidLoad WelcomePage');
    this.logserviceProvider.log('WelcomePage mycanvas')
    // this.imagebox = this.myimage.nativeElement;
    this.canvasImage = new Image();
    this.canvasImage.src = this.imgpath;
    this.context = this.mycanvas.nativeElement.getContext('2d');
    // this.renderer.setElementStyle(this.myimage.nativeElement, 'left', `0`);
    // this.renderer.setElementStyle(this.myimage.nativeElement, 'top', `0`);

   
    console.log(this.imageWidth,this.canvasWidth)
    console.log(this.imageHeight,this.canvasHeight)
    console.log(this.leftMargin)
    this.init();
    // console.dir(this.contentclass.nativeElement)
    console.dir(this.myimage.nativeElement)
    // console.dir(this.context)

  }
  config(){
     this.imageWidth = this.myimage.nativeElement.naturalWidth;
    this.imageHeight = this.myimage.nativeElement.naturalHeight;
    this.canvasWidth = this.mycanvas.nativeElement.width = window.innerWidth;
    this.canvasHeight = this.mycanvas.nativeElement.height = window.innerHeight;
    this.leftMargin = (this.imageWidth - this.canvasWidth) / 2;
    this.topMargin = (this.imageHeight - this.canvasHeight) / 2;
    this.theleft = this.imageWidth - this.canvasWidth < 0 ? -this.leftMargin : 0;
    this.thetop = this.imageHeight - this.canvasHeight < 0 ? -this.topMargin : 0;
    this.arcclip = {
      x: Math.random() * (this.canvasWidth - 2 * this.radius - 2 * this.theleft) + this.radius + this.theleft,
      y: Math.random() * (this.canvasHeight - 2 * this.radius - 2 * this.thetop) + this.radius + this.thetop,
      r: this.radius
    }
     this.renderer.setElementStyle(this.contentclass.nativeElement, 'width', `${this.canvasWidth}px`);
      this.renderer.setElementStyle(this.contentclass.nativeElement, 'height', `${this.canvasHeight}px`);
      this.renderer.setElementStyle(this.contentclass.nativeElement, 'background-position-x', `${-this.leftMargin}px`);
      this.renderer.setElementStyle(this.contentclass.nativeElement, 'background-position-y', `${-this.topMargin}px`);
      this.renderer.setElementStyle(this.myimage.nativeElement, 'left', `${-this.leftMargin}px`);
      this.renderer.setElementStyle(this.myimage.nativeElement, 'top', `${-this.topMargin}px`);
  }
  init() {
    let self = this;
    this.canvasImage.onload = function (e) {
      self.config()
      self.timer=  setInterval(function () {
          self.initCanvas(true);
          self.updatexy() //412573
          console.log(self.arcclip)
        }, 40)
    }
  }
  updatexy() {
    this.arcclip.x += 5 * this.reverseX;
    this.arcclip.y += 7 * this.reverseY;
    let maxwidth = (this.canvasWidth - 2 * this.radius - 2 * this.theleft)
    if (this.arcclip.x > maxwidth) {
      this.reverseX = -1;
    } else if (this.arcclip.y > (this.canvasHeight - 2 * this.radius - 2 * this.thetop)) {
      this.reverseY = -1;
    } else if (this.arcclip.x < (this.radius + this.theleft)) {
      this.reverseX = 1
    } else if (this.arcclip.y < (this.radius + this.thetop)) {
      this.reverseY = 1;
    }
    console.log(this.arcclip.x)
  }
  initCanvas(isload) {

    isload === true ? this.draw() : '';
  }
  setclip(clips) {
    this.context.beginPath();
    this.context.arc(clips.x, clips.y, clips.r, 0, Math.PI * 2, false);
    this.context.clip();
  }
  draw() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.save();
    this.setclip(this.arcclip);
    this.context.drawImage(this.canvasImage,
      Math.max(this.leftMargin, 0), Math.max(this.topMargin, 0),
      Math.min(this.canvasWidth, this.imageWidth), Math.min(this.canvasHeight, this.imageHeight),
      this.imageWidth - this.canvasWidth < 0 ? -this.leftMargin : 0, this.imageHeight - this.canvasHeight < 0 ? -this.topMargin : 0,
      Math.min(this.canvasWidth, this.imageWidth), Math.min(this.canvasHeight, this.imageHeight)
    );
    this.context.restore();
    // this.updatexy();
  }


  goToHome() {
    this.navCtrl.setRoot('HomePage');
    clearInterval(this.timer)
  }
  onReset() {
    let self = this;
    clearInterval(self.timer)
    this.arcclip = {
      x: Math.random() * (this.canvasWidth - 2 * this.radius - 2 * this.theleft) + this.radius + this.theleft,
      y: Math.random() * (this.canvasHeight - 2 * this.radius - 2 * this.thetop) + this.radius + this.thetop,
      r: 0
    }
    let timer = setInterval(function () {
      self.arcclip.r += 5;
      if (self.arcclip.r > self.radius) {
        clearInterval(timer)
      }
      console.log('111')
      self.draw();
    }, 50)
  }
  onstart() {
    let self = this;
    let timer = setInterval(function () {
      self.arcclip.r += 50;
      if (self.arcclip.r > 2 * Math.max(self.canvasWidth, self.canvasHeight)) {
        clearInterval(timer)
        clearInterval(self.timer)
      }
      self.draw();
    }, 50)

  }

}


