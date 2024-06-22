import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryPageComponent } from './salary-page/salary-page.component';
import { SalaryFormComponent } from './salary-form/salary-form.component';

const routes: Routes = [
  { path: '', component: SalaryPageComponent },
  { path: 'new', component: SalaryFormComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryRouterModule {}
