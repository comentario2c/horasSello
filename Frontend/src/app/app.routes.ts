import { Routes } from '@angular/router';
import { LoginAdmComponent } from './login-adm/login-adm.component'; // ¡Importación correcta!

export const routes: Routes = [
  { path: 'login', component: LoginAdmComponent }, // Ruta para el login
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la raíz a /login
  { path: '**', redirectTo: '/login' } // Opcional: Redirige cualquier ruta no encontrada
];