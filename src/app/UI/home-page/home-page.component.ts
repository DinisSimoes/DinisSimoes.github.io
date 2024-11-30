import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router'; 
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
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
import { PageAboutComponent } from "../page-about/page-about.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, ButtonModule, RouterModule, FormsModule, ToggleButtonModule, MatSidenavModule, MatListModule, CommonModule, PageAboutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  currentTheme: 'light' | 'dark' = 'light';
  currentLanguage: 'PT' | 'EN' = 'PT';

  activeComponent: menu_enum = menu_enum.About;
  menu_enum = menu_enum;
  component_name = '';
  menuList: menus_name[] = [];

  constructor(private themeService: ThemeService, private languageService: LanguageService, private menuNamesService: MenuNamesService) {}
  
  ngOnInit() {
    this.currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(this.currentTheme);
    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.setLanguage(this.currentLanguage);
    this.menuList = this.menuNamesService.getMenuList();
    this.component_name = this.menuList[0].description;
    this.init3DModel();
  }

  get buttonDownloadCV(): string {
    return this.languageService.getTranslation('buttonDownloadCV');
  }

  get conteudo(): string {
    return this.languageService.getTranslation('conteudo');
  }

  toggleTheme(event: any): void {
    const newTheme = event.checked ? 'dark' : 'light';  // Define o tema baseado no toggle
    this.themeService.setTheme(newTheme);
  }

  toggleLanguage(event: any): void {
    const newLanguage = event.checked ? 'EN' : 'PT';  // Define o idioma baseado no toggle
    this.languageService.setLanguage(newLanguage);
    console.log(this.languageService.getLanguage());
  }
  
  init3DModel() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 500);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7).normalize();
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      '/my_avatar.glb', // Certifique-se de que o caminho está correto
      (gltf) => {
      const avatar = gltf.scene;
      console.log(avatar);
      avatar.scale.set(1, 1, 1); // Ajuste o tamanho conforme necessário
      scene.add(avatar);

      avatar.position.set(0, -3.5, 0); // Move o modelo para alinhar a cabeça no centro
      avatar.scale.set(3, 3, 3); // Aumenta o tamanho do modelo, se necessário

      // Ajuste a câmera para focar no rosto
      camera.position.set(0, 1.6, 1); // Altura e distância da câmera
      camera.lookAt(0, 1.6, 0);
  },
  undefined,
  (error) => {
    console.error('Erro ao carregar o modelo:', error);
  }
);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();

    
  }

  
  
  menuClick(menu: menus_name) {
    this.component_name = menu.description;
    this.setActiveComponent(menu.name as menu_enum);
  }

  setActiveComponent(menu: menu_enum) {
    this.activeComponent = menu;
  }

}
