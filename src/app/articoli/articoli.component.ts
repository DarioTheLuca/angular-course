import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../models/Articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli:IArticoli[]=[ //ora articoli è un oggetto
    {codart : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', pzcart : 24, peso : 1, prezzo : 1.09, active : true, data : new Date()},
    {codart : '014600302', descrizione : 'GAROFALO FARINA 1 KG', um : 'PZ', pzcart : 30, peso : 1, prezzo : 2.50, active : true, data : new Date()},
    {codart : '014600303', descrizione : 'DIVELLA FARINA 1 KG', um : 'PZ', pzcart : 6, peso : 1, prezzo : 1.29, active : true, data : new Date()},
    {codart : '014600304', descrizione : 'NUTELLA 1 KG', um : 'PZ', pzcart : 12, peso : 1, prezzo : 0.99, active : true, data : new Date()}
   ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
