import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceoutputpropertyService {

  numberValue: number = 0;

  constructor() { }

  getIncrement(){
    
    return this.numberValue++;
  }

  getDecrement(){

    return this.numberValue--;
  }
}
