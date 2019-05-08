import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { Comment } from '../shared/comment.model';

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


  comments: Comment[] = [
    {id: '1', productId: '1', userId: '1', content: 'This computer is very good', publishTime: '21212123231243545'},
    {id: '1', productId: '1', userId: '1', content: 'This computer is very good', publishTime: '2121213122142'},
    {id: '1', productId: '1', userId: '1', content: 'This computer is very good', publishTime: '212123231231212'},
    {id: '1', productId: '1', userId: '1', content: 'This computer is very good', publishTime: '21212126565432'},
    {id: '1', productId: '1', userId: '1', content: 'This computer is very good', publishTime: '212121423432545462'}
  ]

  constructor() { }


  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find((product) => product.id == id);
  }

  getCommentsById(id: string) {
    return this.comments.filter((comment) => comment.productId == id);
  }
}
