import { Injectable } from '@angular/core';
import { Heroe } from '../heroe';
import { HEROES } from '../misheroes';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
 
  private heroes:Heroe[]=HEROES;

  constructor() { }

  getHeroes(){
    return this.heroes;
  }

  getUnHeroe(posicion:number):Heroe{
    return this.heroes[posicion];
  }

  searchUnHeroe(edadheroe:string):number{
    let index = this.heroes.findIndex(p=> p.raza === edadheroe);
    return index;
  }
}//fin de la clASE
