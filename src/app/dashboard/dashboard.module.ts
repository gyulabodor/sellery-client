import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRouterModule } from './dashboard-router.module';
import { TemplateModule } from "../template/template.module";

@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouterModule,
    TemplateModule
  ]
})
export class DashboardModule { }
