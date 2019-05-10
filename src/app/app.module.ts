import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { CartToolComponent } from './shared/cart-tool/cart-tool.component';
import { ProductPageComponent } from './product-list/product-page/product-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommentComponent } from './product-list/comment/comment.component';
import { StarComponent } from './shared/star/star.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ProductListComponent,
    FooterComponent,
    ProductDetailComponent,
    HomeComponent,
    CartToolComponent,
    ProductPageComponent,
    CommentComponent,
    StarComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
