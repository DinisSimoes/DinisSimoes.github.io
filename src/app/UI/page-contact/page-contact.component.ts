import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { LanguageService } from '../../Services/language.service';


@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputTextareaModule, FloatLabelModule, InputTextModule, DropdownModule],
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.scss'
})
export class PageContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContactMethod: ''
  };
  
  contactMethods = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' }
  ];

  constructor(private languageService: LanguageService) { }

  get contact_title(): string {
    return this.languageService.getTranslation('contact_title');
  }

  get placeholderName(): string {
    return this.languageService.getTranslation('contact_placeholder_name');
  }

  get placeholderEmail(): string {
    return this.languageService.getTranslation('contact_placeholder_email');
  }

  get placeholderPhone(): string {
    return this.languageService.getTranslation('contact_placeholder_phone');
  }

  get placeholderMessage(): string {
    return this.languageService.getTranslation('contact_placeholder_message');
  }

  get placeholderContactPreference(): string {
    return this.languageService.getTranslation('contact_placeholder_preferred_contact_method');
  }

  get btnSendMessage(): string {
    return this.languageService.getTranslation('contact_button');
  }
  
  sendMessage() {
    if (this.isFormValid()) {
      console.log('Form Data:', this.contactForm);
      // Lógica para envio de mensagem (API ou outro método)
    } else {
      console.error('Form is invalid.');
    }
  }
  
  isFormValid(): boolean {
    return (
      this.contactForm.name.trim().length > 0 &&
      this.contactForm.email.trim().length > 0 &&
      this.contactForm.message.trim().length > 0 &&
      this.contactForm.preferredContactMethod.trim().length > 0
    );
  }
}
