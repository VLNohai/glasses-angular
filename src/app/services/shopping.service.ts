import { Injectable } from "@angular/core";
import { Product, ProductComponent } from "../product/product.component";
@Injectable({providedIn : "root"})

export class ShoppingService{

    productMap = new Map<Product, number>()
    orders : { products : Map<Product, number>, date : string}[] = [];

    addProduct(product : Product){
        if(this.productMap.has(product))
            this.productMap.set(product, this.productMap.get(product)! + 1)
        else
            this.productMap.set(product, 1);
    }

    getProducts(){
        return this.productMap;
    }

    addOrder(products : Map<Product, number>, date : string){
        this.orders.push({products, date});
    }
}