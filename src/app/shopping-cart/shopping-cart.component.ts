import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { map, toArray } from 'rxjs';
import { Product } from '../product/product.component';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productMap = new Map<Product, number>();
  totalPrice : number = 0;

  constructor(private shoppingService: ShoppingService) {

  }

  removeOneItem(product: Product) {

    if (this.productMap.get(product)! > 1) {
      this.productMap.set(product, this.productMap.get(product)! - 1);
    }
    else {
      this.productMap.delete(product);
    }
    this.totalPrice -= product.price;
  }

  ngOnInit(): void {
    this.productMap = this.shoppingService.getProducts();
    this.totalPrice = 0;
    let productArray = Array.from(this.productMap.keys());
    for(let i=0; i< productArray.length; i++){
      this.totalPrice += productArray[i].price * this.productMap.get(productArray[i])!;
    }
  }

}
