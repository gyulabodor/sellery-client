import { Component } from '@angular/core';

@Component({
  selector: 'app-function-nav-bar',
  templateUrl: './function-nav-bar.component.html',
  styleUrls: ['./function-nav-bar.component.css']
})
export class FunctionNavBarComponent {
@Input() functionList(params:type) {

}
}
