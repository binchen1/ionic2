import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UpdateImageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UpdateImageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UpdateImageProvider Provider');
  }

}
