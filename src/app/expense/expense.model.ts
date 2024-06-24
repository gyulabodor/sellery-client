import { ProcessingDateData } from '../processing-date/processing-date-data.model';
import { CurrencyEnum } from '../shared/enums/currency.enum';
import { FrequencyEnum } from '../shared/enums/frequency.enum';
import { ExpenseToPayData } from './expense-to-pay-data.model';

export interface Expense{
  id: number;
  amount: number;
  currency: CurrencyEnum;
  frequency: FrequencyEnum;
  processingDate: ProcessingDateData;
  expenseToPayList: ExpenseToPayData[];
}
