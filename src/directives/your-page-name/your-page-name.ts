import { Directive } from '@angular/core';

/**
 * Generated class for the YourPageNameDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[your-page-name]' // Attribute selector
})
export class YourPageNameDirective {

  constructor() {
    console.log('Hello YourPageNameDirective Directive');
  }

}
