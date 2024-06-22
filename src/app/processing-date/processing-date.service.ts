import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessingDate } from './processing-date.model';

@Injectable({
  providedIn: 'root',
})
export class ProcessingDateService {
  constructor(private http: HttpClient) {}

  issueDateToString(issueDate: ProcessingDate) :string {
    return `${issueDate.year}.${issueDate.month}.${issueDate.day}`;
  }
}
