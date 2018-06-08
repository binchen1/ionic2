import { Component,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the MyradioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'myradio',
  templateUrl: 'myradio.html',

})
export class MyradioComponent {

  text: string;
  @Input() list;
  @Output() item=new EventEmitter();
  //  list:any[]=['普通','公益','其他']
  constructor() {
    console.log('Hello MyradioComponent Component');
    this.text = 'Hello World';
  }


changeNature(event){
  console.log(event)
    // console.log(this.nature)
    this.item.emit(event.target.value)
}
}
