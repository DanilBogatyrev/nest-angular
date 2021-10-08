import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/models/product.model';
import { CartService } from './cart.service';
import { CartToSend } from './model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  cart: Product[];
  cartToSend: CartToSend = {
    mail: '',
    cart: []
  };
  displayedColumns: string[] = ['title', 'price', 'number', 'sum'];

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.restoreCart();
  }

  restoreCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  clearCart(): void {
    localStorage.cart = null;
    this.restoreCart();
  }

  sendCart(): void {
    this.cartToSend.mail = this.form.value.email;
    this.cartToSend.cart = this.cart.map(product => ({ id: product.id, quantity: product.quantity }));
    console.log('mail', this.form.value.email);
    console.log('cart', this.cart);
    console.log('cart to send', this.cartToSend);
    this.cartService.sendCart(this.cartToSend).subscribe(console.log);
  }
}
