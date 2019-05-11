import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { ProductPageComponent } from './product-list/product-page/product-page.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'products/:productId', component: ProductPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
