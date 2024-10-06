import { MatTabsModule } from '@angular/material/tabs';
import {NgModule} from "@angular/core";
import {SelleryCardComponent} from "./components/sellery-card/sellery-card.component";
import {WidgetComponent} from './components/widget/widget.component';
import {CommonModule} from "@angular/common";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { FunctionNavBarComponent } from './components/function-nav-bar/function-nav-bar.component';

@NgModule({
  declarations: [
    SelleryCardComponent,
    WidgetComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    FunctionNavBarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    RouterLink,
  ],
  exports: [
    SelleryCardComponent,
    WidgetComponent,
    FunctionNavBarComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class TemplateModule { }
