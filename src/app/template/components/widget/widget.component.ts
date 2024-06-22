import {Component, Input, OnInit} from '@angular/core';
import {Salary} from "../../../salary/salary.model";
import {Expense} from "../../../expense/expense.model";

export interface WidgetInfo {
  title: string;
  notified: boolean;
  financialItemList?: FinancialItem[];
}

export interface FinancialItem {}

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit{
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() notified: boolean = false;
  @Input() widgetInfo: WidgetInfo | undefined

  ngOnInit(): void {

  }


  addFinancialItemToList(financialItem: FinancialItem): void {
    if (!financialItem.isPrototypeOf(financialItem)) {
    } else {
    }

    this.widgetInfo?.financialItemList?.push(Array.from({} as financialItem[]))
    this.widgetInfo.financialItemList?.push(Array.from({} as Expense[]))
  }

}
