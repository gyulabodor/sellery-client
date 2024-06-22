import { ProcessingDateData } from '../processing-date/processing-date-data.model';
import { CurrencyEnum } from '../shared/enums/currency.enum';
import { FrequencyEnum } from '../shared/enums/frequency.enum';
import { ExpenseToPayData } from './expense-to-pay-data.model';
import {FinancialItem} from "../template/components/widget/widget.component";

export interface Expense extends FinancialItem{
  id: number;
  amount: number;
  currency: CurrencyEnum;
  frequency: FrequencyEnum;
  processingDate: ProcessingDateData;
  expenseToPayList: ExpenseToPayData[];
}
