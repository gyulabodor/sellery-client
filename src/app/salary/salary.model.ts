
import { ProcessingDate } from '../processing-date/processing-date.model';
import { CurrencyEnum } from '../shared/enums/currency.enum';
import { FrequencyEnum } from '../shared/enums/frequency.enum';
import {FinancialItem} from "../template/components/widget/widget.component";

export interface Salary extends FinancialItem{
  id: number;
  amount:number;
  currency: CurrencyEnum;
  frequency: FrequencyEnum;
  processingDate: ProcessingDate;
}
