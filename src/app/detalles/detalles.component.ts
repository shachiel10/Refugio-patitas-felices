import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  @Input() cita: any;
  mostrarDetalles: boolean = false;

  toggleDetalles() {
    this.mostrarDetalles = !this.mostrarDetalles;
  }
}
