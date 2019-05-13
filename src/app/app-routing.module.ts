import { VisitorComponent } from './visitor/visitor.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { ProductPageComponent } from './product-list/product-page/product-page.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './visitor/home/home.component';



const routes: Routes = [
  { path:'', component: VisitorComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'products/:productId', component: ProductPageComponent },
  ] },

  { path:'auth', component: AuthComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ] },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
