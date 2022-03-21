import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfrontoDataService {

  constructor() { }

  confrontoData(data1: Date,data2:Date){
    if (data1.getDate()==data2.getDate() 
    && data1.getMonth()==data2.getMonth() 
    &&data1.getFullYear()==data2.getFullYear()){
      return true;
    }
    else{
      return false;
    }
  }
}
