
import { ProcessingDate } from '../processing-date/processing-date.model';
import { CurrencyEnum } from '../shared/enums/currency.enum';
import { FrequencyEnum } from '../shared/enums/frequency.enum';

export interface Salary{
  id: number;
  amount:number;
  currency: CurrencyEnum;
  frequency: FrequencyEnum;
  processingDate: ProcessingDate;
}
