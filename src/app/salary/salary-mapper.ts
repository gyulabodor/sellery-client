import { convertIssueDateToIssueDateTemplate } from "./issue-date-mapper";
import { SalaryTemplate } from "./salary-template.model";
import { Salary } from "./salary.model";

export const convertSalaryToSalaryTemplate = (salary: Salary) :SalaryTemplate => {
    return {
        id: salary.id,
        amount: salary.amount,
        currency: salary.currency,
        issueDateTemplate: convertIssueDateToIssueDateTemplate(salary.processingDate)
    } as SalaryTemplate;
}
