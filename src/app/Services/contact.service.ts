import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firestore: Firestore, private languageService: LanguageService) { }

  async sendContactMessage(contactData: any) {
    try {
      const language = this.languageService.getLanguage(); // Obtém o idioma atual do usuário
      const dataToSend = { ...contactData, language, timestamp: new Date() }; // Adiciona idioma e timestamp

      const docRef = await addDoc(collection(this.firestore, 'contacts'), dataToSend);
      console.log('Mensagem enviada com ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      throw error;
    }
  }
}
