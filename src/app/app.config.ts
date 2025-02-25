import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"portfolio-c7484","appId":"1:55932730828:web:497e190c918616bb3a7169","storageBucket":"portfolio-c7484.firebasestorage.app","apiKey":"AIzaSyAo4xLYmCn-UXSM1MsIzKVdKaQMEtb1Rgs","authDomain":"portfolio-c7484.firebaseapp.com","messagingSenderId":"55932730828","measurementId":"G-7DYQ9X6H5F"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"portfolio-c7484","appId":"1:55932730828:web:497e190c918616bb3a7169","storageBucket":"portfolio-c7484.firebasestorage.app","apiKey":"AIzaSyAo4xLYmCn-UXSM1MsIzKVdKaQMEtb1Rgs","authDomain":"portfolio-c7484.firebaseapp.com","messagingSenderId":"55932730828","measurementId":"G-7DYQ9X6H5F"})), provideAuth(() => getAuth())]
};
