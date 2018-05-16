import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LogserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LogserviceProvider {
   private static debug: boolean = true;
    // private static debug: boolean = false;
  constructor(public http: HttpClient) {
    console.log('Hello LogserviceProvider Provider');
  }
   /**
     * 打印调试信息
     * @param message 
     * @param optionalParams 
     */
    public log(message?: any, ...optionalParams: any[]): void {
        if (!LogserviceProvider.debug) return;
        if (optionalParams.length == 0)
            {console.log(message);}
        else
            {console.log(message, optionalParams);}
    }
    /**
     * 打印调试信息
     * @param message 
     * @param optionalParams 
     */
    public info(message?: any, ...optionalParams: any[]): void {
        if (!LogserviceProvider.debug) return;
        if (optionalParams.length == 0)
            {console.info(message);}
        else
           { console.info(message, optionalParams);}
    }

    /**
     * 打印告警信息
     */
    static warn(message?: any, ...optionalParams: any[]): void {
        if (!this.debug) return;
        if (optionalParams.length == 0)
            {console.warn(message);}
        else
            {console.warn(message, optionalParams);}
    }
    /**
     * 打印错误信息
     */
    static error(message?: any, ...optionalParams: any[]): void {
        if (!this.debug) return;

        if (optionalParams.length == 0)
            {console.error(message);}
        else
            {console.error(message, optionalParams);}
    }

}
