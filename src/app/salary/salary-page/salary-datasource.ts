import { DataSource } from '@angular/cdk/collections';
import { Salary } from '../salary.model';
import { Observable, ReplaySubject } from 'rxjs';

export class SalaryDataSource extends DataSource<Salary> {
  private _salaryStream = new ReplaySubject<Salary[]>();

  constructor(initialSalary: Salary[]) {
    super();
    this.setData(initialSalary);
  }

  connect(): Observable<Salary[]> {
    return this._salaryStream;
  }

  disconnect() {}

  setData(salaries: Salary[]) {
    this._salaryStream.next(salaries);
  }
}
