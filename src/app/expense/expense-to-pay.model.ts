import { ProcessingDate } from "../processing-date/processing-date.model";
import { PaymentTypeEnum } from "../shared/enums/payment-type.enum";
import { Expense } from "./expense.model";

export interface ExpenseToPay{
    id: number;
    expense: Expense;
    processingDate: ProcessingDate;
    numberOfPayment: number;
    payed: number;
    paymentType: PaymentTypeEnum;
}