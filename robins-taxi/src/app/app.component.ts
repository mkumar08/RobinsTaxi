import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'robins-taxi';
  private readonly translate = inject(TranslateService);

  ngOnInit() {
    // Detect user's browser language or default to English
    const browserLang = this.translate.getBrowserLang();
    const supportedLanguages = ['en', 'es'];

    // If browser language is supported, use it; otherwise default to English
    const languageToUse = supportedLanguages.includes(browserLang || '') ? browserLang : 'en';
    this.translate.use(languageToUse);
  }
}
