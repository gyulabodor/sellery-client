import { ProcessingDateData } from "../processing-date/processing-date-data.model";
import { ProcessingDateInParentData } from "../processing-date/processing-date-in-parent-data.model";
import { ExpenseData } from "./expense-data.model";

export interface ExpenseToPayData {
  id: number;
  expense: ExpenseData;
  processingDate: ProcessingDateInParentData;
}