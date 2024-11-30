import { Injectable } from '@angular/core';
import { menus_name } from '../Models/menus_name';
import { menu_enum } from '../Models/menu_enum';

@Injectable({
  providedIn: 'root'
})
export class MenuNamesService {

  constructor() { }

  private menuList: menus_name[] = [
    { name: menu_enum.About, description: 'About' },
    { name: menu_enum.Contact, description: 'Contact' },
    { name: menu_enum.Lab, description: 'Lab' },
  ];

  getMenuList(): menus_name[] {
    return this.menuList;
  }
}
