import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() languages;
  private translateService: TranslateService;
  constructor(translate: TranslateService) {
    this.translateService = translate;
  }

  ngOnInit() {}

  onLanguageSelected(language: string) {
    this.translateService.use(language);
  }
}
