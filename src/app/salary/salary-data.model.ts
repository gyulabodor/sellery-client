import { ProcessingDateData } from '../processing-date/processing-date-data.model';
import { CurrencyEnum } from '../shared/enums/currency.enum';
import { FrequencyEnum } from '../shared/enums/frequency.enum';


export interface SalaryData {
  id: number;
  amount: number;
  currency: CurrencyEnum;
  frequency: FrequencyEnum;
  processingDate: ProcessingDateData;
}
