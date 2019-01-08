import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../pages/home/home.module';
import { FirebaseConfig } from '../config/firebase.config';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from 'angularfire2/auth';
import { StorageService } from '../service/storage.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(FirebaseConfig)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    StorageService
  ]
})
export class AppModule {}
