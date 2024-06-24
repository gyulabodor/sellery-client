import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessingDate } from './processing-date.model';

@Injectable({
  providedIn: 'root',
})
export class ProcessingDateService {
  constructor(){}

  processingDateToString(processingDate: ProcessingDate) :string {
    return `${processingDate.year}.${processingDate.month}.${processingDate.day.toString().length > 1 ? processingDate.day : '0' + processingDate.day.toString()}`;
  }
}
