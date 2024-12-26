import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextareaModule, FloatLabelModule, InputTextModule],
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.scss'
})
export class PageContactComponent {
  value:string="teste";
}
