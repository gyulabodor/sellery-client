import { ExpenseToPayData } from "../expense/expense-to-pay-data.model";
import { SalaryData } from "../salary/salary-data.model";
export interface ProcessingDateData{
    id:number;
    year:number;
    month:number;
    day:number;
    expenseToPayList: ExpenseToPayData[];
    salaryList: SalaryData[];
}