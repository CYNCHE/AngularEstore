import { ProductService } from './product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() listName: string;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //switch(this.listName)
    this.products = this.productService.getProducts();
  }

}
