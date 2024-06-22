import { NgModule } from "@angular/core";
import { SelleryCardComponent } from "./sellery-card/sellery-card.component";
import { WidgetBaseComponent } from './components/widget-base/widget-base.component';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
    declarations: [SelleryCardComponent, WidgetBaseComponent, WidgetComponent],
  exports: [SelleryCardComponent, WidgetBaseComponent, WidgetComponent]
})
export class TemplateModule { }
