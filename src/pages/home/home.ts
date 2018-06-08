import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonicModule, Slides, Events, Platform,NavParams,IonicPage,MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') slides: Slides;
  private msgToChild: string;
  private msgFromChild: string;
  private names: string='登录';
  private list: any[]=[];
  private imgArray:any[] =[];
  private username:string='请登录';
  constructor(private navCtrl: NavController, private events: Events,
              private navParams: NavParams,
              private platform: Platform,
               private menuCtrl: MenuController
  ) {
    this.msgToChild = 'message from parent';
    this.platform.ready().then((readySource) => {
      var currentPlatformVersion = this.platform.versions()
      console.log(currentPlatformVersion)
    });
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad')
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter')
    let uname=sessionStorage.getItem('usernames')
      if(uname){
        this.username= uname+',你好';
        console.log('i  f',this.username)
      }
    
    this.imgArray= [{"img":'assets/images/z05.jpg'},
      {"img":'assets/images/z06.jpg'},
      {"img":'assets/images/z07.jpg'},
      {"img":'assets/images/z08.jpg'},
      {"img":'assets/images/z09.jpg'}
    ];
    this.list=[{"name":"日期选择","img":"assets/images/xietong01.png"},
               {"name":"数据请求","img":"assets/images/xietong02.png"},
               {"name":"进入css3","img":"assets/images/xietong03.png"},
               {"name":"画图","img":"assets/images/xietong05.png"},
               {"name":"http页面","img":"assets/images/xietong06.png"},
               {"name":"Radio","img":"assets/images/xietong07.png"},
    ]
  }
  onlogin(uname){
    console.log(uname)
     this.navCtrl.push('LoginPage');
  }
  jump(liname){
    if('日期选择'===liname){
      this.navCtrl.push('CurriculumPage');
    }else if('数据请求'===liname){
      this.navCtrl.push('DatarequestPage')
    }else if('进入css3'===liname){
      this.navCtrl.push('HomeHmPage', { id: "sam" });
    }else if('画图'===liname){
       this.navCtrl.push('HomeCanvasPage');
    }else if('http页面'===liname){
      this.navCtrl.push('SystemPage');
    }else if('Radio'===liname){
      this.navCtrl.push('AboutPage');
    }
  }

  createUser(user) {
    console.log('User created!')
    this.events.publish('user:created', user);
  }
  receive(msg: string) {
    setTimeout(()=>{
      this.msgFromChild = msg;
      console.log( this.msgFromChild)
    },20)
    
  }
  ngOnInit() {//页面加载完成后自己调用
    setInterval(() => {
      this.slides.slideNext(300, true);
    }, 2000);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
  }
  ionClose(){
      console.log('ionClose')
    }


}
