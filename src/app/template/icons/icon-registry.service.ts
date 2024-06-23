import {Injectable} from "@angular/core";
import {MatIconRegistry} from "@angular/material/icon";
import {IconData} from "./icon.model";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  constructor(private matIconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer
  ) {}

  public registerSvgIcons(IconList: IconData[]) :void{
    IconList.forEach(icon => {
      this.matIconRegistry.addSvgIcon(icon.name,this.sanitizer.bypassSecurityTrustResourceUrl(icon.path));
    })
  }
}
