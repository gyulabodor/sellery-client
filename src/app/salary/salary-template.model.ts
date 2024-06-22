import { ProcessingDateTemplate } from "../processing-date/processing-date-template.model";

export interface SalaryTemplate{
    id: number;
    amount: number;
    currency: string;
    issueDateTemplate: ProcessingDateTemplate;
}
