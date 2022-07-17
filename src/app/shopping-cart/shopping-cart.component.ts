import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productMap = new Map<Product, number>()
  totalPrice : number = 0;

  constructor(private shoppingService : ShoppingService) { 
    this.productMap = shoppingService.getProducts();
    this.calculateTotal();
  }

  removeOneItem(product : Product){
    if(this.productMap.get(product)! > 1){
      this.productMap.set(product, this.productMap.get(product)! - 1);
    }
    else{
    this.productMap.delete(product);
    }
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalPrice = 0;
    for(let product of this.productMap.keys()){
      this.totalPrice += product.price * this.productMap.get(product)!;
    }
  }

  ngOnInit(): void {
  }

}
