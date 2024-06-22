import { CurrencyEnum } from "../shared/enums/currency.enum";
import { FrequencyEnum } from "../shared/enums/frequency.enum";

export interface ExpenseData{
    id: number;
    itemName: string;
    amount:number;
    currency: CurrencyEnum;
    frequency: FrequencyEnum;
}