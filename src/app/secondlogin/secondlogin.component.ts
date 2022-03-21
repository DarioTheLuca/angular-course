import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticazioneService } from 'src/services/autenticazione.service';

@Component({
  selector: 'app-secondlogin',
  templateUrl: './secondlogin.component.html',
  styleUrls: ['./secondlogin.component.css']
})
export class SecondloginComponent implements OnInit {
  nome="Dario";
  cognome="De Luca";
  username="";
  pin='';
  msg="";
  constructor(private route:Router, private route1:ActivatedRoute,private AutPin:AutenticazioneService) { }

  ngOnInit(): void {
    this.username=this.route1.snapshot.params["userName"]
    
  }

  conferma=()=>{
    if (this.AutPin.autenticaPin(this.pin)){

      this.route.navigate(['welcome',this.username,this.nome,this.cognome])
    }
    else{
      this.msg="Pin errato."
    }
  }



}
