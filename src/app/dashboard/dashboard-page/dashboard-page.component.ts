import { Component, OnInit } from '@angular/core';
import {WidgetInfo} from "../../template/components/widget/widget-info.model";

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit{
  clientInfo$: string ="";
  public widgetInfo?: WidgetInfo;

  constructor() {}

  ngOnInit(): void {}

}
