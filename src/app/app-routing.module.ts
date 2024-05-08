import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { SearchComponent } from './search/search.component';
import { CitasComponent } from './citas/citas.component';
import { CitaFormularioComponent } from './cita-formulario/cita-formulario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: UnheroeComponent },
  { path: 'buscador/:raza', component: SearchComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'cita-formulario', component: CitaFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
