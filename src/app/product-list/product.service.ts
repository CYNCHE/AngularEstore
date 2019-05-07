import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id: '1', name: 'razor blade', imageUrl: 'https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png'},
    {id: '2', name: 'RoG G704', imageUrl: 'https://www.excaliberpc.com/images/688496_5/large.jpg'},
    {id: '3', name: 'computer', imageUrl: 'https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png'},
    {id: '4', name: 'computer', imageUrl: 'https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png'},
    {id: '5', name: 'computer', imageUrl: 'https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png'},
    {id: '6', name: 'computer', imageUrl: 'https://assets.razerzone.com/eeimages/products/26727/razer-blade-hero-laptop-v3.png'},
  ]

  constructor() { }


  getProducts() {
    return this.products;
  }
}
