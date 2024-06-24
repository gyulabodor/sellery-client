import {Component, Input, OnInit} from '@angular/core';
import {Salary} from "../../../salary/salary.model";
import {Expense} from "../../../expense/expense.model";
import {ExpenseToPay} from "../../../expense/expense-to-pay.model";
import {IconList} from "../../icons/icon-list";

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit{
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() hasNotification?: boolean = false;
  @Input() financialItemList?: Salary[] | Expense[] | ExpenseToPay[] = [];

  constructor() {}

  ngOnInit(): void {}

  public addFinancialItemToList(financialItem: Salary | Expense | ExpenseToPay): void {}

  public showTitleHeadline(): boolean {
    return !!this.title && this.title.length > 0;
  }

  protected readonly IconList = IconList;
}
