import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {

    const id = this.route.snapshot.params['productID'];
    this.product = this.productService.getProductById(id);
  }

}
