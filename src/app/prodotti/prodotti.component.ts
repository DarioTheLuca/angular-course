import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  
condizione=false;

  biciclette= [
    {raggio : '10', colore : 'blu', durataH : 7, costoH : 3},
    {raggio : '15', colore : 'rosso', durataH : 3.5, costoH : 8.2},
    {raggio : '20', colore : 'nero', durataH : 4, costoH : 7},
    {raggio : '25', colore : 'rosa', durataH : 2, costoH : 5}
   ]

   monopattini= [
    {marca: 'BOH1', colore : 'Blu', durataH : 1.5, Vmax : 30, costoH : 5},
    {marca: 'BOH2', colore : 'Nero', durataH : 2, Vmax : 35, costoH : 6},
    {marca: 'BOH3', colore : 'Verde', durataH : 5, Vmax : 40, costoH : 7},

   ]

  constructor() { }

  ngOnInit(): void {

   this.visualizzaLink();

  }

  visualizzaLink=()=>{
    for(var i=0;i<this.biciclette.length;i++){
      
      if(this.biciclette[i].durataH>=6)
        for(var j=0;j<this.monopattini.length;j++){
  
          if(this.monopattini[j].durataH>=4)
            this.condizione=true; 
        }
    }
  }



    
}     
  
