import { Component } from '@angular/core';
import { SalaryService } from '../salary.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CURRENCIES, CurrencyEnum } from 'src/app/shared/enums/currency.enum';
import { SalaryCreateRequest } from '../salary-create-request.model';
import { Salary } from '../salary.model';
import { BehaviorSubject, Observable} from 'rxjs';
import { FlowState } from './flow-state.enum';
@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.component.html',
  styleUrls: ['./salary-form.component.css'],
})
export class SalaryFormComponent {
  constructor(
    private salaryService: SalaryService,
    private fb: FormBuilder,
  ) {}
  currencies = CURRENCIES;

  result$?: Observable<Salary>;
  flowState$?: BehaviorSubject<FlowState>;
  
  salaryForm = this.fb.group({
    issueDate: ['', [Validators.required]],
    amount: ['',[Validators.required]],
    currency: [CurrencyEnum.HUF],
  });

  submit() {
    this.result$ = this.salaryService.create({} as SalaryCreateRequest)
  }
}
