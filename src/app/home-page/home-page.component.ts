import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router'; 
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { ThemeService } from '../Services/theme.service';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, ButtonModule, RouterModule, FormsModule, ToggleButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  currentTheme: 'light' | 'dark' = 'light';

  constructor(private themeService: ThemeService) {}
  
  ngOnInit() {
    this.currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(this.currentTheme);
    this.init3DModel();
  }

  toggleTheme(event: any): void {
    const newTheme = event.checked ? 'dark' : 'light';  // Define o tema baseado no toggle
    this.themeService.setTheme(newTheme);
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

  
}
