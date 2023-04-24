import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginService } from './auth/services/login.service';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  { path: '',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [() => inject(LoginService).isLoggedIn]},
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'**', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
