import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/services/autenticazione.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "dario@gmail.com";
  password = "123";

  eta = 0;
  autenticato = true; //per far comparire l'immagine di fallimento
  autenticato2 = false; //per far comparire l'immagine di successo
  b = false;  //variabile per far diventare permanente l'immagine di fallimento o il messaggio 
  messaggio = "Username e/o password ERRATE";
  msg2 = "";
  maggiorenne = false;

  constructor(private route: Router, private basicAut: AutenticazioneService) { }  //facciamo la code injection, per poter usare la variabile di tipo router

  ngOnInit(): void { //implementazione del metodo ereditato
  }

  autenticazione = () => {
    // console.log(this.userName + "      " +this.password)

    this.autenticato = true;
    this.autenticato2 = false;
    if (this.basicAut.autentica(this.userName, this.password, this.eta)) {
      if (this.eta < 18) {
        this.msg2 = "SEI MINORENNE";
        this.maggiorenne = false;
      }
      else {
        this.msg2 = "SEI MAGGIORENNE"
        this.route.navigate(['secondlogin', this.userName]) //per andare nella pagina di welcome
        this.maggiorenne = true;
      }

    }
    else {
      this.autenticato = !this.autenticato;
      this.autenticato2 = this.autenticato2;
      // this.b = true
      this.route.navigate(['wronglogin'])
    }
  }

  // if (this.userName === "dario@gmail.com" && this.password === "123" && eta=== 28) {
  //   this.autenticato = this.autenticato;
  //   this.autenticato2 = !this.autenticato2;

  //   if (this.eta < 18) {
  //     this.msg2 = "SEI MINORENNE";
  //     this.maggiorenne = false;
  //   }
  //   else {
  //     this.msg2 = "SEI MAGGIORENNE"
  //     this.route.navigate(['secondlogin',this.userName]) //per andare nella pagina di welcome
  //     this.maggiorenne = true;
  //   }

  // }
  // else {
  //   this.autenticato = !this.autenticato;
  //   this.autenticato2 = this.autenticato2;
  //   // this.b = true
  //   this.route.navigate(['wronglogin'])
  // }
}


