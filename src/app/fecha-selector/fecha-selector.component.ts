import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha-selector',
  templateUrl: './fecha-selector.component.html',
  styleUrls: ['./fecha-selector.component.css']
})
export class FechaSelectorComponent {
  fechaSeleccionada: Date = new Date(); // Inicialización por defecto

  constructor() { }
}
