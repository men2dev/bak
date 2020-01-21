import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Solicitud BAK';
  languages: string[];
  private translateService : TranslateService;

  constructor(translate: TranslateService) {
    translate.addLangs(['es', 'eu']);
    translate.setDefaultLang('es');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|eu/) ? browserLang : 'es');

    this.languages =  translate.getLangs();
    this.translateService = translate;
  }
}
