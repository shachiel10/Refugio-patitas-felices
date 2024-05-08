import { Component } from '@angular/core';
import { HeroeService } from '../shared/heroe.service';
import { Heroe } from '../heroe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  misHeroes:Heroe[]=[];

  constructor(public miservicio: HeroeService){
    console.log("constructor de heroes")
  }

  ngOnInit():void{
    console.log("ngOnInit de Heroes");
    this.misHeroes=this.misHeroes=this.miservicio.getHeroes();
    console.log(this.misHeroes)
  }
}
