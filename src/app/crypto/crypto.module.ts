import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CryptoPlannerComponent} from './crypto-planner/crypto-planner.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CryptoPageComponent} from './crypto-page/crypto-page.component';
import {CryptoRoutingModule} from "./crypto-routing.module";
import { MatTabsModule } from '@angular/material/tabs';

import { TemplateModule } from '../template/template.module';

@NgModule({
  declarations: [
    CryptoPlannerComponent,
    CryptoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CryptoRoutingModule,
    TemplateModule,
    MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CryptoModule { }
