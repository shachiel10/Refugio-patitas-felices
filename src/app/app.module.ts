import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule

import { AppComponent } from './app.component';
import { CitaFormularioComponent } from './cita-formulario/cita-formulario.component';
import { FechaSelectorComponent } from './fecha-selector/fecha-selector.component';
import { CitasComponent } from './citas/citas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { DomseguroPipe } from './domseguro.pipe';
import { HeroeService } from './shared/heroe.service';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CitaFormularioComponent,
    FechaSelectorComponent,
    CitasComponent,
    DetallesComponent,
    HomeComponent,
    DomseguroPipe,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    AppRoutingModule, // Importa AppRoutingModule en lugar de solo RouterModule
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
