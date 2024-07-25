import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoPlannerComponent } from './crypto-planner/crypto-planner.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CryptoPageComponent } from './crypto-page/crypto-page.component';



@NgModule({
  declarations: [
    CryptoPlannerComponent,
    CryptoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CryptoModule { }
