import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroeService } from '../shared/heroe.service';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-unheroe',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unheroe.component.html',
  styleUrl: './unheroe.component.css'
})
export class UnheroeComponent {


  @Input()heroe!:Heroe;
  constructor(public heroeService:HeroeService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.heroe=heroeService.getUnHeroe(params['id']);
    })
  }
}
