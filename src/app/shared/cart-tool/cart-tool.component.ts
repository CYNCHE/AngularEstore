import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-tool',
  templateUrl: './cart-tool.component.html',
  styleUrls: ['./cart-tool.component.css']
})
export class CartToolComponent implements OnInit {

  shoppingCartForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.shoppingCartForm = new FormGroup({
      'quantity': new FormControl(1)
    });
  }

  // user press the minus button
  onClickMinus() {
    const quantity = this.shoppingCartForm.value.quantity;
    if (quantity > 1) {
      this.shoppingCartForm.patchValue({
        'quantity': quantity - 1
      });
    }
  }

  // user press the add button
  onClickAdd() {
    const quantity = this.shoppingCartForm.value.quantity;
    if (quantity > 0) {
      this.shoppingCartForm.patchValue({
        'quantity': quantity + 1
      });
    }
  }

}
