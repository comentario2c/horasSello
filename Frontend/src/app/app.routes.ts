import { Routes } from '@angular/router';
import { LoginAdmComponent } from './login-adm/login-adm.component'; // ¡Importación correcta!
import { AlumnoComponent } from './alumno/alumno.component';
import { HorasSellosComponent } from './horas-sellos/horas-sellos.component';

export const routes: Routes = [
  { path: 'login', component: LoginAdmComponent }, // Ruta para el login
  { path: 'alumno', component: AlumnoComponent },
  { path: 'horas-sellos', component: HorasSellosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la raíz a /login
  { path: '**', redirectTo: '/login' } // Opcional: Redirige cualquier ruta no encontrada
];