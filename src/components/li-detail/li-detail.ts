import { Component } from '@angular/core';

/**
 * Generated class for the LiDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'li-detail',
  templateUrl: 'li-detail.html'
})
export class LiDetailComponent {

  text: string;

  constructor() {
    console.log('Hello LiDetailComponent Component');
    this.text = 'Hello World';
  }

}
