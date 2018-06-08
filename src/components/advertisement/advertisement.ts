import { Component,ViewChild } from '@angular/core';
import { NavController, IonicModule, Slides, Events, Platform,NavParams,IonicPage,MenuController } from 'ionic-angular';

/**
 * Generated class for the AdvertisementComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'advertisement',
  templateUrl: 'advertisement.html'
})
export class AdvertisementComponent {
   @ViewChild('mySlider') slides: Slides;
  text: string;
   private imgArray:any[] =[];

  constructor() {
    console.log('Hello AdvertisementComponent Component');
    this.text = 'Hello World';
    this.imgArray= [{"img":'assets/images/z05.jpg'},
      {"img":'assets/images/z06.jpg'},
      {"img":'assets/images/z07.jpg'},
      {"img":'assets/images/z08.jpg'},
      {"img":'assets/images/z09.jpg'}
    ];
  }
  ngOnInit() {//页面加载完成后自己调用
    setInterval(() => {
      // this.slides.slideNext(300, true);
    }, 2000);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
  }

}
