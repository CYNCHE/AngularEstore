import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rate: number;
  @Output() public rateChange: EventEmitter<number> = new EventEmitter();
  // by deafault review contains five empty stars
  public stars: number[] = [1, 1, 1, 1, 1];


  @Input() public readonly: boolean = true;

  faStarHalf = faStarHalfAlt;
  faStar = faStar;
  faStarEmpty = faStarEmpty;


  constructor() { }

  ngOnInit() {
    // decide how many full stars and half star
    // use number to indicate the shape of star
    // full star code 1, half star code 2

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log('change');
    // let fullStar = Math.floor(this.rate), halfStar = this.rate % 1;
    // let i = 0;
    // for (; i < fullStar; ++i) this.stars[i] = 1;
    // if (halfStar > 0 && halfStar < 1) {
    //   this.stars[i++] = 2;
    // }
    // for (; i < 5; ++i) this.stars[i] = 0;
    // console.log(this.stars);
  }

  onClickStar(index: number) {
    if (!this.readonly) {
      this.rate = index + 1;
      let fullStar = Math.floor(this.rate), halfStar = this.rate % 1;
      let i = 0;
      for (; i < fullStar; ++i) this.stars[i] = 1;
      if (halfStar > 0 && halfStar < 1) {
        this.stars[i++] = 2;
      }
      for (; i < 5; ++i) this.stars[i] = 0;
      this.rateChange.emit(this.rate);
    }
  }

}
