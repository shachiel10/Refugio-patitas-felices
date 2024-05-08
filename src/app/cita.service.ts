import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor() { }

  getCitas(): Observable<any[]> {
    const citas = JSON.parse(localStorage.getItem('citas') || '[]');
    return of(citas);
  }

  agregarCita(cita: any): void {
    let citas = JSON.parse(localStorage.getItem('citas') || '[]');
    citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(citas));
  }

  eliminarCita(index: number): void {
    let citas = JSON.parse(localStorage.getItem('citas') || '[]');
    citas.splice(index, 1);
    localStorage.setItem('citas', JSON.stringify(citas));
  }
}
