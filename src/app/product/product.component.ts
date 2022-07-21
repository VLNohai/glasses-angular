import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ShoppingService } from '../services/shopping.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  stock : Product [] = [];
  productsOnDisplay : Product [] = [];
  minValue : number = 0;
  maxValue : number = 1000;
  sortCriteriaID : number = 0;
  categoryDisplayed : string = 'glasses';

  sortCriterias = [{
    description : 'Price ascending',
    id : 0
  },
  {
    description : 'Price descending',
    id : 1
  }]

  prodCategories = [
    "glasses",
    "case",
    "lenses"
  ]

  options: Options = {
    floor: 0,
    ceil: 50,
    translate: (value: number): string => {
      return '€' + value;
    },
    combineLabels: (minValue: string, maxValue: string): string => {
      return 'from ' + minValue + ' up to ' + maxValue;
    }
  };

  constructor(private productService : ProductService, private shoppingService : ShoppingService) {

   }

  ngOnInit(): void {
    this.stock = this.productService.getProducts();
    this.productsOnDisplay = this.stock;
    this.sortResults();
    this.recalculateResults();
  }

  addToCart(product : Product){
    this.shoppingService.addProduct(product);
  }

  recalculateResults(){
    this.productsOnDisplay = [];
    this.stock.forEach(product => {
      if(product.category === this.categoryDisplayed && product.price <= this.maxValue && product.price >= this.minValue)
        this.productsOnDisplay.push(product);
    });
    this.options.ceil = this.productsOnDisplay[this.productsOnDisplay.length - 1].price;
    this.options.floor = this.productsOnDisplay[0].price;
    console.log(this.options.ceil + " " + this.options.floor)
  }

  sortResults() {
    if (this.sortCriteriaID === 0)
      this.productsOnDisplay.sort(function (a, b) {
        return a.price - b.price;
      });
    else
      this.productsOnDisplay.sort(function (a, b) {
        return b.price - a.price;
      });
  }

}

export interface Product{
  id : number;
  title : string;
  description : string;
  price : number;
  imagePath : string;
  category : string;
}

