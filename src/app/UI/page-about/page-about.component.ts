import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-page-about',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextareaModule, FloatLabelModule, InputTextModule],
  templateUrl: './page-about.component.html',
  styleUrl: './page-about.component.scss'
})
export class PageAboutComponent {
value:string="teste";
}
