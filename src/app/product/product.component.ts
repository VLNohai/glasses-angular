import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingService } from '../services/shopping.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products : Product [] = [];

  constructor(private productService : ProductService, private shoppingService : ShoppingService) {

   }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product : Product){
    this.shoppingService.addProduct(product);
  }

}

export interface Product{
  id : number;
  title : string;
  description : string;
  price : number;
}
