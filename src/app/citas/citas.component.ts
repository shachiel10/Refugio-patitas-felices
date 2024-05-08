import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  citasGuardadas: any[] = [];
  citasFiltradas: any[] = [];
  fechaFiltro: string = '';
  horaFiltro: string = '';
  estadoFiltro: string = 'todos';

  constructor() { }

  ngOnInit(): void {
    this.actualizarEstadoCitas();
  }

  actualizarEstadoCitas(): void {
    const citasGuardadasString = localStorage.getItem('citasGuardadas');
    if (citasGuardadasString) {
      this.citasGuardadas = JSON.parse(citasGuardadasString);
      // Convertir el formato de la hora de 24 horas a 12 horas y actualizar estado de las citas
      this.citasGuardadas.forEach(cita => {
        cita.hora = this.convertirHora(cita.hora);
        cita.estado = this.obtenerEstadoCita(cita.fecha, cita.hora); // Actualizar estado de la cita
        cita.mostrarMas = false; // Inicializar la propiedad mostrarMas en false
      });
      this.filtrarCitas(); // Filtrar citas después de actualizar los estados
    }
  }

  convertirHora(hora24: string): string {
    const horaSplit = hora24.split(':');
    let horas = parseInt(horaSplit[0]);
    const minutos = horaSplit[1];
    let ampm = 'AM';

    if (horas >= 12) {
      ampm = 'PM';
      if (horas > 12) {
        horas -= 12;
      }
    }
    
    // Agregar un cero inicial si es necesario
    const horasStr = horas < 10 ? '0' + horas : horas.toString();
    
    return horasStr + ':' + minutos + ' ' + ampm;
  }

  obtenerEstadoCita(fechaCita: string, horaCita: string): string {
    const fechaHoraCita = new Date(fechaCita + 'T' + horaCita);
    const fechaHoraActual = new Date();

    if (fechaHoraCita < fechaHoraActual) {
      return 'Realizada';
    } else {
      return 'Pendiente';
    }
  }

  toggleMostrarMas(cita: any): void {
    cita.mostrarMas = !cita.mostrarMas;
  }

  filtrarCitas(): void {
    this.citasFiltradas = this.citasGuardadas.filter(cita => {
      let cumpleFecha = true;
      let cumpleHora = true;
      let cumpleEstado = true;

      // Filtrar por fecha si se proporciona una fecha válida
      if (this.fechaFiltro) {
        const fechaCita = new Date(cita.fecha);
        const fechaFiltro = new Date(this.fechaFiltro);
        cumpleFecha = fechaCita.toDateString() === fechaFiltro.toDateString();
      }

      // Filtrar por hora si se proporciona una hora válida
      if (this.horaFiltro) {
        const horaFiltroParts = this.horaFiltro.split(':');
        const horaFiltroEnMinutos = parseInt(horaFiltroParts[0]) * 60 + parseInt(horaFiltroParts[1]);

        const horaCitaParts = cita.hora.split(':');
        const horaCitaEnMinutos = parseInt(horaCitaParts[0]) * 60 + parseInt(horaCitaParts[1]);

        cumpleHora = horaCitaEnMinutos === horaFiltroEnMinutos;
      }

      // Filtrar por estado
      if (this.estadoFiltro === 'realizadas') {
        cumpleEstado = cita.estado === 'Realizada';
      } else if (this.estadoFiltro === 'pendientes') {
        cumpleEstado = cita.estado === 'Pendiente';
      }

      // Devolver true solo si la cita cumple con los criterios de fecha, hora y estado
      return cumpleFecha && cumpleHora && cumpleEstado;
    });
  }
}
