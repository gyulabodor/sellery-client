import {Component, OnInit} from '@angular/core';
import {IconRegistryService} from "./template/icons/icon-registry.service";
import {IconList} from "./template/icons/icon-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Sellery';

  constructor(private iconRegister: IconRegistryService) {}

  ngOnInit() {
    this.iconRegister.registerSvgIcons(IconList);
  }
}
