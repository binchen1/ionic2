import { Component } from '@angular/core';

/**
 * Generated class for the LiItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'li-item',
  templateUrl: 'li-item.html'
})
export class LiItemComponent {

  text: string;

  constructor() {
    console.log('Hello LiItemComponent Component');
    this.text = 'Hello World';
  }

}
