import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRouterModule } from "./login-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [LoginPageComponent],
  imports: [LoginRouterModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  providers: [LoginRouterModule,ReactiveFormsModule,CommonModule],
})
export class LoginModule {}
