import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {DetailPage} from '../pages/detail/detail'; /////// Importar las paginas que se usa

import { HttpClientModule, HttpClient } from '@angular/common/http'; ////////Agregado
//import {php} from 'http://localhost/pruebas/Ionic/prueba.php';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage ///////
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule ///////////
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage ///////// 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule /////////

  ]
})
export class AppModule {}
