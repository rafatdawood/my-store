import { CartService } from '../../services/cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() it!: Cart;
  @Output() change: EventEmitter<Cart[]> = new EventEmitter();
  amount: string = "";
  @Input() ca: Cart[] = [];

  constructor(private cartSer: CartService) { }

  ngOnInit(): void {
    this.amount = this.it.amount;
  }

  selectChange(i: Cart) {
    let index = this.ca.indexOf(i);
    this.ca[index] = i;
    this.ca[index].amount = this.amount;
    if (parseInt(this.amount) > 0) {
      this.cartSer.addToCart(this.ca);
      alert(`${i.name} amount updated`);
    }
    else {
      alert(`${i.name} removed fom cart`);
      this.cartSer.removeFromCart(i);
    }
    this.change.emit(this.ca);
    window.location.reload();
  }
}
