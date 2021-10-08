import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '../../models/product.model';

interface Basket {
  quantity: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

  putToCart(): void {
    this.product.quantity = 1;
    let oldCart: Product[] = [];
    if (JSON.parse(localStorage.cart)) {
      oldCart = JSON.parse(localStorage.cart);
    }
    const index = oldCart.findIndex(res => res.id === this.product.id);
    console.log('index', index);
    if (index >= 0) {
      oldCart[index].quantity ++;
    } else {
      oldCart.push(this.product);
    }
    localStorage.setItem('cart', JSON.stringify(oldCart));
  }
}
