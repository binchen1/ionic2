import { Component } from '@angular/core';

/**
 * Generated class for the UpdateImageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'update-image',
  templateUrl: 'update-image.html'
})
export class UpdateImageComponent {

  text: string;

  constructor() {
    console.log('Hello UpdateImageComponent Component');
    this.text = 'Hello World';
  }

}
