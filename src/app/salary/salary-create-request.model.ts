import { ProcessingDateCreateRequest } from '../processing-date/processing-date-create-request.model';
import { CurrencyEnum } from '../shared/enums/currency.enum';

export interface SalaryCreateRequest {
  amount: number;
  itemName: string;
  currency: CurrencyEnum.HUF;
  processingDate: ProcessingDateCreateRequest;
}
