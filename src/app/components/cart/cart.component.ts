import { Cart } from '../../models/cart';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ct: Cart[] = [];
  tp: number = 0;
  constructor(private cS: CartService, private rou: Router) { }

  ngOnInit(): void {
    this.ct = this.cS.getCartItems();
    this.calculateTotal();
  }


  calculateTotal(): void {
    this.ct = this.cS.getCartItems();
    this.tp = this.ct.reduce((tot, item) => {
      this.tp = parseFloat(
        (tot + item.price * Number(item.amount)).toFixed(2)
      );
      return this.tp;
    }, 0);
  }
  onSubmit(name: string) {
    this.cS.clearCart();
    this.rou.navigate([`confirm/${name}/${this.tp}`]);
  }
}
