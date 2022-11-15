import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  local_storage = window.localStorage;
  constructor() { }

  getCartItems(): Cart[] | [] {
    let carti_tems = this.local_storage.getItem('cart');
    return carti_tems ? JSON.parse(carti_tems) : [];
  }

  addToCart(cart_prodact: Cart[]): void {
    this.local_storage.setItem('cart', JSON.stringify(cart_prodact));
  }
  removeFromCart(cart_pro: Cart): void {
    let cartpros = this.getCartItems().filter(item => item.id !== cart_pro.id);
    this.clearCart();
    this.addToCart(cartpros);
  }

  clearCart(): void {
    this.local_storage.clear();
  }
}
