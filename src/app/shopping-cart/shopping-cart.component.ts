import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products : Product [] = [];

  constructor(private shoppingService : ShoppingService) { 
    this.products = shoppingService.getProducts();
  }

  ngOnInit(): void {
  }

}
