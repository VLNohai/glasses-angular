import { Injectable } from "@angular/core";
import { Product } from "../product/product.component";
@Injectable({providedIn : "root"})

export class ShoppingService{
    products : Product[] = []

    addProduct(product : Product){
        this.products.push(product);
    }

    getProducts(){
        return this.products;
    }
}