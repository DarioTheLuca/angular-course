import { Injectable } from '@angular/core';

@Injectable({   // indentifica che la classe autenticazione sarà iniettabile
  providedIn: 'root'
})
export class AutenticazioneService {

  constructor() { }

   autentica(userName: String,password:String,eta:number){
     // return (userName==="dario@gmail.com" && password==="123")? true:false; operatore ternario
     if (userName === "dario@gmail.com" && password === "123" && eta=== 28 ) {
      return true;
     }
      else {
        return false;
      }

    }

    autenticaPin(pin:String){
      if(pin==="JANG1")
      return true
      else{
        return false;
      }
    }
   
  
}
