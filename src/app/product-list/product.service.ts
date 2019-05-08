import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id: '1', name: 'razor blade', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg'},
    {id: '2', name: 'RoG G704', imageUrl: 'https://www.excaliberpc.com/images/688496_5/large.jpg'},
    {id: '3', name: 'computer', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg'},
    {id: '4', name: 'computer', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg'},
    {id: '5', name: 'computer', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg'},
    {id: '6', name: 'computer', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg'},
    {id: '7', name: 'computer', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg'},
    {id: '8', name: 'computer', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61xwRm1JNcL._SX425_.jpg'},
  ]

  constructor() { }


  getProducts() {
    return this.products;
  }
}
