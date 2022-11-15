import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Product';
import { Cart } from '../../models/cart';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  pros!: Product[];
  product!: Product;
  amount = '1';
  id = 0;
  count = ['1', '2', '3', '4', '5'];

  constructor(private rou: ActivatedRoute, private caser: CartService, private proservis: ProductService) { }

  ngOnInit(): void {
    this.rou.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.proservis.getProducts().subscribe((res) => {
      this.pros = res;
      this.product = this.pros.filter((item) => item.id === this.id)[0];
    });
  }

  onSubmit(): void {
    const cartItems: Cart[] = this.caser.getCartItems();
    let i_m = cartItems.find(item => item.id === this.product.id);
    if (i_m) {
      i_m.amount = this.amount;
      i_m ? this.caser.addToCart(cartItems) : null;
      alert(`updated`);
    } else {
      cartItems.push(Object.assign(this.product, { amount: this.amount }));
      this.caser.addToCart(cartItems);
      alert(`${this.product?.name
        } has been added to your cart.`);
    }
  }

}
