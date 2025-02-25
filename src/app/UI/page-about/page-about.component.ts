import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-page-about',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextareaModule, FloatLabelModule, InputTextModule],
  templateUrl: './page-about.component.html',
  styleUrl: './page-about.component.scss'
})
export class PageAboutComponent {
value:string="teste";
constructor(private languageService: LanguageService) { }

  get about_title(): string {
    return this.languageService.getTranslation('about_title');
  }

  get about_fellings(): string {
    return this.languageService.getTranslation('about_fellings');
  }

  get about_content(): string {
    return this.languageService.getTranslation('about_content');
  }

  get about_content2(): string {
    return this.languageService.getTranslation('about_content2');
  }

  get about_skill(): string {
    return this.languageService.getTranslation('about_skill');
  }
}
