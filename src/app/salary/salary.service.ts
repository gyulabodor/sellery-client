import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salary } from './salary.model';
import { API_URL } from 'src/enviroment/env';
import { Observable } from 'rxjs';
import { SalaryCreateRequest } from './salary-create-request.model';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  public constructor(private http: HttpClient) {}
  public salaryList$ = this.http.get<Salary[]>(`${API_URL}/salaries`);

  public create(salaryCreateRequest: SalaryCreateRequest): Observable<Salary> {
    return this.http.post<Salary>(`${API_URL}/salaries`, salaryCreateRequest);
  }

  public deleteSalaryById(salaryId: number): Observable<Object> {
    return this.http.delete<Salary>(`${API_URL}/salaries/${salaryId}`)
  }
}
