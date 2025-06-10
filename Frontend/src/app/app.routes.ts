import { Routes } from '@angular/router';
import { LoginAdmComponent } from './login-adm/login-adm.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { HorasSellosComponent } from './horas-sellos/horas-sellos.component';

export const routes: Routes = [
  { path: 'login', component: LoginAdmComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'horas-sellos', component: HorasSellosComponent },
  { path: '', redirectTo: '/horas-sellos', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/horas-sellos' } 
];
