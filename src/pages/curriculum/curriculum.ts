import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CurriculumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curriculum',
  templateUrl: 'curriculum.html',
})
export class CurriculumPage {
  public monthData: any;
  public list: any = [];
  public arr: any = [];//数据处理后的数组
  public Year: any;//年
  public Month: any;//月
  public isSpecial: boolean=true;//月
  public isSpecialN: any;//日
  public redcolor: any='#fff';//月
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurriculumPage');
    var myDate = new Date();
    this.Year = myDate.getFullYear();
    this.Month = myDate.getMonth();
    let month=((myDate.getMonth() + 1)+"").length===1?'0'+(myDate.getMonth() + 1):(myDate.getMonth() + 1);
    this.monthData = myDate.getFullYear() + '-' + month;
    let datys = (myDate.getDate() +"").length===1?'0'+myDate.getDate():myDate.getDate();
    this.onitem(datys);
    console.log(this.isSpecialN)//2017-11
    console.log(this.monthData)//2017-11
    console.log(this.Year)
    console.log(this.Month)
    // console.log(typeof (this.Month))
    console.log(myDate.getDay())
    this.load(this.Year, this.Month + 1)
  }
  load(Year, Month) {
    // console.log(Year)
    // console.log(Month)
    // console.log(typeof (Month))
    var num = this.mGetDate(Year, Month)
    // console.log('每月多少天', num)//2017,11
    //42天
    var weekDaynum = this.getWeekDayNextMonth(Year, Month - 1);
    console.log('星期几', weekDaynum);
      weekDaynum= weekDaynum===0?7:weekDaynum
    for (var i = 0; i < weekDaynum-1; i++) {
      this.list.push(undefined)
    }

    for (var i = 1; i < num+1 ; i++) {
      this.list.push(i)
    }
    for (var i = 0; i < this.list.length / 6; i++) {
      this.arr[i] = [];
      for (var j = 0; j < 7; j++) {
        this.arr[i][j] = this.list[i * 7 + j];
      }
    }
    console.log('arr', this.arr)
    console.log('this.list', this.list)
  }
  onKeyMonth(e) {
    console.log(e)
  }
  blurMonth() {
    // console.log(this.monthData)
    let n = this.monthData.indexOf('-')
    this.Year = parseInt(this.monthData.slice(0, n));
    this.Month = parseInt(this.monthData.slice(n + 1));
    // console.log(this.Year)
    // console.log(this.Month)
    this.arr = [];
    this.list = [];
    this.load(this.Year, this.Month)
  }
  getWeekDayNextMonth(year, month) {
    var odatef = new Date();
    odatef.setFullYear(year);
    odatef.setMonth(month)
    odatef.setDate(1);
    return odatef.getDay();
  }
  mGetDate(year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
  }
  onitem(datys){
    console.log(datys)
    this.isSpecialN=datys;
    this.redcolor=this.randomColor();
    console.log(this.redcolor)
  }
  randomNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min)
  }
  randomColor(){
    let r=this.randomNumber(0,255);
    let g=this.randomNumber(0,255);
    let b=this.randomNumber(0,255);
    return `rgb(${r},${g},${b})`
  }
  onsubmit(){
    this.navCtrl.pop();
  }


}
