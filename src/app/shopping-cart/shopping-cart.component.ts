import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../product/product.component';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productMap = new Map<Product, number>()

  constructor(private shoppingService: ShoppingService) {

  }

  removeOneItem(product: Product) {

    if (this.productMap.get(product)! > 1) {
      this.productMap.set(product, this.productMap.get(product)! - 1);
    }
    else {
      this.productMap.delete(product);
    }
    this.productMap = this.productMap;
  }

  ngOnInit(): void {
    this.productMap = this.shoppingService.getProducts();
  }

}
