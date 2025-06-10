import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginAdmComponent } from './login-adm/login-adm.component'; // ¡Importación correcta!

export const routes: Routes = [
  { path: 'login', component: LoginAdmComponent }, // Ruta para el login
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la raíz a /login
  { path: '**', redirectTo: '/login' } // Opcional: Redirige cualquier ruta no encontrada
];
=======
import { AlumnoComponent } from './alumno/alumno.component';
import { HorasSellosComponent } from './horas-sellos/horas-sellos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alumno', pathMatch: 'full' },
  
  { path: 'alumno', component: AlumnoComponent },
  { path: 'horas-sellos/:rut', component: HorasSellosComponent }
];
>>>>>>> origin/pepeyon
