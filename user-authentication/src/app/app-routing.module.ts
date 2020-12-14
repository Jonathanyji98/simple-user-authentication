import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentPortalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
