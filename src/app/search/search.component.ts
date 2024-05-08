import { Component } from '@angular/core';
import { UnheroeComponent } from '../unheroe/unheroe.component';
import { HeroeService } from '../shared/heroe.service';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [UnheroeComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  raza:string="";
  indice:number=0;

  miraza:Heroe={

    edad:"",
    color:"",
    img:"",
    tiemporefugio:"",
    raza:"",
    comportamiento: ""
  };

  constructor(private heroeService: HeroeService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.raza=params['raza'];
      this.indice=this.heroeService.searchUnHeroe(this.raza);
      console.log(this.indice);

      if(this.indice != -1){
        this.miraza=this.heroeService.getUnHeroe(this.indice);
      }1

    });
  }

}//fin de la clase