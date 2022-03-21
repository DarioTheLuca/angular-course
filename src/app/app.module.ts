import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { WrongloginComponent } from './wronglogin/wronglogin.component';
import { SecondloginComponent } from './secondlogin/secondlogin.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { Welcome2Component } from './welcome2/welcome2.component';


@NgModule({  // costituito da parametri
  declarations: [ //elenco componenti presenti nel progetto
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    WrongloginComponent,
    SecondloginComponent,
    ArticoliComponent,
    ProdottiComponent,
    ClientiComponent,
    Welcome2Component  // generato quando è generato un nuovo componente
     
  ],
  imports: [ //si inseriscono i modules
    BrowserModule,
    AppRoutingModule,
    FormsModule     //per permettere il funzionamento del  binding bidirezionale
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  //è la classe che rappresenta il punto di raccolta dei vari elementi constituenti l'angula
