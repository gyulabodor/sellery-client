import {Expense} from "../../../expense/expense.model";
import {ExpenseToPay} from "../../../expense/expense-to-pay.model";
import {Salary} from "../../../salary/salary.model";

export interface WidgetInfo {
  title: string;
  notified: boolean;
  icon: string;
  financialItemList?: Salary[] | Expense[] | ExpenseToPay[];
}
