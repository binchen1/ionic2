import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonicModule, Slides, Events, Platform } from 'ionic-angular';
// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomeHmPage } from '../home-hm/home-hm';
import { HomeHlPage } from '../home-hl/home-hl';
import { HomeCanvasPage } from '../home-canvas/home-canvas';
import { SystemPage } from '../system/system';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mySlideOptions: any = {
    autoplay: 2000,
    initialSlide: 0,
    pager: true,
    loop: true,
    speed: 300
  };
  public msgToChild: string;
  public msgFromChild: string;
  constructor(public navCtrl: NavController, public events: Events,
    public plt: Platform
  ) {
    this.msgToChild = 'message from parent'

    // console.log(this.plt.versions().android);
    // if(this.plt.versions().android!=undefined){
    //   alert('你已在android上登陆')
    // }
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      console.log(this.plt.versions());
      var currentPlatformVersion = this.plt.versions()
      console.log(currentPlatformVersion)
      // Platform now ready, execute any required native code
    });

  }
  //课程表
  curriculum(){
    this.navCtrl.push('CurriculumPage');
  }
  //数据请求
  dataRequest(){
    this.navCtrl.push('DatarequestPage')
  }
  createUser(user) {
    console.log('User created!')
    this.events.publish('user:created', user);
  }
  goToRepirPage1() {
    this.navCtrl.push(HomeHmPage, { id: "sam" });
    console.log('被点了');
  }
  receive(msg: string) {
    this.msgFromChild = msg
  }
  //轮播
  @ViewChild('mySlider') slides: Slides;
  ngOnInit() {//页面加载完成后自己调用
    setInterval(() => {
      this.slides.slideNext(300, true);
    }, 2000);
  }

  goToRepirPage2() {
    this.navCtrl.push(HomeHlPage, { id: "2" });
    console.log('被点了')
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }
  oncanvas() {
    this.navCtrl.push(HomeCanvasPage, { id: "2" });
    console.log('跳到绘图')
  }
  onhttp() {
    this.navCtrl.push(SystemPage, { id: "2" });
    console.log('跳到system')
  }

  imgArray = ['assets/images/z05.jpg',
    'assets/images/z06.jpg',
    'assets/images/z07.jpg',
    'assets/images/z08.jpg',
    'assets/images/z09.jpg'];
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  listData = {
    "list": [
      { "name": "张三", "age": 20, "sex": "男" },
      { "name": "李四", "age": 22, "sex": "女" },
      { "name": "王五", "age": 23, "sex": "男" },
      { "name": "小二", "age": 24, "sex": "女" },
      { "name": "李四", "age": 25, "sex": "男" },
      { "name": "李四", "age": 26, "sex": "女" }
    ]
  }

}
