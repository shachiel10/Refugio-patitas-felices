import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-cita-formulario',
  templateUrl: './cita-formulario.component.html',
  styleUrls: ['./cita-formulario.component.css']
})
export class CitaFormularioComponent implements AfterViewInit {
  citaForm: FormGroup;
  citasGuardadas: any[] = [];
  mostrarCamposMascota: boolean = true;

  @ViewChild('alertContainer') alertContainer!: ElementRef;

  constructor(private formBuilder: FormBuilder) {
    this.citaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      fecha: ['', [Validators.required, this.fechaNoPasadaValidator]],
      hora: ['', Validators.required],
      mascotas: ['si'], // Valor predeterminado
    });

    // Cargar citas guardadas del localStorage
    const citasGuardadasString = localStorage.getItem('citasGuardadas');
    if (citasGuardadasString) {
      this.citasGuardadas = JSON.parse(citasGuardadasString);
    }
  }

  ngAfterViewInit() {
    // Verificar si el elemento alertContainer está disponible
    if (this.alertContainer) {
      // Realizar operaciones de inicialización que dependen del elemento alertContainer aquí
    }
  }

  enviarCita() {
    if (this.citaForm.invalid) {
      return;
    }

    const nuevaCita = {
      nombre: this.citaForm.value.nombre,
      telefono: this.citaForm.value.telefono,
      direccion: this.citaForm.value.direccion,
      fecha: this.citaForm.value.fecha,
      hora: this.citaForm.value.hora,
      mascotas: this.citaForm.value.mascotas,
      // Nuevos campos para los datos de la mascota
      edad: this.citaForm.value.edad,
      color: this.citaForm.value.color,
      raza: this.citaForm.value.raza,
      tiempoRefugio: this.citaForm.value.tiempoRefugio,
      descripcionComportamiento: this.citaForm.value.descripcionComportamiento,
      estado: 'pendiente' // Establecer el estado como pendiente
    };

    // Verificar si hay una cita existente para la misma fecha, hora y estado
    const citaExistente = this.citasGuardadas.find(cita => cita.fecha === nuevaCita.fecha && cita.hora === nuevaCita.hora && cita.estado === 'pendiente');
    if (citaExistente) {
      this.mostrarAlerta('Ya hay una cita pendiente agendada para esta fecha y hora.', 'alert-warning');
      return;
    }

    this.citasGuardadas.push(nuevaCita);
    localStorage.setItem('citasGuardadas', JSON.stringify(this.citasGuardadas));

    this.citaForm.reset();

    // Mostrar mensaje de alerta
    this.mostrarAlerta('La cita se ha agendado correctamente.', 'alert-success');
  }

  fechaNoPasadaValidator(control: AbstractControl) {
    const inputDate = new Date(control.value);
    const today = new Date();
    if (inputDate < today) {
      return { 'fechaPasada': true };
    }
    return null;
  }

  toggleCamposMascota() {
    const tieneMascotasControl = this.citaForm.get('mascotas');
    if (tieneMascotasControl && tieneMascotasControl.value === 'si') {
      this.mostrarCamposMascota = true;
    } else {
      this.mostrarCamposMascota = false;
    }
  }

  mostrarAlerta(mensaje: string, clase: string) {
    const alertElement = document.createElement('div');
    alertElement.className = `alert ${clase} alert-dismissible fade show`;
    alertElement.role = 'alert';
    alertElement.innerHTML = `
      ${mensaje}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
    this.alertContainer.nativeElement.appendChild(alertElement);
    setTimeout(() => {
      alertElement.remove();
    }, 5000); // Elimina la alerta después de 5 segundos
  }
}
