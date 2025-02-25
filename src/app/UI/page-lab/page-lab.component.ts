import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-page-lab',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './page-lab.component.html',
  styleUrl: './page-lab.component.scss'
})
export class PageLabComponent {

  constructor(private languageService: LanguageService) { }

  get lab_title(): string {
    return this.languageService.getTranslation('lab_title');
  }

  get lab_subtitle(): string {
    return this.languageService.getTranslation('lab_subtitle');
  }

  get lab_content(): string {
    return this.languageService.getTranslation('lab_content');
  }

  get lab_content2(): string {
    return this.languageService.getTranslation('lab_content2');
  }

  get lab_caution(): string {
    return this.languageService.getTranslation('lab_caution');
  }

  get lab_button(): string {
    return this.languageService.getTranslation('lab_button');
  }

  btnShowLab(){
    alert(this.languageService.getTranslation('lab_error_message'));
  }
}
