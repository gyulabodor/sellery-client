import { IssueDateCreateRequest } from "../processing-date/processing-date-request.model";
import { ProcessingDateTemplate } from "../processing-date/processing-date-template.model";
import { ProcessingDate } from "../processing-date/processing-date.model";

export const convertToIssueDateCreateRequest=(dateString: string): IssueDateCreateRequest =>{
    let timestamp = Date.parse(dateString);
    timestamp = Number(
      timestamp.toString().slice(0, timestamp.toString().length - 3)
    );
    const date = new Date(timestamp * 1000);

    let issuedate = {
      day : date.getDate(),
      month :date.getUTCMonth() + 1,
      year: date.getFullYear()
    } as IssueDateCreateRequest
    console.log(issuedate)
    return {
      day : date.getDate(),
      month :date.getUTCMonth() + 1,
      year: date.getFullYear()
    } as IssueDateCreateRequest

  }

export const convertIssueDateToIssueDateTemplate = (issueDate: ProcessingDate) :ProcessingDateTemplate =>{
      return {
        id: issueDate.id,
        date: `${issueDate.year}.${issueDate.month}.${issueDate.day}`
      } as ProcessingDateTemplate;
  }
