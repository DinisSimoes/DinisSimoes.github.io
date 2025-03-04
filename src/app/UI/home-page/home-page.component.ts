import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../Services/theme.service';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { LanguageService } from '../../Services/language.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { menu_enum } from '../../Models/menu_enum';
import { menus_name } from '../../Models/menus_name';
import { MenuNamesService } from '../../Services/menu-names.service';
import { CommonModule } from '@angular/common';
import { PageAboutComponent } from '../page-about/page-about.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    ButtonModule,
    RouterModule,
    FormsModule,
    ToggleButtonModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    PageAboutComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements AfterViewInit {
  currentTheme: 'light' | 'dark' = 'light';
  currentLanguage: 'PT' | 'EN' = 'PT';
  currentThemeToogle = false;
  currentLanguageToggle = false;

  activeComponent: menu_enum = menu_enum.About;
  menu_enum = menu_enum;
  component_name = '';
  menuList: menus_name[] = [];
  currentYear: number = new Date().getFullYear();

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private menuNamesService: MenuNamesService,
    private router: Router
  ) {}

  @HostListener('window:wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (window.innerWidth > 768) {
      if (event.deltaY > 0) {
        this.navigateNext();
      } else {
        this.navigatePrev();
      }
    }
  }

  currentIndex = 0;
  navigateNext() {
    if (this.currentIndex < this.menuList.length - 1) {
      this.currentIndex++;
      this.router.navigate([this.menuList[this.currentIndex].name]);
    }
  }

  navigatePrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate([this.menuList[this.currentIndex].name]);
    }
  }

  @ViewChild('swipeContainer') swipeContainer!: ElementRef;

  private startX: number = 0;
  private endX: number = 0;
  
  ngAfterViewInit() {
    if (window.innerWidth <= 768) {
      // Apenas para dispositivos móveis
      const swipeElement = this.swipeContainer.nativeElement;

      swipeElement.addEventListener('touchstart', (event: TouchEvent) => {
        this.startX = event.touches[0].clientX;
      });

      swipeElement.addEventListener('touchend', (event: TouchEvent) => {
        this.endX = event.changedTouches[0].clientX;
        this.handleSwipe();
      });
    }
  }

  handleSwipe() {
    if (this.startX > this.endX + 50) {
      // Deslize para a esquerda
      this.navigateNext();
    } else if (this.startX < this.endX - 50) {
      // Deslize para a direita
      this.navigatePrev();
    }
  }

  navigateToComponent(index: number) {
    const nextMenu = this.menuList[index];
    console.log(nextMenu);
    if (nextMenu) {
      this.component_name = nextMenu.description;
      this.activeComponent = nextMenu.name as menu_enum;
    }
  }

  ngOnInit() {
    this.currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(this.currentTheme);
    if (this.currentTheme === 'dark') {
      this.currentThemeToogle = true;
    } else {
      this.currentThemeToogle = false;
    }

    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.setLanguage(this.currentLanguage);
    if (this.currentLanguage === 'EN') {
      this.currentLanguageToggle = true;
    } else {
      this.currentLanguageToggle = false;
    }

    this.menuList = this.menuNamesService.getMenuList();
    this.component_name = this.menuList[0].description;

    this.languageService.language$.subscribe(() => {
      this.menuList = this.menuNamesService.getMenuList();
      this.component_name = this.menuList[0].description;
    });
  }

  get buttonDownloadCV(): string {
    return this.languageService.getTranslation('buttonDownloadCV');
  }

  get conteudo(): string {
    return this.languageService.getTranslation('conteudo');
  }

  get home_resume_1(): string {
    return this.languageService.getTranslation('home_resume_1');
  }

  get home_resume_2(): string {
    return this.languageService.getTranslation('home_resume_2');
  }

  get home_resume_3(): string {
    return this.languageService.getTranslation('home_resume_3');
  }

  get home_resume_4(): string {
    return this.languageService.getTranslation('home_resume_4');
  }

  get home_swipe(): string {
    return this.languageService.getTranslation('home_swipe');
  }

  get all_rights(): string{
    return this.languageService.getTranslation('home_footer_all_rights');
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  toggleTheme(event: any): void {
    const newTheme = event.checked ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }

  toggleLanguage(event: any): void {
    const newLanguage = event.checked ? 'EN' : 'PT';
    this.languageService.setLanguage(newLanguage);
    console.log(this.languageService.getLanguage());
  }

  menuClick(menu: menus_name) {
    this.component_name = menu.description;
    this.setActiveComponent(menu.name as menu_enum);
    console.log(this.activeComponent);
  }

  setActiveComponent(menu: menu_enum) {
    this.activeComponent = menu;
  }

  downloadCV() {
    const currentLanguage = this.languageService.getLanguage();
    let cvLink: string;

    if (currentLanguage === 'PT') {
      cvLink =
        'https://drive.google.com/file/d/1oyG_uZ1VS6GwIywXQQXss0dnNwijQDG_/view?usp=sharing';
    } else {
      cvLink =
        'https://drive.google.com/file/d/1F2uEr9ESmf6SaW2aC_jXfczXShAzjhCF/view?usp=sharing';
    }

    window.open(cvLink, '_blank');
  }
}
