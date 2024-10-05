import { ProcessingDateData } from '../processing-date/processing-date-data.model';
import { CurrencyEnum } from '../shared/enums/currency.enum';
import { FrequencyEnum } from '../shared/enums/frequency.enum';
import {PaymentTypeEnum} from "../shared/enums/payment-type.enum";


export interface SalaryData {
  id: number;
  name: number;
  amount: number;
  currency: CurrencyEnum;
  timeFrequency: FrequencyEnum;
 paymentType: PaymentTypeEnum;
}
