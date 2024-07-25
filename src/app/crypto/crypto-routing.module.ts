import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CryptoPageComponent} from "./crypto-page/crypto-page.component";

export const cryptoRoutes: Routes = [
  {
    path:'',
    component: CryptoPageComponent
  }
]

@NgModule({
    imports: [RouterModule.forChild(cryptoRoutes)],
    exports: [RouterModule],
  }
)
export class CryptoRoutingModule {}
