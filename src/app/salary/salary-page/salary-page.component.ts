import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';
import { BehaviorSubject, Observable, map} from 'rxjs';
import { SalaryData } from '../salary-data.model';
import { MatTableDataSource } from '@angular/material/table';
import { ProcessingDateService } from '../../processing-date/processing-date.service';
import { OperationButtonClickEnum } from './operation-button-click.enum';
import { Salary } from '../salary.model';

@Component({
  selector: 'app-salary-page',
  templateUrl: './salary-page.component.html',
  styleUrls: ['./salary-page.component.css'],
})
export class SalaryPageComponent implements OnInit {

  public operationButtonClicks$ = new BehaviorSubject<OperationButtonClickEnum>(OperationButtonClickEnum.READ);

  constructor(
    private salaryService: SalaryService,
    private issueDateService: ProcessingDateService
  ) {}


  salaryList$ = this.salaryService.salaryList$;
  salaryTemplateList$= new Observable<Salary[]>();
  displayedColumns: string[] = ['issueDate', 'amount', 'operations'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  //dataSource$ = new SalaryDataSource([] as SalaryData[]);
  dataSource = new MatTableDataSource<Salary>();
  salaries$ = new Observable<Salary[]>();
    inputSalary = {} as SalaryData;
  ngOnInit(): void {

    this.salaryTemplateList$ = this.salaryList$.pipe(
      map((salaries) => {
        salaries.map((salary) => {

        });
        return salaries;
      })
    );
  }

  public salaryDeleteApproved(operationButtonClick: OperationButtonClickEnum): boolean {
    return operationButtonClick === OperationButtonClickEnum.APPROVE;
  }

  public deleteButtonClicked(salaryId: number): void {
    //popUpnavigation
    this.salaryService.deleteSalaryById(salaryId)
    this.operationButtonClicks$.next(OperationButtonClickEnum.DELETE);
  }

  public updateButtonClicked(): void {
      this.operationButtonClicks$.next(OperationButtonClickEnum.UPDATE)
  }

}
