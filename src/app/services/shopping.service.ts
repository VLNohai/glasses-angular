import { Injectable } from "@angular/core";
import { Product, ProductComponent } from "../product/product.component";
@Injectable({providedIn : "root"})

export class ShoppingService{

    productMap = new Map<Product, number>()

    addProduct(product : Product){
        if(this.productMap.has(product))
            this.productMap.set(product, this.productMap.get(product)! + 1)
        else
            this.productMap.set(product, 1);
    }

    getProducts(){
        return this.productMap;
    }
}