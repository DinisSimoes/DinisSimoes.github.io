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
  imports: [
    ButtonModule,
    FormsModule,
    InputTextareaModule,
    FloatLabelModule,
    InputTextModule,
    DropdownModule,
  ],
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.scss',
})
export class PageContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContactMethod: '',
  };

  contactMethods = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
  ];

  constructor(private languageService: LanguageService) {}

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
    return this.languageService.getTranslation(
      'contact_placeholder_preferred_contact_method'
    );
  }

  get btnSendMessage(): string {
    return this.languageService.getTranslation('contact_button');
  }

  sendMessage() {
    const missingFields = this.getMissingFields();

    if (missingFields.length === 0) {
      console.log('Form Data:', this.contactForm);
    } else {
      const message = `${this.languageService.getTranslation(
        'contact_error_message'
      )}\n- ${missingFields.join('\n- ')}`;
      alert(message);
    }
  }

  getMissingFields(): string[] {
    const missingFields: string[] = [];

    if (!this.contactForm.name.trim())
      missingFields.push(
        this.languageService.getTranslation('contact_error_fiels_name')
      );
    if (!this.contactForm.email.trim())
      missingFields.push(
        this.languageService.getTranslation('contact_error_fiels_email')
      );
    if (!this.contactForm.phone.trim())
      missingFields.push(
        this.languageService.getTranslation('contact_erro_fields_phone')
      );
    if (!this.contactForm.preferredContactMethod.trim())
      missingFields.push(
        this.languageService.getTranslation(
          'contact_error_fiels_preferred_contact_method'
        )
      );
    if (!this.contactForm.message.trim())
      missingFields.push(
        this.languageService.getTranslation('contact_error_fiels_message')
      );

    return missingFields;
  }
}
