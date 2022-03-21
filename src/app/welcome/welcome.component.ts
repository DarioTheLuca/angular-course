import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  utente='';
  nomeUtente="";
  cognomeUtente="";
  constructor(private route:ActivatedRoute) { } //facciamo la code injection, per poter usare la variabile di tipo activatedRoute

  ngOnInit(): void { // in questo metodo passiamo le variabili da altri componenti
    this.utente=this.route.snapshot.params["userName"]
    this.nomeUtente=this.route.snapshot.params["nome"]
    this.cognomeUtente=this.route.snapshot.params["cognome"]

  }

  
}
