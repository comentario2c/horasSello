import { Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { HorasSellosComponent } from './horas-sellos/horas-sellos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alumno', pathMatch: 'full' },
  
  { path: 'alumno', component: AlumnoComponent },
  { path: 'horas-sellos/:rut', component: HorasSellosComponent }
];
