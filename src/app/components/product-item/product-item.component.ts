import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  amount = '2';
  count = ['1', '2', '3', '4', '5'];


  constructor(private cartser: CartService) { }


  ngOnInit(): void {
  }

  onSubmt(): void {

    let cartItems: Cart[] = this.cartser.getCartItems();
    let items = cartItems.find(items => items.id === this.product.id);


    if (items) {
      items.amount = this.amount;
      items ? this.cartser.addToCart(cartItems) : null;
      alert(`updated`);
    } else {
      cartItems.push(Object.assign(this.product, { amount: this.amount }));
      this.cartser.addToCart(cartItems);
      alert(`${this.product.name} has been added to your cart.`);
    }


  }
}
