import {Component, Input, OnInit} from '@angular/core';
import {Salary} from "../../../salary/salary.model";
import {Expense} from "../../../expense/expense.model";
import {ExpenseToPay} from "../../../expense/expense-to-pay.model";

import {IconData} from "../../icons/icon.model";

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit{
  @Input() title?: string;
  @Input() icon?: IconData;
  @Input() hasNotification?: boolean = false;
  @Input() financialItemList?: Salary[] | Expense[] | ExpenseToPay[] = [];

  constructor() {}

  ngOnInit(): void {
    this.icon = this.hasIcon() ? this.icon as IconData : {} as IconData
  }

  public addFinancialItemToList(financialItem: Salary | Expense | ExpenseToPay): void {}

  public showTitleHeadline(): boolean {
    return !!this.title && this.title.length > 0;
  }

  public hasIcon(): boolean{
    return !!this.icon && !!this.icon.name
  }
  public getIconName(): string{
    return this.icon ? this.icon.name : '';
  }


}
