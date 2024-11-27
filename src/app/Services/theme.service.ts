import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeKey = 'theme';

  setTheme(theme: 'light' | 'dark'): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(this.themeKey, theme);
  }

  getTheme(): 'light' | 'dark' {
    return (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light';
  }
}
