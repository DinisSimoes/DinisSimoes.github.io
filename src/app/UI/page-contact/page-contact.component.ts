import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { LanguageService } from '../../Services/language.service';
import { ContactService } from '../../Services/contact.service';

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


  constructor(private languageService: LanguageService, private contactService: ContactService) {}

  ngOnInit(){

  

  }

  get contactMethods(){
return[
  { label: this.languageService.getTranslation('contact_error_fiels_email'), value: 'Email' },
  { label: this.languageService.getTranslation('contact_erro_fields_phone'), value: 'Phone' },
]
  }


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

  async sendMessage() {

    const missingFields = this.getMissingFields();
  const errorMail = this.validateEmail();
  const errorPhone = this.validatePhone(); 

  if (missingFields.length === 0) {
    if (!errorMail.trim() && !errorPhone.trim()) {
      try {
        await this.contactService.sendContactMessage(this.contactForm);
        alert('Mensagem enviada com sucesso!');
        this.contactForm = { name: '', email: '', phone: '', message: '', preferredContactMethod: '' };
      } catch (error) {
        alert('Erro ao enviar mensagem.');
      }
    } else {
      alert(errorMail || errorPhone);
      return;
    }
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

  validateEmail() {
    let emailError ='';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.contactForm.email)) {
      emailError = this.languageService.getTranslation('contact_error_invalid_email');
    } else {
      emailError = '';
    }

    return emailError;
  }

  validatePhone(): string {
    let phoneError = '';
  
    // Regex para números de telefone internacionais
    const phoneRegex = /^\+?[1-9]\d{6,20}$/;
  
    if (!phoneRegex.test(this.contactForm.phone)) {
      phoneError = this.languageService.getTranslation('contact_error_invalid_phone');
    }
  
    return phoneError;
  }
}
