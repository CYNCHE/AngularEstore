import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  // carousel index starts with 1
  curIndex = 0;

  products: Product[] = [
    { id: '1', name: 'computer', price: '3800', imageUrl: 'https://picsum.photos/2000/500?image=66', rate: '4.3'},
    { id: '2', name: 'shoes', price: '3800', imageUrl: 'https://picsum.photos/2000/500?image=88', rate: '4.3'},
    { id: '3', name: 'cars', price: '3800', imageUrl: 'https://picsum.photos/2000/500?image=100', rate: '4.3'},
  ]

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.curIndex < 2) ++this.curIndex;
      else this.curIndex = 0;
      console.log(this.curIndex);
    }, 5000);
  }

  onClickPrev() {
    if (this.curIndex > 0) --this.curIndex;
    else this.curIndex = 2;
    console.log(this.curIndex);
  }

  onClickNext() {
    if (this.curIndex < 2) ++this.curIndex;
    else this.curIndex = 0;
    console.log(this.curIndex);
  }

}
