import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // carousel index starts with 1
  curIndex = 1;

  products: Product[] = [
    { id: '1', name: 'computer', imageUrl: 'https://picsum.photos/2000/500?image=66'},
    { id: '2', name: 'shoes', imageUrl: 'https://picsum.photos/2000/500?image=88'},
    { id: '3', name: 'cars', imageUrl: 'https://picsum.photos/2000/500?image=100'},
  ]

  constructor() { }

  ngOnInit() {
  }

  onClickPrev() {
    if (this.curIndex > 1) --this.curIndex;
    else this.curIndex = 3;
    console.log(this.curIndex);
  }

  onClickNext() {
    if (this.curIndex < 3) ++this.curIndex;
    else this.curIndex = 1;
    console.log(this.curIndex);
  }

}
