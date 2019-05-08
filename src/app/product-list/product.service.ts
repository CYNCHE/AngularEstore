import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id: '1', name: 'Razor Blade', price: '3400', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg', rate: '4.3'},
    {id: '2', name: 'RoG G704', price: '2800', imageUrl: 'https://www.excaliberpc.com/images/688496_5/large.jpg', rate: '4.3'},
    {id: '3', name: 'computer', price: '3400', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg', rate: '4.3'},
    {id: '4', name: 'computer', price: '3400', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg', rate: '4.3'},
    {id: '5', name: 'computer', price: '3400', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg', rate: '4.3'},
    {id: '6', name: 'computer', price: '3400', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg', rate: '4.3'},
    {id: '7', name: 'computer', price: '3400', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg', rate: '4.3'},
    {id: '8', name: 'computer', price: '3400', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg', rate: '4.3'},
  ]

  constructor() { }


  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find((product) => product.id == id);
  }
}
