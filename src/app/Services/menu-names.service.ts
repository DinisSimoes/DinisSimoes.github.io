import { Injectable } from '@angular/core';
import { menus_name } from '../Models/menus_name';
import { menu_enum } from '../Models/menu_enum';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class MenuNamesService {

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(() => {
      this.menuList = [
        { name: menu_enum.About, description: this.getAbout() },
        { name: menu_enum.Contact, description: this.getContact() },
        { name: menu_enum.Lab, description: this.getLab() },
      ];
    });
  }

  private menuList: menus_name[] = [
  ];

  getMenuList(): menus_name[] {
    return this.menuList;
  }

  getAbout(): string {
    return this.languageService.getTranslation('home_menu_about');
  }

  getContact(): string {
    return this.languageService.getTranslation('home_menu_contact');
  }

  getLab(): string {
    return this.languageService.getTranslation('home_menu_lab');
  }

}
