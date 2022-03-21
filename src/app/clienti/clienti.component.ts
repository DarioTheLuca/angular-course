import { DatePipe, formatDate, getLocaleMonthNames } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfrontoDataService } from 'src/services/confronto-data.service';
import { IClienti } from '../models/Clienti';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
  clienti: IClienti[] = [ //ora articoli è un oggetto
    { nome: 'GIORGIO', cognome: 'DE LUCA', codCliente: 'HKDJG8', eta: 24, dataNascita: new Date('12-3-2000'), dataNoleggio: new Date('3-21-2022'), durataNoleggioH: 1 },
    { nome: 'DARIO', cognome: 'DE LUCA', codCliente: 'HKDJF8', eta: 28, dataNascita: new Date('12-28-1993'), dataNoleggio: new Date(), durataNoleggioH: 5 },
    { nome: 'SARA', cognome: 'CRUISE', codCliente: 'HDH8', eta: 26, dataNascita: new Date('06-28-1993'), dataNoleggio: new Date('3-21-2022'), durataNoleggioH: 5 },
    { nome: 'GIORGIO', cognome: 'NAPOLITANO', codCliente: 'HKHDFHG8', eta: 27, dataNascita: new Date('12-25-1994'), dataNoleggio: new Date(), durataNoleggioH: 4 }

  ]


  clienti2: IClienti[] = [];
  noleggio = "";
  mostra = false;

  dataOggi = new Date();
  //data: Date;

  constructor(private route: Router, private matchData: ConfrontoDataService) {


  }

  ngOnInit(): void {
    this.estrapolo();

  }

  estrapolo = () => {

    for (var i = 0; i < this.clienti.length; i++) {
      if (this.clienti[i].durataNoleggioH > 1) {
        if (this.matchData.confrontoData(this.clienti[i].dataNoleggio, this.dataOggi)) {
          // var client={
          //   nome:this.clienti[i].nome,
          //   cognome:this.clienti[i].cognome,
          //   codCliente:this.clienti[i].codCliente,
          //   eta:this.clienti[i].eta,
          //   dataNascita:this.clienti[i].dataNascita,
          //   dataNoleggio:this.clienti[i].dataNoleggio,
          //   durataNoleggioH:this.clienti[i].durataNoleggioH,
          //   this.clienti2.push(client);
          // };
          this.clienti2.push(this.clienti[i]);
        }
      }
    }
  }


noleggiato = () => {
  if (this.noleggio.toLowerCase() === "y") {
    this.mostra = true;
  }
  // else if(this.noleggio.toLowerCase() === "n"){

  // }
}

goWelcome2Page = () => {
  this.route.navigate(['welcome2'])
}
  


}
