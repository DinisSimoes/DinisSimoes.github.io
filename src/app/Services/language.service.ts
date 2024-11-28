import { Injectable } from '@angular/core';
import { TRANSLATIONS } from '../Models/translations';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageKey = 'language';
  private languageSubject = new BehaviorSubject<'PT' | 'EN'>(this.getLanguage());

  // Observable para mudanças de idioma
  language$ = this.languageSubject.asObservable();

  setLanguage(language: 'PT' | 'EN'): void {
    document.documentElement.classList.toggle('PT', language === 'PT');
    localStorage.setItem(this.languageKey, language);
    this.languageSubject.next(language);
    console.log(language);
  }

  getLanguage(): 'PT' | 'EN' {
    return (localStorage.getItem(this.languageKey) as 'PT' | 'EN') || 'PT';
  }

  getTranslation(key: string): string {
    const currentLanguage = this.getLanguage();
    const translations = TRANSLATIONS[currentLanguage];
    return translations[key] || key;
  }
}
