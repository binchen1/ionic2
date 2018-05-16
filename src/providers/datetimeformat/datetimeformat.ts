import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatetimeformatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatetimeformatProvider {
  constructor(public http: HttpClient) {
    console.log('Hello DatetimeformatProvider Provider');
  }
  /**
   * 
   * @param fmt 'yyyy-MM-dd hh:mm:ss'
   * @param dates 
   *  //传来数值1位 替换成原本数值
   *  //2.1 获取本身长度 按长度等于1补0:""
   *  //2.2 获取本身长度 按长度剪切(1,2)补最大值返回本身
   */
  DateTimeformat(fmt,dates?){
    let date=dates===undefined?new Date():new Date(dates);
    var o={
      "M+" :date.getMonth()+1,    //月份
      "d+" :date.getDay(),        //日 
      "h+" :date.getHours(),      //小时 
      "m+" :date.getMinutes(),    //分
      "s+" :date.getSeconds(),    //秒 
      "q+" : Math.floor((date.getMonth()+3)/3), //季度 
      "S"  : date.getMilliseconds()             //毫秒 
    }
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1,date.getFullYear()+"").subStr(4-RegExp.$1.length);
    }
    for(let k in o){
      if(new RegExp(`(${k})`).test(fmt)){
        var strtest=("00"+ o[k]).substr((""+ o[k]).length);
        var testfmt=("00"+o[k]).substr((""+o[k]).length);
        fmt=fmt.replace(RegExp.$1,RegExp.$1.length===1?o[k]:testfmt);
      }
    }
    return fmt;
  }
}
