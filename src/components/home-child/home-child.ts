import { Component,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the HomeChildComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'home-child',
  templateUrl: 'home-child.html'
})
export class HomeChildComponent {

    @Input()  message:string;
    @Output()  outer=new EventEmitter<string>()

  constructor() {
    console.log('Hello HomeChildComponent Component');
    console.log(this.message)
  }
   sendToParent(){
    this.outer.emit('message from child')
  }

}
